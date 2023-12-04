import React from "react";

export default function Footer() {
  return (
      <footer className="py-12 sm:py-16 lg:pt-20 xl:pt-24 mt-40">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-7">
            <div className="col-span-2 shrink-0 md:col-span-3">
              <a aria-current="page" className="isomorphic-link isomorphic-link--internal "
                 href="/"><img className="h-8 w-auto" src="https://sitegpt.ai/images/logo-full.svg" alt=""/></a>
              <p className="text-base font-normal text-gray-900 mt-6">Instantly answer your
                visitors' questions with a personalized chatbot trained on your website content.</p>
              <div>
                <div
                    className="inline-flex items-center gap-2 text-base font-medium text-blue-600 mt-6 hover:underline">
                  <svg aria-hidden="true" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                  </svg>
                  bhanu@sitegpt.ai
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm font-semibold text-blue-600">Company</p>
              <ul className="mt-6 space-y-4">
                <li><a
                    className="isomorphic-link isomorphic-link--internal inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"
                    href="/terms">FAQ</a></li>
                <li><a
                    className="isomorphic-link isomorphic-link--internal inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"
                    href="/terms">About Us</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm font-semibold text-blue-600">Legal</p>
              <ul className="mt-6 space-y-4">
                <li><a
                    className="isomorphic-link isomorphic-link--internal inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"
                    href="/terms">Terms &amp; Conditions</a></li>
                <li><a
                    className="isomorphic-link isomorphic-link--internal inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"
                    href="/terms">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div
              className="flex flex-col items-center gap-4 mt-12 sm:mt-16 md:flex-row md:justify-between">
            <p className="text-sm font-medium text-gray-600">© InstantDomains 2023 . All rights
              reserved</p>
          </div>
        </div>
      </footer>
  )
}
