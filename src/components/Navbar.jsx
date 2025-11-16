import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300`}> 
      <div className={`mx-auto max-w-6xl px-4`}> 
        <div className={`rounded-full border border-zinc-200/60 bg-white/70 backdrop-blur-md ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.06)]' : 'shadow-[0_8px_40px_rgba(0,0,0,0.04)]'} transition-shadow`}> 
          <nav className="flex items-center justify-between px-6 py-3">
            <a href="#" className="text-zinc-900 tracking-tight font-semibold">
              SDE Portfolio
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
            </button>
          </nav>
          {open && (
            <div className="md:hidden border-t border-zinc-200/70 px-6 py-3">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-zinc-700">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
