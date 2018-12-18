<template>
  <div id="app">
    <div class="pages" v-if="normalPages && CHECK_AUTH()">
      <div class="header-wrapper" v-if="setData">
        <header-wrapper></header-wrapper>
      </div>
      <div class="body-wrapper" v-if="setData">
        <router-view/>
      </div>
      <div class="footer-wrapper" v-if="setData">
        <footer-wrapper></footer-wrapper>
      </div>
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { bus } from './main'
import { mapActions, mapGetters } from 'vuex'
import headerWrapper from '@Layouts/Header'
import footerWrapper from '@Layouts/Footer'
import config from '@Config/app.config'
import service from '@Services/app.service'
import io from 'socket.io-client'
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
      normalPages: true,
      socket: io(config.api.host),
      setData: false
    }
  },
  created () {
    bus.$on('emitSocket', this.emitSocket)
    this.fetchData()
    // this.setSocket()
    // console.log(this.socket)
  },
  mounted () {
    this.socket.on('UPDATE_PRODUCT', (data) => {
      bus.$emit('reloadSchedule')
    })
    this.socket.on('UPDATE_NOTIFICATION', (data) => {
      bus.$emit('reloadNotification')
    })
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
      this.setData = true
    },
    emitSocket (obj) {
      this.socket.emit(obj.key, obj.data)
    }
  },
  watch: {
    '$route' (to, from) {
      this.normalPages = !(to.name === 'Login' || to.name === 'Schedule')
      if (this.CHECK_AUTH()) {
        if (to.name === 'Login' || !this.HAS_PRIVILEGE(to.name)) {
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
