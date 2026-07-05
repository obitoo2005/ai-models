import { Badge } from '@/components/ui/badge'

const stats = [
  { value: '13', label: 'Models compared' },
  { value: '6', label: 'AI labs' },
  { value: '57x', label: 'Frontier vs value price gap' },
  { value: '3-way', label: 'Tie at the frontier' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 3%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 3%) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <Badge variant="outline" className="mb-6 border-primary/30 font-mono text-xs text-primary">
          Independent · Bias-corrected · July 2026
        </Badge>
        <h1 className="max-w-3xl text-balance font-mono text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          The honest ranking of AI coding models
        </h1>
        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
          No promotional benchmarks. No marketing-driven leaderboards. Just tiers,
          trade-offs, and real API prices — because there is no single {'"best"'} model,
          only the right one for your task and budget.
        </p>
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card p-6">
              <dd className="font-mono text-3xl font-bold text-primary">{stat.value}</dd>
              <dt className="mt-1 text-sm text-muted-foreground">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
