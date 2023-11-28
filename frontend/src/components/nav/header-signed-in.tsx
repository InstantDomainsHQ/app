import React from "react";
import {useAuthContext} from "@/src/components/context/AuthContext";
import {useRouter} from "next/router";
import {ERROR, logout} from "@/src/components/utils/server-utils";

export default function HeaderSignedIn() {
  const {authUser} = useAuthContext()
  const router = useRouter()

  return (
      <header className="sticky z-50 bg-white/90 backdrop-blur-lg inset-x-0 top-0 border-b border-gray-100 py-3">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="shrink-0 mr-auto lg:mx-0"><a
                className="isomorphic-link isomorphic-link--internal flex" href="/"><img
                className="h-6 w-auto" src="https://sitegpt.ai/images/logo-full.svg" alt=""/></a></div>
            <div className="hidden gap-3 lg:flex lg:items-center lg:justify-center">
              <a className="isomorphic-link isomorphic-link--internal group inline-flex items-center justify-center gap-1.5 text-sm font-medium transition-all duration-150 rounded-lg px-2 py-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                 href="/dashboard">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                              strokeLinejoin="round" strokeWidth="2"
                                                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Dashboard
              </a>
              <a className="isomorphic-link isomorphic-link--internal group inline-flex items-center justify-center gap-1.5 text-sm font-medium transition-all duration-150 rounded-lg px-2 py-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                 href="/dashboard/all-contacts">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                              strokeLinejoin="round" strokeWidth="2"
                                                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                All Contacts
              </a>
              <a className="isomorphic-link isomorphic-link--internal group inline-flex items-center justify-center gap-1.5 text-sm font-medium transition-all duration-150 rounded-lg px-2 py-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                 href="/dashboard/billing">
                <img src="/assets/image/credit-card.svg" alt="Billing" style={{width: "1.25rem", height: "1.25rem", color: "#eaecf0"}}/>
                Billing
              </a>
              <a aria-current="page"
                 className="isomorphic-link isomorphic-link--internal group inline-flex items-center justify-center gap-1.5 text-sm font-medium transition-all duration-150 rounded-lg px-2 py-1.5 bg-blue-50 text-blue-600"
                 href="/dashboard/profile">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                              strokeLinejoin="round" strokeWidth="2"
                                                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                Profile
              </a>
            </div>
            <div className="flex items-center">
              <details className="menu-details relative">
                <summary
                    className="group inline-flex cursor-pointer items-center justify-center gap-1.5 text-sm font-medium text-gray-600 transition-all duration-150 rounded-lg px-2 py-1.5 hover:bg-gray-100 hover:text-gray-900"
                    id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <img className="w-7 h-7 rounded-full" id="avatarButton" data-dropdown-toggle="userDropdown"  data-dropdown-placement="bottom-start"
                       src={authUser?.photoURL as string}
                       alt="User"/>
                  {authUser.displayName}
                  <svg aria-hidden="true"
                       className="h-3 w-3 text-gray-500 transition-all duration-150 group-hover:text-gray-900"
                       xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                    <path
                        d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
                  </svg>
                </summary>
                <div
                    className="absolute z-10 whitespace-nowrap bg-white shadow-xl right-0 top-8 mt-2 rounded-xl border border-gray-200">
                  <div className="border-b border-gray-200 py-1 lg:hidden">
                    <a className="isomorphic-link isomorphic-link--internal flex items-center gap-3 text-sm font-medium text-gray-600 transition-all duration-200 px-4 py-2 hover:bg-gray-100 hover:text-gray-900"
                       href="/dashboard">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                    strokeLinejoin="round" strokeWidth="2"
                                                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                      Dashboard
                    </a>
                    <a className="isomorphic-link isomorphic-link--internal flex items-center gap-3 text-sm font-medium text-gray-600 transition-all duration-200 px-4 py-2 hover:bg-gray-100 hover:text-gray-900"
                       href="/dashboard/all-contacts">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                    strokeLinejoin="round" strokeWidth="2"
                                                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                      All Contacts
                    </a>
                    <a className="isomorphic-link isomorphic-link--internal flex items-center gap-3 text-sm font-medium text-gray-600 transition-all duration-200 px-4 py-2 hover:bg-gray-100 hover:text-gray-900"
                       href="/dashboard/billing">
                      <img src="/assets/image/credit-card.svg" alt="Billing" style={{width: "1.25rem", height: "1.25rem", color: "#eaecf0"}}/>
                      Billing
                    </a>
                    <a className="isomorphic-link isomorphic-link--internal flex items-center gap-3 text-sm font-medium text-gray-600 transition-all duration-200 px-4 py-2 hover:bg-gray-100 hover:text-gray-900"
                       href="/dashboard/profile">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                    strokeLinejoin="round" strokeWidth="2"
                                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      Profile
                    </a>
                  </div>
                  <div className="py-1">
                    {/*<form method="post" action="/logout">*/}
                      <button onClick={() => logout(router)}
                              className="flex items-center gap-3 text-sm font-medium text-gray-600 transition-all duration-200 px-4 py-2 hover:bg-gray-100 hover:text-gray-900">
                        <svg aria-hidden="true" className="h-4 w-4 shrink-0"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                             viewBox="0 0 256 256">
                          <path d="M216,128l-40,40V88Z" opacity="0.2"></path>
                          <path
                              d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-82.34-40,40A8,8,0,0,1,168,168V136H104a8,8,0,0,1,0-16h64V88a8,8,0,0,1,13.66-5.66l40,40A8,8,0,0,1,221.66,133.66Zm-17-5.66L184,107.31v41.38Z"></path>
                        </svg>
                        Logout
                      </button>
                    {/*</form>*/}
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </header>
  )
}
