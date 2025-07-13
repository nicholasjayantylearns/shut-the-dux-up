import { NextResponse } from "next/server"
// No import for Request needed; use the global Request type
// This route acts as a simple proxy to the FastAPI backend.
// It forwards the request from the Next.js client to the Python service.

const FASTAPI_URL = "http://localhost:8504/chat" // Your FastAPI backend URL (non-streaming endpoint)

export const runtime = "edge"

export async function POST(req: Request) {
  try {
    // Extract the body from the incoming Next.js client request
    const body = await req.json()
    
    console.log("Received request body:", JSON.stringify(body, null, 2))

    // Transform the request to match FastAPI's expected format
    // The /chat endpoint expects { text: string, rag?: boolean }
    // Handle both useChat (messages) and useCompletion (prompt) formats
    let text = ""
    
    if (body.messages && Array.isArray(body.messages)) {
      // useChat format - get last message
      text = body.messages[body.messages.length - 1]?.content || ""
    } else if (body.prompt) {
      // useCompletion format
      text = body.prompt
    }
    
    const transformedBody = {
      text: text,
      rag: false // Disable RAG for now until indexes are populated
    }
    
    console.log("Sending to FastAPI:", JSON.stringify(transformedBody, null, 2))

    // Forward the request to the FastAPI backend
    const fastApiResponse = await fetch(FASTAPI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/event-stream",
      },
      body: JSON.stringify(transformedBody),
    })

    // Check if the response from FastAPI is valid
    if (!fastApiResponse.ok) {
      const errorBody = await fastApiResponse.text()
      console.error("Error from FastAPI backend:", errorBody)
      return new NextResponse(`Error from backend: ${fastApiResponse.status} ${fastApiResponse.statusText}`, {
        status: fastApiResponse.status,
      })
    }

    // For non-streaming endpoint, we need to format the response for useChat
    const responseData = await fastApiResponse.json()
    
    // Create a streaming response that sends the complete message
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      start(controller) {
        // Send the complete response as a single data event
        const message = JSON.stringify({
          id: Date.now().toString(),
          role: 'assistant',
          content: responseData.result || responseData.text || ''
        })
        controller.enqueue(encoder.encode(`data: ${message}\n\n`))
        controller.close()
      }
    })

    // Return as SSE stream for useChat compatibility
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    console.error("Error in proxy route:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
