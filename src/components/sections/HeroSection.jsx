import { heroAssets, heroContent, heroStats } from '../../data/hero.js'
import CourseSummaryCard from '../ui/CourseSummaryCard.jsx'
import ProgressCard from '../ui/ProgressCard.jsx'
import SearchBar from '../ui/SearchBar.jsx'
import StudentSocialProofCard from '../ui/StudentSocialProofCard.jsx'

function HeroGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,1)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,1)_2px,transparent_2px)] [background-size:120px_120px]"
    />
  )
}

function HeroOrnaments() {
  const { ornaments } = heroAssets

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden md:block"
    >
      <img
        alt=""
        className="absolute left-[-118px] top-[101px] h-[385px] w-[385px] object-contain"
        src={ornaments.wave}
      />
      <img
        alt=""
        className="absolute left-[183px] top-[357px] h-[175px] w-[175px] object-contain"
        src={ornaments.wave}
      />
      <img
        alt=""
        className="absolute left-[18px] top-[562px] h-[342px] w-[342px] object-contain"
        src={ornaments.coneLeft}
      />
      <img
        alt=""
        className="absolute left-[1231px] top-[101px] h-[370px] w-[370px] object-contain"
        src={ornaments.coneRight}
      />
      <img
        alt=""
        className="absolute left-[1106px] top-[344px] h-[188px] w-[188px] object-contain"
        src={ornaments.coneSmall}
      />
      <img
        alt=""
        className="absolute left-[1127px] top-[552px] h-[330px] w-[330px] object-contain"
        src={ornaments.ring}
      />
    </div>
  )
}

function HeroArtwork() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto mt-12 h-[430px] w-full max-w-[620px] overflow-hidden md:absolute md:inset-0 md:mx-0 md:mt-0 md:h-auto md:max-w-none"
    >
      <div className="absolute left-1/2 top-[120px] h-[760px] w-[760px] -translate-x-1/2 rounded-full border-[220px] border-brand-lime-strong md:left-[145px] md:top-[462px] md:h-[1149px] md:w-[1149px] md:translate-x-0 md:border-[320px]" />

      <img
        alt=""
        className="absolute bottom-0 left-1/2 z-20 h-auto w-[360px] -translate-x-1/2 object-contain shadow-elevation-a md:left-[431px] md:top-[392px] md:w-[578px] md:translate-x-0"
        src={heroAssets.person}
      />

      <div className="absolute left-[calc(50%_-_210px)] top-[158px] z-30 hidden md:left-[404px] md:top-[519px] md:block">
        <CourseSummaryCard {...heroStats.courseSummary} />
      </div>
      <div className="absolute left-[calc(50%_+_80px)] top-[180px] z-30 hidden md:left-[842px] md:top-[531px] md:block">
        <ProgressCard {...heroStats.progress} />
      </div>
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 md:left-[328px] md:top-[717px] md:translate-x-0">
        <StudentSocialProofCard
          {...heroStats.students}
          avatars={heroAssets.avatars}
        />
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-brand-blue text-white md:min-h-[904px]"
    >
      <HeroGrid />
      <HeroOrnaments />

      <div className="relative z-10 mx-auto max-w-content px-5 pb-16 pt-14 text-center md:h-[904px] md:px-8 md:pb-0 md:pt-[49px] xl:px-0">
        <div className="mx-auto max-w-[935px]">
          <h1
            className="mx-auto max-w-[935px] font-heading text-[3.25rem] font-semibold leading-[1.12] tracking-[-0.01em] text-white md:text-display"
            id="hero-heading"
          >
            {heroContent.heading}
          </h1>
          <p className="mx-auto mt-8 max-w-[819px] font-body text-body-lg text-[#e5e6e8]">
            {heroContent.description}
          </p>
        </div>

        <div className="mx-auto mt-[60px] max-w-[581px]">
          <SearchBar
            buttonLabel={heroContent.searchButtonLabel}
            placeholder={heroContent.searchPlaceholder}
          />
        </div>

        <HeroArtwork />
      </div>
    </section>
  )
}
