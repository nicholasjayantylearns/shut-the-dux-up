import type { Insight, Problem, Behavior, Result } from "@/types/dux-v9.5"
import { ProblemCard } from "@/components/cards/problem-card"
import { BehaviorCard } from "@/components/cards/behavior-card"
import { ResultCard } from "@/components/cards/result-card"

export function MonospaceJourney({
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
    <div className="w-full bg-gray-800 p-8 rounded-lg">
      <div className="text-center mb-8">
        <h2 className="font-monospace text-xl font-bold text-card-monospace-text-primary">
          <span className="text-card-monospace-text-secondary">INSIGHT::</span>
          {insight.id}
        </h2>
        <p className="font-sansBody text-gray-300">{insight.name}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-gray-700 p-1">
        <ProblemCard data={problem} variant="mini" concept="monospace" />
        <BehaviorCard data={behavior} variant="mini" concept="monospace" />
        <ResultCard data={result} variant="mini" concept="monospace" />
      </div>
    </div>
  )
}
