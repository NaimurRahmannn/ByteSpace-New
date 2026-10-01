import partnerLogos from '../../assets/figma/vectors/partner-logos.svg'

export default function PartnerSection() {
  return (
    <section
      aria-label="Partner logos"
      className="h-[160px] overflow-hidden bg-surface-light xl:h-[202px]"
    >
      <div className="mx-auto flex h-full max-w-content items-center overflow-hidden">
        <div className="h-full w-full overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex h-full min-w-max items-center px-4 sm:px-8 xl:mx-auto xl:w-[1132px] xl:min-w-0 xl:px-0">
            <img
              alt=""
              aria-hidden="true"
              className="h-[42px] w-[900px] max-w-none object-contain sm:w-[1000px] lg:w-[1024px] xl:w-[1132px]"
              src={partnerLogos}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
