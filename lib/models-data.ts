export type Tier = 'Frontier' | 'Mid' | 'Value' | 'Budget'

export interface Model {
  id: string
  name: string
  lab: string
  country: string
  tier: Tier
  inputPrice: number // $ per 1M tokens
  outputPrice: number // $ per 1M tokens
  priceNote?: string
  context: string
  sweBench: number // representative agentic coding score (0-100)
  openWeights: boolean
  bestFor: string
  // capability scores 0-100 for radar
  capabilities: {
    codeGen: number
    debugging: number
    refactoring: number
    instructions: number
    largeCodebases: number
    agentic: number
  }
}

export const models: Model[] = [
  {
    id: 'mythos-5',
    name: 'Claude Mythos 5',
    lab: 'Anthropic',
    country: 'US',
    tier: 'Frontier',
    inputPrice: 10,
    outputPrice: 50,
    context: '400K',
    sweBench: 95,
    openWeights: false,
    bestFor: 'Hardest agentic and refactoring work',
    capabilities: {
      codeGen: 96,
      debugging: 95,
      refactoring: 97,
      instructions: 96,
      largeCodebases: 90,
      agentic: 96,
    },
  },
  {
    id: 'fable-5',
    name: 'Claude Fable 5',
    lab: 'Anthropic',
    country: 'US',
    tier: 'Frontier',
    inputPrice: 10,
    outputPrice: 50,
    context: '1M',
    sweBench: 94,
    openWeights: false,
    bestFor: 'Long-horizon autonomous agent tasks',
    capabilities: {
      codeGen: 94,
      debugging: 94,
      refactoring: 95,
      instructions: 95,
      largeCodebases: 96,
      agentic: 97,
    },
  },
  {
    id: 'gpt-5-5',
    name: 'GPT-5.5',
    lab: 'OpenAI',
    country: 'US',
    tier: 'Frontier',
    inputPrice: 5,
    outputPrice: 30,
    context: '400K',
    sweBench: 93,
    openWeights: false,
    bestFor: 'Consistency and everyday dev work',
    capabilities: {
      codeGen: 94,
      debugging: 93,
      refactoring: 92,
      instructions: 94,
      largeCodebases: 88,
      agentic: 92,
    },
  },
  {
    id: 'gpt-5-5-pro',
    name: 'GPT-5.5 Pro',
    lab: 'OpenAI',
    country: 'US',
    tier: 'Frontier',
    inputPrice: 30,
    outputPrice: 180,
    context: '400K',
    sweBench: 94,
    openWeights: false,
    bestFor: 'Marginal gains at extreme prices',
    capabilities: {
      codeGen: 95,
      debugging: 95,
      refactoring: 93,
      instructions: 95,
      largeCodebases: 89,
      agentic: 93,
    },
  },
  {
    id: 'gemini-3-5-pro',
    name: 'Gemini 3.5 Pro',
    lab: 'Google',
    country: 'US',
    tier: 'Frontier',
    inputPrice: 5,
    outputPrice: 25,
    context: '2M',
    sweBench: 92,
    openWeights: false,
    bestFor: 'Massive codebases and long context',
    capabilities: {
      codeGen: 92,
      debugging: 90,
      refactoring: 90,
      instructions: 91,
      largeCodebases: 98,
      agentic: 90,
    },
  },
  {
    id: 'sonnet-5',
    name: 'Claude Sonnet 5',
    lab: 'Anthropic',
    country: 'US',
    tier: 'Mid',
    inputPrice: 2,
    outputPrice: 10,
    priceNote: 'Intro until Aug 31, then $3 / $15',
    context: '400K',
    sweBench: 90,
    openWeights: false,
    bestFor: 'Best Western price-performance',
    capabilities: {
      codeGen: 91,
      debugging: 89,
      refactoring: 90,
      instructions: 93,
      largeCodebases: 86,
      agentic: 89,
    },
  },
  {
    id: 'opus-4-8',
    name: 'Claude Opus 4.8',
    lab: 'Anthropic',
    country: 'US',
    tier: 'Mid',
    inputPrice: 5,
    outputPrice: 25,
    context: '400K',
    sweBench: 89,
    openWeights: false,
    bestFor: 'Solid, but undercut by Sonnet 5',
    capabilities: {
      codeGen: 90,
      debugging: 88,
      refactoring: 89,
      instructions: 91,
      largeCodebases: 85,
      agentic: 88,
    },
  },
  {
    id: 'glm-5-2',
    name: 'GLM-5.2',
    lab: 'Zhipu AI',
    country: 'CN',
    tier: 'Value',
    inputPrice: 1.4,
    outputPrice: 4.4,
    priceNote: '$0.26 cached input · MIT open weights',
    context: '1M',
    sweBench: 86,
    openWeights: true,
    bestFor: 'Long-context and agentic open-weight work',
    capabilities: {
      codeGen: 86,
      debugging: 84,
      refactoring: 84,
      instructions: 85,
      largeCodebases: 93,
      agentic: 88,
    },
  },
  {
    id: 'kimi-k2-6',
    name: 'Kimi K2.6',
    lab: 'Moonshot AI',
    country: 'CN',
    tier: 'Value',
    inputPrice: 1.5,
    outputPrice: 6,
    priceNote: 'Varies by provider ($0.95–2 / $4–8)',
    context: '256K',
    sweBench: 85,
    openWeights: true,
    bestFor: 'Multi-agent orchestration',
    capabilities: {
      codeGen: 85,
      debugging: 83,
      refactoring: 82,
      instructions: 84,
      largeCodebases: 80,
      agentic: 91,
    },
  },
  {
    id: 'qwen-3-7-max',
    name: 'Qwen3.7-Max',
    lab: 'Alibaba',
    country: 'CN',
    tier: 'Value',
    inputPrice: 1.5,
    outputPrice: 5,
    priceNote: 'Approximate, provider-dependent',
    context: '256K',
    sweBench: 84,
    openWeights: true,
    bestFor: 'Balanced open-ecosystem option',
    capabilities: {
      codeGen: 85,
      debugging: 82,
      refactoring: 83,
      instructions: 83,
      largeCodebases: 81,
      agentic: 84,
    },
  },
  {
    id: 'deepseek-v4-pro',
    name: 'DeepSeek V4 Pro',
    lab: 'DeepSeek',
    country: 'CN',
    tier: 'Value',
    inputPrice: 0.44,
    outputPrice: 0.87,
    context: '164K',
    sweBench: 84,
    openWeights: true,
    bestFor: '~90% frontier quality at ~2% of the price',
    capabilities: {
      codeGen: 88,
      debugging: 84,
      refactoring: 83,
      instructions: 82,
      largeCodebases: 76,
      agentic: 83,
    },
  },
  {
    id: 'haiku-4-5',
    name: 'Claude Haiku 4.5',
    lab: 'Anthropic',
    country: 'US',
    tier: 'Budget',
    inputPrice: 1,
    outputPrice: 5,
    context: '200K',
    sweBench: 74,
    openWeights: false,
    bestFor: 'Autocomplete and quick edits',
    capabilities: {
      codeGen: 76,
      debugging: 72,
      refactoring: 70,
      instructions: 82,
      largeCodebases: 68,
      agentic: 70,
    },
  },
  {
    id: 'deepseek-v4-flash',
    name: 'DeepSeek V4 Flash',
    lab: 'DeepSeek',
    country: 'CN',
    tier: 'Budget',
    inputPrice: 0.14,
    outputPrice: 0.28,
    context: '164K',
    sweBench: 71,
    openWeights: true,
    bestFor: 'Boilerplate and CRUD at negligible cost',
    capabilities: {
      codeGen: 74,
      debugging: 68,
      refactoring: 66,
      instructions: 74,
      largeCodebases: 64,
      agentic: 66,
    },
  },
]

export const tierOrder: Tier[] = ['Frontier', 'Mid', 'Value', 'Budget']

export const tierDescriptions: Record<Tier, string> = {
  Frontier:
    'A statistical three-way tie between Anthropic, OpenAI, and Google. Gaps are smaller than the variance from changing your agent scaffold.',
  Mid: 'Frontier-adjacent quality at a fraction of the cost. The daily-driver tier for most professional work.',
  Value:
    'The Chinese open-weight tier — closing the quality gap faster than the frontier labs are closing the price gap.',
  Budget: 'High-volume, low-stakes work: autocomplete, boilerplate, simple edits.',
}

export const budgetStacks = [
  {
    name: 'The Near-Zero Stack',
    monthlyEstimate: '< $5 / mo',
    planner: 'GLM-5.2',
    coder: 'DeepSeek V4 Pro',
    rationale:
      'Planning is input-heavy and output-light, so GLM-5.2 brings 1M-token context for pennies. Coding is output-heavy, so DeepSeek V4 Pro delivers the cheapest strong output tokens available.',
    tradeoff: 'More tooling setup friction, occasional instruction misses needing a retry.',
    highlight: true,
  },
  {
    name: 'The Smart Budget Stack',
    monthlyEstimate: '$10–20 / mo',
    planner: 'Claude Sonnet 5',
    coder: 'DeepSeek V4 Pro',
    rationale:
      'Sonnet 5 planning and instruction-following are a real step up, and since planning generates few output tokens, it barely adds cost. Works out of the box in nearly every tool.',
    tradeoff: 'A few dollars more per month than the near-zero stack.',
    highlight: false,
  },
  {
    name: 'The One-Model Stack',
    monthlyEstimate: '< $3 / mo',
    planner: 'DeepSeek V4 Pro',
    coder: 'DeepSeek V4 Pro',
    rationale:
      'One API, one bill, zero mode-juggling. Honestly fine for most solo projects — simplicity is a feature.',
    tradeoff: 'No specialized planner; hardest tasks may need more retries.',
    highlight: false,
  },
]

export const codeExamples = [
  {
    modelId: 'mythos-5',
    model: 'Claude Mythos 5',
    task: 'Refactor: extract retry logic into a reusable utility',
    language: 'typescript',
    note: 'Typical frontier behavior: anticipates edge cases (jitter, abort signals) without being asked.',
    code: `type RetryOptions = {
  retries?: number
  baseDelayMs?: number
  maxDelayMs?: number
  signal?: AbortSignal
  shouldRetry?: (error: unknown, attempt: number) => boolean
}

export async function withRetry<T>(
  fn: () => Promise<T>,
  {
    retries = 3,
    baseDelayMs = 250,
    maxDelayMs = 10_000,
    signal,
    shouldRetry = () => true,
  }: RetryOptions = {},
): Promise<T> {
  let lastError: unknown
  for (let attempt = 0; attempt <= retries; attempt++) {
    signal?.throwIfAborted()
    try {
      return await fn()
    } catch (error) {
      lastError = error
      if (attempt === retries || !shouldRetry(error, attempt)) break
      // Exponential backoff with full jitter to avoid thundering herds
      const cap = Math.min(maxDelayMs, baseDelayMs * 2 ** attempt)
      const delay = Math.random() * cap
      await new Promise((r) => setTimeout(r, delay))
    }
  }
  throw lastError
}`,
  },
  {
    modelId: 'gpt-5-5',
    model: 'GPT-5.5',
    task: 'Debug: fix a race condition in a React data hook',
    language: 'typescript',
    note: 'Classic GPT-5.5: clean, correct, well-commented — the consistency pick.',
    code: `import { useEffect, useState } from 'react'

export function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Bug was here: stale responses from a previous userId
    // could resolve AFTER the latest one and overwrite state.
    const controller = new AbortController()

    fetchUser(userId, { signal: controller.signal })
      .then((data) => setUser(data))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err)
      })

    // Abort the in-flight request whenever userId changes
    // or the component unmounts — no stale writes possible.
    return () => controller.abort()
  }, [userId])

  return { user, error }
}`,
  },
  {
    modelId: 'gemini-3-5-pro',
    model: 'Gemini 3.5 Pro',
    task: 'Large codebase: trace a config value across a monorepo',
    language: 'text',
    note: 'Where the 2M context shines: whole-repo reasoning in a single pass.',
    code: `Traced CACHE_TTL_SECONDS across 47 files in one pass:

1. Defined in packages/config/src/defaults.ts:12 (default: 3600)
2. Overridden by env var in apps/api/src/env.ts:34
3. Consumed by:
   - packages/cache/src/redis-cache.ts:89 (TTL for keys)
   - apps/api/src/middleware/cache.ts:23 (HTTP Cache-Control)
   - apps/worker/src/jobs/refresh.ts:56 (stale-check interval)

Inconsistency found: apps/worker reads the DEFAULT (3600)
directly, bypassing the env override. If CACHE_TTL_SECONDS
is set to 300 in prod, the worker still assumes 3600 and
will consider fresh entries stale for 55 minutes.

Fix: import getConfig() in refresh.ts instead of defaults.`,
  },
  {
    modelId: 'deepseek-v4-pro',
    model: 'DeepSeek V4 Pro',
    task: 'Code generation: paginated REST endpoint',
    language: 'typescript',
    note: 'The value pick: correct, idiomatic, ~57x cheaper output than Mythos 5.',
    code: `import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = Math.max(1, Number(searchParams.get('page')) || 1)
  const limit = Math.min(100, Number(searchParams.get('limit')) || 20)
  const offset = (page - 1) * limit

  const [items, [{ count }]] = await Promise.all([
    db.query(
      'SELECT id, name, created_at FROM products ORDER BY created_at DESC LIMIT $1 OFFSET $2',
      [limit, offset],
    ),
    db.query('SELECT COUNT(*)::int AS count FROM products'),
  ])

  return NextResponse.json({
    data: items,
    pagination: {
      page,
      limit,
      total: count,
      totalPages: Math.ceil(count / limit),
    },
  })
}`,
  },
  {
    modelId: 'glm-5-2',
    model: 'GLM-5.2',
    task: 'Agentic planning: implementation plan for a feature',
    language: 'markdown',
    note: 'Strong Terminal-Bench performer — structured plans that agents can execute.',
    code: `# Plan: Add rate limiting to public API

## Context (from repo scan, 312 files)
- Middleware chain: apps/api/src/middleware/index.ts
- Redis client already configured: lib/redis.ts
- No existing rate-limit logic found

## Steps
1. Add sliding-window limiter in lib/rate-limit.ts
   - Key: \`rl:\${ip}:\${route}\`, window 60s, max 100
2. Register middleware BEFORE auth (fail fast, cheap)
3. Return 429 with Retry-After header
4. Exempt /health and /webhooks/stripe (verified sig)
5. Add integration test: burst 101 requests, expect 429

## Risks
- Shared Redis: prefix keys to avoid cache collisions
- Behind proxy: read x-forwarded-for, validate format`,
  },
]

export const capabilityLabels: Record<keyof Model['capabilities'], string> = {
  codeGen: 'Code Generation',
  debugging: 'Debugging',
  refactoring: 'Refactoring',
  instructions: 'Instruction Following',
  largeCodebases: 'Large Codebases',
  agentic: 'Agentic Work',
}
