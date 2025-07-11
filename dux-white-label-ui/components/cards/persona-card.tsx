"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Persona } from "@/types/dux-v9.5"
import { useGovernance } from "@/hooks/use-governance"
import { User } from "lucide-react"

interface PersonaCardProps {
  data: Persona
  variant: "mini" | "grid" | "detail"
  concept: "clarity" | "monospace"
  className?: string
}

export function PersonaCard({ data, variant, concept, className }: PersonaCardProps) {
  // Governance: 1. role, 2. goals, 3. frustrations
  const { hasErrors, errorMessage } = useGovernance("PersonaCard", variant, 3)

  if (concept === "clarity") {
    return (
      <Card
        className={`font-barlow h-full border-2 border-card-clarity-border hover:border-gray-400 transition-colors ${className}`}
      >
        <CardContent className="p-6 flex flex-col h-full">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-bg-tertiary rounded-full mx-auto flex items-center justify-center">
              <User className="w-12 h-12 text-card-clarity-text-secondary" />
            </div>
            <h3 className="font-bold text-card-clarity-text-muted mt-4 text-2xl">{data.name}</h3>
            <p className="text-sm text-card-clarity-text-secondary">{data.role}</p>
          </div>
          <div className="flex-grow space-y-4">
            <div>
              <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">
                Top Goal
              </p>
              <p className="text-md font-medium text-card-clarity-text-muted mt-1">"{data.goals[0]}"</p>
            </div>
            <div className="border-t pt-4">
              <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">
                Top Frustration
              </p>
              <p className="text-md font-medium text-card-clarity-text-muted mt-1">"{data.frustrations[0]}"</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Monospace Concept
  return (
    <div className={`p-4 h-full bg-card-monospace-bg text-card-monospace-text-primary ${className}`}>
      <p className="font-monospace text-xs text-card-monospace-text-secondary">PER::{data.id}</p>
      <h3 className="font-monospace font-bold text-base mt-2 text-card-monospace-text-primary">{data.name}</h3>
      <p className="font-sansBody text-xs text-card-monospace-text-secondary">{data.role}</p>
      <div className="font-sansBody mt-4 space-y-1 text-xs">
        <p>
          <span className="text-card-monospace-text-secondary">GOALS:</span> {data.goals.length}
        </p>
        <p>
          <span className="text-card-monospace-text-secondary">PAIN:</span> {data.frustrations.length}
        </p>
        <p>
          <span className="text-card-monospace-text-secondary">BEH:</span> {data.key_behaviors.length}
        </p>
      </div>
    </div>
  )
}
