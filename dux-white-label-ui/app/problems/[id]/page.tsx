"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProvenanceCard } from "@/components/cards/provenance-card"
import * as MockData from "@/data/problem-detail-data" // Renamed to MockData
import type { Problem, Provenance } from "@/types/dux-v9.5"
import { LinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const DetailSection = ({
  title,
  children,
  className,
}: { title: string; children: React.ReactNode; className?: string }) => (
  <Card className={cn("h-full", className)}>
    <CardHeader>
      <CardTitle className="font-barlow text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
)

const DetailPageContent = ({
  problem,
  linkedProvenance,
  concept,
}: {
  problem: Problem
  linkedProvenance: Provenance[]
  concept: "clarity" | "monospace"
}) => {
  const baseFont = concept === "clarity" ? "font-barlow" : "font-monospace"
  const bodyFont = concept === "clarity" ? "font-barlow" : "font-sansBody"
  const cardBg = concept === "clarity" ? "bg-card-clarity-bg" : "bg-card-monospace-bg text-card-monospace-text-primary"

  return (
    <div className={`${baseFont} space-y-8`}>
      {/* Header */}
      <div className={`p-6 rounded-lg ${cardBg} border border-card-clarity-border`}>
        <p className="text-sm font-semibold uppercase tracking-wider text-text-placeholder">Job Statement</p>
        <h1 className={`text-3xl font-bold mt-2 ${concept === "clarity" ? "text-text-primary" : "text-white"}`}>
          {problem.job_statement}
        </h1>
        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
          <Badge variant="secondary">{problem.end_user.join(", ")}</Badge>
          <Badge variant="outline">Maturity: {problem.evidence_maturity.replace("_", " ")}</Badge>
        </div>
      </div>

      {/* Evidence Carousel */}
      <div>
        <h2 className={`text-2xl font-bold mb-4 ${concept === "clarity" ? "text-text-muted" : "text-white"}`}>
          Supporting Evidence
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {linkedProvenance.map((p) => (
            <ProvenanceCard key={p.id} provenance={p} concept={concept} />
          ))}
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <DetailSection title="Context & Stakes" className={concept === "monospace" ? cardBg : ""}>
          <div className={`${bodyFont} space-y-4`}>
            <div>
              <h3
                className={`font-semibold ${concept === "monospace" ? "text-gray-400" : "text-text-placeholder"} text-sm`}
              >
                What's at Stake
              </h3>
              <p>{problem.what_is_at_stake}</p>
            </div>
            <div>
              <h3
                className={`font-semibold ${concept === "monospace" ? "text-gray-400" : "text-text-placeholder"} text-sm`}
              >
                Evidence Teaser
              </h3>
              <p>{problem.evidence_teaser}</p>
            </div>
            <div>
              <h3
                className={`font-semibold ${concept === "monospace" ? "text-gray-400" : "text-text-placeholder"} text-sm`}
              >
                Protocol URL
              </h3>
              <a
                href={problem.protocol_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline flex items-center gap-1"
              >
                <LinkIcon className="w-4 h-4" />
                View Protocol
              </a>
            </div>
          </div>
        </DetailSection>

        <DetailSection title="Related Objects" className={concept === "monospace" ? cardBg : ""}>
          <div className={`${bodyFont} space-y-3`}>
            {problem.result_ids.map((item) => (
              <Link
                key={item.id}
                href={`/results/${item.id}`}
                className={`block p-3 border rounded-md ${concept === "monospace" ? "border-card-monospace-border hover:bg-gray-700" : "hover:bg-bg-tertiary"}`}
              >
                <p className="font-semibold">Result: {item.id}</p>
                <p
                  className={`text-sm ${concept === "monospace" ? "text-card-monospace-text-secondary" : "text-text-secondary"}`}
                >
                  {item.reference_context}
                </p>
              </Link>
            ))}
            {problem.useroutcome_ids.map((item) => (
              <Link
                key={item.id}
                href={`/outcomes/${item.id}`}
                className={`block p-3 border rounded-md ${concept === "monospace" ? "border-card-monospace-border hover:bg-gray-700" : "hover:bg-bg-tertiary"}`}
              >
                <p className="font-semibold">Outcome: {item.id}</p>
                <p
                  className={`text-sm ${concept === "monospace" ? "text-card-monospace-text-secondary" : "text-text-secondary"}`}
                >
                  {item.reference_context}
                </p>
              </Link>
            ))}
          </div>
        </DetailSection>
      </div>
    </div>
  )
}

export default function ProblemDetailPage({ params }: { params: { id: string } }) {
  const [problemData, setProblemData] = useState<Problem | null>(null)
  const [provenanceData, setProvenanceData] = useState<Provenance[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProblemData = async () => {
      setLoading(true)
      setError(null)
      try {
        // Check environment variable to decide data source
        if (process.env.NEXT_PUBLIC_USE_LIVE_DATA === "true") {
          const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8504" // Default to localhost:8504 if not set
          // Fetch from your FastAPI endpoint
          const response = await fetch(`${apiBaseUrl}/problems/${params.id}`)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          const data = await response.json()
          setProblemData(data.problem)
          setProvenanceData(data.linkedProvenance)
        } else {
          // Use local mock data
          const problem: Problem = MockData.problem_9001
          const linkedProvenance: Provenance[] = problem.evidence.map((id) => MockData.allProvenance[id])
          setProblemData(problem)
          setProvenanceData(linkedProvenance)
        }
      } catch (e: any) {
        setError(e.message || "Failed to load problem data.")
        console.error("Error fetching problem data:", e)
      } finally {
        setLoading(false)
      }
    }

    fetchProblemData()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-primary p-4 sm:p-8 flex items-center justify-center">
        <p className="text-text-secondary">Loading problem details...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-bg-primary p-4 sm:p-8 flex items-center justify-center">
        <p className="text-accent-negative">Error: {error}</p>
      </div>
    )
  }

  if (!problemData || !provenanceData) {
    return (
      <div className="min-h-screen bg-bg-primary p-4 sm:p-8 flex items-center justify-center">
        <p className="text-text-secondary">No problem data found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-primary p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="clarity" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="clarity">Clarity Concept</TabsTrigger>
            <TabsTrigger value="monospace">Monospace Data Concept</TabsTrigger>
          </TabsList>

          <TabsContent value="clarity">
            <DetailPageContent problem={problemData} linkedProvenance={provenanceData} concept="clarity" />
          </TabsContent>
          <TabsContent value="monospace">
            <DetailPageContent problem={problemData} linkedProvenance={provenanceData} concept="monospace" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
