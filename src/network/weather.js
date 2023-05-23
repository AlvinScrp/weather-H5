import request from './request'

export function weatherNow(params) {
  return request({
    url: 'https://devapi.qweather.com/v7/weather/now?location=101210106&key=a1354e6d3a0943ffb105e2d0c487c80a',
    method: 'get',
    params
  })
}
