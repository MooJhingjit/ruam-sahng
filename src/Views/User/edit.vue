<template>
  <section class="" v-if="server !== null">
    <div class="column col-12 col-xs-12">
      <page-title>
        <template slot="left-slot">
          <div class="p-2 bg-primary">
            ข้อมูลผู้ใช้ {{local.name}}
          </div>
        </template>
        <div class="has-icon-left" slot="right-slot"></div>
      </page-title>
    </div>
    <div class="column col-12">
      <div class="card bg-gray">
        <div class="card-body">
          <div class="columns">
            <div class="column col-6">
              <div class="columns">
                <div class="column col-12 col-mx-auto">
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">ชื่อ-นามสกุล</label>
                    <my-input
                      :config="{
                        type: 'text',
                        key: 'name',
                        placeholder: 'ชื่อ-นามสกุล',
                        rules: 'required',
                        validator: $validator
                      }"
                      :value="local.name"
                      @input="val => {local.name = val}"
                    ></my-input>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column col-12 col-mx-auto">
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">ชื่อเข้าใช้งาน(เข้าสู่ระบบ)</label>
                    <my-input
                      :config="{
                        type: 'text',
                        key: 'userName',
                        placeholder: 'ชื่อเข้าใช้งาน',
                        rules: 'required',
                        validator: $validator
                      }"
                      :value="local.userName"
                      @input="value => { local.userName = value }"
                    ></my-input>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column col-12 col-mx-auto">
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">แผนก</label>
                    <my-option
                      :config="{
                        type: 'text',
                        key: 'department',
                        rules: 'required',
                        validator: $validator,
                        selection: server.department,
                        isDisable: !ISADMIN
                      }"
                      :value="local.department"
                      @input="value => { local.department = value }"
                    ></my-option>
                  </div>
                </div>
              </div>
              <div class="columns" v-if="local.department === 'qc'">
                <div class="column col-12 col-mx-auto">
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">ประเภท QC</label>
                    <my-option
                      :config="{
                        type: 'text',
                        key: 'qcSection',
                        rules: 'required',
                        validator: $validator,
                        selection: server.qcSection,
                        isDisable: !ISADMIN
                      }"
                      :value="local.qcSection"
                      @input="value => { local.qcSection = value }"
                    ></my-option>
                  </div>
                </div>
              </div>
            </div>
            <div class="column col-6">
              <div class="columns" v-if="userKey !== 'new'">
                <div class="column col-12 col-mx-auto">
                  <label class="form-label" for="input-example-1">รหัสผ่าน</label>
                  <div class="card p-2">
                    <my-button
                    v-if="!local.pass.doOpenPanel"
                    :config="{
                      icon: 'fa fa-hand-pointer-o',
                      btnClass: 'btn', doConfirm: false,
                      text: 'เปลี่ยนรหัสผ่าน'
                    }"
                    @submit="(tf) => submitHandle('openPassPanel', tf)"
                    ></my-button>
                    <my-button
                    v-else
                    :config="{
                      icon: 'fa fa-times-circle',
                      btnClass: 'btn', doConfirm: false, text: 'ปิด'
                    }"
                    @submit="(tf) => submitHandle('closePassPanel', tf)"
                    ></my-button>
                    <div class="form-group" v-if="local.pass.doOpenPanel">
                      <label class="form-label" for="input-example-1">รหัสผ่านเก่า</label>
                      <my-input
                        :config="{
                          type: 'password',
                          key: 'oldPass',
                          placeholder: 'รหัสผ่านเก่า',
                          rules: 'required',
                          validator: $validator
                        }"
                        :value="local.pass.old"
                        @input="value => {local.pass.old = value}"
                      ></my-input>
                      <label class="form-label" for="input-example-1">รหัสผ่านใหม่</label>
                      <my-input
                        :config="{
                          type: 'password',
                          key: 'newPass',
                          placeholder: 'รหัสผ่านใหม่',
                          rules: 'required',
                          validator: $validator
                        }"
                        :value="local.pass.new"
                        @input="value => {local.pass.new = value}"
                      ></my-input>
                      <label class="form-label" for="input-example-1">ยืนยันรหัสผ่านใหม่</label>
                      <my-input
                        :config="{
                          type: 'password',
                          key: 'confirmPass',
                          placeholder: 'รหัสผ่านใหม่',
                          rules: 'required',
                          validator: $validator
                        }"
                        :value="local.pass.confirm"
                        @input="value => {local.pass.confirm = value}"
                      ></my-input>
                      <br/>
                      <label class="text-error" v-if="local.pass.isMatch === false">ข้อมูลรหัสผ่านไม่ตรงกัน กรุณาตรวจสอบ</label>
                      <!-- <label class="text-success" v-if="local.pass.isMatch === true">ข้อมูลรหัสผ่านตรงกัน</label> -->
                      <!-- <p class="p-1 text-success">กดปุ่มบันทึกเพื่อบันทึกข้อมูล</p> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns" v-if="userKey === 'new'">
                <div class="column col-12 col-mx-auto">
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">รหัสผ่าน</label>
                      <my-input
                      :config="{
                        type: 'password',
                        key: 'newPass',
                        placeholder: 'รหัสผ่าน',
                        rules: 'required',
                        validator: $validator
                      }"
                      :value="local.pass.new"
                      @input="value => {local.pass.new = value}"
                    ></my-input>
                  </div>
                </div>
              </div>

              <div class="columns" v-if="userKey === 'new'">
                <div class="column col-12 col-mx-auto">
                  <div class="form-group">
                    <label class="form-label" for="input-example-1">ยืนยันรหัสผ่าน</label>
                      <my-input
                      :config="{
                        type: 'password',
                        key: 'confirmPass',
                        placeholder: 'รหัสผ่าน',
                        rules: 'required',
                        validator: $validator
                      }"
                      :value="local.pass.confirm"
                      @input="value => {local.pass.confirm = value}"
                    ></my-input>
                  </div>
                </div>
              </div>
              <label class="text-error" v-if="local.pass.isMatch === false && userKey === 'new'">ข้อมูลรหัสผ่านไม่ตรงกัน กรุณาตรวจสอบ</label>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="columns">
            <div class="column text-center">
              <my-button
              :config="{icon: 'fa fa-check-circle', btnClass: 'btn btn-success', doConfirm: true, text: 'บันทึก'}"
              @submit="(tf) => submitHandle('update', tf)">
              </my-button>
            </div>
            <div class="column text-center" v-if="userKey !== 'new'">
              <my-button
              :config="{icon: 'fa fa-trash', btnClass: 'btn btn-error', doConfirm: true, text: 'ลบผู้ใช้'}"
              @submit="(tf) => submitHandle('delete', tf)">
              </my-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import config from '@Config/app.config'
import service from '@Services/app.service'
import PageTitle from '@Components/PageTitle'
import MyInput from '@Components/Form/myInput'
import MyOption from '@Components/Form/myOption'
import MyButton from '@Components/Form/myButton'
export default {
  props: {
    // mode: {
    //   type: String,
    //   required: true
    // }
  },
  components: {
    PageTitle,
    MyInput,
    MyOption,
    MyButton
  },
  name: 'UserEditPage',
  data () {
    return {
      server: null,
      local: {
        name: null,
        userName: null,
        department: null,
        qcSection: null,
        pass: {
          old: null,
          new: null,
          confirm: null,
          doOpenPanel: false,
          isMatch: null
        }
      }
    }
  },
  computed: {
    newPassword () {
      return this.local.pass.new
    },
    confirmPassword () {
      return this.local.pass.confirm
    },
    userKey () {
      return this.$route.params.key
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      let resourceName = `${config.api.user.index}/${this.userKey}`
      let res = await service.getResource({ resourceName, queryString: [] })
      this.server = res.data.result
      if (this.userKey !== 'new') {
        this.local.name = this.server.user.name
        this.local.userName = this.server.user.username
        this.local.department = this.server.user.department
        this.local.qcSection = this.server.user.qcSection
      }
    },
    async submitHandle (action, tf = false) {
      switch (action) {
        case 'closePassPanel':
          this.local.pass.doOpenPanel = false
          this.local.pass.old = null
          this.local.pass.new = null
          this.local.pass.confirm = null
          return
        case 'openPassPanel':
          this.local.pass.doOpenPanel = true
          return
          // break
        case 'update':
          if (!tf) return
          // console.log(this.local)
          let isValid = await this.$validator.validateAll()
          if (isValid) {
            let resourceName = `${config.api.user.index}/${this.userKey}`
            let data = {
              name: this.local.name,
              username: this.local.userName,
              department: this.local.department,
              oldPass: this.local.pass.old,
              newPass: this.local.pass.new
            }
            if (this.local.department === 'qc') {
              data.qcSection = this.local.qcSection
            }
            if (this.local.pass.isMatch === false) return
            try {
              if (this.userKey !== 'new') {
                await service.putResource({ data, resourceName })
              } else { // create user
                resourceName = `${config.api.user.index}`
                await service.postResource({ data, resourceName })
              }
              this.$notify('ทำรายการเสร็จสิ้น', 'success')
              this.GO_TOPAGE('User')
            } catch (error) {
              this.$notify('ข้อมูลไม่ถูกต้อง โปรดตรวจสอบ', 'error')
            }
          }
          break
        case 'delete':
        if (!tf) return
          let resourceName = `${config.api.user.index}/${this.userKey}`
          try {
              await service.deleteResource({ resourceName, queryString: [] })
              this.$notify('ทำรายการเสร็จสิ้น', 'success')
              this.GO_TOPAGE('User')
            } catch (error) {
              this.$notify('ข้อมูลไม่ถูกต้อง โปรดตรวจสอบ', 'error')
            }
          return
      }
    },
    passUpdate () {
      if (this.newPassword && this.confirmPassword) {
        if (this.newPassword !== this.confirmPassword) {
          this.local.pass.isMatch = false
        } else {
          this.local.pass.isMatch = true
        }
      } else {
        this.local.pass.isMatch = null
      }
    }
  },
  watch: {
    newPassword () {
      this.passUpdate()
    },
    confirmPassword () {
      this.passUpdate()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
