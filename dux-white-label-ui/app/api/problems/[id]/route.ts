import { NextResponse } from "next/server"
import * as Data from "@/data/problem-detail-data"
import type { Problem, Provenance } from "@/types/dux-v9.5"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // In a real application, you would fetch data from your database or an external API here.
  // For this example, we'll simulate fetching the problem_9001 data.

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const problemId = params.id

  // Check if the requested ID matches our mock live data (problem_9001)
  if (problemId === Data.problem_9001.id) {
    const problem: Problem = Data.problem_9001
    const linkedProvenance: Provenance[] = problem.evidence.map((id) => Data.allProvenance[id])

    return NextResponse.json({ problem, linkedProvenance })
  } else {
    // If the ID doesn't match, return a 404 or an error
    return new NextResponse(JSON.stringify({ error: "Problem not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    })
  }
}
