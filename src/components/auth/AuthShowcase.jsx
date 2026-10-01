import courseDiscovery04 from '../../assets/figma/course-discovery-asset-04.png'
import courseDiscovery05 from '../../assets/figma/course-discovery-asset-05.jpg'
import courseDiscovery06 from '../../assets/figma/course-discovery-asset-06.jpg'
import heroAsset02 from '../../assets/figma/hero-asset-02.png'
import heroAsset03 from '../../assets/figma/hero-asset-03.png'
import heroAsset04 from '../../assets/figma/hero-asset-04.png'
import heroAsset05 from '../../assets/figma/hero-asset-05.png'
import heroAsset06 from '../../assets/figma/hero-asset-06.png'
import heroAsset07 from '../../assets/figma/hero-asset-07.png'
import heroAsset08 from '../../assets/figma/hero-asset-08.png'
import heroSpringWave from '../../assets/figma/hero-asset-14.png'
import heroDonutLime from '../../assets/figma/hero-asset-15.png'
import heroPyramidLime from '../../assets/figma/hero-asset-17.png'
import AuthCourseCard from './AuthCourseCard.jsx'

const limeTint =
  'saturate(0) sepia(1) saturate(7) hue-rotate(32deg) brightness(1.03) contrast(1.02)'
const whiteTint = 'brightness(1.75) saturate(0) contrast(0.96)'

function BlueStarIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 text-brand-blue"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
    </svg>
  )
}

export default function AuthShowcase({ heading, description }) {
  const cardAvatars = [heroAsset03, courseDiscovery04, heroAsset04, heroAsset05]
  const happyStudentAvatars = [
    heroAsset02,
    heroAsset03,
    heroAsset04,
    heroAsset05,
    heroAsset06,
    heroAsset07,
    heroAsset08,
  ]

  return (
    <div className="flex flex-col justify-between py-6 lg:py-0">
      {/* Marketing Header Copy */}
      <div className="max-w-[475px]">
        <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl lg:text-[32px] lg:leading-[1.2]">
          {heading}
        </h2>
        <p className="mt-3 font-body text-sm leading-relaxed text-[#F5F5F6]/90 sm:text-base sm:leading-[1.6]">
          {description}
        </p>
      </div>

      {/* Decorative Visual Composition */}
      <div className="relative mt-10 h-[520px] w-full max-w-[548px] sm:mt-12 sm:h-[585px]">
        {/* Background Course Card (Offset left/down) */}
        <div className="absolute left-0 top-[89px] z-10 opacity-90 transition-transform">
          <AuthCourseCard
            avatars={cardAvatars}
            chips={['17 Lessons']}
            className="border border-white/20"
            image={courseDiscovery05}
            title="Build Digital Asset"
          />
        </div>

        {/* Foreground Main Course Card */}
        <div className="absolute left-[80px] top-0 z-20 transition-transform sm:left-[111px]">
          <AuthCourseCard
            avatars={cardAvatars}
            chips={['17 Lessons', '2 hours 16 mins', '59 Comments']}
            className="border border-white/30 shadow-2xl"
            image={courseDiscovery06}
            title="the Power of Big Data"
          />
        </div>

        {/* Floating 3D Lime Torus (Top Left of main card) */}
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[30px] top-[-25px] z-30 h-[100px] w-[100px] object-contain sm:left-[55px] sm:top-[-20px] sm:h-[120px] sm:w-[120px]"
          src={heroDonutLime}
          style={{ filter: limeTint }}
        />

        {/* Floating 3D Lime Pyramid (Bottom Left) */}
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-20px] bottom-[10px] z-30 h-[120px] w-[120px] object-contain sm:left-[-10px] sm:bottom-[30px] sm:h-[150px] sm:w-[150px]"
          src={heroPyramidLime}
          style={{ filter: limeTint }}
        />

        {/* Floating 3D White Spring (Right side) */}
        <img
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-[280px] z-30 h-[130px] w-[130px] object-contain sm:right-[-10px] sm:top-[300px] sm:h-[160px] sm:w-[160px]"
          src={heroSpringWave}
          style={{ filter: whiteTint }}
        />

        {/* Happy Students Floating Card */}
        <div className="absolute left-[130px] bottom-[30px] z-40 w-[240px] rounded-[20px] bg-brand-lime p-3.5 shadow-xl sm:left-[195px] sm:bottom-[45px] sm:w-[258px] sm:rounded-[24px] sm:p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-body text-xs font-bold text-text-primary sm:text-sm">
              Happy Students
            </h4>
            <div className="flex items-center gap-1">
              <span className="font-body text-[11px] font-semibold text-text-primary sm:text-xs">
                4.5 (240)
              </span>
              <BlueStarIcon />
            </div>
          </div>

          {/* Overlapping Student Avatars */}
          <div className="mt-2.5 flex items-center">
            {happyStudentAvatars.map((av, idx) => (
              <img
                alt=""
                aria-hidden="true"
                className="-mr-1.5 h-6 w-6 rounded-full border border-brand-lime object-cover sm:h-7 sm:w-7"
                height="28"
                key={idx}
                src={av}
                style={{ zIndex: happyStudentAvatars.length - idx }}
                width="28"
              />
            ))}
            <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black font-body text-[9px] font-bold text-white sm:h-7 sm:w-7 sm:text-[10px]">
              2K+
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
