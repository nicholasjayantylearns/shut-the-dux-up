import type * as Dux from "@/types/dux-v9.5"

// --- Insight Chain 1: Assumptive ---
export const insight_001: Dux.Insight = {
  id: "insight_001",
  object_type: "Insight",
  name: "Admins need idle GPU monitoring",
  insight_story_block: "Admins struggle to monitor idle GPUs after workloads complete, leading to resource waste.",
  problem_id: "problem_gpu_monitoring",
  result_id: "result_idle_gpu_alerting",
  behavior_id: "behavior_admin_monitoring",
  user_outcome_id: "user_outcome_idle_gpu_reclaim",
  evidence_maturity: "01_assumptive",
  updated_at: "2024-07-02T10:00:00Z",
}

export const problem_gpu_monitoring: Dux.Problem = {
  id: "problem_gpu_monitoring",
  object_type: "problem",
  name: "Admins lack visibility into idle GPUs",
  description: "Cluster Admins lack visibility into which GPU resources are idle but still allocated.",
  end_user: "Cluster Admin",
  opportunity_score: 7.8,
  what_is_at_stake: "Unnecessary cloud costs",
  evidence: [],
  evidence_teaser: "Inferred from high GPU cost reports.",
  importance: 8,
  satisfaction: 3,
  updated_at: "2024-07-02T10:00:00Z",
  job_statement: "When I need to manage cloud costs, I want to see idle GPU resources, so I can optimize spending.",
  protocol_url: "#",
  result_ids: [],
  useroutcome_ids: [],
  flow_ids: [],
  evidence_maturity: "low",
  provenance: [],
}

export const behavior_admin_monitoring: Dux.Behavior = {
  id: "behavior_admin_monitoring",
  object_type: "behavior",
  name: "Monitor active workspaces by GPU usage",
  description:
    "As a Cluster Admin, I want to view a list of all active workspaces, filtered by GPU usage, to identify idle resources.",
  end_user: "Cluster Admin",
  test_status: "in-progress",
  state: "stub",
  percent_steps_passing: 25,
  acceptance_criteria: ["Filter by GPU type", "Show idle time"],
  linked_issue_ids: ["ENG-789"],
  updated_at: "2024-07-02T10:00:00Z",
  job_statement: "Monitor active workspaces by GPU usage",
  task_description: "View a list of all active workspaces, filtered by GPU usage, to identify idle resources.",
  success_metrics: ["Identify idle resources with 95% accuracy"],
  evidence_maturity: "low",
  provenance: [],
}

export const result_idle_gpu_alerting: Dux.Result = {
  id: "result_idle_gpu_alerting",
  object_type: "result",
  name: "Proactive idle GPU notifications",
  description: "Automatically notify admins when a GPU-enabled workspace has been idle for more than 2 hours.",
  owner_team: "Cloud Operations",
  state: "in_progress",
  percent_behaviors_passing: 10,
  outcome_metrics: { "Alerts Triggered": "0" },
  success_criteria: ["95% of idle GPUs detected within 2 hours"],
  behavior_ids: ["behavior_admin_monitoring"],
  updated_at: "2024-07-02T10:00:00Z",
  job_statement: "Get proactive idle GPU notifications",
  outcome_description: "Admins are automatically notified when a GPU-enabled workspace has been idle for over 2 hours.",
  value_proposition: "Reduce wasted cloud spend by enabling faster action on idle resources.",
  evidence_maturity: "low",
  provenance: [],
}

// --- Insight Chain 2: Early ---
export const insight_003: Dux.Insight = {
  id: "insight_003",
  object_type: "Insight",
  name: "Need for auto-shutdown tracking",
  insight_story_block:
    "Teams report moderate success with auto-shutdown features but need better tracking to quantify savings.",
  problem_id: "problem_auto_shutdown_tracking",
  result_id: "result_cost_savings",
  behavior_id: "behavior_shutdown_utilization",
  user_outcome_id: "user_outcome_gpu_savings",
  evidence_maturity: "03_early",
  updated_at: "2024-07-02T10:00:00Z",
}

export const problem_auto_shutdown_tracking: Dux.Problem = {
  id: "problem_auto_shutdown_tracking",
  object_type: "problem",
  name: "Cannot quantify savings from auto-shutdown",
  description:
    "It's difficult to quantify the actual cost savings from auto-shutdown policies because there's no centralized report.",
  end_user: "Finance & Ops",
  opportunity_score: 8.1,
  what_is_at_stake: "Inability to justify cost-saving measures",
  evidence: ["prov_financial_exclusion_001"],
  evidence_teaser: "Users mentioned they 'feel' it's saving money but can't prove it.",
  importance: 8,
  satisfaction: 4,
  updated_at: "2024-07-02T10:00:00Z",
  job_statement:
    "When I need to justify cost-saving measures, I want to quantify savings from auto-shutdown, so I can prove value.",
  protocol_url: "#",
  result_ids: [],
  useroutcome_ids: [],
  flow_ids: [],
  evidence_maturity: "medium",
  provenance: [],
}

export const behavior_shutdown_utilization: Dux.Behavior = {
  id: "behavior_shutdown_utilization",
  object_type: "behavior",
  name: "Generate cost-savings report",
  description:
    "As a Cluster Admin, I want to generate a report showing cost savings from auto-shutdown events over the last 30 days.",
  end_user: "Cluster Admin",
  test_status: "passing",
  state: "in_ci",
  percent_steps_passing: 80,
  acceptance_criteria: ["Export to CSV", "Filter by date range"],
  linked_issue_ids: ["ENG-812"],
  updated_at: "2024-07-02T10:00:00Z",
  job_statement: "Generate cost-savings report",
  task_description: "Generate a report showing cost savings from auto-shutdown events over the last 30 days.",
  success_metrics: ["Report generation in under 1 minute"],
  evidence_maturity: "medium",
  provenance: [],
}

export const result_cost_savings: Dux.Result = {
  id: "result_cost_savings",
  object_type: "result",
  name: "Quantified cost savings dashboard",
  description: "Provide a dashboard widget that quantifies cumulative cost savings from reclaimed idle resources.",
  owner_team: "Platform Engineering",
  state: "passing",
  percent_behaviors_passing: 75,
  outcome_metrics: { "Monthly Savings": "$12,500" },
  success_criteria: ["Dashboard reflects savings within 24 hours"],
  behavior_ids: ["behavior_shutdown_utilization"],
  updated_at: "2024-07-02T10:00:00Z",
  job_statement: "View quantified cost savings",
  outcome_description: "A dashboard widget quantifies cumulative cost savings from reclaimed idle resources.",
  value_proposition: "Provide clear evidence of ROI for cost-saving initiatives.",
  evidence_maturity: "medium",
  provenance: [],
}

// --- Insight Chain 3: Triangulated ---
export const insight_005: Dux.Insight = {
  id: "insight_005",
  object_type: "Insight",
  name: "Dashboards reduce idle GPU costs",
  insight_story_block: "Cross-method data confirms GPU usage dashboards lead to a 20% reduction in idle costs.",
  problem_id: "problem_idle_gpu_costs",
  result_id: "result_idle_cost_reduction",
  behavior_id: "behavior_dashboard_use",
  user_outcome_id: "user_outcome_dashboard_success",
  evidence_maturity: "05_triangulated",
  updated_at: "2024-07-02T10:00:00Z",
}

export const problem_idle_gpu_costs: Dux.Problem = {
  id: "problem_idle_gpu_costs",
  object_type: "problem",
  name: "High cost of idle GPU resources",
  description:
    "High operational costs are driven by GPU resources remaining idle for extended periods, representing significant waste.",
  end_user: "ML Team Lead",
  opportunity_score: 9.5,
  what_is_at_stake: "$500k+ annual waste",
  evidence: ["Usage logs", "Billing data", "User interviews"],
  evidence_teaser: "Analysis shows 30% of GPU compute hours are on idle, allocated machines.",
  importance: 10,
  satisfaction: 2,
  updated_at: "2024-07-02T10:00:00Z",
  job_statement: "When I need to optimize cloud spend, I want to reduce idle GPU costs, so I can save money.",
  protocol_url: "#",
  result_ids: [],
  useroutcome_ids: [],
  flow_ids: [],
  evidence_maturity: "high",
  provenance: [],
}

export const behavior_dashboard_use: Dux.Behavior = {
  id: "behavior_dashboard_use",
  object_type: "behavior",
  name: "Review weekly GPU utilization",
  description:
    "As an ML Team Lead, I want to review a weekly GPU utilization dashboard to optimize my team's resource allocation.",
  end_user: "ML Team Lead",
  test_status: "passing",
  state: "released",
  percent_steps_passing: 100,
  key: true,
  acceptance_criteria: ["View by team member", "Identify top consumers"],
  linked_issue_ids: ["ENG-451"],
  updated_at: "2024-07-02T10:00:00Z",
  job_statement: "Review weekly GPU utilization",
  task_description: "Review a weekly GPU utilization dashboard to optimize team's resource allocation.",
  success_metrics: ["Team leads access dashboard weekly"],
  evidence_maturity: "high",
  provenance: [],
}

export const result_idle_cost_reduction: Dux.Result = {
  id: "result_idle_cost_reduction",
  object_type: "result",
  name: "20% reduction in idle GPU costs",
  description: "Achieve a 20% reduction in monthly cloud spend attributed to idle GPU resources.",
  owner_team: "ML Platform",
  state: "passing",
  percent_behaviors_passing: 100,
  outcome_metrics: { "Idle Cost Reduction": "21.5%" },
  success_criteria: ["Maintain <10% idle GPU cost for 3 consecutive months"],
  behavior_ids: ["behavior_dashboard_use"],
  updated_at: "2024-07-02T10:00:00Z",
  job_statement: "Achieve 20% reduction in idle GPU costs",
  outcome_description: "A 20% reduction in monthly cloud spend attributed to idle GPU resources is achieved.",
  value_proposition: "Directly impact company profitability through significant cost savings.",
  evidence_maturity: "high",
  provenance: [],
}

// --- Alternatives for Refinement Workflow ---
export const alternativeProblems: Dux.Problem[] = [
  { ...problem_auto_shutdown_tracking, id: "alt_prob_1", name: "Alternative: No way to forecast GPU needs" },
  { ...problem_idle_gpu_costs, id: "alt_prob_2", name: "Alternative: GPU contention slows down research" },
]

export const alternativeBehaviors: Dux.Behavior[] = [
  { ...behavior_admin_monitoring, id: "alt_beh_1", name: "Alternative: Reserve a GPU for a future job" },
  { ...behavior_dashboard_use, id: "alt_beh_2", name: "Alternative: Set a budget alert for a project" },
]

export const alternativeResults: Dux.Result[] = [
  { ...result_idle_gpu_alerting, id: "alt_res_1", name: "Alternative: Increase GPU utilization by 30%" },
  { ...result_cost_savings, id: "alt_res_2", name: "Alternative: Reduce average job wait time" },
]

// --- NEW DATA FROM ATTACHMENT ---

export const prov_financial_exclusion_001: Dux.Provenance = {
  object_type: "Provenance",
  id: "prov_financial_exclusion_001",
  evidence_block: {
    source_filename: "NUBANK  KeyNote FinOps LIVE",
    participant_id: "",
    timestamp_in: "48:46",
    timestamp_out: "48:57",
    quote:
      "Nearly half of our population lives at or below the poverty line and for decades that meant being excluded from the financial market. No bank account, no credit history, no access. Because traditional banks simply didn't see any value in low-income communities",
    citation: "",
    evidence_type: "direct_quote",
  },
  created_at: new Date().toISOString(), // Placeholder
}

export const prov_mission_inclusion_002: Dux.Provenance = {
  object_type: "Provenance",
  id: "prov_mission_inclusion_002",
  evidence_block: {
    source_filename: "NUBANK  KeyNote FinOps LIVE",
    participant_id: "",
    timestamp_in: "49:03",
    timestamp_out: "49:14",
    quote:
      "We made it our mission to fight complexity and enable financial inclusion for all parts of society, even that means starting with a purple credit card and a dream.",
    citation: "",
    evidence_type: "direct_quote",
  },
  created_at: new Date().toISOString(), // Placeholder
}

export const prov_customer_growth_003: Dux.Provenance = {
  object_type: "Provenance",
  id: "prov_customer_growth_003",
  evidence_block: {
    source_filename: "NUBANK  KeyNote FinOps LIVE",
    participant_id: "",
    timestamp_in: "49:15",
    timestamp_out: "49:21",
    quote: "That mission, it worked. In just a few years, we grow to over 120 million customers.",
    citation: "",
    evidence_type: "direct_quote",
  },
  created_at: new Date().toISOString(), // Placeholder
}

export const prov_bad_forecasting_004: Dux.Provenance = {
  object_type: "Provenance",
  id: "prov_bad_forecasting_004",
  evidence_block: {
    source_filename: "NUBANK  KeyNote FinOps LIVE",
    participant_id: "",
    timestamp_in: "50:09",
    timestamp_out: "50:18",
    quote:
      "That's how bad we were at forecasting. At one point, we had 75% budget deviation. We weren't forecasting. We were wishful thinking. We sucked.",
    citation: "",
    evidence_type: "direct_quote",
  },
  created_at: new Date().toISOString(), // Placeholder
}

export const prov_multiple_demand_drivers_005: Dux.Provenance = {
  object_type: "Provenance",
  id: "prov_multiple_demand_drivers_005",
  evidence_block: {
    source_filename: "NUBANK  KeyNote FinOps LIVE",
    participant_id: "",
    timestamp_in: "52:28",
    timestamp_out: "52:39",
    quote:
      "so we encouraged BUs to within their one budget create buckets with own demand drivers. Some BUs created up to 26 buckets, tracking different infrastructure components or products.",
    citation: "",
    evidence_type: "direct_quote",
  },
  created_at: new Date().toISOString(), // Placeholder
}

export const prov_reduced_deviation_006: Dux.Provenance = {
  object_type: "Provenance",
  id: "prov_reduced_deviation_006",
  evidence_block: {
    source_filename: "NUBANK  KeyNote FinOps LIVE",
    participant_id: "",
    timestamp_in: "52:45",
    timestamp_out: "52:51",
    quote:
      "in the end, we had over 100 buckets across Nubank, all projected with demand drivers. And guess what? This took us down from 75% deviation to less than 1% in this year.",
    citation: "",
    evidence_type: "direct_quote",
  },
  created_at: new Date().toISOString(), // Placeholder
}

export const prov_leadership_trusts_007: Dux.Provenance = {
  object_type: "Provenance",
  id: "prov_leadership_trusts_007",
  evidence_block: {
    source_filename: "NUBANK  KeyNote FinOps LIVE",
    participant_id: "",
    timestamp_in: "53:05",
    timestamp_out: "53:12",
    quote:
      "Leadership reacted equally and now they can finally base their decision-making on our forecasts for our Cloud cost efficiency ratio.",
    citation: "",
    evidence_type: "direct_quote",
  },
  created_at: new Date().toISOString(), // Placeholder
}

export const prov_cost_awareness_008: Dux.Provenance = {
  object_type: "Provenance",
  id: "prov_cost_awareness_008",
  evidence_block: {
    source_filename: "NUBANK  KeyNote FinOps LIVE",
    participant_id: "",
    timestamp_in: "53:12",
    timestamp_out: "53:18",
    quote:
      "It also helped us to push cost awareness even further. Now every team within their own BU have their own sales made budget that they live and breathe.",
    citation: "",
    evidence_type: "direct_quote",
  },
  created_at: new Date().toISOString(), // Placeholder
}

export const problem_financial_exclusion_001: Dux.Problem = {
  object_type: "problem",
  id: "prob_financial_exclusion_001",
  job_statement:
    "When people are low-income and traditionally excluded from financial markets, they want access to basic financial services, so they can participate in the economy.",
  evidence: ["prov_financial_exclusion_001"],
  name: "Financial exclusion for low-income communities", // Added for compatibility with ProblemCard
  description: "Low-income populations lack access to basic financial services.", // Added for compatibility
  end_user: "Low-income individuals",
  what_is_at_stake: "Limited economic participation and opportunity",
  protocol_url: "#",
  evidence_teaser:
    "Nearly half of our population lives at or below the poverty line and for decades that meant being excluded from the financial market.",
  evidence_maturity: "high",
  result_ids: [],
  useroutcome_ids: [],
  flow_ids: [],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  provenance: [],
}

export const problem_cloud_forecasting_inaccuracy_002: Dux.Problem = {
  object_type: "problem",
  id: "prob_cloud_forecasting_inaccuracy_002",
  job_statement:
    "When cloud spend is skyrocketing and forecasts are highly inaccurate, leadership wants reliable financial predictability, so they can make informed strategic decisions and avoid inefficiencies.",
  evidence: ["prov_bad_forecasting_004"],
  name: "Highly inaccurate cloud cost forecasting", // Added for compatibility
  description: "Cloud spend forecasts are unreliable, hindering strategic decisions.", // Added for compatibility
  end_user: "Leadership, FinOps",
  what_is_at_stake: "Uninformed strategic decisions and inefficiencies",
  protocol_url: "#",
  evidence_teaser:
    "At one point, we had 75% budget deviation. We weren't forecasting. We were wishful thinking. We sucked.",
  evidence_maturity: "high",
  result_ids: [],
  useroutcome_ids: [],
  flow_ids: [],
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  provenance: [],
}

export const beh_enable_financial_inclusion_001: Dux.Behavior = {
  object_type: "behavior",
  id: "beh_enable_financial_inclusion_001",
  name: "Enable financial inclusion for all parts of society",
  description:
    "Nubank fights complexity and enables financial inclusion for all parts of society by starting with accessible products like a purple credit card.",
  end_user: "Nubank", // Assuming Nubank as the "user" performing this behavior
  test_status: "passing", // Assuming success based on result
  state: "released",
  percent_steps_passing: 100,
  acceptance_criteria: [
    "Achieve significant growth in customer base, particularly among previously unbanked populations, demonstrating market penetration and product adoption.",
  ],
  linked_issue_ids: [],
  updated_at: new Date().toISOString(),
  user_enablement:
    "Nubank is able to fight complexity and enable financial inclusion for all parts of society by starting with accessible products like a purple credit card.",
  behavior_type: "system_action",
  signals: ["Rapid customer growth (120M+ customers)", "Expansion into previously underserved communities"],
  job_statement: "Enable financial inclusion for all parts of society",
  task_description: "Fight complexity and enable financial inclusion for all parts of society.",
  success_metrics: ["Achieve significant growth in customer base"],
  evidence_maturity: "high",
  provenance: [],
}

export const beh_granular_forecasting_buckets_002: Dux.Behavior = {
  object_type: "behavior",
  id: "beh_granular_forecasting_buckets_002",
  name: "Implement granular, demand-driver based forecasting buckets",
  description:
    "Nubank's FinOps team achieves highly accurate cloud cost forecasting by encouraging business units to create multiple budget buckets with their own specific demand drivers.",
  end_user: "FinOps Team",
  test_status: "passing",
  state: "released",
  percent_steps_passing: 100,
  acceptance_criteria: [
    "Reduction of cloud cost budget deviation to less than 1% annually, with leadership expressing trust and basing decisions on these forecasts.",
  ],
  linked_issue_ids: [],
  updated_at: new Date().toISOString(),
  user_enablement:
    "Nubank's FinOps team is able to achieve highly accurate cloud cost forecasting by encouraging business units to create multiple budget buckets with their own specific demand drivers.",
  behavior_type: "organizational_process",
  signals: [
    "Creation of over 100 demand-driver based budget buckets across the company",
    "Specific business units creating up to 26 buckets for different components",
    "Increased FinOps culture and spend visibility at the team level leading to 'sales made budget' adoption",
  ],
  job_statement: "Implement granular, demand-driver based forecasting buckets",
  task_description:
    "Encourage business units to create multiple budget buckets with their own specific demand drivers.",
  success_metrics: ["Reduce cloud cost budget deviation to less than 1%"],
  evidence_maturity: "high",
  provenance: [],
}

export const res_massive_customer_growth_001: Dux.Result = {
  object_type: "result",
  id: "res_massive_customer_growth_001",
  name: "Massive customer growth (120M+ customers)",
  description:
    "Successfully onboarded a large underserved population into the financial system, expanding market reach and fulfilling the company's core mission.",
  owner_team: "Nubank",
  state: "passing",
  percent_behaviors_passing: 100,
  outcome_metrics: { "Total Customers": "120M+" },
  success_criteria: [
    "Over 120 million customers, surpassing combined populations of major US states like California, Texas, New York, and Michigan.",
  ],
  behavior_ids: ["beh_enable_financial_inclusion_001"],
  updated_at: new Date().toISOString(),
  target_impact:
    "Successfully onboarded a large underserved population into the financial system, expanding market reach and fulfilling the company's core mission.",
  job_statement: "Onboard a large underserved population",
  outcome_description: "Successfully onboarded a large underserved population into the financial system.",
  value_proposition: "Expand market reach and fulfill the company's core mission.",
  evidence_maturity: "high",
  provenance: [],
}

export const res_improved_forecasting_accuracy_002: Dux.Result = {
  object_type: "result",
  id: "res_improved_forecasting_accuracy_002",
  name: "Improved cloud cost forecasting accuracy (<1% deviation)",
  description:
    "Achieved highly reliable cloud cost forecasts, enabling strategic decision-making and fostering company-wide cost awareness and accountability.",
  owner_team: "FinOps",
  state: "passing",
  percent_behaviors_passing: 100,
  outcome_metrics: { "Budget Deviation": "<1%" },
  success_criteria: ["Reduced cloud spend budget deviation from 75% to less than 1% within the year."],
  behavior_ids: ["beh_granular_forecasting_buckets_002"],
  updated_at: new Date().toISOString(),
  target_impact:
    "Achieved highly reliable cloud cost forecasts, enabling strategic decision-making and fostering company-wide cost awareness and accountability.",
  job_statement: "Achieve reliable cloud cost forecasts",
  outcome_description: "Achieved highly reliable cloud cost forecasts.",
  value_proposition: "Enable strategic decision-making and foster company-wide cost awareness.",
  evidence_maturity: "high",
  provenance: [],
}

export const insight_financial_inclusion_success: Dux.Insight = {
  object_type: "Insight",
  id: "insight_financial_inclusion_success",
  name: "Nubank's core mission to enable financial inclusion for the underserved directly led to an explosive growth in its customer base.",
  insight_teaser:
    "Nubank's core mission to enable financial inclusion for the underserved directly led to an explosive growth in its customer base.",
  insight_chain: [
    "prob_financial_exclusion_001",
    "beh_enable_financial_inclusion_001",
    "res_massive_customer_growth_001",
  ],
  related_objects: [
    {
      id: "prob_financial_exclusion_001",
      object_type: "Problem",
    },
    {
      id: "beh_enable_financial_inclusion_001",
      object_type: "Behavior",
    },
    {
      id: "res_massive_customer_growth_001",
      object_type: "Result",
    },
  ],
  insight_story_block:
    "Traditionally, nearly half of Brazil's population faced financial exclusion due to poverty, lacking basic access to banking and credit as traditional banks saw no value in low-income communities. **Nubank stepped in with a mission to simplify finance and enable inclusion for all, even starting with an accessible purple credit card.** This direct intervention resulted in explosive growth, reaching **over 120 million customers in just a few years**, demonstrating the immense impact of addressing an underserved market with a focused mission.",
  evidence_maturity: "05_triangulated",
  updated_at: new Date().toISOString(),
  user_outcome_id: "user_outcome_placeholder", // Placeholder
}

export const insight_finops_forecasting_mastery: Dux.Insight = {
  object_type: "Insight",
  id: "insight_finops_forecasting_mastery",
  name: "Nubank transformed its cloud cost forecasting from a 75% deviation to under 1% by adopting a highly granular, demand-driver based budgeting approach.",
  insight_teaser:
    "Nubank transformed its cloud cost forecasting from a 75% deviation to under 1% by adopting a highly granular, demand-driver based budgeting approach.",
  insight_chain: [
    "prob_cloud_forecasting_inaccuracy_002",
    "beh_granular_forecasting_buckets_002",
    "res_improved_forecasting_accuracy_002",
  ],
  related_objects: [
    {
      id: "prob_cloud_forecasting_inaccuracy_002",
      object_type: "Problem",
    },
    {
      id: "beh_granular_forecasting_buckets_002",
      object_type: "Behavior",
    },
    {
      id: "res_improved_forecasting_accuracy_002",
      object_type: "Result",
    },
  ],
  insight_story_block:
    "Facing a soaring cloud spend and an abysmal **75% budget deviation**, Nubank recognized forecasting as a strategic priority, acknowledging their previous efforts as 'wishful thinking' that 'sucked'. After several unsuccessful attempts with simpler models, the breakthrough came by adopting a highly granular approach: **encouraging business units to define multiple budget buckets with specific demand drivers, resulting in over 100 such buckets across the company**. This systematic change not only **reduced their forecasting deviation to less than 1%** but also fostered deep cost awareness within every team, empowering leadership to finally base their decision-making on these accurate forecasts.",
  evidence_maturity: "05_triangulated",
  updated_at: new Date().toISOString(),
  user_outcome_id: "user_outcome_placeholder", // Placeholder
}

export const allProvenance: Record<string, Dux.Provenance> = {
  prov_financial_exclusion_001,
  prov_mission_inclusion_002,
  prov_customer_growth_003,
  prov_bad_forecasting_004,
  prov_multiple_demand_drivers_005,
  prov_reduced_deviation_006,
  prov_leadership_trusts_007,
  prov_cost_awareness_008,
}

// --- Mock Data ---
export const mockProblems: Dux.Problem[] = [
  {
    id: "P001",
    object_type: "problem",
    job_statement:
      "When triaging insights, I want to quickly assess the evidence strength, so I can prioritize high-quality findings.",
    what_is_at_stake: 'Wasted engineering effort on poorly supported "insights," leading to low-impact features.',
    end_user: "UX Researchers, Product Managers",
    opportunity_score: 85,
    evidence_maturity: "high",
    provenance: [
      {
        id: "prov-p1-1",
        source_type: "internal_research",
        source_id: "UR-2024-01",
        summary: "User interviews show researchers spend 5+ hours/week manually assessing evidence quality.",
        timestamp: "2024-05-10T10:00:00Z",
        tags: ["efficiency", "triage"],
      },
      {
        id: "prov-p1-2",
        source_type: "system_log",
        source_id: "LOG-Q2-2024",
        summary: 'Data shows insights with "low" maturity are 3x less likely to be actioned.',
        timestamp: "2024-06-01T00:00:00Z",
        tags: ["data-driven", "impact"],
      },
    ],
  },
  {
    id: "P002",
    object_type: "problem",
    job_statement:
      'When reviewing a proposed feature, I want to understand the "why" behind it, so I can make informed decisions.',
    what_is_at_stake: "Stakeholders rejecting valid proposals due to a lack of clear, traceable rationale.",
    end_user: "Engineering Leads, Design Directors",
    opportunity_score: 90,
    evidence_maturity: "medium",
    provenance: [
      {
        id: "prov-p2-1",
        source_type: "customer_feedback",
        source_id: "CF-2024-Q2",
        summary: "Feedback from design review meetings indicates a need for better storytelling around insights.",
        timestamp: "2024-05-20T14:30:00Z",
        tags: ["communication", "decision-making"],
      },
    ],
  },
  {
    id: "P003",
    object_type: "problem",
    job_statement: "When onboarding, I want to grasp the core user problems quickly, so I can contribute faster.",
    what_is_at_stake: "New team members take months to develop institutional knowledge, slowing down project velocity.",
    end_user: "New Hires (All Roles)",
    opportunity_score: 75,
    evidence_maturity: "low",
    provenance: [
      {
        id: "prov-p3-1",
        source_type: "internal_research",
        source_id: "ONB-2023-Q4",
        summary:
          "Onboarding feedback sessions consistently mention a steep learning curve for the product's problem space.",
        timestamp: "2023-12-15T11:00:00Z",
        tags: ["onboarding", "velocity"],
      },
    ],
  },
]

export const mockBehaviors: Dux.Behavior[] = [
  {
    id: "B001",
    object_type: "behavior",
    job_statement: 'Automate the generation of a "maturity score" for each piece of evidence.',
    task_description:
      "Develop an algorithm that analyzes provenance metadata (source_type, recency, tags) to assign a quantitative maturity score.",
    success_metrics: ["Reduce time-to-triage by 50%", "Increase stakeholder confidence score by 25%"],
    evidence_maturity: "high",
    provenance: [
      {
        id: "prov-b1-1",
        source_type: "internal_research",
        source_id: "DS-Algo-PoC",
        summary: "Proof-of-concept model achieved 92% accuracy in predicting manual maturity ratings.",
        timestamp: "2024-06-15T09:00:00Z",
        tags: ["data-science", "poc"],
      },
    ],
  },
  {
    id: "B002",
    object_type: "behavior",
    job_statement: "Visualize the insight-to-feature development chain.",
    task_description:
      "Create a UI component that displays the full chain (Problem -> Behavior -> Result -> Feature) in a clear, explorable format.",
    success_metrics: ["Decrease questions about project rationale by 80% in review meetings."],
    evidence_maturity: "medium",
    provenance: [
      {
        id: "prov-b2-1",
        source_type: "internal_research",
        source_id: "UX-Proto-v1",
        summary:
          "Usability testing of a prototype showed users could trace a feature back to its origin problem in under 30 seconds.",
        timestamp: "2024-06-10T16:00:00Z",
        tags: ["ux", "prototype", "traceability"],
      },
    ],
  },
  {
    id: "B003",
    object_type: "behavior",
    job_statement: 'Generate an interactive "Dossier" for each piece of evidence.',
    task_description:
      "Build a view that presents provenance details in an engaging, narrative-driven way, encouraging exploration.",
    success_metrics: ["Increase average interaction time with provenance data by 200%."],
    evidence_maturity: "low",
    provenance: [
      {
        id: "prov-b3-1",
        source_type: "internal_research",
        source_id: "UX-Concept-v1",
        summary:
          'Initial design concepts for the "Dossier" view received positive feedback for their novel, game-like approach to data exploration.',
        timestamp: "2024-06-20T11:00:00Z",
        tags: ["ux", "concept", "engagement"],
      },
    ],
  },
]

export const mockResults: Dux.Result[] = [
  {
    id: "R001",
    object_type: "result",
    job_statement: "Achieve a shared understanding of insight quality across the organization.",
    outcome_description:
      "Teams consistently prioritize work based on robust, high-maturity evidence, leading to more impactful product development cycles.",
    value_proposition:
      "De-risk innovation by ensuring resources are allocated to solving well-understood, validated user problems.",
    evidence_maturity: "high",
    provenance: [
      {
        id: "prov-r1-1",
        source_type: "market_analysis",
        source_id: "Forrester-Q1-2024",
        summary: "Industry report shows companies with mature insight processes have 2x higher product success rates.",
        timestamp: "2024-04-25T00:00:00Z",
        tags: ["roi", "industry-benchmark"],
      },
    ],
  },
  {
    id: "R002",
    object_type: "result",
    job_statement: 'Create a "single source of truth" for project rationale.',
    outcome_description:
      "Anyone, from a new hire to a senior executive, can quickly understand the evidence-based reasoning behind any given project.",
    value_proposition:
      "Increase organizational alignment and accelerate decision-making by making project rationale transparent and accessible.",
    evidence_maturity: "medium",
    provenance: [
      {
        id: "prov-r2-1",
        source_type: "internal_research",
        source_id: "Stakeholder-Interviews-Q2",
        summary:
          'Interviews with leadership revealed a strong desire for a centralized system to track the "why" behind product decisions.',
        timestamp: "2024-05-15T13:00:00Z",
        tags: ["alignment", "leadership"],
      },
    ],
  },
  {
    id: "R003",
    object_type: "result",
    job_statement: "Foster a culture of curiosity and evidence-based inquiry.",
    outcome_description:
      "Team members are empowered and encouraged to dig into the data, challenge assumptions, and contribute to a deeper understanding of user needs.",
    value_proposition:
      "Transform the organization from being data-informed to data-driven, unlocking new avenues for innovation.",
    evidence_maturity: "low",
    provenance: [
      {
        id: "prov-r3-1",
        source_type: "market_analysis",
        source_id: "HBR-Culture-of-Curiosity",
        summary: "Article outlines how fostering a culture of inquiry is a key differentiator for market leaders.",
        timestamp: "2024-03-10T00:00:00Z",
        tags: ["culture", "innovation", "thought-leadership"],
      },
    ],
  },
]

export const mockInsight: Dux.Insight = {
  id: "INS-001",
  object_type: "insight",
  insight_teaser: "High-maturity evidence triage leads to de-risked innovation.",
  insight_chain: {
    problem_id: "P001",
    behavior_id: "B001",
    result_id: "R001",
  },
  related_objects: {
    problems: mockProblems,
    behaviors: mockBehaviors,
    results: mockResults,
  },
  insight_story_block: [
    {
      type: "heading",
      content: "The High Cost of Weak Evidence",
    },
    {
      type: "paragraph",
      content:
        "Our research shows that teams waste significant effort on features backed by poorly understood user needs. By implementing a system to automatically assess and surface the maturity of the evidence behind each insight, we can focus our resources effectively.",
    },
    {
      type: "heading",
      content: "A Path to Confident Decisions",
    },
    {
      type: "paragraph",
      content:
        "This leads to a clear result: a shared, transparent understanding of insight quality that de-risks innovation and aligns the entire organization around solving the most impactful user problems.",
    },
  ],
  fit_score: 92,
}
