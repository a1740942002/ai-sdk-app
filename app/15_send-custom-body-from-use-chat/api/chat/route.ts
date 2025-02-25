import { openai } from '@ai-sdk/openai'
import { streamText } from 'ai'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  // we receive only the text from the last message
  const text = await req.json()

  // e.g. load message history from storage
  const history = await loadHistory()

  // Call the language model
  const result = streamText({
    model: openai('gpt-4-turbo'),
    messages: [...history, { role: 'user', content: text }]
    onFinish({ text }) {
      // e.g. save the message and the response to storage
    }
  })

  // Respond with the stream
  return result.toDataStreamResponse()
}