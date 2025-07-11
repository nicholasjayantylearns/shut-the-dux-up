import type React from "react"
import { DocumentaryProblemCard } from "@/components/concepts/documentary-problem-card"
import { MindMapProblemCard } from "@/components/concepts/mindmap-problem-card"
import { GalleyProblemCard } from "@/components/concepts/galley-problem-card"
import * as Data from "@/data/showcase-data"

const ConceptWrapper = ({
  title,
  description,
  children,
}: { title: string; description: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <div className="text-center">
      <h2 className="text-2xl font-bold font-barlow text-text-primary">{title}</h2>
      <p className="text-text-secondary font-sansBody max-w-md mx-auto">{description}</p>
    </div>
    <div className="flex justify-center">{children}</div>
  </div>
)

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-bg-primary p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-text-primary font-barlow">New Concept Pitch</h1>
          <p className="text-lg text-text-secondary font-sansBody mt-2">
            Three divergent visual concepts for the Problem object, each exploring a different facet of "Natural
            Language Centricity".
          </p>
        </div>

        <div className="space-y-16">
          <ConceptWrapper
            title="1. The Documentary Film"
            description="A narrative, cinematic experience where user stories are the hero. High-contrast, immersive, and emotionally resonant."
          >
            <DocumentaryProblemCard data={Data.mockProblem} />
          </ConceptWrapper>

          <ConceptWrapper
            title="2. The Living Mind Map"
            description="An interconnected web of ideas. Objects are nodes on a canvas, visualizing relationships and encouraging exploration."
          >
            <MindMapProblemCard data={Data.mockProblem} />
          </ConceptWrapper>

          <ConceptWrapper
            title="3. The Publisher's Galley"
            description="A minimalist, editorial layout where text is paramount. Metadata is relegated to the margins as annotations."
          >
            <GalleyProblemCard data={Data.mockProblem} />
          </ConceptWrapper>
        </div>
      </div>
    </div>
  )
}
