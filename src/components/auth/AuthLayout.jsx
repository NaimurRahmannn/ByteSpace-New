import { Link } from 'react-router-dom'

function ByteSpaceLimeMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-auto text-brand-lime"
      fill="none"
      height="32"
      viewBox="0 0 29 32"
      width="29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5479 10.5479C10.5479 4.72245 5.82544 0 0 0V21.0958C0 26.9212 4.72245 31.6437 10.5479 31.6437V10.5479Z"
        fill="#D4FB20"
      />
      <path
        d="M18.4588 10.5479C24.2842 10.5479 29.0067 15.2703 29.0067 21.0958H21.0958C15.2703 21.0958 10.5479 16.3733 10.5479 10.5479L18.4588 10.5479Z"
        fill="#D4FB20"
      />
      <path
        d="M18.4588 31.6437C24.2842 31.6437 29.0067 26.9212 29.0067 21.0958H21.0958C15.2703 21.0958 10.5479 25.8182 10.5479 31.6437L18.4588 31.6437Z"
        fill="#D4FB20"
      />
    </svg>
  )
}

export default function AuthLayout({ showcase, children }) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-brand-blue">
      {/* 120px Background Blueprint Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,1)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,1)_2px,transparent_2px)] [background-size:120px_120px]"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-content flex-col justify-between px-5 py-6 sm:px-8 md:py-8 xl:px-0 xl:py-[35px]">
        {/* Top Header Row with Lime Brand Mark */}
        <header className="flex items-center">
          <Link
            aria-label="ByteSpace home"
            className="inline-flex items-center transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-brand-lime"
            to="/"
          >
            <ByteSpaceLimeMark />
          </Link>
        </header>

        {/* Main Content: Two Columns on Desktop */}
        <main className="my-auto flex flex-col items-center justify-between gap-10 py-6 lg:flex-row lg:items-start lg:gap-12 xl:gap-[73px] xl:py-10">
          {/* Left Column: Showcase Artwork (Hidden on small mobile, visible on lg+) */}
          <div className="hidden w-full lg:block lg:max-w-[548px]">
            {showcase}
          </div>

          {/* Right Column: White Auth Panel (579x784px on desktop) */}
          <div className="w-full max-w-[579px] rounded-[24px] bg-white p-6 shadow-2xl sm:p-10 lg:min-h-[784px] lg:p-[61px_63px]">
            {children}
          </div>
        </main>

        {/* Subtle footer credit / copyright */}
        <footer className="py-2 text-center text-xs text-white/50">
          © 2023 ByteSpace. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
