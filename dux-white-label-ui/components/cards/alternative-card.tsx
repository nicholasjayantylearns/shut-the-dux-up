"use client"

import type * as Dux from "@/types/dux-v9.5"
import { cn } from "@/lib/utils"

type AlternativeCardProps = {
  object: Dux.Problem | Dux.Behavior | Dux.Result
  onReplace: (object: Dux.Problem | Dux.Behavior | Dux.Result) => void
  concept: "monospace"
}

// Helper to get the description field which has different names across object types
const getObjectDescription = (object: Dux.Problem | Dux.Behavior | Dux.Result): string => {
  if ("task_description" in object) return object.task_description
  if ("problem_statement" in object) return object.problem_statement
  if ("result_description" in object) return object.result_description
  return "No description available."
}

export function AlternativeCard({ object, onReplace, concept }: AlternativeCardProps) {
  const baseClasses = "w-full text-left p-3 rounded-md transition-all duration-200"
  const conceptClasses = {
    monospace:
      "bg-green-900/40 border border-green-700/30 hover:bg-green-800/50 hover:border-green-600/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-neon-blue",
  }

  return (
    <button
      onClick={() => onReplace(object)}
      className={cn(baseClasses, conceptClasses[concept])}
      aria-label={`Select alternative: ${object.job_statement}`}
    >
      <div className="flex justify-between items-center">
        <p className="text-xs font-bold uppercase tracking-wider text-green-500">{object.object_type}</p>
        <span className="text-xs text-green-600 font-mono">{object.id}</span>
      </div>
      <p className="mt-1 font-semibold text-green-300">{object.job_statement}</p>
      <p className="mt-2 text-xs text-green-400/70 line-clamp-2">{getObjectDescription(object)}</p>
    </button>
  )
}
