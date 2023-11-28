import React, {FC} from "react";
import {useAuthContext} from "@/src/components/context/AuthContext";

export interface BillingProps {

}

const Billing: FC<BillingProps> = (props) => {
  const {authUser} = useAuthContext()

  return (
      <main className="min-w-0 flex-1 overflow-y-auto bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
          <div className="space-y-8">
            <div className="">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Plans &amp; Billing</h1>
              <p className="text-sm font-normal text-gray-500 mt-1">View your plan and edit payment
                settings</p>
            </div>
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
              <div className="space-y-5">
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-gray-950">Current Plan</h2>
                  <p className="text-sm font-normal text-gray-500">{'You are currently logged in as ' + authUser?.email}</p>
                  <p className="text-sm font-normal text-gray-500"></p>
                  <p className="text-sm font-normal text-gray-500">Change your plan based on your
                    needs.</p>
                </div>
                <div className="bg-blue-50 shadow-sm transition-all duration-150 rounded-xl border border-blue-200 hover:shadow-md">
                  <input type="hidden" name="subscriptionId" value=""/><input type="hidden"
                                                                             name="interval"
                                                                             value="month"/><input
                      type="hidden" name="quantity" value="0"/>
                    <div className="p-6">
                      <p className="text-base font-semibold text-gray-900">You don't have any active
                        plan right now.</p>
                      <p className="text-sm font-medium text-gray-600 mt-1">Please subscribe to a
                        plan to continue using AnyEmailFinder.</p>
                      <div className="mt-5"><a
                          href="/pricing">
                        <button className="isomorphic-link isomorphic-link--internal inline-flex w-full items-center justify-center gap-2 bg-blue-600 text-sm font-semibold text-white shadow-sm transition-all duration-150 rounded-lg px-3 py-2.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed sm:w-auto">Get Started</button></a></div>
                    </div>
                </div>
              </div>
            </div>
            {/*<hr className="border-gray-200"/>*/}
              {/*<div className="space-y-5">*/}
              {/*  <div className="space-y-1">*/}
              {/*    <h2 className="text-lg font-semibold text-gray-950">Billing History</h2>*/}
              {/*    <p className="text-sm font-normal text-gray-500">You can find the receipts of all*/}
              {/*      of your transactions here.</p>*/}
              {/*  </div>*/}
              {/*  <div*/}
              {/*      className="flex items-center justify-center border-dashed bg-gray-50 rounded-xl border-2 border-gray-200 px-6 py-8 sm:p-12">*/}
              {/*    <div className="max-w-xs mx-auto text-center">*/}
              {/*      <img className="h-40 w-auto mx-auto" src="https://sitegpt.ai/images/invoices-empty-state.svg"*/}
              {/*           alt=""/>*/}
              {/*        <p className="text-lg font-semibold text-gray-950 mt-4">You don't have any*/}
              {/*          transactions yet.</p>*/}
              {/*        <p className="text-base font-medium text-gray-500 mt-2">Once you make some*/}
              {/*          payments, they will show up here.</p>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<hr className="border-gray-200"/>*/}
          </div>
        </div>
      </main>
  )
}
export default Billing;