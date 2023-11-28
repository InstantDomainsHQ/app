import React from "react";

export default function Home() {
  return (
      <main>
        <section className="bg-gradient-to-b from-white to-blue-50 pb-12 pt-8 sm:pb-16 lg:pb-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2">
              <div className="max-w-xl mx-auto text-center lg:max-w-none lg:mx-0 lg:text-left">
                {/*<div*/}
                {/*    className="inline-flex items-center justify-center transition-all duration-150 hover:-translate-y-1 hover:shadow-md lg:justify-start">*/}
                {/*  <img className="h-12 w-auto"*/}
                {/*       src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=387564&amp;theme=light&amp;period=daily"*/}
                {/*       alt="SiteGPT - ChatGPT for every website | Product Hunt"/></div>*/}
                <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 mt-8 sm:text-5xl lg:text-6xl xl:pr-12">Find <span
                    className="text-blue-600">verified</span> emails. <span
                    className="text-grey-900">Anywhere.</span></h1>
                <p className="text-base font-normal text-gray-700 mt-5 sm:text-lg lg:text-xl">Find valid emails of your ideal customers for sales, business development, recuiting, marketing, and more.</p>
                <ul className="flex flex-col justify-center gap-x-6 gap-y-3 text-sm font-medium text-gray-900 mt-6 sm:flex-row sm:flex-wrap sm:mt-8 lg:justify-start">
                  <li className="flex items-center justify-center gap-2">
                    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         viewBox="0 0 256 256">
                      <path
                          d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                    </svg>
                    Personalized onboarding help
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         viewBox="0 0 256 256">
                      <path
                          d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                    </svg>
                    Friendly pricing as you scale
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         viewBox="0 0 256 256">
                      <path
                          d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                    </svg>
                    95+ languages supported
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         viewBox="0 0 256 256">
                      <path
                          d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                    </svg>
                    Cancel anytime
                  </li>
                </ul>
                <div
                    className="flex flex-col gap-4 mt-6 sm:flex-row sm:items-center sm:justify-center sm:gap-5 sm:mt-8 lg:justify-start">
                  <a href="/pricing">
                    <button className="inline-flex items-center justify-center bg-blue-600 text-sm font-semibold leading-5 text-white shadow-sm transition-all duration-150 rounded-lg px-3 py-1.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                    Create Chatbot
                  </button></a>
                  <a target="_blank" rel="noopener noreferrer"
                                                          href="https://cal.com/sitegpt/30min"
                                                          className="isomorphic-link isomorphic-link--external inline-flex items-center justify-center bg-white text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 rounded-xl px-8 py-4 hover:bg-gray-50">Book
                  a Demo</a></div>
              </div>
              <div><img className="w-full object-cover" src="https://sitegpt.ai/images/hero-illustration.svg" alt=""/>
              </div>
            </div>
            <div className="max-w-5xl mx-auto mt-16 text-center lg:mt-20">
              <p className="text-base font-semibold text-gray-900">Trusted by these leading
                companies</p>
              <div
                  className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 mt-4 sm:mt-6 lg:gap-x-8">
                <img className="h-12 w-auto object-contain mix-blend-multiply sm:h-14"
                     src="https://sitegpt.ai/images/customer-logos/alignable.png" alt=""/><img
                  className="h-12 w-auto object-contain sm:h-14"
                  src="https://sitegpt.ai/images/customer-logos/screen-binge.png" alt=""/><img
                  className="h-12 w-auto object-contain sm:h-14"
                  src="https://sitegpt.ai/images/customer-logos/sheets-giggles.png" alt=""/><img
                  className="h-12 w-auto object-contain sm:h-14"
                  src="https://sitegpt.ai/images/customer-logos/cbs-bahamas.png" alt=""/><img
                  className="h-12 w-auto object-contain sm:h-14"
                  src="https://sitegpt.ai/images/customer-logos/link-research-tools.png" alt=""/></div>
            </div>
          </div>
        </section>
        <section className="bg-blue-50 pt-12 sm:pt-16 lg:pt-20 xl:pt-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Imagine
                what you could do if you had an expert chatbot answering questions 24/7</h2>
            </div>
          </div>
        </section>
        <div className="relative">
          <div className="absolute grid inset-0" aria-hidden="true">
            <div className="bg-blue-50"></div>
            <div className="bg-white"></div>
          </div>
          <div className="relative pt-12 lg:pt-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="bg-white shadow-lg ring-2 ring-inset ring-gray-200 rounded-2xl">
                  <div className="p-8 sm:p-12">
                    <div className="inline-flex items-center gap-2">
                      <svg aria-hidden="true" className="h-6 w-6 text-gray-500"
                           xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                           viewBox="0 0 256 256">
                        <path
                            d="M232,184a8,8,0,0,1-16,0A88,88,0,0,0,67.47,120.16l26.19,26.18A8,8,0,0,1,88,160H24a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66l26.48,26.48A104,104,0,0,1,232,184Z"></path>
                      </svg>
                      <p className="text-base font-semibold text-gray-700">Before</p>
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl">Fickle,
                      one-size-fits-all chatbots that do more harm than good</h3>
                    <ul className="text-base text-gray-900 mt-6 space-y-3 sm:text-lg">
                      <li className="flex items-start gap-3">
                        <div className="shrink-0 py-1.5">
                          <svg className="h-3 w-3 fill-error-200" viewBox="0 0 6 6"
                               aria-hidden="true">
                            <circle cx="3" cy="3" r="3"></circle>
                          </svg>
                        </div>
                        Generic GPT tools don't answer based on your training data
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="shrink-0 py-1.5">
                          <svg className="h-3 w-3 fill-error-200" viewBox="0 0 6 6"
                               aria-hidden="true">
                            <circle cx="3" cy="3" r="3"></circle>
                          </svg>
                        </div>
                        Custom-built bots are finicky and difficult to maintain
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="shrink-0 py-1.5">
                          <svg className="h-3 w-3 fill-error-200" viewBox="0 0 6 6"
                               aria-hidden="true">
                            <circle cx="3" cy="3" r="3"></circle>
                          </svg>
                        </div>
                        Customer support staff takes 3+ months to train
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="shrink-0 py-1.5">
                          <svg className="h-3 w-3 fill-error-200" viewBox="0 0 6 6"
                               aria-hidden="true">
                            <circle cx="3" cy="3" r="3"></circle>
                          </svg>
                        </div>
                        Bogged down with support tickets
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-600 shadow-lg rounded-2xl">
                  <div className="p-8 sm:p-12">
                    <div className="inline-flex items-center gap-2">
                      <p className="text-base font-semibold text-blue-100">After</p>
                      <svg aria-hidden="true" className="h-6 w-6 text-blue-100"
                           xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                           viewBox="0 0 256 256">
                        <path
                            d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L212.69,104,170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Zm-48-11.32-48-48A8,8,0,0,0,120,56V96.3A104.15,104.15,0,0,0,24,200a8,8,0,0,0,16,0,88.11,88.11,0,0,1,80-87.63V152a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,181.66,98.34Z"></path>
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-white mt-4 sm:text-3xl">An
                      automated resource that super charges your support team</h3>
                    <ul className="text-base text-white mt-6 space-y-3 sm:text-lg">
                      <li className="flex items-start gap-3">
                        <div className="shrink-0 py-1.5">
                          <svg aria-hidden="true" className="h-5 w-5 text-white"
                               xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                               viewBox="0 0 256 256">
                            <path
                                d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                          </svg>
                        </div>
                        Provide 24/7/365 quality customer support with instant responses
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="shrink-0 py-1.5">
                          <svg aria-hidden="true" className="h-5 w-5 text-white"
                               xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                               viewBox="0 0 256 256">
                            <path
                                d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                          </svg>
                        </div>
                        Automate answering the vast majority of support tickets
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="shrink-0 py-1.5">
                          <svg aria-hidden="true" className="h-5 w-5 text-white"
                               xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                               viewBox="0 0 256 256">
                            <path
                                d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                          </svg>
                        </div>
                        Make your current support team twice as productive
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="shrink-0 py-1.5">
                          <svg aria-hidden="true" className="h-5 w-5 text-white"
                               xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                               viewBox="0 0 256 256">
                            <path
                                d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                          </svg>
                        </div>
                        Free up time to work on higher-level tasks
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 xl:py-32">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">You're <span
                  className="text-blue-600">three easy steps</span> away from your own personalized
                AI support chatbot</h2>
            </div>
            <div
                className="grid max-w-sm grid-cols-1 gap-12 mx-auto mt-12 text-center sm:mt-16 lg:max-w-none lg:grid-cols-3 lg:text-left">
              <div>
                <div
                    className="inline-flex h-12 w-12 items-center justify-center bg-blue-600 text-xl font-bold text-white shadow-lg rounded-lg">1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 sm:text-2xl lg:mt-6">Sync
                  training data</h3>
                <p className="text-sm font-normal text-gray-700 mt-2 sm:text-base sm:mt-3">Enter
                  your URL for SiteGPT to scan, or upload files, or drop in raw text content.</p>
              </div>
              <div>
                <div
                    className="inline-flex h-12 w-12 items-center justify-center bg-blue-600 text-xl font-bold text-white shadow-lg rounded-lg">2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 sm:text-2xl lg:mt-6">Install on
                  your site</h3>
                <p className="text-sm font-normal text-gray-700 mt-2 sm:text-base sm:mt-3">Embed a
                  chatbot on as many sites as you want — your marketing site, in-app, help center…
                  wherever.</p>
              </div>
              <div>
                <div
                    className="inline-flex h-12 w-12 items-center justify-center bg-blue-600 text-xl font-bold text-white shadow-lg rounded-lg">3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 sm:text-2xl lg:mt-6">Learn and
                  refine</h3>
                <p className="text-sm font-normal text-gray-700 mt-2 sm:text-base sm:mt-3">Use real
                  chat history to improve your chatbot by providing feedback that allows it to
                  improve with every interaction.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start space-y-6 lg:space-y-8 xl:space-y-10">
              <div
                  className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-3xl xl:sticky xl:top-20">
                <div
                    className="grid grid-cols-1 items-center -space-y-12 lg:grid-cols-2 lg:space-y-0">
                  <div className="p-8 sm:p-12 lg:p-16">
                    <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Personalized
                      Chatbot</p>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">Build
                      a custom chatbot trained on your own content</h3>
                    <p className="text-base font-normal text-gray-700 mt-4">Ever wanted to clone
                      yourself to answer customer queries? Now you can! Train your chatbot with your
                      content and let it echo your brand's voice. Who knew a chatbot could be your
                      digital doppelgänger?</p>
                  </div>
                  <div><img className="w-full object-cover" src="https://sitegpt.ai/images/features/feature-1.svg"
                            alt=""/></div>
                </div>
              </div>
              <div
                  className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-3xl xl:sticky xl:top-20">
                <div
                    className="grid grid-cols-1 items-center -space-y-6 lg:grid-cols-2 lg:space-y-0">
                  <div className="p-8 sm:p-12 lg:p-16">
                    <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Quick
                      Prompts</p>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">Help
                      users start conversations with quick prompts</h3>
                    <p className="text-base font-normal text-gray-700 mt-4">Give users a digital
                      icebreaker to kick things off. Include frequently asked questions or questions
                      you wish more users would ask to get value out of your product or service.</p>
                  </div>
                  <div><img className="w-full object-cover" src="https://sitegpt.ai/images/features/feature-2.svg"
                            alt=""/></div>
                </div>
              </div>
              <div
                  className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-3xl xl:sticky xl:top-20">
                <div
                    className="grid grid-cols-1 items-center -space-y-12 lg:grid-cols-2 lg:space-y-0">
                  <div className="p-8 sm:p-12 lg:p-16">
                    <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Email
                      Summaries</p>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">Stay
                      up to date with daily email summaries</h3>
                    <p className="text-base font-normal text-gray-700 mt-4">Keep a pulse on chatbot
                      interactions with daily summaries delivered to your inbox. Upload more
                      training data where needed, track the chatbot's performance, and gain insights
                      into user behavior.</p>
                  </div>
                  <div><img className="w-full object-cover" src="https://sitegpt.ai/images/features/feature-3.svg"
                            alt=""/></div>
                </div>
              </div>
              <div
                  className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-3xl xl:sticky xl:top-20">
                <div
                    className="grid grid-cols-1 items-center -space-y-12 lg:grid-cols-2 lg:space-y-0">
                  <div className="p-8 sm:p-12 lg:p-16">
                    <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Escalate
                      to Human</p>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">Escalate
                      to a human when necessary</h3>
                    <p className="text-base font-normal text-gray-700 mt-4">While AI can handle a
                      vast majority of inquiries, some conversations require human touch. Users can
                      seamlessly transition the conversation to a live agent at the push of a
                      button. This hybrid approach ensures that users always receive the best
                      possible assistance.</p>
                  </div>
                  <div><img className="w-full object-cover" src="https://sitegpt.ai/images/features/feature-4.svg"
                            alt=""/></div>
                </div>
              </div>
              <div
                  className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-3xl xl:sticky xl:top-20">
                <div
                    className="grid grid-cols-1 items-center -space-y-12 lg:grid-cols-2 lg:space-y-0">
                  <div className="p-8 sm:p-12 lg:p-16">
                    <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Collect
                      Leads</p>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">Generate
                      leads to follow up with later</h3>
                    <p className="text-base font-normal text-gray-700 mt-4">Don't just answer
                      questions, seize opportunities. Our chatbot captures interested visitors'
                      details, allowing you to build a list of potential leads.</p>
                  </div>
                  <div><img className="w-full object-cover" src="https://sitegpt.ai/images/features/feature-5.svg"
                            alt=""/></div>
                </div>
              </div>
              <div
                  className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-3xl xl:sticky xl:top-20">
                <div
                    className="grid grid-cols-1 items-center -space-y-12 lg:grid-cols-2 lg:space-y-0">
                  <div className="p-8 sm:p-12 lg:p-16">
                    <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Functions</p>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">Turn
                      natural language commands into in-app actions</h3>
                    <p className="text-base font-normal text-gray-700 mt-4">Functions allows users
                      to automate tasks just by interacting with your chatbot. Your chatbot can
                      listen, understand, and interact with other systems based on chat
                      interactions.</p>
                  </div>
                  <div><img className="w-full object-cover" src="https://sitegpt.ai/images/features/feature-1.svg"
                            alt=""/></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-32">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Supercharge
                your chatbot</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 mt-4 sm:text-4xl sm:mt-6 lg:text-5xl">Direct
                integrations with your favorite tools</h2>
              <p className="text-base text-gray-700 mt-4 sm:text-lg">With native integrations into
                platforms like Crisp, Intercom, and Zendesk, our chatbot becomes an extended arm of
                your existing toolkit.</p>
            </div>
            <div className="max-w-4xl mx-auto mt-12 sm:mt-16"><img className="w-full object-cover"
                                                                   src="https://sitegpt.ai/images/integrations.svg"
                                                                   alt=""/></div>
          </div>
        </section>
        <section id="demo" className="bg-blue-50 py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-2">
              <div className="max-w-xl mx-auto text-center lg:max-w-none lg:mx-0 lg:text-left">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Live demo</p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 mt-4 sm:text-4xl sm:mt-6 lg:text-5xl">See
                  for yourself. <br className="lg:block"/></h2>
                <p className="text-base text-gray-700 mt-4 sm:text-lg">Ask the SiteGPT chatbot a
                  question about itself.</p>
              </div>
              <div className="xl:px-16">
                <div
                    className="aspect-[1/2] overflow-hidden ring-1 ring-blue-600 rounded-2xl sm:aspect-[3/4]">
                  <iframe className="h-full w-full object-cover"
                          src="https://widget.sitegpt.ai/c/360485494599975514"
                          title="SiteGPT Demo"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Customer
                testimonials</p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 mt-4 sm:text-4xl sm:mt-6 lg:text-5xl">Don't
                just take our word for it</h2>
            </div>
            <div
                className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-12 mx-auto mt-12 text-center sm:mt-16 sm:text-left lg:max-w-none lg:grid-cols-2 lg:mx-0">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <img className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full"
                     src="https://sitegpt.ai/images/testimonials/christoph.jpeg" alt=""/>
                <div>
                  <blockquote>
                    <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">“SiteGPT
                      appears to be first really production ready support solution that allows
                      custom training, while so many others break or simply lack functionality.
                      (we have tested and trialed MANY in the past 3 months)”</p>
                  </blockquote>
                  <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">Christoph
                    C. Cemper</p>
                  <p className="text-sm font-normal text-gray-700 mt-0.5">Founder &amp; CEO of
                    AIPRM.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <img className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full"
                     src="https://sitegpt.ai/images/testimonials/akhil.jpeg" alt=""/>
                <div>
                  <blockquote>
                    <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">“Other
                      than the obvious benefits of using SiteGPT, we are getting user
                      feedback/feature requests - it's only day 1 of using the SiteGPT bot.”</p>
                  </blockquote>
                  <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">Akhil
                    Kundh</p>
                  <p className="text-sm font-normal text-gray-700 mt-0.5">Growth at CheqUptime</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <img className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full"
                     src="https://sitegpt.ai/images/testimonials/brent.jpeg" alt=""/>
                <div>
                  <blockquote>
                    <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">“We've
                      got the bot dialled in - we're using GPT-4, have an avenue for escalations
                      to Zendesk, and so far I have no complaints.”</p>
                  </blockquote>
                  <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">Brent
                    Burrows II</p>
                  <p className="text-sm font-normal text-gray-700 mt-0.5">Vice President –
                    Retail &amp; Sales at CBS Bahamas</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <img className="h-20 w-20 shrink-0 bg-gray-200 object-cover shadow-sm rounded-full"
                     src="https://sitegpt.ai/images/testimonials/frank.jpeg" alt=""/>
                <div>
                  <blockquote>
                    <p className="text-base font-normal text-gray-900 sm:text-lg xl:text-xl xl:leading-8">“Every
                      now and then, you stumble on a great solution. SiteGPT is like I imagined a
                      chatbot solution could be a few years back.”</p>
                  </blockquote>
                  <p className="text-base font-semibold text-gray-900 mt-2 sm:mt-4 lg:text-lg">Frank
                    Smit</p>
                  <p className="text-sm font-normal text-gray-700 mt-0.5">Chief Innovation Officer
                    at OBI4wan</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">FAQs</h2>
              <p className="text-base font-normal text-gray-600 mt-4 sm:text-lg">Have a different
                question and can't find the answer you're looking for? Reach out to our support team
                by <a target="_blank" rel="noopener noreferrer" href="mailto:bhanu@sitegpt.ai"
                      className="isomorphic-link isomorphic-link--external text-blue-600 hover:text-blue-500 hover:underline">sending
                  us an email</a> and we'll get back to you as soon as we can.</p>
            </div>
            <form method="get" action="/?index" className="mt-12 border-b border-gray-200 sm:mt-16">
              <nav className="flex w-full flex-nowrap gap-6 overflow-x-auto -mb-px sm:gap-8">
                <button type="submit" name="category" value="chatbot-training-and-support"
                        className="whitespace-nowrap text-base font-semibold transition-all duration-150 border-b-2 px-0.5 pb-3 text-blue-600 border-blue-600">Chatbot
                  Training and Support
                </button>
                <button type="submit" name="category" value="pricing"
                        className="whitespace-nowrap text-base font-semibold transition-all duration-150 border-b-2 px-0.5 pb-3 text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300">Pricing
                </button>
                <button type="submit" name="category" value="technology-and-integrations"
                        className="whitespace-nowrap text-base font-semibold transition-all duration-150 border-b-2 px-0.5 pb-3 text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300">Technology
                  and Integrations
                </button>
              </nav>
            </form>
            <div className="grid grid-cols-1 gap-x-16 gap-y-5 mt-8 lg:grid-cols-2">
              <div className="flow-root">
                <div className="divide-gray-200 -my-6 divide-y">
                  <div className="relative py-6">
                    <details
                        className="menu-details peer cursor-pointer transition-all duration-150">
                      <summary
                          className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">Can
                        I add text content to train the chatbot if I don't have web pages to scrape
                        or files to upload?
                      </summary>
                      <div className="mt-4">
                        <p className="text-base text-gray-600"><span className="prose prose-blue">Yes, you're able to enter raw text content as training data.</span>
                        </p>
                      </div>
                    </details>
                    <div
                        className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
                      </svg>
                    </div>
                    <div
                        className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="#currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="relative py-6">
                    <details
                        className="menu-details peer cursor-pointer transition-all duration-150">
                      <summary
                          className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">Do
                        you have a plan for agencies to offer chatbots to their clients?
                      </summary>
                      <div className="mt-4">
                        <p className="text-base text-gray-600"><span className="prose prose-blue">Yes, please contact us by sending us an email for more information.</span>
                        </p>
                      </div>
                    </details>
                    <div
                        className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
                      </svg>
                    </div>
                    <div
                        className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="#currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="relative py-6">
                    <details
                        className="menu-details peer cursor-pointer transition-all duration-150">
                      <summary
                          className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">Is
                        there a demo that I can try?
                      </summary>
                      <div className="mt-4">
                        <p className="text-base text-gray-600"><span className="prose prose-blue">Yes, you can go to <a
                            href="https://sitegpt.ai/demo" target="_blank"
                            rel="noreferrer noopener">sitegpt.ai/demo</a> and try out the demo. The demo bot you see on <a
                            href="https://sitegpt.ai/demo" target="_blank"
                            rel="noreferrer noopener">sitegpt.ai/demo</a> is trained on the <strong>sitegpt.ai</strong> website content itself. So you can ask any questions related to SiteGPT website in that demo bot and it will answer it.</span>
                        </p>
                      </div>
                    </details>
                    <div
                        className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
                      </svg>
                    </div>
                    <div
                        className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="#currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="relative py-6">
                    <details
                        className="menu-details peer cursor-pointer transition-all duration-150">
                      <summary
                          className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">What
                        type of content can we use to train the chatbot?
                      </summary>
                      <div className="mt-4">
                        <p className="text-base text-gray-600"><span className="prose prose-blue">You can use any type of content to train the chatbot. The more content you provide, the better the chatbot will be able to answer the questions.</span>
                        </p>
                      </div>
                    </details>
                    <div
                        className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
                      </svg>
                    </div>
                    <div
                        className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="#currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="relative py-6">
                    <details
                        className="menu-details peer cursor-pointer transition-all duration-150">
                      <summary
                          className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">Do
                        you retrain the chatbot automatically when the website content changes?
                      </summary>
                      <div className="mt-4">
                        <p className="text-base text-gray-600"><span className="prose prose-blue">Right now, for retraining, you have to go to the dashboard and click on <strong>Retrain</strong> button to retrain the chatbot. We are working on automating this process and do it periodically.</span>
                        </p>
                      </div>
                    </details>
                    <div
                        className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
                      </svg>
                    </div>
                    <div
                        className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="#currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flow-root">
                <div className="divide-gray-200 -my-6 divide-y">
                  <div className="relative py-6">
                    <details
                        className="menu-details peer cursor-pointer transition-all duration-150">
                      <summary
                          className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">Can
                        I upload files to train the chatbot?
                      </summary>
                      <div className="mt-4">
                        <p className="text-base text-gray-600"><span className="prose prose-blue">Yes. You can upload <code>CSV/TXT/PDF/DOCX/PPTX/MD</code> files to train the chatbot. The limits vary based on what plan you are on.</span>
                        </p>
                      </div>
                    </details>
                    <div
                        className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
                      </svg>
                    </div>
                    <div
                        className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="#currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="relative py-6">
                    <details
                        className="menu-details peer cursor-pointer transition-all duration-150">
                      <summary
                          className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">Some
                        of my files are larger than 10 MB. What do I do?
                      </summary>
                      <div className="mt-4">
                        <p className="text-base text-gray-600"><span className="prose prose-blue">Please contact us on <code>bhanu@sitegpt.ai</code>. We can figure out a way for you to upload those files.</span>
                        </p>
                      </div>
                    </details>
                    <div
                        className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
                      </svg>
                    </div>
                    <div
                        className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="#currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="relative py-6">
                    <details
                        className="menu-details peer cursor-pointer transition-all duration-150">
                      <summary
                          className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">How
                        do I add the chatbot to my website?
                      </summary>
                      <div className="mt-4">
                        <p className="text-base text-gray-600"><span className="prose prose-blue">Each chatbot gets its own unique url, you can embed the chatbot on your own site via the embed code we provide. You can even directly link to the chatbot from your site.</span>
                        </p>
                      </div>
                    </details>
                    <div
                        className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
                      </svg>
                    </div>
                    <div
                        className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="#currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="relative py-6">
                    <details
                        className="menu-details peer cursor-pointer transition-all duration-150">
                      <summary
                          className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">How
                        do I train the chatbot?
                      </summary>
                      <div className="mt-4">
                        <p className="text-base text-gray-600"><span className="prose prose-blue">You can train the chatbot by adding a <code>website link</code>, <code>a sitemap link</code>, a <code>Zendesk Help Center Link</code>, a <code>Gitbook link</code>. You can just enter a URL and the chatbot will be trained on all the content present on that URL. You can also upload <code>CSV/TXT/PDF/DOCX/PPTX/MD</code> files to train the chatbots.</span>
                        </p>
                      </div>
                    </details>
                    <div
                        className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
                      </svg>
                    </div>
                    <div
                        className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="#currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="relative py-6">
                    <details
                        className="menu-details peer cursor-pointer transition-all duration-150">
                      <summary
                          className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">How
                        long does the training take?
                      </summary>
                      <div className="mt-4">
                        <p className="text-base text-gray-600"><span className="prose prose-blue">It depends on the number of pages you are training. But usually, it should be done within a few minutes.</span>
                        </p>
                      </div>
                    </details>
                    <div
                        className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
                      </svg>
                    </div>
                    <div
                        className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="#currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="relative py-6">
                    <details
                        className="menu-details peer cursor-pointer transition-all duration-150">
                      <summary
                          className="flex select-none items-center justify-between text-lg font-medium text-gray-900 pr-16">How
                        can we contact you?
                      </summary>
                      <div className="mt-4">
                        <p className="text-base text-gray-600"><span className="prose prose-blue">You can reach out to us at <code>bhanu@sitegpt.ai</code>.</span>
                        </p>
                      </div>
                    </details>
                    <div
                        className="pointer-events-none invisible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:visible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path>
                      </svg>
                    </div>
                    <div
                        className="pointer-events-none visible absolute right-0 top-0 py-7 pl-7 pr-0 peer-open:invisible">
                      <svg aria-hidden="true" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                           fill="#currentColor" viewBox="0 0 256 256">
                        <path
                            d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="relative">
          <div className="absolute grid inset-0" aria-hidden="true">
            <div className="bg-white"></div>
            <div className="bg-blue-50"></div>
          </div>
          <div className="relative">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                  className="bg-blue-600 rounded-3xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28">
                <div className="max-w-2xl mx-auto">
                  <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Ready
                    to take SiteGPT for a spin?</h2>
                  <p className="max-w-lg text-base text-blue-100 mx-auto mt-4 sm:text-lg">Find out
                    if a personalized AI support chatbot is a good fit for you in just a few
                    hours.</p>
                </div>
                <div
                    className="flex flex-col justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:gap-5">
                  <a className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center bg-white text-lg font-semibold text-blue-600 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                     href="/pricing">Create Chatbot</a><a target="_blank" rel="noopener noreferrer"
                                                          href="https://cal.com/sitegpt/30min"
                                                          className="isomorphic-link isomorphic-link--external inline-flex items-center justify-center bg-blue-600 text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-white transition-all duration-150 rounded-xl px-8 py-4 hover:bg-blue-700">Book
                  a Demo</a></div>
                <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white mt-8">
                  <li className="inline-flex items-center gap-2">
                    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-white"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         viewBox="0 0 256 256">
                      <path
                          d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                    </svg>
                    Personalized onboarding help
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-white"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         viewBox="0 0 256 256">
                      <path
                          d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                    </svg>
                    Friendly pricing as you scale
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-white"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         viewBox="0 0 256 256">
                      <path
                          d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
                    </svg>
                    95+ languages supported
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}