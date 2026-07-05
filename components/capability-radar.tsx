'use client'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import { capabilityLabels, models, type Model } from '@/lib/models-data'
import { useState } from 'react'
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
} from 'recharts'

const chartConfig = {
  a: { label: 'Model A', color: 'var(--chart-1)' },
  b: { label: 'Model B', color: 'var(--chart-2)' },
} satisfies ChartConfig

function buildRadarData(modelA: Model, modelB: Model) {
  return (Object.keys(capabilityLabels) as Array<keyof Model['capabilities']>).map(
    (key) => ({
      capability: capabilityLabels[key],
      a: modelA.capabilities[key],
      b: modelB.capabilities[key],
    }),
  )
}

export function CapabilityRadar() {
  const [aId, setAId] = useState('mythos-5')
  const [bId, setBId] = useState('deepseek-v4-pro')

  const modelA = models.find((m) => m.id === aId) ?? models[0]
  const modelB = models.find((m) => m.id === bId) ?? models[1]
  const data = buildRadarData(modelA, modelB)

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
        Head-to-head capability radar
      </h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
        Pick any two models to compare across the six dimensions that matter for
        software engineering.
      </p>
      <div className="mt-10 rounded-lg border border-border bg-card p-4 md:p-6">
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 font-mono text-xs">
            <span className="size-2.5 rounded-sm bg-chart-1" aria-hidden="true" />
            <span className="sr-only">Model A</span>
            <select
              value={aId}
              onChange={(e) => setAId(e.target.value)}
              className="rounded-md border border-border bg-secondary px-2 py-1.5 text-xs text-foreground"
            >
              {models.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 font-mono text-xs">
            <span className="size-2.5 rounded-sm bg-chart-2" aria-hidden="true" />
            <span className="sr-only">Model B</span>
            <select
              value={bId}
              onChange={(e) => setBId(e.target.value)}
              className="rounded-md border border-border bg-secondary px-2 py-1.5 text-xs text-foreground"
            >
              {models.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <ChartContainer config={chartConfig} className="mx-auto mt-4 h-[400px] w-full max-w-lg">
          <RadarChart data={data}>
            <PolarGrid strokeOpacity={0.2} />
            <PolarAngleAxis dataKey="capability" tick={{ fontSize: 11 }} />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelKey="capability"
                  formatter={(value, name) => (
                    <div className="flex w-full items-center justify-between gap-4">
                      <span className="text-muted-foreground">
                        {name === 'a' ? modelA.name : modelB.name}
                      </span>
                      <span className="font-mono">{value}</span>
                    </div>
                  )}
                />
              }
            />
            <Radar
              name="a"
              dataKey="a"
              stroke="var(--color-a)"
              fill="var(--color-a)"
              fillOpacity={0.18}
              strokeWidth={2}
            />
            <Radar
              name="b"
              dataKey="b"
              stroke="var(--color-b)"
              fill="var(--color-b)"
              fillOpacity={0.18}
              strokeWidth={2}
            />
          </RadarChart>
        </ChartContainer>
        <div className="flex flex-wrap justify-center gap-6 border-t border-border pt-4 font-mono text-xs">
          <span className="flex items-center gap-2">
            <span className="size-2.5 rounded-sm bg-chart-1" aria-hidden="true" />
            {modelA.name}
            <span className="text-muted-foreground">
              ${modelA.inputPrice}/${modelA.outputPrice} per 1M
            </span>
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2.5 rounded-sm bg-chart-2" aria-hidden="true" />
            {modelB.name}
            <span className="text-muted-foreground">
              ${modelB.inputPrice}/${modelB.outputPrice} per 1M
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}
