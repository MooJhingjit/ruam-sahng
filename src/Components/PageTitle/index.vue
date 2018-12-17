<template>
  <div class="page-title">
    <div class="columns">
      <div v-if="side === 'all' || side === 'left'"
      class="d-flex column col-6 col-md-12 col-xs-12">
        <slot name="left-slot"></slot>
      </div>
      <div v-if="side === 'all' || side === 'right'"
      :class="['column col-md-12 col-xs-12', {'col-6': side === 'all'}, {'col-12': side === 'right'}]">
        <slot name="right-slot"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    side: {
      type: String,
      required: false,
      default: 'all'
    }
  },
  components: {},
  name: 'PageTitle',
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
  }
}
</script>

<style lang="scss" scoped>
.page-title{
  // margin-bottom: 15px;
  .d-flex{
    align-items: center;
    h5{
      margin: 0px;
    }
  }
}
</style>
