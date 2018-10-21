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
                <input class="form-input" id="usernameInput" type="text" placeholder="ชื่อผู้ใช้">
              </div>
              <div class="form-group">
                <label class="form-label" for="passwordInput">รหัสผ่าน</label>
                <input class="form-input" id="passwordInput" type="password" placeholder="รหัสผ่าน">
              </div>
            </div>
            <div class="card-footer text-center">
              <a class="btn btn-dark" href="#" @click="login()">เข้าใช้งาน</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    // mode: {
    //   type: String,
    //   required: true
    // }
  },
  components: {},
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
    login () {
      this.GOTOPAGE('Status')
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
