<template>
  <section>
    <div class="column col-12 col-xs-12">
      <page-title>
        <template slot="left-slot"></template>
        <div class="has-icon-left" slot="right-slot">
          <div class="input-group">
            <button class="btn btn-success" @click="add()">
              <i class="fa fa-plus"></i>
            </button>
            &nbsp;
            <my-input
              :config="{
                type: 'text',
                key: 'keyword',
                placeholder: 'ค้นหาชื่อ',
                rules: null
              }"
              @input="val => {inputSearch = val}"
            ></my-input>
            <!-- <i class="></i> -->
            <my-button
              :config="{icon: null, btnClass: 'btn btn-primary input-group-btn', doConfirm: false, text: `ค้นหา`}"
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
              <vuetable ref="vuetable"
                :css="{tableClass: 'table table-striped table-hover text-center'}"
                :http-options="httpOptions"
                :fields="local.fields"
                @vuetable:pagination-data="onPaginationData"
                pagination-path=""
                :per-page="perPage"
                :append-params="params"
                :sort-order="local.sortOrder"
              >
                <template slot="actions" scope="props">
                  <my-button :config="{
                    icon: 'fa fa-chevron-circle-right',
                    btnClass: 'btn btn-primary',
                    doConfirm: false,
                    text: 'รายละเอียด'
                  }" @submit="goToDetail(props.rowData)"></my-button>
                  <!-- &nbsp;
                  <my-button :config="{
                    icon: 'fa fa-trash',
                    btnClass: 'btn btn-error',
                    doConfirm: false,
                    text: ''
                  }" @submit="remove(props.rowData)"></my-button> -->
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
import service from '@Services/app.service'
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
        fields: [
          {
            name: 'username',
            title: 'ชื่อเข้าใช้'
          },
          {
            name: 'name',
            title: 'ชื่อ'
          },
          {
            name: 'department',
            title: 'แผนก'
          },
          {
            name: 'createdAt',
            sortField: 'createdAt',
            title: 'วันที่ลงทะเบียน',
            callback: 'GET_DATE'
          },
          {
            name: '__slot:actions',
            title: ''
          }
        ],
        sortOrder: [
          {
            field: 'createdAt',
            direction: 'desc'
          }
        ],
        products: []
      },
    }
  },
  computed: {
    httpOptions () {
      let queryString = ''
      return {
        baseURL: commonHelper.GET_FULLAPI(config.api.user.index, queryString),
        headers: {
          'Authorization': commonHelper.GET_STORAGEITEM(config.variable.tokenStorage).replace(/['"]+/g, '')
        }
      }
    },
    params () {
      return {
        mainSearch: this.inputSearch,
        searchType: this.local.searchType
      }
    }
  },
  created () {
  },
  methods: {
    add () {
      this.GO_TOPAGE('UserEdit', { key: 'new' })
    },
    goToDetail (rowData) {
      this.GO_TOPAGE('UserEdit', { key: rowData._id })
    },
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    search () {
      this.$refs.vuetable.refresh()
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
</style>
