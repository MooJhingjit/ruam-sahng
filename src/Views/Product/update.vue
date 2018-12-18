<template>
  <section v-if="server !== null">
    <div class="column col-12 col-xs-12">
      <page-title>
        <template slot="left-slot">
          <div v-if="ISADMIN" class="p-2 bg-primary">
            {{server.job.code}} / {{server.product.name}}
          </div>
          <div v-else class="p-2 bg-warning">
            <span class="p-2">QC:</span>{{server.job.code}} / {{server.product.name}}
          </div>
        </template>
        <div class="has-icon-left" slot="right-slot"></div>
      </page-title>
    </div>
    <div class="column col-12 col-xs-12">
      <div class="card bg-gray">
        <div class="card-body">
          <div class="columns">
            <div class="column flex-item-center col-xs-12"><span class="label label-gray p-2">ลูกค้า: {{server.customer.name}}</span></div>
            <div class="column flex-item-center col-xs-12"><span class="label label-gray p-2">วันที่เริ่มผลิต: {{GET_DATE(server.job.createdAt)}}</span></div>
            <div class="column flex-item-center col-xs-12"><span class="label label-gray p-2">กำหนดเสร็จ: {{GET_DATE(server.product.dateEnd)}}</span></div>
            <div class="column flex-item-center col-xs-12"><span class="label label-gray p-2">สถานะ: {{JOBSTATUS[server.product.status]}}</span></div>
            <!-- <div class="column text-right">
              <div class="btn-group btn-group-block result-view">
                <button @click="changeViewType('table')" :class="['btn btn-sm', {'active': server.viewType === 'table'}]"><i class="fas fa-table"></i></button>
                <button @click="changeViewType('timeline')" :class="['btn btn-sm', {'active': server.viewType === 'timeline'}]"><i class="fas fa-ellipsis-v"></i></button>
              </div>
            </div> -->
          </div>
          <!-- <div class="columns panel" v-if="local.isShowDetail">
            <div class="column flex-item-center col-xs-12">
              
            </div>
          </div> -->
          <!-- <div class="divider"></div> -->
          <div class="columns">
            <div class="column" v-if="local.viewType === 'table'">
              <table class="table table-striped table-hover responsive">
                <thead>
                  <tr>
                    <th class="text-center text-bold" width="200">แผนก</th>
                    <th class="text-center text-bold" width="170">วันที่เริ่ม</th>
                    <th class="text-center text-bold" width="170">วันที่เสร็จ</th>
                    <th class="text-center text-bold">หมายเหตุ</th>
                    <th class="text-center text-bold" width="130">การตรวจสอบ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :class="{'disable text-light': item.isDisable}" :key="index" v-for="(item, index) in server.tasks">
                    <td data-column="แผนก" class="">
                      {{item.department}}
                      <!-- <i class="text-dark fa fa-arrows-alt c-hand" aria-hidden="true"
                      v-if="item.status === 'done'"
                      @click="showDetail()"></i> -->
                    </td>
                    <td data-column="วันที่เริ่ม" class="text-center">{{GET_DATE(item.dateStart)}}</td>
                    <td data-column="วันที่เสร็จ" class="text-center">{{GET_DATE(item.dateEnd)}}</td>
                    <td data-column="หมายเหตุ" class="text-center">
                      <template v-if="ISADMIN">
                        {{item.note}}
                      </template>
                      <template v-else>
                        <template v-if="item.status === 'done' || item.isDisable">
                          <div v-html="item.note">{{item.note}}</div>
                        </template>
                        <template v-else-if="item.status === 'ip'">
                          <my-input
                            :config="{
                              type: 'text',
                              key: `note${index}`,
                              placeholder: 'ระบุหมายเหตุ',
                              rules: '',
                              validator: $validator,
                              isDisable: item.isDisable
                            }"
                            :value="item.note"
                            @input="val => {item.note = val}"
                          ></my-input>
                          <!-- <input type="text" class="form-input" placeholder="ระบุหมายเหตุ"> -->
                        </template>
                      </template>
                    </td>
                    <td data-column="การตรวจสอบ" class="text-center">
                      <template v-if="ISADMIN">
                        <i class="fa fa-check-circle-o h5 text-success" aria-hidden="true" :title="TASKSTATUS[item.status]" v-if="item.status === 'done'"></i>
                        <i class="fa fa-circle-o h5" aria-hidden="true" :title="TASKSTATUS[item.status]" v-else-if="item.status === 'ip'"></i>
                        <i class="fa fa fa-clock-o h5" aria-hidden="true" :title="TASKSTATUS[item.status]" v-else-if="item.status === 'wait'"></i>
                      </template>
                      <template v-else>
                        <i class="fa fa-times h5" aria-hidden="true" v-if="item.isDisable"></i>
                        <i class="fa fa-check-circle-o h5 text-success" aria-hidden="true" v-else-if="item.status === 'done'"></i>
                        <label class="form-checkbox form-inline c-hand" v-else-if="item.status === 'ip'">
                          <input type="checkbox"
                          :disabled="item.isDisable || !ISROLE(item.order)"
                          :value="item._id"
                          v-model="item.done"
                          ><i class="form-icon"></i> ตรวจสอบ
                        </label>
                        <!-- <label class="form-checkbox form-inline c-hand" v-else-if="item.status === 'wait'">
                          <input type="checkbox" disabled><i class="form-icon"></i> ตรวจสอบ
                        </label> -->
                        <i class="fa fa fa-clock-o h5" aria-hidden="true" v-else-if="item.status === 'wait'"></i>
                      </template>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div class="column col-12" v-else>
              <div class="column col-6 col-mx-auto">
                <div class="bg-gray docs-block">
                  <div class="timeline">
                    <div class="timeline-item" :key="index" v-for="(item, index) in server.items">
                      <div class="timeline-left">
                        <a class="timeline-icon icon-lg tooltip"
                        href="#timeline-example-2"
                        :data-tooltip="`${item.dateStart} - ${item.dateEnd}`">
                          <i class="fas fa-check"></i>
                        </a>
                      </div>
                      <div class="timeline-content">
                        <div class="tile">
                          <div class="tile-content">
                            <p class="tile-subtitle h6 text-primary">{{item.department}}</p>
                            <p class="tile-title"><span class="text-secondary">วันที่เริ่ม</span>: {{item.dateStart}}</p>
                            <p class="tile-title"><span class="text-secondary">วันที่เสร็จ</span>: {{item.dateEnd}}</p>
                            <p class="tile-title"><span class="text-secondary">หมายเหตุ</span>: {{item.note}}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div class="card-footer">
          <div class="columns">
            <div class="column text-right">
              <span class="label"><i class="fa fa fa-clock-o h5" aria-hidden="true"></i> {{TASKSTATUS['wait']}}</span>
              <span class="label"><i class="fa fa-circle-o h5" aria-hidden="true"></i> {{TASKSTATUS['ip']}}</span>
              <span class="label"><i class="fa fa-check-circle-o h5 text-success"></i> {{TASKSTATUS['done']}}</span>
            </div>
          </div>
          <div class="columns" v-if="!ISADMIN">
            <div class="column col-12 center text-center" v-if="server.product.status !== 'review' && server.product.status !== 'done' && server.product.status !== 'send'">
              <my-button :config="{icon: 'fa fa-check-circle', btnClass: 'btn btn-success', doConfirm: true, text: 'บันทึกการเปลี่ยนแปลง'}" @submit="(tf) => submitHandle('update', tf)"></my-button>
            </div>
          </div>
          <div class="columns" v-else>
            <div class="column text-center"  v-if="server.product.status !== 'done'">
              <my-button :config="{icon: 'fa fa-minus-circle', btnClass: 'btn btn-error', doConfirm: true, text: 'ลบงาน'}" @submit="(tf) => submitHandle('delete', tf)"></my-button>
            </div>
            <div class="column text-center" v-if="server.product.status === 'review'">
              <my-button  :config="{icon: 'fa fa-check-circle', btnClass: 'btn btn-success', doConfirm: true, text: 'เสร็จสิ้น'}" @submit="(tf) => submitHandle('done', tf)"></my-button>
            </div>
            <div class="column text-center" v-if="server.product.status === 'done'">
              <my-button  :config="{icon: 'fa fa-check-circle', btnClass: 'btn btn-success', doConfirm: true, text: 'ส่งงาน'}" @submit="(tf) => submitHandle('send', tf)"></my-button>
            </div>
            <div class="column text-center">
              <my-button :config="{icon: 'fa fa-info-circle', btnClass: 'btn btn-secondary', doConfirm: false, text: 'รายละเอียดงาน'}" @submit="(tf) => submitHandle('detail', tf)"></my-button>
            </div>
            <div class="column text-center">
              <my-button :config="{icon: 'fa fa-print', btnClass: 'btn btn-secondary', doConfirm: false, text: 'ใบสั่งผลิต'}" @submit="(tf) => submitHandle('production-report', tf)"></my-button>
            </div>
            <div class="column text-center">
              <my-button :config="{icon: 'fa fa-print', btnClass: 'btn btn-secondary', doConfirm: false, text: 'รายงาน'}" @submit="(tf) => submitHandle('report', tf)"></my-button>
            </div>
          </div>
        </div>
        <my-modal ref="myModal">
          <!-- <div slot="title">
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                {{server.customer.name}}
              </li>
              <li class="breadcrumb-item">
                {{server.job.code}}
              </li>
              <li class="breadcrumb-item">
                {{server.product.name}}
              </li>
            </ul>
          </div> -->
          <div slot="content">
            <div class="container">
              <div class="columns">
                <div class="column col-4 col-sm-6">
                  <div class="tile tile-centered">
                    <div class="tile-content">
                      <div class="tile-title text-bold">ชื่อลูกค้า</div>
                      <div class="tile-subtitle">{{server.customer.name}}</div>
                    </div>
                  </div>
                </div>
                <div class="column col-4 col-sm-6">
                  <div class="tile tile-centered">
                    <div class="tile-content">
                      <div class="tile-title text-bold">เลขที่</div>
                      <div class="tile-subtitle">{{server.job.code}}</div>
                    </div>
                  </div>
                </div>
                <div class="column col-4 col-sm-6">
                  <div class="tile tile-centered">
                    <div class="tile-content">
                      <div class="tile-title text-bold">วันเริ่มเปิดจ็อบ</div>
                      <div class="tile-subtitle">{{GET_DATE(server.job.createdAt)}}</div>
                    </div>
                  </div>
                </div>
                <div class="column col-4 col-sm-6">
                  <div class="tile tile-centered">
                    <div class="tile-content">
                      <div class="tile-title text-bold">กำหนดส่ง</div>
                      <div class="tile-subtitle">{{GET_DATE(product.dateEnd)}}</div>
                    </div>
                  </div>
                </div>
                <div class="column col-4 col-sm-6">
                  <div class="tile tile-centered">
                    <div class="tile-content">
                      <div class="tile-title text-bold">สถานะ</div>
                      <div class="tile-subtitle">{{JOBSTATUS[product.status]}}</div>
                    </div>
                  </div>
                </div>
                <div class="column col-4 col-sm-6" v-if="product.sendAt">
                  <div class="tile tile-centered">
                    <div class="tile-content">
                      <div class="tile-title text-bold">วันที่ส่ง</div>
                      <div class="tile-subtitle">{{GET_DATE(product.sendAt)}}</div>
                    </div>
                  </div>
                </div>
                <div class="column col-12 panel">
                  <div class="tile tile-centered">
                    <div class="tile-content">
                      <div class="tile-title text-bold">รายละเอียดการผลิต</div>
                      <div class="tile-subtitle">
                        <div>รายการผลิต: {{product.name}}</div>
                        <div>ประเภทตู้: {{getDataFromConfig(product.type, 'productType')}}</div>
                        <div>จำนวน: {{product.amount}}</div>
                        <div>หนา: {{product.thickness}}</div>
                        <div>
                          วัสดุ: {{getDataFromConfig(product.equipment, 'equipment')}}
                          <template v-if="product.surface">( {{product.surface}} )</template>
                        </div>
                        <div>
                          สี: {{getDataFromConfig(product.colorType, 'colorType')}}
                          <template v-if="product.colorName">( {{product.colorName}} )</template>
                        </div>
                        <div>อุปกรณ์เสริม: {{getDataFromConfig(product.accessory, 'accessory')}}</div>
                        <div>หมายเหตุ: {{product.note}}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="column col-12 panel">
                  <div class="tile tile-centered">
                    <div class="tile-content">
                      <div class="tile-title text-bold">หมายเหตุการทำงาน</div>
                      <div class="tile-subtitle">
                        <div :key="index" v-for="(item, index) in server.tasks">
                          {{item.department}}: {{item.note}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </my-modal>
      </div>
    </div>
    <report-template class="report-template" ref="reportTemplate" :dataObj="server" ></report-template>
    <production-report-template class="production-report-template" ref="procuctionReportTemplate" :dataObj="server" ></production-report-template>
    
  </section>
</template>

<script>
import { bus } from '@/main'
import PageTitle from '@Components/PageTitle'
import MyModal from '@Components/Modal'
import MyInput from '@Components/Form/myInput'
import MyButton from '@Components/Form/myButton'
import config from '@Config/app.config'
import service from '@Services/app.service'
import reportTemplate from './report'
import productionReportTemplate from './productionReport'
export default {
  props: {
    // mode: {
    //   type: String,
    //   required: true
    // }
  },
  components: {
    PageTitle,
    MyModal,
    MyButton,
    MyInput,
    reportTemplate,
    productionReportTemplate
  },
  name: 'ProductEdit',
  data () {
    return {
      server: null,
      local: {
        viewType: 'table',
        detailObj: []
        // isAdmin: false
      }
    }
  },
  computed: {
    product () {
      return this.server.product
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
      let resourceName = `${config.api.product.index}/${this.$route.params.key}`
      try {
        let res = await service.getResource({ resourceName, queryString: [] })
        this.server = res.data.result
        // this.setDetailObj()
      } catch (error) {
        this.GO_TOPAGE('Product')
      }
    },
    async submitHandle (actionType, tf) {
      if (!tf) return
      let data = {}
      let resourceName = `${config.api.product.index}/${this.$route.params.key}`
      switch (actionType) {
        case 'update':
          data = this.server
          let result = await service.putResource({ resourceName, data })
          if (result.data.result.isReview) { // if true === product status = review
            this.UPDATE_NOTIFICATION()
          }
          this.fetchData()
          this.$notify('ทำรายการเสร็จสิ้น', 'success')
          break
        case 'done':
        case 'send':
        case 'delete':
          data = { status: actionType }
          resourceName = `${config.api.product.status}/${this.$route.params.key}`
          await service.putResource({ resourceName, data })
          if (actionType === 'done') {
            this.fetchData()
            this.UPDATE_NOTIFICATION()
          } else {
            this.GO_TOPAGE('Product')
          }
          this.updateProduct()
          this.$notify('ทำรายการเสร็จสิ้น', 'success')
          break
        case 'detail':
          this.$refs.myModal.show()
          break
        case 'report':
          this.$refs.reportTemplate.printReceipt()
          break
        case 'production-report':
          this.$refs.procuctionReportTemplate.printReceipt()
          break
      }
    },
    updateProduct () {
      let emitObj = {
        key: 'UPDATE_PRODUCT',
        data: {
          // message: 'created'
        }
      }
      bus.$emit('emitSocket', emitObj)
    },
    getDataFromConfig (key, configKey) {
      return this.GET_VALUEFROMCONFIG(key, configKey, this.server.config[configKey])
      // if (!key) return
      // let config = this.server.config[configKey]
      // let obj = []
      // let str = ''
      // if (configKey === 'accessory') {
      //   config.map((item) => {
      //     if (key.indexOf(item.key) >= 0) {
      //       str += `${item.name}, `
      //     }
      //   })
      //   return str.slice(0, -2)
      // } else {
      //   obj = config.filter((item) => {
      //     return item.key && item.key.toString() === key.toString()
      //   })
      //   if (obj.length > 0) {
      //     return obj[0].name
      //   }
      // }
      // return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.report-template, .production-report-template  {
  display: none
}

</style>
