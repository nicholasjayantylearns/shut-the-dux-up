"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Journey } from "@/types/dux-v9.5"
import { useGovernance } from "@/hooks/use-governance"

interface JourneyCardProps {
  data: Journey
  variant: "mini" | "grid" | "detail"
  concept: "clarity" | "monospace"
  className?: string
}

export function JourneyCard({ data, variant, concept, className }: JourneyCardProps) {
  // Governance: 1. steps, 2. success_metrics, 3. entry_point
  const { hasErrors, errorMessage } = useGovernance("JourneyCard", variant, 3)

  if (concept === "clarity") {
    return (
      <Card
        className={`font-barlow h-full border-2 border-card-clarity-border hover:border-gray-400 transition-colors ${className}`}
      >
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4">
            <p className="text-xs font-bold text-card-clarity-text-secondary uppercase tracking-wider">Journey</p>
            <h3 className="font-bold text-card-clarity-text-muted mt-1 text-lg">{data.name}</h3>
          </div>
          <div className="flex-grow space-y-4">
            <div>
              <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">Steps</p>
              <p className="text-4xl font-extrabold text-card-clarity-text-primary">{data.steps.length}</p>
            </div>
            <div className="border-t pt-4">
              <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">
                Success Metrics
              </p>
              <p className="text-4xl font-extrabold text-card-clarity-text-primary">{data.success_metrics.length}</p>
            </div>
            <div className="border-t pt-4">
              <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">
                Entry Point
              </p>
              <p className="text-sm text-card-clarity-text-italic mt-1">{data.entry_point}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Monospace Concept
  return (
    <div className={`p-4 h-full ${className}`}>
      <p className="font-monospace text-xs text-card-monospace-text-secondary">JOUR::{data.id}</p>
      <h3 className="font-monospace font-bold text-base mt-2 text-card-monospace-text-primary">{data.name}</h3>
      <div className="font-sansBody mt-4 space-y-1 text-xs">
        <p>
          <span className="text-card-monospace-text-secondary">PERSONA:</span> {data.persona_id}
        </p>
        <p>
          <span className="text-card-monospace-text-secondary">STEPS:</span> {data.steps.length}
        </p>
        <p>
          <span className="text-card-monospace-text-secondary">METRICS:</span> {data.success_metrics.length}
        </p>
      </div>
    </div>
  )
}
