<template>
    <div class="container centered">
        <header class="columns">
          <section class="menu-lists navbar-section column col-xs-12 col-8">
            <!-- <a href="..." class="text-light">สถานะงาน</a>
            <a href="..." class="text-light">สร้างงาน</a>
            <a href="..." class="text-light">ตารางงาน</a> -->
            <ul class="tab tab-block">
              <li class="tab-item active">
                <a href="#"><i class="fa fa-tasks" aria-hidden="true"></i> สถานะงาน</a>
              </li>
              <li class="tab-item">
                <a href="#" class=""><i class="fa fa-plus-circle" aria-hidden="true"></i> สร้างงาน</a>
              </li>
              <li class="tab-item">
                <a href="#"><i class="fa fa-table" aria-hidden="true"></i> ตารางงาน</a>
              </li>
            </ul>
          </section>
          <section class="profile navbar-section column col-xs-12 col-4">
            <div class="columns">
              <div class="column col-12 text-right">
                <div class="tile">
                  <div class="tile-icon">
                    <figure class="avatar" data-initial="P"></figure>
                  </div>
                  <div class="tile-content">
                    <p class="tile-title text-bold">Pokkrong</p>
                    <!-- <p class="tile-subtitle">Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p> -->
                  </div>
                </div>
              </div>
              <!-- <div class="column col-6 text-right">
                <span class="label label-rounded label-primary">Pokkrong</span>
              </div> -->
            </div>
          </section>
        </header>
    </div>
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
  name: 'DashboardPage',
  data () {
    return {
      property: 'Blank'
    }
  },
  computed: {
    // propertyComputed() {
    //   console.log('I change when this.property changes.')
    //   return this.property
    // }
  },
  created () {
    // console.log('created')
    // this.property = 'Example property update.'
    // console.log('propertyComputed will update, as this.property is now reactive.')
  },
  beforeMount () {
    // console.log('beforeMount')
    // console.log(`this.$el doesn't exist yet, but it will soon!`)
  },
  mounted () {
    // console.log('mounted')
    // console.log(this.$el.textContent) // I'm text inside the component.
  },
  beforeUpdate () {
    // console.log('beforeUpdate')
    // console.log(this.counter) // Logs the counter value every second, before the DOM updates.
  },
  updated () {
    // console.log('updated')
    // Fired every second, should always be true
    // console.log(+this.$refs['dom-element'].textContent === this.counter)
  },
  beforeDestroy () {
    // console.log('beforeDestroy')
    // Perform the teardown procedure for someLeakyProperty.
    // (In this case, effectively nothing)
    // this.someLeakyProperty = null
    // delete this.someLeakyProperty
  },
  destroyed () {
    // console.log('destroyed')
    // console.log(this) // There's practically nothing here!
    // MyCreepyAnalyticsService.informService('Component destroyed. All assets move in on target on my mark.')
  },
  methods: {
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
      color: $secondary-white-color;
      .tab-item.active a, .tab-item a:focus, .tab-item a:hover{
        color: $white-color;
        border-bottom: 1px solid $white-color;
        // border-bottom-color: transparent;
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
