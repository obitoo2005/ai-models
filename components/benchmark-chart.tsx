'use client'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { models } from '@/lib/models-data'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell } from 'recharts'

const chartConfig = {
  sweBench: {
    label: 'Agentic coding score',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

const tierFill: Record<string, string> = {
  Frontier: 'var(--chart-1)',
  Mid: 'var(--chart-3)',
  Value: 'var(--chart-2)',
  Budget: 'var(--chart-5)',
}

const data = [...models]
  .sort((a, b) => b.sweBench - a.sweBench)
  .map((m) => ({ name: m.name, sweBench: m.sweBench, tier: m.tier }))

export function BenchmarkChart() {
  return (
    <section id="benchmarks" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
          Agentic coding benchmark
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
          Representative SWE-Bench-style scores from independent evaluations. Caveat:
          scores are heavily influenced by agent scaffolding — treat small gaps as noise.
        </p>
        <div className="mt-10 rounded-lg border border-border bg-card p-4 md:p-6">
          <ChartContainer config={chartConfig} className="h-[420px] w-full">
            <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16 }}>
              <CartesianGrid horizontal={false} strokeOpacity={0.15} />
              <XAxis type="number" domain={[0, 100]} tickLine={false} axisLine={false} />
              <YAxis
                type="category"
                dataKey="name"
                width={140}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="sweBench" radius={[0, 4, 4, 0]} barSize={18}>
                {data.map((entry) => (
                  <Cell key={entry.name} fill={tierFill[entry.tier]} />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
          <div className="mt-4 flex flex-wrap gap-4 border-t border-border pt-4">
            {Object.entries(tierFill).map(([tier, color]) => (
              <span key={tier} className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="size-2.5 rounded-sm" style={{ backgroundColor: color }} aria-hidden="true" />
                {tier}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
