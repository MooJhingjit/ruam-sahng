<template>
  <section class="">
    <div class="column col-12 col-xs-12">
      <div class="card bg-gray">
        <div class="card-body">
          <div class="columns">
            <div class="column col-6 col-sm-12">
              <div class="form-group">
                <label class="form-label" for="input-example-1">เลขที่</label>
                <my-input
                  :config="{
                    type: 'text',
                    key: 'jobId',
                    placeholder: 'เลขที่',
                    rules: 'required'
                  }"
                ></my-input>
              </div>
            </div>
            <div class="column col-6 col-sm-12">
              <div class="form-group">
                <label class="form-label" for="input-example-1">ชื่อลูกค้า</label>
                <my-input
                  :config="{
                    type: 'text',
                    key: 'cusName',
                    placeholder: 'ชื่อลูกค้า',
                    rules: 'required'
                  }"
                ></my-input>
              </div>
            </div>
            <div class="column col-6 col-sm-12">
              <div class="form-group">
                <label class="form-label" for="input-example-1">วันผลิต</label>
                <my-input
                  :config="{
                    type: 'text',
                    key: 'dateStart',
                    placeholder: 'วันผลิต',
                    rules: 'required'
                  }"
                ></my-input>
              </div>
            </div>
            <div class="column col-6 col-sm-12">
              <div class="form-group">
                <label class="form-label" for="input-example-1">กำหนดเสร็จ</label>
                <my-input
                  :config="{
                    type: 'text',
                    key: 'dateEnd',
                    placeholder: 'กำหนดเสร็จ',
                    rules: 'required'
                  }"
                ></my-input>
              </div>
            </div>
            <div class="column col-12 pt-3">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th class="text-center">รายการผลิต</th>
                    <th class="text-center" width="100">จำนวน</th>
                    <th class="text-center" width="100">หนา</th>
                    <th class="text-center">หมายเหตุ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="" :key="index" v-for="(item, index) in local.inputs">
                    <td class="text-center">
                      <my-input
                        :config="{
                          type: 'text',
                          key: `jobName${index}`,
                          placeholder: 'ชื่อรายการผลิต',
                          rules: 'required'
                        }"
                      ></my-input>
                      <!-- <input class="form-input" type="text" id="input-example-1" placeholder="ชื่อรายการผลิต"> -->
                    </td>
                    <td class="text-center">
                      <my-input
                        :config="{
                          type: 'text',
                          key: `amount${index}`,
                          placeholder: 'จำนวน',
                          rules: 'required'
                        }"
                      ></my-input>
                      <!-- <input class="form-input" type="text" id="input-example-1" placeholder="จำนวน"> -->
                    </td>
                    <td class="text-center">
                      <my-input
                        :config="{
                          type: 'text',
                          key: `thick${index}`,
                          placeholder: 'หนา',
                          rules: 'required'
                        }"
                      ></my-input>
                      <!-- <input class="form-input" type="text" id="input-example-1" placeholder="หนา"> -->
                    </td>
                    <td class="text-center">
                      <my-input
                        :config="{
                          type: 'text',
                          key: `note${index}`,
                          placeholder: 'ระบุหมายเหตุ',
                          rules: ''
                        }"
                      ></my-input>
                      <!-- <input class="form-input" type="text" id="input-example-1" placeholder="ระบุหมายเหตุ"> -->
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-right">
                <i class="fa fa-minus-circle h4 p-2 c-hand" aria-hidden="true" v-if="local.inputs.length > 1" @click="editTable('minus')"></i>
                <i class="fa fa-plus-circle h4 p-2 c-hand" aria-hidden="true" @click="editTable('add')"></i>
              </div>
            </div>
            <div class="column col-6 col-sm-12">
              <div class="form-group">
                <div class="col-12 col-sm-12">
                  <label class="form-label" for="input-example-4">ประเภทตู้</label>
                </div>
                <div class="col-12 col-sm-12  panel p-2">
                  <label class="form-checkbox form-inline c-hand">
                    <input type="checkbox"><i class="form-icon"></i> ตู้เปล่า
                  </label>
                  <label class="form-checkbox form-inline c-hand">
                    <input type="checkbox"><i class="form-icon"></i> วายริ่ง
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="col-12 col-sm-12">
                  <label class="form-label" for="input-example-4">แผนก</label>
                </div>
                <div class="col-12 col-sm-12 panel p-2">
                  <label class="form-checkbox form-inline c-hand">
                    <input type="checkbox"><i class="form-icon"></i> สเปคงาน
                  </label>
                  <label class="form-checkbox form-inline c-hand">
                    <input type="checkbox"><i class="form-icon"></i> แบบ
                  </label>
                  <label class="form-checkbox form-inline c-hand">
                    <input type="checkbox"><i class="form-icon"></i> ตัด
                  </label>
                  <label class="form-checkbox form-inline c-hand">
                    <input type="checkbox"><i class="form-icon"></i> พันท์
                  </label>
                  <label class="form-checkbox form-inline c-hand">
                    <input type="checkbox"><i class="form-icon"></i> พับ
                  </label>
                  <label class="form-checkbox form-inline c-hand">
                    <input type="checkbox"><i class="form-icon"></i> เชื่อมประกอบ
                  </label>
                  <label class="form-checkbox form-inline c-hand">
                    <input type="checkbox"><i class="form-icon"></i> พ่นสี
                  </label>
                  <label class="form-checkbox form-inline c-hand">
                    <input type="checkbox"><i class="form-icon"></i> ประกอบสำเร็จรูป
                  </label>
                  <label class="form-checkbox form-inline c-hand">
                    <input type="checkbox"><i class="form-icon"></i> อุปกรณ์
                  </label>
                  <label class="form-checkbox form-inline c-hand">
                    <input type="checkbox"><i class="form-icon"></i> วายริ่ง
                  </label>
                </div>
              </div>
            </div>
            <div class="column col-6 col-sm-12">
                <div class="form-group">
                  <div class="col-12 col-sm-12">
                    <label class="form-label" for="input-example-4">อุปกรณ์</label>
                  </div>
                  <div class="col-12 col-sm-12  panel p-2">
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> รออุปกรณ์
                    </label>
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> อุปกรณ์ครบ
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-12 col-sm-12">
                    <label class="form-label" for="input-example-4">วัสดุ</label>
                  </div>
                  <div class="col-12 col-sm-12  panel p-2">
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> เหล็ก
                    </label>
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> สแตนเลส
                    </label>
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> สังกะสี
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-12 col-sm-12">
                    <label class="form-label" for="input-example-4">สี</label>
                  </div>
                  <div class="col-12 col-sm-12  panel p-2">
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> ชุบ
                    </label>
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> พ่น
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-12 col-sm-12">
                    <label class="form-label" for="input-example-4">อุปกรณ์เสริม</label>
                  </div>
                  <div class="col-12 col-sm-12  panel p-2">
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> ใส่กระจก
                    </label>
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> ใส่ยาง
                    </label>
                  </div>
                </div>
            </div>
            <div class="column col-12">
              <div class="form-group">
                <label class="form-label" for="input-example-3">ระบุข้อมูลอื่นๆ</label>
                <textarea class="form-input" id="input-example-3" placeholder="" rows="3"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="columns">
            <div class="column col-12 center text-center">
              <my-button :config="{icon: 'fa fa-check-circle', btnClass: 'btn btn-success', doConfirm: true, text: 'บันทึก'}" @submit="(tf) => submitHandle('save', tf)"></my-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-modal ref="myModal"></my-modal>
  </section>
</template>

<script>
import PageTitle from '@Components/PageTitle'
import MyModal from '@Components/Modal'
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
    MyModal,
    MyInput,
    MyButton
  },
  name: 'CreationPage',
  data () {
    return {
      local: {
        inputs: [{}]
      }
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
    editTable (actionType) {
      if (actionType === 'minus') {
        this.local.inputs.pop()
      } else {
        this.local.inputs.push({})
      }
    },
    submitHandle (btnTarget, tf) {
      if (tf) {
        this.$notify('TEST', 'success')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-footer{
  margin-top: 15px;
}
.pt-3{
  padding-top: 1rem!important;
}
label{
  width: fit-content;
}

</style>
