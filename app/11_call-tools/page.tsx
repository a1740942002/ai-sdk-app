'use client'

import { useChat } from '@ai-sdk/react'

export default function Page() {
  const { messages, input, setInput, append } = useChat({
    api: '/11_call-tools/api/chat',
    maxSteps: 2
  })

  return (
    <div>
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value)
        }}
        onKeyDown={async (event) => {
          if (event.key === 'Enter') {
            append({ content: input, role: 'user' })
          }
        }}
      />

      {messages.map((message, index) => (
        <div key={index}>{message.content}</div>
      ))}
    </div>
  )
}
