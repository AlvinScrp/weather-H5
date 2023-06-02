// function calculateAngle(dy, dx) {
//   return Math.atan2(dy, dx) * (180 / Math.PI)
// }

// // 示例用法
// var opposite = 1.732
// var adjacent = 1
// var angle = calculateAngle(opposite, adjacent)
// console.log(angle) // 输出 36.86989764584402

export function degreeOfTan(dy, dx) {
  return Math.atan2(dy, dx) * (180 / Math.PI)
}

export function graphData(itemWidth, itemHeight, temps) {
  var max = Math.max(temps)
  var min = Math.min(temps)

  var points = []

  for (let i = 0; i < temps.length; i++) {
    const t = temps[i]
    var pointY = (t - min) / (max - min) * itemHeight
    var pointX = itemWidth * (0.5 + i)
    points.push({ x: pointX, y: pointY })
    max = Math.max()
  }
}
