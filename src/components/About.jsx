export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-200/70 shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-white border border-zinc-200 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"/>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="pb-8">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">About</h2>
              <div className="mt-3 h-px w-16 bg-gradient-to-r from-zinc-300 to-transparent" />
            </div>
            <div className="prose prose-zinc max-w-none">
              <p className="text-zinc-700 leading-relaxed">
                I’m an engineer who values clarity, performance, and thoughtful design. I build backend systems, APIs, and frontends with a focus on clean architecture and maintainability.
              </p>
              <p className="text-zinc-700 leading-relaxed mt-4">
                My toolkit blends reliable platforms with modern developer experience—shipped with empathy for users and future maintainers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
