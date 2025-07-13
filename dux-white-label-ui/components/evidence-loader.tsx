"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileText, Database, CheckCircle, AlertCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface Evidence {
  id: string
  type: "interview" | "document" | "observation" | "artifact"
  source: string
  content: string
  metadata: {
    participant?: string
    timestamp?: string
    tags?: string[]
  }
  status: "pending" | "processing" | "processed" | "error"
}

export function EvidenceLoader() {
  const [evidenceList, setEvidenceList] = useState<Evidence[]>([])
  const [activeTab, setActiveTab] = useState<"upload" | "manual" | "status">("upload")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

  // Manual evidence entry state
  const [manualEvidence, setManualEvidence] = useState({
    type: "interview" as const,
    source: "",
    content: "",
    participant: "",
    timestamp: "",
    tags: ""
  })

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    setIsProcessing(true)
    const totalFiles = files.length

    for (let i = 0; i < totalFiles; i++) {
      const file = files[i]
      const progress = ((i + 1) / totalFiles) * 100
      setUploadProgress(progress)

      // Create evidence entry
      const evidence: Evidence = {
        id: `evidence_${Date.now()}_${i}`,
        type: "document",
        source: file.name,
        content: `Processing ${file.name}...`,
        metadata: {
          timestamp: new Date().toISOString(),
          tags: []
        },
        status: "processing"
      }

      setEvidenceList(prev => [...prev, evidence])

      // Upload to backend
      try {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('evidence_type', 'document')
        
        const response = await fetch('http://localhost:8504/api/evidence/upload', {
          method: 'POST',
          body: formData
        })

        if (response.ok) {
          const result = await response.json()
          
          setEvidenceList(prev => 
            prev.map(e => 
              e.id === evidence.id 
                ? { 
                    ...e, 
                    status: "processed", 
                    content: `Processed ${result.num_chunks} chunks from ${file.name}`,
                    metadata: {
                      ...e.metadata,
                      tags: result.tags || [],
                      document_id: result.document_id
                    }
                  }
                : e
            )
          )
        } else {
          throw new Error(`Upload failed: ${response.statusText}`)
        }
      } catch (error) {
        console.error('Upload error:', error)
        setEvidenceList(prev => 
          prev.map(e => 
            e.id === evidence.id 
              ? { ...e, status: "error", content: `Error: ${error.message}` }
              : e
          )
        )
      }
    }

    setIsProcessing(false)
    setUploadProgress(0)
  }

  const handleManualSubmit = async () => {
    const evidence: Evidence = {
      id: `evidence_${Date.now()}`,
      type: manualEvidence.type,
      source: manualEvidence.source,
      content: manualEvidence.content,
      metadata: {
        participant: manualEvidence.participant,
        timestamp: manualEvidence.timestamp || new Date().toISOString(),
        tags: manualEvidence.tags.split(',').map(t => t.trim()).filter(Boolean)
      },
      status: "processing"
    }

    setEvidenceList(prev => [...prev, evidence])

    try {
      // Create a text file from manual input
      const blob = new Blob([manualEvidence.content], { type: 'text/plain' })
      const file = new File([blob], `${manualEvidence.source}.txt`, { type: 'text/plain' })
      
      const formData = new FormData()
      formData.append('file', file)
      formData.append('evidence_type', manualEvidence.type)
      if (manualEvidence.participant) {
        formData.append('participant', manualEvidence.participant)
      }
      
      const response = await fetch('http://localhost:8504/api/evidence/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const result = await response.json()
        
        setEvidenceList(prev => 
          prev.map(e => 
            e.id === evidence.id 
              ? { 
                  ...e, 
                  status: "processed",
                  metadata: {
                    ...e.metadata,
                    tags: result.tags || [],
                    document_id: result.document_id
                  }
                }
              : e
          )
        )
      } else {
        throw new Error(`Upload failed: ${response.statusText}`)
      }
    } catch (error) {
      console.error('Manual submission error:', error)
      setEvidenceList(prev => 
        prev.map(e => 
          e.id === evidence.id 
            ? { ...e, status: "error" }
            : e
        )
      )
    }

    // Reset form
    setManualEvidence({
      type: "interview",
      source: "",
      content: "",
      participant: "",
      timestamp: "",
      tags: ""
    })
  }

  const processedCount = evidenceList.filter(e => e.status === "processed").length
  const totalCount = evidenceList.length

  return (
    <div className="h-full flex flex-col">
      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-6 border-b border-green-900">
        <button
          onClick={() => setActiveTab("upload")}
          className={`px-4 py-2 font-mono transition-all ${
            activeTab === "upload" 
              ? "text-green-400 border-b-2 border-green-400" 
              : "text-green-600 hover:text-green-400"
          }`}
        >
          <Upload className="inline-block w-4 h-4 mr-2" />
          Upload Files
        </button>
        <button
          onClick={() => setActiveTab("manual")}
          className={`px-4 py-2 font-mono transition-all ${
            activeTab === "manual" 
              ? "text-green-400 border-b-2 border-green-400" 
              : "text-green-600 hover:text-green-400"
          }`}
        >
          <FileText className="inline-block w-4 h-4 mr-2" />
          Manual Entry
        </button>
        <button
          onClick={() => setActiveTab("status")}
          className={`px-4 py-2 font-mono transition-all ${
            activeTab === "status" 
              ? "text-green-400 border-b-2 border-green-400" 
              : "text-green-600 hover:text-green-400"
          }`}
        >
          <Database className="inline-block w-4 h-4 mr-2" />
          Status ({processedCount}/{totalCount})
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "upload" && (
          <Card className="bg-black/50 border-green-900">
            <CardHeader>
              <CardTitle className="text-green-400 font-mono">Upload Evidence Files</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-green-900 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <span className="text-green-400 hover:text-green-300">
                      Click to upload or drag and drop
                    </span>
                    <p className="text-sm text-green-600 mt-2">
                      Supports: PDF, DOCX, TXT, MD, CSV
                    </p>
                  </Label>
                  <Input
                    id="file-upload"
                    type="file"
                    multiple
                    accept=".pdf,.docx,.txt,.md,.csv"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>

                {isProcessing && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-green-400">
                      <span>Processing files...</span>
                      <span>{Math.round(uploadProgress)}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "manual" && (
          <Card className="bg-black/50 border-green-900">
            <CardHeader>
              <CardTitle className="text-green-400 font-mono">Add Evidence Manually</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="type" className="text-green-400">Evidence Type</Label>
                  <select
                    id="type"
                    value={manualEvidence.type}
                    onChange={(e) => setManualEvidence({...manualEvidence, type: e.target.value as any})}
                    className="w-full bg-black border border-green-900 text-green-400 rounded px-3 py-2"
                  >
                    <option value="interview">Interview</option>
                    <option value="observation">Observation</option>
                    <option value="artifact">Artifact</option>
                    <option value="document">Document</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="source" className="text-green-400">Source</Label>
                  <Input
                    id="source"
                    value={manualEvidence.source}
                    onChange={(e) => setManualEvidence({...manualEvidence, source: e.target.value})}
                    placeholder="e.g., Interview #3, User Session Recording"
                    className="bg-black border-green-900 text-green-400"
                  />
                </div>

                <div>
                  <Label htmlFor="participant" className="text-green-400">Participant (optional)</Label>
                  <Input
                    id="participant"
                    value={manualEvidence.participant}
                    onChange={(e) => setManualEvidence({...manualEvidence, participant: e.target.value})}
                    placeholder="e.g., User 7, Admin Team"
                    className="bg-black border-green-900 text-green-400"
                  />
                </div>

                <div>
                  <Label htmlFor="content" className="text-green-400">Evidence Content</Label>
                  <Textarea
                    id="content"
                    value={manualEvidence.content}
                    onChange={(e) => setManualEvidence({...manualEvidence, content: e.target.value})}
                    placeholder="Enter the evidence text, quotes, or observations..."
                    rows={6}
                    className="bg-black border-green-900 text-green-400"
                  />
                </div>

                <div>
                  <Label htmlFor="tags" className="text-green-400">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    value={manualEvidence.tags}
                    onChange={(e) => setManualEvidence({...manualEvidence, tags: e.target.value})}
                    placeholder="e.g., budget, forecasting, pain-point"
                    className="bg-black border-green-900 text-green-400"
                  />
                </div>

                <Button
                  onClick={handleManualSubmit}
                  disabled={!manualEvidence.source || !manualEvidence.content}
                  className="w-full bg-green-900 hover:bg-green-800 text-green-100"
                >
                  Add Evidence
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "status" && (
          <div className="space-y-4">
            {evidenceList.length === 0 ? (
              <Card className="bg-black/50 border-green-900">
                <CardContent className="text-center py-8">
                  <Database className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <p className="text-green-600">No evidence loaded yet</p>
                </CardContent>
              </Card>
            ) : (
              evidenceList.map((evidence) => (
                <Card key={evidence.id} className="bg-black/50 border-green-900">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-1 bg-green-900/50 text-green-400 rounded">
                            {evidence.type}
                          </span>
                          <span className="text-green-400 font-mono text-sm">
                            {evidence.source}
                          </span>
                          {evidence.status === "processed" && (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          )}
                          {evidence.status === "processing" && (
                            <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
                          )}
                          {evidence.status === "error" && (
                            <AlertCircle className="w-4 h-4 text-red-400" />
                          )}
                        </div>
                        <p className="text-green-600 text-sm line-clamp-2">
                          {evidence.content}
                        </p>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {evidence.metadata.tags?.map((tag, idx) => (
                            <span key={`${tag}-${idx}`} className="text-xs px-2 py-1 bg-green-900/30 text-green-500 rounded">
                              #{typeof tag === 'string' ? tag : tag.name || tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="mt-6 pt-4 border-t border-green-900">
        <div className="flex justify-between items-center">
          <div className="text-green-600 text-sm">
            {processedCount} of {totalCount} evidence items processed
          </div>
          <Button
            disabled={processedCount === 0}
            className="bg-green-900 hover:bg-green-800 text-green-100"
            onClick={() => window.location.href = '/evidence-viewer'}
          >
            <Database className="w-4 h-4 mr-2" />
            View Evidence & Generate DUX Objects
          </Button>
        </div>
      </div>
    </div>
  )
}