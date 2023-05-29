<template>
  <div class="container">
    <!-- <div>sdsdssdsdsdsddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd</div> -->
    <div class="now">
      <div class="header-menu">
        <h4 class="city">{{ location }}</h4>
        <span class="time">{{ formatTime(now.lastUpdate) }}</span>
      </div>
      <div class="core">
        <img v-show="now.icon" class="icon" :src="formatCode(now.code)">
        <span v-show="hasData" class="temp">{{ now.temp }}°</span> <span class="text">{{ now.text }}</span>
      </div>
      <div class="other">
        <span v-show="hasData">{{ now.windDir }} {{ now.windScale }} {{ formatPrecip(now.precip) }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { weatherNow } from '@/network/weather'
export default {
  data() {
    return {
      hasData: false,
      location: '杭州',
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
      hour: {},
      day: {}
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
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
        this.hasData = true
      })
    },
    formatTime(time) {
      const date = new Date(time)
      console.log(date.getHours())
      var hours = date.getHours()
      var munutes = date.getMinutes()
      if (hours < 10) hours = '0' + hours
      if (munutes < 10) munutes = '0' + munutes
      return `观测时间 ${hours}:${munutes}`
    },
    formatCode(code) {
      // return `https://a.hecdn.net/img/common/icon/202106d/${icon}.png`
      return `/img/weathericon/${code}.png`
    },
    formatPrecip(precip) {
      return precip > 0 ? `降雨量${precip}毫米` : ''
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  width: 100vw;

  .now {
    border-radius: 0.12rem;
    // background-image: linear-gradient(225deg, #fee5ca, #e9f0ff 55%, #dce3fb);
    background-color: var(--card-border-color);
    padding: 0.12rem;
    margin: 0.12rem;

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
      margin-top: 0.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 48px;

      .icon {
        width: 48px;
        height: 48px;

      }

      .temp {
        margin-left: 12px;
        margin-top: 8px;
        font-size: 30px;
        font-weight: 700;
      }

      .text {
        margin-left: 6px;
        margin-top: 8px;
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

}
</style>
