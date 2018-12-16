<template>
  <div class="page-title">
    <div class="columns">
      <div class="d-flex column col-6 col-md-12 col-xs-12">
        <slot name="left-slot"></slot>
      </div>
      <div class="column col-6 col-md-12 col-xs-12">
        <slot name="right-slot"></slot>
      </div>
    </div>
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
