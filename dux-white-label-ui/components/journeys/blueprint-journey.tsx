import type { Insight, Problem, Behavior, Result } from "@/types/dux-v9.5"
import { ArrowRight } from "lucide-react"

const BlueprintCard = ({
  title,
  name,
  id,
  className,
}: { title: string; name: string; id: string; className?: string }) => (
  <div
    className={`w-64 h-40 p-4 border-2 border-cyan-300/80 bg-blue-900/50 text-white flex flex-col justify-between font-monospace shadow-lg ${className}`}
  >
    <div>
      <p className="text-sm font-bold text-cyan-200">{title}</p>
      <p className="mt-1 text-lg font-bold leading-tight text-white">{name}</p>
    </div>
    <p className="text-xs text-cyan-400/70 text-right">{id}</p>
  </div>
)

const Connector = () => (
  <div className="flex-1 flex items-center justify-center">
    <div className="w-full border-t-2 border-dashed border-cyan-400/50 relative">
      <ArrowRight className="w-6 h-6 text-cyan-300 absolute right-0 top-1/2 -translate-y-1/2 bg-[#0d1b3a]" />
    </div>
  </div>
)

export function BlueprintJourney({
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
    <div className="w-full p-8 rounded-lg bg-[#0d1b3a] bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250629_0905_Subway%20Element%20Blueprints_simple_compose_01jyxzxvvje6asv9ffk853nebt-xTxOK17creqVhYxbwhobUmyVZC8iD7.png')] bg-cover bg-center">
      <div className="text-center mb-8">
        <h3 className="font-monospace text-2xl font-bold text-white">INSIGHT: {insight.name}</h3>
      </div>
      <div className="flex items-center gap-4">
        <BlueprintCard title="Problem" name={problem.name!} id={problem.id} />
        <Connector />
        <BlueprintCard title="Behavior" name={behavior.name} id={behavior.id} />
        <Connector />
        <BlueprintCard title="Result" name={result.name} id={result.id} />
      </div>
    </div>
  )
}
