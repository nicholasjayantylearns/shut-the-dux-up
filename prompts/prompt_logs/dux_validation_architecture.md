# 🧠 Declarative UX Validation Architecture

This canvas defines the architecture and interaction model for end-to-end DUX compliance, education, and enforcement. It separates synchronous user guidance (DUX Assistant) from background enforcement (DUX Agent), both powered by a unified governance test suite.

---

## 🧱 1. Core Architecture

### 🎯 Purpose

- Ensure that all DUX artifacts (Problems, Behaviors, Results) are:
  - Structurally compliant
  - Traceable from protocol to delivery
  - Testable via `.feature` and `steps.py`
  - Educable in real-time with LLM-enhanced feedback
  - Governed asynchronously with auditable logs

### 👇 Layered System Overview

| Layer      | Component | Function |
| ---------- | --------- | -------- |
| Validation |           |          |

| **Governance Test Suite** | Validates structural compliance with v7.2 object model |                                                                                              |
| ------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| Synchronous               | **DUX Assistant**                                      | Educates user in real-time, suggests fixes, confirms refinements                             |
| Asynchronous              | **DUX Agent**                                          | Audits `.md`, `.feature`, `.py` files and logs recommendations to `DUX-recommendations-log/` |
| Artifact Output           | Slides / Figma / Docs Bridges                          | Emit narrative or visual versions of compliant objects for collaboration                     |

---

## 🧪 2. Governance Test Suite

**Components:**

- `test_problem_objects.py`
- `test_behavior_objects.py`
- `test_result_objects.py`
- `test_dual_traceability.py`
- `test_protocol_integrity.py`

**Validates:**

- Presence of required fields (e.g., `description`, `result_ids`, `acceptance_criteria`)
- Structure compliance with v7.2
- Traceability: Problem → Behavior → Result
- BDD linkages (`linked_bdd_spec_ids`, `linked_issue_ids`)

**Run modes:**

- Manual CLI (`pytest`, `behave`)
- CI/CD hooked
- Called by Assistant/Agent

---

## 🤖 3. DUX Assistant (Foreground)

**Role:** A real-time, LLM-powered validator and refiner that:

- Inspects any Problem, Behavior, or Result object
- Surfaces noncompliant or weak attributes
- Suggests improved versions (e.g., clearer acceptance criteria, better framing)
- Accepts edits → re-validates

**Trigger Points:**

- Inline in chat
- NotebookLM or chatPRD prompt
- CLI prompt-driven walkthrough

**Output Types:**

- Improved `.md` block
- Inline warnings/suggestions
- Regenerated `.feature` + `steps.py`

---

## 🧠 4. DUX Agent (Background)

**Role:** A batch-mode agent that runs nightly or on PR to:

- Audit all `.md`, `.feature`, `.py` artifacts
- Flag drift, missing metrics, or outdated references
- Output issues as Markdown files in:

```
DUX-recommendations-log/
  ├── result_missing_outcome_metrics.md
  ├── behavior_weak_acceptance_criteria.md
  └── problem_missing_evidence_reference.md
```

**Log Format:** Each file includes:

- Summary of issue
- Reference to offending object
- Suggested fix (auto-generated)
- Optional `push to refine` link

---

## 🔗 5. Integration Bridges

**Slides Generator**

- Transforms Result + journey\_sequence into Google Slides narrative deck
- One slide each: JTBD framing, Behavior progression, Metrics snapshot

**Figma Emitter**

- Emits `journey_map.json` or tag-based layout blocks
- Behavior IDs = component labels
- Results = frame-level labels

**Live Edit Bridge**

- Accepts updates made in Docs/Figma/Slides
- Submits as patch suggestions to DUX Assistant for regeneration and re-validation

---

## 🧪 Sample Workflow

1. Author new Result + Behaviors → run `pytest`
2. DUX Assistant flags a weak `acceptance_criteria`
3. User accepts suggestion → regenerates `steps.py`
4. DUX Agent (on next PR) finds that this Result still lacks `nps_goal` and logs it to `DUX-recommendations-log/result_2290_nps_goal_missing.md`
5. Slides + Figma bridges emit updated narrative + visuals
6. Team reviews all changes in Sprint Review using exportable artifacts

---

This dual-system architecture ensures that DUX remains not just enforceable — but explainable, improvable, and deeply integrated with your real collaboration environment.

