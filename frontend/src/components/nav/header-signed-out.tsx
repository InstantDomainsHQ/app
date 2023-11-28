import React from "react";
export default function HeaderSignedOut() {
  return (
      <header
          className="sticky z-50 bg-white/90 backdrop-blur-lg inset-x-0 top-0 border-b border-gray-100 py-3">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0"><a aria-current="page"
                                         className="isomorphic-link isomorphic-link--internal flex items-center"
                                         href="/"><img className="h-6 w-auto md:h-7"
                                                       src="https://sitegpt.ai/images/logo-full.svg" alt=""/></a></div>
            <div className="hidden items-center justify-center gap-4 lg:flex">

              {/*<a*/}
              {/*  className="isomorphic-link isomorphic-link--internal text-sm font-semibold leading-5 transition-all duration-150 rounded-lg px-2 py-1.5 text-gray-950 hover:bg-gray-100 hover:text-blue-600"*/}
              {/*  href="/features">Features</a>*/}


              {/*<a*/}
              {/*  className="isomorphic-link isomorphic-link--internal text-sm font-semibold leading-5 transition-all duration-150 rounded-lg px-2 py-1.5 text-gray-950 hover:bg-gray-100 hover:text-blue-600"*/}
              {/*  href="/integrations">Integrations</a>*/}


              {/*<a*/}
              {/*  className="isomorphic-link isomorphic-link--internal text-sm font-semibold leading-5 transition-all duration-150 rounded-lg px-2 py-1.5 text-gray-950 hover:bg-gray-100 hover:text-blue-600"*/}
              {/*  href="/pricing">Pricing</a>*/}

              {/*<a*/}
              {/*  className="isomorphic-link isomorphic-link--internal text-sm font-semibold leading-5 transition-all duration-150 rounded-lg px-2 py-1.5 text-gray-950 hover:bg-gray-100 hover:text-blue-600"*/}
              {/*  href="/demo">Demo</a>*/}

              {/*<a target="_blank" rel="noopener noreferrer" href="/blog"*/}
              {/*                          className="isomorphic-link isomorphic-link--external text-sm font-semibold leading-5 text-gray-950 transition-all duration-150 rounded-lg px-2 py-1.5 hover:bg-gray-100 hover:text-blue-600">Blog</a>*/}
            </div>
            <div className="flex items-center justify-end gap-4">
              {/*<a*/}
              {/*  className="isomorphic-link isomorphic-link--internal hidden items-center justify-center bg-white text-sm font-semibold leading-5 text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 transition-all duration-150 rounded-lg px-3 py-1.5 hover:bg-blue-50 sm:inline-flex"*/}
              {/*  href="/login">Sign In</a>*/}
              {/*<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>*/}

              <a href="/login"><button className="inline-flex items-center justify-center bg-blue-600 text-sm font-semibold leading-5 text-white shadow-sm transition-all duration-150 rounded-lg px-3 py-1.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Sign In</button></a></div>
          </div>
        </div>
      </header>
  )
}
