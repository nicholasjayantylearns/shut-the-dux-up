import type { Problem } from "@/types/dux-v9.5"
import { Clapperboard } from "lucide-react"

export function DocumentaryProblemCard({ data }: { data: Problem }) {
  return (
    <div className="w-[400px] h-[500px] bg-gray-900 text-white font-sansBody rounded-lg shadow-2xl flex flex-col p-8 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/20 opacity-50"
        style={{ mixBlendMode: "soft-light" }}
      ></div>

      <div className="flex items-center gap-3 z-10">
        <Clapperboard className="w-5 h-5 text-blue-300" />
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">Inciting Incident</p>
      </div>

      <div className="flex-grow flex items-center justify-center z-10">
        <h2 className="font-barlow text-4xl font-bold text-center leading-tight text-gray-100">{data.name}</h2>
      </div>

      <div className="z-10">
        <p className="text-center text-lg italic text-gray-300/80 leading-relaxed">"{data.evidence_teaser}"</p>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 flex justify-between items-center text-xs text-gray-500 z-10">
        <span>END USER: {data.end_user}</span>
        <span>STAKE: {data.whats_at_stake}</span>
      </div>
    </div>
  )
}
