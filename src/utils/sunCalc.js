var SunCalc = require('suncalc')
/**
 * 当前是否为白昼
 * @param {*} date
 * @param {*} lat
 * @param {*} lng
 */

export function isDaytime(date, lat, lng) {
  var times = SunCalc.getTimes(date, lat, lng)
  return date >= times.sunrise && date <= times.sunset
}
