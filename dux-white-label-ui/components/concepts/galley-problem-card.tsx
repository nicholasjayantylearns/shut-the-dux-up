import type { Problem } from "@/types/dux-v9.5"

export function GalleyProblemCard({ data }: { data: Problem }) {
  return (
    <div className="w-[450px] bg-[#FBF9F3] border border-gray-300 shadow-md flex font-serif">
      {/* Margin */}
      <div className="w-1/3 bg-gray-50 border-r border-gray-200 p-4 text-xs font-monospace text-gray-500 space-y-4">
        <div>
          <p className="font-bold uppercase">ID</p>
          <p>{data.id}</p>
        </div>
        <div>
          <p className="font-bold uppercase">User</p>
          <p>{data.end_user}</p>
        </div>
        <div>
          <p className="font-bold uppercase">Stake</p>
          <p>{data.whats_at_stake}</p>
        </div>
        <div>
          <p className="font-bold uppercase">Score</p>
          <p>{data.opportunity_score}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Problem Statement</p>
        <h2 className="text-2xl leading-snug text-gray-800 mb-6">{data.name}</h2>

        <div className="border-t border-gray-200 pt-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Evidence</p>
          <p
            className="italic text-gray-600 bg-yellow-100/80 p-2"
            style={{
              boxShadow: "inset 3px 0 0 0 #FBBF24",
            }}
          >
            "{data.evidence_teaser}"
          </p>
        </div>
      </div>
    </div>
  )
}
