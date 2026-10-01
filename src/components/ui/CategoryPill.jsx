export default function CategoryPill({ label, more = false, selected = false }) {
  return (
    <span
      className={[
        'inline-flex min-h-[43px] items-center justify-center whitespace-nowrap rounded-pill px-4 py-3 font-body text-label-md',
        selected
          ? 'bg-brand-lime text-text-primary'
          : more
            ? 'bg-surface-light text-brand-blue'
            : 'bg-surface-light text-[#4b4c53]',
      ].join(' ')}
      data-selected={selected ? 'true' : undefined}
    >
      {label}
    </span>
  )
}
