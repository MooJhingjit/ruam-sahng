<template>
  <div ref="productReport" class="report" v-if="local !== null">
    <table width="100%">
      <tr>
        <td style="text-align: left" width="30%">
          <!-- <img src="@/Assets/img/Logo.jpg" width="60" height="60"/> -->
        </td>
        <td style="text-align: center;font-weight: bold;" width="30%">
          <h4 style="margin: 0;">รายงานการผลิต</h4>
          <p style="margin: 7px 0">บริษัทร่วมสร้างอินเตอร์กรุ๊ปจำกัด</p>
        </td>
        <td style="text-align: right" width="30%">
            {{TODAY}}
        </td>
      </tr>
    </table>
    <table class="main-table" width="100%">
    <thead>
    <tr>
    <td class="no-padding">
        <table width="100%" class="receiver">
        <tbody>
          <tr>
            <td style="width: 50%;">ชื่อลูกค้า: {{customer.name}}</td>
            <td style="width: 50%;">รายการผลิต: {{product.name}}</td>
          </tr>
          <tr>
            <td style="width: 50%;">เลขที่จ็อบ: {{job.code}}</td>
            <td style="width: 50%;">ประเภทตู้: {{getDataFromConfig(product.type, 'productType')}}</td>
          </tr>
          <tr>
            <td style="width: 50%;">วันเริ่มเปิดจ็อบ: {{GET_DATE(job.createdAt)}}</td>
            <td style="width: 50%;">จำนวน: {{product.amount}}</td>
          </tr>
          <tr>
            <td style="width: 50%;">กำหนดส่ง: {{GET_DATE(product.dateEnd)}}</td>
            <td style="width: 50%;">
            <span>หนา: {{product.thickness}},&nbsp;&nbsp;</span>
            <span>วัสดุ: {{getDataFromConfig(product.equipment, 'equipment')}},&nbsp;&nbsp;</span>
            <span>สี: {{getDataFromConfig(product.colorType, 'colorType')}} <template v-if="product.colorName">( {{product.colorName}} )</template></span>
            </td>
          </tr>
          <tr>
            <td style="width: 50%;">สถานะ: {{JOBSTATUS[product.status]}}</td>
            <td style="width: 50%;">อุปกรณ์เสริม: {{getDataFromConfig(product.accessory, 'accessory')}}</td>
          </tr>
        </tbody>
        </table>
    </td>
    </tr>
  </thead>
  <tbody class="border">
    <tr>
      <td class="no-padding">
        <div style="margin-bottom: 10px;">สถานะการทำงาน</div>
        <table width="100%" border="1" style="border-collapse: collapse" class="item-lists">
          <thead>
            <tr>
              <td style="text-align: center; padding: 5px;" width="15%">แผนก</td>
              <td style="text-align: center; padding: 5px;" width="15%">วันที่เริ่ม</td>
              <td style="text-align: center; padding: 5px;" width="15%">วันที่เสร็จ</td>
              <td style="text-align: center; padding: 5px;" width="30%">หมายเหตุ</td>
              <td style="text-align: center; padding: 5px;" width="10%">สถานะ</td>
            </tr>
          </thead>
          <tbody>
            <tr :key="index" v-for="(task, index) in tasks">
              <td style="font-size: 13px; text-align: center; padding: 5px;">{{task.department}}</td>
              <td style="font-size: 13px; text-align: center; padding: 5px;">{{GET_DATE(task.dateStart)}}</td>
              <td style="font-size: 13px; text-align: center; padding: 5px;">{{GET_DATE(task.dateEnd)}}</td>
              <td style="font-size: 13px; padding: 5px;">{{task.note}}</td>
              <td style="font-size: 13px; text-align: center; padding: 5px;">{{TASKSTATUS[task.status]}}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td class="no-padding border">
        <table width="100%">
          <tbody>
            <tr>
              <td class="" style="width: 50%;">หมายเหตุ: {{product.note}}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
  </table>
  </div>
</template>

<script>
// import Helper from '@Libraries/common.helpers'
export default {
  props: {
    dataObj: {
      type: Object,
      required: true
    }
  },
  components: {
  },
  name: 'reportTemplate',
  data () {
    return {
      local: null
    }
  },
  computed: {
    customer () {
      return this.local.customer
    },
    job () {
      return this.local.job
    },
    product () {
      return this.local.product
    },
    tasks () {
      return this.local.tasks
    }
  },
  created () {
    this.local = this.dataObj
  },
  methods: {
    getHtm () {
      return this.$refs.productReport
    },
    printReceipt () {
      let html = this.getHtm()
      var win = window.open('', 'Title', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=950,height=600,top=0,left=0')
      let style = document.createElement('style')
      style.type = 'text/css'
      let css = '@media print {@page { margin: 0; }body { margin: 1.5cm 1cm; }}'
      // let css = ''
      if (style.styleSheet) {
        // This is required for IE8 and below.
        style.styleSheet.cssText = css
      } else {
        style.appendChild(document.createTextNode(css))
      }
      win.document.getElementsByTagName('head')[0].appendChild(style)
      win.document.body.innerHTML = html.innerHTML
      // win.focus()
      win.print()
    },
    getDataFromConfig (key, configKey) {
      return this.GET_VALUEFROMCONFIG(key, configKey, this.local.config[configKey])
    }
  },
  watch: {
    dataObj () {
      this.local = this.dataObj
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
