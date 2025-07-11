"use client"

import type * as Dux from "@/types/dux-v9.5"
import { ProblemCardV2 } from "@/components/cards-v2/problem-card-v2"
import { BehaviorCardV2 } from "@/components/cards-v2/behavior-card-v2"
import { ResultCardV2 } from "@/components/cards-v2/result-card-v2"
import { ArrowRight } from "lucide-react"

interface InsightChainV2Props {
  insight: Dux.Insight
  problem: Dux.Problem
  behavior: Dux.Behavior
  result: Dux.Result
}

const maturityMap: Record<Dux.Insight["evidence_maturity"], { label: string; color: string }> = {
  "01_assumptive": { label: "Assumptive", color: "bg-gray-200 text-gray-800" },
  "02_anecdotal": { label: "Anecdotal", color: "bg-yellow-200 text-yellow-900" },
  "03_early": { label: "Early", color: "bg-blue-200 text-blue-900" },
  "04_balanced": { label: "Balanced", color: "bg-green-200 text-green-900" },
  "05_triangulated": { label: "Triangulated", color: "bg-purple-200 text-purple-900" },
}

export function InsightChainV2({ insight, problem, behavior, result }: InsightChainV2Props) {
  const maturity = maturityMap[insight.evidence_maturity]

  return (
    <div className="space-y-8 p-6 bg-card-clarity-bg border border-card-clarity-border rounded-lg shadow-sm">
      {/* Insight Story Block */}
      <div className="relative">
        <p className="text-xs font-semibold text-text-placeholder uppercase tracking-wider mb-2">Insight Story</p>
        <h2 className="text-2xl font-bold font-barlow text-text-primary">{insight.name}</h2>
        <p className="text-card-clarity-text-italic mt-2 text-lg">
          {insight.insight_teaser ?? insight.insight_story_block}
        </p>
        <div className={`absolute top-0 right-0 text-xs font-bold px-2 py-1 rounded ${maturity.color}`}>
          {maturity.label}
        </div>
      </div>

      {/* Insight Chain using V2 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:items-stretch gap-6 relative">
        <div className="hidden md:flex absolute top-1/2 left-0 w-full -translate-y-1/2 items-center justify-center -z-0">
          <div className="w-1/3 flex justify-end pr-8">
            <ArrowRight className="w-8 h-8 text-gray-300" />
          </div>
          <div className="w-1/3 flex justify-end pr-8">
            <ArrowRight className="w-8 h-8 text-gray-300" />
          </div>
        </div>

        <div className="z-10">
          <ProblemCardV2 data={problem} />
        </div>
        <div className="z-10">
          <BehaviorCardV2 data={behavior} />
        </div>
        <div className="z-10">
          <ResultCardV2 data={result} />
        </div>
      </div>
    </div>
  )
}
