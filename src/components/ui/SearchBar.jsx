import Button from './Button.jsx'

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 shrink-0 text-text-secondary"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
    </svg>
  )
}

export default function SearchBar({
  placeholder,
  buttonLabel = 'Search',
  label = 'Search courses',
  onSubmit,
}) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit?.(event)
  }

  return (
    <form
      className="mx-auto flex w-full max-w-[581px] flex-col items-stretch gap-4 sm:flex-row sm:items-start"
      role="search"
      onSubmit={handleSubmit}
    >
      <label className="sr-only" htmlFor="hero-course-search">
        {label}
      </label>
      <div className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-control bg-white px-6 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-lime">
        <SearchIcon />
        <input
          className="min-w-0 flex-1 border-0 bg-transparent font-body text-body-lg text-text-primary outline-none placeholder:text-text-secondary"
          id="hero-course-search"
          name="q"
          placeholder={placeholder}
          type="search"
        />
      </div>
      <Button
        className="h-[46px] shrink-0 px-6 text-label-lg sm:mt-0 sm:w-[104px]"
        type="submit"
      >
        {buttonLabel}
      </Button>
    </form>
  )
}
