import { Badge } from '@/components/ui/badge'
import { budgetStacks } from '@/lib/models-data'
import { Code2, Compass } from 'lucide-react'

export function BudgetStacks() {
  return (
    <section id="stacks" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
          Budget two-model stacks
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          The rational split: an input-heavy planner and an output-heavy coder. Pair
          them in Cline, ZooCode, Aider, or OpenCode via OpenRouter.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {budgetStacks.map((stack) => (
            <article
              key={stack.name}
              className={`flex flex-col gap-5 rounded-lg border bg-card p-6 ${
                stack.highlight ? 'border-primary/50' : 'border-border'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-mono text-base font-semibold">{stack.name}</h3>
                {stack.highlight && (
                  <Badge className="bg-primary font-mono text-xs text-primary-foreground">
                    Best value
                  </Badge>
                )}
              </div>
              <p className="font-mono text-2xl font-bold text-primary">
                {stack.monthlyEstimate}
              </p>
              <dl className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-md border border-border bg-secondary/50 p-3">
                  <Compass className="size-4 shrink-0 text-chart-3" aria-hidden="true" />
                  <div>
                    <dt className="font-mono text-xs text-muted-foreground">Planner</dt>
                    <dd className="font-mono text-sm font-medium">{stack.planner}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-md border border-border bg-secondary/50 p-3">
                  <Code2 className="size-4 shrink-0 text-chart-2" aria-hidden="true" />
                  <div>
                    <dt className="font-mono text-xs text-muted-foreground">Coder</dt>
                    <dd className="font-mono text-sm font-medium">{stack.coder}</dd>
                  </div>
                </div>
              </dl>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {stack.rationale}
              </p>
              <p className="mt-auto border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                <span className="font-mono text-destructive">Trade-off:</span>{' '}
                {stack.tradeoff}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
