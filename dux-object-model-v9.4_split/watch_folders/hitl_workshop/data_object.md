# 📊 Data Object

## 🎯 Purpose & Strategic Role
A **Data** object represents the atomic unit of research reports, sources, and raw information - a single, discrete piece of evidence or finding extracted from research activities. It serves as the fundamental building block for all research insights, capturing specific quotes, observations, metrics, or findings that can be analyzed and synthesized.

## 🧠 "What would you say... you do here?"
> When I need to capture a specific piece of research evidence or finding, I want to record the atomic unit of information with full context and source attribution, so that I can build traceable evidence chains and support research claims with concrete, verifiable data points.

## 💡 Why the Data Object Matters
- Provides atomic evidence units that can be combined into larger insights
- Enables precise attribution and traceability of research findings
- Supports evidence synthesis and pattern recognition across multiple sources
- Creates the foundation for evidence maturity assessment and quality scoring
- Allows researchers to validate claims through direct reference to source material

## 📋 Schema Attributes
| Field               | Type                           | Required | Description                                                                                  |
|---------------------|--------------------------------|----------|----------------------------------------------------------------------------------------------|
| object_type         | string (const: "Data")         | Yes      | Object type discriminator                                                                    |
| id                  | string                         | Yes      | Unique identifier for this data point                                                        |
| data_type           | string                         | Yes      | Type of data (quote, observation, metric, finding, etc.)                                    |
| content             | string                         | Yes      | The actual data content (quote text, observation notes, metric value, etc.)                 |
| source_session_id   | string                         | Yes      | ID of the Session that generated this data                                                  |
| timestamp_in        | string                         | Yes      | Start time or location within source session                                                |
| timestamp_out       | string                         | Yes      | End time or location within source session                                                  |
| participant_id      | string                         | No       | Identifier of participant who provided this data                                            |
| researcher_notes    | string                         | No       | Additional notes or context from the researcher                                             |
| confidence_level    | string                         | Yes      | Researcher's confidence in this data point (low, medium, high)                              |
| data_tags           | [string]                       | No       | Tags specific to this data point for categorization                                         |
| report_id           | string                         | No       | ID of the Report/DataSet collection this data belongs to                                    |
| transcript_id       | string                         | No       | ID of the Transcript collection this data belongs to                                        |
| tags                | [string]                       | No       | System-derived tags from DUX scan (not manually added)                                      |
| created_at          | string                         | No       | Creation timestamp                                                                           |
| updated_at          | string                         | No       | Last update timestamp                                                                        |

## 📦 Canonical Example (Schema-Compliant)
```json
{
  "object_type": "Data",
  "id": "data_001",
  "data_type": "user_quote",
  "content": "I spend at least 30 minutes every morning just trying to figure out which GPUs are actually being used and which ones are just sitting idle. It's incredibly frustrating.",
  "source_session_id": "session_001",
  "timestamp_in": "00:12:45",
  "timestamp_out": "00:13:20",
  "participant_id": "participant_007",
  "researcher_notes": "Participant showed visible frustration when discussing this topic",
  "confidence_level": "high",
  "data_tags": ["gpu_management", "frustration", "time_waste"],
  "report_id": "report_gpu_management_2025",
  "transcript_id": "transcript_session_001",
  "tags": ["cluster_admin", "gpu_management", "user_quote"],
  "created_at": "2025-01-07T16:20:00Z",
  "updated_at": "2025-01-07T16:20:00Z"
}
```

## 🔗 Structural Role & Usage Notes
- A **Data** object is the atomic unit of evidence that feeds into **Provenance** objects
- Data objects are generated by **Session** objects and can be grouped into **Report** or **Transcript** collections
- Data objects provide the raw material for evidence synthesis and insight generation
- Each data point must be traceable back to its source session for complete auditability
- Data confidence levels help assess evidence quality and maturity
- Data objects can be tagged and categorized to support pattern recognition and synthesis 