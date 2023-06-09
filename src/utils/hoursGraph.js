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

export function graphData(itemHeight, temps) {
  var max = Math.max(...temps)
  var min = Math.min(...temps)
  var hlist = []

  for (let i = 0; i < temps.length; i++) {
    const t = temps[i]
    var h = (t - min) / (max - min) * itemHeight
    hlist.push({ h: h })
  }
  return hlist
}

// export function graphData(itemWidth, itemHeight, temps) {
//   var max = Math.max(...temps)
//   var min = Math.min(...temps)
//   console.log(`max:${max}`)
//   console.log(`min:${min}`)
//   var points = []

//   for (let i = 0; i < temps.length; i++) {
//     const t = temps[i]
//     var pointY = (t - min) / (max - min) * itemHeight
//     var pointX = itemWidth / 2
//     points.push({ x: pointX, y: pointY })
//   }
//   var res = []
//   var length = points.length
//   for (let i = 0; i < length; i++) {
//     var p = points[i]
//     // line: [{ x: 0, y: 0, l: 0, degree: 30 }],
//     var lines = []

//     if (i > 0) {
//       const pre = points[i - 1]
//       const dx = itemWidth
//       const dy = p.y - pre.y
//       lines.push({
//         x: 0,
//         y: p.y - dy / 2,
//         l: (Math.sqrt(dx * dx + dy * dy)) / 2,
//         degree: degreeOfTan(dy, dx)
//       })
//     }
//     if (i < length - 1) {
//       const next = points[i + 1]
//       const dx = itemWidth
//       const dy = next.y - p.y
//       console.log(`dx:${dx},dy:${dy},l:${(Math.sqrt(dx * dx + dy * dy)) / 2}`)
//       lines.push({
//         x: dx / 2,
//         y: p.y + dy / 2 + 1,
//         l: (Math.sqrt(dx * dx + dy * dy)) / 2,
//         degree: degreeOfTan(dy, dx)
//       })
//     }
//     res.push({ point: p, lines: lines })
//   }
//   return res
// }
