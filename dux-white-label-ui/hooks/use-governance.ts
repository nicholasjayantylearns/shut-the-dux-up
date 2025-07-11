"use client"

import { useState, useEffect } from "react"

// Governance rules
const GOVERNANCE_RULES = {
  mini: {
    maxAttributes: 3,
  },
  grid: {
    maxAttributes: 5,
  },
  detail: {
    maxAttributes: Number.POSITIVE_INFINITY, // No limit
  },
}

export function useGovernance(componentName: string, variant: "mini" | "grid" | "detail", attributeCount: number) {
  const [hasErrors, setHasErrors] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    const rule = GOVERNANCE_RULES[variant]
    if (attributeCount > rule.maxAttributes) {
      const message = `${componentName} (${variant}) violates governance: displays ${attributeCount} attributes (max ${rule.maxAttributes}).`
      console.warn(message)
      setHasErrors(true)
      setErrorMessage(message)
    } else {
      setHasErrors(false)
      setErrorMessage(null)
    }
  }, [componentName, variant, attributeCount])

  return {
    hasErrors,
    errorMessage,
  }
}
