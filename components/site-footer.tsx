export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <p className="max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">
          <span className="font-mono text-foreground">Methodology note:</span> There is
          no single objective ranking. Vendor-reported benchmarks are influenced by
          scaffolding and contamination; developer sentiment lags and follows hype.
          Scores here blend independent evaluations with real-world developer
          experience. The only benchmark that truly matters is a 5&ndash;10 task
          bake-off on your own codebase.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <span className="font-mono text-xs text-muted-foreground">
            modelbench · data as of July 2026 · prices per 1M tokens
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            Not affiliated with any AI lab
          </span>
        </div>
      </div>
    </footer>
  )
}
