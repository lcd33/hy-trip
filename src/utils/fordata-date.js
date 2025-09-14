import dayjs from "dayjs"

export function fordateDate(date) {
  return dayjs(date).format('MM月DD日')
}