"use client"

import { UnifiedSynthesizer } from "@/components/unified-synthesizer"
import { CrtBackground } from "@/components/dossier/crt-background"
import { TerminalWindow } from "@/components/dossier/terminal-window"
import * as Data from "@/data/insight-data"

export default function SynthesizerPage() {
  // We'll use one of the detailed insight chains for this demo
  const insight = Data.insight_finops_forecasting_mastery
  const initialProblem = Data.problem_cloud_forecasting_inaccuracy_002
  const initialBehavior = Data.beh_granular_forecasting_buckets_002
  const initialResult = Data.res_improved_forecasting_accuracy_002
  const alternatives = {
    problems: Data.alternativeProblems,
    behaviors: Data.alternativeBehaviors,
    results: Data.alternativeResults,
  }

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-4 font-mono text-green-400">
      <CrtBackground />
      <div className="w-full max-w-6xl h-[90vh] z-10">
        <TerminalWindow title="INSIGHT SYNTHESIZER :: vOS 1.0" status="ONLINE" statusColor="bg-green-500">
          <UnifiedSynthesizer
            insight={insight}
            initialProblem={initialProblem}
            initialBehavior={initialBehavior}
            initialResult={initialResult}
            alternatives={alternatives}
          />
        </TerminalWindow>
      </div>
    </div>
  )
}
