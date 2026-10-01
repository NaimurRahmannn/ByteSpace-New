import { useId, useState } from 'react'
import Button from '../ui/Button.jsx'

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Creators', href: '#creators' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="bg-white" id="home">
      <div className="mx-auto flex min-h-20 max-w-content items-center justify-between px-5 py-4 md:min-h-[120px] md:px-8 xl:px-0">
        <a
          href="#home"
          className="font-heading text-heading-sm text-text-primary"
          aria-label="ByteSpace home"
          onClick={closeMenu}
        >
          ByteSpace
        </a>

        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-10">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="font-body text-label-md text-text-primary transition-colors hover:text-brand-blue"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-7 md:flex">
          <Button as="a" href="#signin" variant="text">
            Sign In
          </Button>
          <Button as="a" href="#join">
            Join Us
          </Button>
        </div>

        <button
          className="hidden h-11 w-11 items-center justify-center rounded-control border border-border text-text-primary max-md:flex"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-controls={menuId}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="sr-only">
            {isMenuOpen ? 'Close menu' : 'Open menu'}
          </span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-full rounded-pill bg-current" />
            <span className="h-0.5 w-full rounded-pill bg-current" />
            <span className="h-0.5 w-full rounded-pill bg-current" />
          </span>
        </button>
      </div>

      <nav
        id={menuId}
        className={`${isMenuOpen ? 'block' : 'hidden'} border-y border-border bg-white px-5 py-5 md:hidden`}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-4">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                className="block font-body text-label-md text-text-primary"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-4">
          <Button
            as="a"
            href="#signin"
            variant="text"
            className="justify-start"
            onClick={closeMenu}
          >
            Sign In
          </Button>
          <Button as="a" href="#join" onClick={closeMenu}>
            Join Us
          </Button>
        </div>
      </nav>
    </header>
  )
}
