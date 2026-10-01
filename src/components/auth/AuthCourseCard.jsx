function SignalIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-[#4b4c53]"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 0L12.5 0L12.5 13.3333L10 13.3333L10 0ZM0 8.33333L2.5 8.33333L2.5 13.3333L0 13.3333L0 8.33333ZM5 4.16667L7.5 4.16667L7.5 13.3333L5 13.3333L5 4.16667Z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-[#CBFC01]"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M10.3096 5.5525L8.8396 0.7125C8.5496 -0.2375 7.2096 -0.2375 6.9296 0.7125L5.4496 5.5525L0.999597 5.5525C0.0295973 5.5525 -0.370403 6.8025 0.419597 7.3625L4.0596 9.9625L2.6296 14.5725C2.3396 15.5025 3.4196 16.2525 4.1896 15.6625L7.8796 12.8625L11.5696 15.6725C12.3396 16.2625 13.4196 15.5125 13.1296 14.5825L11.6996 9.9725L15.3396 7.3725C16.1296 6.8025 15.7296 5.5625 14.7596 5.5625L10.3096 5.5625L10.3096 5.5525Z"
        transform="translate(2 2) scale(1.1)"
      />
    </svg>
  )
}

function Chip({ children }) {
  return (
    <span className="inline-flex h-[28px] items-center rounded-pill bg-[#E5E6E8]/80 px-2.5 font-body text-[11px] font-medium text-text-primary backdrop-blur-md">
      {children}
    </span>
  )
}

export default function AuthCourseCard({
  image,
  title,
  author = 'by purepearl studio',
  rating = '4.5',
  level = 'Beginner',
  avatars = [],
  students = '26+',
  price = '$25',
  period = '/lifetime',
  chips = [],
  className = '',
}) {
  return (
    <div
      className={`w-[340px] rounded-card bg-white p-4 shadow-xl sm:w-[373px] ${className}`}
    >
      {/* Media & chips */}
      <div className="relative h-[180px] w-full overflow-hidden rounded-xl sm:h-[195px]">
        <img
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          src={image}
        />
        {chips.length > 0 && (
          <div className="absolute inset-x-2.5 bottom-2.5 flex flex-wrap items-center gap-1.5">
            {chips.map((chip) => (
              <Chip key={chip}>{chip}</Chip>
            ))}
          </div>
        )}
      </div>

      {/* Course Info */}
      <div className="mt-3.5 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-heading text-lg font-semibold leading-tight text-text-primary">
            {title}
          </h3>
          <p className="mt-1 font-body text-xs text-text-secondary">{author}</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-body text-sm font-semibold text-text-primary">
            {rating}
          </span>
          <StarIcon />
        </div>
      </div>

      {/* Meta Row: Level & Avatars */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 rounded-pill bg-surface-light px-2.5 py-1">
          <SignalIcon />
          <span className="font-body text-xs font-medium text-text-primary">
            {level}
          </span>
        </div>

        {/* Avatars */}
        <div className="flex items-center">
          {avatars.map((av, index) => (
            <img
              alt=""
              aria-hidden="true"
              className="-mr-1.5 h-7 w-7 rounded-full object-cover"
              height="28"
              key={index}
              src={av}
              style={{ zIndex: avatars.length - index }}
              width="28"
            />
          ))}
          <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black font-body text-[10px] font-bold text-white">
            {students}
          </span>
        </div>
      </div>

      {/* Price Row */}
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-heading text-lg font-bold text-brand-blue">
          {price}
        </span>
        <span className="font-body text-xs text-text-secondary">{period}</span>
      </div>
    </div>
  )
}
