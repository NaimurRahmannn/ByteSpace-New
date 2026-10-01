export default function RevenueMetricCard({
  amount,
  change,
  period,
  progressPercent,
  title,
  variant = 'total',
}) {
  const isTotal = variant === 'total'

  return (
    <article
      aria-label={`${title}: ${amount}`}
      className={`rounded-2xl bg-brand-blue p-4 text-white shadow-elevation-a ${
        isTotal ? 'w-[232px] h-[119px]' : 'w-[134px] h-[135px]'
      }`}
      data-metric-card={variant}
    >
      <div>
        <p className="font-body text-base font-medium leading-tight text-[#f5f5f6]">
          {title}
        </p>
        <p className="font-body text-[10px] leading-3 text-[#f5f5f6]">
          {period}
        </p>
      </div>

      {isTotal ? (
        <>
          <div className="mt-1 flex items-center gap-2">
            <span className="font-heading text-2xl font-semibold leading-8 text-[#f5f5f6]">
              {amount}
            </span>
            <span className="rounded-full bg-brand-lime-strong px-2 py-0.5 font-body text-[10px] font-medium text-text-primary">
              {change}
            </span>
          </div>

          <div
            aria-hidden="true"
            className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white"
          >
            <div
              className="h-full rounded-full bg-brand-lime"
              style={{ width: `${progressPercent ?? 56}%` }}
            />
          </div>
        </>
      ) : (
        <div className="mt-1 flex flex-col gap-1.5">
          <p className="font-heading text-2xl font-semibold leading-8 text-[#f5f5f6]">
            {amount}
          </p>
          <div>
            <span className="inline-block rounded-full bg-brand-lime-strong px-2 py-0.5 font-body text-[10px] font-medium text-text-primary">
              {change}
            </span>
          </div>
        </div>
      )}
    </article>
  )
}
