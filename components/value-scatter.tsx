'use client'

import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from '@/components/ui/chart'
import { models } from '@/lib/models-data'
import {
  CartesianGrid,
  Cell,
  Scatter,
  ScatterChart,
  XAxis,
  YAxis,
  ZAxis,
} from 'recharts'

const chartConfig = {
  score: {
    label: 'Coding score',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

const tierFill: Record<string, string> = {
  Frontier: 'var(--chart-1)',
  Mid: 'var(--chart-3)',
  Value: 'var(--chart-2)',
  Budget: 'var(--chart-5)',
}

const data = models.map((m) => ({
  name: m.name,
  price: m.outputPrice,
  score: m.sweBench,
  tier: m.tier,
}))

function ScatterTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ payload: (typeof data)[number] }>
}) {
  if (!active || !payload?.length) return null
  const point = payload[0].payload
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 text-xs shadow-xl">
      <p className="font-mono font-semibold">{point.name}</p>
      <p className="mt-1 text-muted-foreground">
        Score: <span className="font-mono text-foreground">{point.score}</span>
      </p>
      <p className="text-muted-foreground">
        Output: <span className="font-mono text-foreground">${point.price}/1M</span>
      </p>
    </div>
  )
}

export function ValueScatter() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
          The value frontier
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Quality vs. output price (log scale). The most important trend in AI right now:
          the top-left corner keeps filling up with open-weight models.
        </p>
        <div className="mt-10 rounded-lg border border-border bg-card p-4 md:p-6">
          <ChartContainer config={chartConfig} className="h-[420px] w-full">
            <ScatterChart margin={{ top: 16, right: 24, bottom: 16, left: 8 }}>
              <CartesianGrid strokeOpacity={0.15} />
              <XAxis
                type="number"
                dataKey="price"
                name="Output price"
                scale="log"
                domain={[0.2, 250]}
                tickFormatter={(v: number) => `$${v}`}
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                label={{
                  value: 'Output $/1M tokens (log)',
                  position: 'insideBottom',
                  offset: -8,
                  fontSize: 11,
                  fill: 'var(--muted-foreground)',
                }}
              />
              <YAxis
                type="number"
                dataKey="score"
                name="Score"
                domain={[60, 100]}
                tick={{ fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                label={{
                  value: 'Coding score',
                  angle: -90,
                  position: 'insideLeft',
                  fontSize: 11,
                  fill: 'var(--muted-foreground)',
                }}
              />
              <ZAxis range={[120, 120]} />
              <ChartTooltip content={<ScatterTooltip />} cursor={{ strokeDasharray: '4 4' }} />
              <Scatter data={data}>
                {data.map((entry) => (
                  <Cell key={entry.name} fill={tierFill[entry.tier]} />
                ))}
              </Scatter>
            </ScatterChart>
          </ChartContainer>
          <p className="mt-4 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
            Top-left = better value. DeepSeek V4 Pro: ~90% of frontier quality at ~2% of
            the price.
          </p>
        </div>
      </div>
    </section>
  )
}
