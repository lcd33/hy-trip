import instance from '../request'

export function getDetail(houseId) {
  return instance.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}
