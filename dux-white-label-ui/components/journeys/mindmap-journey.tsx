import type React from "react"
import type { Insight, Problem, Behavior, Result } from "@/types/dux-v9.5"
import { Lightbulb, AlertTriangle, Zap, CheckCircle } from "lucide-react"

const MindmapNode = ({
  icon,
  title,
  name,
  className,
}: { icon: React.ReactNode; title: string; name: string; className?: string }) => (
  <div
    className={`w-60 h-48 p-5 rounded-2xl shadow-lg flex flex-col items-center text-center justify-center ${className}`}
  >
    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-card-clarity-bg mb-3">{icon}</div>
    <p className="text-sm font-bold font-barlow">{title}</p>
    <p className="text-text-secondary font-sansBody text-sm leading-tight">{name}</p>
  </div>
)

const CurvedConnector = () => (
  <div className="w-24 h-24">
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 50 C 50 0, 50 100, 100 50" stroke="#9ca3af" strokeWidth="2" strokeDasharray="4" />
    </svg>
  </div>
)

export function MindmapJourney({
  insight,
  problem,
  behavior,
  result,
}: {
  insight: Insight
  problem: Problem
  behavior: Behavior
  result: Result
}) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 font-sansBody">
      <div className="relative p-4 bg-accent-warning/80 rounded-xl border border-[var(--accent-warning-border-light)] mb-4">
        <Lightbulb className="absolute -top-3 -left-3 w-6 h-6 text-yellow-600 bg-card-clarity-bg rounded-full p-1" />
        <p className="font-barlow font-bold text-accent-warning-text">{insight.name}</p>
      </div>
      <div className="flex items-center">
        <MindmapNode
          icon={<AlertTriangle className="w-6 h-6 text-accent-negative" />}
          title="Problem"
          name={problem.name!}
          className="bg-problem-node-bg border border-problem-node-border"
        />
        <CurvedConnector />
        <MindmapNode
          icon={<Zap className="w-6 h-6 text-accent-problem" />}
          title="Behavior"
          name={behavior.name}
          className="bg-behavior-node-bg border border-behavior-node-border"
        />
        <CurvedConnector />
        <MindmapNode
          icon={<CheckCircle className="w-6 h-6 text-accent-positive" />}
          title="Result"
          name={result.name}
          className="bg-result-node-bg border border-result-node-border"
        />
      </div>
    </div>
  )
}
