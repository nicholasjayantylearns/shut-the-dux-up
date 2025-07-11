import type { Problem, Behavior, Result, UserOutcome, Flow } from "@/types/dux-v9.5"

export const problem: Problem = {
  object_type: "Problem",
  id: "problem_105",
  name: "Unclear governance stalls critical workload migration",
  job_statement:
    "When governance responsibilities are unclear across cloud environments, I can't confidently move critical workloads to multicloud, so our deployments stall or fail.",
  what_is_at_stake: "Deployment stalls or failures",
  end_user: ["Cloud Ops"],
  tags: ["governance", "cloud ops", "orchestration"],
  evidence: [],
  evidence_maturity: "evidence_backed",
  evidence_teaser: "From IBM_MCMP_OM_TLV2.3_2020-1-8.pdf, page 2–3",
  protocol_url: "#",
  result_ids: [
    { id: "result_309", reference_context: "This problem directly prevents achieving federated governance." },
  ],
  useroutcome_ids: [
    { id: "useroutcome_501", reference_context: "Solving this problem is a prerequisite for this outcome." },
  ],
  flow_ids: [{ id: "flow_701", reference_context: "This problem is the starting point for the governance flow." }],
  created_at: "2025-07-03T10:00:00Z",
  updated_at: "2025-07-03T10:00:00Z",
}

export const behavior_203: Behavior = {
  id: "behavior_203",
  object_type: "Behavior",
  name: "Proactively identify governance handoffs during scoping",
  description: "Cloud ops teams proactively identify governance handoffs during initial scoping.",
  end_user: "Cloud Ops",
  test_status: "in-progress",
  state: "stub",
  percent_steps_passing: 0,
  acceptance_criteria: ["Evidence of scoped handoff checklists in kickoff decks"],
  linked_issue_ids: [],
  updated_at: "2025-07-03T10:00:00Z",
}

export const behavior_204: Behavior = {
  id: "behavior_204",
  object_type: "Behavior",
  name: "Define roles in a shared document",
  description: "Teams collaboratively define and agree upon roles in a shared, version-controlled document.",
  end_user: "Cloud Ops",
  test_status: "passing",
  state: "in_ci",
  percent_steps_passing: 100,
  acceptance_criteria: ["Document is linked in the project's central wiki", "All team leads have signed off"],
  linked_issue_ids: ["ENG-850"],
  updated_at: "2025-07-03T10:00:00Z",
}

export const result: Result = {
  id: "result_309",
  object_type: "Result",
  name: "Federated governance unifies control points",
  description: "Federated governance spans integration and orchestration to unify control points.",
  owner_team: "Platform Team",
  state: "in_progress",
  percent_behaviors_passing: 50,
  outcome_metrics: { "Alignment Meetings Required": "2" },
  success_criteria: ["Teams align roles before orchestration planning begins."],
  behavior_ids: ["behavior_203", "behavior_204"],
  updated_at: "2025-07-03T10:00:00Z",
}

export const user_outcome: UserOutcome = {
  id: "useroutcome_501",
  object_type: "UserOutcome",
  name: "Confidently deploy workloads with clear ownership",
  description:
    "Cloud Ops can deploy critical workloads to any environment, knowing exactly who is responsible for each stage of governance.",
  end_user: "Cloud Ops",
  source_behavior_ids: ["behavior_204"],
  key_signals: ["Reduced time-to-deployment", "Fewer support escalations related to ownership"],
  outcome_metrics: { "Deployment Confidence Score": "8/10" },
  updated_at: "2025-07-03T10:00:00Z",
}

export const flow: Flow = {
  id: "flow_701",
  object_type: "Flow",
  name: "Multicloud Governance Alignment",
  description: "The end-to-end flow for establishing clear governance before a multicloud deployment.",
  user_scenario:
    "A Cloud Ops team is tasked with migrating a critical application to a new cloud provider, but is blocked by uncertainty over who manages security policies in the new environment.",
  flow_type: "golden_path",
  linked_problem_ids: ["problem_105"],
  linked_user_outcome_ids: ["useroutcome_501"],
  behavior_sequence: ["behavior_203", "behavior_204"],
  updated_at: "2025-07-03T10:00:00Z",
}

export const allBehaviors: Record<string, Behavior> = {
  behavior_203,
  behavior_204,
}
