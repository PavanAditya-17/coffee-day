import { useEffect, useState } from 'react'
import { shop } from '../data/shop.js'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="logo" onClick={close}>
          <span aria-hidden="true">☕</span> {shop.name}
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="bars" aria-hidden="true" />
        </button>

        <nav id="site-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#menu" className="btn btn-primary nav-cta" onClick={close}>
            Explore Menu
          </a>
        </nav>
      </div>
    </header>
  )
}
