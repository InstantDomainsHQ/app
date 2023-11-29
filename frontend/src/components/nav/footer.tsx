import React from "react";

import {useAuthContext} from "@/src/components/context/AuthContext";
import {usePathname} from "next/navigation";

export default function Footer() {
  const {authUser} = useAuthContext()
  const pathname = usePathname()

  const showFooter = () => {
    if (authUser || pathname.includes("/login")) return false
    return true
  }

  if (!showFooter()) {
    return <></>
  }

  return (
      <footer className="bg-blue-50 py-12 sm:py-16 lg:pt-20 xl:pt-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-7">
            <div className="col-span-2 shrink-0 md:col-span-3">
              <a aria-current="page" className="isomorphic-link isomorphic-link--internal "
                 href="/"><img className="h-8 w-auto" src="https://sitegpt.ai/images/logo-full.svg" alt=""/></a>
              <p className="text-base font-normal text-gray-900 mt-6">Instantly answer your
                visitors' questions with a personalized chatbot trained on your website content.</p>
              <div
                  className="inline-flex items-center justify-center transition-all duration-150 mt-6 hover:-translate-y-1 hover:shadow-md lg:justify-start">
                <img className="h-12 w-auto"
                     src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=387564&amp;theme=light&amp;period=daily"
                     alt="SiteGPT - ChatGPT for every website | Product Hunt"/></div>
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
            {/*<div className="md:col-span-2">*/}
            {/*  <p className="text-sm font-semibold text-blue-600">Product</p>*/}
            {/*  <ul className="mt-6 space-y-4">*/}
            {/*    <li><a*/}
            {/*        className="isomorphic-link isomorphic-link--internal inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"*/}
            {/*        href="/features">Features</a></li>*/}
            {/*    <li><a*/}
            {/*        className="isomorphic-link isomorphic-link--internal inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"*/}
            {/*        href="/integrations">Integrations</a></li>*/}
            {/*    <li><a*/}
            {/*        className="isomorphic-link isomorphic-link--internal inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"*/}
            {/*        href="/pricing">Pricing</a></li>*/}
            {/*    <li><a target="_blank" rel="noopener noreferrer" href="/blog"*/}
            {/*           className="isomorphic-link isomorphic-link--external inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700">Blog</a>*/}
            {/*    </li>*/}
            {/*    <li><a href="https://sitegpt.ai/docs/api-reference/getting-started"*/}
            {/*           className="inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"*/}
            {/*           target="_blank" rel="noopener noreferrer">API Docs</a></li>*/}
            {/*    <li><a*/}
            {/*        className="isomorphic-link isomorphic-link--internal inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700"*/}
            {/*        href="/contact-us">Contact Us</a></li>*/}
            {/*    <li><a target="_blank" rel="noopener noreferrer"*/}
            {/*           href="https://sitegpt.getrewardful.com/signup"*/}
            {/*           className="isomorphic-link isomorphic-link--external inline-flex text-base font-medium text-gray-900 transition-all duration-150 hover:translate-x-1 hover:text-gray-700">Affiliates</a>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
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
            {/*<ul className="flex items-center justify-center gap-8 md:justify-end">*/}
            {/*  <li>*/}
            {/*    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/SiteGPT"*/}
            {/*       className="isomorphic-link isomorphic-link--external text-gray-900 transition-all duration-150 hover:text-blue-600">*/}
            {/*      <span className="sr-only">Twitter</span>*/}
            {/*      <svg aria-hidden="true" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"*/}
            {/*           fill="currentColor" viewBox="0 0 256 256">*/}
            {/*        <path*/}
            {/*            d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path>*/}
            {/*      </svg>*/}
            {/*    </a>*/}
            {/*  </li>*/}
            {/*  <li>*/}
            {/*    <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@SiteGPT"*/}
            {/*       className="isomorphic-link isomorphic-link--external text-gray-900 transition-all duration-150 hover:text-blue-600">*/}
            {/*      <span className="sr-only">YouTube</span>*/}
            {/*      <svg aria-hidden="true" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg"*/}
            {/*           fill="currentColor" viewBox="0 0 256 256">*/}
            {/*        <path*/}
            {/*            d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-72.11,61.81-48,32A4,4,0,0,1,108,160V96a4,4,0,0,1,6.22-3.33l48,32a4,4,0,0,1,0,6.66Z"></path>*/}
            {/*      </svg>*/}
            {/*    </a>*/}
            {/*  </li>*/}
            {/*</ul>*/}
          </div>
        </div>
      </footer>
  )
}
