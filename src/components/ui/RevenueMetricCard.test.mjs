import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { build } from 'vite'

const cardPath = fileURLToPath(
  new URL('./RevenueMetricCard.jsx', import.meta.url),
)
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderRevenueMetricCard(props = {}) {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-revenue-metric-test-'),
  )

  try {
    await build({
      configFile: false,
      logLevel: 'silent',
      root: projectRoot,
      plugins: [react()],
      build: {
        emptyOutDir: true,
        outDir: outputDirectory,
        rollupOptions: {
          input: cardPath,
          preserveEntrySignatures: 'strict',
          output: {
            entryFileNames: 'revenue-metric-card.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: RevenueMetricCard } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'revenue-metric-card.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(
      React.createElement(RevenueMetricCard, {
        amount: '$120.29',
        change: '+12$',
        period: 'July 1-28',
        progressPercent: 56,
        title: 'Total Revenue',
        variant: 'total',
        ...props,
      }),
    )
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
}

function pathToFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll('\\', '/')}`).href
}

test('renders Total Revenue card with progress indicator', async () => {
  const markup = await renderRevenueMetricCard()

  assert.match(markup, /data-metric-card="total"/)
  assert.match(markup, /Total Revenue/)
  assert.match(markup, /July 1-28/)
  assert.match(markup, /\$120\.29/)
  assert.match(markup, /\+12\$/)
  assert.match(markup, /width:56%/)
  assert.match(markup, /bg-brand-blue/)
})

test('renders Year to Date card variant without progress bar', async () => {
  const markup = await renderRevenueMetricCard({
    amount: '$1,200.38',
    change: '+12$',
    period: '2023',
    title: 'Year to Date',
    variant: 'ytd',
  })

  assert.match(markup, /data-metric-card="ytd"/)
  assert.match(markup, /Year to Date/)
  assert.match(markup, /2023/)
  assert.match(markup, /\$1,200\.38/)
  assert.match(markup, /\+12\$/)
  assert.doesNotMatch(markup, /width:56%/)
})
