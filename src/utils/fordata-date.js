import dayjs from "dayjs"

// 日期格式化
export function fordateDate(date, format = 'MM月DD日') {
  return dayjs(date).format(format)
}
// 计算天数
export function fordateDay(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day')
}