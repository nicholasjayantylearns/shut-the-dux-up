import type { Result } from "@/types/dux-v9.5"

export function ResultCardV2({ data }: { data: Result }) {
  const metricName = Object.keys(data.outcome_metrics)[0]
  const metricValue = Object.values(data.outcome_metrics)[0]

  return (
    <div className="bg-card-clarity-bg border border-card-clarity-border rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col p-6 font-sansBody">
      <div className="mb-4">
        <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">Result</p>
        <p className="font-barlow font-bold text-lg text-card-clarity-text-muted mt-1">{data.name}</p>
      </div>

      <div className="flex-grow bg-bg-tertiary rounded-md p-4 space-y-4">
        <div>
          <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">
            {metricName}
          </p>
          <p className="font-barlow font-extrabold text-4xl text-card-clarity-text-muted">{metricValue}</p>
        </div>
        <div className="border-t pt-3">
          <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">
            Success Criteria
          </p>
          <p className="text-sm text-card-clarity-text-italic mt-1">"{data.success_criteria[0]}"</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 text-right">
        <p className="text-xs text-card-clarity-text-secondary">RESULT::{data.id}</p>
      </div>
    </div>
  )
}
