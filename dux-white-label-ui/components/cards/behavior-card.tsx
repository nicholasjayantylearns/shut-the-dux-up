"use client"

import type { Behavior } from "@/types/dux-v9.5"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { GitBranch, Layers } from "lucide-react"
import { MaturityBadge } from "./maturity-badge"

type BehaviorCardProps = {
  data: Behavior
  variant?: "default" | "mini"
  concept?: "default" | "monospace"
}

export function BehaviorCard({ data, variant = "default", concept = "default" }: BehaviorCardProps) {
  const cardClasses = cn("h-full flex flex-col border-cyan-500/30 bg-cyan-900/10 text-cyan-300", {
    "font-mono": concept === "monospace",
    "bg-cyan-900/20": variant === "mini",
  })

  const titleClasses = cn("text-cyan-300", {
    "font-barlow text-xl": concept === "default",
    "text-base": concept === "monospace",
  })

  const textClasses = cn("text-cyan-400/80", {
    "font-sansBody": concept === "default",
    "text-sm": concept === "monospace",
  })

  if (variant === "mini") {
    return (
      <Card className={cardClasses}>
        <CardHeader className="p-3">
          <div className="flex justify-between items-center">
            <CardTitle className={cn(titleClasses, "text-sm uppercase tracking-wider")}>Behavior</CardTitle>
            <MaturityBadge maturity={data.evidence_maturity} />
          </div>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <p className={textClasses}>{data.job_statement}</p>
        </CardContent>
        <CardFooter className="p-3 pt-0 mt-auto text-xs text-cyan-700">ID: {data.id}</CardFooter>
      </Card>
    )
  }

  return (
    <Card className={cardClasses}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-semibold text-cyan-500 uppercase tracking-wider">Behavior</p>
            <CardTitle className={titleClasses}>{data.job_statement}</CardTitle>
          </div>
          <MaturityBadge maturity={data.evidence_maturity} />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className={textClasses}>{data.task_description}</p>
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-semibold text-cyan-400">Success Metrics</h4>
          <ul className="list-disc list-inside text-sm text-cyan-400/70 space-y-1">
            {data.success_metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-xs text-cyan-500/70">
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
