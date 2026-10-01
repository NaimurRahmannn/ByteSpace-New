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
  new URL('./TestimonialCard.jsx', import.meta.url),
)
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderTestimonialCard(props = {}) {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-testimonial-card-test-'),
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
            entryFileNames: 'testimonial-card.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: TestimonialCard } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'testimonial-card.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(
      React.createElement(TestimonialCard, {
        avatar: '/test-avatar.png',
        name: 'Sarah M.',
        role: 'Enthusiastic Learner',
        quote: '"ByteSpace has transformed my approach to learning."',
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

test('renders avatar, name, role, and blockquote quote cleanly', async () => {
  const markup = await renderTestimonialCard()

  // Semantic article
  assert.match(markup, /<article/)

  // Avatar
  assert.match(markup, /src="\/test-avatar\.png"/)
  assert.match(markup, /alt="Sarah M\."/)

  // Name and role
  assert.match(markup, /<h3[^>]*>Sarah M\.<\/h3>/)
  assert.match(markup, /Enthusiastic Learner/)
  assert.match(markup, /text-brand-blue/)

  // Blockquote quote
  assert.match(markup, /<blockquote/)
  assert.match(markup, /ByteSpace has transformed my approach to learning\./)

  // Flat white styling without shadows
  assert.match(markup, /bg-white/)
  assert.match(markup, /rounded-card/)
  assert.doesNotMatch(markup, /shadow-/)
})
