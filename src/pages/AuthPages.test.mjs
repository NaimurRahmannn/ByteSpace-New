import assert from 'node:assert/strict'
import { mkdtemp, rm } from 'node:fs/promises'
import path from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

import react from '@vitejs/plugin-react'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { build } from 'vite'

const loginPath = fileURLToPath(new URL('./LoginPage.jsx', import.meta.url))
const registerPath = fileURLToPath(new URL('./RegisterPage.jsx', import.meta.url))
const appPath = fileURLToPath(new URL('../App.jsx', import.meta.url))
const projectRoot = fileURLToPath(new URL('../../', import.meta.url))

async function compileAndImport(entryPath, outputName) {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-auth-test-'),
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
          input: entryPath,
          preserveEntrySignatures: 'strict',
          output: {
            entryFileNames: outputName,
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const module = await import(
      `${pathToFileUrl(path.join(outputDirectory, outputName))}?test=${Date.now()}`
    )
    return module.default
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
}

function pathToFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll('\\', '/')}`).href
}

test('renders LoginPage with exact eyebrow, heading, form fields, social buttons, and register link', async () => {
  const LoginPage = await compileAndImport(loginPath, 'login-page.mjs')
  const markup = renderToStaticMarkup(
    React.createElement(MemoryRouter, { initialEntries: ['/login'] }, React.createElement(LoginPage)),
  )

  // Eyebrow and heading
  assert.match(markup, /Sign In/)
  assert.match(markup, /Welcome Back/)

  // Inputs
  assert.match(markup, /type="email"/)
  assert.match(markup, /placeholder="designer@example\.com"/)
  assert.match(markup, /type="password"/)
  assert.match(markup, /placeholder="\*\*\*\*\*\*\*\*"/)

  // Sign In action button
  assert.match(markup, /<button[^>]*type="submit"[^>]*>[\s\S]*?Sign In[\s\S]*?<\/button>/)

  // Divider
  assert.match(markup, />or</)

  // Social login buttons
  assert.match(markup, /aria-label="Continue with Facebook"/)
  assert.match(markup, /aria-label="Continue with Google"/)

  // Link to registration
  assert.match(markup, /New user\?/)
  assert.match(markup, /href="\/register"/)
  assert.match(markup, /Create an account/)

  // Left showcase content
  assert.match(markup, /Sign in with ease/)
  assert.match(markup, /the Power of Big Data/)
  assert.match(markup, /Happy Students/)
})

test('renders RegisterPage with exact eyebrow, heading, fields, Continue button, and login link', async () => {
  const RegisterPage = await compileAndImport(registerPath, 'register-page.mjs')
  const markup = renderToStaticMarkup(
    React.createElement(MemoryRouter, { initialEntries: ['/register'] }, React.createElement(RegisterPage)),
  )

  // Eyebrow and heading
  assert.match(markup, /Create an Account/)
  assert.match(markup, /Welcome to ByteSpace/)

  // Inputs
  assert.match(markup, /Full Name/)
  assert.match(markup, /placeholder="Jamie Davis"/)
  assert.match(markup, /Email/)
  assert.match(markup, /placeholder="designer@example\.com"/)
  assert.match(markup, /Password/)
  assert.match(markup, /placeholder="\*\*\*\*\*\*\*\*"/)

  // Continue action button
  assert.match(markup, /<button[^>]*type="submit"[^>]*>[\s\S]*?Continue[\s\S]*?<\/button>/)

  // Social login buttons must NOT render on register
  assert.doesNotMatch(markup, /Continue with Facebook/)
  assert.doesNotMatch(markup, /Continue with Google/)

  // Link to login
  assert.match(markup, /Already have an account\?/)
  assert.match(markup, /href="\/login"/)
  assert.match(markup, /Login/)

  // Left showcase content
  assert.match(markup, /Sign up and come in/)
  assert.match(markup, /the Power of Big Data/)
})

test('renders App routes cleanly on /, /login, and /register', async () => {
  const outputDirectory = await mkdtemp(
    path.join(projectRoot, '.tmp-auth-test-'),
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
          input: appPath,
          preserveEntrySignatures: 'strict',
          output: {
            entryFileNames: 'app-test.mjs',
            format: 'es',
          },
        },
        ssr: true,
      },
    })

    const { AppRoutes } = await import(
      `${pathToFileUrl(path.join(outputDirectory, 'app-test.mjs'))}?test=${Date.now()}`
    )

    // Route / -> HomePage
    const homeMarkup = renderToStaticMarkup(
      React.createElement(MemoryRouter, { initialEntries: ['/'] }, React.createElement(AppRoutes)),
    )
    assert.match(homeMarkup, /Get Access to Hundreds Courses Available/)

    // Route /login -> LoginPage
    const loginMarkup = renderToStaticMarkup(
      React.createElement(MemoryRouter, { initialEntries: ['/login'] }, React.createElement(AppRoutes)),
    )
    assert.match(loginMarkup, /Welcome Back/)

    // Route /register -> RegisterPage
    const registerMarkup = renderToStaticMarkup(
      React.createElement(MemoryRouter, { initialEntries: ['/register'] }, React.createElement(AppRoutes)),
    )
    assert.match(registerMarkup, /Welcome to ByteSpace/)
  } finally {
    await rm(outputDirectory, { recursive: true, force: true })
  }
})
