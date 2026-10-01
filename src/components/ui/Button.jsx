const variants = {
  primary:
    'inline-flex items-center justify-center rounded-control bg-brand-lime px-6 py-3 font-body text-label-md text-text-primary transition-colors hover:bg-brand-lime-strong',
  text:
    'inline-flex items-center justify-center font-body text-label-md text-text-primary transition-colors hover:text-brand-blue',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  type,
  children,
  ...props
}) {
  const classes = [variants[variant] ?? variants.primary, className]
    .filter(Boolean)
    .join(' ')

  return (
    <Component
      className={classes}
      type={Component === 'button' ? (type ?? 'button') : type}
      {...props}
    >
      {children}
    </Component>
  )
}
