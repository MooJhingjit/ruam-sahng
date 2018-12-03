<template>
  <section class="login-wrapper container">
    <div class="columns bg-gray">
      <div class="column col-md-12 col-4 col-mx-auto">
        <div class="bg-gray docs-block">
          <div class="card">
            <div class="card-header">
              <div class="card-title h5 text-center text-dark">เข้าสู่ระบบ</div>
              <div class="card-subtitle text-gray text-center">บจก.ร่วมสร้าง</div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label class="form-label" for="usernameInput">ชื่อผู้ใช้</label>
                <my-input
                  :config="{
                    type: 'text',
                    key: 'username',
                    placeholder: 'ชื่อผู้ใช้',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.username"
                  @input="value => {local.username = value}"
                ></my-input>
              </div>
              <div class="form-group">
                <label class="form-label" for="passwordInput">รหัสผ่าน</label>
                <my-input
                  :config="{
                    type: 'password',
                    key: 'password',
                    placeholder: 'รหัสผ่าน',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.password"
                  @input="value => {local.password = value}"
                ></my-input>
              </div>
            </div>
            <div class="card-footer text-center">
              <!-- <a class="btn btn-dark" href="#" @click="login()">เข้าใช้งาน</a> -->
              <my-button
              :config="{
                icon: null,
                btnClass: 'btn btn-dark',
                doConfirm: false,
                text: 'เข้าใช้งาน'
              }"
              @submit="(tf) => doLogin(tf)"></my-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import config from '@Config/app.config'
import service from '@Services/app.service'
import MyInput from '@Components/Form/myInput'
import MyButton from '@Components/Form/myButton'
import Helper from '@Libraries/common.helpers'
export default {
  components: {
    MyInput,
    MyButton
  },
  name: 'LoginPage',
  data () {
    return {
      local: {
        username: null,
        password: null
      }
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    ...mapActions([
      'SET_APP_STORE'
    ]),
    async doLogin (tf) {
      let isPass = await this.$validator.validate()
      if (isPass) {
        let data = {
          username: this.local.username,
          password: this.local.password
        }
        let resourceName = config.api.login
        try {
          let res = await service.postResource({ data, resourceName })
          this.setData(res.data)
          
        } catch (error) {
          this.NOTIFY('error', 'ข้อมูลไม่ถูกต้อง โปรดตรวจสอบ')
        }
      }
    },
    setData (data) {
      // console.log(data.appData)
      this.SET_APP_STORE({data: data.appData})
      Helper.SET_STORAGEITEM(config.variable.tokenStorage, data.token)
      Helper.SET_STORAGEITEM(config.variable.authStorage, 1)
      this.REDIRECT_TOHOMEPAGE()
    }
  }
}
</script>

<style lang="scss" scoped>
section .columns{
  height: 100vh;
  align-items: center;
}
</style>
