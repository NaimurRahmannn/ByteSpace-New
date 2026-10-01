export default function ProgressCard({ label, value, percent }) {
  return (
    <article
      aria-label={`${label}: ${value}`}
      className="w-[232px] rounded-2xl bg-white p-4 text-text-primary backdrop-blur-[20px]"
    >
      <p className="font-body text-label-sm">{label}</p>
      <p className="mt-2 font-heading text-[3rem] font-semibold leading-[1.2] tracking-[-0.01em]">
        {value}
      </p>
      <div
        aria-valuemax="100"
        aria-valuemin="0"
        aria-valuenow={percent}
        className="mt-2 h-2 rounded-control bg-[#f6f6f6]"
        role="progressbar"
      >
        <div
          className="h-full rounded-control bg-brand-lime"
          style={{ width: `${percent}%` }}
        />
      </div>
    </article>
  )
}
