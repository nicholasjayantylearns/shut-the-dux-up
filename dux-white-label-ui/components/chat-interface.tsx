"use client"

import { useChat } from "ai/react"
import { useRef, useEffect } from "react"
import type { FormEvent } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Bot, User } from "lucide-react"

interface ChatInterfaceProps {
  onNewAssistantMessage: (message: string) => void
  currentProblemId: string
  currentBehaviorId: string
  currentResultId: string
  chatInputId: string
  variant?: "default" | "integrated"
}

export function ChatInterface({
  onNewAssistantMessage,
  currentProblemId,
  currentBehaviorId,
  currentResultId,
  chatInputId,
  variant = "default",
}: ChatInterfaceProps) {
  // Use an environment variable to determine the API endpoint.
  // Defaults to the FastAPI proxy for integrated development.
  const chatEndpoint = process.env.NEXT_PUBLIC_CHAT_API_ENDPOINT || "/api/chat/proxy"

  const { messages, input, handleInputChange, handleSubmit, setInput } = useChat({
    api: chatEndpoint,
    onFinish: (message) => {
      onNewAssistantMessage(message.content)
    },
  })

  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const customHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const systemPrompt = `
      You are an expert UX researcher and strategist.
      Refine the following user-provided insight narrative.
      The narrative is based on this chain of objects:
      - Problem ID: ${currentProblemId}
      - Behavior ID: ${currentBehaviorId}
      - Result ID: ${currentResultId}
      The user's request for refinement is: "${input}"
      Rewrite the narrative to incorporate the user's request, keeping it concise, clear, and impactful.
      ONLY return the refined narrative text, with no additional commentary or conversational text.
    `
    handleSubmit(e, {
      options: {
        body: {
          systemPrompt,
          userRequest: input,
        },
      },
    })
  }

  const messagesArea = (
    <div className="flex flex-col gap-4">
      {messages.map((m) => (
        <div key={m.id} className="flex items-start gap-3">
          <div
            className={`${m.role === "user" ? "bg-green-800/50 text-green-300" : "bg-green-600/50 text-green-200"} flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center`}
          >
            {m.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
          </div>
          <div className="flex-grow pt-1">
            <p className="font-sansBody text-green-300 leading-relaxed">{m.content}</p>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )

  const inputForm = (
    <form onSubmit={customHandleSubmit} className="flex items-center gap-2 pt-4">
      <Input
        id={chatInputId}
        value={input}
        onChange={handleInputChange}
        placeholder="Say something to refine the narrative..."
        className="flex-grow bg-black/50 border-green-800/70 text-green-300 placeholder:text-green-600/80 focus:ring-neon-blue"
      />
      <Button
        type="submit"
        size="icon"
        className="bg-green-600/40 text-green-200 hover:bg-green-600/60 flex-shrink-0"
        aria-label="Submit message"
      >
        <ArrowRight className="w-5 h-5" />
      </Button>
    </form>
  )

  if (variant === "integrated") {
    return (
      <div className="p-4 pt-2 border-t border-green-900/50">
        {messagesArea}
        {inputForm}
      </div>
    )
  }

  // Default variant with Card
  return (
    <Card className="bg-black/30 border-green-900/50 text-green-200">
      <CardHeader>
        <CardTitle className="text-green-400 text-lg">AI Assistant</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-[300px] overflow-y-auto pr-4">{messagesArea}</div>
        {inputForm}
      </CardContent>
    </Card>
  )
}
