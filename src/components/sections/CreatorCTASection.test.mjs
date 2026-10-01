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
  new URL('./CreatorCTASection.jsx', import.meta.url),
)
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderCreatorCTASection() {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-creator-cta-test-'),
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
            entryFileNames: 'creator-cta-section.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: CreatorCTASection } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'creator-cta-section.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(
      React.createElement(CreatorCTASection),
    )
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
}

function pathToFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll('\\', '/')}`).href
}

test('renders exact CTA heading, description, and Join as Creator action', async () => {
  const markup = await renderCreatorCTASection()

  // Semantic section and heading
  assert.match(markup, /<section[^>]*id="creator-cta"/)
  assert.match(markup, /Unlock Your Potential as a Creator with ByteSpace/)

  // Exact description
  assert.match(
    markup,
    /Experience the collaboration of numerous creators and an expanding selection of courses\./,
  )
  assert.match(
    markup,
    /Register now and become a part of a community comprising over 10,000 local and international creators\./,
  )
  assert.match(
    markup,
    /Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library\./,
  )

  // Exact CTA action button
  assert.match(markup, /<button[^>]*type="button"[^>]*>.*Join as Creator.*<\/button>/s)
})

test('renders 120px grid, exact CTA-specific asset, and all 5 reused decorative ornaments', async () => {
  const markup = await renderCreatorCTASection()

  // 120px construction grid
  assert.match(markup, /data-figma-node="34:1315"/)

  // CTA-specific asset
  assert.match(markup, /creator-cta-asset-01/)

  // Reused localized ornament assets
  assert.match(markup, /hero-asset-13/)
  assert.match(markup, /hero-asset-14/)
  assert.match(markup, /hero-asset-15/)
  assert.match(markup, /hero-asset-16/)
  assert.match(markup, /hero-asset-17/)

  // Accessibility: decorative images are aria-hidden and have alt=""
  assert.match(markup, /aria-hidden="true"/)
})

test('does NOT leak future sections (Testimonials or Footer)', async () => {
  const markup = await renderCreatorCTASection()

  assert.doesNotMatch(markup, /Discover What Our Community Is Saying/)
  assert.doesNotMatch(markup, /Jane D\./)
  assert.doesNotMatch(markup, /Stay Ahead with verified updates/)
})
