"use client"

import { CrtBackground } from "@/components/dossier/crt-background"
import { TerminalWindow } from "@/components/dossier/terminal-window"
import { EvidenceLoader } from "@/components/evidence-loader"

export default function EvidenceLoaderPage() {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center p-4 font-mono text-green-400">
      <CrtBackground />
      <div className="w-full max-w-6xl h-[90vh] z-10">
        <TerminalWindow title="EVIDENCE LOADER :: vOS 1.0" status="READY" statusColor="bg-green-500">
          <EvidenceLoader />
        </TerminalWindow>
      </div>
    </div>
  )
}