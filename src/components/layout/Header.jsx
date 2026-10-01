import { useId, useState } from 'react'
import bytespaceLogo from '../../assets/figma/vectors/bytespace-logo.svg'

const navigationItems = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Courses', href: '#courses', active: false },
  { label: 'Creators', href: '#creators', active: false },
]

const outlinedBagPath =
  'M14 4L12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4L2 4C0.9 4 0 4.9 0 6L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4L6 4C6 2.9 6.9 2 8 2ZM14 18L2 18L2 6L4 6L4 8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8L6 6L10 6L10 8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8L12 6L14 6L14 18Z'

function BagIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d={outlinedBagPath} transform="translate(4 2)" />
    </svg>
  )
}

function NavigationLinks({ onNavigate, mobile = false }) {
  return (
    <ul className={mobile ? 'flex flex-col gap-4' : 'flex items-center gap-6'}>
      {navigationItems.map((item) => (
        <li key={item.href}>
          <a
            className={
              mobile
                ? 'block font-body text-body-md text-surface-light transition-colors hover:text-brand-lime'
                : item.active
                  ? 'font-body text-label-md font-medium text-surface-light transition-colors hover:text-brand-lime'
                  : 'font-body text-[1rem] font-normal leading-[1.6] text-surface-light transition-colors hover:text-brand-lime'
            }
            href={item.href}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function AccountLinks({ onNavigate, mobile = false }) {
  return (
    <div
      className={
        mobile
          ? 'mt-6 flex flex-col gap-4'
          : 'hidden items-center justify-end gap-6 md:mt-[48px] md:flex'
      }
    >
      <a
        className="font-body text-body-md text-surface-light transition-colors hover:text-brand-lime"
        href="#signin"
        onClick={onNavigate}
      >
        Sign In
      </a>
      <a
        className="font-body text-body-md text-surface-light transition-colors hover:text-brand-lime"
        href="#join"
        onClick={onNavigate}
      >
        Join Us
      </a>
      {!mobile && (
        <a
          className="flex h-6 w-6 items-center justify-center text-surface-light transition-colors hover:text-brand-lime"
          href="#bag"
          aria-label="Open bag"
        >
          <BagIcon />
        </a>
      )}
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="bg-brand-blue text-surface-light" id="home">
      <div className="mx-auto flex min-h-20 max-w-content items-center justify-between px-5 py-4 md:grid md:h-[120px] md:min-h-[120px] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-start md:px-8 md:py-0 xl:px-0">
        <a
          href="#home"
          className="block max-w-[calc(100vw-100px)] md:mt-[35px]"
          aria-label="ByteSpace home"
          onClick={closeMenu}
        >
          <img
            src={bytespaceLogo}
            alt="ByteSpace"
            width="171"
            height="35"
            className="block h-[35px] w-[171px] max-w-full"
          />
        </a>

        <nav
          className="hidden md:mt-[47px] md:block"
          aria-label="Primary navigation"
        >
          <NavigationLinks />
        </nav>

        <AccountLinks />

        <button
          className="flex h-11 w-11 items-center justify-center rounded-control border border-surface-light/40 text-surface-light transition-colors hover:border-surface-light hover:bg-surface-light/10 md:hidden"
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
        className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-surface-light/20 bg-brand-blue px-5 py-5 md:hidden`}
        aria-label="Mobile navigation"
      >
        <NavigationLinks mobile onNavigate={closeMenu} />
        <AccountLinks mobile onNavigate={closeMenu} />
      </nav>
    </header>
  )
}
