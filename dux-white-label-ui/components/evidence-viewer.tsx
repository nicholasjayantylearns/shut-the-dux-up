"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, User, Calendar, Tag, Search, Filter, ChevronRight, Quote } from "lucide-react"
import { ProvenanceCard } from "@/components/cards/provenance-card"
import type { Provenance } from "@/types/dux-v9.5"

// Fetch evidence from API
const fetchEvidence = async (filters: any) => {
  const params = new URLSearchParams()
  if (filters.search) params.append('search', filters.search)
  if (filters.evidenceType && filters.evidenceType !== 'all') params.append('evidence_type', filters.evidenceType)
  if (filters.participant && filters.participant !== 'all') params.append('participant', filters.participant)
  
  const response = await fetch(`/api/evidence/list?${params}`)
  const data = await response.json()
  
  // Transform API response to Provenance format
  return data.evidence.map((chunk: any) => ({
    id: chunk.id,
    evidence_block: {
      quote: chunk.content,
      citation: chunk.source_filename,
      evidence_type: chunk.evidence_type,
      source_filename: chunk.source_filename,
      participant_id: chunk.participant || '',
      timestamp_in: chunk.timestamp_created,
      timestamp_out: ''
    },
    object_type: 'Provenance'
  }))
}

// Mock data - replace with API call
const mockEvidenceData: Provenance[] = [
  {
    id: "prov_001",
    evidence_block: {
      quote: "We're constantly firefighting because we can't predict our cloud costs accurately. Last month we were 75% over budget.",
      citation: "Platform Admin Team Lead, Interview #3",
      evidence_type: "user_research_finding",
      source_filename: "admin_interviews_2024.md",
      participant_id: "P7",
      timestamp_in: "00:12:45",
      timestamp_out: "00:13:20"
    },
    object_type: "Provenance"
  },
  {
    id: "prov_002",
    evidence_block: {
      quote: "I've started creating my own spreadsheets to track usage patterns, but it's manual and time-consuming.",
      citation: "Senior DevOps Engineer, Workshop Session",
      evidence_type: "behavioral_observation",
      source_filename: "workshop_notes_jan2024.md",
      participant_id: "P12",
      timestamp_in: "00:45:10",
      timestamp_out: "00:45:45"
    },
    object_type: "Provenance"
  },
  {
    id: "prov_003",
    evidence_block: {
      quote: "The finance team keeps asking for forecasts we simply can't provide with our current tools.",
      citation: "Engineering Manager, Stakeholder Interview",
      evidence_type: "stakeholder_feedback",
      source_filename: "stakeholder_interviews_q1.md",
      participant_id: "P3",
      timestamp_in: "00:08:20",
      timestamp_out: "00:08:55"
    },
    object_type: "Provenance"
  }
]

interface EvidenceFilter {
  search: string
  evidenceType: string
  participant: string
  dateRange: { start: string; end: string }
  tags: string[]
}

export function EvidenceViewer() {
  const [evidence, setEvidence] = useState<Provenance[]>(mockEvidenceData)
  const [filteredEvidence, setFilteredEvidence] = useState<Provenance[]>(mockEvidenceData)
  const [selectedEvidence, setSelectedEvidence] = useState<Provenance | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "timeline" | "grouped">("grid")
  const [filters, setFilters] = useState<EvidenceFilter>({
    search: "",
    evidenceType: "all",
    participant: "all",
    dateRange: { start: "", end: "" },
    tags: []
  })

  // Apply filters
  useEffect(() => {
    let filtered = evidence

    // Search filter
    if (filters.search) {
      filtered = filtered.filter(e => 
        e.evidence_block.quote.toLowerCase().includes(filters.search.toLowerCase()) ||
        e.evidence_block.citation.toLowerCase().includes(filters.search.toLowerCase())
      )
    }

    // Evidence type filter
    if (filters.evidenceType !== "all") {
      filtered = filtered.filter(e => e.evidence_block.evidence_type === filters.evidenceType)
    }

    // Participant filter
    if (filters.participant !== "all") {
      filtered = filtered.filter(e => e.evidence_block.participant_id === filters.participant)
    }

    setFilteredEvidence(filtered)
  }, [filters, evidence])

  // Get unique values for filters
  const evidenceTypes = Array.from(new Set(evidence.map(e => e.evidence_block.evidence_type)))
  const participants = Array.from(new Set(evidence.map(e => e.evidence_block.participant_id).filter(Boolean)))

  return (
    <div className="h-full flex">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Search and Filters Bar */}
        <div className="p-4 border-b border-green-900">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
              <Input
                placeholder="Search evidence..."
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
                className="pl-10 bg-black border-green-900 text-green-400 placeholder-green-600"
              />
            </div>
            
            <select
              value={filters.evidenceType}
              onChange={(e) => setFilters({...filters, evidenceType: e.target.value})}
              className="bg-black border border-green-900 text-green-400 rounded px-3 py-2"
            >
              <option value="all">All Types</option>
              {evidenceTypes.map(type => (
                <option key={type} value={type}>
                  {type.replace(/_/g, " ")}
                </option>
              ))}
            </select>

            <select
              value={filters.participant}
              onChange={(e) => setFilters({...filters, participant: e.target.value})}
              className="bg-black border border-green-900 text-green-400 rounded px-3 py-2"
            >
              <option value="all">All Participants</option>
              {participants.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            <div className="flex gap-2 border-l border-green-900 pl-4">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="text-green-400"
              >
                Grid
              </Button>
              <Button
                variant={viewMode === "timeline" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("timeline")}
                className="text-green-400"
              >
                Timeline
              </Button>
              <Button
                variant={viewMode === "grouped" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grouped")}
                className="text-green-400"
              >
                Grouped
              </Button>
            </div>
          </div>
        </div>

        {/* Evidence Display Area */}
        <div className="flex-1 overflow-y-auto p-4">
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredEvidence.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedEvidence(item)}
                  className="cursor-pointer transition-all hover:scale-105"
                >
                  <ProvenanceCard 
                    provenance={item} 
                    concept="monospace"
                    className="h-full"
                  />
                </div>
              ))}
            </div>
          )}

          {viewMode === "timeline" && (
            <div className="space-y-4">
              {filteredEvidence.map((item, index) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    {index < filteredEvidence.length - 1 && (
                      <div className="w-0.5 h-full bg-green-900 mt-2" />
                    )}
                  </div>
                  <Card 
                    className="flex-1 bg-black/50 border-green-900 cursor-pointer hover:border-green-400"
                    onClick={() => setSelectedEvidence(item)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="text-xs text-green-400">
                          {item.evidence_block.evidence_type.replace(/_/g, " ")}
                        </Badge>
                        <span className="text-xs text-green-600">
                          {item.evidence_block.timestamp_in} - {item.evidence_block.timestamp_out}
                        </span>
                      </div>
                      <blockquote className="text-green-400 mb-2">
                        "{item.evidence_block.quote}"
                      </blockquote>
                      <cite className="text-sm text-green-600">
                        — {item.evidence_block.citation}
                      </cite>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}

          {viewMode === "grouped" && (
            <div className="space-y-6">
              {evidenceTypes.map(type => {
                const typeEvidence = filteredEvidence.filter(e => e.evidence_block.evidence_type === type)
                if (typeEvidence.length === 0) return null
                
                return (
                  <div key={type}>
                    <h3 className="text-green-400 font-mono text-lg mb-3 capitalize">
                      {type.replace(/_/g, " ")} ({typeEvidence.length})
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {typeEvidence.map(item => (
                        <div
                          key={item.id}
                          onClick={() => setSelectedEvidence(item)}
                          className="cursor-pointer"
                        >
                          <ProvenanceCard 
                            provenance={item} 
                            concept="monospace"
                            className="h-full"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Summary Bar */}
        <div className="p-4 border-t border-green-900 bg-black/50">
          <div className="flex justify-between items-center text-sm">
            <span className="text-green-600">
              Showing {filteredEvidence.length} of {evidence.length} evidence items
            </span>
            <div className="flex gap-4 text-green-600">
              <span>{evidenceTypes.length} types</span>
              <span>{participants.length} participants</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Panel */}
      {selectedEvidence && (
        <div className="w-96 border-l border-green-900 bg-black/50 p-4 overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-green-400 font-mono text-lg">Evidence Details</h3>
            <button
              onClick={() => setSelectedEvidence(null)}
              className="text-green-600 hover:text-green-400"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-green-400 text-sm font-mono mb-2 flex items-center gap-2">
                <Quote className="w-4 h-4" />
                Quote
              </h4>
              <blockquote className="bg-green-900/20 p-4 rounded border border-green-900 text-green-300">
                "{selectedEvidence.evidence_block.quote}"
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-green-400 text-sm font-mono mb-1 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Source
                </h4>
                <p className="text-green-600 text-sm">
                  {selectedEvidence.evidence_block.citation}
                </p>
              </div>

              <div>
                <h4 className="text-green-400 text-sm font-mono mb-1 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Type
                </h4>
                <Badge variant="outline" className="text-xs">
                  {selectedEvidence.evidence_block.evidence_type.replace(/_/g, " ")}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-green-400 text-sm font-mono mb-1 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  File
                </h4>
                <p className="text-green-600 text-sm truncate" title={selectedEvidence.evidence_block.source_filename}>
                  {selectedEvidence.evidence_block.source_filename}
                </p>
              </div>

              <div>
                <h4 className="text-green-400 text-sm font-mono mb-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Timestamp
                </h4>
                <p className="text-green-600 text-sm">
                  {selectedEvidence.evidence_block.timestamp_in} - {selectedEvidence.evidence_block.timestamp_out}
                </p>
              </div>
            </div>

            {selectedEvidence.evidence_block.participant_id && (
              <div>
                <h4 className="text-green-400 text-sm font-mono mb-1">Participant</h4>
                <p className="text-green-600 text-sm">{selectedEvidence.evidence_block.participant_id}</p>
              </div>
            )}

            <div className="pt-4 border-t border-green-900">
              <h4 className="text-green-400 text-sm font-mono mb-2">Actions</h4>
              <div className="space-y-2">
                <Button className="w-full bg-green-900 hover:bg-green-800 text-green-100" size="sm">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  View in Context
                </Button>
                <Button className="w-full bg-green-900 hover:bg-green-800 text-green-100" size="sm">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Find Related Evidence
                </Button>
                <Button className="w-full bg-green-900 hover:bg-green-800 text-green-100" size="sm">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Extract DUX Objects
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}