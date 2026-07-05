'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { codeExamples } from '@/lib/models-data'

export function CodeExamples() {
  return (
    <section id="examples" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
        Example outputs
      </h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
        Representative outputs illustrating each model&apos;s characteristic strengths —
        the kind of work you can expect from each tier.
      </p>
      <Tabs defaultValue={codeExamples[0].modelId} className="mt-10">
        <TabsList className="h-auto w-full flex-wrap justify-start gap-1 bg-transparent p-0">
          {codeExamples.map((example) => (
            <TabsTrigger
              key={example.modelId}
              value={example.modelId}
              className="rounded-md border border-border bg-card px-3 py-2 font-mono text-xs data-[selected]:border-primary/50 data-[selected]:bg-secondary data-[selected]:text-primary data-[state=active]:border-primary/50 data-[state=active]:bg-secondary data-[state=active]:text-primary"
            >
              {example.model}
            </TabsTrigger>
          ))}
        </TabsList>
        {codeExamples.map((example) => (
          <TabsContent key={example.modelId} value={example.modelId} className="mt-4">
            <div className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="size-2.5 rounded-full bg-destructive/60" />
                    <span className="size-2.5 rounded-full bg-chart-2/60" />
                    <span className="size-2.5 rounded-full bg-primary/60" />
                  </span>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    {example.task}
                  </span>
                </div>
                <span className="font-mono text-xs text-primary">{example.language}</span>
              </div>
              <pre className="max-h-[480px] overflow-auto p-4 font-mono text-xs leading-relaxed md:text-sm">
                <code>{example.code}</code>
              </pre>
              <p className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                {example.note}
              </p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
