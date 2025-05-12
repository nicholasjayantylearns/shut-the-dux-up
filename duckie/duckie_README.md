# 🐣 Duckie

> _Teach me how to Duckie. Everybody DUX-y._

**Script the outcome. Ship the test. Prioritize with confidence.**

Duckie is a CLI tool for PMs, UX designers, and AI/ML platform teams who want to transform user scenarios into structured, testable, sprint-ready outputs. It automates the creation of `.feature` files, `steps.py` stubs, and GitHub issues to support modern product delivery with fewer meetings, less guesswork, and more validated value.

Duckie started as a duxworx utility designed to automate the creation of GitHub issues from feature files and step definitions. It supports two approaches for parsing and processing files: **Simple Parsing** and **LLM-Enabled Parsing**.

---

### 🧠 Who It's For

**For anyone with a big product idea who needs to turn that vision into bite-sized, testable tasks a team can actually jump in on, sort out, and ship.**

---

### 🎓 Example Scenario

```text
As an ML engineer,
I want to view latency and accuracy trends per model version,
So I can diagnose performance issues quickly.
```

Duckie converts this into:

*   A `.feature` file with structured scenarios
*   A `steps.py` stubbed test file
*   GitHub issues mapped to each step

---

### Key Features:

*   Parse feature files written in Gherkin syntax to extract steps and scenarios.
*   Parse step definition files to extract function names and patterns.
*   Automatically create GitHub issues for missing step implementations and step definition functions.
*   Use an LLM to enhance parsing, generate meaningful issue descriptions, and group related tasks intelligently.
*   Monitor updates to feature files or step definitions and create issues for new or modified steps.

---

### 🔄 Updated Workflow

```bash
duckie teach-me-how-to-duckie
# Author a scenario, generate a .feature file

duckie drop
# Create step definition stubs and GitHub issues

duckie check
# Monitor issue closure; trigger test scenarios

duckie push
# Create a PR to the integration testing repo
```

---

### Key Differences Between Simple Parsing and LLM-Enabled Parsing

| **Aspect**                | **Simple Parsing**                                                                 | **LLM-Enabled Parsing**                                                                 |
|---------------------------|------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| **Feature File Parsing**  | Uses Gherkin parsers to extract structured data (e.g., steps, scenarios).           | Uses an LLM to interpret ambiguous or malformed feature files.                         |
| **Step Definition Parsing** | Uses regex or AST parsing to extract function names and patterns.                  | Uses an LLM to summarize the purpose of each step definition.                          |
| **Issue Descriptions**    | Relies on predefined templates for issue descriptions.                              | Uses an LLM to generate detailed, human-readable descriptions for issues.              |
| **Grouping Steps**        | Groups steps based on predefined rules (e.g., steps in the same scenario).          | Uses an LLM to infer relationships between steps and group them into meaningful tasks.  |
| **Error Handling**        | Logs errors for malformed files and skips processing.                               | Uses an LLM to attempt recovery and extract meaningful data from malformed files.       |

---

### 🔬 Vision

> _"As a PM or designer, I want to describe the user outcome like a movie scene, and have my tools generate the testable structure that enables engineering to deliver it."_

Duckie is the command-line cockpit for outcome-driven teams. It lets you encode behavior, track value, and kill weak bets early. You define the scenario. Duckie structures the delivery.

---

### 🚀 Core Commands

| Command                         | Description                                                   |
| ------------------------------- | ------------------------------------------------------------- |
| `duckie teach-me-how-to-duckie` | Guides you through authoring a Feature + Scenario             |
| `duckie drop`                   | Creates step defs and GitHub issues from your `.feature` file |
| `duckie check`                  | Monitors progress; triggers test issue upon closure           |
| `duckie push`                   | Submits a PR to your integration test repo                    |
| `duckie remix`                  | Uses an LLM to rephrase or refine scenarios                   |
| `duckie vault`                  | (Optional) Private scenario generation mode                   |

---

### 📅 Example CLI Session

```bash
$ duckie teach-me-how-to-duckie
🦆 Let's define your scenario...

? Who is the user?
ML Engineer

? What do they want to do?
View latency and accuracy trends per model version

? Why do they want to do it?
So they can diagnose performance issues quickly

📄 Generated feature file: features/model_observability.feature
```

```bash
$ duckie drop
🪄 Parsing feature file...
✔ Found 1 scenario
✔ Generated 3 undefined step stubs in steps/model_observability_steps.py
✔ Created 3 GitHub issues:
  - [ ] Implement: Given I have deployed model version "v2.3.1"
  - [ ] Implement: When I navigate to the observability dashboard
  - [ ] Implement: Then I should see latency and accuracy metrics

📂 Output ready for review.
```

```bash
$ duckie check
🔍 Checking progress on feature: model_observability.feature

✔ Scenario: View model metrics for a specific version
  ▸ Given I have deployed model version "v2.3.1"           ✅ closed (issue #103)
  ▸ When I navigate to the observability dashboard         ✅ closed (issue #104)
  ▸ Then I should see latency and accuracy metrics         ⏳ still open (issue #105)

🔔 2 of 3 steps implemented
🟡 Feature is partially complete. Test issue not yet triggered.
```

```bash
$ duckie check
🔍 Checking progress on feature: model_observability.feature
✔ All 3 steps complete for scenario: View model metrics for a specific version

🧪 Generated test issue: #106
🧵 Triggered test plan using behave: test_model_observability.py
📦 Test outputs stored in: test-reports/model_observability_report.json
✅ Feature now executable.
```

---

### 🌟 Contributor Mode

*   Custom output formats: Cucumber, Markdown, JSON
*   Plugin system for remix agents
*   Dance mode for contributors: `🕺🦆`

---

**Let the ducks do the scoping. You focus on the outcome.**
