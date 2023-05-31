var SunCalc = require('suncalc')
/**
 * 当前是否为白昼
 * @param {*} date
 * @param {*} lat
 * @param {*} lng
 */

export function isDaytime(date, lat, lng) {
  console.log(`${date},${lat},${lng}`)
  var times = SunCalc.getTimes(date, lat, lng)
  console.log(times.sunrise)
  console.log(times.sunset)
  return date >= times.sunrise && date <= times.sunset
}
