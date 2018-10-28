<template>
  <section class="">
    <div class="column col-12 col-xs-12">
      <div class="card bg-gray">
        <div class="card-body">
          <div class="columns">
            <div class="column col-6 col-sm-12">
                <div class="form-group">
                  <div class="col-12 col-sm-12">
                    <label class="form-label" for="input-example-4">อุปกรณ์</label>
                  </div>
                  <div class="col-12 col-sm-12  panel p-2">
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> รออุปกรณ์
                    </label>
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> อุปกรณ์ครบ
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-12 col-sm-12">
                    <label class="form-label" for="input-example-4">วัสดุ</label>
                  </div>
                  <div class="col-12 col-sm-12  panel p-2">
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> เหล็ก
                    </label>
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> สแตนเลส
                    </label>
                    <label class="form-checkbox form-inline c-hand">
                      <input type="checkbox"><i class="form-icon"></i> สังกะสี
                    </label>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="columns">
            <div class="column col-12 center text-center">
              <my-button :config="{icon: 'fa fa-check-circle', btnClass: 'btn btn-success', doConfirm: true, text: 'บันทึก'}" @submit="(tf) => submitHandle('save', tf)"></my-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-modal ref="myModal"></my-modal>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
