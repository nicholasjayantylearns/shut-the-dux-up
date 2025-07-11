export interface Provenance {
  id: string
  source_type: "internal_research" | "customer_feedback" | "market_analysis" | "system_log"
  source_id: string
  url?: string
  timestamp: string
  summary: string
  tags: string[]
}

export interface Problem {
  id: string
  object_type: "problem"
  job_statement: string
  what_is_at_stake: string
  end_user: string
  opportunity_score: number
  evidence_maturity: "low" | "medium" | "high"
  provenance: Provenance[]
}

export interface Behavior {
  id: string
  object_type: "behavior"
  job_statement: string
  task_description: string
  success_metrics: string[]
  evidence_maturity: "low" | "medium" | "high"
  provenance: Provenance[]
}

export interface Result {
  id: string
  object_type: "result"
  job_statement: string
  outcome_description: string
  value_proposition: string
  evidence_maturity: "low" | "medium" | "high"
  provenance: Provenance[]
}

export interface Insight {
  id: string
  object_type: "insight"
  insight_teaser: string
  insight_chain: {
    problem_id: string
    behavior_id: string
    result_id: string
  }
  related_objects: {
    problems: Problem[]
    behaviors: Behavior[]
    results: Result[]
  }
  insight_story_block: {
    type: "paragraph" | "heading"
    content: string
  }[]
  fit_score?: number
  annotation?: string
}

export type DUXObject = Problem | Behavior | Result
