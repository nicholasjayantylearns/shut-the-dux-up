import type React from "react"
import { BlueprintJourney } from "@/components/journeys/blueprint-journey"
import { MindmapJourney } from "@/components/journeys/mindmap-journey"
import { WirecutterJourney } from "@/components/journeys/wirecutter-journey"
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
      <h2 className="text-2xl font-bold font-barlow text-gray-900">{title}</h2>
      <p className="text-gray-600 font-sansBody max-w-lg mx-auto">{description}</p>
    </div>
    <div className="flex justify-center items-center min-h-[400px]">{children}</div>
  </div>
)

export default function JourneyMapPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 font-barlow">The Decisive Journey</h1>
          <p className="text-lg text-gray-600 font-sansBody mt-2">
            A side-by-side comparison of three journey map concepts to inform our final visual direction.
          </p>
        </div>

        <div className="space-y-8">
          <ConceptWrapper
            title="1. The Blueprint Map"
            description="A technical, systematic map showing objects as 'stations' connected by 'routes' on a blueprint grid."
            className="bg-white"
          >
            <BlueprintJourney {...Data} />
          </ConceptWrapper>

          <ConceptWrapper
            title="2. The Living Mind Map"
            description="An interconnected, spatial node graph showing the organic relationship between ideas."
            className="bg-white"
          >
            <MindmapJourney {...Data} />
          </ConceptWrapper>

          <ConceptWrapper
            title="3. The Wirecutter Review"
            description="An authoritative, editorial layout presenting the journey as a well-researched recommendation."
            className="bg-white"
          >
            <WirecutterJourney {...Data} />
          </ConceptWrapper>
        </div>
      </div>
    </div>
  )
}
