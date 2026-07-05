import { Badge } from '@/components/ui/badge'
import { models, tierDescriptions, tierOrder } from '@/lib/models-data'
import { Unlock } from 'lucide-react'

const tierColors: Record<string, string> = {
  Frontier: 'text-primary border-primary/40',
  Mid: 'text-chart-3 border-chart-3/40',
  Value: 'text-chart-2 border-chart-2/40',
  Budget: 'text-muted-foreground border-border',
}

export function TierRanking() {
  return (
    <section id="rankings" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
        Tier rankings
      </h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
        Tiers are more honest than exact ranks. Within a tier, differences are smaller
        than the variance you get from changing your prompt or agent scaffold.
      </p>
      <div className="mt-10 flex flex-col gap-10">
        {tierOrder.map((tier) => {
          const tierModels = models.filter((m) => m.tier === tier)
          return (
            <div key={tier}>
              <div className="flex items-baseline gap-3">
                <Badge variant="outline" className={`font-mono ${tierColors[tier]}`}>
                  {tier}
                </Badge>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tierDescriptions[tier]}
                </p>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tierModels.map((model) => (
                  <article
                    key={model.id}
                    className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-mono text-sm font-semibold">{model.name}</h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {model.lab} · {model.country}
                        </p>
                      </div>
                      {model.openWeights && (
                        <span
                          className="flex items-center gap-1 font-mono text-xs text-chart-2"
                          title="Open weights"
                        >
                          <Unlock className="size-3" aria-hidden="true" />
                          open
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {model.bestFor}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-border pt-3 font-mono text-xs">
                      <span className="text-muted-foreground">
                        ${model.inputPrice} / ${model.outputPrice} per 1M
                      </span>
                      <span className="text-primary">{model.sweBench} SWE</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
