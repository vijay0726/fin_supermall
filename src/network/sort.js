import { request } from './request'

export function getCategoryDatas() {
  return request({
    url: '/category'
  })
}