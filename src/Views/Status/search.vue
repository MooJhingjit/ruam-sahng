<template>
  <div class="card bg-gray">
    <div class="card-body">
      <div class="columns">
        <div class="column col-12" v-if="local.getResult">
          <table class="table table-striped table-hover text-center">
            <thead>
              <tr>
                <th>รหัสสินค้า / รายการผลิต</th>
                <th>ลูกค้า</th>
                <th>วันที่เริ่มผลิต</th>
                <th>กำหนดส่ง</th>
                <th>สถานะ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="">JOB C61-08-108 <br> xxxxxx</td>
                <td class="">Summit network</td>
                <td class="">20/09/2018</td>
                <td></td>
                <td class=""><span class="label">กำลังดำเนินงาน</span></td>
                <td class="">
                  <my-button :config="{icon: 'fa fa-chevron-circle-right', btnClass: 'btn btn-primary', doConfirm: false, text: 'รายละเอียด'}" @submit="goToDetail()"></my-button>
                </td>
              </tr>
              <tr>
                <td class="">JOB C61-08-358 <br> xxxxxx</td>
                <td class="">Summit network02</td>
                <td class="">20/09/2018</td>
                <td></td>
                <td class=""><span class="label">กำลังดำเนินงาน</span></td>
                <td class="">
                  <my-button :config="{icon: 'fa fa-chevron-circle-right', btnClass: 'btn btn-primary', doConfirm: false, text: 'รายละเอียด'}" @submit="goToDetail()"></my-button>
                </td>
              </tr>
              <tr>
                <td class="">JOB C61-08-566 <br> xxxxxx</td>
                <td class="">Summit network03</td>
                <td class="">20/09/2018</td>
                <td></td>
                <td class=""><span class="label">กำลังดำเนินงาน</span></td>
                <td class="">
                  <my-button :config="{icon: 'fa fa-chevron-circle-right', btnClass: 'btn btn-primary', doConfirm: false, text: 'รายละเอียด'}" @submit="goToDetail()"></my-button>
                </td>
              </tr>
              <tr>
                <td class="">JOB C61-08-178 <br> xxxxxx</td>
                <td class="">Summit network04</td>
                <td class="">20/09/2018</td>
                <td></td>
                <td class=""><span class="label">กำลังดำเนินงาน</span></td>
                <td class="">
                  <my-button :config="{icon: 'fa fa-chevron-circle-right', btnClass: 'btn btn-primary', doConfirm: false, text: 'รายละเอียด'}" @submit="goToDetail()"></my-button>
                </td>
              </tr>
              <tr>
                <td class="">JOB C61-08-179 <br> xxxxxx</td>
                <td class="">Summit network05</td>
                <td class="">20/09/2018</td>
                <td class="">20/09/2018</td>
                <td class=""><span class="label label-success">รอส่ง</span></td>
                <td class="">
                  <my-button :config="{icon: 'fa fa-chevron-circle-right', btnClass: 'btn btn-primary', doConfirm: false, text: 'รายละเอียด'}" @submit="goToDetail()"></my-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="column col-12" v-else>
          <div class="empty" >
            <div class="empty-icon">
              <i class="fa fa-file-o h1"></i>
            </div>
            <p class="empty-title h5">ค้นหางานจากกล่องการค้นหาด้านบน</p>
            <p class="empty-subtitle">จากนั้นกดปุ่มค้นหา</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from '@Components/Form/myButton'
export default {
  props: {
    obj: {
      type: Object,
      required: true
    }
  },
  components: {
    MyButton
  },
  name: 'StatusPage',
  data () {
    return {
      isAdmin: true,
      local: {
        getResult: false
      }
    }
  },
  computed: {
    // propertyComputed() {
    // }
  },
  created () {},
  mounted () {},
  methods: {
    setObj () {
      if (this.obj.search !== null) {
        this.local.getResult = true
      }
    },
    goToDetail () {
      this.$emit('itemSelected', 'job01')
    }
  },
  watch: {
    obj: {
      handler: function (newObj) {
        this.setObj()
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card-body{
  overflow-x: overlay;
  .columns+.columns{
    margin-top: 15px;
  }
}
</style>
