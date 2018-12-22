<template>
  <section class="p-2">
    <div class="columns">
      <div class="column text-left">
        <h5 class="text-bold text-primary">
          <template>
            <i class="fa fa-pause text-gray c-hand" v-if="!local.isPause" aria-hidden="true" @click="switchStatus(true)"></i>
            <i class="fa fa-play text-gray c-hand" v-else aria-hidden="true" @click="switchStatus(false)"></i>
          </template>
          <!-- <i class="fa fa-sign-out text-gray c-hand" aria-hidden="true" @click="GO_TOPAGE('Product')"></i> -->
          {{local.currentPage}} / {{pageCount}} จาก {{totalProducts}} งาน
        </h5>
      </div>
      <!-- <div class="column text-center">
       <h5> </h5>
      </div> -->
      <div class="column text-right">
        <!-- <span class=""><h6></h6></span>&nbsp; -->
        <span class="label"><i class="fa fa fa-clock-o h5" aria-hidden="true"></i> {{TASKSTATUS['wait']}}</span>
        <span class="label"><i class="fa fa-circle-o h5" aria-hidden="true"></i> {{TASKSTATUS['ip']}}</span>
        <span class="label"><i class="fa fa-check-circle-o h5 text-success"></i> {{TASKSTATUS['done']}}</span>
        &nbsp;
        <i class="fa fa-sign-out text-gray c-hand" aria-hidden="true" @click="GO_TOPAGE('Product')"></i>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <table class="table responsive">
          <thead>
            <tr>
              <th class="h5 text-bold text-center text-primary" width=""></th>
              <th class="h5 text-bold text-center text-primary" width="120">สเปคงาน</th>
              <th class="h5 text-bold text-center text-primary" width="120">แบบ</th>
              <th class="h5 text-bold text-center text-primary" width="120">ตัด</th>
              <th class="h5 text-bold text-center text-primary" width="120">พันท์</th>
              <th class="h5 text-bold text-center text-primary" width="120">พับ</th>
              <th class="h5 text-bold text-center text-primary" width="120">เชื่อม</th>
              <th class="h5 text-bold text-center text-primary" width="120">พ่นสี</th>
              <th class="h5 text-bold text-center text-primary" width="120">ประกอบ</th>
              <th class="h5 text-bold text-center text-primary" width="120">อุปกรณ์</th>
              <th class="h5 text-bold text-center text-primary" width="120">วายริ่ง</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" :key="obj._id" v-for="(obj) in products">
              <td
              :class="getItemClass(obj, task)"
              :key="index" v-for="(task, index) in obj.tasks"
              :data-column="task.taskTitle"
              >
                <template v-if="task.key === 'itemName'">
                  <div class="text-bold">{{obj.header.jobCode}} / {{obj.header.productName}}</div>
                  <!-- <div class="text-bold"></div> -->
                  <div class="text-bold">{{obj.header.cusName}}</div>
                  <div>{{GET_DATE(task.dateStart)}} - {{GET_DATE(task.dateEnd)}}</div>
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
import { bus } from '@/main'
import config from '@Config/app.config'
import service from '@Services/app.service'
import Helper from '@Libraries/common.helpers'
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
        products: [],
        currentProductObj: [],
        rows: 0,
        time: 0,
        currentPage: 1,
        timer: null,
        pageCount: 0,
        isPause: false
        // start: 0,
        // end: 0
      },
      tmp: {
        productStore: []
      }
    }
  },
  computed: {
    products () {
      return this.local.products
    },
    totalProducts () {
      return this.local.currentProductObj.length
    },
    pageCount () {
      return Math.ceil(this.totalProducts / this.local.rows)
    }
  },
  created () {
    bus.$on('reloadSchedule', this.fetchData)
    this.fetchData(true)
  },
  methods: {
    async fetchData (runSchedule = false) {
      // console.log(self.local.pageCount)
      let resourceName = `${config.api.schedule.index}`
      try {
        let res = await service.getResource({ resourceName, queryString: [] })
        // console.log(res.data.result)
        this.local.rows = res.data.config.rows
        this.local.time = parseInt(res.data.config.time)
        this.tmp.productStore = Helper.COPY_OBJECT(res.data.result)
        // console.log(this.tmp.productStore)
        if (runSchedule) {
          this.runSchedule()
        }
      } catch (error) {
        // this.GO_TOPAGE('Product')
      }
    },
    runSchedule () {
      let self = this
      this.recheckProductLists()
      // this.local.pageCount = this.pageCount
      this.local.products = this.local.currentProductObj.slice(0, this.local.rows)
      this.local.timer = setInterval (function () {
        if (!self.local.isPause) {
          self.local.currentPage = parseInt(self.local.currentPage) + 1
          // console.log(self.pageCount)
          if (self.pageCount < self.local.currentPage) {
            self.local.currentPage = 1
          }
          if (self.local.currentPage === 1) {
            self.recheckProductLists()
            self.local.start = 0
          } else if (self.local.currentPage === 2) {
            self.local.start = self.local.rows
          } else {
            self.local.start = self.local.end
          }
          self.local.end = self.local.start + self.local.rows
          // console.log('start ' + self.local.start)
          // console.log('end ' + self.local.end)
          self.local.products = self.local.currentProductObj.slice(self.local.start, self.local.end)
        }
      }, this.local.time)
    },
    recheckProductLists () {
      // console.log('recheckProductLists')
      this.local.currentProductObj = Helper.COPY_OBJECT(this.tmp.productStore)
    },
    addProductEvent () {

    },
    stopRunnigSchedule () {
      clearInterval(this.local.timer)
    },
    getItemClass (obj, task) {
      return [
        'text-center',
        { 'item-name': task.key === 'itemName' },
        { 'bg-success': task.key === 'itemName' && obj.header.status === 'done' && !this.IS_SAMEDATE(task.dateEnd) && !this.IS_LATE(task.dateEnd) },
        { 'bg-warning': task.key === 'itemName' && this.IS_SAMEDATE(task.dateEnd) },
        { 'bg-error': (task.key === 'itemName' && this.IS_LATE(task.dateEnd)) },
        { 'bg-gray': task.isDisable },
        { '': (task.status === 'wait' && !task.isDisable) }
      ]
    },
    switchStatus (status) {
      this.local.isPause = status
    }
  },
  beforeDestroy () {
    bus.$off('reloadSchedule', this.fetchData)
    this.stopRunnigSchedule()
  }
}
</script>

<style lang="scss" scoped>
.fa-sign-out{
  // transform: rotate(180deg);
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
