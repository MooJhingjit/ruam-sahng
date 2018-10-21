<template>
  <section class="p-2">
    <div class="columns">
      <div class="column text-left">
        <h5 class="text-bold text-primary"><i class="fa fa-sign-out c-hand text-gray" aria-hidden="true" @click="GOTOPAGE('Status')"></i> ตารางงาน: 21/10/2018</h5>
      </div>
      <div class="column text-right">
        <h5 class="text-bold text-primary">1/5</h5>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <table class="table">
          <thead>
            <tr>
              <th class="h5 text-bold text-center text-primary" width="130"></th>
              <th class="h5 text-bold text-center text-primary">สเปคงาน</th>
              <th class="h5 text-bold text-center text-primary">แบบ</th>
              <th class="h5 text-bold text-center text-primary">ตัด</th>
              <th class="h5 text-bold text-center text-primary">พันท์</th>
              <th class="h5 text-bold text-center text-primary">พับ</th>
              <th class="h5 text-bold text-center text-primary">เชื่อมประกอบ</th>
              <th class="h5 text-bold text-center text-primary">พ่นสี</th>
              <th class="h5 text-bold text-center text-primary">ประกอบสำเร็จรูป</th>
              <th class="h5 text-bold text-center text-primary">อุปกรณ์</th>
              <th class="h5 text-bold text-center text-primary">วายริ่ง</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" :key="indexItems" v-for="(obj, indexItems) in local.items">
              <!-- <p :key="index" v-for="(item, index) in items">{{item}}</p> -->
              <td
              :class="getItemClass(obj, item)"
              :key="index" v-for="(item, index) in obj.items">
                <template v-if="item.key === 'itemName'">
                  <div class="text-bold">{{obj.options.jobId}}</div>
                  <div class="text-bold">{{obj.options.cusName}}</div>
                  <div>{{item.dateStart}}</div>
                  <div>{{item.dateEnd}}</div>
                </template>
                <template v-else>
                  <template v-if="item.status === 'disable'">
                    <div>
                      <i class="fa fa-times-circle-o h1 text-gray" aria-hidden="true"></i>
                    </div>
                  </template>
                  <template v-else-if="item.status === 'inprocess'">
                    <div>
                      <i :class="['fa fa-circle-o h4']" aria-hidden="true"></i>
                    </div>
                    <div>{{item.dateStart}}</div>
                    <div>กำลังดำเนินงาน..</div>
                  </template>
                  <template v-else-if="item.status === 'padding'">
                    <div>
                      <i class="fa fa fa-clock-o h1 text-gray" aria-hidden="true"></i>
                    </div>
                  </template>
                  <template v-else-if="item.status === 'done'">
                    <div>
                      <i :class="['fa fa-check-circle h4 text-success']" aria-hidden="true"></i>
                    </div>
                    <div>{{item.dateStart}}</div>
                    <div>{{item.dateEnd}}</div>
                  </template>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
  name: 'SchedulePage',
  data () {
    return {
      local: {
        items: [
          {
            options: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              status: 'success'
            },
            items: [
              { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' }
            ]
          },
          {
            options: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              status: 'late'
            },
            items: [
              { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'disable' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'inprocess' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' }
            ]
          },
          {
            options: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              status: 'inprocess'
            },
            items: [
              { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'disable' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' }
            ]
          },
          {
            options: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              status: 'inprocess'
            },
            items: [
              { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'disable' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'inprocess' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' }
            ]
          },
          {
            options: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              status: 'success'
            },
            items: [
              { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' }
            ]
          },
          {
            options: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              status: 'inprocess'
            },
            items: [
              { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'inprocess' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'inprocess' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' }
            ]
          },
          {
            options: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              status: 'inprocess'
            },
            items: [
              { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'inprocess' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'inprocess' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'disable' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'disable' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
              { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' }
            ]
          }
        ]
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
    getItemClass (obj, item) {
      return [
        'text-center',
        { 'item-name': item.key === 'itemName' },
        { 'bg-success': item.key === 'itemName' && obj.options.status === 'success' },
        { 'bg-error': item.key === 'itemName' && obj.options.status === 'late' },
        { 'bg-dark': item.status === 'disable' },
        { 'bg-gray': item.status === 'padding' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.fa-sign-out{
  transform: rotate(180deg);
}
.table{
  // tr.disable{
  //   background: #f0f1f4;
  // }
  td.item-name{
    padding: 0px;
    div{
      width: 100%;
    }
  }
  td.bg-dark, td.bg-gray{
    opacity: 0.3;
  }
}
</style>
