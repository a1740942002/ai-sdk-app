'use client'

import { useCompletion } from '@ai-sdk/react'

export default function Page() {
  const { completion, complete } = useCompletion({
    api: '/04_stream-text/api/completion'
  })

  return (
    <div>
      <div
        onClick={async () => {
          await complete('Why is the sky blue?')
        }}
      >
        Generate
      </div>

      {completion}
    </div>
  )
}
