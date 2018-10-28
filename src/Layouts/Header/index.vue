<template>
    <section class="container centered  bg-gray">
        <header class="columns">
          <section class="menu-lists navbar-section column col-xs-12 col-8">
            <ul class="tab tab-block text-gray">
              <li class="tab-item">
                <router-link :to="{ name: 'Status' } "><i class="fa fa-tasks"></i> สถานะงาน</router-link>
              </li>
              <li class="tab-item">
                <router-link :to="{ name: 'Creation' } "><i class="fa fa-plus-circle" aria-hidden="true"></i> สร้างงาน</router-link>
              </li>
              <li class="tab-item">
                <router-link :to="{ name: 'Schedule' } "><i class="fa fa-table" aria-hidden="true"></i> ตารางงาน</router-link>
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
                    <span class="tile-title text-bold c-hand" @click="GOTOPAGE('UserEdit', {key: 1234})">Pokkrong</span>
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
      property: 'Blank'
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
    logout () {
      this.GOTOPAGE('Login')
    }
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
        font-size: 1.2em;
        font-weight: bold;
        color: #50596d;
      }
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
