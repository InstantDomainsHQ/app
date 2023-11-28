import {ReactNode} from "react";
import {useRouter} from "next/router";
import {logout} from "@/src/components/utils/server-utils";

export default function Sidebar({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
      <>
      <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar"
              aria-controls="separator-sidebar" type="button"
              className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

  <aside id="separator-sidebar"
         className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
         aria-label="Sidebar">
    <div className="h-full px-3 py-4 overflow-y-auto">
      <ul className="flex flex-col py-4 space-y-1 border border-gray-200 rounded-md" >
        <li>
          <a href="/dashboard"
             className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6">
            <span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                            strokeLinejoin="round" strokeWidth="2"
                                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Home</span>
          </a>
        </li>

        {/*<li>*/}
        {/*  <a href="/dashboard/all-emails"*/}
        {/*     className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6">*/}
        {/*    <span className="inline-flex justify-center items-center ml-4">*/}
        {/*      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
        {/*           xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"*/}
        {/*                                                    strokeLinejoin="round" strokeWidth="2"*/}
        {/*                                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>*/}
        {/*    </span>*/}
        {/*    <span className="ml-2 text-sm tracking-wide truncate">All Emails</span>*/}
        {/*    <span*/}
        {/*        className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>*/}
        {/*  </a>*/}
        {/*</li>*/}

        <li>
          <a href="/dashboard/all-contacts"
             className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6">
            <span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                            strokeLinejoin="round" strokeWidth="2"
                                                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">All Contacts</span>
            {/*<span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">12345560</span>*/}
          </a>
        </li>


        {/*<li className="px-5">*/}
        {/*  <div className="flex flex-row items-center h-8">*/}
        {/*    <div className="text-sm font-light tracking-wide text-gray-500">Folders</div>*/}
        {/*  </div>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a href="/dashboard/folders/xyz"*/}
        {/*     className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6">*/}
        {/*    <span className="inline-flex justify-center items-center ml-4">*/}
        {/*      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
        {/*           xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"*/}
        {/*                                                    strokeLinejoin="round" strokeWidth="2"*/}
        {/*                                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>*/}
        {/*    </span>*/}
        {/*    <span className="ml-2 text-sm tracking-wide truncate">Untitled</span>*/}
        {/*    <span*/}
        {/*        className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>*/}
        {/*  </a>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a href="#"*/}
        {/*     className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6">*/}
        {/*    <span className="inline-flex justify-center items-center ml-4">*/}
        {/*      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
        {/*           xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"*/}
        {/*                                                    strokeLinejoin="round" strokeWidth="2"*/}
        {/*                                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>*/}
        {/*    </span>*/}
        {/*    <span className="ml-2 text-sm tracking-wide truncate">Folder 2</span>*/}
        {/*    <span*/}
        {/*        className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>*/}
        {/*  </a>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a href="#"*/}
        {/*     className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6">*/}
        {/*    <span className="inline-flex justify-center items-center ml-4">*/}
        {/*      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
        {/*           xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"*/}
        {/*                                                    strokeLinejoin="round" strokeWidth="2"*/}
        {/*                                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>*/}
        {/*    </span>*/}
        {/*    <span className="ml-2 text-sm tracking-wide truncate">Folder 3</span>*/}
        {/*    <span*/}
        {/*        className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>*/}
        {/*  </a>*/}
        {/*</li>*/}
        {/*<li  className="justify-center items-center mx-auto relative flex flex-row items-center h-12 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent pr-6">*/}
        {/*    <div className="grid grid-cols- gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">*/}
        {/*      <div className="flex flex-col">*/}
        {/*        <a href="/dashboard/folders">*/}
        {/*          <button*/}
        {/*              className="text-xs rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">View All*/}
        {/*          </button>*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*      <div className="flex flex-col">*/}
        {/*        <button*/}
        {/*            className="text-xs rounded-lg bg-blue-600  px-4 py-2 font-medium  text-white outline-none hover:opacity-80 focus:ring">Add New*/}
        {/*        </button>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*</li>*/}



        <li className="px-5">
          <div className="flex flex-row items-center h-8">
            <div className="text-sm font-light tracking-wide text-gray-500">Manage</div>
          </div>
        </li>
        <li>
          <a href="/dashboard/profile"
             className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6">
            <span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                            strokeLinejoin="round" strokeWidth="2"
                                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
          </a>
        </li>
        {/*<li>*/}
        {/*  <a href="#"*/}
        {/*     className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6">*/}
        {/*    <span className="inline-flex justify-center items-center ml-4">*/}
        {/*      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
        {/*           xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"*/}
        {/*                                                    strokeLinejoin="round" strokeWidth="2"*/}
        {/*                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>*/}
        {/*    </span>*/}
        {/*    <span className="ml-2 text-sm tracking-wide truncate">Usage</span>*/}
        {/*  </a>*/}
        {/*</li>*/}
        <li>
          <a href="/dashboard/billing"
             className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6">
            <span className="inline-flex justify-center items-center ml-4">
            <img src="/assets/image/credit-card.svg" alt="Billing" style={{width: "1.25rem", height: "1.25rem", color: "#eaecf0"}}/>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Billing</span>
          </a>
        </li>
        {/*<li>*/}
        {/*  <a href="#"*/}
        {/*     className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6">*/}
        {/*    <span className="inline-flex justify-center items-center ml-4">*/}
        {/*      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"*/}
        {/*           xmlns="http://www.w3.org/2000/svg">*/}
        {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
        {/*              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>*/}
        {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
        {/*              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>*/}
        {/*      </svg>*/}
        {/*    </span>*/}
        {/*    <span className="ml-2 text-sm tracking-wide truncate">Settings</span>*/}
        {/*  </a>*/}
        {/*</li>*/}
        <li>
          <button onClick={() => logout(router)}
             className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6">
            <span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                            strokeLinejoin="round" strokeWidth="2"
                                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  </aside>
    <div className="p-4 sm:ml-64">
      <div className="p-4">
        {children}
      </div>
    </div>
  </>)
}
