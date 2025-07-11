"use client"

import type { Result } from "@/types/dux-v9.5"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Trophy, Target, GitBranch, Layers } from "lucide-react"
import { MaturityBadge } from "./maturity-badge"

interface ResultCardProps {
  data: Result
  variant?: "default" | "mini"
  concept?: "default" | "monospace"
}

export function ResultCard({ data, variant = "default", concept = "default" }: ResultCardProps) {
  const cardClasses = cn("h-full flex flex-col border-purple-500/30 bg-purple-900/10 text-purple-300", {
    "font-mono": concept === "monospace",
    "bg-purple-900/20": variant === "mini",
  })

  const titleClasses = cn("text-purple-300", {
    "font-barlow text-xl": concept === "default",
    "text-base": concept === "monospace",
  })

  const textClasses = cn("text-purple-400/80", {
    "font-sansBody": concept === "default",
    "text-sm": concept === "monospace",
  })

  if (variant === "mini") {
    return (
      <Card className={cardClasses}>
        <CardHeader className="p-3">
          <div className="flex justify-between items-center">
            <CardTitle className={cn(titleClasses, "text-sm uppercase tracking-wider")}>Result</CardTitle>
            <MaturityBadge maturity={data.evidence_maturity} />
          </div>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <p className={textClasses}>{data.job_statement}</p>
        </CardContent>
        <CardFooter className="p-3 pt-0 mt-auto text-xs text-purple-700">ID: {data.id}</CardFooter>
      </Card>
    )
  }

  return (
    <Card className={cardClasses}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-semibold text-purple-500 uppercase tracking-wider">Result</p>
            <CardTitle className={titleClasses}>{data.job_statement}</CardTitle>
          </div>
          <MaturityBadge maturity={data.evidence_maturity} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <div className="flex items-start space-x-3">
          <Target className="w-4 h-4 mt-1 text-red-400 flex-shrink-0" />
          <p className={textClasses}>
            <span className="font-bold text-purple-300">Outcome:</span> {data.outcome_description}
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <Trophy className="w-4 h-4 mt-1 text-yellow-400 flex-shrink-0" />
          <p className={textClasses}>
            <span className="font-bold text-purple-300">Value Prop:</span> {data.value_proposition}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-xs text-purple-500/70">
        <div className="flex items-center gap-1">
          <GitBranch className="w-3 h-3" />
          <span>{data.id}</span>
        </div>
        <div className="flex items-center gap-1">
          <Layers className="w-3 h-3" />
          <span>{data.provenance.length} Sources</span>
        </div>
      </CardFooter>
    </Card>
  )
}
