"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Flow } from "@/types/dux-v9.5"
import { GitBranch } from "lucide-react"

interface FlowCardProps {
  data: Flow
  className?: string
}

export function FlowCard({ data, className }: FlowCardProps) {
  return (
    <Card className={`font-barlow h-full border-2 border-dashed border-gray-400 bg-gray-50 ${className}`}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-2">
          <GitBranch className="w-5 h-5 text-purple-600" />
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Flow</p>
        </div>
        <h3 className="font-bold text-gray-800 text-lg">{data.name}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-grow">{data.user_scenario}</p>
        <div className="border-t pt-4 mt-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Behaviors in Sequence</p>
          <p className="text-2xl font-extrabold text-gray-900">{data.behavior_sequence.length}</p>
        </div>
      </CardContent>
    </Card>
  )
}
