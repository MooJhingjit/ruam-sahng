<template>
  <section class="">
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
                    key: 'jobId',
                    placeholder: 'เลขที่',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.inputs.header.jobId"
                  @input="val => {local.inputs.header.jobId = val}"
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
                  :value="local.inputs.header.cusName"
                  @input="val => {local.inputs.header.cusName = val}"
                ></my-input>
              </div>
            </div>
            <div class="column col-6 col-sm-12">
              <div class="form-group">
                <label class="form-label" for="input-example-1">วันเริ่มเปิดจ็อบ</label>
                <my-input
                  :config="{
                    type: 'text',
                    key: 'dateStart',
                    placeholder: 'วันเริ่มเปิดจ็อบ',
                    rules: 'required',
                    validator: $validator
                  }"
                  :value="local.inputs.header.createDate"
                  @input="val => {local.inputs.header.createDate = val}"
                ></my-input>
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
                      <i class="fa fa-ellipsis-h h4 p-2 c-hand" aria-hidden="true" @click="inputProductDetail(index)"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-right">
                <i class="fa fa-minus-circle h4 p-2 c-hand" aria-hidden="true" v-if="local.inputs.length > 1" @click="editTable('minus')"></i>
                <i class="fa fa-plus-circle h4 p-2 c-hand" aria-hidden="true" @click="editTable('add')"></i>
              </div>
            </div>
            <template v-if="local.productSelected !== null">
              <div class="column col-12">
                <h5>รายละเอียดการผลิต: <span class="label label-primary">{{local.inputs.products[local.productSelected].name}}</span></h5>
              </div>
              <div class="column col-6 col-sm-12">
                <div class="form-group">
                  <div class="form-group">
                      <label class="form-label" for="input-example-1">กำหนดส่ง</label>
                      <my-input
                        :config="{
                          type: 'text',
                          key: 'dateEnd',
                          placeholder: 'กำหนดส่ง',
                          rules: 'required',
                          validator: $validator
                        }"
                        :value="local.inputs.products[local.productSelected].dateEnd"
                        @input="val => {local.inputs.products[local.productSelected].dateEnd = val}"
                      ></my-input>
                    </div>
                </div>
                <div class="form-group">
                  <div class="col-12 col-sm-12">
                    <label class="form-label" for="input-example-4">ประเภทตู้</label>
                  </div>
                  <div class="col-12 col-sm-12  panel p-2">
                    <label :key="index" class="form-radio" v-for="(item, index) in PRODUCTTYPE">
                      <input type="radio" name="productType"
                      v-model="local.inputs.products[local.productSelected].type" :value="item.key">
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
                    v-for="(item, index) in PRODUCTDEPARTMENT"
                    >
                      <input type="checkbox" :value="item.key"
                      v-model="local.inputs.products[local.productSelected].departmentSelected">
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
                      <label class="form-checkbox form-inline c-hand"
                      :key="index"
                      v-for="(item, index) in EQUIPMENT"
                      >
                        <input type="checkbox" :value="item.key"
                        v-model="local.inputs.products[local.productSelected].equipment">
                        <i class="form-icon"></i> {{item.name}}
                      </label>
                      <my-input
                      :config="{
                        type: 'text',
                        key: 'surface',
                        placeholder: 'พื้นผิว (สแตนเลส)',
                        rules: 'required',
                        validator: $validator
                      }"
                      :value="local.inputs.products[local.productSelected].options.surface"
                      @input="val => {local.inputs.products[local.productSelected].options.surface = val}"
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
                      v-for="(item, index) in COLORTYPE"
                      >
                        <input type="checkbox" :value="item.key"
                        v-model="local.inputs.products[local.productSelected].colorType">
                        <i class="form-icon"></i> {{item.name}}
                      </label>
                      <my-input
                      :config="{
                        type: 'text',
                        key: 'colorCode',
                        placeholder: 'รายการสี (พ่น)',
                        rules: 'required',
                        validator: $validator
                      }"
                      :value="local.inputs.products[local.productSelected].options.colorName"
                      @input="val => {local.inputs.products[local.productSelected].options.colorName = val}"
                      ></my-input>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-12 col-sm-12">
                      <label class="form-label" for="input-example-4">อุปกรณ์เสริม</label>
                    </div>
                    <div class="col-12 col-sm-12  panel p-2">
                      <label class="form-radio"
                      :key="index"
                      v-for="(item, index) in ACCESSORY"
                      >
                        <input type="checkbox" :value="item.key"
                        v-model="local.inputs.products[local.productSelected].accessory">
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
import PageTitle from '@Components/PageTitle'
import MyModal from '@Components/Modal'
import MyInput from '@Components/Form/myInput'
import MyButton from '@Components/Form/myButton'
import Helper from '@Libraries/common.helpers'
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
        inputs: {
          header: {
            jobId: null,
            cusName: null,
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
        productSelected: null
      }
    }
  },
  computed: {
  },
  created () {
    this.editTable('add')
  },
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  methods: {
    inputProductDetail (productIndex) {
      this.local.productSelected = productIndex
    },
    editTable (actionType) {
      if (actionType === 'minus') {
        this.local.inputs.products.pop()
      } else {
        let product = Helper.COPY_OBJECT(this.local.productTemplate)
        this.local.inputs.products.push(product)
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
