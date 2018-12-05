
<template>
  <div class="form-group">
    <select :name="config.key" class="form-select" v-model="myValue"  v-validate="config.rules">
      <option v-if="config.hasTextDefault">--โปรดเลือก--</option>
      <option :value="item.key" :key="index" v-for="(item, index) in config.selection">{{item.name}}</option>
    </select>
    <p class="form-input-hint text-error" v-if="errors.has(config.key)">กรุณาตรวจสอบข้อมูลข้างต้น</p>
  </div>
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
    }
  }
   
}
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 0px !important;
}
</style>
