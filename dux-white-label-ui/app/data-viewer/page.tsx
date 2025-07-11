"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JsonViewer } from "@/components/json-viewer"

export default function DataViewerPage() {
  const [jsonData, setJsonData] = useState<any>(null)
  const [rawJson, setRawJson] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleJsonInput = () => {
    try {
      const parsed = JSON.parse(rawJson)
      setJsonData(parsed)
      setError(null)
    } catch (e) {
      setError("Invalid JSON format")
      setJsonData(null)
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setRawJson(content)
        try {
          const parsed = JSON.parse(content)
          setJsonData(parsed)
          setError(null)
        } catch (err) {
          setError("Invalid JSON file")
          setJsonData(null)
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="min-h-screen bg-bg-primary p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary font-barlow mb-2">JSON Data Viewer</h1>
          <p className="text-text-secondary font-sansBody">
            Upload or paste your JSON data to view it in a consumable format.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-barlow">Input JSON Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="file-upload" className="block text-sm font-medium text-text-secondary mb-2">
                  Upload JSON File
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".json"
                  onChange={handleFileUpload}
                  className="block w-full text-sm text-text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>

              <div className="text-center text-text-placeholder">or</div>

              <div>
                <label htmlFor="json-input" className="block text-sm font-medium text-text-secondary mb-2">
                  Paste JSON Data
                </label>
                <Textarea
                  id="json-input"
                  placeholder="Paste your JSON data here..."
                  value={rawJson}
                  onChange={(e) => setRawJson(e.target.value)}
                  className="min-h-[200px] font-monospace text-sm"
                />
              </div>

              <Button onClick={handleJsonInput} className="w-full">
                Parse JSON
              </Button>

              {error && <div className="text-accent-negative text-sm">{error}</div>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-barlow">Data Preview</CardTitle>
            </CardHeader>
            <CardContent>
              {jsonData ? (
                <div className="space-y-2">
                  <div className="text-sm text-text-secondary">
                    <strong>Type:</strong> {Array.isArray(jsonData) ? "Array" : typeof jsonData}
                  </div>
                  {Array.isArray(jsonData) && (
                    <div className="text-sm text-text-secondary">
                      <strong>Items:</strong> {jsonData.length}
                    </div>
                  )}
                  {typeof jsonData === "object" && !Array.isArray(jsonData) && (
                    <div className="text-sm text-text-secondary">
                      <strong>Keys:</strong> {Object.keys(jsonData).length}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-text-placeholder italic">No data loaded</div>
              )}
            </CardContent>
          </Card>
        </div>

        {jsonData && (
          <Tabs defaultValue="formatted" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="formatted">Formatted View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
              <TabsTrigger value="raw">Raw JSON</TabsTrigger>
            </TabsList>

            <TabsContent value="formatted" className="pt-6">
              <JsonViewer data={jsonData} />
            </TabsContent>

            <TabsContent value="table" className="pt-6">
              <Card>
                <CardContent className="p-6">
                  {Array.isArray(jsonData) ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-border-default">
                        <thead>
                          <tr className="bg-bg-tertiary">
                            {Object.keys(jsonData[0] || {}).map((key) => (
                              <th key={key} className="border border-border-default p-2 text-left font-semibold">
                                {key}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {jsonData.map((item, index) => (
                            <tr key={index} className="hover:bg-bg-tertiary">
                              {Object.keys(jsonData[0] || {}).map((key) => (
                                <td key={key} className="border border-border-default p-2">
                                  {typeof item[key] === "object" ? JSON.stringify(item[key]) : String(item[key] || "")}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-text-secondary">Table view is only available for array data</div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="raw" className="pt-6">
              <Card>
                <CardContent className="p-6">
                  <pre className="font-monospace text-sm bg-bg-tertiary p-4 rounded-md overflow-auto max-h-96">
                    {JSON.stringify(jsonData, null, 2)}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
