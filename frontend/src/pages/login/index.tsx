import React, {useEffect} from "react";
import {useAuthContext} from "@/src/components/context/AuthContext";
import {useRouter} from "next/router";
import {DEBUG, ERROR} from "@/src/components/utils/server-utils";
import {
  Auth,
  AuthProvider, GithubAuthProvider, GoogleAuthProvider,
  indexedDBLocalPersistence,
  setPersistence,
  signInWithPopup
} from "@firebase/auth";
import {auth} from "@/src/components/utils/firebase-setup";

export default function Login() {
  const {authUser} = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (authUser) router.push("/dashboard/search").catch(e => ERROR(e))
  }, [authUser])

  /**
   * Sign in user using Google login pop screen. After login, persist the user
   * object in indexDB so that the session is not terminated if the user refreshes
   * the page or closes the browser.
   */
  const firebaseSignIn = (provider: AuthProvider) => {
    if (auth) {
      setPersistence(auth, indexedDBLocalPersistence)
      .then(() => {
        // In local persistence will be applied to the signed in Google user
        return signInWithPopup(auth as Auth, provider)
        .then((result) => {
          if (result.user) {
            DEBUG("Login Success: ", result.user)
          }
        }).catch(e => {
          ERROR(e.message)
        });
      })
      .catch((e) => {
        ERROR(e.message)
      });
    }
  }

  return (
      <div>
        <section >
          <div
              className="flex flex-col items-center justify-center mx-auto md:mt-40">
            <div
                className="relative h-fit w-96 overflow-auto rounded-lg border  bg-white px-5 py-16">
              <div className="flex justify-center">
                <div className="flex items-center mb-6 text-2xl font-semibold text-black dark:text-black">
                  Sign In
                </div>
              </div>
              <div className="mt-2">
                <button onClick={() => firebaseSignIn(new GoogleAuthProvider())}
                        className="mx-auto mt-2 flex h-[46px] w-[256px] items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    <path fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                    <path fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                    <path fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  </svg>
                  <span className="mx-auto">Sign in with Google</span></button>

                <button onClick={() => firebaseSignIn(new GithubAuthProvider())}
                        className="mx-auto mt-2 flex h-[46px] w-[256px] items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <img src="/assets/image/github.svg" alt="GitHub" style={{width: "1.25rem", height: "1.25rem", color: "#eaecf0"}}/>
                  <span className="mx-auto">Sign in with Github</span></button>

                <div className="py-8 text-center">
                <span className="text-xs font-light text-zinc-400">
                </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}