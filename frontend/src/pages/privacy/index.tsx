export default function Privacy() {
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
              <h2 className="text-base font-semibold leading-7 text-blue-600">Privacy Policy</h2>
              <p className="text-4xl font-bold tracking-tight text-gray-900 mt-2 sm:text-5xl">Privacy Policy</p>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-gray-600 mx-auto mt-6 text-center">
              {/*By*/}
              {/*continuing to use our platform, you agree to these terms and*/}
              {/*conditions.*/}
            </p>
          </div>
        </section>
        <section className="bg-white pb-12 sm:pb-16 lg:pb-24 xl:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <article
                className="prose-a:text-primary-500 prose-blockquote:border-primary-500 prose prose-base prose-gray max-w-3xl mx-auto md:prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-blockquote:font-serif prose-blockquote:text-3xl prose-blockquote:font-light prose-blockquote:italic prose-blockquote:leading-normal prose-blockquote:border-l-2 prose-figcaption:font-medium">

              <p><strong>Last Updated:</strong> December 6th, 2023</p>

              <p>InstantDomains, located in Illinois, United States, operates the website getinstantdomains.com. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of personal information when users access our website.</p>

              <h2>Information Collection and Use:</h2>

              <p>We use cookies to allow access to our services. Additionally, we employ Google Analytics to collect anonymous visitor information for the purpose of improving our website.</p>

              <h2>Log Data:</h2>

              <p>We may collect information that your browser sends whenever you visit our site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

              <h2>Cookies:</h2>

              <p>We use cookies to facilitate access to our services. Users can manage cookie preferences through their browser settings.</p>

              <h2>Third-Party Services:</h2>

              <p>We utilize Google Analytics to collect anonymous visitor information. Please refer to Google's privacy policy for details on how they handle this information.</p>

              <h2>User Data Storage:</h2>

              <p>We do not store any user data on our servers. Any data processed is related to the usage of our domain name generation service and is not retained on our end.</p>

              <h2>Security:</h2>

              <p>The security of your personal information is important to us, but please be aware that no method of transmission over the Internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>

              <h2>Changes to This Privacy Policy:</h2>

              <p>We reserve the right to update our Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.</p>

              <h2>Contact Us:</h2>

              <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:getinstantdomains@proton.me">getinstantdomains@proton.me</a>.</p>

              <p>By using InstantDomains, you agree to the terms outlined in this Privacy Policy.</p>

            </article>
          </div>
        </section>
      </main>
  )
}