import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { build } from 'vite'

const cardPath = fileURLToPath(new URL('./CourseCard.jsx', import.meta.url))
const projectRoot = fileURLToPath(new URL('../../../', import.meta.url))

async function renderFirstCourseCard(overrides = {}) {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-course-card-test-'),
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
            entryFileNames: 'course-card.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { default: CourseCard } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'course-card.mjs'))}?test=${Date.now()}`
    )

    return renderToStaticMarkup(
      React.createElement(CourseCard, {
        avatars: [
          '/assets/hero-asset-03.png',
          '/assets/course-discovery-asset-02.png',
          '/assets/course-discovery-asset-03.png',
          '/assets/course-discovery-asset-04.png',
        ],
        comments: '59 Comments',
        creator: 'by purepearl studio',
        duration: '2 hours 16 mins',
        image: '/assets/course-discovery-asset-01.jpg',
        imageAlt: 'Learn Figma from Basic course thumbnail',
        lessonCount: '17 Lessons',
        level: 'Beginner',
        price: '$25',
        priceSuffix: '/lifetime',
        rating: '4.5',
        students: '26+',
        title: 'Learn Figma from Basic',
        ...overrides,
      }),
    )
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
}

function pathToFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll('\\', '/')}`).href
}

test('renders only visible Figma course-card metadata and meaningful image alt text', async () => {
  const markup = await renderFirstCourseCard()

  for (const value of [
    'Learn Figma from Basic',
    'by purepearl studio',
    '17 Lessons',
    '2 hours 16 mins',
    '59 Comments',
    'Beginner',
    '$25',
    '/lifetime',
    '4.5',
    '26+',
  ]) {
    assert.match(markup, new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }

  assert.match(markup, /alt="Learn Figma from Basic course thumbnail"/)
})

test('uses the verified Figma signal and star vector geometry', async () => {
  const markup = await renderFirstCourseCard()

  assert.match(
    markup,
    /M10 0L12\.5 0L12\.5 13\.3333L10 13\.3333L10 0ZM0 8\.33333L2\.5 8\.33333L2\.5 13\.3333L0 13\.3333L0 8\.33333ZM5 4\.16667L7\.5 4\.16667L7\.5 13\.3333L5 13\.3333L5 4\.16667Z/,
  )
  assert.match(
    markup,
    /M10\.3096 5\.5525L8\.8396 0\.7125C8\.5496 -0\.2375 7\.2096 -0\.2375 6\.9296 0\.7125L5\.4496 5\.5525L0\.999597 5\.5525C0\.0295973 5\.5525 -0\.370403 6\.8025 0\.419597 7\.3625L4\.0596 9\.9625L2\.6296 14\.5725C2\.3396 15\.5025 3\.4196 16\.2525 4\.1896 15\.6625L7\.8796 12\.8625L11\.5696 15\.6725C12\.3396 16\.2625 13\.4196 15\.5125 13\.1296 14\.5825L11\.6996 9\.9725L15\.3396 7\.3725C16\.1296 6\.8025 15\.7296 5\.5625 14\.7596 5\.5625L10\.3096 5\.5625L10\.3096 5\.5525Z/,
  )
})

test('centers the rating star and preserves the Figma rating dimensions', async () => {
  const markup = await renderFirstCourseCard()

  assert.match(
    markup,
    /grid-cols-\[minmax\(0,1fr\)_51px\][^"]*" data-card-content="true"/,
  )
  assert.match(
    markup,
    /class="[^"]*h-7[^"]*w-\[51px\][^"]*items-center[^"]*font-medium[^"]*leading-7/,
  )
  assert.match(markup, /transform="translate\(2 2\) scale\(1\.25\)"/)
})

test('reserves rating space and lets wrapped titles grow before the level row', async () => {
  const markup = await renderFirstCourseCard({
    title: 'Balancing Productivity and Self-Care',
  })

  assert.match(
    markup,
    /class="[^"]*grid[^"]*grid-cols-\[minmax\(0,1fr\)_51px\][^"]*" data-card-content="true"/,
  )
  assert.match(
    markup,
    /class="[^"]*h-auto[^"]*min-h-\[43px\][^"]*" data-card-title-group="true"/,
  )
  assert.match(markup, /data-card-rating="true"/)

  const titleIndex = markup.indexOf('Balancing Productivity and Self-Care')
  const creatorIndex = markup.indexOf('by purepearl studio')
  const levelIndex = markup.indexOf('Beginner')

  assert.ok(titleIndex < creatorIndex)
  assert.ok(creatorIndex < levelIndex)
})
