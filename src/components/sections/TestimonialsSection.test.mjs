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
  new URL('./TestimonialsSection.jsx', import.meta.url),
)
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderTestimonialsSection() {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-testimonials-test-'),
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
            entryFileNames: 'testimonials-section.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: TestimonialsSection } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'testimonials-section.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(
      React.createElement(TestimonialsSection),
    )
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
}

function pathToFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll('\\', '/')}`).href
}

test('renders exact intro heading, description, and decorative background washes', async () => {
  const markup = await renderTestimonialsSection()

  // Semantic section and heading
  assert.match(markup, /<section[^>]*id="testimonials"/)
  assert.match(markup, /Discover What Our Community Is Saying/)

  // Exact description
  assert.match(
    markup,
    /At ByteSpace, our vibrant community of learners and creators is at the heart of what we do\./,
  )
  assert.match(
    markup,
    /Hear directly from those who have experienced the transformative journey of learning and creating on our platform\./,
  )
  assert.match(
    markup,
    /Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators\./,
  )

  // Decorative washes
  assert.match(markup, /data-figma-node="34:1314"/)
  assert.match(markup, /data-figma-node="34:1311"/)
  assert.match(markup, /data-figma-node="34:1313"/)
})

test('renders exactly three data-driven testimonial cards with exact names, roles, quotes, and avatars', async () => {
  const markup = await renderTestimonialsSection()

  // Exactly three cards
  const cards = markup.match(/data-testid="testimonial-card"/g)
  assert.equal(cards?.length, 3)

  // Names
  assert.match(markup, /Sarah M\./)
  assert.match(markup, /James L\./)
  assert.match(markup, /Alex B\./)

  // Roles
  assert.match(markup, /Enthusiastic Learner/)
  assert.match(markup, /Lifelong Learner/)
  assert.match(markup, /Inspired Creator/)

  // Quotes
  assert.match(
    markup,
    /ByteSpace has transformed my approach to learning\. The diverse range of courses and the quality of content provided by creators have exceeded my expectations\./,
  )
  assert.match(
    markup,
    /I(&#x27;|&#39;|')ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available\./,
  )
  assert.match(
    markup,
    /As a creator, ByteSpace has been a game-changer for me\. The Course Editor is user-friendly, and the support from the community is incredible\./,
  )

  // Avatars
  assert.match(markup, /course-discovery-asset-03/)
  assert.match(markup, /testimonials-asset-01/)
  assert.match(markup, /testimonials-asset-02/)
})

test('does NOT leak future sections (Footer, newsletter, auth)', async () => {
  const markup = await renderTestimonialsSection()

  assert.doesNotMatch(markup, /Stay Ahead with verified updates/)
  assert.doesNotMatch(markup, /All Rights Reserved/)
  assert.doesNotMatch(markup, /Enter your email/)
})
