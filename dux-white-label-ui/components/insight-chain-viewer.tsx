"use client"

import { useState, useEffect } from "react"
import type * as Dux from "@/types/dux-v9.5"
import { ProblemCard } from "@/components/cards/problem-card"
import { BehaviorCard } from "@/components/cards/behavior-card"
import { ResultCard } from "@/components/cards/result-card"
import type { Filter } from "@/data/filters" // Import Filter type
import { InsightRefinementPanel } from "@/components/insight-refinement-panel"

interface InsightChainViewerProps {
  insight: Dux.Insight
  initialProblem: Dux.Problem
  initialBehavior: Dux.Behavior
  initialResult: Dux.Result
  alternatives: {
    problems: Dux.Problem[]
    behaviors: Dux.Behavior[]
    results: Dux.Result[]
  }
  filters: Filter[] // New prop: array of available filters
  initialFilter: Filter | null // New prop: the initially active filter
}

const EvidenceHighlightCard = ({ quote, citation }: { quote: string; citation: string }) => (
  <div className="bg-evidence-highlight-bg border border-evidence-highlight-border rounded-none p-6 text-left shadow-md">
    <blockquote
      key={quote}
      className="font-barlow text-2xl font-bold text-gray-100 leading-tight animate-reveal-left animate-fade-in min-h-[60px] overflow-hidden text-left"
    >
      "{quote}"
    </blockquote>
    <cite className="block font-monospace text-sm text-gray-400 mt-3 not-italic tracking-wider text-left">
      - {citation}
    </cite>
  </div>
)

export function InsightChainViewer({
  insight,
  initialProblem,
  initialBehavior,
  initialResult,
  alternatives,
  filters, // Use the new filters prop
  initialFilter, // Use the new initialFilter prop
}: InsightChainViewerProps) {
  const [currentProblem, setCurrentProblem] = useState<Dux.Problem>(initialProblem)
  const [currentBehavior, setCurrentBehavior] = useState<Dux.Behavior>(initialBehavior)
  const [currentResult, setCurrentResult] = useState<Dux.Result>(initialResult)
  const [editableInsightStory, setEditableInsightStory] = useState(insight.insight_story_block)

  // Handle both string and string[] for end_user
  const endUser = Array.isArray(currentProblem.end_user) ? currentProblem.end_user.join(", ") : currentProblem.end_user

  const [activeTeaserIndex, setActiveTeaserIndex] = useState(0)

  const teaserContent = [
    {
      quote: currentProblem.evidence_teaser,
      citation: `${Array.isArray(currentProblem.end_user) ? currentProblem.end_user.join(", ") : currentProblem.end_user} – ${currentProblem.id}`,
    },
    {
      quote: currentBehavior.description,
      citation: `${currentBehavior.end_user} – ${currentBehavior.id}`,
    },
    {
      quote: currentResult.description,
      citation: `${currentResult.owner_team} – ${currentResult.id}`,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeaserIndex((prevIndex) => (prevIndex + 1) % teaserContent.length)
    }, 7000) // Cycle every 7 seconds

    return () => clearInterval(interval) // Clean up the interval on component unmount
  }, [teaserContent.length]) // Re-run effect if teaserContent length changes

  const currentTeaser = teaserContent[activeTeaserIndex]

  const handleSaveInsight = () => {
    // In a real application, this would call a Server Action or API route
    // to persist the current insight chain (currentProblem, currentBehavior, currentResult)
    // and the updated insight story to a database or file system.
    console.log("Saving Insight:", {
      insightId: insight.id,
      problem: currentProblem.id,
      behavior: currentBehavior.id,
      result: currentResult.id,
      story: editableInsightStory,
    })
    alert(`Insight "${insight.name}" saved! (Conceptually)`)
  }

  const handleAddMessageAsNote = (message: string) => {
    // This function is now conceptually for adding AI messages as notes/annotations directly to the insight story.
    // In a real implementation, you might append the message to a list of notes associated with the story,
    // or trigger an LLM re-phrase based on the message.
    console.log(`Adding AI message as note to Insight Story: "${message}"`)
    alert(`AI message added as note to Insight Story! (Conceptually)`)
  }

  const handleNewAssistantMessage = (message: string) => {
    // This will replace the current story with the new AI message.
    // For more advanced scenarios (e.g., appending, re-phrasing),
    // this logic would be more complex.
    setEditableInsightStory(message)
  }

  return (
    <div className="p-1 text-left">
      <div className="bg-[var(--carousel-bg)] p-6 rounded-none border-[var(--carousel-border)] space-y-6 text-left">
        {/* Insight Story Block (LLM-generated copy) */}

        {/* Evidence “magnet” */}
        <div className="relative">
          <EvidenceHighlightCard quote={currentTeaser.quote} citation={currentTeaser.citation} />
        </div>
        {/* Monospace mini-cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ProblemCard
            data={currentProblem}
            variant="mini"
            concept="monospace"
            className="border border-card-monospace-border bg-card-monospace-bg text-card-monospace-text-primary rounded-none shadow-sm"
          />
          <BehaviorCard
            data={currentBehavior}
            variant="mini"
            concept="monospace"
            className="border border-card-monospace-border bg-card-monospace-bg text-card-monospace-text-primary rounded-none shadow-sm"
          />
          <ResultCard
            data={currentResult}
            variant="mini"
            concept="monospace"
            className="border border-card-monospace-border bg-card-monospace-bg text-card-monospace-text-primary rounded-none shadow-sm"
          />
        </div>

        {/* Refinement Workflow for Evidence Tunnel */}
        <InsightRefinementPanel
          insightName={insight.name} // Pass insight name
          editableInsightStory={editableInsightStory} // Pass editable story state
          setEditableInsightStory={setEditableInsightStory} // Pass setter for story state
          onNewAssistantMessage={handleNewAssistantMessage} // Pass AI message handler
          onAddMessageAsNote={handleAddMessageAsNote} // Pass note handler
          currentProblemId={currentProblem.id} // Pass current problem ID for chat context
          currentBehaviorId={currentBehavior.id} // Pass current behavior ID for chat context
          currentResultId={currentResult.id} // Pass current result ID for chat context
          currentProblem={currentProblem}
          currentBehavior={currentBehavior}
          currentResult={currentResult}
          alternatives={alternatives}
          filters={filters}
          initialFilter={initialFilter}
          onReplaceProblem={setCurrentProblem}
          onReplaceBehavior={setCurrentBehavior}
          onReplaceResult={setCurrentResult}
          onSaveInsight={handleSaveInsight}
        />
      </div>
    </div>
  )
}
