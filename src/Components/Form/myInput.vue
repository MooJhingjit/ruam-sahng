<template>
  <div v-if="config.rules !== null">
    <input
    :class="getInputClass()"
    :id="`input_${config.key}`"
    v-validate="config.rules"
    :type="config.type"
    :name="config.key"
    :placeholder="config.placeholder"
    v-model="myValue"
    :disabled="config.isDisable"
    autocomplete="off"
    >
    <p class="form-input-hint" v-if="errors.has(config.key)">กรุณาตรวจสอบข้อมูลข้างต้น</p>
  </div>
  <input
    v-else
    :class="getInputClass()"
    :id="`input_${config.key}`"
    v-validate="config.rules"
    :type="config.type"
    :name="config.key"
    :placeholder="config.placeholder"
    v-model="myValue"
    :disabled="config.isDisable"
    autocomplete="off"
    >
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true
    },
    value: {
      type: [String, Number],
      required: false
    }
  },
  components: {},
  name: 'MyInput',
  data () {
    return {
      myValue: ''
    }
  },
  computed: {
  },
  created () {
    this.setData()
  },
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  methods: {
    setData () {
      // console.log(this.$validator)
      if (this.config.validator) {
        this.$validator = this.config.validator
      }
      this.myValue = this.value
    },
    getInputClass () {
      return [
        'form-input',
        { 'is-error': this.errors.has(this.config.key) }
      ]
    }
  },
  watch: {
    myValue () {
      this.$emit('input', this.myValue)
    },
    value () {
      this.myValue = this.value
    }
  }
   
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0px !important;
}
</style>
