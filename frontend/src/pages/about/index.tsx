export default function Terms() {
  return (
      <main>
        <section
            className="relative overflow-hidden pb-6 pt-14 sm:pb-8 sm:pt-16 lg:pb-12 xl:pb-16 xl:pt-20">
          <div className="relative isolate z-10">
            <div
                className="absolute -z-10 flex  justify-center overflow-hidden inset-x-0 top-1/2 [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
              <svg className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
                   aria-hidden="true">
                <defs>
                  <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200"
                           x="50%" y="50%" patternUnits="userSpaceOnUse"
                           patternTransform="translate(-100 0)">
                    <path d="M.5 200V.5H200" fill="none"></path>
                  </pattern>
                </defs>
                <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                  <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth="0"></path>
                </svg>
                <rect width="100%" height="100%" strokeWidth="0"
                      fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"></rect>
              </svg>
            </div>
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">About Us</h2>
              <p className="text-4xl font-bold tracking-tight text-gray-900 mt-2 sm:text-5xl">About Us</p>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-gray-600 mx-auto mt-6 text-center">We want to make it fast and easy to find the perfect domain name.
            </p>
          </div>
        </section>
        <section className="bg-white pb-12 sm:pb-16 lg:pb-24 xl:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <article
                className="prose-a:text-primary-500 prose-blockquote:border-primary-500 prose prose-base prose-gray max-w-3xl mx-auto md:prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-blockquote:font-serif prose-blockquote:text-3xl prose-blockquote:font-light prose-blockquote:italic prose-blockquote:leading-normal prose-blockquote:border-l-2 prose-figcaption:font-medium">
              {/*<h2>Billing &amp; Refunds</h2>*/}
              <p>We love domain names! But finding the right one is a week- or month-long affair. So we built InstantDomains based on our own experience. </p>
              <p>InstantDomains allows you to describe your product or website in plain English and generate the perfect domain name for it.</p>
              <p>Unlike so many domain generation tools out there, we designed InstantDomains to be intuitive and fast.</p>
              <p>We use a fine-tuned AI to do the actual name generation. We then check each domain name and TLD combination to see if it’s available or taken.</p>
              <p>You can use InstantDomains both on desktop and mobile to quickly identify your domain from a color-coded matrix.
              </p>
              <p>InstantDomains is completely free to use.
              </p>
              <p>If you have any questions, concerns, or feedback, please feel free to email us at getinstantdomains@proton.me.</p>
            </article>
          </div>
        </section>
      </main>
  )
}