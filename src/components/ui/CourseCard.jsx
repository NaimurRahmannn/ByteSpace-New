function SignalIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-[#4b4c53]"
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
      className="h-6 w-6 shrink-0 text-border"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M10.3096 5.5525L8.8396 0.7125C8.5496 -0.2375 7.2096 -0.2375 6.9296 0.7125L5.4496 5.5525L0.999597 5.5525C0.0295973 5.5525 -0.370403 6.8025 0.419597 7.3625L4.0596 9.9625L2.6296 14.5725C2.3396 15.5025 3.4196 16.2525 4.1896 15.6625L7.8796 12.8625L11.5696 15.6725C12.3396 16.2625 13.4196 15.5125 13.1296 14.5825L11.6996 9.9725L15.3396 7.3725C16.1296 6.8025 15.7296 5.5625 14.7596 5.5625L10.3096 5.5625L10.3096 5.5525Z"
        transform="translate(2 2) scale(1.25)"
      />
    </svg>
  )
}

function MediaBadge({ children }) {
  return (
    <span className="inline-flex h-[26px] items-center rounded-pill bg-[#f6f6f6]/60 px-3 py-[6px] font-body text-[0.75rem] font-medium leading-[0.9rem] text-[#4f4f4f] backdrop-blur-[8px]">
      {children}
    </span>
  )
}

function AvatarStack({ avatars, students }) {
  return (
    <div className="flex items-center">
      {avatars.map((avatar, index) => (
        <img
          alt=""
          aria-hidden="true"
          className="-mr-2 h-8 w-8 rounded-full object-cover"
          height="32"
          key={avatar}
          src={avatar}
          style={{ zIndex: avatars.length - index }}
          width="32"
        />
      ))}
      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand-lime font-body text-label-xs text-text-primary">
        {students}
      </span>
    </div>
  )
}

export default function CourseCard({
  avatars,
  comments,
  creator,
  duration,
  image,
  imageAlt,
  lessonCount,
  level,
  price,
  priceSuffix,
  rating,
  students,
  title,
}) {
  return (
    <article
      className="flex min-h-[384px] flex-col rounded-card border border-border bg-white p-4"
      data-course-card="true"
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-[12px]">
        <img
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          src={image}
        />
        <div className="absolute inset-x-[13px] bottom-[19px] flex items-center gap-3">
          <MediaBadge>{lessonCount}</MediaBadge>
          <MediaBadge>{duration}</MediaBadge>
          <MediaBadge>{comments}</MediaBadge>
        </div>
      </div>

      <div
        className="mt-5 grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_51px] items-start gap-4"
        data-card-content="true"
      >
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div
            className="flex h-auto min-h-[43px] flex-col"
            data-card-title-group="true"
          >
            <h3 className="font-heading text-[1.25rem] font-semibold leading-6 tracking-[-0.01em] text-black">
              {title}
            </h3>
            <p className="font-body text-[0.75rem] leading-[1.2rem] text-[#4f4f4f]">
              {creator}
            </p>
          </div>

          <div className="flex h-8 items-center gap-3">
            <span className="inline-flex h-8 items-center gap-1 rounded-pill bg-surface-light px-3 font-body text-[0.75rem] font-medium leading-[0.9rem] text-[#4b4c53]">
              <SignalIcon />
              {level}
            </span>
            <AvatarStack avatars={avatars} students={students} />
          </div>

          <div className="flex h-6 items-center">
            <span className="font-heading text-[1.25rem] font-semibold leading-6 tracking-[-0.01em] text-brand-blue">
              {price}
            </span>
            <span className="font-body text-[0.75rem] leading-[1.2rem] text-[#4f4f4f]">
              {priceSuffix}
            </span>
          </div>
        </div>

        <div
          className="flex h-7 w-[51px] shrink-0 items-center justify-self-end font-body text-label-lg font-medium leading-7 text-[#4f4f4f]"
          data-card-rating="true"
        >
          <span>{rating}</span>
          <StarIcon />
        </div>
      </div>
    </article>
  )
}
