"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { UserOutcome } from "@/types/dux-v9.5"
import { Target } from "lucide-react"

interface UserOutcomeCardProps {
  data: UserOutcome
  className?: string
}

export function UserOutcomeCard({ data, className }: UserOutcomeCardProps) {
  const metricName = Object.keys(data.outcome_metrics)[0]
  const metricValue = Object.values(data.outcome_metrics)[0]

  return (
    <Card
      className={`font-barlow h-full border-2 border-gray-200 hover:border-gray-400 transition-colors ${className}`}
    >
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-green-600" />
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">User Outcome</p>
        </div>
        <h3 className="font-bold text-gray-800 text-lg flex-grow">{data.name}</h3>
        <div className="border-t pt-4 mt-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{metricName}</p>
          <p className="text-4xl font-extrabold text-gray-900">{metricValue}</p>
        </div>
      </CardContent>
    </Card>
  )
}
