<template>
  <section v-if="local !== null">
    <div class="column col-12 col-xs-12">
      <div class="card bg-gray">
        <div class="card-body">
          <div class="columns">
            <div class="column col-3 col-xs-12">
              <div class="panel">
                <div class="panel-header">
                  <div class="panel-title">
                    ปี
                  </div>
                </div>
                <div class="panel-nav">
                </div>
                <div class="panel-body">
                  <div class="form-group">
                    <label class="form-checkbox">
                      <input type="checkbox" :value="1" v-model="filter.allYears">
                      <i class="form-icon"></i> ทุกปี
                    </label>
                  </div>
                  <div class="form-group" :key="yearIndex" v-for="(year, yearIndex) in yearsAvailable">
                    <label class="form-checkbox">
                      <input type="checkbox" :value="year.key" v-model="filter.years">
                      <i class="form-icon"></i> {{year.name}}
                    </label>
                  </div>
                </div>
              </div>
              <br/>
              <div class="panel">
                <div class="panel-header">
                  <div class="panel-title">
                    เดือน
                  </div>
                </div>
                <div class="panel-nav">
                </div>
                <div class="panel-body">
                  <div class="form-group" v-if="filter.allYears.length || filter.years.length">
                    <label class="form-checkbox">
                      <input type="checkbox" :value="1" v-model="filter.allMonths">
                      <i class="form-icon"></i> ทุกเดือน
                    </label>
                  </div>
                  <div class="form-group" :key="monthIndex" v-for="(month, monthIndex) in monthsAvailable">
                    <label class="form-checkbox">
                      <input type="checkbox" :value="month.key" v-model="filter.months">
                      <i class="form-icon"></i> {{month.name}}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="column col-9 col-xs-12">
              <my-chart :width="300" :height="300" v-if="chart !== null" :chartData="chart.datacollection" :options="chart.options"></my-chart>
              <br/>
              <div class="table-container">
                <table class="table table-striped table-hover responsive" v-if="local.numberSummary">
                  <thead>
                    <tr>
                      <th class="text-center">ลูกค้า <span class="label label-rounded label-primary">{{items.length}}</span></th>
                       <th class="text-center">จำนวนจ๊อบ <span class="label label-rounded label-primary">{{local.numberSummary.jobTotal}}</span></th>
                      <th class="text-center">จำนวนการผลิต <span class="label label-rounded label-primary">{{local.numberSummary.inTimeTotal + local.numberSummary.lateTotal}}</span></th>
                      <th class="text-center">ทันกำหนดส่ง <span class="label label-rounded label-primary">{{local.numberSummary.inTimeTotal}}</span></th>
                      <th class="text-center">ไม่ทันกำหนดส่ง <span class="label label-rounded label-primary">{{local.numberSummary.lateTotal}}</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr :key="itemIndex" v-for="(item, itemIndex) in items">
                      <td class="text-center" data-column="ลูกค้า">{{item.cusName}}</td>
                      <td class="text-center" data-column="จำนวนจ๊อบ">{{item.allJobs}}</td>
                      <td class="text-center" data-column="จำนวนจ๊อบทั้งหมด">{{item.allProduct}}</td>
                      <td class="text-center" data-column="ทันกำหนดส่ง">{{item.inTime}}</td>
                      <td class="text-center" data-column="ไม่ทันกำหนดส่ง">{{item.late}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageTitle from '@Components/PageTitle'
import MyChart from '@Components/Chart'
import config from '@Config/app.config'
import service from '@Services/app.service'

export default {
  components: {
    PageTitle,
    MyChart
  },
  name: 'Summary',
  data () {
    return {
      chart: null,
      local: null,
      // {
      //   yearsAvailable: [],
      //   monthsAvailable: [],
      //   items: [],
      //   numberSummary: null
      // },
      filter: {
        years: [this.TODAY('YYYY')],
        months: [this.TODAY('MM')],
        allYears: [],
        allMonths: []
      }
    }
  },
  computed: {
    yearsAvailable () {
      return this.local.yearsAvailable
    },
    monthsAvailable () {
      return this.local.monthsAvailable
    },
    items () {
      return this.local.items
    },
    allYears () {
      return this.filter.allYears
    },
    allMonths () {
      return this.filter.allMonths
    },
    years () {
      return this.filter.years
    },
    months () {
      return this.filter.months
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      let resourceName = `${config.api.summary.index}`
      try {
        let res = await service.getResource({ resourceName, queryString: [] })
        this.local = res.data.result
        this.loadData()
      } catch (error) {
        // this.GO_TOPAGE('Product')
      }
    },
    checkFilter (checkType) {
      if (checkType !== null) {
        if (checkType === 'year') {
          if (this.filter.allYears.length) {
            this.yearsAvailable.map((item) => {
              this.filter.years.push(item.key)
              // console.log(this.filter.years)
            })
          } else {
            this.filter.years = []
          }
        }
        if (checkType === 'month') {
          if (this.filter.allMonths.length) {
            this.monthsAvailable.map((item) => {
              this.filter.months.push(item.key)
              // console.log(this.filter.months)
            })
          } else {
            this.filter.months = []
          }
        }
      }
      this.loadData()
    },
    async loadData () {
      let resourceName = `${config.api.summary.filter}`
      let params = {
        years: this.filter.years,
        months: this.filter.months
      }
      let queryString = this.BUILDPARAM(params)
      try {
        let res = await service.getResource({ resourceName, queryString })
        this.local.monthsAvailable = res.data.result.local.monthsAvailable
        this.chart = res.data.result.chart
        this.local.items = res.data.result.dataTable
        this.local.numberSummary = res.data.result.numberSummary
      } catch (error) {
        // this.GO_TOPAGE('Product')
      }
    }
  },
  watch: {
    allYears: {
      handler: function () {
        this.checkFilter('year')
      }
    },
    allMonths: {
      handler: function () {
        this.checkFilter('month')
      }
    },
    years: {
      handler: function () {
        this.checkFilter(null)
      }
    },
    months: {
      handler: function () {
        this.checkFilter(null)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  padding: 0;
  margin: 0;
}
.table-container {
    height: 22em;
}
// table {
//     display: flex;
//     flex-flow: column;
//     height: 100%;
//     width: 100%;
// }
// table thead {
//     /* head takes the height it requires, 
//     and it's not scaled when table is resized */
//     flex: 0 0 auto;
//     width: calc(100% - 0.9em);
// }
// table tbody {
//     /* body takes all the remaining available space */
//     flex: 1 1 auto;
//     display: block;
//     overflow-y: scroll;
// }
// table tbody tr {
//     width: 100%;
// }
// table thead, table tbody tr {
//     display: table;
//     table-layout: fixed;
// }
</style>
