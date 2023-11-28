import moment from "moment";

export const getFormattedDate = (date: number) => {
  return moment.unix(date).format("llll")
}

export const getCreatedAt = (timestamp: number) => {
  if (timestamp) {
    return moment.unix(timestamp).format("YYYY-MM-DD HH:mm:ss")
  }
  return ''
}

// export const getFunctionPath = (codeId: string, projectId: string): string => {
//   return `/hub/projects/${projectId}/edit:${codeId}`
// }

// export const createNewFunction = async (router: AppRouterInstance, authUser?: User, projectId?: string) => {
//   const token = await getAuthToken(authUser)
//   if (token) {
//     new ProjectApi(headerConfig(token))
//     .createFunction(projectId ? projectId : '')
//     .then(result => {
//       const response : CodeUpdateResult = result.data
//       DEBUG("CodeUpdateResult: ", response)
//       router.push(getFunctionPath(response.code_id as string, response.project_id as string))
//     }).catch(e => {
//       ERROR(e.message)
//     })
//   }
// }
