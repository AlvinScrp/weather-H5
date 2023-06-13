<template>
  <div class="container">
    <!-- <div>sdsdssdsdsdsddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd</div> -->
    <div class="now card">
      <div class="header-menu">
        <span class="title">{{ location }}</span>
        <span class="time">{{ `观测时间 ${formatTime(now.lastUpdate)}` }}</span>
      </div>
      <div class="core">
        <img v-if="hasNow" class="icon" :src="formatCode(now.code, now.lastUpdate)">
        <span class="temp">{{ now.temp }}°</span> <span class="text">{{ now.text }}</span>
      </div>
      <div class="other">
        <span v-show="hasNow">{{ now.windDir }} {{ now.windScale }} {{ formatPrecip(now.precip) }} </span>
      </div>
    </div>
    <div class="hours card">
      <div>
        <span class="title">未来24小时</span>
        <!-- <span style="margin-left: 0.12rem;"> {{ hours.tempRange }}</span> -->
      </div>
      <div class="out">
        <div class="inner">
          <div v-for="hour in hours.list" v-show="hasHours" :key="hour.data_time" class="hour-item">
            <div class="temp">
              {{ hour.temp }}°
            </div>
            <div class="graph" :style="hourGraphPointStyle(hour.graph.h)" />
            <img class="code" :src="formatCode(hour.code, hour.time)">
            <div class="time">
              {{ formatHour(hour.time) }}
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="days card">

      <div v-show="!hasDays" class="look-days" @click="handleLookDays()">
        点击查看最近10日
      </div>

      <div v-for="day in days" :key="day.data_time" class="day-item">

        <span class="date">{{ day.week }} {{ day.date }}</span>
        <div class="right">
          <img class="code" :src="formatCode(day.codeDay, null, true)">
          <img class="code" :src="formatCode(day.codeDay, null, false)">
          <div class="space" />
          <span class="temp">{{ day.tempLow }}°~{{ day.tempHigh }}°</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { weatherNow, weatherHours, weatherDays } from '@/network/weather'
import { isDaytime } from '@/utils/sunCalc'
import { graphData } from '@/utils/hoursGraph'
export default {
  data() {
    return {
      hasNow: false,
      hasHours: false,
      hasDays: false,
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
      hours: {
        tempRange: '',
        list: [{
          text: '',
          code: '',
          temp: '',
          time: '',
          graph: [{ h: 1 }]
        }]
      },
      days: {}
    }
  },
  mounted() {
    this.loadWeatherNow()
    // this.handleLookDays()
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
      weatherHours().then((res) => {
        // const hourlyes = res.result.hourly_fcsts//
        const hourlyes = res.result.th_hours
        const hours = hourlyes.map((hourly) => {
          return {
            text: hourly.text,
            code: hourly.code,
            temp: hourly.temp_fc,
            time: hourly.data_time
          }
        })
        const temps = hours.map((hour) => hour.temp)
        const max = Math.max(...temps)
        const min = Math.min(...temps)
        this.hours.tempRange = `${min}°~${max}°`
        const graphs = graphData(50, temps)
        for (let i = 0; i < hours.length; i++) {
          hours[i].graph = graphs[i]
        }
        console.log(JSON.stringify(graphs))
        this.hours.list = hours
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
    formatHour(time) {
      const date = new Date(time)
      var hours = date.getHours()
      var unit = hours <= 12 ? 'am' : 'pm'
      return `${hours}${unit}`
    },
    // https://easy-open-link.feishu.cn/wiki/wikcnvz05NuYDNZQswrQgixdj1b
    formatCode(code, time, orIsDaytime) {
      if (!code) {
        return ''
      }

      var key = code
      if (code === '00' || code === '01' || code === '02' || code === '03' || code === '13') {
        var isDaytimeInner = false

        if (orIsDaytime != null) {
          console.log('orIsDaytime !=null ')
          isDaytimeInner = orIsDaytime
        } else {
          console.log('orIsDaytime is null ')
          const date = new Date(time)
          isDaytimeInner = isDaytime(date, this.lat, this.lng)
        }

        const suffix = isDaytimeInner ? 'd' : 'n'
        key = `${code}${suffix}`
      }
      console.log(`code,key:${code},${key}`)
      var icon = `/img/weathericon/${key}.png`

      return icon
    },

    formatPrecip(precip) {
      return precip > 0 ? `降雨量${precip}毫米` : ''
    },

    hourGraphPointStyle(h) {
      return {
        height: `${(h + 5)}px`
        // marginTop: `${35 - point.y}px`
        // paddingTop: `${point.y}px`
        // marginTop: '10px'
      }
    },
    handleLookDays() {
      weatherDays().then((res) => {
        // const hourlyes = res.result.hourly_fcsts//
        const dailys = res.result.daily_fcsts
        const days = dailys.map((daily) => {
          return {
            codeDay: daily.code_day,
            codeNight: daily.code_night,
            tempHigh: daily.high,
            tempLow: daily.low,
            date: daily.date.substring(5, 10),
            week: daily.week.replace('星期', '周')
          }
        })
        days[0].date = '今日'

        this.days = days
        this.hasDays = true
      })
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 100vw;

  .title {
    font-weight: 700;
    font-size: 0.15rem;
  }

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
        height: 0.5rem;
        margin-left: 12px;
        margin-top: 12px;
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
    height: 1.77rem;

    .out {
      overflow-x: scroll;
      overflow-y: hidden;
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
          justify-content: flex-end;
          align-items: center;

          .temp {
            margin-left: 0.06rem;
            margin-bottom: 0.04rem;
            text-align: center;
            position: relative;
          }

          .graph {
            width: 0.05rem;
            background-color: #007bff;
            border-radius: 0.05rem;
          }

          .code {
            margin-top: 0.06rem;
            height: 0.24rem;
            width: 0.24rem;
          }

          .time {
            margin: 0.055rem;
            font-size: 0.13rem;
            color: rgba(0, 0, 0, 0.5);
            text-align: center;
          }
        }
      }
    }
  }

  .days {
    .look-days {
      margin: -0.06rem;
      padding: 0.06rem;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: center;
    }

    .day-item {
      display: flex;
      flex-flow: row;
      height: 0.40rem;
      margin-bottom: 0.06rem;
      padding: 0rem 0.16rem;
      align-items: center;
      justify-content: space-between;
      font-size: 0.15rem;
      border-radius: 0.1rem;
      background-color: rgba(0, 0, 0, 0.03);

      .date {
        width: 1rem;
      }

      .right {
        display: flex;
        flex-flow: row;
        align-items: center;

        .code {
          width: 0.24rem;
          height: 0.24rem;
        }

        .space {
          width: 0.1rem;
        }
      }

    }
  }

}
</style>
