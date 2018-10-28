// import { mapGetters, mapActions } from 'vuex'
// import Helper from '@Libraries/common.helpers'
// import service from '@Services/app-service'
// import config from '@Config/app.config'
// import moment from 'moment'
// import nodeSnackbar from 'node-snackbar'
export default {
  computed: {
    // ...mapGetters([
    //   'userData'
    // ]),
  },
  filters: {},
  methods: {
    // GET_DATEDIFF (dateStart, dateEnd) { // this for buefy
    //   var startDate = moment(dateStart, 'YYYY/MM/DD')
    //   var endDate = moment(dateEnd, 'YYYY/MM/DD')
    //   return endDate.diff(startDate, 'days')
    // },
    // ADDCOMMAS (number, digit = 0) {

    // },
    GOTOPAGE (pageName, options = {}) {
      this.$router.push({
        name: pageName,
        params: { key: options.key }
      })
    },
    // BUILDPARAM (params = []) {
    //   let queryString = ''
    //   if (Object.keys(params).length) {
    //     Object.keys(params).forEach(function (key) {
    //       queryString += key + '=' + params[key] + '&'
    //     })
    //     return queryString.slice(0, -1)
    //   }
    // },
    NOTIFY (type) {
      switch (type) {
        case 'success':
          this.$notify('ทำรายการเสร็จสิ้น', 'success')
          break
        case 'error':
          this.$notify('เกิดข้อผิดพลาด โปรดลองอีกครั้ง', 'error')
          break
      }
    }
    // LOGOUT () {
    //   Helper.REMOVE_STORAGEITEM('isAuth')
    //   Helper.REMOVE_STORAGEITEM('app_token')
    //   Helper.REMOVE_STORAGEITEM('userData')
    //   this.GOTOPAGE('Login')
    // },
    // SETAUTH (token) {
    //   Helper.SET_STORAGEITEM('isAuth', 1)
    //   Helper.SET_STORAGEITEM('app_token', token)
    //   this.setAuth(true)
    // },
    // SERUSERDATA (userData) {
    //   Helper.SET_STORAGEITEM('userData', userData)
    // },
    // HASAUTH () {
    //   let isAuth = Helper.GET_STORAGEITEM('isAuth')
    //   let token = Helper.GET_STORAGEITEM('app_token')
    //   if (!isAuth || !token) {
    //     this.setAuth(false)
    //     return false
    //   }
    //   this.setAuth(true)
    //   return true
    // },
    // REMOVEDUPLICATES (originalArray, prop) {
    //   let newArray = []
    //   let lookupObject = {}
    //   for (let i in originalArray) {
    //     lookupObject[originalArray[i][prop]] = originalArray[i]
    //   }
    //   for (let i in lookupObject) {
    //     newArray.push(lookupObject[i])
    //   }
    //   return newArray
    // }
  }
}
