<template>
  <section>
    <div class="column col-12 col-xs-12">
      <page-title :side="'right'">
        <template slot="left-slot"></template>
        <div class="has-icon-left" slot="right-slot">
            <div class="columns">
              <div class="column col-1 col-md-1 col-xs-12 text-right">
                <button class="btn btn-success" @click="GO_TOPAGE('JobEdit', { key: 'create' })" v-if="ISADMIN">
                  <i class="fa fa-plus"></i>
                </button>
              </div>
              <div class="column col-3 col-md-3 col-xs-12">
                 <my-option
                  :config="{
                    type: 'text',
                    key: 'searchType',
                    rules: '',
                    validator: $validator,
                    hasTextDefault: false,
                    selection: [
                      {key: 'all', name: 'สถานะทั้งหมด'},
                      {key: 'ip', name: 'กำลังดำเนินงาน'},
                      {key: 'done', name: 'รอส่ง'},
                      {key: 'send', name: 'ส่งงานแล้ว'}
                    ]
                  }"
                  :value="this.local.searchStatusType"
                  @input="value => {local.searchStatusType = value}"
                ></my-option>
              </div>
              <div class="column col-3 col-md-3 col-xs-12">
                <my-option
                  :config="{
                    type: 'text',
                    key: 'searchType',
                    rules: '',
                    validator: $validator,
                    hasTextDefault: false,
                    selection: [
                      {key: 'productName', name: 'รายการผลิต'},
                      {key: 'jobCode', name: 'เลขที่จ๊อบ'},
                      {key: 'cusName', name: 'ลูกค้า'}
                    ]
                  }"
                  :value="this.local.searchType"
                  @input="value => setSearchType(value)"
                ></my-option>
              </div>
              <div class="column col-5 col-md-5 col-xs-12">
                <div class="input-group">
                <my-input
                  :config="{
                    type: 'text',
                    key: 'keyword',
                    placeholder: '',
                    rules: null
                  }"
                  @input="val => {inputSearch = val}"
                ></my-input>
                <my-button
                  :config="{icon: null, btnClass: 'btn btn-primary input-group-btn', doConfirm: false, text: `ค้นหา`}"
                  @submit="search()">
                </my-button>
                </div>
              </div>
            </div>
        </div>
      </page-title>
    </div>
    <div class="column col-12 col-xs-12">
      <div class="card bg-gray">
        <div class="card-body">
          <div class="columns">
            <div class="column col-12">
              <vuetable ref="vuetable"
                :css="{
                  tableClass: 'table table-striped table-hover text-center'
                }"
                :row-class="onRowClass"
                :http-options="httpOptions"
                :fields="local.fields"
                @vuetable:pagination-data="onPaginationData"
                pagination-path=""
                :per-page="perPage"
                :append-params="params"
                :sort-order="local.sortOrder"
              >
                <template slot="productName" scope="props">
                  <template v-if="ISADMIN">
                    <span class="c-hand text-bold job-id" @click="GO_TOPAGE('JobEdit', { key: props.rowData.job._id })">{{props.rowData.job.code}}</span> / {{props.rowData.product.name}}
                  </template>
                  <template v-else>
                    {{props.rowData.job.code}} / {{props.rowData.product.name}}
                  </template>
                 </template>
                <template slot="status" scope="props">
                  <span :class="getStatusClass(props.rowData.product.status, props.rowData.product)">{{JOBSTATUS[props.rowData.product.status]}}</span>
                </template>
                <template slot="actions" scope="props">
                  <my-button :config="{
                    icon: 'fa fa-chevron-circle-right',
                    btnClass: 'btn btn-primary',
                    doConfirm: false,
                    text: 'รายละเอียด'
                  }" @submit="goToDetail(props.rowData)"></my-button>
                </template>
              </vuetable>
              <div class="columns">
                <div class="column col-6 flex-item-center">
                  <vuetable-pagination-info ref="paginationInfo"></vuetable-pagination-info>
                </div>
                <div class="column col-6">
                  <vuetable-pagination ref="pagination"
                    :css="{
                      wrapperClass: 'pagination flex-item-right',
                      activeClass: 'btn btn-primary active',
                      disabledClass: 'disabled',
                      pageClass: 'btn page-item',
                      linkClass: 'page-item',
                      paginationClass: 'ui bottom attached segment grid',
                      paginationInfoClass: 'left floated left aligned six wide column',
                      dropdownClass: 'ui search dropdown',
                      icons: {
                        first: 'angle double left icon',
                        prev: 'left chevron icon',
                        next: 'right chevron icon',
                        last: 'angle double right icon',
                      }
                    }"
                    @vuetable-pagination:change-page="onChangePage"
                  ></vuetable-pagination>
                </div>
                <!-- <div class="column col-6">
                  <div class="columns">
                    <div class="column col-8">
                      <vuetable-pagination-info-mixin ref="paginationInfoMixin"></vuetable-pagination-info-mixin>
                    </div>
                    <div class="column col-4">
                      <my-option
                        :config="{
                          type: 'text',
                          key: 'perPage',
                          rules: 'required',
                          validator: $validator,
                          hasTextDefault: false,
                          selection: [
                            {key: 10, name: '10'},
                            {key: 50, name: '50'},
                            {key: 100, name: '100'}
                          ]
                        }"
                        :value="perPage"
                        @input="value => setPerPage(value)"
                      ></my-option>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import commonHelper from '@Libraries/common.helpers'
import PageTitle from '@Components/PageTitle'
import MyButton from '@Components/Form/myButton'
import MyInput from '@Components/Form/myInput'
import MyOption from '@Components/Form/myOption'
import config from '@Config/app.config'
import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination.vue'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
export default {
  props: {
  },
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
    PageTitle,
    MyButton,
    MyInput,
    MyOption
  },
  name: 'Product',
  data () {
    return {
      perPage: 10,
      inputSearch: '',
      local: {
        searchStatusType: 'all',
        searchType: 'productName',
        fields: [
          {
            name: '__slot:productName',
            title: 'เลขที่จ๊อบ / รายการผลิต'
          },
          {
            name: 'customer.name',
            title: 'ลูกค้า'
          },
          {
            name: 'job.createDate',
            sortField: 'createdAt',
            title: 'วันที่เริ่มผลิต',
            callback: 'GET_DATE'
          },
          {
            name: 'product.dateEnd',
            sortField: 'dateEnd',
            title: 'กำหนดส่ง',
            callback: 'GET_DATE'
          },
          {
            name: '__slot:status',
            title: 'สถานะ'
          },
          {
            name: '__slot:actions',
            title: ''
          }
        ],
        sortOrder: [
          {
            field: 'createdAt',
            direction: 'asc'
          }
          // {
          //   field: 'dateEnd',
          //   direction: 'desc'
          // }
        ],
        products: []
      }
    }
  },
  computed: {
    httpOptions () {
      let queryString = ''
      return {
        baseURL: commonHelper.GET_FULLAPI(config.api.product.index, queryString),
        headers: {
          'Authorization': commonHelper.GET_STORAGEITEM(config.variable.tokenStorage).replace(/['"]+/g, '')
        }
      }
    },
    params () {
      return {
        mainSearch: this.inputSearch,
        searchType: this.local.searchType,
        searchStatusType: this.local.searchStatusType
      }
    }
  },
  created () {
  },
  methods: {
    goToDetail (rowData) {
      this.GO_TOPAGE('ProductUpdate', { key: rowData.product._id })
    },
    getStatusClass (status, item) {
      console.log(item)
      return [
        { '': status === 'ip' },
        // { 'label label-warning mr-1': status === 'review' },
        { 'label label-success mr-1': status === 'done' },
        { 'label label-secondary mr-1': status === 'send' && !this.IS_LATE(item.dateEnd)},
        { 'label label-error mr-1': status === 'send' && this.IS_LATE(item.dateEnd) }
      ]
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    getStatus (value) {
      return this.JOBSTATUS[value]
    },
    search () {
      this.$refs.vuetable.refresh()
    },
    setSearchType (val) {
      this.local.searchType = val
    },
    onRowClass (dataItem, index) {
      return [
        { 'text-error': (this.IS_LATE(dataItem.product.dateEnd) && (dataItem.product.status === 'ip' || dataItem.product.status === 'done')) },
        { 'text-warning': (this.IS_SAMEDATE(dataItem.product.dateEnd) && (dataItem.product.status === 'ip' || dataItem.product.status === 'done')) }
      ]
    }
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  padding: 0;
  margin: 0;
}
.job-id:hover{
  text-decoration: underline;
}
</style>
