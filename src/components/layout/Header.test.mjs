import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { build } from 'vite'

const headerPath = fileURLToPath(new URL('./Header.jsx', import.meta.url))
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderHeader() {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-header-test-'),
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
          input: headerPath,
          preserveEntrySignatures: 'strict',
          output: {
            entryFileNames: 'header.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: Header } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'header.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(React.createElement(Header))
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
}

function pathToFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll('\\', '/')}`).href
}

test('renders the desktop header on the Figma blue surface with the exported logo', async () => {
  const markup = await renderHeader()

  assert.match(markup, /<header[^>]*class="[^"]*bg-brand-blue/)
  assert.match(markup, /<header[^>]*class="[^"]*text-surface-light/)
  assert.match(markup, /<img[^>]*alt="ByteSpace"/)
  assert.match(markup, /bytespace-logo/)
  assert.match(markup, /<img[^>]*width="171"/)
  assert.match(markup, /<img[^>]*height="35"/)
  assert.doesNotMatch(markup, />ByteSpace<\/a>/)
})

test('renders Figma desktop navigation spacing and active Home treatment', async () => {
  const markup = await renderHeader()

  assert.match(markup, /aria-label="Primary navigation"/)
  assert.match(markup, /<ul[^>]*class="[^"]*gap-6/)
  assert.match(markup, /class="[^"]*font-medium[^"]*" href="#home"/)
  assert.match(markup, /class="[^"]*font-normal[^"]*" href="#courses"/)
  assert.match(markup, /class="[^"]*font-normal[^"]*" href="#creators"/)
  assert.doesNotMatch(markup, /gap-10/)
})

test('renders Figma right actions as text links with the exact outlined bag icon', async () => {
  const markup = await renderHeader()
  const bagPath =
    'M14 4L12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4L2 4C0.9 4 0 4.9 0 6L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4L6 4C6 2.9 6.9 2 8 2ZM14 18L2 18L2 6L4 6L4 8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8L6 6L10 6L10 8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8L12 6L14 6L14 18Z'

  assert.match(markup, />Sign In</)
  assert.match(markup, />Join Us</)
  assert.match(markup, /viewBox="0 0 24 24"/)
  assert.match(markup, new RegExp(bagPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  assert.doesNotMatch(markup, /bg-brand-lime/)
})
