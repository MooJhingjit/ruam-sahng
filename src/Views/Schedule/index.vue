<template>
  <section class="p-2">
    <div class="columns">
      <div class="column text-left">
        <h5 class="text-bold text-primary"><i class="fa fa-sign-out c-hand text-gray" aria-hidden="true" @click="GO_TOPAGE('Status')"></i> ตารางงาน: 21/10/2018</h5>
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
              <th class="h5 text-bold text-center text-primary" width="220"></th>
              <th class="h5 text-bold text-center text-primary" width="70">สเปคงาน</th>
              <th class="h5 text-bold text-center text-primary" width="70">แบบ</th>
              <th class="h5 text-bold text-center text-primary" width="70">ตัด</th>
              <th class="h5 text-bold text-center text-primary" width="70">พันท์</th>
              <th class="h5 text-bold text-center text-primary" width="70">พับ</th>
              <th class="h5 text-bold text-center text-primary" width="70">เชื่อม</th>
              <th class="h5 text-bold text-center text-primary" width="70">พ่นสี</th>
              <th class="h5 text-bold text-center text-primary" width="70">ประกอบ</th>
              <th class="h5 text-bold text-center text-primary" width="70">อุปกรณ์</th>
              <th class="h5 text-bold text-center text-primary" width="70">วายริ่ง</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" :key="indexJobs" v-for="(obj, indexJobs) in local.jobs">
              <td
              :class="getItemClass(obj, task)"
              :key="index" v-for="(task, index) in obj.tasks">
                <template v-if="task.key === 'itemName'">
                  <div class="text-bold">{{obj.header.jobId}}</div>
                  <div class="text-bold">{{obj.header.cusName}}</div>
                  <div class="text-bold">task name</div>
                  <div>{{task.dateStart}}</div>
                  <div>{{task.dateEnd}}</div>
                </template>
                <template v-else>
                  <template v-if="task.status === 'disable'">
                    <div>
                      <i class="fa fa-times-circle-o h1 text-gray" aria-hidden="true"></i>
                    </div>
                  </template>
                  <template v-else-if="task.status === 'inprocess'">
                    <div>
                      <i :class="['fa fa-circle-o h4']" aria-hidden="true"></i>
                    </div>
                    <div>{{task.dateStart}}</div>
                    <div>กำลังดำเนินงาน..</div>
                  </template>
                  <template v-else-if="task.status === 'padding'">
                    <div>
                      <i class="fa fa fa-clock-o h1 text-gray" aria-hidden="true"></i>
                    </div>
                  </template>
                  <template v-else-if="task.status === 'done'">
                    <div>
                      <i :class="['fa fa-check-circle h4 text-success']" aria-hidden="true"></i>
                    </div>
                    <div>{{task.dateStart}}</div>
                    <div>{{task.dateEnd}}</div>
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
        jobs: [
          {
            header: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              productName: 'product name',
              status: 'success'
            },
            tasks: [
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
            header: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              productName: 'product name',
              status: 'late'
            },
            tasks: [
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
            header: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              productName: 'product name',
              status: 'inprocess'
            },
            tasks: [
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
            header: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              productName: 'product name',
              status: 'inprocess'
            },
            tasks: [
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
            header: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              productName: 'product name',
              status: 'success'
            },
            tasks: [
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
            header: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              productName: 'product name',
              status: 'inprocess'
            },
            tasks: [
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
            header: {
              jobId: 'JOB C61-08-108',
              cusName: 'Summit network',
              productName: 'product name',
              status: 'inprocess'
            },
            tasks: [
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
    getItemClass (obj, task) {
      return [
        'text-center',
        { 'item-name': task.key === 'itemName' },
        { 'bg-success': task.key === 'itemName' && obj.header.status === 'success' },
        { 'bg-error': task.key === 'itemName' && obj.header.status === 'late' },
        { 'bg-dark': task.status === 'disable' },
        { 'bg-gray': task.status === 'padding' }
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
