import { Terminal } from 'lucide-react'

const links = [
  { href: '#rankings', label: 'Rankings' },
  { href: '#benchmarks', label: 'Benchmarks' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#examples', label: 'Examples' },
  { href: '#stacks', label: 'Budget Stacks' },
]

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6"
        aria-label="Main navigation"
      >
        <a href="#top" className="flex items-center gap-2">
          <Terminal className="size-5 text-primary" aria-hidden="true" />
          <span className="font-mono text-sm font-semibold tracking-tight">
            model<span className="text-primary">bench</span>
          </span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
        <span className="font-mono text-xs text-muted-foreground">July 2026</span>
      </nav>
    </header>
  )
}
