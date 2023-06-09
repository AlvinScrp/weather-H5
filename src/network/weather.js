import request from './request'
const api_space_token = 'rsyfvodqxh51ccwn8ce9kbxhps2ufgfd'

// export function weatherNow(params) {
//   return request({
//     url: 'https://devapi.qweather.com/v7/weather/now?location=101210106&key=a1354e6d3a0943ffb105e2d0c487c80a',
//     method: 'get',
//     params
//   })
// }

const isMock = false
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
const mockHour = JSON.parse(JSON.stringify({
  'status': 0,
  'result': {
    'hourly_fcsts': [{
      'text': '多云',
      'code': '01',
      'temp_fc': 26,
      'wind_class': '<3级',
      'wind_speed': 2.5,
      'wind_dir': '西南风',
      'wind_angle': 231,
      'rh': 51,
      'prec': 0,
      'pressure': 1006,
      'clouds': 50,
      'feels_like': 26,
      'data_time': '2023-06-01 16:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 26,
      'wind_class': '<3级',
      'wind_speed': 2,
      'wind_dir': '西南风',
      'wind_angle': 234,
      'rh': 55,
      'prec': 0,
      'pressure': 1006,
      'clouds': 50,
      'feels_like': 26,
      'data_time': '2023-06-01 17:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 25,
      'wind_class': '<3级',
      'wind_speed': 2.8,
      'wind_dir': '西南风',
      'wind_angle': 224,
      'rh': 58,
      'prec': 0,
      'pressure': 1006,
      'clouds': 50,
      'feels_like': 25,
      'data_time': '2023-06-01 18:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 24,
      'wind_class': '3~4级',
      'wind_speed': 3.5,
      'wind_dir': '西南风',
      'wind_angle': 217,
      'rh': 62,
      'prec': 0,
      'pressure': 1006,
      'clouds': 50,
      'feels_like': 23,
      'data_time': '2023-06-01 19:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 23,
      'wind_class': '3~4级',
      'wind_speed': 4.3,
      'wind_dir': '西南风',
      'wind_angle': 214,
      'rh': 67,
      'prec': 0,
      'pressure': 1006,
      'clouds': 50,
      'feels_like': 22,
      'data_time': '2023-06-01 20:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 21,
      'wind_class': '3~4级',
      'wind_speed': 4.2,
      'wind_dir': '西南风',
      'wind_angle': 223,
      'rh': 73,
      'prec': 0,
      'pressure': 1006,
      'clouds': 50,
      'feels_like': 21,
      'data_time': '2023-06-01 21:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 20,
      'wind_class': '3~4级',
      'wind_speed': 4.3,
      'wind_dir': '西南风',
      'wind_angle': 232,
      'rh': 79,
      'prec': 0,
      'pressure': 1006,
      'clouds': 50,
      'feels_like': 19,
      'data_time': '2023-06-01 22:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 19,
      'wind_class': '3~4级',
      'wind_speed': 4.5,
      'wind_dir': '西南风',
      'wind_angle': 242,
      'rh': 87,
      'prec': 0,
      'pressure': 1006,
      'clouds': 50,
      'feels_like': 18,
      'data_time': '2023-06-01 23:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 18,
      'wind_class': '<3级',
      'wind_speed': 2.6,
      'wind_dir': '西风',
      'wind_angle': 252,
      'rh': 89,
      'prec': 0,
      'pressure': 1005,
      'clouds': 45,
      'feels_like': 18,
      'data_time': '2023-06-02 00:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 17,
      'wind_class': '<3级',
      'wind_speed': 1.4,
      'wind_dir': '西风',
      'wind_angle': 290,
      'rh': 92,
      'prec': 0,
      'pressure': 1005,
      'clouds': 41,
      'feels_like': 18,
      'data_time': '2023-06-02 01:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 17,
      'wind_class': '<3级',
      'wind_speed': 1.8,
      'wind_dir': '北风',
      'wind_angle': 4,
      'rh': 95,
      'prec': 0,
      'pressure': 1005,
      'clouds': 37,
      'feels_like': 17,
      'data_time': '2023-06-02 02:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 16,
      'wind_class': '<3级',
      'wind_speed': 2.4,
      'wind_dir': '西北风',
      'wind_angle': 328,
      'rh': 95,
      'prec': 0,
      'pressure': 1004,
      'clouds': 27,
      'feels_like': 16,
      'data_time': '2023-06-02 03:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 16,
      'wind_class': '3~4级',
      'wind_speed': 3.4,
      'wind_dir': '西北风',
      'wind_angle': 314,
      'rh': 96,
      'prec': 0,
      'pressure': 1004,
      'clouds': 19,
      'feels_like': 15,
      'data_time': '2023-06-02 04:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 16,
      'wind_class': '3~4级',
      'wind_speed': 4.7,
      'wind_dir': '西北风',
      'wind_angle': 304,
      'rh': 97,
      'prec': 0,
      'pressure': 1004,
      'clouds': 10,
      'feels_like': 14,
      'data_time': '2023-06-02 05:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 17,
      'wind_class': '3~4级',
      'wind_speed': 4.6,
      'wind_dir': '西北风',
      'wind_angle': 308,
      'rh': 86,
      'prec': 0,
      'pressure': 1004,
      'clouds': 10,
      'feels_like': 16,
      'data_time': '2023-06-02 06:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 18,
      'wind_class': '3~4级',
      'wind_speed': 4.5,
      'wind_dir': '西北风',
      'wind_angle': 312,
      'rh': 76,
      'prec': 0,
      'pressure': 1004,
      'clouds': 10,
      'feels_like': 17,
      'data_time': '2023-06-02 07:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 20,
      'wind_class': '3~4级',
      'wind_speed': 4.4,
      'wind_dir': '西北风',
      'wind_angle': 316,
      'rh': 66,
      'prec': 0,
      'pressure': 1004,
      'clouds': 10,
      'feels_like': 18,
      'data_time': '2023-06-02 08:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 22,
      'wind_class': '3~4级',
      'wind_speed': 4.9,
      'wind_dir': '西北风',
      'wind_angle': 323,
      'rh': 50,
      'prec': 0,
      'pressure': 1003,
      'clouds': 10,
      'feels_like': 21,
      'data_time': '2023-06-02 09:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 25,
      'wind_class': '3~4级',
      'wind_speed': 5.5,
      'wind_dir': '西北风',
      'wind_angle': 327,
      'rh': 31,
      'prec': 0,
      'pressure': 1003,
      'clouds': 10,
      'feels_like': 23,
      'data_time': '2023-06-02 10:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 28,
      'wind_class': '3~4级',
      'wind_speed': 6.1,
      'wind_dir': '西北风',
      'wind_angle': 332,
      'rh': 14,
      'prec': 0,
      'pressure': 1003,
      'clouds': 10,
      'feels_like': 25,
      'data_time': '2023-06-02 11:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 29,
      'wind_class': '3~4级',
      'wind_speed': 5.9,
      'wind_dir': '西北风',
      'wind_angle': 325,
      'rh': 11,
      'prec': 0,
      'pressure': 1002,
      'clouds': 10,
      'feels_like': 27,
      'data_time': '2023-06-02 12:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 31,
      'wind_class': '3~4级',
      'wind_speed': 5.8,
      'wind_dir': '西北风',
      'wind_angle': 318,
      'rh': 10,
      'prec': 0,
      'pressure': 1001,
      'clouds': 10,
      'feels_like': 29,
      'data_time': '2023-06-02 13:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 33,
      'wind_class': '3~4级',
      'wind_speed': 5.7,
      'wind_dir': '西北风',
      'wind_angle': 311,
      'rh': 8,
      'prec': 0,
      'pressure': 1001,
      'clouds': 10,
      'feels_like': 31,
      'data_time': '2023-06-02 14:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 32,
      'wind_class': '3~4级',
      'wind_speed': 6,
      'wind_dir': '西北风',
      'wind_angle': 320,
      'rh': 9,
      'prec': 0,
      'pressure': 1000,
      'clouds': 10,
      'feels_like': 30,
      'data_time': '2023-06-02 15:00:00'
    }],
    'last_update': '2023-06-01 14:00'
  }
}))

export function weatherNow(params) {
  if (isMock) {
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

export function weatherHour(params) {
  if (isMock) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockHour)
      }, 50)
    })
  }
  return request({
    url: 'https://eolink.o.apispace.com/456456/weather/v001/hour?hours=24&lonlat=120.01%2C30.28',
    method: 'get',
    headers: {
      'X-APISpace-Token': api_space_token,
      'Authorization-Type': 'apikey'
    },
    params
  })
}
