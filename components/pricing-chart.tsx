'use client'

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { models } from '@/lib/models-data'
import { useState } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const chartConfig = {
  inputPrice: {
    label: 'Input $/1M',
    color: 'var(--chart-3)',
  },
  outputPrice: {
    label: 'Output $/1M',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig

const data = [...models]
  .sort((a, b) => b.outputPrice - a.outputPrice)
  .map((m) => ({
    name: m.name,
    inputPrice: m.inputPrice,
    outputPrice: m.outputPrice,
  }))

export function PricingChart() {
  const [logScale, setLogScale] = useState(true)

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
            API pricing per 1M tokens
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Output tokens dominate coding costs — models generate a lot of code. GPT-5.5
            Pro output costs ~643x DeepSeek V4 Flash.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setLogScale((v) => !v)}
          className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          aria-pressed={logScale}
        >
          {logScale ? 'log scale' : 'linear scale'}
        </button>
      </div>
      <div className="mt-10 rounded-lg border border-border bg-card p-4 md:p-6">
        <ChartContainer config={chartConfig} className="h-[440px] w-full">
          <BarChart data={data} margin={{ left: 8, right: 8, bottom: 60 }}>
            <CartesianGrid vertical={false} strokeOpacity={0.15} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              angle={-40}
              textAnchor="end"
              interval={0}
              tick={{ fontSize: 11 }}
              height={90}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              scale={logScale ? 'log' : 'linear'}
              domain={logScale ? [0.1, 200] : [0, 'auto']}
              allowDataOverflow
              tickFormatter={(v: number) => `$${v}`}
              tick={{ fontSize: 11 }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value, name, item) => (
                    <div className="flex w-full items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <span
                          className="size-2 rounded-sm"
                          style={{ backgroundColor: item.color }}
                        />
                        {chartConfig[name as keyof typeof chartConfig]?.label}
                      </span>
                      <span className="font-mono">${Number(value).toFixed(2)}</span>
                    </div>
                  )}
                />
              }
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="inputPrice" fill="var(--color-inputPrice)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="outputPrice" fill="var(--color-outputPrice)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </div>
    </section>
  )
}
