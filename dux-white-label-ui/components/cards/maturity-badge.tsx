import type React from "react"
import { Badge } from "@/components/ui/badge"
import type { EvidenceMaturity } from "@/types/dux-v9.5"
import { cn } from "@/lib/utils"

interface MaturityBadgeProps {
  maturity: EvidenceMaturity | string | undefined | null
  className?: string
}

const maturityStyles: {
  [key in EvidenceMaturity]: {
    label: string
    className: string
  }
} = {
  "01_assumptive": {
    label: "Assumptive",
    className: "bg-red-900/50 text-red-300 border-red-700/50",
  },
  "02_anecdotal": {
    label: "Anecdotal",
    className: "bg-orange-900/50 text-orange-300 border-orange-700/50",
  },
  "03_emerging": {
    label: "Emerging",
    className: "bg-yellow-900/50 text-yellow-300 border-yellow-700/50",
  },
  "04_balanced": {
    label: "Balanced",
    className: "bg-blue-900/50 text-blue-300 border-blue-700/50",
  },
  "05_complete": {
    label: "Complete",
    className: "bg-green-900/50 text-green-300 border-green-700/50",
  },
}

export const MaturityBadge: React.FC<MaturityBadgeProps> = ({ maturity, className }) => {
  if (!maturity) {
    return null
  }

  const styleKey = maturity as EvidenceMaturity
  const styles = maturityStyles[styleKey]

  if (!styles) {
    const safeLabel = maturity.toString().replace(/_/g, " ").replace(/^\d+/, "").trim()
    return (
      <Badge
        variant="outline"
        className={cn("font-mono text-xs uppercase tracking-wider border-neutral-600 text-neutral-400", className)}
      >
        {safeLabel || "N/A"}
      </Badge>
    )
  }

  return (
    <Badge
      variant="outline"
      className={cn(`font-mono text-xs uppercase tracking-wider ${styles.className}`, className)}
    >
      {styles.label}
    </Badge>
  )
}
