<template>
  <section>
    <div class="column col-12 col-xs-12">
      <page-title>
        <template slot="left-slot"></template>
        <div class="has-icon-left" slot="right-slot">
          <div class="input-group">
          <my-input
            :config="{
              type: 'text',
              key: 'keyword',
              placeholder: 'ค้นหางาน',
              rules: null
            }"
          ></my-input>
          <i class="form-icon fa fa-search"></i>
          <my-button :config="{icon: null, btnClass: 'btn btn-primary input-group-btn', doConfirm: false, text: 'ค้นหา'}" @submit="searchItem()"></my-button>
          </div>
        </div>
      </page-title>
    </div>
    <div class="column col-12 col-xs-12">
      <div class="card bg-gray">
        <div class="card-body">
          <div class="columns">
            <div class="column col-12">
              <table class="table table-striped table-hover text-center">
                <thead>
                  <tr>
                    <th>รหัสสินค้า / รายการผลิต</th>
                    <th>ลูกค้า</th>
                    <th>วันที่เริ่มผลิต</th>
                    <th>กำหนดส่ง</th>
                    <th>สถานะ</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="">JOB C61-08-108 <br> xxxxxx</td>
                    <td class="">Summit network</td>
                    <td class="">20/09/2018</td>
                    <td></td>
                    <td class=""><span class="label">กำลังดำเนินงาน</span></td>
                    <td class="">
                      <my-button :config="{icon: 'fa fa-chevron-circle-right', btnClass: 'btn btn-primary', doConfirm: false, text: 'รายละเอียด'}" @submit="goToDetail()"></my-button>
                    </td>
                  </tr>
                  <tr>
                    <td class="">JOB C61-08-358 <br> xxxxxx</td>
                    <td class="">Summit network02</td>
                    <td class="">20/09/2018</td>
                    <td></td>
                    <td class=""><span class="label">กำลังดำเนินงาน</span></td>
                    <td class="">
                      <my-button :config="{icon: 'fa fa-chevron-circle-right', btnClass: 'btn btn-primary', doConfirm: false, text: 'รายละเอียด'}" @submit="goToDetail()"></my-button>
                    </td>
                  </tr>
                  <tr>
                    <td class="">JOB C61-08-566 <br> xxxxxx</td>
                    <td class="">Summit network03</td>
                    <td class="">20/09/2018</td>
                    <td></td>
                    <td class=""><span class="label">กำลังดำเนินงาน</span></td>
                    <td class="">
                      <my-button :config="{icon: 'fa fa-chevron-circle-right', btnClass: 'btn btn-primary', doConfirm: false, text: 'รายละเอียด'}" @submit="goToDetail()"></my-button>
                    </td>
                  </tr>
                  <tr>
                    <td class="">JOB C61-08-178 <br> xxxxxx</td>
                    <td class="">Summit network04</td>
                    <td class="">20/09/2018</td>
                    <td></td>
                    <td class=""><span class="label">กำลังดำเนินงาน</span></td>
                    <td class="">
                      <my-button :config="{icon: 'fa fa-chevron-circle-right', btnClass: 'btn btn-primary', doConfirm: false, text: 'รายละเอียด'}" @submit="goToDetail()"></my-button>
                    </td>
                  </tr>
                  <tr>
                    <td class="">JOB C61-08-179 <br> xxxxxx</td>
                    <td class="">Summit network05</td>
                    <td class="">20/09/2018</td>
                    <td class="">20/09/2018</td>
                    <td class=""><span class="label label-success">รอส่ง</span></td>
                    <td class="">
                      <my-button :config="{icon: 'fa fa-chevron-circle-right', btnClass: 'btn btn-primary', doConfirm: false, text: 'รายละเอียด'}" @submit="goToDetail()"></my-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageTitle from '@Components/PageTitle'
import MyButton from '@Components/Form/myButton'
import MyInput from '@Components/Form/myInput'
export default {
  props: {
    // mode: {
    //   type: String,
    //   required: true
    // }
  },
  components: {
    PageTitle,
    MyButton,
    MyInput
  },
  name: 'Product',
  data () {
    return {
      isAdmin: false
    }
  },
  computed: {
  },
  created () {},
  methods: {
    searchItem () {
      // this.currentState.component = SearchComponent
      // this.currentState.obj.search = 'test'
    },
    selectItem (item) {
      // console.log(item)
      // this.currentState.component = ItemSelectedComponent
      // this.currentState.status = 'itemView'
    },
    goToDetail () {
      this.GO_TOPAGE('ProductUpdate', { key: '5befc4de0e6f6e1a232490fb' })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
