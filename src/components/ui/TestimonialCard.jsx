export default function TestimonialCard({
  avatar,
  name,
  role,
  quote,
}) {
  return (
    <article
      className="flex w-full flex-col rounded-card bg-white p-6"
      data-testid="testimonial-card"
    >
      <img
        alt={name}
        className="h-20 w-20 shrink-0 rounded-full object-cover"
        src={avatar}
      />

      <div className="mt-6 flex flex-col">
        <h3 className="font-heading text-xl font-semibold leading-tight tracking-[-0.01em] text-text-primary">
          {name}
        </h3>
        <p className="mt-1 font-body text-body-lg text-brand-blue">
          {role}
        </p>
      </div>

      <blockquote className="mt-6 font-body text-body-lg leading-[1.6] text-text-body">
        <p>{quote}</p>
      </blockquote>
    </article>
  )
}
