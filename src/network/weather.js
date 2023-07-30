import request from './request'
const api_space_token = 'r7s3v5e8cmzs2hhb098fat0x30veyd12'

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
// const mockHour = JSON.parse(JSON.stringify({
//   'status': 0,
//   'result': {
//     'hourly_fcsts': [{
//       'text': '多云',
//       'code': '01',
//       'temp_fc': 26,
//       'wind_class': '<3级',
//       'wind_speed': 2.5,
//       'wind_dir': '西南风',
//       'wind_angle': 231,
//       'rh': 51,
//       'prec': 0,
//       'pressure': 1006,
//       'clouds': 50,
//       'feels_like': 26,
//       'data_time': '2023-06-01 16:00:00'
//     }, {
//       'text': '多云',
//       'code': '01',
//       'temp_fc': 26,
//       'wind_class': '<3级',
//       'wind_speed': 2,
//       'wind_dir': '西南风',
//       'wind_angle': 234,
//       'rh': 55,
//       'prec': 0,
//       'pressure': 1006,
//       'clouds': 50,
//       'feels_like': 26,
//       'data_time': '2023-06-01 17:00:00'
//     }, {
//       'text': '多云',
//       'code': '01',
//       'temp_fc': 25,
//       'wind_class': '<3级',
//       'wind_speed': 2.8,
//       'wind_dir': '西南风',
//       'wind_angle': 224,
//       'rh': 58,
//       'prec': 0,
//       'pressure': 1006,
//       'clouds': 50,
//       'feels_like': 25,
//       'data_time': '2023-06-01 18:00:00'
//     }, {
//       'text': '多云',
//       'code': '01',
//       'temp_fc': 24,
//       'wind_class': '3~4级',
//       'wind_speed': 3.5,
//       'wind_dir': '西南风',
//       'wind_angle': 217,
//       'rh': 62,
//       'prec': 0,
//       'pressure': 1006,
//       'clouds': 50,
//       'feels_like': 23,
//       'data_time': '2023-06-01 19:00:00'
//     }, {
//       'text': '多云',
//       'code': '01',
//       'temp_fc': 23,
//       'wind_class': '3~4级',
//       'wind_speed': 4.3,
//       'wind_dir': '西南风',
//       'wind_angle': 214,
//       'rh': 67,
//       'prec': 0,
//       'pressure': 1006,
//       'clouds': 50,
//       'feels_like': 22,
//       'data_time': '2023-06-01 20:00:00'
//     }, {
//       'text': '多云',
//       'code': '01',
//       'temp_fc': 21,
//       'wind_class': '3~4级',
//       'wind_speed': 4.2,
//       'wind_dir': '西南风',
//       'wind_angle': 223,
//       'rh': 73,
//       'prec': 0,
//       'pressure': 1006,
//       'clouds': 50,
//       'feels_like': 21,
//       'data_time': '2023-06-01 21:00:00'
//     }, {
//       'text': '多云',
//       'code': '01',
//       'temp_fc': 20,
//       'wind_class': '3~4级',
//       'wind_speed': 4.3,
//       'wind_dir': '西南风',
//       'wind_angle': 232,
//       'rh': 79,
//       'prec': 0,
//       'pressure': 1006,
//       'clouds': 50,
//       'feels_like': 19,
//       'data_time': '2023-06-01 22:00:00'
//     }, {
//       'text': '多云',
//       'code': '01',
//       'temp_fc': 19,
//       'wind_class': '3~4级',
//       'wind_speed': 4.5,
//       'wind_dir': '西南风',
//       'wind_angle': 242,
//       'rh': 87,
//       'prec': 0,
//       'pressure': 1006,
//       'clouds': 50,
//       'feels_like': 18,
//       'data_time': '2023-06-01 23:00:00'
//     }, {
//       'text': '多云',
//       'code': '01',
//       'temp_fc': 18,
//       'wind_class': '<3级',
//       'wind_speed': 2.6,
//       'wind_dir': '西风',
//       'wind_angle': 252,
//       'rh': 89,
//       'prec': 0,
//       'pressure': 1005,
//       'clouds': 45,
//       'feels_like': 18,
//       'data_time': '2023-06-02 00:00:00'
//     }, {
//       'text': '多云',
//       'code': '01',
//       'temp_fc': 17,
//       'wind_class': '<3级',
//       'wind_speed': 1.4,
//       'wind_dir': '西风',
//       'wind_angle': 290,
//       'rh': 92,
//       'prec': 0,
//       'pressure': 1005,
//       'clouds': 41,
//       'feels_like': 18,
//       'data_time': '2023-06-02 01:00:00'
//     }, {
//       'text': '多云',
//       'code': '01',
//       'temp_fc': 17,
//       'wind_class': '<3级',
//       'wind_speed': 1.8,
//       'wind_dir': '北风',
//       'wind_angle': 4,
//       'rh': 95,
//       'prec': 0,
//       'pressure': 1005,
//       'clouds': 37,
//       'feels_like': 17,
//       'data_time': '2023-06-02 02:00:00'
//     }, {
//       'text': '多云',
//       'code': '01',
//       'temp_fc': 16,
//       'wind_class': '<3级',
//       'wind_speed': 2.4,
//       'wind_dir': '西北风',
//       'wind_angle': 328,
//       'rh': 95,
//       'prec': 0,
//       'pressure': 1004,
//       'clouds': 27,
//       'feels_like': 16,
//       'data_time': '2023-06-02 03:00:00'
//     }, {
//       'text': '晴',
//       'code': '00',
//       'temp_fc': 16,
//       'wind_class': '3~4级',
//       'wind_speed': 3.4,
//       'wind_dir': '西北风',
//       'wind_angle': 314,
//       'rh': 96,
//       'prec': 0,
//       'pressure': 1004,
//       'clouds': 19,
//       'feels_like': 15,
//       'data_time': '2023-06-02 04:00:00'
//     }, {
//       'text': '晴',
//       'code': '00',
//       'temp_fc': 16,
//       'wind_class': '3~4级',
//       'wind_speed': 4.7,
//       'wind_dir': '西北风',
//       'wind_angle': 304,
//       'rh': 97,
//       'prec': 0,
//       'pressure': 1004,
//       'clouds': 10,
//       'feels_like': 14,
//       'data_time': '2023-06-02 05:00:00'
//     }, {
//       'text': '晴',
//       'code': '00',
//       'temp_fc': 17,
//       'wind_class': '3~4级',
//       'wind_speed': 4.6,
//       'wind_dir': '西北风',
//       'wind_angle': 308,
//       'rh': 86,
//       'prec': 0,
//       'pressure': 1004,
//       'clouds': 10,
//       'feels_like': 16,
//       'data_time': '2023-06-02 06:00:00'
//     }, {
//       'text': '晴',
//       'code': '00',
//       'temp_fc': 18,
//       'wind_class': '3~4级',
//       'wind_speed': 4.5,
//       'wind_dir': '西北风',
//       'wind_angle': 312,
//       'rh': 76,
//       'prec': 0,
//       'pressure': 1004,
//       'clouds': 10,
//       'feels_like': 17,
//       'data_time': '2023-06-02 07:00:00'
//     }, {
//       'text': '晴',
//       'code': '00',
//       'temp_fc': 20,
//       'wind_class': '3~4级',
//       'wind_speed': 4.4,
//       'wind_dir': '西北风',
//       'wind_angle': 316,
//       'rh': 66,
//       'prec': 0,
//       'pressure': 1004,
//       'clouds': 10,
//       'feels_like': 18,
//       'data_time': '2023-06-02 08:00:00'
//     }, {
//       'text': '晴',
//       'code': '00',
//       'temp_fc': 22,
//       'wind_class': '3~4级',
//       'wind_speed': 4.9,
//       'wind_dir': '西北风',
//       'wind_angle': 323,
//       'rh': 50,
//       'prec': 0,
//       'pressure': 1003,
//       'clouds': 10,
//       'feels_like': 21,
//       'data_time': '2023-06-02 09:00:00'
//     }, {
//       'text': '晴',
//       'code': '00',
//       'temp_fc': 25,
//       'wind_class': '3~4级',
//       'wind_speed': 5.5,
//       'wind_dir': '西北风',
//       'wind_angle': 327,
//       'rh': 31,
//       'prec': 0,
//       'pressure': 1003,
//       'clouds': 10,
//       'feels_like': 23,
//       'data_time': '2023-06-02 10:00:00'
//     }, {
//       'text': '晴',
//       'code': '00',
//       'temp_fc': 28,
//       'wind_class': '3~4级',
//       'wind_speed': 6.1,
//       'wind_dir': '西北风',
//       'wind_angle': 332,
//       'rh': 14,
//       'prec': 0,
//       'pressure': 1003,
//       'clouds': 10,
//       'feels_like': 25,
//       'data_time': '2023-06-02 11:00:00'
//     }, {
//       'text': '晴',
//       'code': '00',
//       'temp_fc': 29,
//       'wind_class': '3~4级',
//       'wind_speed': 5.9,
//       'wind_dir': '西北风',
//       'wind_angle': 325,
//       'rh': 11,
//       'prec': 0,
//       'pressure': 1002,
//       'clouds': 10,
//       'feels_like': 27,
//       'data_time': '2023-06-02 12:00:00'
//     }, {
//       'text': '晴',
//       'code': '00',
//       'temp_fc': 31,
//       'wind_class': '3~4级',
//       'wind_speed': 5.8,
//       'wind_dir': '西北风',
//       'wind_angle': 318,
//       'rh': 10,
//       'prec': 0,
//       'pressure': 1001,
//       'clouds': 10,
//       'feels_like': 29,
//       'data_time': '2023-06-02 13:00:00'
//     }, {
//       'text': '晴',
//       'code': '00',
//       'temp_fc': 33,
//       'wind_class': '3~4级',
//       'wind_speed': 5.7,
//       'wind_dir': '西北风',
//       'wind_angle': 311,
//       'rh': 8,
//       'prec': 0,
//       'pressure': 1001,
//       'clouds': 10,
//       'feels_like': 31,
//       'data_time': '2023-06-02 14:00:00'
//     }, {
//       'text': '晴',
//       'code': '00',
//       'temp_fc': 32,
//       'wind_class': '3~4级',
//       'wind_speed': 6,
//       'wind_dir': '西北风',
//       'wind_angle': 320,
//       'rh': 9,
//       'prec': 0,
//       'pressure': 1000,
//       'clouds': 10,
//       'feels_like': 30,
//       'data_time': '2023-06-02 15:00:00'
//     }],
//     'last_update': '2023-06-01 14:00'
//   }
// }))
const mock3Hour = JSON.parse(JSON.stringify({
  'status': 0,
  'result': {
    'location': {
      'areacode': '101010100',
      'name': '北京',
      'country': '中国',
      'path': '北京,北京市,北京市,中国'
    },
    'th_hours': [{
      'text': '多云',
      'code': '01',
      'temp_fc': 31,
      'wind_class': '3~4级',
      'wind_speed': 5,
      'wind_dir': '北风',
      'wind_angle': 338,
      'rh': 19,
      'prec': 0,
      'pressure': 1000,
      'clouds': 50,
      'feels_like': 29,
      'data_time': '2023-06-12 17:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 28,
      'wind_class': '<3级',
      'wind_speed': 0.7,
      'wind_dir': '北风',
      'wind_angle': 358,
      'rh': 36,
      'prec': 0,
      'pressure': 1002,
      'clouds': 50,
      'feels_like': 29,
      'data_time': '2023-06-12 20:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 23,
      'wind_class': '<3级',
      'wind_speed': 3.3,
      'wind_dir': '北风',
      'wind_angle': 4,
      'rh': 48,
      'prec': 0,
      'pressure': 1003,
      'clouds': 50,
      'feels_like': 22,
      'data_time': '2023-06-12 23:00:00'
    }, {
      'text': '多云',
      'code': '01',
      'temp_fc': 20,
      'wind_class': '<3级',
      'wind_speed': 1.5,
      'wind_dir': '东北风',
      'wind_angle': 29,
      'rh': 61,
      'prec': 0,
      'pressure': 1003,
      'clouds': 50,
      'feels_like': 20,
      'data_time': '2023-06-13 02:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 19,
      'wind_class': '3~4级',
      'wind_speed': 3.4,
      'wind_dir': '北风',
      'wind_angle': 11,
      'rh': 69,
      'prec': 0,
      'pressure': 1003,
      'clouds': 10,
      'feels_like': 18,
      'data_time': '2023-06-13 05:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 22,
      'wind_class': '3~4级',
      'wind_speed': 4.9,
      'wind_dir': '北风',
      'wind_angle': 358,
      'rh': 50,
      'prec': 0,
      'pressure': 1003,
      'clouds': 10,
      'feels_like': 20,
      'data_time': '2023-06-13 08:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 29,
      'wind_class': '3~4级',
      'wind_speed': 3.5,
      'wind_dir': '北风',
      'wind_angle': 1,
      'rh': 29,
      'prec': 0,
      'pressure': 1001,
      'clouds': 10,
      'feels_like': 28,
      'data_time': '2023-06-13 11:00:00'
    }, {
      'text': '晴',
      'code': '00',
      'temp_fc': 33,
      'wind_class': '3~4级',
      'wind_speed': 3.5,
      'wind_dir': '北风',
      'wind_angle': 6,
      'rh': 23,
      'prec': 0,
      'pressure': 999,
      'clouds': 10,
      'feels_like': 33,
      'data_time': '2023-06-13 14:00:00'
    }],
    'last_update': '2023-06-12 17:49'
  }
}))

const mockDays = JSON.parse(JSON.stringify({
  'status': 0,
  'result': {
    'location': {
      'areacode': '101010100',
      'name': '北京',
      'country': '中国',
      'path': '北京,北京市,北京市,中国'
    },
    'daily_fcsts': [{
      'text_day': '晴',
      'code_day': '00',
      'text_night': '晴',
      'code_night': '00',
      'high': 33,
      'low': 20,
      'wc_day': '<3级',
      'wd_day': '南风',
      'wc_night': '<3级',
      'wd_night': '东南风',
      'wa_day': 168,
      'wa_night': 123,
      'ws_day': 2,
      'ws_night': 2,
      'pop': 20,
      'pressure': 998,
      'maxrh': 57,
      'minrh': 20,
      'vis': 10000,
      'clouds_day': 6,
      'clouds_night': 5,
      'uv': 11,
      'date': '2023-06-13',
      'week': '星期二'
    }, {
      'text_day': '晴',
      'code_day': '00',
      'text_night': '晴',
      'code_night': '00',
      'high': 35,
      'low': 21,
      'wc_day': '<3级',
      'wd_day': '南风',
      'wc_night': '<3级',
      'wd_night': '东南风',
      'wa_day': 168,
      'wa_night': 123,
      'ws_day': 2,
      'ws_night': 2,
      'pop': 20,
      'pressure': 998,
      'maxrh': 60,
      'minrh': 17,
      'vis': 10000,
      'clouds_day': 0,
      'clouds_night': 0,
      'uv': 11,
      'date': '2023-06-14',
      'week': '星期三'
    }, {
      'text_day': '晴',
      'code_day': '00',
      'text_night': '晴',
      'code_night': '00',
      'high': 35,
      'low': 23,
      'wc_day': '<3级',
      'wd_day': '南风',
      'wc_night': '<3级',
      'wd_night': '南风',
      'wa_day': 168,
      'wa_night': 168,
      'ws_day': 2,
      'ws_night': 2,
      'pop': 20,
      'pressure': 998,
      'maxrh': 53,
      'minrh': 12,
      'vis': 10000,
      'clouds_day': 0,
      'clouds_night': 0,
      'uv': 11,
      'date': '2023-06-15',
      'week': '星期四'
    }, {
      'text_day': '晴',
      'code_day': '00',
      'text_night': '晴',
      'code_night': '00',
      'high': 35,
      'low': 24,
      'wc_day': '<3级',
      'wd_day': '南风',
      'wc_night': '<3级',
      'wd_night': '南风',
      'wa_day': 168,
      'wa_night': 168,
      'ws_day': 2,
      'ws_night': 2,
      'pop': 20,
      'pressure': 999,
      'maxrh': 44,
      'minrh': 11,
      'vis': 10000,
      'clouds_day': 0,
      'clouds_night': 0,
      'uv': 11,
      'date': '2023-06-16',
      'week': '星期五'
    }, {
      'text_day': '晴',
      'code_day': '00',
      'text_night': '多云',
      'code_night': '01',
      'high': 37,
      'low': 24,
      'wc_day': '<3级',
      'wd_day': '东南风',
      'wc_night': '<3级',
      'wd_night': '东南风',
      'wa_day': 123,
      'wa_night': 123,
      'ws_day': 2,
      'ws_night': 2,
      'pop': 20,
      'pressure': 1001,
      'maxrh': 43,
      'minrh': 17,
      'vis': 12500,
      'clouds_day': 0,
      'clouds_night': 8,
      'uv': 11,
      'date': '2023-06-17',
      'week': '星期六'
    }, {
      'text_day': '多云',
      'code_day': '01',
      'text_night': '阴',
      'code_night': '02',
      'high': 34,
      'low': 22,
      'wc_day': '<3级',
      'wd_day': '东南风',
      'wc_night': '<3级',
      'wd_night': '东南风',
      'wa_day': 123,
      'wa_night': 123,
      'ws_day': 2,
      'ws_night': 2,
      'pop': 20,
      'pressure': 998,
      'maxrh': 47,
      'minrh': 23,
      'vis': 10000,
      'clouds_day': 57,
      'clouds_night': 100,
      'uv': 5,
      'date': '2023-06-18',
      'week': '星期日'
    }, {
      'text_day': '阴',
      'code_day': '02',
      'text_night': '多云',
      'code_night': '01',
      'high': 32,
      'low': 22,
      'wc_day': '<3级',
      'wd_day': '东南风',
      'wc_night': '<3级',
      'wd_night': '南风',
      'wa_day': 123,
      'wa_night': 168,
      'ws_day': 2,
      'ws_night': 2,
      'pop': 30,
      'pressure': 995,
      'maxrh': 51,
      'minrh': 41,
      'vis': 9250,
      'clouds_day': 86,
      'clouds_night': 64,
      'uv': 4,
      'date': '2023-06-19',
      'week': '星期一'
    }, {
      'text_day': '多云',
      'code_day': '01',
      'text_night': '多云',
      'code_night': '01',
      'high': 35,
      'low': 22,
      'wc_day': '<3级',
      'wd_day': '西北风',
      'wc_night': '<3级',
      'wd_night': '西北风',
      'wa_day': 303,
      'wa_night': 303,
      'ws_day': 2,
      'ws_night': 2,
      'pop': 20,
      'pressure': 994,
      'maxrh': 58,
      'minrh': 24,
      'vis': 10000,
      'clouds_day': 30,
      'clouds_night': 27,
      'uv': 9,
      'date': '2023-06-20',
      'week': '星期二'
    }, {
      'text_day': '多云',
      'code_day': '01',
      'text_night': '多云',
      'code_night': '01',
      'high': 37,
      'low': 21,
      'wc_day': '<3级',
      'wd_day': '东南风',
      'wc_night': '<3级',
      'wd_night': '南风',
      'wa_day': 123,
      'wa_night': 168,
      'ws_day': 2,
      'ws_night': 2,
      'pop': 20,
      'pressure': 995,
      'maxrh': 47,
      'minrh': 12,
      'vis': 10000,
      'clouds_day': 27,
      'clouds_night': 37,
      'uv': 9,
      'date': '2023-06-21',
      'week': '星期三'
    }],
    'last_update': '2023-06-13 11:20'
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

// export function weatherHours(params) {
//   if (isMock) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(mockHour)
//       }, 50)
//     })
//   }
//   return request({
//     url: 'https://eolink.o.apispace.com/456456/weather/v001/hour?hours=24&lonlat=120.01%2C30.28',
//     method: 'get',
//     headers: {
//       'X-APISpace-Token': api_space_token,
//       'Authorization-Type': 'apikey'
//     },
//     params
//   })
// }
export function weatherHours(params) {
  if (isMock) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mock3Hour)
      }, 50)
    })
  }
  return request({
    url: 'https://eolink.o.apispace.com/456456/weather/v001/3hours?hours=24&lonlat=120.01%2C30.28',
    method: 'get',
    headers: {
      'X-APISpace-Token': api_space_token,
      'Authorization-Type': 'apikey'
    },
    params
  })
}

export function weatherDays(params) {
  if (isMock) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockDays)
      }, 50)
    })
  }
  return request({
    url: 'https://eolink.o.apispace.com/456456/weather/v001/day?days=10&lonlat=120.01%2C30.28',
    method: 'get',
    headers: {
      'X-APISpace-Token': api_space_token,
      'Authorization-Type': 'apikey'
    },
    params
  })
}
