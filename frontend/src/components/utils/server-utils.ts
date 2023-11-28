import {EmailSearchResults, LeadApi, TaskId} from "@/src/codegen";
import {getAuthToken, headerConfig} from "@/src/components/utils/headerConfig";
import {User} from "firebase/auth";
import {auth} from "@/src/components/utils/firebase-setup";
import {NextRouter, useRouter} from "next/router";

export const DEBUG = (...args: any[]) => {
  if (process.env.NODE_ENV !== "production") {
    console.debug(args)
  }
}

export const ERROR = (...args: any[]) => {
  if (process.env.NODE_ENV !== "production") {
    console.error(args)
  }
}

// export const getExploreResult = async (pageOffset: number): Promise<ClientPageableResponse> => {
//   try {
//     const token = 'fh-anon-YmaGJfzBpgjWbgWiphfF7RfGNirNtQT7UJ2Ig5jB2SffW7'
//     const response = await new ProjectApi(
//         headerConfig(token))
//     .getAllPublicFunctions({
//       page_num: pageOffset,
//       limit: PAGE_LIMIT
//     })
//     const result = response.data
//     let prev = pageOffset - 1, next = pageOffset + 1
//     if (result && result.numPages && result.numPages <= next) {
//       next = pageOffset
//     }
//     if (prev < 1) {
//       prev = 1
//     }
//     if (next == 1) {
//       next++
//     }
//     return {
//       results: result,
//       prev: prev,
//       next: next
//     }
//   } catch (e) {
//     ERROR(e)
//   }
//   return { prev: 0, next: 0, results: {}}
// }

export const getSearchResults = async (query: string, authUser: User): Promise<TaskId> => {
  try {
    // console.log("auth user: ", authUser)
    const token = await getAuthToken(authUser)
    const response = await new LeadApi(
        headerConfig(token))
    .submitSearchQuery({
      query: query,
      webpage_only: false,
      document_id: "hello world!"
      // page_num: pageOffset,
      // limit: PAGE_LIMIT
    })
    return response.data
  } catch (e) {
    ERROR(e)
  }
  return null
}

export const getAllContacts = async (authUser: User): Promise<EmailSearchResults> => {
  const token = await getAuthToken(authUser)
  return (await new LeadApi(headerConfig(token)).getAllUserLeads()).data
}

export const logout = (router: NextRouter) => {
  if (auth) {
    console.log(auth)
    auth.signOut().then(_ => {
      router.push("/login").catch(e => ERROR(e))
    }).catch(e => ERROR(e))
  }
}