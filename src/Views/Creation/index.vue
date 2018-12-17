<template>
  <section class="" v-if="server !== null">
    <div class="column col-12 col-xs-12">
      <div class="card bg-gray">
        <div class="card-body">
          <div class="columns">
            <div class="column col-6 col-sm-12">
              <!-- {{this.local.inputs}} -->
              <div class="form-group">
                <label class="form-label" for="input-example-1">เลขที่</label>
                <my-input
                  :config="{
                    type: 'text',
                    key: 'jobCode',
                    placeholder: 'เลขที่',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.inputs.header.jobCode"
                  @input="val => {local.inputs.header.jobCode = val}"
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
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.inputs.header.customer.name"
                  @input="val => {local.inputs.header.customer.name = val}"
                ></my-input>
                <input type="hidden" name="cusId" v-model="local.inputs.header.customer.id">
              </div>
            </div>
            <div class="column col-6 col-sm-12">
              <div class="form-group">
                <label class="form-label" for="input-example-1">วันเริ่มเปิดจ็อบ</label>
                <my-date-picker
                  :config="{
                    key: 'dateStart',
                    placeholder: 'วันเริ่มเปิดจ็อบ',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.inputs.header.createDate"
                  @input="val => {local.inputs.header.createDate = val}"
                ></my-date-picker>
              </div>
            </div>
            <div class="column col-6 col-sm-12"></div>
            <div class="column col-12 pt-3">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th class="text-center">รายการผลิต</th>
                    <th class="text-center" width="100">จำนวน</th>
                    <th class="text-center" width="100">หนา</th>
                    <th class="text-center">หมายเหตุ</th>
                    <th width="10"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr :key="index" v-for="(product, index) in local.inputs.products">
                    <td class="text-center">
                      <my-input
                        :config="{
                          type: 'text',
                          key: `jobName${index}`,
                          placeholder: 'ชื่อรายการผลิต',
                          rules: 'required',
                          validator: $validator
                        }"
                        :value="product.name"
                        @input="val => {product.name = val}"
                      ></my-input>
                      <!-- <input class="form-input" type="text" id="input-example-1" placeholder="ชื่อรายการผลิต"> -->
                    </td>
                    <td class="text-center">
                      <my-input
                        :config="{
                          type: 'text',
                          key: `amount${index}`,
                          placeholder: 'จำนวน',
                          rules: 'required',
                          validator: $validator
                        }"
                        :value="product.amount"
                        @input="val => {product.amount = val}"
                      ></my-input>
                      <!-- <input class="form-input" type="text" id="input-example-1" placeholder="จำนวน"> -->
                    </td>
                    <td class="text-center">
                      <my-input
                        :config="{
                          type: 'text',
                          key: `thickness${index}`,
                          placeholder: 'หนา',
                          rules: 'required',
                          validator: $validator
                        }"
                        :value="product.thickness"
                        @input="val => {product.thickness = val}"
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
                        :value="product.note"
                        @input="val => {product.note = val}"
                      ></my-input>
                      <!-- <input class="form-input" type="text" id="input-example-1" placeholder="ระบุหมายเหตุ"> -->
                    </td>
                    <td>
                      <i 
                        v-if="product.name"
                        :class="['fa fa-ellipsis-h h4 p-2 c-hand', {'text-error': local.productRequired.indexOf(index) >= 0}]"
                        aria-hidden="true"
                      @click="inputProductDetail(index)"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-right">
                <i class="fa fa-minus-circle h4 p-2 c-hand" aria-hidden="true" v-if="local.inputs.products.length > 1" @click="editTable('minus')"></i>
                <i class="fa fa-plus-circle h4 p-2 c-hand" aria-hidden="true" @click="editTable('add')"></i>
              </div>
            </div>
            <template v-if="productSelected !== null">
              <div class="column col-12">
                <h5>รายละเอียดการผลิต: <span class="label label-primary">{{local.inputs.products[productSelected].name}}</span></h5>
              </div>
              <div class="column col-6 col-sm-12">
                <div class="form-group">
                  <div class="form-group">
                      <label class="form-label" for="input-example-1">กำหนดส่ง</label>
                      <my-date-picker
                        :key="`dateEnd_${productSelected}`"
                        :config="{
                          key: 'dateEnd',
                          placeholder: 'กำหนดส่ง',
                          rules: 'required',
                          validator: $validator
                        }"
                        :value="local.inputs.products[productSelected].dateEnd"
                        @input="val => {local.inputs.products[productSelected].dateEnd = val}"
                      ></my-date-picker>
                    </div>
                </div>
                <div class="form-group">
                  <div class="col-12 col-sm-12">
                    <label class="form-label" for="input-example-4">
                      ประเภทตู้
                      <span class="text-error"  v-if="errors.has('productType')">กรุณาตรวจสอบข้อมูลข้างต้น</span></label>
                  </div>
                  <div class="col-12 col-sm-12  panel p-2">
                    <label :key="index" class="form-radio" v-for="(item, index) in productType">
                      <input type="radio" name="productType"
                      v-validate="'required'"
                      @change="selectProductType()"
                      v-model="local.inputs.products[productSelected].type" :value="item.key">
                      <i class="form-icon"></i> {{item.name}}
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-12 col-sm-12">
                    <label class="form-label" for="input-example-4">แผนก</label>
                  </div>
                  <div class="col-12 col-sm-12 panel p-2">
                    <label class="form-checkbox form-inline c-hand"
                    :key="index"
                    v-for="(item, index) in productDepartment"
                    >
                      <input type="checkbox" :value="item.key"
                      v-model="local.inputs.products[productSelected].departmentSelected">
                      <i class="form-icon"></i> {{item.name}}
                    </label>
                  </div>
                </div>
              </div>
              <div class="column col-6 col-sm-12">
                  <div class="form-group">
                    <div class="col-12 col-sm-12">
                      <label class="form-label" for="input-example-4">วัสดุ</label>
                    </div>
                    <div class="col-12 col-sm-12  panel p-2">
                      <label class="form-radio"
                      :key="index"
                      v-for="(item, index) in equipment"
                      >
                        <input type="radio" :value="item.key"
                        v-model="local.inputs.products[productSelected].equipment">
                        <i class="form-icon"></i> {{item.name}}
                      </label>
                      <my-input
                      v-if="local.inputs.products[productSelected].equipment === 2"
                      :config="{
                        type: 'text',
                        key: 'surface',
                        placeholder: 'พื้นผิว (สแตนเลส)',
                        rules: 'required',
                        validator: $validator
                      }"
                      :value="local.inputs.products[productSelected].options.surface"
                      @input="val => {local.inputs.products[productSelected].options.surface = val}"
                      ></my-input>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-12 col-sm-12">
                      <label class="form-label" for="input-example-4">สี</label>
                    </div>
                    <div class="col-12 col-sm-12  panel p-2">
                      <label class="form-radio"
                      :key="index"
                      v-for="(item, index) in colortype"
                      >
                        <input type="radio" :value="item.key"
                        v-model="local.inputs.products[productSelected].colorType">
                        <i class="form-icon"></i> {{item.name}}
                      </label>
                      <my-input
                      v-if="local.inputs.products[productSelected].colorType === 2"
                      :config="{
                        type: 'text',
                        key: 'colorCode',
                        placeholder: 'รายการสี (พ่น)',
                        rules: 'required',
                        validator: $validator
                      }"
                      :value="local.inputs.products[productSelected].options.colorName"
                      @input="val => {local.inputs.products[productSelected].options.colorName = val}"
                      ></my-input>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-12 col-sm-12">
                      <label class="form-label" for="input-example-4">อุปกรณ์เสริม</label>
                    </div>
                    <div class="col-12 col-sm-12  panel p-2">
                      <label class="form-checkbox form-inline c-hand"
                      :key="index"
                      v-for="(item, index) in accessory"
                      >
                        <input type="checkbox" :value="item.key"
                        v-model="local.inputs.products[productSelected].accessory">
                        <i class="form-icon"></i> {{item.name}}
                      </label>
                    </div>
                  </div>
              </div>
            </template>
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
import { bus } from '@/main'
import PageTitle from '@Components/PageTitle'
import MyModal from '@Components/Modal'
import MyInput from '@Components/Form/myInput'
import MyDatePicker from '@Components/Form/myDatePicker'
import MyButton from '@Components/Form/myButton'
import Helper from '@Libraries/common.helpers'
import config from '@Config/app.config'
import service from '@Services/app.service'

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
    MyDatePicker,
    MyButton
  },
  name: 'CreationPage',
  data () {
    return {
      local: {
        inputs: {
          header: {
            jobCode: null,
            customer: {
              id: null,
              name: null
            },
            createDate: null
          },
          products: []
        },
        productTemplate: {
          name: null,
          amount: null,
          thickness: null,
          note: null,
          dateEnd: null,
          type: null,
          departmentSelected: [],
          equipment: [],
          colorType: [],
          accessory: [],
          options: {}
        },
        productSelected: null,
        productRequired: []
      },
      server: null
    }
  },
  computed: {
    productType () {
      return this.server.config.productType
    },
    productDepartment () {
      return this.server.config.productDepartment
    },
    equipment () {
      return this.server.config.equipment
    },
    colortype () {
      return this.server.config.colorType
    },
    accessory () {
      return this.server.config.accessory
    },
    productSelected () {
      return this.local.productSelected
    }
  },
  created () {
    if (!this.ISADMIN) {
      this.GO_TOPAGE('Product')
      return
    }
    this.fetchData()
    this.editTable('add')
  },
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  methods: {
    async fetchData () {
      let resourceName = config.api.job.index
      let res = await service.getResource({ resourceName, queryString: [] })
      this.server = {}
      this.server.config = res.data.result.config
    },
    inputProductDetail (productIndex) {
      this.local.productSelected = productIndex
    },
    editTable (actionType) {
      if (actionType === 'minus') {
        this.updateProduct()
        this.local.inputs.products.pop()
      } else {
        let product = Helper.COPY_OBJECT(this.local.productTemplate)
        this.local.inputs.products.push(product)
      }
    },
    selectProductType () {
      let type = this.local.inputs.products[this.productSelected].type
      let departmentSelected = this.productDepartment.map((item) => {
        return item.key
      })
      if (type === 1) { // ตู้เปล่่า
        departmentSelected = departmentSelected.filter((item) => {
          return (item !== 9 && item !== 10)
        })
      }
      this.local.inputs.products[this.productSelected].departmentSelected = departmentSelected
    },
    async submitHandle (btnTarget, isConfirm) {
      let isValid = await this.$validator.validateAll()
      let isValidData = this.checkProductData()
      if (isConfirm && isValid && isValidData) {
        let resourceName = config.api.job.index
        let data = { input: this.local.inputs }
        await service.postResource({ resourceName, data })
        this.updateProduct()
        this.local.productRequired = []
        this.$notify('ทำรายการเสร็จสิ้น', 'success')
        this.GO_TOPAGE('Product')
      }
    },
    checkProductData () {
      this.local.productRequired = []
      let isPass = true
      this.local.inputs.products.map((item, index) => {
        if (item.dateEnd === null || item.type === null || item.departmentSelected.length === 0) {
          isPass = false
          this.local.productRequired.push(index)
        }
      })
      return isPass
    },
    updateProduct () {
      let emitObj = {
        key: 'UPDATE_PRODUCT',
        data: {
          // message: 'created'
        }
      }
      bus.$emit('emitSocket', emitObj)
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
