import type { Problem } from "@/types/dux-v9.5"

export function ProblemCardV2({ data }: { data: Problem }) {
  return (
    <div className="bg-card-clarity-bg border border-card-clarity-border rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col p-6 font-sansBody">
      <div className="flex justify-between items-start mb-4">
        <p className="font-barlow font-bold text-lg text-card-clarity-text-muted">{data.name}</p>
        <div className="text-center flex-shrink-0 ml-4">
          <p className="font-barlow font-bold text-lg text-accent-problem capitalize">
            {data.evidence_maturity.replace(/_/g, " ").replace(/^\d+ /, "")}
          </p>
          <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">Maturity</p>
        </div>
      </div>

      <div className="flex-grow space-y-4">
        <div>
          <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">
            What's at Stake
          </p>
          <p className="text-card-clarity-text-italic font-medium">{data.whats_at_stake}</p>
        </div>

        <div>
          <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider mb-1">
            Evidence Teaser
          </p>
          <div className="bg-accent-warning/80 border-l-4 border-accent-warning-border p-3">
            <p className="text-accent-warning-text italic">"{data.evidence_teaser}"</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 text-right">
        <p className="text-xs text-card-clarity-text-secondary">PROBLEM::{data.id}</p>
      </div>
    </div>
  )
}
