import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  // In a real app, you'd fetch the status for params.id from a database or CI/CD system.
  // Here, we'll just simulate it randomly.
  const statuses = ["passing", "failing"]
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]

  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay

  return NextResponse.json({ id: params.id, status: randomStatus })
}
