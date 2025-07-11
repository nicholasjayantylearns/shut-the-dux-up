"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Copy } from "lucide-react"

interface JsonViewerProps {
  data: any
  level?: number
}

export function JsonViewer({ data, level = 0 }: JsonViewerProps) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})

  const toggleCollapse = (key: string) => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const copyToClipboard = (value: any) => {
    navigator.clipboard.writeText(JSON.stringify(value, null, 2))
  }

  const renderValue = (key: string, value: any, index?: number) => {
    const fullKey = `${level}-${key}-${index || 0}`
    const isCollapsed = collapsed[fullKey]

    if (value === null) {
      return <span className="text-text-placeholder italic">null</span>
    }

    if (typeof value === "boolean") {
      return <span className="text-accent-behavior">{value.toString()}</span>
    }

    if (typeof value === "number") {
      return <span className="text-accent-problem">{value}</span>
    }

    if (typeof value === "string") {
      return <span className="text-text-primary">"{value}"</span>
    }

    if (Array.isArray(value)) {
      return (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => toggleCollapse(fullKey)} className="h-6 w-6 p-0">
              {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </Button>
            <span className="text-text-secondary">Array ({value.length} items)</span>
            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(value)} className="h-6 w-6 p-0">
              <Copy className="h-3 w-3" />
            </Button>
          </div>
          {!isCollapsed && (
            <div className="ml-4 space-y-2">
              {value.map((item, idx) => (
                <div key={idx} className="border-l-2 border-border-default pl-4">
                  <div className="text-sm text-text-secondary mb-1">[{idx}]</div>
                  {renderValue(`${key}-${idx}`, item, idx)}
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }

    if (typeof value === "object") {
      const keys = Object.keys(value)
      return (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => toggleCollapse(fullKey)} className="h-6 w-6 p-0">
              {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </Button>
            <span className="text-text-secondary">Object ({keys.length} keys)</span>
            <Button variant="ghost" size="sm" onClick={() => copyToClipboard(value)} className="h-6 w-6 p-0">
              <Copy className="h-3 w-3" />
            </Button>
          </div>
          {!isCollapsed && (
            <div className="ml-4 space-y-2">
              {keys.map((objKey) => (
                <div key={objKey} className="border-l-2 border-border-default pl-4">
                  <div className="text-sm font-semibold text-text-muted mb-1">{objKey}:</div>
                  {renderValue(`${key}-${objKey}`, value[objKey])}
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }

    return <span className="text-text-primary">{String(value)}</span>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-barlow text-lg">Data Structure</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Array.isArray(data) ? (
            <div>
              <div className="text-sm text-text-secondary mb-4">Root Array ({data.length} items)</div>
              {data.map((item, index) => (
                <div key={index} className="mb-4 p-4 border border-border-default rounded-md">
                  <div className="text-sm font-semibold text-text-muted mb-2">Item {index}</div>
                  {renderValue(`root-${index}`, item, index)}
                </div>
              ))}
            </div>
          ) : typeof data === "object" ? (
            <div>
              <div className="text-sm text-text-secondary mb-4">Root Object ({Object.keys(data).length} keys)</div>
              {Object.entries(data).map(([key, value]) => (
                <div key={key} className="mb-4 p-4 border border-border-default rounded-md">
                  <div className="text-sm font-semibold text-text-muted mb-2">{key}:</div>
                  {renderValue(key, value)}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="text-sm text-text-secondary mb-2">Root Value:</div>
              {renderValue("root", data)}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
