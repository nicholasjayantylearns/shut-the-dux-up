"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Provenance } from "@/types/dux-v9.5"

interface ProvenanceCardProps {
  provenance: Provenance
  concept: "clarity" | "monospace"
  className?: string
}

export function ProvenanceCard({ provenance, concept, className }: ProvenanceCardProps) {
  const { quote, citation, evidence_type, source_filename, participant_id } = provenance.evidence_block

  if (concept === "clarity") {
    return (
      <Card
        className={`font-barlow h-full border-2 border-card-clarity-border bg-card-clarity-bg shadow-sm flex-shrink-0 w-80 ${className}`}
      >
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex-grow">
            <blockquote className="border-l-4 border-gray-300 pl-4">
              <p className="text-base italic text-card-clarity-text-muted leading-relaxed">"{quote}"</p>
            </blockquote>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <cite className="text-sm text-text-secondary not-italic block">{citation}</cite>
            <Badge variant="outline" className="mt-2 text-xs">
              {evidence_type.replace(/_/g, " ")}
            </Badge>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Monospace Concept
  return (
    <div
      className={`font-monospace bg-card-monospace-bg text-card-monospace-text-primary p-4 h-full flex flex-col justify-between flex-shrink-0 w-80 border border-card-monospace-border shadow-sm ${className}`}
    >
      <div>
        <p className="font-sansBody text-base text-card-clarity-text-muted bg-bg-tertiary p-4 rounded">"{quote}"</p>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="flex justify-between items-center text-xs">
          <span className="text-card-monospace-text-secondary truncate pr-2" title={citation}>
            {citation}
          </span>
          <Badge variant="outline" className="text-xs flex-shrink-0 uppercase">
            {evidence_type.replace(/_/g, " ")}
          </Badge>
        </div>
      </div>
    </div>
  )
}
