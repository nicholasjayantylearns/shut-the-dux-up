# 🖼️ Frame Object

## 🎯 Purpose & Strategic Role
A **Frame** represents the atomic unit of strategy and research focus - a single, discrete lens or perspective through which research data can be analyzed and interpreted. It serves as the strategic context that shapes how evidence is viewed, synthesized, and turned into actionable insights.

## 🧠 "What would you say... you do here?"
> When I need to analyze research data through a specific strategic lens or perspective, I want to apply a focused frame that shapes how evidence is interpreted and synthesized, so that I can generate insights that align with business objectives and strategic priorities.

## 💡 Why the Frame Object Matters
- Provides strategic context for research analysis and insight generation
- Enables focused interpretation of evidence through specific business lenses
- Supports alignment between research findings and strategic objectives
- Creates consistency in how evidence is evaluated and synthesized
- Allows researchers to generate insights that directly inform business decisions

## 📋 Schema Attributes
| Field               | Type                           | Required | Description                                                                                  |
|---------------------|--------------------------------|----------|----------------------------------------------------------------------------------------------|
| object_type         | string (const: "Frame")        | Yes      | Object type discriminator                                                                    |
| id                  | string                         | Yes      | Unique identifier for this frame                                                             |
| frame_name          | string                         | Yes      | Human-readable name for this strategic frame                                                |
| frame_description   | string                         | Yes      | Clear description of what this frame represents and how it shapes analysis                  |
| strategic_context   | string                         | Yes      | The business context or strategic objective this frame addresses                             |
| analysis_questions  | [string]                       | Yes      | Key questions this frame asks of the evidence                                               |
| frame_type          | string                         | Yes      | Type of frame (user_experience, business_impact, technical_feasibility, etc.)              |
| priority_level      | string                         | Yes      | Strategic priority (high, medium, low)                                                      |
| stakeholder_audience| [string]                       | No       | Target audience for insights generated through this frame                                   |
| success_criteria    | [string]                       | No       | Criteria for determining if this frame has been successfully applied                        |
| gallery_id          | string                         | No       | ID of the Report Gallery collection this frame belongs to                                   |
| related_frames      | [string]                       | No       | IDs of related frames that complement or contrast with this one                             |
| tags                | [string]                       | No       | System-derived tags from DUX scan (not manually added)                                      |
| created_at          | string                         | No       | Creation timestamp                                                                           |
| updated_at          | string                         | No       | Last update timestamp                                                                        |

## 📦 Canonical Example (Schema-Compliant)
```json
{
  "object_type": "Frame",
  "id": "frame_001",
  "frame_name": "Admin Efficiency & Productivity",
  "frame_description": "Analyzes evidence through the lens of administrative efficiency, focusing on time savings, workflow optimization, and productivity gains for platform administrators.",
  "strategic_context": "Improving platform administrator productivity to reduce operational overhead and increase satisfaction",
  "analysis_questions": [
    "How much time do admins spend on routine tasks?",
    "What are the biggest productivity blockers?",
    "Which workflows could be automated or streamlined?",
    "What would success look like for admin efficiency?"
  ],
  "frame_type": "user_experience",
  "priority_level": "high",
  "stakeholder_audience": ["product_managers", "platform_team", "executive_leadership"],
  "success_criteria": [
    "Identified specific time-wasting activities",
    "Quantified productivity impact",
    "Generated actionable improvement opportunities"
  ],
  "gallery_id": "gallery_admin_efficiency_2025",
  "related_frames": ["frame_002", "frame_003"],
  "tags": ["admin_efficiency", "productivity", "user_experience"],
  "created_at": "2025-01-07T10:00:00Z",
  "updated_at": "2025-01-07T10:00:00Z"
}
```

## 🔗 Structural Role & Usage Notes
- A **Frame** provides the strategic lens through which **Evidence** objects are analyzed
- Frames can be grouped into **Report Gallery** collections for broader strategic initiatives
- Frames link to **Insight** objects through the Evidence objects they analyze
- Frame analysis questions guide how evidence is interpreted and synthesized
- Multiple frames can be applied to the same evidence to generate different perspectives
- Frame priority levels help researchers focus on the most strategically important analyses 