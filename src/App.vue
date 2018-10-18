<template>
  <div id="app">
    <div class="header-wrapper bg-dark">
      <header-wrapper></header-wrapper>
    </div>
    <!-- <div class="divider"></div> -->
    <div class="body-wrapper">
      <router-view/>
    </div>
    <div class="footer-wrapper fixed">
      <footer-wrapper></footer-wrapper>
    </div>
  </div>
</template>

<script>
import headerWrapper from '@Layouts/Header'
import footerWrapper from '@Layouts/Footer'
export default {
  components: {
    headerWrapper,
    footerWrapper
  },
  name: 'App',
  data () {
    return {}
  }
}
</script>


<style lang="scss">
@import '~@/Assets/my-style.scss';
// @import 'font-awesome/scss/font-awesome.scss';
@import 'node_modules/spectre.css/src/spectre';
#app{
  font-size: 14px !important;
  background: #f9f9f9;
  height: 100vh;
  .header-wrapper{
    position: relative;
    top: 0;
    width: 100%;
    z-index: 3
  }
  .body-wrapper{
    position: relative;
    z-index: 2;
    background: #f9f9f9;
  }
  .footer-wrapper{
    // position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 3;
  }
}
</style>
