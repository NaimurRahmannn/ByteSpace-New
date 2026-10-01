import ctaConeWhite from '../../assets/figma/creator-cta-asset-01.png'
import heroSpringLime from '../../assets/figma/hero-asset-13.png'
import heroWave from '../../assets/figma/hero-asset-14.png'
import heroDonutLime from '../../assets/figma/hero-asset-15.png'
import heroCylinderWhite from '../../assets/figma/hero-asset-16.png'
import heroPyramidLime from '../../assets/figma/hero-asset-17.png'
import { creatorCtaContent } from '../../data/creatorCta.js'
import Button from '../ui/Button.jsx'

const whiteTint = 'brightness(1.75) saturate(0) contrast(0.96)'
const limeTint =
  'saturate(0) sepia(1) saturate(7) hue-rotate(32deg) brightness(1.03) contrast(1.02)'

function CTAGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,1)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,1)_2px,transparent_2px)] [background-size:120px_120px]"
      data-figma-node="34:1315"
    />
  )
}

function CTAOrnaments() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 h-full w-[1440px] -translate-x-1/2 hidden xl:block"
      data-figma-node="46:78"
    >
      {/* 34:1206: Top-left lime wave */}
      <img
        alt=""
        className="absolute left-[-118px] top-[-162px] h-[385px] w-[385px] object-contain"
        data-figma-node="34:1206"
        src={heroWave}
        style={{ filter: limeTint }}
      />

      {/* 34:1236: Upper-left inner white wave */}
      <img
        alt=""
        className="absolute left-[178px] top-[5px] h-[175px] w-[175px] object-contain"
        data-figma-node="34:1236"
        src={heroWave}
        style={{ filter: whiteTint }}
      />

      {/* 46:55: Mid-left white cone */}
      <img
        alt=""
        className="absolute left-[-48px] top-[225px] h-[188px] w-[188px] object-contain"
        data-figma-node="46:55"
        src={ctaConeWhite}
        style={{ filter: whiteTint }}
      />

      {/* 46:67: Bottom-left lime donut/ring */}
      <img
        alt=""
        className="absolute left-[20px] top-[299px] h-[342px] w-[342px] object-contain"
        data-figma-node="46:67"
        src={heroDonutLime}
        style={{ filter: limeTint }}
      />

      {/* 46:61: Top-right inner lime pyramid */}
      <img
        alt=""
        className="absolute left-[1080px] top-[0px] h-[188px] w-[188px] object-contain"
        data-figma-node="46:61"
        src={heroPyramidLime}
        style={{ filter: limeTint }}
      />

      {/* 46:73: Top-right outer white cylinder */}
      <img
        alt=""
        className="absolute left-[1226px] top-[6px] h-[370px] w-[370px] object-contain"
        data-figma-node="46:73"
        src={heroCylinderWhite}
        style={{ filter: whiteTint }}
      />

      {/* 34:1221: Bottom-right lime spiral spring */}
      <img
        alt=""
        className="absolute left-[1110px] top-[289px] h-[330px] w-[330px] object-contain"
        data-figma-node="34:1221"
        src={heroSpringLime}
        style={{ filter: limeTint }}
      />
    </div>
  )
}

export default function CreatorCTASection() {
  return (
    <section
      aria-labelledby="creator-cta-heading"
      className="relative isolate overflow-hidden bg-brand-blue py-14 md:py-16 xl:h-[488px] xl:py-[85px]"
      data-figma-node="34:1161"
      id="creator-cta"
    >
      <CTAGrid />
      <CTAOrnaments />

      <div
        className="relative z-20 mx-auto max-w-[964px] px-5 text-center xl:px-0"
        data-figma-node="34:1170"
      >
        <h2
          className="mx-auto max-w-[710px] font-heading text-3xl font-semibold leading-[1.2] tracking-[-0.01em] text-white sm:text-4xl md:text-[44px] md:leading-[52.8px]"
          data-figma-node="34:1171"
          id="creator-cta-heading"
        >
          {creatorCtaContent.heading}
        </h2>

        <p
          className="mx-auto mt-6 max-w-[964px] font-body text-base leading-relaxed text-[#F5F5F6]/90 sm:text-body-lg sm:leading-[1.6] xl:mt-10"
          data-figma-node="34:1172"
        >
          {creatorCtaContent.description}
        </p>

        <div className="mt-8 flex justify-center xl:mt-10">
          <Button
            className="h-[46px] min-w-[172px] px-6 text-label-lg font-medium"
            data-figma-node="34:1173"
            type="button"
          >
            {creatorCtaContent.buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
