const projects = [
  {
    title: 'Event-driven Order Service',
    desc: 'High-throughput order pipeline with idempotent processing, retries, and observability.',
    tags: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL']
  },
  {
    title: 'Realtime Collaboration UI',
    desc: 'Low-latency React interface with optimistic updates and offline-safe syncing.',
    tags: ['React', 'WebSocket', 'Framer Motion']
  },
  {
    title: 'Infra-as-Code Platform',
    desc: 'Self-serve cloud environments with policy guardrails and cost controls.',
    tags: ['Cloud', 'Terraform', 'Kubernetes']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-zinc-50/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="pb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Projects</h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-zinc-300 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <h3 className="text-lg font-medium text-zinc-900 tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-[11px] tracking-wide rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-zinc-700">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
