<template>
  <button :class="config.btnClass" @click="onClick()">
    <i v-if="config.icon" :class="config.icon" aria-hidden="true"></i>
    <template v-if="config.text">{{config.text}}</template>
  </button>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  components: {},
  name: 'MyButton',
  data () {
    return {
      local: {}
    }
  },
  computed: {
  },
  created () {},
  methods: {
    onClick () {
      if (this.config.doConfirm) {
        let isConfirm = this.$confirm('ยืนยันการทำรายการ')
        .set('onok', () => {
          this.submit(true)
        })
        .set('oncancel', () => {
          this.submit(false)
        })
      } else {
        this.submit(true)
      }
      // this.$notify('TEST','success')
	  	// this.$alert('Alert Title', 'Alert Message!', function(){ alertify.success('Ok'); })
      // this.$confirm('Confirm Title', 'Confirm Message', function(){ alertify.success('Ok') }, function(){ alertify.error('Cancel')})
      // this.$prompt( 'Prompt Title', 'Prompt Message', 'Prompt Value', function(evt, value) { alertify.success('You entered: ' + value) }, function() { alertify.error('Cancel') })
    },
    submit (tf) {
      this.$emit('submit', tf)
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  i{
    margin: 0 5px;
  }
}
</style>
