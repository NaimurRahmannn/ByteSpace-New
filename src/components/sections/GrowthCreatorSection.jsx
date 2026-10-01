import heroPerson from '../../assets/figma/hero-asset-01.png'
import heroOrnamentWave from '../../assets/figma/hero-asset-14.png'
import creatorPerson from '../../assets/figma/growth-asset-01.png'
import { heroAssets, heroStats } from '../../data/hero.js'
import { courses } from '../../data/courses.js'
import { creatorContent, growthContent } from '../../data/growthCreator.js'
import CourseCard from '../ui/CourseCard.jsx'
import ProgressCard from '../ui/ProgressCard.jsx'
import RevenueMetricCard from '../ui/RevenueMetricCard.jsx'
import StudentSocialProofCard from '../ui/StudentSocialProofCard.jsx'

const limeTint =
  'saturate(0) sepia(1) saturate(8) hue-rotate(35deg) brightness(2.3) contrast(1.05)'

function GrowthBackgroundWashes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute left-[-152px] top-[-466px] h-[1137px] w-[1137px] rounded-full blur-[40px]"
        style={{
          background:
            'radial-gradient(circle, rgba(203, 252, 1, 0.40) 0%, rgba(203, 252, 1, 0.09) 53%, rgba(203, 252, 1, 0.02) 75%, transparent 100%)',
        }}
      />
      <div
        className="absolute left-[811px] top-[-458px] h-[1137px] w-[1137px] rounded-full blur-[40px]"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 59, 226, 0.08) 0%, rgba(0, 59, 226, 0.02) 53%, transparent 100%)',
        }}
      />
      <div
        className="absolute left-[-508px] top-[183px] h-[1137px] w-[1137px] rounded-full blur-[40px]"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 59, 226, 0.16) 0%, rgba(0, 59, 226, 0.04) 53%, transparent 100%)',
        }}
      />
      <div
        className="absolute left-[722px] top-[788px] h-[1137px] w-[1137px] rounded-full blur-[40px]"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 59, 226, 0.24) 0%, rgba(0, 59, 226, 0.06) 53%, transparent 100%)',
        }}
      />
      <div
        className="absolute left-[-287px] top-[946px] h-[672px] w-[672px] rounded-full blur-[40px]"
        style={{
          background:
            'radial-gradient(circle, rgba(203, 252, 1, 0.60) 0%, rgba(203, 252, 1, 0.14) 53%, transparent 100%)',
        }}
      />
    </div>
  )
}

function BenefitCheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 shrink-0 text-brand-blue"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
        transform="translate(2, 2)"
      />
    </svg>
  )
}

export default function GrowthCreatorSection() {
  return (
    <section
      aria-labelledby="growth-heading"
      className="relative isolate overflow-hidden bg-surface-subtle py-16 md:py-20 xl:h-[1460px] xl:py-[120px]"
      id="growth-creator"
    >
      <GrowthBackgroundWashes />

      <div className="relative z-10 mx-auto max-w-[1258px] px-5 xl:px-0">
        <div className="flex flex-col gap-16 md:gap-20 xl:gap-[72px]">
          {/* Feature Row 1: Professional Growth */}
          <div className="flex flex-col xl:h-[552px] xl:flex-row xl:items-center xl:gap-[63px]">
            {/* Copy & Stats */}
            <div className="flex flex-col justify-center xl:w-[574px]">
              <h2
                className="font-heading text-3xl font-semibold leading-tight tracking-[-0.01em] text-text-primary sm:text-4xl xl:text-heading-lg"
                id="growth-heading"
              >
                {growthContent.heading}
              </h2>
              <p className="mt-6 font-body text-body-lg text-[#4b4c53] xl:mt-10">
                {growthContent.description}
              </p>

              <div className="mt-8 flex items-center gap-8 sm:gap-14 xl:mt-10">
                {growthContent.stats.map((stat) => (
                  <div className="flex flex-col" key={stat.id}>
                    <span className="font-heading text-display-xs font-medium text-brand-blue">
                      {stat.value}
                    </span>
                    <span className="font-body text-body-lg text-[#4b4c53]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Overlapping Visual Composition */}
            <div className="relative mx-auto mt-10 h-[480px] w-full max-w-[500px] sm:h-[552px] sm:max-w-[621px] xl:mx-0 xl:mt-0 xl:h-[552px] xl:w-[621px]">
              {/* Course Card */}
              <div className="absolute left-0 top-0 z-10 hidden sm:block w-[373px]">
                <CourseCard {...courses[0]} />
              </div>

              {/* Guy holding laptop */}
              <img
                alt=""
                className="absolute bottom-0 left-1/2 z-20 h-auto w-[360px] -translate-x-1/2 object-contain sm:w-[480px] xl:bottom-auto xl:left-0 xl:top-3 xl:h-[540px] xl:w-[577px] xl:translate-x-0"
                src={heroPerson}
              />

              {/* Decorative Lime Ornament */}
              <img
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-[340px] top-10 z-40 hidden h-[180px] w-[180px] object-contain sm:block xl:left-[406px] xl:top-[67px] xl:h-[215px] xl:w-[215px]"
                src={heroOrnamentWave}
                style={{ filter: limeTint }}
              />

              {/* Progress Card */}
              <div className="absolute bottom-4 right-2 z-30 sm:bottom-12 sm:right-6 xl:bottom-auto xl:left-[345px] xl:top-[213px]">
                <ProgressCard
                  label="Learning Progress"
                  percent={55}
                  value="55%"
                />
              </div>
            </div>
          </div>

          {/* Feature Row 2: Creator Management */}
          <div className="flex flex-col xl:h-[596px] xl:flex-row xl:items-center xl:gap-[79px]">
            {/* Visual Composition on LEFT at desktop */}
            <div className="order-last relative mx-auto mt-10 h-[520px] w-full max-w-[480px] sm:h-[596px] sm:max-w-[541px] xl:order-first xl:mx-0 xl:mt-0 xl:h-[596px] xl:w-[541px]">
              {/* Creator Woman */}
              <img
                alt="Course creator holding a tablet"
                className="absolute bottom-0 left-1/2 z-20 h-[480px] w-auto -translate-x-1/2 object-contain sm:h-[560px] xl:bottom-auto xl:left-7 xl:top-0 xl:h-[596px] xl:w-[435px] xl:translate-x-0"
                src={creatorPerson}
                style={{ filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.12))' }}
              />

              {/* Total Revenue Card */}
              <div className="absolute left-0 top-4 z-10 origin-top-left scale-90 sm:top-11 sm:scale-100">
                <RevenueMetricCard
                  {...creatorContent.revenueMetrics.totalRevenue}
                  variant="total"
                />
              </div>

              {/* Year to Date Card */}
              <div className="absolute left-0 top-36 z-10 origin-top-left scale-90 sm:top-[194px] sm:scale-100">
                <RevenueMetricCard
                  {...creatorContent.revenueMetrics.yearToDate}
                  variant="ytd"
                />
              </div>

              {/* Student Social Proof Card */}
              <div className="absolute bottom-2 right-0 z-30 origin-bottom-right scale-90 sm:bottom-6 sm:scale-100 xl:bottom-auto xl:left-[283px] xl:top-[413px]">
                <StudentSocialProofCard
                  {...heroStats.students}
                  avatars={heroAssets.avatars}
                />
              </div>

              {/* Decorative Lime Ornament */}
              <img
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-16 z-10 hidden h-[180px] w-[180px] object-contain sm:block xl:right-auto xl:left-[305px] xl:top-[114px] xl:h-[215px] xl:w-[215px]"
                src={heroOrnamentWave}
                style={{ filter: limeTint }}
              />
            </div>

            {/* Copy & Benefits on RIGHT at desktop */}
            <div className="flex flex-col justify-center xl:w-[580px]">
              <h2
                className="max-w-[391px] font-heading text-3xl font-semibold leading-tight tracking-[-0.01em] text-text-primary sm:text-4xl xl:text-heading-lg"
                id="creator-heading"
              >
                {creatorContent.heading}
              </h2>
              <p className="mt-6 font-body text-body-lg text-[#4b4c53] xl:mt-10">
                <strong className="font-bold text-black">ByteSpace</strong>{' '}
                {creatorContent.description.replace(/^ByteSpace\s*/, '')}
              </p>

              <ul
                aria-label="Creator benefits"
                className="mt-8 space-y-4 xl:mt-10"
              >
                {creatorContent.benefits.map((benefit) => (
                  <li
                    className="flex items-center gap-2 font-body text-[18px] font-medium text-text-primary"
                    key={benefit}
                  >
                    <BenefitCheckIcon />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
