import instance from '../request/index.js'

export function getHomeSuggests() {
  return instance.request({
    url: '/home/hotSuggests',
    method: 'get'
  })
}

export function getHomeCategories() {
  return instance.request({
    url: '/home/categories',
    method: 'get'
  })
}

export function getHomeList(page) {
  return instance.request({
    url: 'home/houselist',
    method: 'get',
    params: {
      page: page
    }
  })
}
