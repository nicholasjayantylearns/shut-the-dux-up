import type { Behavior } from "@/types/dux-v9.5"
import { CheckSquare } from "lucide-react"

export function BehaviorCardV2({ data }: { data: Behavior }) {
  return (
    <div className="bg-card-clarity-bg border border-card-clarity-border rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col p-6 font-sansBody">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">Behavior</p>
          <p className="font-barlow font-bold text-lg text-card-clarity-text-muted mt-1">{data.name}</p>
        </div>
        <div className="text-center flex-shrink-0 ml-4">
          <p className="font-barlow font-extrabold text-3xl text-accent-behavior">{data.percent_steps_passing}%</p>
          <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">Passing</p>
        </div>
      </div>

      <div className="flex-grow space-y-4">
        <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">
          Acceptance Criteria
        </p>
        <ul className="space-y-2">
          {data.acceptance_criteria.map((criterion, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckSquare className="w-4 h-4 text-accent-positive mt-0.5 flex-shrink-0" />
              <span className="text-card-clarity-text-italic text-sm">{criterion}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 text-right">
        <p className="text-xs text-card-clarity-text-secondary">BEHAVIOR::{data.id}</p>
      </div>
    </div>
  )
}
