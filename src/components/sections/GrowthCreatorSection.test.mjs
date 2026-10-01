import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { build } from 'vite'

const sectionPath = fileURLToPath(
  new URL('./GrowthCreatorSection.jsx', import.meta.url),
)
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderGrowthCreatorSection() {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-growth-creator-test-'),
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
          input: sectionPath,
          preserveEntrySignatures: 'strict',
          output: {
            entryFileNames: 'growth-creator-section.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: GrowthCreatorSection } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'growth-creator-section.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(
      React.createElement(GrowthCreatorSection),
    )
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
}

function pathToFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll('\\', '/')}`).href
}

test('renders exact headings, description copy, statistics, and benefits', async () => {
  const markup = await renderGrowthCreatorSection()

  // Headings
  assert.match(markup, /Your Path to Professional Growth Starts Here!/)
  assert.match(markup, /Create &amp; Manage Courses Easily\./)

  // Description copy
  assert.match(
    markup,
    /Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey\./,
  )
  assert.match(
    markup,
    /<strong class="font-bold text-black">ByteSpace<\/strong>\s*supports individuals or entities in the creation, publication, and administration of educational courses\./,
  )

  // Statistics
  assert.match(markup, /12K/)
  assert.match(markup, /Students/)
  assert.match(markup, /70\+/)
  assert.match(markup, /Courses/)
  assert.match(markup, /16/)
  assert.match(markup, /Creators/)

  // Benefits
  assert.match(markup, /Share Your Expertise/)
  assert.match(markup, /Monetize Your Passion/)
  assert.match(markup, /Flexibility and Autonomy/)
  assert.match(markup, /Build a Community/)
})

test('renders verified assets, revenue metrics, and social proof without CTA placeholders', async () => {
  const markup = await renderGrowthCreatorSection()

  // Key assets
  assert.match(markup, /growth-asset-01/)
  assert.match(markup, /hero-asset-01/)
  assert.match(markup, /hero-asset-14/)

  // First course card reuse
  assert.match(markup, /data-course-card="true"/)
  assert.match(markup, /Learn Figma from Basic/)

  // Progress card reuse
  assert.match(markup, /Learning Progress: 55%/)

  // Student social proof card reuse
  assert.match(markup, /Happy Students/)
  assert.match(markup, /2K\+/)

  // Revenue metrics
  assert.match(markup, /\$120\.29/)
  assert.match(markup, /\$1,200\.38/)
  assert.match(markup, /\+12\$/)

  // No Creator CTA leaked
  assert.doesNotMatch(markup, /Unlock Your Potential as a Creator/)
  assert.doesNotMatch(markup, /Join as Creator/)
})
