export default function Experience() {
  const items = [
    {
      role: 'Software Development Engineer',
      company: 'Acme Corp',
      time: '2022 — Present',
      details: 'Designing distributed systems, leading performance initiatives, and mentoring engineers.'
    },
    {
      role: 'Backend Engineer',
      company: 'Nova Systems',
      time: '2020 — 2022',
      details: 'Built resilient APIs, improved reliability, and optimized data pipelines.'
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="pb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Experience</h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-zinc-300 to-transparent" />
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200" />
          <div className="space-y-10">
            {items.map((it, idx) => (
              <div key={idx} className="relative pl-12">
                <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                <div className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-zinc-900 font-medium tracking-tight">{it.role} · {it.company}</h3>
                    <span className="text-xs text-zinc-500">{it.time}</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{it.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
