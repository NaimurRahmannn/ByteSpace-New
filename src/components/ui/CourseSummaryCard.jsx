export default function CourseSummaryCard({ details, title }) {
  return (
    <article className="w-[208px] rounded-2xl bg-white p-4 text-text-primary backdrop-blur-[20px]">
      <p className="font-body text-label-md">{title}</p>
      <p className="mt-0 flex items-center gap-2 whitespace-nowrap font-body text-xs leading-[1.6] text-text-secondary">
        <span>{details[0]}</span>
        <span aria-hidden="true" className="text-[10px] leading-[1.5]">
          •
        </span>
        <span>{details[1]}</span>
      </p>
    </article>
  )
}
