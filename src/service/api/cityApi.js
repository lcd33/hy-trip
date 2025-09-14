import instance from '../request'

export function getCityAll() {
  return instance.request({
    url: '/city/all'
  })
}