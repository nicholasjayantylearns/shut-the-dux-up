import type { Problem, Behavior, Result, UserOutcome, Flow } from "@/types/dux-v9.5"

export const problem: Problem = {
  object_type: "Problem",
  id: "problem_000",
  name: "Problem Title Goes Here",
  job_statement: "When [Situation], I want to [Motivation], so I can [Outcome].",
  what_is_at_stake: "A clear, concise description of the risk or loss.",
  end_user: ["End User Persona"],
  tags: ["tag-one", "tag-two"],
  evidence: [],
  evidence_maturity: "04_balanced",
  evidence_teaser: "A short, compelling quote or finding that summarizes the evidence.",
  protocol_url: "#",
  result_ids: [{ id: "result_000", reference_context: "Reference context explaining the link." }],
  useroutcome_ids: [{ id: "useroutcome_000", reference_context: "Reference context explaining the link." }],
  flow_ids: [{ id: "flow_000", reference_context: "Reference context explaining the link." }],
  created_at: "2025-07-03T10:00:00Z",
  updated_at: "2025-07-03T10:00:00Z",
  opportunity_score: 8.7,
}

export const behavior_203: Behavior = {
  id: "behavior_001",
  object_type: "Behavior",
  name: "Behavior Title Goes Here",
  description: "A clear, concise description of the user or system action.",
  end_user: "End User Persona",
  test_status: "passing",
  state: "in_ci",
  percent_steps_passing: 75,
  acceptance_criteria: ["First criterion", "Second criterion"],
  linked_issue_ids: ["ENG-123"],
  updated_at: "2025-07-03T10:00:00Z",
}

export const behavior_204: Behavior = {
  id: "behavior_002",
  object_type: "Behavior",
  name: "Another Behavior Title",
  description: "A clear, concise description of a subsequent user or system action.",
  end_user: "End User Persona",
  test_status: "failing",
  state: "stub",
  percent_steps_passing: 25,
  acceptance_criteria: ["Primary criterion", "Secondary criterion"],
  linked_issue_ids: ["ENG-124"],
  updated_at: "2025-07-03T10:00:00Z",
}

export const result: Result = {
  id: "result_000",
  object_type: "Result",
  name: "Result Title Goes Here",
  description: "A clear, concise description of the measurable outcome.",
  owner_team: "Team Name",
  state: "in_progress",
  percent_behaviors_passing: 50,
  outcome_metrics: { "Key Metric": "Value" },
  success_criteria: ["A clear, measurable success criterion."],
  behavior_ids: ["behavior_001", "behavior_002"],
  updated_at: "2025-07-03T10:00:00Z",
}

export const user_outcome: UserOutcome = {
  id: "useroutcome_000",
  object_type: "UserOutcome",
  name: "User Outcome Title Goes Here",
  description: "A clear, concise description of the value delivered to the user.",
  end_user: "End User Persona",
  source_behavior_ids: ["behavior_002"],
  key_signals: ["First key signal", "Second key signal"],
  outcome_metrics: { "User-Facing Metric": "Value" },
  updated_at: "2025-07-03T10:00:00Z",
}

export const flow: Flow = {
  id: "flow_000",
  object_type: "Flow",
  name: "Flow Title Goes Here",
  description: "A clear, concise description of the end-to-end user flow.",
  user_scenario: "A short narrative describing the user's situation and goal for this flow.",
  flow_type: "golden_path",
  linked_problem_ids: ["problem_000"],
  linked_user_outcome_ids: ["useroutcome_000"],
  behavior_sequence: ["behavior_001", "behavior_002"],
  updated_at: "2025-07-03T10:00:00Z",
}

export const allBehaviors: Record<string, Behavior> = {
  behavior_001: behavior_203,
  behavior_002: behavior_204,
}
