import type * as Dux from "@/types/dux-v9.5"
import type { Filter } from "@/data/filters"

// Helper function to check if an object matches the active filter's keywords
export const matchesFilter = (object: Dux.DuxObject, filter: Filter | null): boolean => {
  if (!filter || filter.isNoFilter || !filter.keywords || filter.keywords.length === 0) {
    return true // No filter or "no filter" selected, show all
  }

  const lowerCaseKeywords = filter.keywords.map((k) => k.toLowerCase())

  // Combine relevant text fields from the object for matching
  let searchableText = ""
  if (object.name) searchableText += object.name.toLowerCase() + " "
  if (object.description) searchableText += object.description.toLowerCase() + " "
  if (object.tags) searchableText += object.tags.map((t) => t.toLowerCase()).join(" ") + " "

  // Specific fields for Problem
  const problemObject = object as Dux.Problem
  if (problemObject.job_statement) searchableText += problemObject.job_statement.toLowerCase() + " "
  if (problemObject.whats_at_stake) searchableText += problemObject.whats_at_stake.toLowerCase() + " "
  if (Array.isArray(problemObject.end_user))
    searchableText += problemObject.end_user.map((u) => u.toLowerCase()).join(" ") + " "

  // Specific fields for Behavior
  const behaviorObject = object as Dux.Behavior
  if (behaviorObject.acceptance_criteria)
    searchableText += behaviorObject.acceptance_criteria.map((ac) => ac.toLowerCase()).join(" ") + " "
  if (behaviorObject.signals) searchableText += behaviorObject.signals.map((s) => s.toLowerCase()).join(" ") + " "
  if (behaviorObject.user_enablement) searchableText += behaviorObject.user_enablement.toLowerCase() + " "

  // Specific fields for Result
  const resultObject = object as Dux.Result
  if (resultObject.success_criteria)
    searchableText += resultObject.success_criteria.map((sc) => sc.toLowerCase()).join(" ") + " "
  if (resultObject.outcome_metrics) {
    searchableText +=
      Object.keys(resultObject.outcome_metrics)
        .map((k) => k.toLowerCase())
        .join(" ") + " "
    searchableText +=
      Object.values(resultObject.outcome_metrics)
        .map((v) => v.toLowerCase())
        .join(" ") + " "
  }

  return lowerCaseKeywords.some((keyword) => searchableText.includes(keyword))
}
