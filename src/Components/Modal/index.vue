<template>
  <div :class="['modal', {'active': local.isActive}]" id="modal-id">
    <a href="#close" class="modal-overlay" aria-label="Close" @click="closeModal()"></a>
    <div class="modal-container">
      <div class="modal-header">
        <a href="#close" class="btn btn-clear float-right" aria-label="Close" @click="closeModal()"></a>
        <div class="modal-title h5">Modal title</div>
      </div>
      <div class="modal-body">
        <div class="content">
          <!-- content here -->
        </div>
      </div>
      <div class="modal-footer">
        ...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // isActive: {
    //   type: Boolean,
    //   required: true
    // }
  },
  components: {},
  name: 'PageName',
  data () {
    return {
      local: {
        isActive: false
      }
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
    show () {
      this.local.isActive = true
    },
    closeModal () {
      this.local.isActive = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
