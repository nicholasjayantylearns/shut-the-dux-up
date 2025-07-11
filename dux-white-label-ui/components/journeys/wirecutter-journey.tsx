import type React from "react"
import type { Insight, Problem, Behavior, Result } from "@/types/dux-v9.5"

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-6 border-b border-border-default">
    <h3 className="font-sansBody text-sm font-bold uppercase tracking-widest text-text-placeholder mb-3">{title}</h3>
    {children}
  </div>
)

export function WirecutterJourney({
  insight,
  problem,
  behavior,
  result,
}: {
  insight: Insight
  problem: Problem
  behavior: Behavior
  result: Result
}) {
  return (
    <div className="w-full max-w-3xl bg-card-clarity-bg p-8 sm:p-12 border border-card-clarity-border font-serif">
      <div className="text-center mb-8">
        <p className="font-sansBody text-sm font-bold text-accent-negative">The Verdict</p>
        <h1 className="text-4xl font-bold mt-2 text-text-primary">{insight.name}</h1>
      </div>

      <div className="bg-bg-tertiary p-6 mb-8">
        <p className="text-lg italic text-card-clarity-text-italic leading-relaxed">{insight.story}</p>
      </div>

      <Section title="The Problem We Found">
        <h2 className="text-2xl font-bold text-card-clarity-text-muted">{problem.name}</h2>
        <blockquote className="mt-4 border-l-4 border-gray-300 pl-4">
          <p className="text-text-secondary text-lg leading-relaxed">"{problem.job_statement}"</p>
        </blockquote>
      </Section>

      <Section title="How to Address It">
        <h2 className="text-2xl font-bold text-card-clarity-text-muted">{behavior.name}</h2>
        <p className="mt-2 text-text-secondary text-lg leading-relaxed">{behavior.description}</p>
      </Section>

      <Section title="The Expected Outcome">
        <h2 className="text-2xl font-bold text-card-clarity-text-muted">{result.name}</h2>
        <div className="mt-4 bg-green-50 border border-green-200 p-4">
          <p className="font-sansBody text-sm font-bold uppercase tracking-widest text-green-700">Success Criteria</p>
          <p className="mt-1 text-green-900 text-lg">"{result.success_criteria[0]}"</p>
        </div>
      </Section>

      <div className="text-center mt-8">
        <p className="font-sansBody text-xs text-card-clarity-text-secondary">
          INSIGHT ID: {insight.id} | Based on evidence from {problem.evidence_teaser}
        </p>
      </div>
    </div>
  )
}
