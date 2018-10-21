<template>
  <div id="app">
    <div class="pages" v-if="normalPages">
      <div class="header-wrapper">
        <header-wrapper></header-wrapper>
      </div>
      <div class="body-wrapper">
        <router-view/>
      </div>
      <div class="footer-wrapper">
        <footer-wrapper></footer-wrapper>
      </div>
    </div>
    <div v-else>
      <router-view/>
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
    return {
      normalPages: true
    }
  },
  watch: {
    '$route' (to, from) {
      this.normalPages = !(to.name === 'Login' || to.name === 'Schedule')
    }
  }
}
</script>

<style lang="scss">
@import '~@/Assets/my-style.scss';
@import 'node_modules/spectre.css/src/spectre';
@import 'node_modules/spectre.css/src/spectre-exp';
#app{
  font-size: .9em;
  height: 100vh;
  .header-wrapper{
    font-size: 1.2em;
    position: relative;
    top: 0;
    width: 100%;
    z-index: 3
  }
  .body-wrapper{
    position: relative;
    z-index: 2;
    padding: 15px;
  }
}
</style>
