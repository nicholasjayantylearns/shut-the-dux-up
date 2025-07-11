import type { Problem } from "@/types/dux-v9.5"
import { GitBranch, Users, Target } from "lucide-react"

export function MindMapProblemCard({ data }: { data: Problem }) {
  const Connector = ({ side }: { side: "left" | "right" | "top" | "bottom" }) => {
    const positions = {
      left: "-left-3 top-1/2 -translate-y-1/2",
      right: "-right-3 top-1/2 -translate-y-1/2",
      top: "-top-3 left-1/2 -translate-x-1/2",
      bottom: "-bottom-3 left-1/2 -translate-x-1/2",
    }
    return (
      <div
        className={`absolute ${positions[side]} w-6 h-6 bg-white border-2 border-blue-500 rounded-full group-hover:bg-blue-500 transition-colors`}
      ></div>
    )
  }

  return (
    <div className="w-[400px] h-[300px] bg-blue-50 border-2 border-blue-500 rounded-2xl shadow-lg flex flex-col p-6 font-sansBody relative group">
      {/* Connectors */}
      <Connector side="left" />
      <Connector side="right" />
      <Connector side="top" />
      <Connector side="bottom" />

      <div className="flex items-center gap-3 text-blue-800">
        <GitBranch className="w-5 h-5" />
        <p className="font-semibold">Problem Node</p>
      </div>

      <div className="flex-grow my-4">
        <h2 className="font-barlow text-2xl font-bold text-gray-900">{data.name}</h2>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3 text-gray-700">
          <Users className="w-4 h-4 text-gray-500" />
          <span>
            <span className="font-semibold">For:</span> {data.end_user}
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <Target className="w-4 h-4 text-gray-500" />
          <span>
            <span className="font-semibold">Stake:</span> {data.whats_at_stake}
          </span>
        </div>
      </div>
    </div>
  )
}
