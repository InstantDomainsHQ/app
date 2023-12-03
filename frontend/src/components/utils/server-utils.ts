import {DomainApi, DomainWhoIs} from "@/src/codegen";
import {getAuthToken, headerConfig} from "@/src/components/utils/headerConfig";
import {User} from "firebase/auth";
import {auth} from "@/src/components/utils/firebase-setup";
import {NextRouter} from "next/router";

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

export const getSearchResults = async (query: string, authUser: User): Promise<DomainWhoIs> => {
  try {
    const token = await getAuthToken(authUser)
    const response = await new DomainApi(headerConfig(token))
    .generateDomains({query: query})
    return response.data as DomainWhoIs
  } catch (e) {
    ERROR(e)
  }
  return null
}

export const getTlds = async (authUser: User): Promise<Array<string>> => {
  try {
    const token = await getAuthToken(authUser)
    const response = await new DomainApi(headerConfig(token))
    .getTlds()
    return response.data as Array<string>
  } catch (e) {
    ERROR(e)
  }
  return null
}

export const logout = (router: NextRouter) => {
  if (auth) {
    console.log(auth)
    auth.signOut().then(_ => {
      router.push("/login").catch(e => ERROR(e))
    }).catch(e => ERROR(e))
  }
}