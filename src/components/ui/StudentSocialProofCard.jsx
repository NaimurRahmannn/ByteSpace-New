export default function StudentSocialProofCard({
  avatars,
  rating,
  title,
  totalLabel,
}) {
  return (
    <article className="w-[258px] rounded-2xl bg-white p-4 text-text-primary backdrop-blur-[20px]">
      <div>
        <p className="font-body text-label-md">{title}</p>
        <p className="font-body text-xs leading-[1.6] text-text-secondary">
          {rating} <span className="text-brand-lime-strong">★</span>
        </p>
      </div>

      <div className="mt-2 flex h-[43px] items-center">
        {avatars.map((avatar, index) => (
          <img
            alt=""
            aria-hidden="true"
            className="-mr-4 h-[43px] w-[43px] rounded-full object-cover"
            height="43"
            key={avatar}
            src={avatar}
            style={{ zIndex: avatars.length - index }}
            width="43"
          />
        ))}
        <div className="relative z-10 flex h-[43px] w-[43px] items-center justify-center rounded-full bg-brand-lime font-body text-xs font-bold leading-[1.5] text-text-primary">
          {totalLabel}
        </div>
      </div>
    </article>
  )
}
