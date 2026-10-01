import bytespaceLogoFooter from '../../assets/figma/vectors/bytespace-logo-footer.svg'
import { footerData } from '../../data/footer.js'
import NewsletterForm from '../ui/NewsletterForm.jsx'

export default function Footer() {
  const { description, newsletter, navigation, copyright, legal } = footerData

  return (
    <footer
      aria-label="Site footer"
      className="border-t border-border bg-white text-text-primary"
      data-figma-node="34:1256"
      id="footer"
    >
      <div
        className="mx-auto max-w-content px-5 pt-12 pb-8 md:px-8 md:pt-16 md:pb-10 xl:px-0 xl:pt-[71px] xl:pb-12"
        data-figma-node="34:1257"
      >
        {/* Main Footer Nav Area */}
        <div
          className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-[92px]"
          data-figma-node="34:1258"
        >
          {/* Left Column: Brand & Newsletter */}
          <div
            className="flex flex-col justify-between lg:w-[528px]"
            data-figma-node="34:1259"
          >
            <div data-figma-node="34:1260">
              <a
                aria-label="ByteSpace home"
                className="inline-block transition-opacity hover:opacity-85"
                data-figma-node="34:1261"
                href="#home"
              >
                <img
                  alt="ByteSpace"
                  className="block h-[35px] w-[171px]"
                  height="35"
                  src={bytespaceLogoFooter}
                  width="171"
                />
              </a>
              <p
                className="mt-4 font-body text-body-sm text-text-primary"
                data-figma-node="34:1264"
              >
                {description}
              </p>
            </div>

            <div className="mt-8 lg:mt-[45px]">
              <NewsletterForm
                buttonLabel={newsletter.buttonLabel}
                consentText={newsletter.consent}
                placeholder={newsletter.placeholder}
              />
            </div>
          </div>

          {/* Right Column: Navigation */}
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 lg:w-[580px] lg:gap-10"
            data-figma-node="34:1272"
          >
            {/* Column 1: Browse */}
            <div
              className="flex flex-col"
              data-figma-node="34:1273"
            >
              <h3
                className="font-body text-body-md font-medium text-text-primary"
                data-figma-node="34:1274"
              >
                {navigation.browse.heading}
              </h3>
              <ul
                className="mt-6 flex flex-col gap-4"
                data-figma-node="34:1275"
              >
                {navigation.browse.column1.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        className="font-body text-body-sm text-text-primary transition-colors hover:text-brand-blue"
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="font-body text-body-sm text-text-primary">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Browse continuation */}
            <div
              className="flex flex-col lg:pt-[48px]"
              data-figma-node="34:1281"
            >
              <ul
                className="flex flex-col gap-4"
                data-figma-node="34:1282"
              >
                {navigation.browse.column2.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        className="font-body text-body-sm text-text-primary transition-colors hover:text-brand-blue"
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="font-body text-body-sm text-text-primary">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Platform */}
            <div
              className="flex flex-col"
              data-figma-node="34:1288"
            >
              <h3
                className="font-body text-body-md font-medium text-text-primary"
                data-figma-node="34:1289"
              >
                {navigation.platform.heading}
              </h3>
              <ul
                className="mt-6 flex flex-col gap-4"
                data-figma-node="34:1290"
              >
                {navigation.platform.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        className="font-body text-body-sm text-text-primary transition-colors hover:text-brand-blue"
                        href={item.href}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="font-body text-body-sm text-text-primary">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Copyright / Legal Area */}
        <div
          className="mt-12 lg:mt-[130px]"
          data-figma-node="34:1296"
        >
          <div
            className="border-t border-border"
            data-figma-node="34:1297"
          />
          <div
            className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            data-figma-node="34:1298"
          >
            <p
              className="font-body text-[12px] leading-[19.2px] text-text-primary"
              data-figma-node="34:1299"
            >
              {copyright}
            </p>
            <ul
              className="flex flex-wrap items-center gap-6"
              data-figma-node="34:1300"
            >
              {legal.map((item) => (
                <li key={item.label}>
                  <span className="font-body text-[12px] leading-[19.2px] text-text-primary">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
