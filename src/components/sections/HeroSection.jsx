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
  const limeTint =
    'saturate(0) sepia(1) saturate(7) hue-rotate(32deg) brightness(1.03) contrast(1.02)'
  const whiteTint = 'brightness(1.75) saturate(0) contrast(0.96)'

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden xl:block"
    >
      <img
        alt=""
        className="absolute left-[-118px] top-[101px] h-[385px] w-[385px] object-contain"
        data-figma-node="46:90"
        src={ornaments.wave}
        style={{ filter: limeTint }}
      />
      <img
        alt=""
        className="absolute left-[183px] top-[357px] h-[175px] w-[175px] object-contain"
        data-figma-node="46:95"
        src={ornaments.wave}
        style={{ filter: whiteTint }}
      />
      <img
        alt=""
        className="absolute left-[18px] top-[562px] h-[342px] w-[342px] object-contain"
        data-figma-node="46:105"
        src={ornaments.coneLeft}
        style={{ filter: whiteTint }}
      />
      <img
        alt=""
        className="absolute left-[1231px] top-[101px] h-[370px] w-[370px] object-contain"
        data-figma-node="46:110"
        src={ornaments.coneRight}
        style={{ filter: limeTint }}
      />
      <img
        alt=""
        className="absolute left-[1106px] top-[344px] h-[188px] w-[188px] object-contain"
        data-figma-node="46:80"
        src={ornaments.coneSmall}
        style={{ filter: whiteTint }}
      />
      <img
        alt=""
        className="absolute left-[1127px] top-[552px] h-[330px] w-[330px] object-contain"
        data-figma-node="46:85"
        src={ornaments.ring}
        style={{ filter: whiteTint }}
      />
    </div>
  )
}

function HeroArtwork() {
  return (
    <div className="relative z-10 mx-auto mt-12 h-[430px] w-full max-w-[620px] overflow-hidden md:h-[520px] md:max-w-[760px] xl:absolute xl:inset-0 xl:z-[1] xl:mx-0 xl:mt-0 xl:h-auto xl:max-w-none xl:overflow-visible">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[120px] h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-brand-lime-strong md:top-[150px] md:h-[920px] md:w-[920px] xl:left-[145px] xl:top-[462px] xl:h-[1149px] xl:w-[1149px] xl:translate-x-0"
        data-figma-node="1:1866"
      />

      <img
        alt=""
        className="absolute bottom-0 left-1/2 z-20 h-auto w-[360px] -translate-x-1/2 object-contain shadow-elevation-a md:w-[470px] xl:bottom-auto xl:left-[431px] xl:top-[392px] xl:w-[578px] xl:translate-x-0"
        data-figma-node="1:1796"
        src={heroAssets.person}
      />

      <div className="absolute left-[calc(50%_-_340px)] top-[178px] z-30 hidden md:block xl:left-[404px] xl:top-[519px]">
        <CourseSummaryCard {...heroStats.courseSummary} />
      </div>
      <div className="absolute left-[calc(50%_+_105px)] top-[190px] z-30 hidden md:block xl:left-[842px] xl:top-[531px]">
        <ProgressCard {...heroStats.progress} />
      </div>
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 md:bottom-[72px] md:left-[calc(50%_-_320px)] md:translate-x-0 xl:bottom-auto xl:left-[328px] xl:top-[717px]">
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
      className="relative isolate overflow-hidden bg-brand-blue text-white xl:min-h-[904px]"
    >
      <HeroGrid />
      <HeroOrnaments />

      <div className="relative z-20 mx-auto max-w-content px-5 pb-0 pt-14 text-center md:px-8 md:pt-[49px] xl:h-[904px] xl:px-0">
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
      </div>

      <HeroArtwork />
    </section>
  )
}
