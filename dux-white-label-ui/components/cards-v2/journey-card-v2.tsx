import type { Journey } from "@/types/dux-v9.5"

export function JourneyCardV2({ data }: { data: Journey }) {
  return (
    <div className="bg-card-clarity-bg border border-card-clarity-border rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col p-6 font-sansBody">
      <div className="mb-4">
        <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider">Journey</p>
        <p className="font-barlow font-bold text-lg text-card-clarity-text-muted mt-1">{data.name}</p>
      </div>

      <div className="flex-grow">
        <p className="text-xs font-semibold text-card-clarity-text-secondary uppercase tracking-wider mb-2">
          Key Steps
        </p>
        <ol className="relative border-l border-card-clarity-border space-y-6 pl-6">
          {data.steps.map((step, i) => (
            <li key={i} className="flex items-start">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-blue-700 font-bold text-xs">
                {i + 1}
              </span>
              <div className="ml-2">
                <h4 className="font-semibold text-card-clarity-text-muted">{step.name}</h4>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 text-right">
        <p className="text-xs text-card-clarity-text-secondary">JOURNEY::{data.id}</p>
      </div>
    </div>
  )
}
