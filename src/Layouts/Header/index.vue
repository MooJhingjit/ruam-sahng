<template>
    <section class="container centered  bg-gray" v-if="local.notification !== null">
        <header class="columns">
          <section class="menu-lists navbar-section column col-xs-12 col-8">
            <ul class="tab tab-block text-gray">
              <li class="tab-item">
                <router-link :to="{ name: 'Product' } " ><i class="fa fa-tasks"></i> สินค้า
                <!-- {{local.notification.productReview}} -->
                <span
                  :title="`รอตรวจสอบ ${local.notification.productReview} รายการ`"
                  class="badge text-success"
                  v-if="local.notification.productReview !== 0"
                  :data-badge="local.notification.productReview"></span>
                </router-link>
              </li>
              <li class="tab-item" v-if="ISADMIN">
                <router-link :to="{ name: 'Creation' } "><i class="fa fa-plus-circle" aria-hidden="true"></i> สร้างงาน</router-link>
              </li>
              <li class="tab-item">
                <router-link :to="{ name: 'Schedule' } "><i class="fa fa-table" aria-hidden="true"></i> ตารางงาน</router-link>
              </li>
              <li class="tab-item" v-if="ISADMIN">
                <router-link :to="{ name: 'User' } "><i class="fa fa-user" aria-hidden="true"></i> ผู้ใช้งาน</router-link>
              </li>
            </ul>
          </section>
          <section class="profile navbar-section column col-xs-12 col-4">
            <div class="columns">
              <div class="column col-12 text-right">
                <div class="tile">
                  <!-- <div class="tile-icon">
                    <figure class="avatar" data-initial="P"></figure>
                  </div> -->
                  <div class="tile-content">
                    <span class="tile-title text-bold c-hand text-nowrap" @click="GO_TOPAGE('UserEdit', {key: USER._id})">{{USER.username}}</span>
                    <i class="fa fa-power-off text-error c-hand" aria-hidden="true" @click="logout()"></i>
                    <!-- <button class="btn btn-action btn-sm"></button> -->
                    <!-- <p class="tile-subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p> -->
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
  .menu-lists{
    order: 2;
    .tab.tab-block{
      border-bottom: none;
      // color: #ababab; // $secondary-white-color
      .router-link-exact-active{
        // font-size: 1.2em;
        font-weight: bold;
        color: #50596d;
      }
    }
    .badge {
      right: -25px;
      top: -10px;
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
