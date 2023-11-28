import React, {useEffect, useState} from "react";

export default function Pricing() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])

  // if (true) {
  //   console.log("NOT READY....")
  //   return <h1>Loading...</h1>
  // }

  return (
      <main>
        <section
            className="relative bg-gradient-to-b from-white to-blue-50 py-12 sm:py-16 lg:py-20">
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
          <div className="relative z-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center lg:max-w-3xl">
              <h1 className="text-base font-semibold text-blue-600">Pricing plans</h1>
              <p className="text-4xl font-bold tracking-tight text-gray-900 mt-4 sm:text-5xl lg:text-6xl">Pays
                for itself in saved support time</p>
              <p className="text-base font-normal text-gray-600 mt-4 sm:text-lg sm:mt-6">Whether
                you're just getting started or are a large enterprise, we have a plan for you.</p>
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
            <div className="mt-16 space-y-8 lg:mt-20">
              <div className="flex items-center justify-center text-center">
                <div className="relative inline-flex items-center justify-center gap-4">
                  <span className="block text-base font-semibold text-gray-900">Pay Monthly</span>
                  <div className="relative"><input aria-label="Interval" type="checkbox"
                                                   className="peer sr-only opacity-0"
                                                   id="intervalToggle"/><label
                      htmlFor="intervalToggle"
                      className="relative flex h-5 w-9 cursor-pointer items-center bg-gray-400 outline-gray-400 transition-colors rounded-full px-0.5 before:h-4 before:w-4 before:bg-white before:shadow before:transition-transform before:duration-300 before:rounded-full peer-checked:bg-success-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-success-500"><span
                      className="sr-only">Enable</span></label></div>
                  <span className="block text-base font-semibold text-gray-900">Pay Yearly<br/><span
                      className="text-sm font-semibold text-blue-600 sm:hidden">2 months free</span></span>
                  <div className="absolute hidden -bottom-4 -right-44 sm:block">
                    <div className="flex items-end">
                      <img className="h-12 w-auto" src="https://sitegpt.ai/images/arrow-icon.svg" alt=""/>
                        <p className="text-base font-semibold text-blue-600">2 months free</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-2xl">
                    <div className="flex h-full flex-col space-y-6 p-8">
                      <div className="flex items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                          <svg aria-hidden="true" className="h-8 w-8 shrink-0 text-gray-500"
                               xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                               viewBox="0 0 256 256">
                            <path d="M96,240l16-80L48,136,160,16,144,96l64,24Z"
                                  opacity="0.2"></path>
                            <path
                                d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path>
                          </svg>
                          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Free</h2>
                        </div>
                        <div className="flex items-end gap-0.5">
                          <p className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$0</p>
                          <p className="text-3xl font-medium tracking-tight text-gray-500">/mo</p>
                        </div>
                      </div>
                      <hr className="border-gray-200"/>
                        <div className="flex-1">
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Includes:</p>
                          <div className="grid grid-cols-1 gap-x-6 gap-y-4 mt-4 lg:grid-cols-2">
                            <ul className="text-base font-normal text-gray-900 space-y-4">
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">10 verified emails</span>
                                <div className="relative shrink-0">
                                  <button type="button" aria-label="You receive 500 messages each month included
                                          in this plan. You can choose GPT-3.5 or GPT-4
                                          for those messages and toggle between them at
                                          any time. Should you exceed this limit, you
                                          can buy packs of 500 additional messages for
                                          $50/mo." data-cooltipz-dir="top-right"
                                          data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">CSV export</span>
                                <div className="relative shrink-0">
                                  <button type="button"
                                          aria-label="Train your chatbots with up to 10,000 individual web pages."
                                          data-cooltipz-dir="top-right" data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">Verified emails</span>
                                <div className="relative shrink-0">
                                  <button type="button"
                                          aria-label="Create and deploy up to 10 individual chatbots on this plan."
                                          data-cooltipz-dir="top-right" data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">500 file uploads</span>
                                <div className="relative shrink-0">
                                  <button type="button"
                                          aria-label="Train your chatbots with up to 500 file uploads."
                                          data-cooltipz-dir="top-right" data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                            </ul>
                            <ul className="text-base font-normal text-gray-900 space-y-4">
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">&lt; 10 MB per file</span>
                                <div className="relative shrink-0">
                                  <button type="button"
                                          aria-label="Each file you upload should not exceed a size of 10 megabytes. Files larger than this limit might not be accepted or could cause performance issues."
                                          data-cooltipz-dir="top-right" data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">API Access</span>
                                <div className="relative shrink-0">
                                  <button type="button"
                                          aria-label="Access our API to integrate and automate tasks using our system programmatically."
                                          data-cooltipz-dir="top-right" data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">Unlimited integrations</span>
                                <div className="relative shrink-0">
                                  <button type="button"
                                          aria-label="Coming soon: Google Chat, Zendesk, Messenger, Crisp, Intercom, Shopify, WordPress, WhatsApp."
                                          data-cooltipz-dir="top-right" data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">Unlimited users</span>
                                <div className="relative shrink-0">
                                  <button type="button"
                                          aria-label="You can invite all your team members to your account, allowing your whole team to collaborate and access the platform without any restrictions."
                                          data-cooltipz-dir="top-right" data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <button type="button"
                                  className="inline-flex w-full  items-center justify-center gap-2 bg-blue-600 text-sm font-semibold text-white shadow-sm transition-all duration-150 rounded-lg px-3 py-2.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get
                            started
                          </button>
                        </div>
                    </div>
                  </div>
                  <div className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-2xl">
                    <div className="flex h-full flex-col space-y-6 p-8">
                      <div className="flex items-center justify-between gap-6">
                        <div className="flex items-center gap-2">
                          <svg aria-hidden="true" className="h-8 w-8 shrink-0 text-gray-500"
                               xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                               viewBox="0 0 256 256">
                            <path
                                d="M216,56v58.77c0,84.18-71.31,112.07-85.54,116.8a7.54,7.54,0,0,1-4.92,0C111.31,226.86,40,199,40,114.79V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z"
                                opacity="0.2"></path>
                            <path
                                d="M80.57,117A8,8,0,0,1,91,112.57l29,11.61V96a8,8,0,0,1,16,0v28.18l29-11.61A8,8,0,1,1,171,127.43l-30.31,12.12L158.4,163.2a8,8,0,1,1-12.8,9.6L128,149.33,110.4,172.8a8,8,0,1,1-12.8-9.6l17.74-23.65L85,127.43A8,8,0,0,1,80.57,117ZM224,56v58.77c0,89.62-75.82,119.34-91,124.39a15.44,15.44,0,0,1-10,0c-15.2-5-91-34.76-91-124.38V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56Zm-16,0L48,56v58.79c0,78.5,66.47,104.68,80,109.18,13.66-4.56,80-30.76,80-109.18Z"></path>
                          </svg>
                          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Elite</h2>
                        </div>
                        <div className="flex items-end gap-0.5">
                          <p className="hidden text-base font-medium tracking-tight text-gray-500 pr-2 sm:inline">Starts
                            at</p>
                          <p className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$999</p>
                          <p className="text-3xl font-medium tracking-tight text-gray-500">/mo</p>
                        </div>
                      </div>
                      <hr className="border-gray-200"/>
                        <div className="flex-1">
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Includes:</p>
                          <div className="grid grid-cols-1 gap-x-6 gap-y-4 mt-4 lg:grid-cols-2">
                            <ul className="text-base font-normal text-gray-900 space-y-4">
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">Everything in Pro</span>
                                <div className="relative shrink-0"></div>
                              </li>
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">Unlimited messages per month</span>
                                <div className="relative shrink-0">
                                  <button type="button"
                                          aria-label="With this plan, you can send and receive an unlimited number of messages each month without any additional charges or limitations."
                                          data-cooltipz-dir="top-right" data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">10,000+ training web pages</span>
                                <div className="relative shrink-0">
                                  <button type="button"
                                          aria-label="Training your chatbots with more than 10,000 web pages, providing a broader scope for refinement and accuracy."
                                          data-cooltipz-dir="top-right" data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                            </ul>
                            <ul className="text-base font-normal text-gray-900 space-y-4">
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">10+ chatbots</span>
                                <div className="relative shrink-0">
                                  <button type="button"
                                          aria-label="Suitable for larger enterprises or projects that require multiple chat interfaces."
                                          data-cooltipz-dir="top-right" data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span className="flex-1">Priority support</span>
                                <div className="relative shrink-0">
                                  <button type="button"
                                          aria-label="Your inquiries and support tickets will be given top priority. Our team will address your concerns with expedited response times and dedicated assistance."
                                          data-cooltipz-dir="top-right" data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                              <li className="flex items-start justify-between gap-2">
                                <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-600"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                     viewBox="0 0 256 256">
                                  <path
                                      d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>
                                </svg>
                                <span
                                    className="flex-1">Use your own domain for embed scripts</span>
                                <div className="relative shrink-0">
                                  <button type="button"
                                          aria-label="Personalize and brand your integrations by using your own domain name when embedding scripts, offering a more professional look and feel to your clients or users."
                                          data-cooltipz-dir="top-right" data-cooltipz-size="medium"
                                          className="group cursor-pointer p-1">
                                    <svg aria-hidden="true"
                                         className="h-4 w-4 text-gray-400 group-hover:text-gray-600"
                                         xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                         viewBox="0 0 256 256">
                                      <path
                                          d="M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div><a target="_blank" rel="noopener noreferrer"
                                href="https://cal.com/sitegpt/30min"
                                className="isomorphic-link isomorphic-link--external inline-flex w-full items-center justify-center gap-2 bg-white text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 transition-all duration-150 rounded-lg px-3 py-2.5 hover:bg-blue-600 hover:text-white">Contact
                          Us</a></div>
                    </div>
                  </div>
                </div>
                <div
                    className="max-w-xl bg-white shadow-sm ring-1 ring-inset ring-gray-200 mx-auto rounded-2xl">
                  <div className="px-8 py-6">
                    <div className="flex items-center justify-between gap-6">
                      <h2 className="text-xl font-semibold text-gray-900">Remove SiteGPT
                        Branding</h2>
                      <div className="flex items-end gap-0.5">
                        <p className="text-4xl font-semibold tracking-tight text-gray-900">+$50</p>
                        <p className="text-xl font-medium text-gray-500">/mo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-600">Pricing is exclusive of taxes and
                  additional local tax may be collected depending on your region.</p>
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
            <form method="get" action="/pricing?interval=month"
                  className="mt-12 border-b border-gray-200 sm:mt-16">
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
      </main>
  )
}