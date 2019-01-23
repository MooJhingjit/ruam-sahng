<template>
  <div ref="procuctionReportTemplate" class="report" v-if="local !== null">
    <div style="border:1px solid #ccc; padding: 10px;">
    <table width="100%">
        <tr>
          <td style="text-align: left">
            <img :src="APPDATA.logo" width="60" height="60"/>
          </td>
          <td style="text-align: center;font-weight: bold;">
            <h3 style="margin: 0;">ใบสั่งผลิต/ตรวจสอบโรงงาน 2</h3>
            <p style="margin: 7px 0">บริษัทร่วมสร้างอินเตอร์กรุ๊ปจำกัด</p>
          </td>
          <td style="text-align: right">
              <div style="font-size: 13px;">QPOF-8-05-02</div>
              <div style="font-size: 13px;">03/10/2560</div>
          </td>
        </tr>
      </table>
      <br/>
      <table width="100%">
        <tbody>
          <tr>
            <td style="width: 50%; padding: 4px 0">ชื่อลูกค้า: {{customer.name}}</td>
            <td style="width: 50%; padding: 4px 0">รายการผลิต: {{product.name}}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">เลขที่จ๊อบ: {{job.code}}</td>
            <td style="width: 50%; padding: 4px 0">ประเภทตู้: {{getDataFromConfig(product.type, 'productType')}} <span v-if="product.otherTypeName">( {{product.otherTypeName}} )</span></td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">วันเริ่มเปิดจ๊อบ: {{GET_DATE(job.createDate)}}</td>
            <td style="width: 50%; padding: 4px 0">จำนวน: {{product.amount}}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">กำหนดส่ง: {{GET_DATE(product.dateEnd)}}</td>
            <td style="width: 50%; padding: 4px 0">
              <span>หนา: {{product.thickness}},&nbsp;&nbsp;</span>
              <span>วัสดุ: {{getDataFromConfig(product.equipment, 'equipment')}},&nbsp;&nbsp;</span>
              <span>สี: {{getDataFromConfig(product.colorType, 'colorType')}} <template v-if="product.colorName">( {{product.colorName}} )</template></span>
              </td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">เครื่อง: </td>
            <td style="width: 50%; padding: 4px 0">อุปกรณ์เสริม: {{getDataFromConfig(product.accessory, 'accessory')}}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">หมายเหตุ: </td>
            <td style="width: 50%; padding: 4px 0"></td>
          </tr>
        </tbody>
      </table>
      <br/>
      <table class="main-table" width="100%">
        <tr>
          <td width="30%">ผู้จัดทำ:</td>
          <td width="30%">ผู้อนุมัติ:</td>
          <td width="30%" style="text-align: right">ฝ่ายผลิต</td>
        </tr>
      </table>
  </div>
  <br/>
  <div style="border:1px solid #ccc; padding: 10px;">
    <table width="100%">
        <tr>
          <td style="text-align: left">
            <img :src="APPDATA.logo" width="60" height="60"/>
          </td>
          <td style="text-align: center;font-weight: bold;">
            <h3 style="margin: 0;">ใบสั่งผลิต/ตรวจสอบโรงงาน 2</h3>
            <p style="margin: 7px 0">บริษัทร่วมสร้างอินเตอร์กรุ๊ปจำกัด</p>
          </td>
          <td style="text-align: right">
              <div style="font-size: 13px;">QPOF-8-05-02</div>
              <div style="font-size: 13px;">03/10/2560</div>
          </td>
        </tr>
      </table>
      <br/>
      <table width="100%">
        <tbody>
          <tr>
            <td style="width: 50%; padding: 4px 0">ชื่อลูกค้า: {{customer.name}}</td>
            <td style="width: 50%; padding: 4px 0">รายการผลิต: {{product.name}}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">เลขที่จ๊อบ: {{job.code}}</td>
            <td style="width: 50%; padding: 4px 0">ประเภทตู้: {{getDataFromConfig(product.type, 'productType')}} <span v-if="product.otherTypeName">( {{product.otherTypeName}} )</span></td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">วันเริ่มเปิดจ๊อบ: {{GET_DATE(job.createDate)}}</td>
            <td style="width: 50%; padding: 4px 0">จำนวน: {{product.amount}}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">กำหนดส่ง: {{GET_DATE(product.dateEnd)}}</td>
            <td style="width: 50%; padding: 4px 0">
              <span>หนา: {{product.thickness}},&nbsp;&nbsp;</span>
              <span>วัสดุ: {{getDataFromConfig(product.equipment, 'equipment')}},&nbsp;&nbsp;</span>
              <span>สี: {{getDataFromConfig(product.colorType, 'colorType')}} <template v-if="product.colorName">( {{product.colorName}} )</template></span>
              </td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">เครื่อง:</td>
            <td style="width: 50%; padding: 4px 0">อุปกรณ์เสริม: {{getDataFromConfig(product.accessory, 'accessory')}}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">หมายเหตุ: </td>
            <td style="width: 50%; padding: 4px 0"></td>
          </tr>
        </tbody>
      </table>
      <br/>
      <table class="main-table" width="100%">
        <tr>
          <td width="30%">ผู้จัดทำ:</td>
          <td width="30%">ผู้อนุมัติ:</td>
          <td width="30%" style="text-align: right">QC</td>
        </tr>
      </table>
    </div>
    <br/>
    <div style="border:1px solid #ccc; padding: 10px;">
      <table width="100%">
          <tr>
            <td style="text-align: left">
              <img :src="APPDATA.logo" width="60" height="60" style=""/>
            </td>
            <td style="text-align: center;font-weight: bold;">
              <h3 style="margin: 0;">ใบสั่งผลิต/ตรวจสอบโรงงาน 2</h3>
              <p style="margin: 7px 0">บริษัทร่วมสร้างอินเตอร์กรุ๊ปจำกัด</p>
            </td>
            <td style="text-align: right">
                <div style="font-size: 13px;">QPOF-8-05-02</div>
                <div style="font-size: 13px;">03/10/2560</div>
            </td>
          </tr>
        </table>
        <br/>
        <table width="100%">
          <tbody>
          <tr>
            <td style="width: 50%; padding: 4px 0">ชื่อลูกค้า: {{customer.name}}</td>
            <td style="width: 50%; padding: 4px 0">รายการผลิต: {{product.name}}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">เลขที่จ๊อบ: {{job.code}}</td>
            <td style="width: 50%; padding: 4px 0">ประเภทตู้: {{getDataFromConfig(product.type, 'productType')}} <span v-if="product.otherTypeName">( {{product.otherTypeName}} )</span></td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">วันเริ่มเปิดจ๊อบ: {{GET_DATE(job.createDate)}}</td>
            <td style="width: 50%; padding: 4px 0">จำนวน: {{product.amount}}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">กำหนดส่ง: {{GET_DATE(product.dateEnd)}}</td>
            <td style="width: 50%; padding: 4px 0">
              <span>หนา: {{product.thickness}},&nbsp;&nbsp;</span>
              <span>วัสดุ: {{getDataFromConfig(product.equipment, 'equipment')}},&nbsp;&nbsp;</span>
              <span>สี: {{getDataFromConfig(product.colorType, 'colorType')}} <template v-if="product.colorName">( {{product.colorName}} )</template></span>
              </td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">เครื่อง:</td>
            <td style="width: 50%; padding: 4px 0">อุปกรณ์เสริม: {{getDataFromConfig(product.accessory, 'accessory')}}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 4px 0">หมายเหตุ: </td>
            <td style="width: 50%; padding: 4px 0"></td>
          </tr>
        </tbody>
        </table>
        <br/>
        <table class="main-table" width="100%">
          <tr>
            <td width="30%">ผู้จัดทำ:</td>
            <td width="30%">ผู้อนุมัติ:</td>
            <td width="30%" style="text-align: right">PACKING</td>
          </tr>
        </table>
    </div>
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
      return this.$refs.procuctionReportTemplate
    },
    printReceipt () {
      let html = this.getHtm()
      var win = window.open('', 'Title', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=950,height=600,top=0,left=0')
      let style = document.createElement('style')
      style.type = 'text/css'
      let css = '@media print {@page { margin: 0; }body { margin: .6cm .6cm; }}'
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
      // setTimeout(function() {
      //     win.print();
      //     win.close();
      // }, 250)
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
