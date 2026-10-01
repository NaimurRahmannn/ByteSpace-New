import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { build } from 'vite'

const cardPath = fileURLToPath(new URL('./LearningPathCard.jsx', import.meta.url))
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderLearningPathCard(props = {}) {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-learning-path-card-test-'),
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
            entryFileNames: 'learning-path-card.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: LearningPathCard } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'learning-path-card.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(
      React.createElement(LearningPathCard, {
        icon: '/src/assets/figma/vectors/learning-paths/design.svg',
        id: 'design',
        title: 'Design',
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

test('renders icon, visible category title, and assistive technology attributes', async () => {
  const markup = await renderLearningPathCard()

  assert.match(markup, /data-learning-path-card="design"/)
  assert.match(markup, /Design/)
  assert.match(markup, /src="\/src\/assets\/figma\/vectors\/learning-paths\/design\.svg"/)
  assert.match(markup, /alt=""/)
  assert.match(markup, /aria-hidden="true"/)
  assert.match(markup, /bg-brand-lime/)
  assert.match(markup, /rounded-\[24px\]/)
})

test('renders different learning path title and icon props cleanly', async () => {
  const markup = await renderLearningPathCard({
    icon: '/src/assets/figma/vectors/learning-paths/development.svg',
    id: 'development',
    title: 'Development',
  })

  assert.match(markup, /data-learning-path-card="development"/)
  assert.match(markup, /Development/)
  assert.match(markup, /development\.svg/)
})
