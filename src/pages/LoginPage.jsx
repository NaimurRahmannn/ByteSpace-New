import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout.jsx'
import AuthShowcase from '../components/auth/AuthShowcase.jsx'
import Button from '../components/ui/Button.jsx'
import FormField from '../components/ui/FormField.jsx'

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 text-black"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8 text-black"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12.24 10.285V13.8h6.887C18.2 16.14 15.65 17.8 12.24 17.8c-3.37 0-6.1-2.73-6.1-6.1s2.73-6.1 6.1-6.1c1.54 0 2.94.57 4.03 1.51l2.58-2.58C17.29 2.97 14.92 2.1 12.24 2.1 6.64 2.1 2.1 6.64 2.1 12.24s4.54 10.14 10.14 10.14c5.85 0 9.72-4.11 9.72-9.9 0-.67-.06-1.32-.19-1.94l-9.53-.255z" />
    </svg>
  )
}

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <AuthLayout
      showcase={
        <AuthShowcase
          description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
          heading="Sign in with ease"
        />
      }
    >
      <div className="mx-auto flex h-full max-w-[453px] flex-col justify-between">
        {/* Header: Eyebrow + Heading */}
        <div>
          <p className="font-body text-base font-normal text-brand-blue sm:text-lg">
            Sign In
          </p>
          <h1 className="mt-1 font-heading text-3xl font-semibold leading-tight text-text-primary sm:text-4xl lg:text-[44px]">
            Welcome Back
          </h1>

          {/* Form */}
          <form className="mt-8 flex flex-col gap-6" onSubmit={handleSubmit}>
            <FormField
              autoComplete="email"
              label="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="designer@example.com"
              required
              type="email"
              value={email}
            />

            <FormField
              autoComplete="current-password"
              label="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
              type="password"
              value={password}
            />

            <div className="flex justify-end pt-1">
              <Button
                className="h-[46px] w-[104px] px-0 text-label-md"
                type="submit"
              >
                Sign In
              </Button>
            </div>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-[#D1D1D1]" />
            <span className="font-body text-base text-[#888888]">or</span>
            <div className="h-[1px] flex-1 bg-[#D1D1D1]" />
          </div>

          {/* Social Logins */}
          <div className="flex items-center justify-center gap-4">
            <button
              aria-label="Continue with Facebook"
              className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] bg-white transition-colors hover:bg-surface-light focus-visible:outline-2 focus-visible:outline-brand-blue"
              type="button"
            >
              <FacebookIcon />
            </button>
            <button
              aria-label="Continue with Google"
              className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] bg-white transition-colors hover:bg-surface-light focus-visible:outline-2 focus-visible:outline-brand-blue"
              type="button"
            >
              <GoogleIcon />
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8 flex items-center justify-center gap-1.5 text-center font-body text-sm sm:text-base">
          <span className="text-[#888888]">New user?</span>
          <Link
            className="font-normal text-brand-blue transition-colors hover:underline focus-visible:outline-brand-blue"
            to="/register"
          >
            Create an account
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
