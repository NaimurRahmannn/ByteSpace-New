import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../components/auth/AuthLayout.jsx'
import AuthShowcase from '../components/auth/AuthShowcase.jsx'
import Button from '../components/ui/Button.jsx'
import FormField from '../components/ui/FormField.jsx'

export default function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <AuthLayout
      showcase={
        <AuthShowcase
          description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
          heading="Sign up and come in"
        />
      }
    >
      <div className="mx-auto flex h-full max-w-[453px] flex-col justify-between">
        {/* Header: Eyebrow + Heading */}
        <div>
          <p className="font-body text-base font-normal text-brand-blue sm:text-lg">
            Create an Account
          </p>
          <h1 className="mt-1 max-w-[453px] font-heading text-3xl font-semibold leading-tight text-text-primary sm:text-4xl lg:text-[44px]">
            Welcome to ByteSpace
          </h1>

          {/* Form */}
          <form className="mt-8 flex flex-col gap-6" onSubmit={handleSubmit}>
            <FormField
              autoComplete="name"
              label="Full Name"
              name="name"
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Jamie Davis"
              required
              type="text"
              value={fullName}
            />

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
              autoComplete="new-password"
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
                className="h-[46px] w-[123px] px-0 text-label-md"
                type="submit"
              >
                Continue
              </Button>
            </div>
          </form>
        </div>

        {/* Footer Link */}
        <div className="mt-12 flex items-center justify-center gap-1.5 text-center font-body text-sm sm:text-base">
          <span className="text-[#4B4C53]">Already have an account?</span>
          <Link
            className="font-normal text-brand-blue transition-colors hover:underline focus-visible:outline-brand-blue"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </AuthLayout>
  )
}
