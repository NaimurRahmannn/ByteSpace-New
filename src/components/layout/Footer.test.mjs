import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { build } from 'vite'

const footerPath = fileURLToPath(new URL('./Footer.jsx', import.meta.url))
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderFooter() {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-footer-test-'),
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
          input: footerPath,
          preserveEntrySignatures: 'strict',
          output: {
            entryFileNames: 'footer.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: Footer } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'footer.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(React.createElement(Footer))
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
}

function pathToFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll('\\', '/')}`).href
}

test('renders semantic footer with ByteSpace logo, top divider, and exact newsletter form', async () => {
  const markup = await renderFooter()

  // Semantic footer
  assert.match(markup, /<footer[^>]*id="footer"/)
  assert.match(markup, /border-t/)

  // Logo with dark wordmark
  assert.match(markup, /bytespace-logo-footer.*\.svg/)
  assert.match(markup, /alt="ByteSpace"/)

  // Exact brand / newsletter description
  assert.match(
    markup,
    /Stay Up to date with our latest features and releases by joining our newsletter\./,
  )

  // Real form, email input, accessible label, exact placeholder
  assert.match(markup, /<form/)
  assert.match(markup, /<label[^>]*class="[^"]*sr-only[^"]*"/)
  assert.match(markup, /type="email"/)
  assert.match(markup, /placeholder="Enter your email"/)

  // Exact action button label from Figma ("Search")
  assert.match(markup, /<button[^>]*type="submit"[^>]*>[\s\S]*?Search[\s\S]*?<\/button>/)

  // Exact consent text
  assert.match(
    markup,
    /By subscribing, you agree to our Privacy Policy and consent to receive updates from our company\./,
  )
})

test('renders exact Browse and Platform navigation groups and items', async () => {
  const markup = await renderFooter()

  // Headings
  assert.match(markup, /Browse/)
  assert.match(markup, /Platform/)

  // Browse column 1
  assert.match(markup, /Featured Courses/)
  assert.match(markup, /Featured Categories/)
  assert.match(markup, /Business/)
  assert.match(markup, /IT/)
  assert.match(markup, /Design/)

  // Browse column 2 (continuation)
  assert.match(markup, /Development/)
  assert.match(markup, /Marketing/)
  assert.match(markup, /Photography/)
  assert.match(markup, /Finance/)
  assert.match(markup, /Sport/)

  // Platform items
  assert.match(markup, /Become a Creator/)
  assert.match(markup, /Affiliate Program/)
  assert.match(markup, /Contact/)
  assert.match(markup, /Help/)
  assert.match(markup, /About/)

  // Real internal anchor destinations for genuine targets
  assert.match(markup, /href="#courses"/)
  assert.match(markup, /href="#learning-paths"/)
  assert.match(markup, /href="#creator-cta"/)

  // No broken dummy routes or empty anchors
  assert.doesNotMatch(markup, /href="#"/)
  assert.doesNotMatch(markup, /href="\/privacy"/)
  assert.doesNotMatch(markup, /href="\/contact"/)
  assert.doesNotMatch(markup, /href="\/about"/)
})

test('renders exact copyright text and legal labels without fake routes', async () => {
  const markup = await renderFooter()

  // Exact Figma copyright string
  assert.match(markup, /@ 2023 ByteSpace\. All rights reserved\./)

  // Legal labels
  assert.match(markup, /Privacy Policy/)
  assert.match(markup, /Terms of Service/)
  assert.match(markup, /Cookies Settings/)
})
