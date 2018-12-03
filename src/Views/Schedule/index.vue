<template>
  <section class="p-2">
    <div class="columns">
      <div class="column text-left">
        <h5 class="text-bold text-primary"><i class="fa fa-sign-out c-hand text-gray" aria-hidden="true" @click="GO_TOPAGE('Product')"></i> ตารางงาน 1/5</h5>
      </div>
      <div class="column text-right">
        <span class="label"><i class="fa fa fa-clock-o h5" aria-hidden="true"></i> {{TASKSTATUS['wait']}}</span>
        <span class="label"><i class="fa fa-circle-o h5" aria-hidden="true"></i> {{TASKSTATUS['ip']}}</span>
        <span class="label"><i class="fa fa-check-circle-o h5 text-success"></i> {{TASKSTATUS['done']}}</span>
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
            <tr class="" :key="productIndex" v-for="(obj, productIndex) in local.products">
              <td
              :class="getItemClass(obj, task)"
              :key="index" v-for="(task, index) in obj.tasks">
                <template v-if="task.key === 'itemName'">
                  <div class="text-bold">{{obj.header.jobCode}}</div>
                  <div class="text-bold">{{obj.header.productName}}</div>
                  <div class="text-bold">{{obj.header.cusName}}</div>
                  <div>{{GET_DATE(task.dateStart)}}</div>
                  <div>{{GET_DATE(task.dateEnd)}}</div>
                </template>
                <template v-else>
                  <template v-if="task.isDisable">
                    <div>
                      <i class="fa fa-times-circle-o h1 text-gray" aria-hidden="true"></i>
                    </div>
                  </template>
                  <template v-else-if="task.status === 'ip'">
                    <div>
                      <i :class="['fa fa-circle-o h4']" aria-hidden="true"></i>
                    </div>
                    <div>{{GET_DATE(task.dateStart)}}</div>
                    <div>กำลังดำเนินงาน..</div>
                  </template>
                  <template v-else-if="task.status === 'wait'">
                    <div>
                      <i class="fa fa fa-clock-o h1 text-gray" aria-hidden="true"></i>
                    </div>
                  </template>
                  <template v-else-if="task.status === 'done'">
                    <div>
                      <i :class="['fa fa-check-circle h4 text-success']" aria-hidden="true"></i>
                    </div>
                    <div>{{GET_DATE(task.dateStart)}}</div>
                    <div>{{GET_DATE(task.dateEnd)}}</div>
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
import config from '@Config/app.config'
import service from '@Services/app.service'
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
        products: [
          // {
          //   header: {
          //     jobCode: 'JOB C61-08-108',
          //     cusName: 'Summit network',
          //     productName: 'product name',
          //     status: 'success'
          //   },
          //   tasks: [
          //     { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' }
          //   ]
          // },
          // {
          //   header: {
          //     jobCode: 'JOB C61-08-108',
          //     cusName: 'Summit network',
          //     productName: 'product name',
          //     status: 'late'
          //   },
          //   tasks: [
          //     { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'disable' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'ip' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' }
          //   ]
          // },
          // {
          //   header: {
          //     jobCode: 'JOB C61-08-108',
          //     cusName: 'Summit network',
          //     productName: 'product name',
          //     status: 'ip'
          //   },
          //   tasks: [
          //     { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'disable' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' }
          //   ]
          // },
          // {
          //   header: {
          //     jobCode: 'JOB C61-08-108',
          //     cusName: 'Summit network',
          //     productName: 'product name',
          //     status: 'ip'
          //   },
          //   tasks: [
          //     { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'disable' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'ip' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' }
          //   ]
          // },
          // {
          //   header: {
          //     jobCode: 'JOB C61-08-108',
          //     cusName: 'Summit network',
          //     productName: 'product name',
          //     status: 'success'
          //   },
          //   tasks: [
          //     { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' }
          //   ]
          // },
          // {
          //   header: {
          //     jobCode: 'JOB C61-08-108',
          //     cusName: 'Summit network',
          //     productName: 'product name',
          //     status: 'ip'
          //   },
          //   tasks: [
          //     { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'ip' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'ip' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' }
          //   ]
          // },
          // {
          //   header: {
          //     jobCode: 'JOB C61-08-108',
          //     cusName: 'Summit network',
          //     productName: 'product name',
          //     status: 'ip'
          //   },
          //   tasks: [
          //     { key: 'itemName', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'done' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'ip' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'ip' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'disable' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'disable' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' },
          //     { key: 'xxxxxxxx', dateStart: '19/10/2018', dateEnd: '19/10/2018', status: 'padding' }
          //   ]
          // }
        ]
      }
    }
  },
  computed: {
    // propertyComputed() {
    // }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      let resourceName = `${config.api.schedule.index}`
      try {
        let res = await service.getResource({ resourceName, queryString: [] })
        this.local.products = res.data.result
      } catch (error) {
        // this.GO_TOPAGE('Product')
      }
    },
    getItemClass (obj, task) {
      return [
        'text-center',
        { 'item-name': task.key === 'itemName' },
        { 'bg-success': task.key === 'itemName' && obj.header.status === 'review' },
        { 'bg-error': (task.key === 'itemName' && this.IS_LATE(task.dateEnd) && obj.header.status !== 'review') },
        { 'bg-gray': task.isDisable},
        { '': (task.status === 'wait' && !task.isDisable)}
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
