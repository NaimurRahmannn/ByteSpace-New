import { useId, useState } from 'react'
import Button from './Button.jsx'

export default function NewsletterForm({
  placeholder = 'Enter your email',
  buttonLabel = 'Search',
  consentText = 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.',
  onSubmit,
}) {
  const [email, setEmail] = useState('')
  const inputId = useId()

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit?.(email)
  }

  return (
    <div className="w-full max-w-[504px]" data-figma-node="34:1265">
      <form
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
        data-figma-node="34:1266"
        onSubmit={handleSubmit}
      >
        <label className="sr-only" htmlFor={inputId}>
          Email address
        </label>
        <input
          className="h-[52px] w-full min-w-0 flex-1 rounded-pill border border-border bg-white px-6 font-body text-body-md text-text-primary placeholder:text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue sm:w-[376px] sm:flex-initial"
          data-figma-node="34:1267"
          id={inputId}
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder={placeholder}
          required
          type="email"
          value={email}
        />
        <Button
          className="h-[46px] w-full shrink-0 px-0 text-label-md sm:w-[104px]"
          data-figma-node="34:1269"
          type="submit"
        >
          {buttonLabel}
        </Button>
      </form>
      {consentText ? (
        <p
          className="mt-6 font-body text-[12px] leading-[19.2px] text-text-primary"
          data-figma-node="34:1271"
        >
          {consentText}
        </p>
      ) : null}
    </div>
  )
}
