<template> <!-- can be used with admin and qc -->
  <section class="">
    <div class="column col-12 col-xs-12">
      <page-title>
        <template slot="left-slot">
          <template v-if="currentState.status === 'itemView'">
            <div v-if="isAdmin" class="p-2 bg-primary">
              JOB C61-08-108
            </div>
            <div v-else class="p-2 bg-warning">
              <span class="p-2">QC:</span> JOB C61-08-108
            </div>
          </template>
        </template>
        <div class="has-icon-left" slot="right-slot">
          <div class="input-group">
          <input type="text" class="form-input" placeholder="ค้นหางาน">
          <i class="form-icon fa fa-search"></i>
          <button class="btn btn-primary input-group-btn" @click="searchItem()">ค้นหา</button>
          </div>
        </div>
      </page-title>
    </div>
    <div class="column col-12 col-xs-12">
      <keep-alive>
        <component
        :is="currentState.component"
        :obj="currentState.obj"
        @itemSelected="selectItem"
        ></component>
      </keep-alive>
    </div>
  </section>
</template>

<script>
import PageTitle from '@Components/PageTitle'
import MyModal from '@Components/Modal'
import SearchComponent from './search'
import ItemSelectedComponent from './item'
export default {
  props: {
    // mode: {
    //   type: String,
    //   required: true
    // }
  },
  components: {
    PageTitle,
    MyModal
  },
  name: 'StatusPage',
  data () {
    return {
      currentState: {
        component: SearchComponent,
        status: 'search',
        obj: {
          search: null
        }
      },
      isAdmin: true
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
    searchItem () {
      this.currentState.component = SearchComponent
      this.currentState.obj.search = 'test'
    },
    selectItem (item) {
      console.log(item)
      this.currentState.component = ItemSelectedComponent
      this.currentState.status = 'itemView'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
