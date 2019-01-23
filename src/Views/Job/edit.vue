<template>
  <section class="" v-if="server !== null">
    <div class="column col-12 col-xs-12">
      <div class="card bg-gray">
        <div class="card-body">
          <div class="columns">
            <div class="column col-6 col-sm-12">
              <!-- {{this.local.inputs}} -->
              <div class="form-group">
                <label class="form-label" for="input-example-1">เลขที่จ๊อบ</label>
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
                <label class="form-label" for="input-example-1">วันเริ่มเปิดจ๊อบ</label>
                <my-date-picker
                  :config="{
                    key: 'dateStart',
                    placeholder: 'วันเริ่มเปิดจ๊อบ',
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
                        :class="['fa fa-list h4 p-2 c-hand', {'text-error': local.productRequired.indexOf(index) >= 0}]"
                        aria-hidden="true"
                      @click="inputProductDetail(index)"></i>
                    </td>
                    <td><i class="fa fa-minus-circle h4 p-2 c-hand text-error" aria-hidden="true" @click="removeProduct(index)"></i></td>
                  </tr>
                </tbody>
              </table>
              <div class="text-right">
                <i class="fa fa-minus-circle h4 p-2 c-hand text-error" aria-hidden="true" v-if="local.inputs.products.length > 1" @click="editTable('minus')"></i>
                <i class="fa fa-plus-circle h4 p-2 c-hand text-success" aria-hidden="true" @click="editTable('add')"></i>
              </div>
            </div>
            <template v-if="productSelected !== null">
              <!-- {{local.inputs.products[productSelected]}} -->
              <div class="column col-12">
                <h5>รายละเอียดการผลิต: 
                  <span 
                  class="label label-primary c-hand"
                  v-if="isUpdateMode && local.inputs.products[productSelected].id !== null"
                  @click="GO_TOPAGE('ProductUpdate', { key: local.inputs.products[productSelected].id })" >{{local.inputs.products[productSelected].name}}</span>
                  <span class="label label-primary" v-else>{{local.inputs.products[productSelected].name}}</span>
                </h5>
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
                    <div class="col-12 columns" :key="index" v-for="(item, index) in productType">
                      <div class="column">
                        <label :key="index" class="form-radio" >
                          <input type="radio" name="productType"
                          :class="[{'disabled': isDisable(local.inputs.products[productSelected].id)}]"
                          :disabled="isDisable(local.inputs.products[productSelected].id)" 
                          v-validate="'required'"
                          @change="selectProductType()"
                          v-model="local.inputs.products[productSelected].type" :value="item.key">
                          <i class="form-icon"></i> {{item.name}}
                        </label>
                      </div>
                      <div class="col-8 col-sm-8 column">
                        <my-input
                          v-if="local.inputs.products[productSelected].type == 3 && item.key === 3"
                          :key="`otherTypeName_${productSelected}`"
                          :config="{
                            type: 'text',
                            key: 'otherTypeName',
                            placeholder: 'ระบุประเภทตู้',
                            rules: 'required',
                            validator: $validator
                          }"
                          :value="local.inputs.products[productSelected].otherTypeName"
                           @input="val => {local.inputs.products[productSelected].otherTypeName = val}"
                          ></my-input>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-12 col-sm-12">
                    <label class="form-label" for="input-example-4">แผนก
                      <span class="text-error"  v-if="errors.has('department')">กรุณาตรวจสอบข้อมูลข้างต้น</span>
                    </label>
                  </div>
                  <div class="col-12 col-sm-12 panel p-2">
                    <label class="form-checkbox form-inline c-hand"
                    :key="index"
                    v-for="(item, index) in productDepartment"
                    >
                      <input :class="[{'disabled': isDisable(local.inputs.products[productSelected].id)}]"
                      :disabled="isDisable(local.inputs.products[productSelected].id)" type="checkbox" :value="item.key"
                      name="department" v-validate="'required'"
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
                      :key="`equipment_${productSelected}`"
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
                      :key="`colorCode_${productSelected}`"
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
          <div class="columns" style="justify-content: center">
            <div class="column col-6 center text-center">
              <my-button :config="{icon: 'fa fa-check-circle', btnClass: 'btn btn-success', doConfirm: true, text: 'บันทึก'}" @submit="(tf) => submitHandle('save', tf)"></my-button>
            </div>
            <div class="column col-6 center text-center" v-if="isUpdateMode">
              <my-button :config="{icon: 'fa fa-minus-circle', btnClass: 'btn btn-error', doConfirm: true, text: 'ลบจ๊อบนี้'}" @submit="(tf) => deleteJob(tf)"></my-button>
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
  name: 'JobPage',
  data () {
    return {
      local: {
        itemType: 'create',
        inputs: {
          header: {
            jobCode: null,
            jobId: null,
            customer: {
              id: null,
              name: null
            },
            createDate: null
          },
          products: []
        },
        productTemplate: {
          id: null,
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
    },
    productAll () { // for watching
      return this.local.inputs.products
    },
    isUpdateMode () {
      return (this.local.itemType !== 'create')
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
  methods: {
    async fetchData () {
      let resourceName = config.api.job.index
      if (this.$route.params.key !== 'create') {
        this.local.itemType = 'update'
        resourceName = `${resourceName}/${this.$route.params.key}`
      }
      try {
        let res = await service.getResource({ resourceName, queryString: [] })
        this.server = {}
        this.server.config = res.data.result.config
        if (this.local.itemType === 'update') {
          this.setJobToLocal(res.data.result)
        }
      } catch (error) {
        this.GO_TOPAGE('Product')
      }
    },
    setJobToLocal (item) {
      this.local.inputs.header.jobId = item.job._id
      this.local.inputs.header.jobCode = item.job.code
      this.local.inputs.header.customer.name = item.customer.name
      this.local.inputs.header.createDate = this.TO_DATE(item.job.createDate)
      item.product.map((item) => {
        let options = {}
        if (item.colorName !== null) {
          options.colorName = item.colorName
        }
        if (item.surface !== null) {
          options.surface = item.surface
        }
        this.local.inputs.products.push({
          id: item._id,
          name: item.name,
          amount: item.amount,
          thickness: item.thickness,
          note: item.note,
          dateEnd: this.TO_DATE(item.dateEnd),
          type: item.type,
          otherTypeName: item.otherTypeName,
          departmentSelected: item.departmentSelected,
          equipment: item.equipment,
          colorType: item.colorType,
          accessory: item.accessory,
          options
        })
      })
      this.local.inputs.products.shift()
      // this.local.inputs.products = []
    },
    inputProductDetail (productIndex) {
      this.local.productSelected = productIndex
      this.checkProductData()
    },
    removeProduct (index) {
      this.local.productSelected = null
      this.local.inputs.products.splice(index, 1)
    },
    editTable (actionType) {
      this.local.productSelected = null
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
      } else if (type === 3) {
        departmentSelected = []
      }
      this.local.inputs.products[this.productSelected].departmentSelected = departmentSelected
    },
    async submitHandle (btnTarget, isConfirm) {
      let isValid = await this.$validator.validateAll()
      let isValidData = this.checkProductData()
      if (isConfirm && isValid && isValidData && this.local.inputs.products.length >= 1) {
        let data = { input: this.local.inputs }
        if (this.local.itemType === 'update') {
          await service.putResource({ resourceName: `${config.api.job.index}/${this.$route.params.key}`, data })
        } else {
          await service.postResource({ resourceName: config.api.job.index, data })
        }
        this.updateProduct()
        this.local.productRequired = []
        this.$notify('ทำรายการเสร็จสิ้น', 'success')
        this.GO_TOPAGE('Product')
      }
    },
    async deleteJob (isConfirm) {
      if (isConfirm) {
        let resourceName = `${config.api.job.index}/${this.$route.params.key}`
        await service.deleteResource({ resourceName, queryString: [] })
        this.$notify('ทำรายการเสร็จสิ้น', 'success')
        this.GO_TOPAGE('Product')
      }
    },
    checkProductData () {
      this.local.productRequired = []
      let isPass = true
      this.local.inputs.products.map((item, index) => {
        if (
          item.dateEnd === null
          || item.type === null
          || item.departmentSelected.length === 0
          || (item.colorType === 2 && (item.options.colorName === undefined || item.options.colorName === ''))
          || (item.equipment === 2 && (item.options.surface === undefined || item.options.surface === ''))
        ) {
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
    },
    isDisable (productId) {
      return (this.local.itemType !== 'create' && productId !== null)
    }
  },
  watch: {
    productAll () {
      this.checkProductData()
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
