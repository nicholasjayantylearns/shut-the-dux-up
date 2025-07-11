# Object Definition: Problem

## ✓ Purpose & Strategic Role
A `Problem` object defines a specific, measurable, and actionable user-centric problem that, if solved, would create significant value. It is the foundational "why" in an insight chain, anchoring all subsequent behaviors and results to a real user need.

## ✓ "What would you say... you do here?"
I am the voice of the user's struggle. I capture what is broken, frustrating, or inefficient in their current experience, framed in a way that is independent of any specific solution.

## ✓ Why the Object Matters
Without a well-defined `Problem`, teams risk building solutions that nobody needs. This object forces clarity on the core issue, aligns stakeholders, and provides a stable benchmark against which potential solutions can be evaluated. It prevents "solutioneering" and grounds product development in validated user pain.

## ✓ Schema Attributes table
| Attribute | Type | Description | Required |
|---|---|---|---|
| `id` | string | Unique identifier for the problem (e.g., "P001"). | Yes |
| `object_type` | "problem" | The type of the object. | Yes |
| `job_statement` | string | A concise, solution-agnostic statement of the user's goal. | Yes |
| `problem_statement` | string | A detailed description of the obstacle preventing the user from achieving their goal. | Yes |
| `user_personas` | string[] | Array of user personas who experience this problem. | Yes |
| `user_pain_points` | string[] | Specific, quoted, or observed pain points. | Yes |
| `evidence_maturity` | "low" \| "medium" \| "high" | The confidence level in the evidence supporting this problem. | Yes |
| `provenance` | Provenance[] | An array of evidence objects that validate this problem. | Yes |

## ✓ Canonical Example (Schema-Compliant)
\`\`\`json
\{
  "id": "P001",
  "object_type": "problem",
  "job_statement": "When I am managing a large-scale ML platform, I want to identify and reclaim underutilized GPU resources, so that I can reduce operational costs without impacting developer productivity.",
  "problem_statement": "Cluster admins lack a centralized view to identify GPUs that are allocated but sitting idle for extended periods. This leads to significant, unnecessary cloud spend and resource hoarding, as there is no safe, automated way to reclaim these resources.",
  "user_personas": ["Cluster Admin", "ML Platform Engineer"],
  "user_pain_points": [
    "Our cloud bill for GPUs is massive, and I have no idea how much of it is waste.",
    "I have to manually SSH into boxes or beg developers on Slack to release GPUs they aren't using."
  ],
  "evidence_maturity": "high",
  "provenance": [
    \{ "id": "E001", "source_type": "user_interview", "source_id": "interview_notes_cluster_admins_q3" \},
    \{ "id": "E002", "source_type": "cost_analysis_report", "source_id": "gcp_billing_report_q3" \}
  ]
\}
\`\`\`

## ✓ Structural Role & Usage Notes
- A `Problem` is the starting point of an `Insight`.
- It should be linked to at least one `Behavior` that represents a potential way to address it.
- The `job_statement` should follow the "Jobs to Be Done" format where possible.

## ✓ Generated JSON Schema
\`\`\`json
\{
  "type": "object",
  "properties": \{
    "id": \{ "type": "string" \},
    "object_type": \{ "type": "string", "const": "problem" \},
    "job_statement": \{ "type": "string" \},
    "problem_statement": \{ "type": "string" \},
    "user_personas": \{ "type": "array", "items": \{ "type": "string" \} \},
    "user_pain_points": \{ "type": "array", "items": \{ "type": "string" \} \},
    "evidence_maturity": \{ "type": "string", "enum": ["low", "medium", "high"] \},
    "provenance": \{ "type": "array", "items": \{ "$ref": "#/definitions/Provenance" \} \}
  \},
  "required": ["id", "object_type", "job_statement", "problem_statement", "user_personas", "user_pain_points", "evidence_maturity", "provenance"]
\}
