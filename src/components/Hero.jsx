import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[82vh] min-h-[520px] w-full" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-zinc-900">
              Software Development Engineer
            </h1>
            <p className="mt-4 text-zinc-600 text-lg leading-relaxed">
              Building clean, resilient systems and elegant user experiences with a focus on performance, simplicity, and craft.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center rounded-full bg-zinc-900 text-white px-5 py-2.5 text-sm hover:bg-zinc-800 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2.5 text-sm text-zinc-800 hover:border-zinc-400 transition-colors">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
    </section>
  )
}
