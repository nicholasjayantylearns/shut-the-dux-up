import type * as Dux from "@/types/dux-v9.5"

export const mockPersona: Dux.Persona = {
  id: "per-001",
  name: "Javier",
  role: "ML Engineer",
  description: "Builds, deploys, and maintains production-grade ML models.",
  goals: ["Automate ML pipeline deployments", "Reduce model inference latency", "Ensure reproducibility"],
  frustrations: [
    "Manual and error-prone deployment processes",
    "Difficulty debugging pipelines",
    "Lack of resource visibility",
  ],
  key_behaviors: ["Define pipeline in code", "Monitor training jobs", "Version control for models"],
  updated_at: "2024-07-01T10:00:00Z",
  tags: ["kubeflow", "pipelines", "operations"],
}

export const mockProblem: Dux.Problem = {
  id: "prob-001",
  name: "Users can't find GPU resources quickly",
  description:
    "ML Engineers waste significant time searching for available GPU-enabled clusters, delaying critical training jobs.",
  end_user: "ML Engineer",
  opportunity_score: 8.4,
  whats_at_stake: "$2.3M annual productivity loss",
  evidence: ["User interviews", "Support tickets", "Time tracking logs"],
  evidence_teaser: "45+ minutes daily searching for GPU resources across clusters.",
  importance: 9.2,
  satisfaction: 2.1,
  updated_at: "2024-07-01T10:00:00Z",
  tags: ["gpu", "resource-management", "productivity"],
}

export const mockBehavior: Dux.Behavior = {
  id: "beh-001",
  name: "Browse available GPU clusters",
  description:
    "As an ML Engineer, I want to see a centralized dashboard of all GPU clusters to find one with available capacity.",
  end_user: "ML Engineer",
  test_status: "passing",
  state: "released",
  percent_steps_passing: 75,
  key: true,
  acceptance_criteria: ["Show all clusters", "Real-time capacity", "Filter by GPU type"],
  linked_issue_ids: ["ENG-123", "ENG-456"],
  updated_at: "2024-07-01T10:00:00Z",
}

export const mockResult: Dux.Result = {
  id: "res-001",
  name: "Reduce GPU discovery time",
  description: "Enable ML Engineers to find and allocate a suitable GPU for their training job in under 2 minutes.",
  owner_team: "Platform Engineering",
  state: "in_progress",
  percent_behaviors_passing: 68,
  outcome_metrics: { "Avg Discovery Time": "4.2 min", "User Satisfaction": "7.2/10" },
  success_criteria: ["< 2 min discovery time", "> 8.5 satisfaction score"],
  behavior_ids: ["beh-001", "beh-002", "beh-003"],
  updated_at: "2024-07-01T10:00:00Z",
  tags: ["performance", "gpu", "optimization"],
}

export const mockJourney: Dux.Journey = {
  id: "jour-001",
  name: "Deploying a new training pipeline",
  description:
    "The end-to-end process an ML Engineer follows to take a new model from code to a scheduled training pipeline.",
  persona_id: "per-001",
  entry_point: "User has a new model script in a git repository.",
  steps: [
    { name: "Define Pipeline", description: "Use Kubeflow Pipelines SDK to define steps." },
    { name: "Compile Pipeline", description: "Compile the Python script into a YAML file." },
    { name: "Upload to Kubeflow", description: "Upload the pipeline via the Kubeflow UI." },
    { name: "Create Experiment", description: "Start a run of the pipeline." },
  ],
  success_metrics: ["Time to first run < 30 mins", "Successful run rate > 95%"],
  updated_at: "2024-07-01T10:00:00Z",
  tags: ["kubeflow", "cicd", "e2e"],
}

export const mockUserOutcome: Dux.UserOutcome = {
  id: "uo-001",
  object_type: "UserOutcome",
  name: "Faster GPU resource discovery",
  description: "ML Engineers can find and allocate suitable GPU resources in under 2 minutes.",
  end_user: "ML Engineer",
  source_behavior_ids: ["beh-001"],
  key_signals: ["Reduced discovery time", "Higher satisfaction scores"],
  outcome_metrics: { "Avg Discovery Time": "1.8 min", "User Satisfaction": "8.7/10" },
  updated_at: "2024-07-01T10:00:00Z",
}

export const mockFlow: Dux.Flow = {
  id: "flow-001",
  object_type: "Flow",
  name: "GPU Resource Allocation Flow",
  description: "End-to-end flow for discovering and allocating GPU resources for ML training jobs.",
  user_scenario:
    "An ML Engineer needs to find available GPU resources to train a new model within their project timeline.",
  flow_type: "golden_path",
  linked_problem_ids: ["prob-001"],
  linked_user_outcome_ids: ["uo-001"],
  behavior_sequence: ["beh-001"],
  updated_at: "2024-07-01T10:00:00Z",
}
