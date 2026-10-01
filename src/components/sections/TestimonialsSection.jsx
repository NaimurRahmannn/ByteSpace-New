import { testimonialsContent } from '../../data/testimonials.js'
import TestimonialCard from '../ui/TestimonialCard.jsx'

function TestimonialBackgroundWashes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* 34:1314: Top-right lime radial wash */}
      <div
        className="absolute left-[842px] top-[-241px] h-[1137px] w-[1137px] rounded-full blur-[40px]"
        data-figma-node="34:1314"
        style={{
          background:
            'radial-gradient(circle, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, transparent 100%)',
        }}
      />
      {/* 34:1311: Top-center lime radial wash */}
      <div
        className="absolute left-[395px] top-[-138px] h-[672px] w-[672px] rounded-full blur-[40px]"
        data-figma-node="34:1311"
        style={{
          background:
            'radial-gradient(circle, rgba(203, 252, 1, 0.60) 0%, rgba(203, 252, 1, 0.14) 53%, rgba(203, 252, 1, 0.04) 75%, transparent 100%)',
        }}
      />
      {/* 34:1313: Bottom-left blue radial wash */}
      <div
        className="absolute left-[-442px] top-[149px] h-[1137px] w-[1137px] rounded-full blur-[40px]"
        data-figma-node="34:1313"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, rgba(0, 59, 226, 0.01) 75%, transparent 100%)',
        }}
      />
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate w-full overflow-hidden bg-surface-subtle py-16 md:py-20 xl:h-[784px] xl:py-[74px]"
      data-figma-node="34:1175"
      id="testimonials"
    >
      <TestimonialBackgroundWashes />

      <div
        className="relative z-10 mx-auto w-full max-w-[1204px] px-5 xl:px-0"
        data-figma-node="34:1176"
      >
        {/* Intro Row */}
        <div
          className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-[43px]"
          data-figma-node="34:1177"
        >
          <h2
            className="w-full font-heading text-3xl font-semibold leading-tight tracking-[-0.01em] text-text-primary sm:text-4xl lg:max-w-[577px] lg:text-[44px] lg:leading-[52.8px]"
            data-figma-node="34:1180"
            id="testimonials-heading"
          >
            {testimonialsContent.heading}
          </h2>

          <p
            className="w-full font-body text-base leading-relaxed text-[#4B4C53] sm:text-body-lg sm:leading-[1.6] lg:max-w-[580px]"
            data-figma-node="34:1181"
          >
            {testimonialsContent.description}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div
          className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px] xl:mt-[72px]"
          data-figma-node="34:1182"
        >
          {testimonialsContent.testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
