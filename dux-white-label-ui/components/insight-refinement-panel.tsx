"use client"

import { useState, useId } from "react" // Import useId
import type * as Dux from "@/types/dux-v9.5"
import { AlternativeCard } from "@/components/cards/alternative-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Filter } from "@/data/filters"
import { matchesFilter } from "@/lib/dux-utils" // Import the helper function
import { ChatInterface } from "@/components/chat-interface"

interface InsightRefinementPanelProps {
  currentProblem: Dux.Problem
  currentBehavior: Dux.Behavior
  currentResult: Dux.Result
  alternatives: {
    problems: Dux.Problem[]
    behaviors: Dux.Behavior[]
    results: Dux.Result[]
  }
  filters: Filter[]
  initialFilter: Filter | null
  onReplaceProblem: (newProblem: Dux.Problem) => void
  onReplaceBehavior: (newBehavior: Dux.Behavior) => void
  onReplaceResult: (newResult: Dux.Result) => void
  onSaveInsight: () => void
  insightName: string
  editableInsightStory: string
  setEditableInsightStory: (story: string) => void
  onNewAssistantMessage: (message: string) => void
  onAddMessageAsNote: (message: string) => void
  currentProblemId: string
  currentBehaviorId: string
  currentResultId: string
}

export function InsightRefinementPanel({
  currentProblem,
  currentBehavior,
  currentResult,
  alternatives,
  filters,
  initialFilter,
  onReplaceProblem,
  onReplaceBehavior,
  onReplaceResult,
  onSaveInsight,
  insightName,
  editableInsightStory,
  setEditableInsightStory,
  onNewAssistantMessage,
  onAddMessageAsNote,
  currentProblemId,
  currentBehaviorId,
  currentResultId,
}: InsightRefinementPanelProps) {
  const [activeFilter, setActiveFilter] = useState<Filter | null>(initialFilter)

  // Generate unique IDs for this instance of the component
  const narrativeId = useId()
  const chatInputId = useId()

  const handleFilterChange = (filterId: string) => {
    const selectedFilter = filters.find((filter) => filter.id === filterId)
    setActiveFilter(selectedFilter || null)
  }

  const filteredProblems = alternatives.problems.filter((p) => matchesFilter(p, activeFilter))
  const filteredBehaviors = alternatives.behaviors.filter((b) => matchesFilter(b, activeFilter))
  const filteredResults = alternatives.results.filter((r) => matchesFilter(r, activeFilter))

  return (
    <div className="pt-4 border-t border-card-monospace-border">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm font-semibold text-card-monospace-text-secondary">Refine Insight Chain</p>
          <p className="text-xs text-text-placeholder">
            Swap objects with other candidates to explore different narratives.
          </p>
        </div>
        {/* Filter Knob */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-text-placeholder uppercase tracking-wider">Filter By:</span>
          <Select onValueChange={handleFilterChange} defaultValue={activeFilter?.id || filters[0].id}>
            <SelectTrigger className="w-[180px] bg-gray-800 text-gray-100 border-gray-600 h-8 text-sm">
              <SelectValue placeholder="Select filter" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-gray-100 border-gray-600">
              {filters.map((filter) => (
                <SelectItem key={filter.id} value={filter.id}>
                  {filter.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-xs font-bold text-text-placeholder uppercase tracking-wider mb-2">
            Problem Alternatives ({filteredProblems.length})
          </p>
          <div className="space-y-2">
            {filteredProblems.length > 0 ? (
              filteredProblems.map((p) => (
                <AlternativeCard key={p.id} object={p} concept="monospace" onReplace={onReplaceProblem} />
              ))
            ) : (
              <p className="text-xs text-text-secondary italic">No matching problems.</p>
            )}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-text-placeholder uppercase tracking-wider mb-2">
            Behavior Alternatives ({filteredBehaviors.length})
          </p>
          <div className="space-y-2">
            {filteredBehaviors.length > 0 ? (
              filteredBehaviors.map((b) => (
                <AlternativeCard key={b.id} object={b} concept="monospace" onReplace={onReplaceBehavior} />
              ))
            ) : (
              <p className="text-xs text-text-secondary italic">No matching behaviors.</p>
            )}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-text-placeholder uppercase tracking-wider mb-2">
            Result Alternatives ({filteredResults.length})
          </p>
          <div className="space-y-2">
            {filteredResults.length > 0 ? (
              filteredResults.map((r) => (
                <AlternativeCard key={r.id} object={r} concept="monospace" onReplace={onReplaceResult} />
              ))
            ) : (
              <p className="text-xs text-text-secondary italic">No matching results.</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <Button
          onClick={onSaveInsight}
          className="bg-blue-600 text-white hover:bg-blue-700 shadow-md font-sansBody text-sm font-medium"
        >
          Save This Insight
        </Button>
      </div>
      {/* Insight Story Block (LLM-generated copy) */}
      <div className="mt-8 mb-6 text-left">
        <h2 className="text-2xl font-bold font-barlow text-text-primary">{insightName}</h2>
        <p className="text-sm font-semibold uppercase tracking-wider text-text-placeholder mt-1 mb-2">
          Insight Narrative
        </p>
        <textarea
          id={narrativeId} // Use unique ID
          name="insightNarrative"
          className="font-sansBody text-lg text-[var(--carousel-text-primary)] leading-relaxed w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-neon-blue resize-y min-h-[150px]"
          value={editableInsightStory}
          onChange={(e) => setEditableInsightStory(e.target.value)}
          aria-label="Insight Narrative (AI-generated)"
          readOnly // Keep this attribute
        />
        {/* Optional: Add a save button for the story if auto-save is not implemented */}
        {/* <Button onClick={handleSaveInsight} className="mt-2">Save Story</Button> */}

        {/* Integrated Chat Interface */}
        <div className="mt-6">
          <h3 className="text-xl font-bold font-barlow mb-3 text-gray-100">Refine with AI</h3>
          <ChatInterface
            onAddMessageAsNote={onAddMessageAsNote}
            currentProblemId={currentProblemId}
            currentBehaviorId={currentBehaviorId}
            currentResultId={currentResultId}
            onNewAssistantMessage={onNewAssistantMessage}
            chatInputId={chatInputId} // Pass unique ID to ChatInterface
          />
        </div>
      </div>
    </div>
  )
}
