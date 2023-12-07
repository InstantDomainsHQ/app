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
