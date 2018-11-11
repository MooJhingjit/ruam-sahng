<template>
  <div>
    <datepicker
      :id="`input_${config.key}`"
      v-validate="config.rules"
      :input-class="getInputClass()"
      :name="config.key"
      readonly="false"
      placeholder="วันเริ่มเปิดจ็อบ"
      v-model="myValue"
    >
    </datepicker>
    <p class="form-input-hint text-error" v-if="errors.has(config.key)">กรุณาตรวจสอบข้อมูลข้างต้น</p>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  props: {
    config: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: false
    }
  },
  components: {
    Datepicker
  },
  name: 'MyDatePicker',
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
