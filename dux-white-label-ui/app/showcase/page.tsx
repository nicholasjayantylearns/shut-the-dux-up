"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProblemCard } from "@/components/cards/problem-card"
import { BehaviorCard } from "@/components/cards/behavior-card"
import { ResultCard } from "@/components/cards/result-card"
import * as Data from "@/data/showcase-data"
import { UserOutcomeCard } from "@/components/cards/user-outcome-card"
import { FlowCard } from "@/components/cards/flow-card"

const DUX_OBJECTS = [
  { type: "Problem", data: Data.mockProblem, component: ProblemCard },
  { type: "Behavior", data: Data.mockBehavior, component: BehaviorCard },
  { type: "Result", data: Data.mockResult, component: ResultCard },
  { type: "UserOutcome", data: Data.mockUserOutcome, component: UserOutcomeCard },
  { type: "Flow", data: Data.mockFlow, component: FlowCard },
]

export default function DuxShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-barlow mb-2">DUX Object Model v9.5</h1>
          <p className="text-gray-600 font-sansBody">Core objects: Problem, Behavior, Result, UserOutcome, and Flow.</p>
        </div>

        <Tabs defaultValue="clarity" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="clarity">Clarity Concept</TabsTrigger>
            <TabsTrigger value="monospace">Monospace Data Concept</TabsTrigger>
          </TabsList>

          <TabsContent value="clarity" className="pt-8">
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 font-barlow">Clarity (Typography & Space)</h2>
              <p className="text-gray-600 font-sansBody">
                Evidence-first hierarchy with primary metrics prominently displayed. Uses clean, accessible typography
                with proper information architecture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DUX_OBJECTS.map(({ type, data, component: CardComponent }) => (
                <CardComponent key={type} data={data as any} variant="mini" concept="clarity" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="monospace" className="pt-8">
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 font-barlow">Monospace Data (Dashboard Style)</h2>
              <p className="text-gray-600 font-sansBody">
                Analytical, metrics-focused design with monospace typography. Each object type emphasizes different data
                points using a technical, dashboard-style presentation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white p-0.5 rounded-lg">
              {DUX_OBJECTS.map(({ type, data, component: CardComponent }) => (
                <CardComponent key={type} data={data as any} variant="mini" concept="monospace" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
