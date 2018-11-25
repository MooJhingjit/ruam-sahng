<template>
  <section v-if="server !== null">
    <div class="column col-12 col-xs-12">
      <page-title>
        <template slot="left-slot">
          <div v-if="local.isAdmin" class="p-2 bg-primary">
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
            <!-- <div class="column text-right">
              <div class="btn-group btn-group-block result-view">
                <button @click="changeViewType('table')" :class="['btn btn-sm', {'active': server.viewType === 'table'}]"><i class="fas fa-table"></i></button>
                <button @click="changeViewType('timeline')" :class="['btn btn-sm', {'active': server.viewType === 'timeline'}]"><i class="fas fa-ellipsis-v"></i></button>
              </div>
            </div> -->
          </div>
          <!-- <div class="divider"></div> -->
          <div class="columns">
            <div class="column" v-if="local.viewType === 'table'">
              <table class="table table-striped table-hover">
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
                    <td class="">
                      {{item.department}}
                      <i class="text-dark fa fa-arrows-alt c-hand" aria-hidden="true"
                      v-if="item.status === 'done'"
                      @click="showDetail()"></i>
                    </td>
                    <td class="text-center">{{GET_DATE(item.dateStart)}}</td>
                    <td class="text-center">{{GET_DATE(item.dateEnd)}}</td>
                    <td class="text-center">
                      <template v-if="local.isAdmin">
                        {{item.note}}
                      </template>
                      <template v-else>
                        <template v-if="item.status === 'done' || item.isDisable">
                          {{item.note}}
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
                    <td class="text-center">
                      <template v-if="local.isAdmin">
                        <i class="fa fa-check-circle-o h5 text-success" aria-hidden="true" v-if="item.status === 'done'"></i>
                        <i class="fa fa-circle-o h5" aria-hidden="true" v-else-if="item.status === 'ip'"></i>
                        <i class="fa fa fa-clock-o h5" aria-hidden="true" v-else-if="item.status === 'wait'"></i>
                      </template>
                      <template v-else>
                        <i class="fa fa-times h5" aria-hidden="true" v-if="item.isDisable"></i>
                        <i class="fa fa-check-circle-o h5 text-success" aria-hidden="true" v-else-if="item.status === 'done'"></i>
                        <label class="form-checkbox form-inline c-hand" v-else-if="item.status === 'ip'">
                          <input type="checkbox"
                          :disabled="item.isDisable"
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
          <div class="columns" v-if="!local.isAdmin">
            <div class="column col-12 center text-center">
              <my-button :config="{icon: 'fa fa-check-circle', btnClass: 'btn btn-success', doConfirm: true, text: 'บันทึกการเปลี่ยนแปลง'}" @submit="(tf) => submitHandle('update', tf)"></my-button>
            </div>
          </div>
          <div class="columns" v-else>
            <div class="column text-center">
              <my-button :config="{icon: 'fa fa-minus-circle', btnClass: 'btn btn-error', doConfirm: true, text: 'ยกเลิก'}" @submit="(tf) => submitHandle('cancel', tf)"></my-button>
            </div>
            <div class="column text-center">
              <my-button :config="{icon: 'fa fa-check-circle', btnClass: 'btn btn-success', doConfirm: true, text: 'เสร็จสิ้น'}" @submit="(tf) => submitHandle('done', tf)"></my-button>
            </div>
            <div class="column text-center">
              <my-button :config="{icon: 'fa fa-print', btnClass: 'btn btn-secondary', doConfirm: true, text: 'พิมพ์งาน'}" @submit="(tf) => submitHandle('print', tf)"></my-button>
            </div>
            <div class="column text-center">
              <my-button :config="{icon: 'fa fa-print', btnClass: 'btn btn-secondary', doConfirm: true, text: 'รายงาน'}" @submit="(tf) => submitHandle('report', tf)"></my-button>
            </div>
          </div>
        </div>
        <my-modal ref="myModal"></my-modal>
      </div>
    </div>
  </section>
</template>

<script>

import PageTitle from '@Components/PageTitle'
import MyModal from '@Components/Modal'
import MyInput from '@Components/Form/myInput'
import MyButton from '@Components/Form/myButton'
import config from '@Config/app.config'
import service from '@Services/app.service'
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
    MyInput
  },
  name: 'ProductEdit',
  data () {
    return {
      server: null,
      local: {
        viewType: 'table',
        isAdmin: false
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
      let resourceName = `${config.api.product.index}/${this.$route.params.key}`
      try {
        let res = await service.getResource({ resourceName, queryString: [] })
        this.server = res.data.result
      } catch (error) {
        this.GO_TOPAGE('Product')
      }
    },
    async submitHandle (actionType, tf) {
      if (!tf) return
      let data = this.server
      let resourceName = `${config.api.product.index}/${this.$route.params.key}`
      switch (actionType) {
        case 'update':
          await service.putResource({ resourceName, data })
          this.fetchData()
          this.$notify('ทำรายการเสร็จสิ้น', 'success')
        break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
