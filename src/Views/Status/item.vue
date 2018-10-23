<template> <!-- can be used with admin and qc -->
  <div class="card bg-gray">
    <div class="card-body">
      <div class="columns">
        <div class="column flex-item-center col-xs-12"><span class="label label-gray p-2">ลูกค้า: Summit network</span></div>
        <div class="column flex-item-center col-xs-12"><span class="label label-gray p-2">วันที่เริ่มผลิต: 20/09/2018</span></div>
        <div class="column flex-item-center col-xs-12"><span class="label label-gray p-2">กำหนดเสร็จ: 20/10/2018</span></div>
        <!-- <div class="column text-right">
          <div class="btn-group btn-group-block result-view">
            <button @click="changeViewType('table')" :class="['btn btn-sm', {'active': local.viewType === 'table'}]"><i class="fas fa-table"></i></button>
            <button @click="changeViewType('timeline')" :class="['btn btn-sm', {'active': local.viewType === 'timeline'}]"><i class="fas fa-ellipsis-v"></i></button>
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
              <tr :class="{'disable text-light': item.status === 'disable'}" :key="index" v-for="(item, index) in local.items">
                <td class="">
                  {{item.department}}
                  <i class="text-dark fa fa-arrows-alt c-hand" aria-hidden="true"
                  v-if="item.status === 'done'"
                  @click="showDetail()"></i>
                </td>
                <td class="text-center">{{item.dateStart}}</td>
                <td class="text-center">{{item.dateEnd}}</td>
                <td class="text-center">
                  <template v-if="isAdmin">
                    {{item.note}}
                  </template>
                  <template v-else>
                    <template v-if="item.status === 'done'">
                      {{item.note}}
                    </template>
                    <template v-else-if="item.status === 'padding'">
                      <input type="text" class="form-input" placeholder="ระบุหมายเหตุ">
                    </template>
                  </template>
                </td>
                <td class="text-center">
                  <i class="fa fa-check-circle-o h5 text-success" aria-hidden="true" v-if="item.status === 'done'"></i>
                  <i class="fa fa-circle-o h5" aria-hidden="true" v-else-if="item.status === 'padding'  && isAdmin"></i>
                  <label class="form-checkbox form-inline c-hand" v-else-if="item.status === 'padding' && !isAdmin">
                    <input type="checkbox"><i class="form-icon"></i> ตรวจสอบ
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div class="column col-12" v-else>
          <div class="column col-6 col-mx-auto">
            <div class="bg-gray docs-block">
              <div class="timeline">
                <div class="timeline-item" :key="index" v-for="(item, index) in local.items">
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
      <div class="columns" v-if="!isAdmin">
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
</template>

<script>
import MyModal from '@Components/Modal'
import MyInput from '@Components/Form/myInput'
import MyButton from '@Components/Form/myButton'
export default {
  props: {
    // mode: {
    //   type: String,
    //   required: true
    // }
  },
  components: {
    MyModal,
    MyInput,
    MyButton
  },
  name: 'StatusPage',
  data () {
    return {
      isAdmin: true,
      local: {
        viewType: 'table',
        items: [
          {
            department: 'สเปคงาน', dateStart: '20/09/2018', dateEnd: '20/09/2018', note: 'ทดสอบ', status: 'done'
          },
          {
            department: 'แบบ', dateStart: '', dateEnd: '', note: '', status: 'padding'
          },
          {
            department: 'ตัด', dateStart: '', dateEnd: '', note: '', status: 'padding'
          },
          {
            department: 'พันท์', dateStart: '', dateEnd: '', note: '', status: 'padding'
          },
          {
            department: 'พับ', dateStart: '', dateEnd: '', note: '', status: 'padding'
          },
          {
            department: 'เชื่อมประกอบ', dateStart: '', dateEnd: '', note: '', status: 'disable'
          },
          {
            department: 'พ่นสี', dateStart: '', dateEnd: '', note: '', status: 'padding'
          },
          {
            department: 'ประกอบสำเร็จรูป', dateStart: '', dateEnd: '', note: '', status: 'padding'
          },
          {
            department: 'อุปกรณ์', dateStart: '', dateEnd: '', note: '', status: 'padding'
          },
          {
            department: 'วายริ่ง', dateStart: '', dateEnd: '', note: '', status: 'padding'
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
    showDetail () {
      this.$refs.myModal.show()
    },
    changeViewType (viewType) {
      this.local.viewType = viewType
    },
    submitHandle (btnTarget, tf) {
      if (tf) {
        this.$notify('TEST', 'success')
      }
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
.card-footer{
  margin-top: 15px;
}
.c-hand.absolute{
  left: 5px;
}
.timeline{
  margin: 30px 0;
}
.table{
  tr.disable{
    background: #f0f1f4;
  }
}
.p-2.bg-warning{
  padding-left: 0px !important;
}
</style>
