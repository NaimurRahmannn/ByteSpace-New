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
  new URL('./CourseDiscoverySection.jsx', import.meta.url),
)
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderCourseDiscoverySection() {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-course-discovery-test-'),
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
            entryFileNames: 'course-discovery-section.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: CourseDiscoverySection } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'course-discovery-section.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(
      React.createElement(CourseDiscoverySection),
    )
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
}

function pathToFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll('\\', '/')}`).href
}

test('renders the exact course discovery intro and six data-driven cards', async () => {
  const markup = await renderCourseDiscoverySection()

  assert.match(markup, /aria-labelledby="course-discovery-heading"/)
  assert.match(markup, /Discover Your Passion, Build Your Skills/)
  assert.match(markup, /At Bytespace Courses, we bring you closer to life-changing knowledge\./)
  assert.equal((markup.match(/data-course-card="true"/g) ?? []).length, 6)

  for (const asset of [
    'course-discovery-asset-01',
    'course-discovery-asset-05',
    'course-discovery-asset-06',
    'course-discovery-asset-07',
    'course-discovery-asset-08',
    'course-discovery-asset-09',
  ]) {
    assert.match(markup, new RegExp(asset))
  }
})

test('preserves the three explicit desktop category rows and selected Featured state', async () => {
  const markup = await renderCourseDiscoverySection()

  assert.match(markup, /data-category-layout="desktop-rows"/)
  assert.equal((markup.match(/data-category-row="/g) ?? []).length, 3)
  assert.match(markup, /data-category-row="1"[^>]*>.*Featured.*Music.*Drawing &amp; Painting/s)
  assert.match(markup, /data-category-row="2"[^>]*>.*Digital Illustration.*Film &amp; Video.*Photography/s)
  assert.match(markup, /data-category-row="3"[^>]*>.*Productivity.*Web Development.*Cooking.*\+ More/s)
  assert.match(markup, /data-selected="true"[^>]*>Featured</)
})
