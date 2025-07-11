"use client"

import type { Problem, Behavior, Result, UserOutcome, Flow } from "@/types/dux-v9.5"
import { ProblemCard } from "@/components/cards/problem-card"
import { BehaviorCard } from "@/components/cards/behavior-card"
import { ResultCard } from "@/components/cards/result-card"
import { UserOutcomeCard } from "@/components/cards/user-outcome-card"
import { FlowCard } from "@/components/cards/flow-card"

interface XOCProps {
  problem: Problem
  result: Result
  user_outcome: UserOutcome
  flow: Flow
  allBehaviors: Record<string, Behavior>
}

export function ExperienceOperationsCenter({ problem, result, user_outcome, flow, allBehaviors }: XOCProps) {
  const sequencedBehaviors = flow.behavior_sequence.map((id) => allBehaviors[id])

  return (
    <div className="bg-card-clarity-bg p-8 rounded-xl border border-card-clarity-border">
      {/* We now use a 12-column grid for a structured, anchored layout. */}
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Column 1: The "Why" - Problem and its direct Result. Spans 4 of 12 columns. */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <h2 className="font-barlow font-bold text-text-placeholder text-sm uppercase tracking-wider">The "Why"</h2>
          <ProblemCard data={problem} variant="mini" concept="clarity" />
          <ResultCard data={result} variant="mini" concept="clarity" />
        </div>

        {/* Column 2: The "How" - The Flow and its sequence of Behaviors. Spans 5 of 12 columns. */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <h2 className="font-barlow font-bold text-text-placeholder text-sm uppercase tracking-wider">The "How"</h2>
          <div className="bg-bg-tertiary/80 p-4 rounded-lg border border-border-default/80 space-y-4">
            <FlowCard data={flow} />
            <div className="space-y-4">
              {sequencedBehaviors.map((behavior) => (
                <BehaviorCard key={behavior.id} data={behavior} variant="mini" concept="clarity" />
              ))}
            </div>
          </div>
        </div>

        {/* Column 3: The "What" - The ultimate User Outcome. Spans 3 of 12 columns. */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <h2 className="font-barlow font-bold text-text-placeholder text-sm uppercase tracking-wider">The "What"</h2>
          <UserOutcomeCard data={user_outcome} />
        </div>
      </div>
    </div>
  )
}
