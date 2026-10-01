import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { build } from 'vite'

const heroPath = fileURLToPath(new URL('./HeroSection.jsx', import.meta.url))
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderHeroSection() {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-hero-test-'),
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
          input: heroPath,
          preserveEntrySignatures: 'strict',
          output: {
            entryFileNames: 'hero-section.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: HeroSection } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'hero-section.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(React.createElement(HeroSection))
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
}

function pathToFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll('\\', '/')}`).href
}

test('renders the Figma hero copy and search control', async () => {
  const markup = await renderHeroSection()

  assert.match(markup, /aria-labelledby="hero-heading"/)
  assert.match(markup, /Get Access to Hundreds Courses Available/)
  assert.match(markup, /Unlock your creativity/)
  assert.match(markup, /role="search"/)
  assert.match(markup, /type="search"/)
  assert.match(markup, /Course, topic, creator/)
  assert.match(markup, />Search</)
})

test('uses localized visible Figma Hero assets and omits hidden asset group', async () => {
  const markup = await renderHeroSection()

  for (const asset of [
    'hero-asset-01',
    'hero-asset-02',
    'hero-asset-03',
    'hero-asset-04',
    'hero-asset-05',
    'hero-asset-06',
    'hero-asset-07',
    'hero-asset-08',
    'hero-asset-13',
    'hero-asset-14',
    'hero-asset-15',
    'hero-asset-16',
    'hero-asset-17',
  ]) {
    assert.match(markup, new RegExp(asset))
  }

  for (const hiddenAsset of [
    'hero-asset-09',
    'hero-asset-10',
    'hero-asset-11',
    'hero-asset-12',
  ]) {
    assert.doesNotMatch(markup, new RegExp(hiddenAsset))
  }
})

test('renders Figma hero visual invariants without the old ring implementation', async () => {
  const markup = await renderHeroSection()

  assert.match(markup, /xl:min-h-\[904px\]/)
  assert.match(markup, /md:pt-\[49px\]/)
  assert.match(markup, /\[background-size:120px_120px\]/)
  assert.match(markup, /opacity-\[0\.12\]/)
  assert.match(markup, /data-figma-node="1:1866"/)
  assert.match(markup, /bg-brand-lime-strong/)
  assert.doesNotMatch(markup, /border-\[320px\]/)
  assert.match(markup, /xl:left-\[431px\]/)
  assert.match(markup, /xl:top-\[392px\]/)
  assert.match(markup, /xl:w-\[578px\]/)
  assert.match(markup, /xl:left-\[842px\]/)
  assert.match(markup, /xl:top-\[531px\]/)
  assert.match(markup, /saturate\(7\) hue-rotate\(32deg\)/)
  assert.doesNotMatch(markup, /saturate\(12\) hue-rotate\(18deg\)/)
})
