import { NextResponse } from "next/server"
import type { Request } from "next/server"

// This route acts as a simple proxy to the FastAPI backend.
// It forwards the request from the Next.js client to the Python service.

const FASTAPI_URL = "http://localhost:8504/chat" // Your FastAPI backend URL

export const runtime = "edge"

export async function POST(req: Request) {
  try {
    // Extract the body from the incoming Next.js client request
    const body = await req.json()

    // Forward the request to the FastAPI backend
    const fastApiResponse = await fetch(FASTAPI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/event-stream",
      },
      body: JSON.stringify(body),
    })

    // Check if the response from FastAPI is valid
    if (!fastApiResponse.ok) {
      const errorBody = await fastApiResponse.text()
      console.error("Error from FastAPI backend:", errorBody)
      return new NextResponse(`Error from backend: ${fastApiResponse.status} ${fastApiResponse.statusText}`, {
        status: fastApiResponse.status,
      })
    }

    // Stream the response from the FastAPI backend directly to the Next.js client
    return new Response(fastApiResponse.body, {
      status: fastApiResponse.status,
      statusText: fastApiResponse.statusText,
      headers: fastApiResponse.headers,
    })
  } catch (error) {
    console.error("Error in proxy route:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
