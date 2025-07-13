"use client"

import { CrtBackground } from "@/components/dossier/crt-background"
import { TerminalWindow } from "@/components/dossier/terminal-window"
import { EvidenceViewer } from "@/components/evidence-viewer"

export default function EvidenceViewerPage() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-4 font-mono text-green-400">
      <CrtBackground />
      <div className="w-full max-w-7xl h-[90vh] z-10">
        <TerminalWindow title="EVIDENCE VIEWER :: vOS 1.0" status="SCANNING" statusColor="bg-green-500">
          <EvidenceViewer />
        </TerminalWindow>
      </div>
    </div>
  )
}