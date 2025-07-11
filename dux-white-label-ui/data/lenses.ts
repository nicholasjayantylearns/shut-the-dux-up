// data/lenses.ts
export interface Lens {
  id: string
  name: string
  description: string
  keywords?: string[] // Keywords to help filter/rank related objects
}

export const mockLenses: Lens[] = [
  {
    id: "lens-001",
    name: "Cost Optimization",
    description: "Focuses on insights that highlight cost savings or financial efficiency.",
    keywords: ["cost", "budget", "efficiency", "savings", "finops"],
  },
  {
    id: "lens-002",
    name: "User Experience (UX)",
    description: "Emphasizes insights related to user satisfaction, usability, and pain points.",
    keywords: ["user", "experience", "satisfaction", "usability", "friction"],
  },
  {
    id: "lens-003",
    name: "Strategic Alignment",
    description: "Highlights insights that directly support high-level business objectives and roadmap decisions.",
    keywords: ["strategy", "roadmap", "business value", "prioritization", "impact"],
  },
  {
    id: "lens-004",
    name: "Technical Feasibility",
    description:
      "Presents insights from an engineering perspective, focusing on implementation complexity and technical debt.",
    keywords: ["technical", "engineering", "implementation", "complexity", "debt"],
  },
]
