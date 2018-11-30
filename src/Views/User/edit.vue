<template>
  <section class="">
    <div class="column col-12 col-xs-12">
      <page-title>
        <template slot="left-slot">
          <div class="p-2 bg-primary">
            ข้อมูลผู้ใช้ ปกครอง จริงจิตร
          </div>
        </template>
        <div class="has-icon-left" slot="right-slot"></div>
      </page-title>
    </div>
    <div class="column col-12">
      <div class="card bg-gray">
        <div class="card-body">
          <div class="columns">
            <div class="column col-4 col-mx-auto">
              <div class="form-group">
                <label class="form-label" for="input-example-1">ชื่อ-นามสกุล</label>
                <my-input
                  :config="{
                    type: 'text',
                    key: 'userName',
                    placeholder: 'ชื่อ-นามสกุล',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.name"
                  @input="value => { local.name = value }"
                ></my-input>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column col-4 col-mx-auto">
              <div class="form-group">
                <label class="form-label" for="input-example-1">ชื่อเข้าใช้งาน(เข้าสู่ระบบ)</label>
                <my-input
                  :config="{
                    type: 'text',
                    key: 'userUsername',
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
            <div class="column col-4 col-mx-auto">
               <div class="card p-2">
                <my-button 
                v-if="!local.pass.doOpenPanel"
                :config="{
                  icon: 'fa fa-check-circle',
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
                  <label class="form-label" for="input-example-1"></label>
                  <my-input
                    :config="{
                      type: 'password',
                      key: 'userOldPass',
                      placeholder: 'รหัสผ่านเก่า',
                      rules: 'required',
                      validator: $validator
                    }"
                    :value="local.pass.old"
                    @input="value => {local.pass.old = value}"
                  ></my-input><br/>
                  <my-input
                    :config="{
                      type: 'password',
                      key: 'userNewPass',
                      placeholder: 'รหัสผ่านใหม่',
                      rules: 'required',
                      validator: $validator
                    }"
                    :value="local.pass.new"
                    @input="value => {local.pass.new = value}"
                  ></my-input><br/>
                  <my-input
                    :config="{
                      type: 'password',
                      key: 'userNewPassConfirmation',
                      placeholder: 'รหัสผ่านใหม่',
                      rules: 'required',
                      validator: $validator
                    }"
                    :value="local.pass.confirm"
                    @input="value => {local.pass.confirm = value}"
                  ></my-input><br/>
                  <label class="text-success">กดปุ่มบันทึกเพื่อบันทึกข้อมูล</label>
                  <!-- <p class="p-1 text-success">กดปุ่มบันทึกเพื่อบันทึกข้อมูล</p> -->
                </div>
               </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="columns">
            <div class="column col-12 center text-center">
              <my-button 
              :config="{icon: 'fa fa-check-circle', btnClass: 'btn btn-success', doConfirm: true, text: 'บันทึก'}" 
              @submit="(tf) => submitHandle('update', tf)">
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
    MyButton
  },
  name: 'UserEditPage',
  data () {
    return {
      server: {},
      local: {
        name: '',
        userName: '',
        pass: {
          old: '',
          new: '',
          confirm: '',
          doOpenPanel: false
        }
      }
    }
  },
  computed: {
    // propertyComputed() {
    // }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      let resourceName = config.api.user.index
      let res = await service.getResource({ resourceName, queryString: [] })
      this.server = res.data
      console.log(this.server)
    },
    async submitHandle (action) {
      switch(action) {
        case 'closePassPanel':
            this.local.pass.doOpenPanel = false
            return
            break;
        case 'openPassPanel':
            this.local.pass.doOpenPanel = true
            return
            break;
        case 'update':
          // console.log(this.local)
          let isValid = await this.$validator.validateAll()
          if (isValid) {
            // let resourceName = config.api.user.index
            let data = {
              name: this.local.name,
              username: this.local.userName,
              password: this.local.pass.new
            }
            console.log(data)
            // let res = await service.putResource({data, resourceName})
            // if (res.status === 200) {
            //   this.NOTIFY('error')
            // }
            // this.NOTIFY('success')
          }
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
