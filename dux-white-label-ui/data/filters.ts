// data/filters.ts
export interface Filter {
  id: string
  name: string
  description: string
  keywords?: string[] // Keywords to help filter/rank related objects
  isNoFilter?: boolean // New property to indicate "no filter"
}

export const mockFilters: Filter[] = [
  {
    id: "no-filter",
    name: "#nofilter",
    description: "View all alternatives without any specific filter applied.",
    isNoFilter: true,
  },
  {
    id: "filter-001",
    name: "Cost Optimization",
    description: "Focuses on insights that highlight cost savings or financial efficiency.",
    keywords: ["cost", "budget", "efficiency", "savings", "finops", "financial"],
  },
  {
    id: "filter-002",
    name: "User Experience (UX)",
    description: "Emphasizes insights related to user satisfaction, usability, and pain points.",
    keywords: ["user", "experience", "satisfaction", "usability", "friction", "pain", "needs"],
  },
  {
    id: "filter-003",
    name: "Strategic Alignment",
    description: "Highlights insights that directly support high-level business objectives and roadmap decisions.",
    keywords: ["strategy", "roadmap", "business value", "prioritization", "impact", "decision"],
  },
  {
    id: "filter-004",
    name: "Technical Feasibility",
    description:
      "Presents insights from an engineering perspective, focusing on implementation complexity and technical debt.",
    keywords: ["technical", "engineering", "implementation", "complexity", "debt", "dev", "pipeline"],
  },
]
