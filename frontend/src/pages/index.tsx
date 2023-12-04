import SearchBox from "@/src/components/search";
import {
  signInAnonymously
} from "@firebase/auth";
import {auth} from "@/src/components/utils/firebase-setup";
import {DEBUG, ERROR} from "@/src/components/utils/server-utils";
import {useEffect} from "react";
import {useAuthContext} from "@/src/components/context/AuthContext";

export default function Home() {
  const {authUser} = useAuthContext()

  useEffect(() => {
    if (!authUser) {
      signInAnonymously(auth)
      .then(result => {
        DEBUG("Signed in")
      }).catch(e => {
        ERROR(e)
      })
    }
  }, [])

  return (
      <main>
        <section
            className="py-6 sm:py-16 lg:py-10 xl:py-12">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto text-center lg:max-w-4xl">
              <p className="font-display text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-normal">Generate domains <span
                  className="text-blue-600">instantly</span></p>
              <p className="max-w-3xl text-base font-normal text-gray-700 mx-auto mt-5 sm:text-lg lg:text-xl leading-normal">Discover the perfect domain for any use case. Powered by AI.</p>
            </div>

            <div
                className="flex flex-col gap-4 mt-3 sm:flex-row sm:items-center sm:justify-center sm:gap-5 sm:mt-8">
              <SearchBox/>
            </div>
            {/*<div className="max-w-6xl mx-auto mt-16 lg:mt-20"><img*/}
            {/*    className="h-full w-full object-cover shadow-lg ring-1 ring-blue-200 rounded-2xl"*/}
            {/*    src="https://sitegpt.ai/images/features-mockup.png" alt=""/></div>*/}
          </div>
        </section>
      </main>
  )
}