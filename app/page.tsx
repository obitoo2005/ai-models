import { BenchmarkChart } from '@/components/benchmark-chart'
import { BudgetStacks } from '@/components/budget-stacks'
import { CapabilityRadar } from '@/components/capability-radar'
import { CodeExamples } from '@/components/code-examples'
import { ComparisonTable } from '@/components/comparison-table'
import { Hero } from '@/components/hero'
import { PricingChart } from '@/components/pricing-chart'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { TierRanking } from '@/components/tier-ranking'
import { ValueScatter } from '@/components/value-scatter'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <TierRanking />
        <BenchmarkChart />
        <PricingChart />
        <ValueScatter />
        <CapabilityRadar />
        <ComparisonTable />
        <CodeExamples />
        <BudgetStacks />
      </main>
      <SiteFooter />
    </>
  )
}
