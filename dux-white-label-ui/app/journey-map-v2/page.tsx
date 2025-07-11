import type React from "react"
import { ClarityJourney } from "@/components/journeys/clarity-journey"
import { MonospaceJourney } from "@/components/journeys/monospace-journey"
import * as Data from "@/data/journey-map-data"

const ConceptWrapper = ({
  title,
  description,
  children,
  className,
}: {
  title: string
  description: string
  children: React.ReactNode
  className?: string
}) => (
  <div className={`space-y-6 rounded-xl p-4 sm:p-8 ${className}`}>
    <div className="text-center">
      <h2 className="text-2xl font-bold font-barlow text-text-primary">{title}</h2>
      <p className="text-text-secondary font-sansBody max-w-lg mx-auto">{description}</p>
    </div>
    <div className="flex justify-center items-center min-h-[400px]">{children}</div>
  </div>
)

export default function JourneyMapV2Page() {
  return (
    <div className="min-h-screen bg-bg-primary p-2 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-text-primary font-barlow">Finalist Journey Maps</h1>
          <p className="text-lg text-text-secondary font-sansBody mt-2">
            A final comparison between our two primary visual concepts: "Clarity" and "Monospace Data".
          </p>
        </div>

        <div className="space-y-8">
          <ConceptWrapper
            title="Clarity Concept"
            description="Evidence-first hierarchy with primary metrics prominently displayed. Uses clean, accessible typography."
            className="bg-card-clarity-bg"
          >
            <ClarityJourney {...Data} />
          </ConceptWrapper>

          <ConceptWrapper
            title="Monospace Data Concept"
            description="Analytical, metrics-focused design with monospace typography and a technical, dashboard-style presentation."
            className="bg-card-clarity-bg"
          >
            <MonospaceJourney {...Data} />
          </ConceptWrapper>
        </div>
      </div>
    </div>
  )
}
