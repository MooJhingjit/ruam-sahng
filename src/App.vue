<template>
  <div id="app">
    <div class="pages" v-if="normalPages && CHECK_AUTH()">
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
// import {bus} from './main'
import { mapActions, mapGetters } from 'vuex'
import headerWrapper from '@Layouts/Header'
import footerWrapper from '@Layouts/Footer'
import config from '@Config/app.config'
import service from '@Services/app.service'
export default {
  components: {
    headerWrapper,
    footerWrapper
  },
  name: 'App',
  computed: {
    ...mapGetters([
      // 'HAS_AUTH_STORE'
    ])
  },
  data () {
    return {
      normalPages: true
    }
  },
  created () {
    // bus.$on('fetchResource', this.fetchData)
    this.fetchData()
  },
  methods: {
    ...mapActions([
      'SET_APP_STORE'
    ]),
    async fetchData () {
      if (this.$route.name === 'Login') return
      let resourceName = config.api.app.resource
      try {
        let res = await service.getResource({ resourceName, queryString: [] })
        this.setAppData(res.data)
      } catch (error) {
        this.LOGOUT()
        // this.NOTIFY('error', 'เกิดข้อผิดพลาด')
      }
    },
    setAppData (data) {
      this.SET_APP_STORE(data)
    }
  },
  watch: {
    '$route' (to, from) {
      this.normalPages = !(to.name === 'Login' || to.name === 'Schedule')
      if (this.CHECK_AUTH()) {
        if (to.name === 'Login') {
          this.REDIRECT_TOHOMEPAGE()
        }
      } else {
        if (to.name !== 'Login') {
          this.GO_TOPAGE('Login')
        }
      }
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
