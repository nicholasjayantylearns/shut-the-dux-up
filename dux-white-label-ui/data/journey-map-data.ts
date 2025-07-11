import type { Insight, Problem, Behavior, Result } from "@/types/dux-v9.5"

export const insight: Insight = {
  id: "insight_231",
  name: "Disjointed Governance Slows Multicloud Deployment",
  description: "Disjointed governance structures slow multicloud rollout by delaying orchestration planning.",
  story: "Disjointed governance structures slow multicloud rollout by delaying orchestration planning.",
  problem_id: "problem_105",
  behavior_id: "behavior_203",
  result_id: "result_309",
  user_outcome_id: "useroutcome_placeholder",
  evidence_maturity: "04_balanced",
  updated_at: "2025-07-03T10:00:00Z",
}

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
  result_ids: [],
  useroutcome_ids: [],
  flow_ids: [],
  created_at: "2025-07-03T10:00:00Z",
  updated_at: "2025-07-03T10:00:00Z",
}

export const behavior: Behavior = {
  id: "behavior_203",
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

export const result: Result = {
  id: "result_309",
  name: "Federated governance unifies control points",
  description: "Federated governance spans integration and orchestration to unify control points.",
  owner_team: "Platform Team",
  state: "in_progress",
  percent_behaviors_passing: 0,
  outcome_metrics: {},
  success_criteria: ["Teams align roles before orchestration planning begins."],
  behavior_ids: ["behavior_203"],
  updated_at: "2025-07-03T10:00:00Z",
}
