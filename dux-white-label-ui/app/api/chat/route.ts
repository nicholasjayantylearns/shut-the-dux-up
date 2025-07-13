import type { NextRequest } from "next/server"

// This route connects to the FastAPI backend for RAG-enabled chat functionality.
// UI -> FastAPI (8504) -> LLM (11434) + Neo4j GraphRAG

export const runtime = "edge"

// FastAPI backend URL running on port 8504
const backendUrl = process.env.BACKEND_URL || "http://localhost:8504"

export async function POST(req: NextRequest) {
  try {
    const { messages, data } = await req.json()

    // Extract the custom data sent from the client
    const userRequest = data?.userRequest || ""
    const systemPrompt = data?.systemPrompt || "You are a helpful AI assistant."
    const useRAG = false // Disable RAG for now until indexes are populated

    // Prepare messages for the backend
    const backendMessages = [
      { role: "system", content: systemPrompt },
      ...messages,
    ]

    // If there's a specific user request, add it as the latest message
    if (userRequest) {
      backendMessages.push({ role: "user", content: userRequest })
    }

    // Forward the request to the FastAPI backend chat-stream endpoint
    const response = await fetch(`${backendUrl}/chat-stream`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: backendMessages,
        rag: useRAG,
      }),
    })

    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}: ${response.statusText}`)
    }

    // Stream the response back to the client
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    })
  } catch (error) {
    console.error("Error in chat route:", error)
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
    return new Response(`Error: ${errorMessage}`, { status: 500 })
  }
}
