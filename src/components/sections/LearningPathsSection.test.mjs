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
  new URL('./LearningPathsSection.jsx', import.meta.url),
)
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderLearningPathsSection() {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-learning-paths-test-'),
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
            entryFileNames: 'learning-paths-section.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: LearningPathsSection } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'learning-paths-section.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(
      React.createElement(LearningPathsSection),
    )
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
}

function pathToFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll('\\', '/')}`).href
}

test('renders the exact learning paths intro and all six data-driven category cards', async () => {
  const markup = await renderLearningPathsSection()

  assert.match(markup, /aria-labelledby="learning-paths-heading"/)
  assert.match(markup, /Explore Diverse Learning Paths at Bytespace/)
  assert.match(
    markup,
    /At Bytespace, we believe in empowering individuals through knowledge\./,
  )
  assert.match(
    markup,
    /Our diverse range of courses spans various fields, ensuring there&#x27;s something for everyone\./,
  )

  // Exactly six cards render
  assert.equal(
    (markup.match(/data-learning-path-card="/g) ?? []).length,
    6,
  )

  // All six exact category labels render
  const categories = [
    'Design',
    'Development',
    'IT &amp; Software',
    'Business',
    'Marketing',
    'Photography',
  ]

  for (const category of categories) {
    assert.match(markup, new RegExp(category))
  }
})

test('renders semantic list structure with accessibility attributes', async () => {
  const markup = await renderLearningPathsSection()

  assert.match(markup, /<ul[^>]*aria-label="Learning paths"/)
  assert.equal((markup.match(/<li/g) ?? []).length, 6)
  assert.equal((markup.match(/aria-hidden="true"/g) ?? []).length, 6)
})
