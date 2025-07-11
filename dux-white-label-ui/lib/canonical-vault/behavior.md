# Object Definition: Behavior

## ✓ Purpose & Strategic Role
A `Behavior` object describes a specific action or change a user could take, or a system could enable, to address a `Problem`. It is the "how" in an insight chain, representing a testable hypothesis about a valuable change.

## ✓ "What would you say... you do here?"
I am the proposed change. I connect a user's problem to a potential solution by describing a new way of working or a new capability that could be introduced.

## ✓ Why the Object Matters
The `Behavior` object translates an abstract problem into a concrete, actionable idea. It allows teams to frame potential solutions as hypotheses that can be prototyped, tested, and measured, ensuring that development effort is focused on creating valuable changes for users.

## ✓ Schema Attributes table
| Attribute | Type | Description | Required |
|---|---|---|---|
| `id` | string | Unique identifier for the behavior (e.g., "B001"). | Yes |
| `object_type` | "behavior" | The type of the object. | Yes |
| `job_statement` | string | A concise statement of the proposed change or action. | Yes |
| `task_description` | string | A detailed description of how the behavior would work in practice. | Yes |
| `success_metrics` | string[] | Quantifiable metrics to measure the success of this behavior. | Yes |
| `evidence_maturity` | "low" \| "medium" \| "high" | The confidence level in the evidence supporting this behavior. | Yes |
| `provenance` | Provenance[] | An array of evidence objects that validate this behavior. | Yes |

## ✓ Canonical Example (Schema-Compliant)
\`\`\`json
\{
  "id": "B001",
  "object_type": "behavior",
  "job_statement": "Automate the generation of a 'maturity score' for each piece of evidence.",
  "task_description": "Develop an algorithm that analyzes provenance metadata (source_type, recency, tags) to assign a quantitative maturity score, and display this score clearly in the UI.",
  "success_metrics": [
    "Reduce time-to-triage for new evidence by 50%",
    "Increase stakeholder confidence score in insights by 25%"
  ],
  "evidence_maturity": "medium",
  "provenance": [
    \{ "id": "E003", "source_type": "internal_workshop", "source_id": "uxr_team_brainstorm_q3" \}
  ]
\}
\`\`\`

## ✓ Structural Role & Usage Notes
- A `Behavior` must be linked to a parent `Problem`.
- It should be specific enough to be testable but not overly prescriptive about the UI implementation.
- `success_metrics` should be measurable and directly related to the `task_description`.

## ✓ Generated JSON Schema
\`\`\`json
\{
  "type": "object",
  "properties": \{
    "id": \{ "type": "string" \},
    "object_type": \{ "type": "string", "const": "behavior" \},
    "job_statement": \{ "type": "string" \},
    "task_description": \{ "type": "string" \},
    "success_metrics": \{ "type": "array", "items": \{ "type": "string" \} \},
    "evidence_maturity": \{ "type": "string", "enum": ["low", "medium", "high"] \},
    "provenance": \{ "type": "array", "items": \{ "$ref": "#/definitions/Provenance" \} \}
  \},
  "required": ["id", "object_type", "job_statement", "task_description", "success_metrics", "evidence_maturity", "provenance"]
\}
