import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { build } from 'vite'

const partnerPath = fileURLToPath(new URL('./PartnerSection.jsx', import.meta.url))
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderPartnerSection() {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-partner-test-'),
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
          input: partnerPath,
          preserveEntrySignatures: 'strict',
          output: {
            entryFileNames: 'partner-section.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: PartnerSection } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'partner-section.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(React.createElement(PartnerSection))
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
}

function pathToFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll('\\', '/')}`).href
}

test('renders the localized partner SVG inside a contained scrolling strip', async () => {
  const markup = await renderPartnerSection()

  assert.match(markup, /aria-label="Partner logos"/)
  assert.match(markup, /partner-logos/)
  assert.match(markup, /bg-surface-light/)
  assert.match(markup, /overflow-hidden/)
  assert.match(markup, /overflow-x-auto/)
  assert.match(markup, /w-\[1132px\]/)
  assert.match(markup, /alt=""/)
  assert.match(markup, /aria-hidden="true"/)
})
