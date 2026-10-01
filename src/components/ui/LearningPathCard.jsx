export default function LearningPathCard({ icon, id, title }) {
  return (
    <li
      className="flex h-[167px] w-full flex-col items-center justify-center gap-3 rounded-[24px] border border-border bg-white transition-colors duration-200 xl:w-[167px]"
      data-learning-path-card={id || title.toLowerCase()}
    >
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-brand-lime p-3">
        <img
          alt=""
          aria-hidden="true"
          className="h-9 w-9 object-contain"
          height="36"
          src={icon}
          width="36"
        />
      </div>
      <span className="font-body text-[20px] font-medium leading-6 text-text-primary text-center">
        {title}
      </span>
    </li>
  )
}
