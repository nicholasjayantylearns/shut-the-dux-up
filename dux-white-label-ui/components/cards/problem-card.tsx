"use client"

import type { Problem } from "@/types/dux-v9.5"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { GitBranch, Layers } from "lucide-react"
import { MaturityBadge } from "./maturity-badge"

type ProblemCardProps = {
  data: Problem
  variant?: "default" | "mini"
  concept?: "default" | "monospace"
}

export function ProblemCard({ data, variant = "default", concept = "default" }: ProblemCardProps) {
  const cardClasses = cn("h-full flex flex-col border-green-500/30 bg-green-900/10 text-green-300", {
    "font-mono": concept === "monospace",
    "bg-green-900/20": variant === "mini",
  })

  const titleClasses = cn("text-green-300", {
    "font-barlow text-xl": concept === "default",
    "text-base": concept === "monospace",
  })

  const textClasses = cn("text-green-400/80", {
    "font-sansBody": concept === "default",
    "text-sm": concept === "monospace",
  })

  if (variant === "mini") {
    return (
      <Card className={cardClasses}>
        <CardHeader className="p-3">
          <div className="flex justify-between items-center">
            <CardTitle className={cn(titleClasses, "text-sm uppercase tracking-wider")}>Problem</CardTitle>
            <MaturityBadge maturity={data.evidence_maturity} />
          </div>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <p className={textClasses}>{data.job_statement}</p>
        </CardContent>
        <CardFooter className="p-3 pt-0 mt-auto text-xs text-green-700">ID: {data.id}</CardFooter>
      </Card>
    )
  }

  return (
    <Card className={cardClasses}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-semibold text-green-500 uppercase tracking-wider">Problem</p>
            <CardTitle className={titleClasses}>{data.job_statement}</CardTitle>
          </div>
          <MaturityBadge maturity={data.evidence_maturity} />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className={textClasses}>{data.problem_statement}</p>
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-semibold text-green-400">Key Details</h4>
          <ul className="list-disc list-inside text-sm text-green-400/70 space-y-1">
            {data.user_personas.map((p) => (
              <li key={p}>
                <span className="font-semibold">Persona:</span> {p}
              </li>
            ))}
            {data.user_pain_points.map((p) => (
              <li key={p}>
                <span className="font-semibold">Pain Point:</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-xs text-green-500/70">
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
