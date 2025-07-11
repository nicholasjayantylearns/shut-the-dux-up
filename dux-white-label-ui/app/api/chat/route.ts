import { streamText } from "ai"
import { createOpenAI } from "@ai-sdk/openai"
import type { NextRequest } from "next/server"

// This route provides a direct, streaming connection to a local Ollama instance.
// It's intended for standalone UI development when the full FastAPI backend is not needed.

export const runtime = "edge"

// Ensure the local Ollama URL is configured.
const ollamaBaseUrl = process.env.LOCAL_LLM_API_BASE_URL || "http://localhost:11434"

// Configure the AI SDK to use the local Ollama endpoint.
// The key can be anything as Ollama doesn't require one by default.
const ollama = createOpenAI({
  baseURL: ollamaBaseUrl,
  apiKey: "",
})

export async function POST(req: NextRequest) {
  if (!ollamaBaseUrl) {
    return new Response("Error: LOCAL_LLM_API_BASE_URL is not set. This route cannot function.", { status: 500 })
  }

  try {
    const { messages, data } = await req.json()

    // Extract the custom data sent from the client
    const userRequest = data?.userRequest || ""
    const systemPrompt = data?.systemPrompt || "You are a helpful AI assistant."

    // Combine the system prompt and the latest user message for context.
    const fullPrompt = `${systemPrompt}\n\nUser Request: ${userRequest}`

    const result = await streamText({
      model: ollama('llama3.2'), 
      prompt: fullPrompt,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Error in direct-to-Ollama route:", error)
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred"
    return new Response(`Error: ${errorMessage}`, { status: 500 })
  }
}
