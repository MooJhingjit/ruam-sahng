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
                placeholder: 'ค้นหารหัสสินค้า / รายการผลิต / ลูกค้า',
                rules: null
              }"
              @input="val => {local.inputSearch = val}"
            ></my-input>
            <i class="form-icon fa fa-search"></i>
            <my-button
              :config="{icon: null, btnClass: 'btn btn-primary input-group-btn', doConfirm: false, text: 'ค้นหา'}"
              @submit="search()">
            </my-button>
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
                  <tr :key="index" v-for="(item, index) in local.products">
                    <td class="">{{item.job.code}} <br> {{item.product.name}}</td>
                    <td class="">{{item.customer.name}}</td>
                    <td class="">{{GET_DATE(item.job.createdAt)}}</td>
                    <td>{{GET_DATE(item.product.dateEnd)}}</td>
                    <td class=""><span class="label">{{JOBSTATUS[item.product.status]}}</span></td>
                    <td class="">
                      <my-button :config="{icon: 'fa fa-chevron-circle-right', btnClass: 'btn btn-primary', doConfirm: false, text: 'รายละเอียด'}" @submit="goToDetail(item.product._id)"></my-button>
                    </td>
                  </tr>
                  <!-- <tr>
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
                  </tr> -->
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
    MyButton,
    MyInput
  },
  name: 'Product',
  data () {
    return {
      local: {
        inputSearch: '',
        products: [
          // {
          //   product: {
          //       'departmentSelected': [1, 2, 3, 4, 5, 6, 7, 8],
          //       'accessory': [1],
          //       '_id': '5bfd5e7b245e59034b9911d6',
          //       'jobId': '5bfd5e7b245e59034b9911d5',
          //       'name': 'product01',
          //       'amount': 1,
          //       'thickness': '1.5',
          //       'note': 'งานด่วน',
          //       'dateEnd': '2018-11-30T15:10:00.000Z',
          //       'type': '1',
          //       'equipment': 1,
          //       'colorType': 1,
          //       'surface': null,
          //       'colorName': null,
          //       'status': 'ip',
          //       'createdAt': '2018-11-27T15:10:51.477Z',
          //       'updatedAt': '2018-11-27T15:10:51.477Z'
          //   },
          //   job: {
          //       '_id': '5bfd5e7b245e59034b9911d5',
          //       'cusId': '5be856b43e5c350c700ad0fa',
          //       'code': 'JOB01',
          //       'createdAt': '2018-11-27T15:10:51.462Z',
          //       'updatedAt': '2018-11-27T15:10:51.462Z'
          //   },
          //   customer: {
          //       '_id': '5be856b43e5c350c700ad0fa',
          //       'name': 'pokkrong',
          //       'createdAt': '2018-11-11T16:20:04.736Z',
          //       'updatedAt': '2018-11-11T16:20:04.736Z'
          //   }
          // }
        ]
      }
    }
  },
  computed: {
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      let resourceName = `${config.api.product.index}`
      let queryString = this.BUILDPARAM({mainSearch: this.local.inputSearch})
      try {
        let res = await service.getResource({ resourceName, queryString})
        this.local.products = res.data.result
      } catch (error) {
        // this.GO_TOPAGE('Product')
      }
    },
    search () {
      this.fetchData()
      // this.currentState.component = ItemSelectedComponent
      // this.currentState.status = 'itemView'
    },
    goToDetail (productId) {
      this.GO_TOPAGE('ProductUpdate', { key: productId })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
