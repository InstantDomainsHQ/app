import React from "react";
import Logo from "@/src/components/nav/Logo";

export default function Footer() {
  return (
      <footer className="py-12 sm:py-16 lg:pt-20 xl:pt-24 mt-40">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-7">
            <div className="col-span-2 shrink-0 md:col-span-3">
              <Logo/>
              <p className="text-base font-normal text-gray-900 mt-6">Effortlessly find the ideal domain for any purpose with our fast and user-friendly domain name generator.</p>
              <div>
                <div
                    className="inline-flex items-center gap-2 text-base font-medium text-blue-600 mt-6 hover:no-underline">
                  <svg aria-hidden="true" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                  </svg>
                  getinstantdomains@proton.me
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm font-semibold text-blue-600">Learn More</p>
              <ul className="mt-6 space-y-4">
                <li><a
                    className="hover:no-underline isomorphic-link isomorphic-link--internal inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"
                    href="/about">About Us</a></li>
                {/*<li><a*/}
                {/*    className="hover:no-underline isomorphic-link isomorphic-link--internal inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"*/}
                {/*    href="/faq">FAQ</a></li>*/}
              </ul>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm font-semibold text-blue-600">Legal</p>
              <ul className="mt-6 space-y-4">
                <li><a
                    className="hover:no-underline  isomorphic-link isomorphic-link--internal inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"
                    href="/terms">Terms</a></li>
                <li><a
                    className="hover:no-underline isomorphic-link isomorphic-link--internal inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"
                    href="/privacy">Privacy</a></li>
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
