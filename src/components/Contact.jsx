import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending…')
    // For demo: just simulate a send
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thank you — I will get back to you shortly.')
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="pb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Contact</h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-zinc-300 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <p className="text-zinc-600 leading-relaxed">
              I’m open to new opportunities, collaborations, and interesting problems.
            </p>
            <a href="mailto:hello@example.com" className="mt-4 inline-flex items-center gap-2 text-zinc-800 hover:text-zinc-900">
              <Mail className="h-4 w-4"/>hello@example.com
            </a>
          </div>
          <form onSubmit={onSubmit} className="md:col-span-2 rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required placeholder="Name" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"/>
              <input required type="email" placeholder="Email" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"/>
            </div>
            <textarea required placeholder="Message" rows="5" className="mt-4 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-200"/>
            <div className="mt-4 flex items-center justify-between">
              <button className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm text-white hover:bg-zinc-800">
                <Send className="h-4 w-4"/> Send
              </button>
              <span className="text-xs text-zinc-500">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
