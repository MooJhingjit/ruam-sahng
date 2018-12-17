<template>
    <section class="container centered  bg-gray" v-if="local.notification !== null">
        <header class="columns">
          <section class="menu-lists navbar-section column col-xs-12 col-8">
             <div class="columns">
              <div class="column col-3 col-xs-6 text-center">
                <router-link :to="{ name: 'Product' } " ><i class="fa fa-tasks"></i> สินค้า
                <span
                  :title="`รอตรวจสอบ ${local.notification.productReview} รายการ`"
                  class="badge text-success"
                  v-if="local.notification.productReview !== 0"
                  :data-badge="local.notification.productReview"></span>
                </router-link>
              </div>
              <div class="column col-3 col-xs-6 text-center"><router-link :to="{ name: 'Schedule' } "><i class="fa fa-table" aria-hidden="true"></i> ตารางงาน</router-link></div>
              <div class="column col-3 col-xs-6 text-center" v-if="ISADMIN"><router-link :to="{ name: 'User' } "><i class="fa fa-user" aria-hidden="true"></i> ผู้ใช้งาน</router-link></div>
              <div class="column col-3 col-xs-6 text-center" v-if="ISADMIN"><router-link :to="{ name: 'Summary' } "><i class="fa fa-pie-chart" aria-hidden="true"></i> ภาพรวม</router-link></div>
            </div>
            
            <!-- <ul class="tab tab-block text-gray">
              <li class="tab-item">
                
              </li>
              <li class="tab-item">
                
              </li>
              <li class="tab-item" >
                
              </li>
              <li class="tab-item" v-if="ISADMIN">
                
              </li>
            </ul> -->
          </section>
          <section class="profile navbar-section column col-xs-12 col-4">
            <div class="columns">
              <div class="column col-12 text-right">
                <div class="tile">
                  <div class="tile-content">
                    <span class="tile-title text-bold c-hand text-nowrap" @click="GO_TOPAGE('UserEdit', {key: USER._id})">{{USER.username}}</span>
                    <i class="fa fa-power-off text-error c-hand" aria-hidden="true" @click="logout()"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
    </section>
</template>

<script>
import { bus } from '@/main'
import config from '@Config/app.config'
import service from '@Services/app.service'
export default {
  props: {
    // mode: {
    //   type: String,
    //   required: true
    // }
  },
  components: {},
  name: 'PageName',
  data () {
    return {
      local: {
        notification: null
      }
    }
  },
  computed: {
    // propertyComputed() {
    // }
  },
  created () {
    bus.$on('reloadNotification', this.fetchData)
    this.fetchData()
  },
  methods: {
    async fetchData () {
      // console.log('reloadNotification')
      let resourceName = `${config.api.app.notification}`
      try {
        let res = await service.getResource({ resourceName, queryString: [] })
        // console.log(res.data.data)
        this.local.notification = res.data.data
      } catch (error) {
        // this.GO_TOPAGE('Product')
      }
    },
    logout () {
      this.LOGOUT()
    }
  },
  beforeDestroy () {
    bus.$off('reloadNotification', this.fetchData)
  }
}
</script>

<style lang="scss" scoped>
@import '~@/Assets/my-style.scss';
header{
  padding: 10px;
  .badge {
    right: 0px;
    top: -10px;
  }
  .menu-lists{
    order: 2;
    // .tab.tab-block{
    //   border-bottom: none;
    //   // color: #ababab; // $secondary-white-color
      
    // }
    a {
      text-decoration: none;
      color: #afb3bd  ;
    }
    a:hover{
      color: #50596d;
    }
    .router-link-exact-active{
        // font-size: 1.2em;
      font-weight: bold;
      color: #50596d;
    }
  }
  .profile{
    .columns{
      height: 100%;
    }
    .text-right{
      align-items: center;
      justify-content: flex-end;
      display: flex;
    }
    order: 1;
    .tile{
      justify-content: flex-end;
      .tile-title{
        margin: 5px;
      }
      .tile-content{
        flex: 0;
      }
    }
  }
  @media (min-width: $size-xs) {
    .menu{
      order: 1;
    }
    .profile{
      order: 2;
    }
  }
}

</style>
