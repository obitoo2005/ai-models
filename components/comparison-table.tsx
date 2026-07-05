import { Badge } from '@/components/ui/badge'
import { models, tierOrder } from '@/lib/models-data'

const tierBadge: Record<string, string> = {
  Frontier: 'border-primary/40 text-primary',
  Mid: 'border-chart-3/40 text-chart-3',
  Value: 'border-chart-2/40 text-chart-2',
  Budget: 'border-border text-muted-foreground',
}

const sorted = [...models].sort(
  (a, b) =>
    tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier) || b.sweBench - a.sweBench,
)

export function ComparisonTable() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
          Full comparison
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Every model, every number, one table. Prices are per 1M tokens; open-weight
          provider rates vary.
        </p>
        <div className="mt-10 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[760px] border-collapse bg-card text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th scope="col" className="p-4 font-mono text-xs font-medium text-muted-foreground">
                  Model
                </th>
                <th scope="col" className="p-4 font-mono text-xs font-medium text-muted-foreground">
                  Tier
                </th>
                <th scope="col" className="p-4 text-right font-mono text-xs font-medium text-muted-foreground">
                  Input $/1M
                </th>
                <th scope="col" className="p-4 text-right font-mono text-xs font-medium text-muted-foreground">
                  Output $/1M
                </th>
                <th scope="col" className="p-4 text-right font-mono text-xs font-medium text-muted-foreground">
                  Context
                </th>
                <th scope="col" className="p-4 text-right font-mono text-xs font-medium text-muted-foreground">
                  Score
                </th>
                <th scope="col" className="p-4 font-mono text-xs font-medium text-muted-foreground">
                  Best at
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((model) => (
                <tr
                  key={model.id}
                  className="border-b border-border last:border-0 transition-colors hover:bg-secondary/50"
                >
                  <td className="p-4">
                    <span className="font-mono font-medium">{model.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {model.lab}
                      {model.openWeights && ' · open weights'}
                    </span>
                  </td>
                  <td className="p-4">
                    <Badge variant="outline" className={`font-mono text-xs ${tierBadge[model.tier]}`}>
                      {model.tier}
                    </Badge>
                  </td>
                  <td className="p-4 text-right font-mono">
                    ${model.inputPrice.toFixed(2)}
                  </td>
                  <td className="p-4 text-right font-mono">
                    ${model.outputPrice.toFixed(2)}
                    {model.priceNote && (
                      <span className="block text-xs font-normal text-muted-foreground">
                        {model.priceNote}
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right font-mono">{model.context}</td>
                  <td className="p-4 text-right font-mono text-primary">{model.sweBench}</td>
                  <td className="max-w-56 p-4 text-xs leading-relaxed text-muted-foreground">
                    {model.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
