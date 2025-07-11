import type { Persona } from "@/types/dux-v9.5"
import { User, ThumbsUp, ThumbsDown } from "lucide-react"

export function PersonaCardV2({ data }: { data: Persona }) {
  return (
    <div className="bg-card-clarity-bg border border-card-clarity-border rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col p-6 font-sansBody">
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-bg-tertiary rounded-full mx-auto flex items-center justify-center border-4 border-card-clarity-bg ring-1 ring-card-clarity-border">
          <User className="w-10 h-10 text-card-clarity-text-secondary" />
        </div>
        <h3 className="font-barlow font-bold text-card-clarity-text-muted mt-4 text-2xl">{data.name}</h3>
        <p className="text-sm text-card-clarity-text-secondary font-medium">{data.role}</p>
      </div>

      <div className="flex-grow space-y-4">
        <div>
          <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider flex items-center gap-2">
            <ThumbsUp className="w-4 h-4 text-accent-positive" /> Goals
          </p>
          <p className="text-card-clarity-text-italic mt-1 pl-6 text-sm">"{data.goals[0]}"</p>
        </div>
        <div className="border-t pt-4">
          <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider flex items-center gap-2">
            <ThumbsDown className="w-4 h-4 text-accent-negative" /> Frustrations
          </p>
          <p className="text-card-clarity-text-italic mt-1 pl-6 text-sm">"{data.frustrations[0]}"</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 text-right">
        <p className="text-xs text-card-clarity-text-secondary">PERSONA::{data.id}</p>
      </div>
    </div>
  )
}
