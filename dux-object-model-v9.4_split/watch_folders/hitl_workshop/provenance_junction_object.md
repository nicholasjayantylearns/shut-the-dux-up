# 🧬 Provenance Junction Object

## 🎯 Purpose & Strategic Role
A **Provenance Junction** represents the connection between a **Session** and **Data** object, creating a traceable evidence molecule with freshness assessment. It serves as the bridge that links raw research activities to specific evidence points, enabling complete auditability and evidence maturity tracking.

## 🧠 "What would you say... you do here?"
> When I need to create a traceable link between a research session and the specific data it generated, I want to establish a provenance junction that captures the evidence freshness and context, so that I can assess the quality and reliability of research findings and maintain complete audit trails.

## 💡 Why the Provenance Junction Object Matters
- Creates atomic evidence molecules with full traceability to source sessions
- Enables evidence freshness assessment through maturity scoring
- Provides the foundation for evidence quality evaluation and validation
- Supports evidence synthesis and pattern recognition across multiple sources
- Allows researchers to validate claims through direct reference to original research activities

## 📋 Schema Attributes
| Field               | Type                           | Required | Description                                                                                  |
|---------------------|--------------------------------|----------|----------------------------------------------------------------------------------------------|
| object_type         | string (const: "ProvenanceJunction") | Yes   | Object type discriminator                                                                    |
| id                  | string                         | Yes      | Unique identifier for this provenance junction                                              |
| session_id          | string                         | Yes      | ID of the Session that generated the evidence                                               |
| data_id             | string                         | Yes      | ID of the Data object that contains the evidence                                            |
| evidence_maturity   | string                         | Yes      | System-derived evidence quality tier: 01_assumptive, 02_anecdotal, 03_early_signal, 04_balanced_signal, 05_triangulated |
| evidence_block      | array                          | Yes      | Required array of grouped evidence units — minimum 1 entry to instantiate ProvenanceJunction object |
| evidence_teaser     | string                         | No       | Optional summary of insight hook for pain point, stat, or finding                           |
| confidence_score    | float                          | Yes      | Calculated confidence score based on evidence quality and freshness (0.0-1.0)               |
| triangulation_count | integer                        | No       | Number of independent sources that support this evidence                                     |
| last_validation_date| string                         | No       | Date when this evidence was last validated or reviewed                                       |
| validation_status   | string                         | Yes      | Current validation status (pending, validated, needs_review, invalid)                       |
| tags                | [string]                       | No       | System-derived tags from DUX scan (not manually added)                                      |
| created_at          | string                         | No       | Creation timestamp                                                                           |
| updated_at          | string                         | No       | Last update timestamp                                                                        |

## 📦 Canonical Example (Schema-Compliant)
```json
{
  "object_type": "ProvenanceJunction",
  "id": "provenance_junction_001",
  "session_id": "session_001",
  "data_id": "data_001",
  "evidence_maturity": "03_early_signal",
  "evidence_block": [
    {
      "teaser": "User expresses frustration with GPU management workflow",
      "quote": "I spend at least 30 minutes every morning just trying to figure out which GPUs are actually being used and which ones are just sitting idle. It's incredibly frustrating.",
      "citation": "Participant 7, timestamp 00:12:45",
      "provenance_id": "provenance_junction_001",
      "evidence_type": "user_research_finding",
      "confidence_level": "high"
    }
  ],
  "evidence_teaser": "Users struggle with GPU utilization monitoring and waste significant time on manual resource tracking",
  "confidence_score": 0.85,
  "triangulation_count": 1,
  "last_validation_date": "2025-01-07T16:30:00Z",
  "validation_status": "validated",
  "tags": ["gpu_management", "user_frustration", "time_waste"],
  "created_at": "2025-01-07T16:25:00Z",
  "updated_at": "2025-01-07T16:30:00Z"
}
```

## 🔗 Structural Role & Usage Notes
- A **Provenance Junction** creates the atomic evidence molecule by linking **Session** and **Data** objects
- Evidence maturity is calculated based on the quality and freshness of the source session and data
- Confidence scores help researchers assess the reliability of evidence for decision-making
- Triangulation count tracks how many independent sources support the same evidence
- Validation status ensures evidence quality control and governance
- Provenance junctions provide the foundation for evidence synthesis into larger insights 