'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

function ThemeToggle({ className }: { className?: string }) {
  const [light, setLight] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
  }, [light])

  return (
    <button
      type="button"
      onClick={() => setLight((v) => !v)}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      className={cn(
        'flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary',
        className,
      )}
    >
      {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={cn(
          'flex items-center justify-between gap-4 px-6 py-4 transition-all duration-300 lg:px-10',
          scrolled
            ? 'border-b border-border bg-background/70 shadow-lg shadow-black/30 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <a href="#top" className="text-lg font-bold tracking-tight">
          <span className="text-primary">Bryan&apos;s</span> Portfolio
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-full border border-border text-foreground xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-border bg-background/95 px-6 pb-4 backdrop-blur-xl xl:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}