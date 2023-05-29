import request from './request'
const api_space_token = 'rsyfvodqxh51ccwn8ce9kbxhps2ufgfd'

// export function weatherNow(params) {
//   return request({
//     url: 'https://devapi.qweather.com/v7/weather/now?location=101210106&key=a1354e6d3a0943ffb105e2d0c487c80a',
//     method: 'get',
//     params
//   })
// }

const isMockNow = true
const mockNow = {
  status: 0,
  result: {
    location: {
      areacode: '101210106',
      name: '余杭',
      country: '中国',
      path: '余杭,杭州市,浙江省,中国'
    },
    realtime: {
      text: '晴',
      code: '00',
      temp: 26.7,
      feels_like: 26,
      rh: 53,
      wind_class: '3级',
      wind_speed: 3.9,
      wind_dir: '东北风',
      wind_angle: 60,
      prec: 0,
      prec_time: '2023-05-25 18:00:00',
      clouds: 3,
      vis: 15200,
      pressure: 999,
      dew: 16,
      uv: 0,
      weight: 5,
      brief: '略显闷热',
      detail: '天气略微有点儿热哦'
    },
    last_update: '2023-05-25 18:45'
  }
}

export function weatherNow(params) {
  if (isMockNow) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockNow)
      }, 50)
    })
  }
  return request({
    url: 'https://eolink.o.apispace.com/456456/weather/v001/now?areacode=101210106',
    method: 'get',
    headers: {
      'X-APISpace-Token': api_space_token,
      'Authorization-Type': 'apikey'
    },
    params
  })
}
