<template>
  <div class="container">
    <!-- <div>sdsdssdsdsdsddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd</div> -->
    <div v-if="hasNow" class="now card">
      <div class="header-menu">
        <h4 class="city">{{ location }}</h4>
        <span class="time">{{ `观测时间 ${formatTime(now.lastUpdate)}` }}</span>
      </div>
      <div class="core">
        <img v-show="now.code" class="icon" :src="formatCode(now.code, now.lastUpdate)">
        <span class="temp">{{ now.temp }}°</span> <span class="text">{{ now.text }}</span>
      </div>
      <div class="other">
        <span v-show="hasNow">{{ now.windDir }} {{ now.windScale }} {{ formatPrecip(now.precip) }} </span>
      </div>
    </div>
    <div v-show="hasHours" class="hours card">
      <h4>未来24小时</h4>
      <div class="out">
        <div class="inner">
          <div v-for="hour in hours" :key="hour.data_time" class="hour-item">
            <div class="time">
              {{ formatTime(hour.time) }}
            </div>
            <img class="code" :src="formatCode(hour.code, hour.time)">
            <div class="temp">
              {{ hour.temp }}°
            </div>
            <div class="line" />
          </div>
        </div>
      </div>
    </div>
    <div class="test">
      <p>线段</p>
      <!-- <canvas ref="canvas" class="canvas" width="200" height="200" /> -->
    </div>
    <div class="chart">
      <!-- <div class="point point1" /> -->
      <div class="line line1" />
      <!-- <div class="point  point2" /> -->
      <div class="line line2" />
      <!-- <div class="point point3" /> -->
      <div class="line line3" />
    </div>
  </div>
</template>

<script>
import { weatherNow, weatherHour } from '@/network/weather'
import { isDaytime } from '@/utils/sunCalc'
export default {
  data() {
    return {
      hasNow: false,
      hasHours: false,
      location: '杭州',
      lat: 30.28,
      lng: 120.01,
      // api https://dev.qweather.com/docs/api/grid-weather/grid-weather-now/
      now: {
        lastUpdate: '',
        temp: '',
        feelsLike: '',
        code: '',
        text: '',
        windDir: '',
        windScale: '',
        precip: '0.0', // 当前小时累计降水量，默认单位：毫米,
        brief: ''
      },

      warning: {},
      hours: [{
        text: '',
        code: '',
        temp: '',
        time: '',
        bg: {
          line: [{ x: 0, y: 0, l: 0, degree: 30 }],
          point: { x: 0, y: 0 }
        }
      }],
      day: {}
    }
  },
  mounted() {
    this.loadWeatherNow()
    this.xianDuan()
  },

  methods: {
    loadWeatherNow() {
      weatherNow().then((res) => {
        const real = res.result.realtime
        this.now = {
          lastUpdate: res.result.last_update,
          temp: Math.round(real.temp),
          feelsLike: real.feels_like,
          code: real.code,
          text: real.text,
          windDir: real.wind_dir,
          windScale: real.wind_class,
          precip: real.prec,
          brief: real.brief
        }
        this.hasNow = true
        this.loadWeatherHour()
      })
    },
    loadWeatherHour() {
      weatherHour().then((res) => {
        this.hours = res.result.hourly_fcsts.map((hourly) => {
          return {
            text: hourly.text,
            code: hourly.code,
            temp: hourly.temp_fc,
            time: hourly.data_time
          }
        })
        this.hasHours = true
      })
    },
    formatTime(time) {
      const date = new Date(time)
      var hours = date.getHours()
      var munutes = date.getMinutes()
      if (hours < 10) hours = '0' + hours
      if (munutes < 10) munutes = '0' + munutes
      return `${hours}:${munutes}`
    },
    // https://easy-open-link.feishu.cn/wiki/wikcnvz05NuYDNZQswrQgixdj1b
    formatCode(code, time) {
      if (!code) {
        return ''
      }
      const date = new Date(time)
      var key = code
      if (code === '00' || code === '01' || code === '02' || code === '03' || code === '13') {
        const suffix = isDaytime(date, this.lat, this.lng) ? 'd' : 'n'
        key = `${code}${suffix}`
      }
      console.log(`code,key:${code},${key}`)
      var icon = `/img/weathericon/${key}.png`

      return icon
    },
    formatPrecip(precip) {
      return precip > 0 ? `降雨量${precip}毫米` : ''
    },
    xianDuan() {
      // const canvas = this.$refs.canvas

      // var ctx = canvas.getContext('2d')
      // ctx.subpixel = 'gray'
      // //  设置边框颜色 ， 用与描绘边框时填充边框
      // ctx.strokeStyle = 'red'
      // ctx.moveTo(0, 0) // moveTo(x,y) 定义线条开始坐标
      // ctx.lineTo(100, 100) // lineTo(x,y) 定义线条结束坐标
      // ctx.quadraticCurveTo(130, 130, 150, 180)
      // ctx.stroke()
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 100vw;

  .card {
    border-radius: 0.12rem;
    // background-image: linear-gradient(225deg, #fee5ca, #e9f0ff 55%, #dce3fb);
    background-color: var(--card-border-color);
    padding: 0.12rem;
    margin: 0.12rem;
  }

  .now {

    .header-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .city {}

      .time {
        font-size: 14px;
        font-weight: 300;
        color: var(--text-black-2);
      }
    }

    .core {
      margin-top: 0.06rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 0.48rem;

      .icon {
        width: 0.48rem;
        height: 0.48rem;

      }

      .temp {
        margin-left: 12px;
        margin-top: 6px;
        font-size: 30px;
        font-weight: 700;
      }

      .text {
        margin-left: 6px;
        margin-top: 6px;
        font-size: 16px;
        font-weight: 300;
      }
    }

    .other {
      height: 16px;
      width: auto;
      margin-top: 12px;
    }
  }

  .hours {

    .out {
      overflow-x: scroll;
      overflow-y: hidden;
      margin-top: 0.12rem;
      margin-bottom: 0.04rem;
      align-items: center;
      width: 100%;
      height: auto;

      .inner {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: auto;
        margin-left: -0.06rem;
        margin-right: -0.06rem;

        .hour-item {
          display: flex;
          flex-direction: column;
          height: auto;
          align-items: center;
          align-self: center;

          .time {
            margin: 0rem 0.06rem;
          }

          .code {
            margin: 0.06rem;
            height: 0.24rem;
            width: 0.24rem;
          }

          .temp {
            text-align: center;
          }

          .line {
            width: 0.2rem;
            height: 0.5rem;
            background-color: aqua;
          }

        }
      }
    }
  }

  .test {
    width: 200px;
    height: 200px;
    border-bottom: 2px solid black;
    border-left: 2px solid black;

  }

  .canvas {
    display: block;
    margin: 0 auto;
    border: solid 2px #999;

  }

  .chart {
    border-bottom: 2px solid black;
    border-left: 2px solid black;
    height: 2rem;
    width: 2rem;

    .point {
      border-radius: 50%;
      position: absolute;
      height: 12px;
      width: 12px;
      z-index: 1;
    }

    .point1 {
      background-color: violet;
      bottom: 76px;
      left: 36px;
    }

    .point2 {
      background-color: pink;
      bottom: 116px;
      left: 76px;
    }

    .point3 {
      background-color: orange;
      bottom: 76px;
      left: 116px;
    }

    .line {
      height: 3px;
      position: absolute;
      transform-origin: left bottom;
      width: 56.57px;
    }

    .line1 {
      background-color: black;
      bottom: 80px;
      left: 40px;
      transform: rotate(-45deg);
    }

    .line2 {
      background-color: black;
      bottom: 120px;
      left: 80px;
      transform: rotate(45deg);

    }

    .line3 {
      background-color: black;
      bottom: 80px;
      left: 120px;
      transform: rotate(45deg);
    }
  }

}
</style>
