export default function Footer() {
  return (
    <footer className="py-10 border-t border-zinc-200/70 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} SDE Portfolio</p>
        <p>Crafted with calm minimalism</p>
      </div>
    </footer>
  )
}
