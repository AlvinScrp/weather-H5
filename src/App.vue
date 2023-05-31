<template>
  <div id="app" ref="app" class="app">
    <div class="router-container">
      <keep-alive exclude="Detail">
        <router-view />
      </keep-alive>
    </div>

  </div>
</template>
<script>

export default {
  name: 'App',

  created() {
    console.log('app.vue created ')
    // document.documentElement.style.overflow = "hidden";
    this.$router.afterEach((to, from) => {
      console.log(` inapp ${from.path}, ${to.path}`)
    })
  },
  updated() {
    console.log(` app.vue updated ${this.$router.currentRoute.path}`)

    if (this.$router.currentRoute.path === '/goods') {
      this.shwoTabBar = false
    } else {
      this.shwoTabBar = true
    }
  }
}
</script>

<style lang="less" scoped>
@import "assets/css/base.css";

// @import "common/style.css";
.router-container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  // bottom: var(--tabbar-height);
}

.app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
