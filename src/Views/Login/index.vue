<template>
  <section class="login-wrapper container">
    <div class="columns bg-gray">
      <div class="column col-4 col-mx-auto">
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
                    rules: 'required'
                  }"
                ></my-input>
              </div>
              <div class="form-group">
                <label class="form-label" for="passwordInput">รหัสผ่าน</label>
                <my-input
                  :config="{
                    type: 'password',
                    key: 'password',
                    placeholder: 'รหัสผ่าน',
                    rules: 'required'
                  }"
                ></my-input>
              </div>
            </div>
            <div class="card-footer text-center">
              <!-- <a class="btn btn-dark" href="#" @click="login()">เข้าใช้งาน</a> -->
              <my-button :config="{icon: null, btnClass: 'btn btn-dark', doConfirm: false, text: 'เข้าใช้งาน'}" @submit="(tf) => submitHandle('login', tf)"></my-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyInput from '@Components/Form/myInput'
import MyButton from '@Components/Form/myButton'
export default {
  props: {
    // mode: {
    //   type: String,
    //   required: true
    // }
  },
  components: {
    MyInput,
    MyButton
  },
  name: 'LoginPage',
  data () {
    return {
      property: 'Blank'
    }
  },
  computed: {
    // propertyComputed() {
    // }
  },
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  methods: {
    submitHandle (btnTarget, tf) {
      this.GOTOPAGE('Status')
      // Login
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
