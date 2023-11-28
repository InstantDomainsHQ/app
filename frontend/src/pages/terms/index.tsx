export default function Terms() {
  return (
      <main>
        <section
            className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
          <div className="relative isolate z-10">
            <div
                className="absolute -z-10 flex -translate-y-1/2 justify-center overflow-hidden inset-x-0 top-1/2 [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
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
              <h2 className="text-base font-semibold leading-7 text-blue-600">Terms and
                Conditions</h2>
              <p className="text-4xl font-bold tracking-tight text-gray-900 mt-2 sm:text-5xl">Terms
                and Conditions</p>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-gray-600 mx-auto mt-6 text-center">By
              continuing to use our platform, you agree to these terms and
              conditions.
            </p>
          </div>
        </section>
        <section className="bg-white pb-12 sm:pb-16 lg:pb-24 xl:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <article
                className="prose-a:text-primary-500 prose-blockquote:border-primary-500 prose prose-base prose-gray max-w-3xl mx-auto md:prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-blockquote:font-serif prose-blockquote:text-3xl prose-blockquote:font-light prose-blockquote:italic prose-blockquote:leading-normal prose-blockquote:border-l-2 prose-figcaption:font-medium">
              <h2>Billing &amp; Refunds</h2>
              <p>We charge you for access to the product in monthly and yearly plans.</p>
              <p>Due to the nature of our product, we currently do not offer refunds, either partial
                or in full.</p>
              <p>You can easily cancel your subscription at any time you like. We will no longer
                charge you anything once you cancel your subscription.</p>
              <p>We may change our pricing, pricing policies, features and access restrictions at
                any time.</p>
              <h2>Emails</h2>
              <p>We may use your email to contact you about your account, product updates, and other
                marketing activities. You can unsubscribe from these emails at any time you
                like.</p>
              <h2>Conditions</h2>
              <p>We reserve the right to change / amend the policy at any time.</p>
              <p>By continuing to use our platform, you agree to these terms and conditions.</p>
            </article>
          </div>
        </section>
      </main>
  )
}