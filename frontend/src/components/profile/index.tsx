import React from "react";
import {useAuthContext} from "@/src/components/context/AuthContext";
export default function Profile() {
  const {authUser} = useAuthContext()

  return (
      <main className="min-w-0 flex-1 overflow-y-auto bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
          <div className="space-y-8">
            <div className="">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Profile</h1>
              <p className="text-sm font-normal text-gray-500 mt-1">View and update your account
                details</p>
            </div>
            <div className="max-w-xl space-y-8">
              <div>
                <button type="submit" name="_action" value="UPDATE_USER" className="collapse">Save
                </button>
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="inline-flex flex-col space-y-2">
                      <div
                          className="inline-flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden bg-white rounded-full">
                        <img src={authUser.photoURL} alt="User" />
                        {/*<p className="text-4xl font-medium text-white">K</p>*/}
                      </div>
                    </div>
                    {/*<div className="space-y-2"><label className="block"><span*/}
                    {/*    className="block text-sm font-medium text-gray-900">Avatar</span><input*/}
                    {/*    className="mt-2 block w-full text-sm file:cursor-pointer file:font-semibold file:shadow-sm file:ring-1 file:ring-inset file:ring-gray-300 file:transition-all file:duration-200 file:mr-4 file:rounded-lg file:border-0 file:px-2.5 file:py-2 text-gray-500 border-gray-300 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 focus:ring-gray-900 focus:border-gray-900"*/}
                    {/*    name="profilePic" id="profilePic" aria-label="Avatar" type="file"/></label>*/}
                    {/*</div>*/}
                  </div>
                  <div className="">
                    <div className="flex justify-between"><label htmlFor="name"
                                                                 className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    </div>
                    <div className="mt-2">
                      <div className="relative">
                        <div
                            className="pointer-events-none absolute flex items-center inset-y-0 left-0 pl-3"></div>
                        <input
                            className="disabled:cursor-not-allowed disabled:opacity-50 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-xl border-0 py-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 caret-blue-600 focus:ring-blue-600"
                            disabled={true}
                            name="name" id="name" aria-label="Name" type="text" placeholder="John"
                            value={authUser.displayName}/>
                          <div
                              className="pointer-events-none absolute flex items-center inset-y-0 right-0 pr-3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex justify-between"><label htmlFor="email"
                                                                 className="block text-sm font-medium leading-6 text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5">Email</label>
                    </div>
                    <div className="mt-2">
                      <div className="relative">
                        <div
                            className="pointer-events-none absolute flex items-center inset-y-0 left-0 pl-3"></div>
                        <input

                            className="disabled:cursor-not-allowed disabled:opacity-50 block w-full text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 rounded-xl border-0 py-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 caret-blue-600 focus:ring-blue-600"
                            name="email" id="email" aria-label="Email" required={false} type="email"
                            placeholder="you@example.com" disabled={true}
                            value={authUser.email}/>
                          <div
                              className="pointer-events-none absolute flex items-center inset-y-0 right-0 pr-3"></div>
                      </div>
                    </div>
                    {/*<p className="text-sm leading-6 text-gray-600 mt-2">Contact support@InstantDomains.net*/}
                    {/*  to change the email address.</p>*/}
                  </div>
                  {/*<button type="submit" name="_action" value="UPDATE_USER"*/}
                  {/*        className="inline-flex w-full items-center justify-center gap-2 bg-blue-600 text-sm font-semibold text-white shadow-sm transition-all duration-150 rounded-lg px-3 py-2.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto">*/}
                  {/*  <span>Save Changes</span></button>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}