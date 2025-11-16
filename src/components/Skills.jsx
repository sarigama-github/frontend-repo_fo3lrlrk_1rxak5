import { Cpu, Database, Cloud, LayoutGrid } from 'lucide-react'

const skills = [
  { name: 'Java', icon: Cpu },
  { name: 'Spring Boot', icon: LayoutGrid },
  { name: 'Kotlin', icon: Cpu },
  { name: 'React', icon: LayoutGrid },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Cloud', icon: Cloud },
  { name: 'System Design', icon: LayoutGrid },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="pb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Skills</h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-zinc-300 to-transparent" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {skills.map(({ name, icon: Icon }) => (
            <div key={name} className="group rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_12px_50px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-2">
                  <Icon className="h-5 w-5 text-zinc-700" />
                </div>
                <span className="text-sm font-medium text-zinc-800">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
