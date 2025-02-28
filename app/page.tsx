import Link from 'next/link'

const navs = [
  {
    label: '01_generate-text',
    href: '/01_generate-text'
  },
  {
    label: '02_generate-text-with-chat-prompt',
    href: '/02_generate-text-with-chat-prompt'
  },
  {
    label: '03_generate-image-with-chat-prompt',
    href: '/03_generate-image-with-chat-prompt'
  },
  {
    label: '04_stream-text',
    href: '/04_stream-text'
  },
  {
    label: '05_stream-text-with-chat-prompt',
    href: '/05_stream-text-with-chat-prompt'
  },
  {
    label: '06_chat-with-pdfs',
    href: '/06_chat-with-pdfs'
  },
  {
    label: '07_markdown-chatbot-with-memoization',
    href: '/07_markdown-chatbot-with-memoization'
  },
  {
    label: '08_generate-object',
    href: '/08_generate-object'
  },
  {
    label: '09_generate-object-with-file-prompt-through-form-submission',
    href: '/09_generate-object-with-file-prompt-through-form-submission'
  },
  {
    label: '10_stream-object',
    href: '/10_stream-object'
  },
  {
    label: '11_call-tools',
    href: '/11_call-tools'
  },
  {
    label: '12_call-tools-in-parallel',
    href: '/12_call-tools-in-parallel'
  },
  {
    label: '13_call-tools-in-multiple-steps',
    href: '/13_call-tools-in-multiple-steps'
  },
  {
    label: '14_human-in-the-loop-with-next-js',
    href: '/14_human-in-the-loop-with-next-js'
  },
  {
    label: '15_send-custom-body-from-use-chat',
    href: '/15_send-custom-body-from-use-chat'
  },
  {
    label: '16_render-visual-interface-in-chat',
    href: '/16_render-visual-interface-in-chat'
  },
  {
    label: '17_stream-assistant-response',
    href: '/17_stream-assistant-response'
  },
  {
    label: '18_stream-assistant-response-with-tools',
    href: '/18_stream-assistant-response-with-tools'
  },
  {
    label: '19_caching-middleware',
    href: '/19_caching-middleware'
  }
]
export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      {navs.map((nav) => (
        <Link key={nav.href} href={nav.href}>
          {nav.label}
        </Link>
      ))}
    </div>
  )
}
