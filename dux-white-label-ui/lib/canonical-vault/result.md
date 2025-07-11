# Object Definition: Result

## ✓ Purpose & Strategic Role
A `Result` object describes the specific, measurable outcome that is expected if a `Behavior` is successfully adopted. It is the "so what?" in an insight chain, quantifying the value created by solving the `Problem`.

## ✓ "What would you say... you do here?"
I am the proof of value. I connect a proposed change (`Behavior`) to a meaningful business or user impact, making the value proposition of an insight clear and compelling.

## ✓ Why the Object Matters
The `Result` object ensures that product development is impact-driven. It forces teams to define what success looks like upfront, providing clear, measurable goals. This transforms insights from interesting observations into powerful business cases that justify investment and drive strategic alignment.

## ✓ Schema Attributes table
| Attribute | Type | Description | Required |
|---|---|---|---|
| `id` | string | Unique identifier for the result (e.g., "R001"). | Yes |
| `object_type` | "result" | The type of the object. | Yes |
| `job_statement` | string | A concise statement of the expected outcome. | Yes |
| `result_description` | string | A detailed description of the impact on users or the business. | Yes |
| `impact_metrics` | string[] | Key performance indicators (KPIs) that will be affected. | Yes |
| `evidence_maturity` | "low" \| "medium" \| "high" | The confidence level in the evidence supporting this result. | Yes |
| `provenance` | Provenance[] | An array of evidence objects that validate this result. | Yes |

## ✓ Canonical Example (Schema-Compliant)
\`\`\`json
\{
  "id": "R001",
  "object_type": "result",
  "job_statement": "Achieve a 15% reduction in cloud infrastructure costs within two quarters.",
  "result_description": "By automatically identifying and reclaiming idle GPUs, the platform can significantly lower its operational expenses, freeing up budget for new innovation and improving overall resource efficiency.",
  "impact_metrics": [
    "Cloud Spend (GPU)",
    "Resource Utilization Rate"
  ],
  "evidence_maturity": "low",
  "provenance": [
    \{ "id": "E004", "source_type": "financial_model", "source_id": "finance_team_cost_projection_q3" \}
  ]
\}
\`\`\`

## ✓ Structural Role & Usage Notes
- A `Result` must be linked to a parent `Behavior`.
- `impact_metrics` should be tied to existing business KPIs whenever possible to demonstrate clear value.
- The `Result` completes the narrative of an `Insight`: "If we solve this `Problem` by enabling this `Behavior`, we will achieve this `Result`."

## ✓ Generated JSON Schema
\`\`\`json
\{
  "type": "object",
  "properties": \{
    "id": \{ "type": "string" \},
    "object_type": \{ "type": "string", "const": "result" \},
    "job_statement": \{ "type": "string" \},
    "result_description": \{ "type": "string" \},
    "impact_metrics": \{ "type": "array", "items": \{ "type": "string" \} \},
    "evidence_maturity": \{ "type": "string", "enum": ["low", "medium", "high"] \},
    "provenance": \{ "type": "array", "items": \{ "$ref": "#/definitions/Provenance" \} \}
  \},
  "required": ["id", "object_type", "job_statement", "result_description", "impact_metrics", "evidence_maturity", "provenance"]
\}
