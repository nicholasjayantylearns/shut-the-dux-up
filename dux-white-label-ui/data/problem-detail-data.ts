import type { Problem, Provenance } from "@/types/dux-v9.5"

export const problem_9001: Problem = {
  object_type: "Problem",
  id: "problem_9001",
  job_statement:
    "When managing complex AI/ML workflows, I want to reuse consistent environments, so I can minimize setup errors and optimize team onboarding.",
  end_user: ["Platform Admin", "ML Engineer"],
  what_is_at_stake: "Productivity loss and increased onboarding time due to inconsistent environments",
  protocol_url: "https://notebooks.kubeflow.org/protocols/environment_consistency.html",
  evidence_teaser: "Platform admins report 30% faster team onboarding after enforcing image reuse standards.",
  evidence_maturity: "04_balanced_signal",
  evidence: ["prov_1001", "prov_1002", "prov_1003"],
  result_ids: [
    {
      id: "result_3001",
      reference_context: "Solving this enables standardized onboarding and faster project replication.",
    },
  ],
  useroutcome_ids: [
    {
      id: "useroutcome_2101",
      reference_context: "User can instantiate environments with predictable outcomes.",
    },
  ],
  flow_ids: [
    {
      id: "flow_5101",
      reference_context: "The environment reuse protocol is part of the Environment Management flow.",
    },
  ],
  created_at: "2025-07-03T12:00:00Z",
  updated_at: "2025-07-03T12:00:00Z",
}

export const prov_1001: Provenance = {
  object_type: "Provenance",
  id: "prov_1001",
  evidence_block: {
    source_filename: "interview_transcript_p7.md",
    participant_id: "P7",
    timestamp_in: "00:02:14",
    timestamp_out: "00:03:45",
    teaser: "Reusable environments reduce friction for onboarding",
    quote:
      "We noticed that when everyone uses the same Docker image, setup errors go down and new engineers get started much faster.",
    citation: "Participant 7, timestamp 00:02:14, interview_transcript_p7.md",
    evidence_type: "pull_quote",
  },
  created_at: "2025-07-01T15:10:00Z",
}

export const prov_1002: Provenance = {
  object_type: "Provenance",
  id: "prov_1002",
  evidence_block: {
    source_filename: "field_report_may2025.md",
    participant_id: "",
    timestamp_in: "",
    timestamp_out: "",
    teaser: "30% reduction in time to productivity",
    quote: "After rolling out the policy on image reuse, we saw a 30% improvement in onboarding speed for new hires.",
    citation: "Field Observation, field_report_may2025.md",
    evidence_type: "user_research_finding",
  },
  created_at: "2025-07-01T15:15:00Z",
}

export const prov_1003: Provenance = {
  object_type: "Provenance",
  id: "prov_1003",
  evidence_block: {
    source_filename: "admin_notes_onboarding.md",
    participant_id: "P3",
    timestamp_in: "00:04:12",
    timestamp_out: "00:05:00",
    teaser: "Shared environments help standardize debug paths",
    quote: "When engineers use the same setup, it's easier to debug issues because we're all aligned.",
    citation: "Participant 3, timestamp 00:04:12, admin_notes_onboarding.md",
    evidence_type: "pull_quote",
  },
  created_at: "2025-07-01T15:20:00Z",
}

export const allProvenance: Record<string, Provenance> = {
  prov_1001,
  prov_1002,
  prov_1003,
}
