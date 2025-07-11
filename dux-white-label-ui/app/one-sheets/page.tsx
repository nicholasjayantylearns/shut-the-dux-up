"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, FileText, Eye, Download, Filter } from "lucide-react"

interface DuxOneSheet {
  id?: string
  name?: string
  type?: string
  object_type?: string
  description?: string
  evidence_teaser?: string
  job_statement?: string
  end_user?: string | string[]
  what_is_at_stake?: string
  evidence_maturity?: string
  created_at?: string
  updated_at?: string
  [key: string]: any
}

const ObjectCard = ({ data, index }: { data: DuxOneSheet; index: number }) => {
  const objectType = data.object_type || data.type || "Unknown"
  const title = data.name || data.id || `Item ${index + 1}`

  // Recognizes Problem, Behavior, Result, Insight, UserOutcome, Flow, and Provenance objects
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "problem":
        return "bg-red-100 text-red-800"
      case "behavior":
        return "bg-blue-100 text-blue-800"
      case "result":
        return "bg-green-100 text-green-800"
      case "insight":
        return "bg-purple-100 text-purple-800"
      case "useroutcome":
        return "bg-orange-100 text-orange-800"
      case "flow":
        return "bg-teal-100 text-teal-800"
      case "provenance":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold uppercase">Type</span>
            <Badge className={getTypeColor(objectType)}>{objectType}</Badge>
          </div>
          {data.evidence_maturity && (
            <div className="flex items-center gap-2">
              <span className="font-semibold uppercase">Maturity</span>
              <Badge variant="outline">{data.evidence_maturity.replace(/_/g, " ")}</Badge>
            </div>
          )}
        </div>
        <CardTitle className="text-lg font-barlow">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {data.description && (
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Description</p>
            <p className="text-sm text-gray-800">{data.description}</p>
          </div>
        )}

        {data.job_statement && (
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Job Statement</p>
            <p className="text-sm text-gray-800 italic">"{data.job_statement}"</p>
          </div>
        )}

        {data.evidence_teaser && (
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Evidence</p>
            <p className="text-sm text-gray-800 italic">"{data.evidence_teaser}"</p>
          </div>
        )}

        {data.what_is_at_stake && (
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">What's at Stake</p>
            <p className="text-sm text-gray-800">{data.what_is_at_stake}</p>
          </div>
        )}

        {data.end_user && (
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">End User</p>
            <p className="text-sm text-gray-800">
              {Array.isArray(data.end_user) ? data.end_user.join(", ") : data.end_user}
            </p>
          </div>
        )}

        {(data.created_at || data.updated_at) && (
          <div className="pt-2 border-t text-xs text-gray-500">
            {data.updated_at && <p>Updated: {new Date(data.updated_at).toLocaleDateString()}</p>}
            {data.id && <p>ID: {data.id}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

const RawJsonView = ({ data }: { data: any }) => (
  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto max-h-96">
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
)

export default function OneSheetsPage() {
  const [jsonData, setJsonData] = useState<any>(null)
  const [jsonInput, setJsonInput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>("")
  const [filterType, setFilterType] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setFileName(file.name)
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        const parsed = JSON.parse(content)
        setJsonData(parsed)
        setJsonInput(content)
        setError(null)
      } catch (err) {
        setError("Invalid JSON file")
        setJsonData(null)
      }
    }
    reader.readAsText(file)
  }

  const handleJsonInputChange = (value: string) => {
    setJsonInput(value)
    if (value.trim()) {
      try {
        const parsed = JSON.parse(value)
        setJsonData(parsed)
        setError(null)
      } catch (err) {
        setError("Invalid JSON syntax")
        setJsonData(null)
      }
    } else {
      setJsonData(null)
      setError(null)
    }
  }

  const downloadJson = () => {
    if (!jsonData) return
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = fileName || "dux-data.json"
    a.click()
    URL.revokeObjectURL(url)
  }

  // Filter and search logic
  const dataArray = Array.isArray(jsonData) ? jsonData : jsonData ? [jsonData] : []
  const filteredData = dataArray.filter((item: DuxOneSheet) => {
    const matchesType = filterType === "all" || (item.object_type || item.type || "").toLowerCase() === filterType
    const matchesSearch =
      !searchTerm || Object.values(item).some((value) => String(value).toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesType && matchesSearch
  })

  const totalItems = dataArray.length
  const filteredItems = filteredData.length

  // Get unique types for filter dropdown
  const uniqueTypes = Array.from(
    new Set(dataArray.map((item: DuxOneSheet) => (item.object_type || item.type || "unknown").toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-barlow mb-2">DUX One Sheets Viewer</h1>
          <p className="text-gray-600 font-sansBody">
            Upload or paste your one_sheets JSON data to view DUX research findings in a consumable format. Supports
            Problem, Behavior, Result, Insight, UserOutcome, Flow, and Provenance objects.
          </p>
        </div>

        {/* Input Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Load One Sheets Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload JSON file</p>
                    <p className="text-xs text-gray-500 mt-1">or drag and drop</p>
                  </div>
                  <input id="file-upload" type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>
              <div className="text-gray-400">or</div>
              <div className="flex-1">
                <Textarea
                  placeholder="Paste JSON data here..."
                  value={jsonInput}
                  onChange={(e) => handleJsonInputChange(e.target.value)}
                  className="min-h-[120px] font-mono text-sm"
                />
              </div>
            </div>

            {error && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error}</div>}

            {fileName && (
              <div className="flex items-center justify-between text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                <span>Loaded: {fileName}</span>
                <Button onClick={downloadJson} variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Data Display */}
        {jsonData && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-barlow">Research Findings</h2>
                <p className="text-gray-600">
                  {filteredItems} of {totalItems} item{totalItems !== 1 ? "s" : ""} shown
                </p>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {uniqueTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <Tabs defaultValue="cards" className="w-full">
              <TabsList>
                <TabsTrigger value="cards" className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Card View
                </TabsTrigger>
                <TabsTrigger value="raw" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Raw JSON
                </TabsTrigger>
              </TabsList>

              <TabsContent value="cards" className="mt-6">
                {filteredItems > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredData.map((item, index) => (
                      <ObjectCard key={item.id || index} data={item} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-12">
                    {totalItems > 0 ? "No items match your filters" : "No data to display"}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="raw" className="mt-6">
                <RawJsonView data={filteredData} />
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  )
}
