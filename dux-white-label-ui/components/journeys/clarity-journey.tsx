import type { Insight, Problem, Behavior, Result } from "@/types/dux-v9.5"
import { ProblemCard } from "@/components/cards/problem-card"
import { BehaviorCard } from "@/components/cards/behavior-card"
import { ResultCard } from "@/components/cards/result-card"
import { ArrowRight } from "lucide-react"

export function ClarityJourney({
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
    <div className="w-full flex flex-col items-center gap-6">
      <div className="text-center max-w-2xl">
        <p className="font-barlow text-sm font-bold uppercase tracking-wider text-purple-600">Insight</p>
        <h2 className="font-barlow text-2xl font-bold text-text-primary mt-1">{insight.name}</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <ProblemCard data={problem} variant="mini" concept="clarity" className="w-72" />
        <ArrowRight className="w-8 h-8 text-gray-300 hidden md:block" />
        <BehaviorCard data={behavior} variant="mini" concept="clarity" className="w-72" />
        <ArrowRight className="w-8 h-8 text-gray-300 hidden md:block" />
        <ResultCard data={result} variant="mini" concept="clarity" className="w-72" />
      </div>
    </div>
  )
}
