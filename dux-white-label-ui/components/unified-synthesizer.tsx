"use client"

import { useState, useId } from "react"
import type * as Dux from "@/types/dux-v9.5"
import { Button } from "@/components/ui/button"
import { Typewriter } from "@/components/dossier/typewriter"
import { ProblemCard } from "@/components/cards/problem-card"
import { BehaviorCard } from "@/components/cards/behavior-card"
import { ResultCard } from "@/components/cards/result-card"
import { ChatInterface } from "@/components/chat-interface"
import { AlternativeCard } from "@/components/cards/alternative-card"
import { ActionHub } from "@/components/dossier/action-hub"
import { ArrowRight, CheckCircle } from "lucide-react"

interface UnifiedSynthesizerProps {
  insight: Dux.Insight
  initialProblem: Dux.Problem
  initialBehavior: Dux.Behavior
  initialResult: Dux.Result
  alternatives: {
    problems: Dux.Problem[]
    behaviors: Dux.Behavior[]
    results: Dux.Result[]
  }
}

const StepIndicator = ({ title, isComplete }: { title: string; isComplete: boolean }) => (
  <div className="flex items-center gap-2">
    {isComplete ? (
      <CheckCircle className="w-4 h-4 text-green-400" />
    ) : (
      <ArrowRight className="w-4 h-4 text-green-700" />
    )}
    <span className={`text-sm font-bold uppercase tracking-wider ${isComplete ? "text-green-400" : "text-green-700"}`}>
      {title}
    </span>
  </div>
)

export function UnifiedSynthesizer({
  insight,
  initialProblem,
  initialBehavior,
  initialResult,
  alternatives,
}: UnifiedSynthesizerProps) {
  const [step, setStep] = useState(0)
  const totalSteps = 4

  const [currentProblem, setCurrentProblem] = useState<Dux.Problem>(initialProblem)
  const [currentBehavior, setCurrentBehavior] = useState<Dux.Behavior>(initialBehavior)
  const [currentResult, setCurrentResult] = useState<Dux.Result>(initialResult)
  const [editableInsightStory, setEditableInsightStory] = useState(insight.insight_story_block)

  const chatInputId = useId()

  const handleNextStep = () => setStep((s) => Math.min(s + 1, totalSteps - 1))

  const renderContentForStep = () => {
    if (step === 0) {
      // Step 1: Load Insight
      return (
        <div className="text-2xl md:text-3xl text-green-300 leading-relaxed">
          <p className="text-green-500 text-base mb-4">&gt; load_insight --id={insight.id}</p>
          <Typewriter text={insight.insight_teaser || insight.name} onFinished={handleNextStep} speed={25} />
        </div>
      )
    }

    if (step >= 1) {
      // Step 2: Display Chain & Mixer
      return (
        <div className="space-y-4">
          <StepIndicator title="Step 1: Insight Loaded" isComplete={true} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
            <ProblemCard data={currentProblem} variant="mini" concept="monospace" />
            <BehaviorCard data={currentBehavior} variant="mini" concept="monospace" />
            <ResultCard data={currentResult} variant="mini" concept="monospace" />
          </div>
          {step === 1 && (
            <div className="mt-6 pt-6 border-t-2 border-green-900/50 animate-fade-in">
              <p className="text-sm font-bold uppercase tracking-wider text-green-500">Step 2: Explore Alternatives</p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2">Problem Alternatives</p>
                  <div className="space-y-2">
                    {alternatives.problems.map((p) => (
                      <AlternativeCard
                        key={p.id}
                        object={p}
                        concept="monospace"
                        onReplace={(obj) => setCurrentProblem(obj as Dux.Problem)}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2">
                    Behavior Alternatives
                  </p>
                  <div className="space-y-2">
                    {alternatives.behaviors.map((b) => (
                      <AlternativeCard
                        key={b.id}
                        object={b}
                        concept="monospace"
                        onReplace={(obj) => setCurrentBehavior(obj as Dux.Behavior)}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2">Result Alternatives</p>
                  <div className="space-y-2">
                    {alternatives.results.map((r) => (
                      <AlternativeCard
                        key={r.id}
                        object={r}
                        concept="monospace"
                        onReplace={(obj) => setCurrentResult(obj as Dux.Result)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center pt-6">
                <Button
                  onClick={handleNextStep}
                  className="bg-green-600/20 text-green-300 hover:bg-green-600/40 border border-green-600/50"
                >
                  Refine Narrative <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>
      )
    }
    return null
  }

  const renderRefinementPanels = () => {
    if (step >= 2) {
      // Step 3: Refine Narrative with AI
      return (
        <div className="mt-6 pt-6 border-t-2 border-green-900/50 animate-fade-in">
          <StepIndicator title="Step 3: Refine Narrative" isComplete={step > 2} />
          <div className="mt-4 bg-black/50 border border-green-900/50 rounded-md overflow-hidden">
            <textarea
              className="font-sansBody text-lg text-green-300 leading-relaxed w-full p-4 bg-transparent border-none focus:outline-none focus:ring-0 resize-y min-h-[250px]"
              value={editableInsightStory}
              onChange={(e) => setEditableInsightStory(e.target.value)}
              aria-label="Insight Narrative Content Window"
              placeholder="Refine the insight narrative directly, or use the chat controls below to generate changes..."
            />
            <ChatInterface
              variant="integrated"
              onNewAssistantMessage={setEditableInsightStory}
              currentProblemId={currentProblem.id}
              currentBehaviorId={currentBehavior.id}
              currentResultId={currentResult.id}
              chatInputId={chatInputId}
            />
          </div>
          {step === 2 && (
            <div className="text-center pt-6">
              <Button
                onClick={handleNextStep}
                className="bg-green-600/20 text-green-300 hover:bg-green-600/40 border border-green-600/50"
              >
                Generate Actions <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      )
    }
    return null
  }

  const renderActionHub = () => {
    if (step >= 3) {
      // Step 4: Action Hub
      return (
        <div className="mt-6 pt-6 border-t-2 border-green-900/50 animate-fade-in">
          <StepIndicator title="Step 4: Generate Actions" isComplete={true} />
          <div className="mt-4">
            <ActionHub provenanceId={insight.id} problemId={currentProblem.id} />
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="h-full overflow-y-auto p-2">
      {renderContentForStep()}
      {renderRefinementPanels()}
      {renderActionHub()}
    </div>
  )
}
