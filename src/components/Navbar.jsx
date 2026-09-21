import { useState } from 'react'
import { content } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-bold text-lg text-brand-dark">
          {content.business.name}
        </a>

        <button
          className="sm:hidden text-2xl leading-none"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>

        <ul className="hidden sm:flex gap-8 text-sm font-medium">
          {content.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-brand transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="sm:hidden flex flex-col gap-1 px-6 pb-4 text-sm font-medium">
          {content.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
