import type React from "react"
import { AlertTriangle, Zap, CheckCircle, Target, GitBranch, FileText, Lightbulb } from "lucide-react"

export interface Attribute {
  name: string
  type: string
  required?: boolean
}

export interface SchemaDefinition {
  title: string
  icon: React.ReactNode
  color: string
  attributes: Attribute[]
}

export const schemaDefinitions: SchemaDefinition[] = [
  {
    title: "Problem",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    color: "bg-red-50 border-red-200",
    attributes: [
      { name: "object_type", type: '"Problem"', required: true },
      { name: "id", type: "string", required: true },
      { name: "job_statement", type: "string", required: true },
      { name: "end_user", type: "string[]", required: true },
      { name: "what_is_at_stake", type: "string", required: true },
      { name: "protocol_url", type: "string", required: true },
      { name: "evidence_teaser", type: "string", required: true },
      { name: "evidence_maturity", type: "string", required: true },
      { name: "evidence", type: "string[]", required: true },
      { name: "result_ids", type: "object[]", required: true },
      { name: "useroutcome_ids", type: "object[]", required: true },
      { name: "flow_ids", type: "object[]", required: true },
      { name: "created_at", type: "string", required: true },
      { name: "updated_at", type: "string", required: true },
      { name: "name", type: "string" },
      { name: "description", type: "string" },
      { name: "opportunity_score", type: "number" },
    ],
  },
  {
    title: "Behavior",
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50 border-blue-200",
    attributes: [
      { name: "id", type: "string", required: true },
      { name: "name", type: "string", required: true },
      { name: "description", type: "string", required: true },
      { name: "end_user", type: "string", required: true },
      { name: "test_status", type: "enum", required: true },
      { name: "state", type: "enum", required: true },
      { name: "percent_steps_passing", type: "number", required: true },
      { name: "acceptance_criteria", type: "string[]", required: true },
      { name: "linked_issue_ids", type: "string[]", required: true },
      { name: "updated_at", type: "string", required: true },
      { name: "object_type", type: "string" },
      { name: "tags", type: "string[]" },
      { name: "key", type: "boolean" },
      { name: "user_enablement", type: "string" },
      { name: "behavior_type", type: "string" },
      { name: "signals", type: "string[]" },
    ],
  },
  {
    title: "Result",
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    color: "bg-green-50 border-green-200",
    attributes: [
      { name: "id", type: "string", required: true },
      { name: "name", type: "string", required: true },
      { name: "description", type: "string", required: true },
      { name: "owner_team", type: "string", required: true },
      { name: "state", type: "enum", required: true },
      { name: "percent_behaviors_passing", type: "number", required: true },
      { name: "outcome_metrics", type: "Record<string, string>", required: true },
      { name: "success_criteria", type: "string[]", required: true },
      { name: "behavior_ids", type: "string[]", required: true },
      { name: "updated_at", type: "string", required: true },
      { name: "object_type", type: "string" },
      { name: "tags", type: "string[]" },
      { name: "target_impact", type: "string" },
    ],
  },
  {
    title: "UserOutcome",
    icon: <Target className="w-6 h-6 text-orange-600" />,
    color: "bg-orange-50 border-orange-200",
    attributes: [
      { name: "object_type", type: '"UserOutcome"', required: true },
      { name: "id", type: "string", required: true },
      { name: "name", type: "string", required: true },
      { name: "description", type: "string", required: true },
      { name: "end_user", type: "string", required: true },
      { name: "source_behavior_ids", type: "string[]", required: true },
      { name: "key_signals", type: "string[]", required: true },
      { name: "outcome_metrics", type: "Record<string, string>", required: true },
      { name: "updated_at", type: "string", required: true },
    ],
  },
  {
    title: "Flow",
    icon: <GitBranch className="w-6 h-6 text-teal-600" />,
    color: "bg-teal-50 border-teal-200",
    attributes: [
      { name: "object_type", type: '"Flow"', required: true },
      { name: "id", type: "string", required: true },
      { name: "name", type: "string", required: true },
      { name: "description", type: "string", required: true },
      { name: "user_scenario", type: "string", required: true },
      { name: "flow_type", type: "enum", required: true },
      { name: "linked_problem_ids", type: "string[]", required: true },
      { name: "linked_user_outcome_ids", type: "string[]", required: true },
      { name: "behavior_sequence", type: "string[]", required: true },
      { name: "updated_at", type: "string", required: true },
    ],
  },
  {
    title: "Provenance",
    icon: <FileText className="w-6 h-6 text-yellow-600" />,
    color: "bg-yellow-50 border-yellow-200",
    attributes: [
      { name: "object_type", type: '"Provenance"', required: true },
      { name: "id", type: "string", required: true },
      { name: "evidence_block", type: "object", required: true },
      { name: "created_at", type: "string", required: true },
    ],
  },
  {
    title: "Insight",
    icon: <Lightbulb className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-50 border-purple-200",
    attributes: [
      { name: "id", type: "string", required: true },
      { name: "name", type: "string", required: true },
      { name: "insight_story_block", type: "string", required: true },
      { name: "problem_id", type: "string", required: true },
      { name: "behavior_id", type: "string", required: true },
      { name: "result_id", type: "string", required: true },
      { name: "user_outcome_id", type: "string", required: true },
      { name: "evidence_maturity", type: "enum", required: true },
      { name: "updated_at", type: "string", required: true },
      { name: "insight_teaser", type: "string" },
      { name: "insight_chain", type: "string[]" },
      { name: "related_objects", type: "object[]" },
    ],
  },
]
