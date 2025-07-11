import { ProblemCardV2 } from "@/components/cards-v2/problem-card-v2"
import { BehaviorCardV2 } from "@/components/cards-v2/behavior-card-v2"
import { ResultCardV2 } from "@/components/cards-v2/result-card-v2"
import { PersonaCardV2 } from "@/components/cards-v2/persona-card-v2"
import { JourneyCardV2 } from "@/components/cards-v2/journey-card-v2"
import * as Data from "@/data/showcase-data"

const DUX_OBJECTS = [
  { type: "Persona", data: Data.mockPersona, component: PersonaCardV2 },
  { type: "Problem", data: Data.mockProblem, component: ProblemCardV2 },
  { type: "Behavior", data: Data.mockBehavior, component: BehaviorCardV2 },
  { type: "Result", data: Data.mockResult, component: ResultCardV2 },
  { type: "Journey", data: Data.mockJourney, component: JourneyCardV2 },
]

export default function ResearcherDeskShowcasePage() {
  return (
    <div className="min-h-screen bg-amber-50/30 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="font-barlow font-semibold text-amber-800">Creative Exploration</p>
          <h1 className="text-4xl font-bold text-text-primary font-barlow mt-2 mb-4">The Researcher's Desk</h1>
          <p className="text-text-secondary font-sansBody">
            This concept embodies "Natural Language Centricity" by treating UI elements like physical artifacts: index
            cards, highlighted transcripts, and annotated notes. The goal is a tactile, approachable, and human-centric
            feel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUX_OBJECTS.map(({ type, data, component: CardComponent }) => (
            <CardComponent key={type} data={data as any} />
          ))}
        </div>
      </div>
    </div>
  )
}
