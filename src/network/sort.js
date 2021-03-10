import { request } from './request'

export function getCategoryDatas() {
  return request({
    url: '/category'
  })
}
export function getCategoryGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}