(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b7c"],{"0194":function(t,e,a){"use strict";var s=a("ab7b"),i=a.n(s);i.a},"03ab":function(t,e,a){},"2d72":function(t,e,a){},3182:function(t,e,a){"use strict";var s=a("3595"),i=a.n(s);i.a},3595:function(t,e,a){},3658:function(t,e,a){},5877:function(t,e,a){"use strict";var s=a("3658"),i=a.n(s);i.a},7148:function(t,e,a){"use strict";var s=a("aedb"),i=a.n(s);i.a},7599:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-title"},[a("div",{staticClass:"columns"},["all"===t.side||"left"===t.side?a("div",{staticClass:"d-flex column col-6 col-md-12 col-xs-12"},[t._t("left-slot")],2):t._e(),"all"===t.side||"right"===t.side?a("div",{class:["column col-md-12 col-xs-12",{"col-6":"all"===t.side},{"col-12":"right"===t.side}]},[t._t("right-slot")],2):t._e()])])},i=[],n=(a("cadf"),a("551c"),a("097d"),{props:{side:{type:String,required:!1,default:"all"}},components:{},name:"PageTitle",data:function(){return{property:"Blank"}},computed:{},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{}}),c=n,o=(a("de69"),a("2877")),r=Object(o["a"])(c,s,i,!1,null,"5524af86",null);r.options.__file="index.vue";e["a"]=r.exports},"9cd5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!==t.server?a("section",[a("div",{staticClass:"column col-12 col-xs-12"},[a("page-title",[a("template",{slot:"left-slot"},[t.ISADMIN?a("div",{staticClass:"p-2 bg-primary"},[t._v("\n          "+t._s(t.server.job.code)+" / "+t._s(t.server.product.name)+"\n        ")]):a("div",{staticClass:"p-2 bg-warning"},[a("span",{staticClass:"p-2"},[t._v("QC:")]),t._v(t._s(t.server.job.code)+" / "+t._s(t.server.product.name)+"\n        ")])]),a("div",{staticClass:"has-icon-left",attrs:{slot:"right-slot"},slot:"right-slot"})],2)],1),a("div",{staticClass:"column col-12 col-xs-12"},[a("div",{staticClass:"card bg-gray"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column flex-item-center col-xs-12"},[a("span",{staticClass:"label label-gray p-2"},[t._v("ลูกค้า: "+t._s(t.server.customer.name))])]),a("div",{staticClass:"column flex-item-center col-xs-12"},[a("span",{staticClass:"label label-gray p-2"},[t._v("วันที่เริ่มผลิต: "+t._s(t.GET_DATE(t.server.job.createdAt)))])]),a("div",{staticClass:"column flex-item-center col-xs-12"},[a("span",{staticClass:"label label-gray p-2"},[t._v("กำหนดเสร็จ: "+t._s(t.GET_DATE(t.server.product.dateEnd)))])]),a("div",{staticClass:"column flex-item-center col-xs-12"},[a("span",{staticClass:"label label-gray p-2"},[t._v("สถานะ: "+t._s(t.JOBSTATUS[t.server.product.status]))])])]),a("div",{staticClass:"columns"},["table"===t.local.viewType?a("div",{staticClass:"column"},[a("table",{staticClass:"table table-striped table-hover responsive"},[t._m(0),a("tbody",t._l(t.server.tasks,function(e,s){return a("tr",{key:s,class:{"disable text-light":e.isDisable}},[a("td",{attrs:{"data-column":"แผนก"}},[t._v("\n                    "+t._s(e.department)+"\n                    ")]),a("td",{staticClass:"text-center",attrs:{"data-column":"วันที่เริ่ม"}},[t._v(t._s(t.GET_DATE(e.dateStart)))]),a("td",{staticClass:"text-center",attrs:{"data-column":"วันที่เสร็จ"}},[t._v(t._s(t.GET_DATE(e.dateEnd)))]),a("td",{staticClass:"text-center",attrs:{"data-column":"หมายเหตุ"}},[t.ISADMIN?[t._v("\n                      "+t._s(e.note)+"\n                    ")]:["done"===e.status||e.isDisable?[a("div",{domProps:{innerHTML:t._s(e.note)}},[t._v(t._s(e.note))])]:"ip"===e.status?[a("my-input",{attrs:{config:{type:"text",key:"note"+s,placeholder:"ระบุหมายเหตุ",rules:"",validator:t.$validator,isDisable:e.isDisable},value:e.note},on:{input:function(t){e.note=t}}})]:t._e()]],2),a("td",{staticClass:"text-center",attrs:{"data-column":"การตรวจสอบ"}},[t.ISADMIN?["done"===e.status?a("i",{staticClass:"fa fa-check-circle-o h5 text-success",attrs:{"aria-hidden":"true",title:t.TASKSTATUS[e.status]}}):"ip"===e.status?a("i",{staticClass:"fa fa-circle-o h5",attrs:{"aria-hidden":"true",title:t.TASKSTATUS[e.status]}}):"wait"===e.status?a("i",{staticClass:"fa fa fa-clock-o h5",attrs:{"aria-hidden":"true",title:t.TASKSTATUS[e.status]}}):t._e()]:[e.isDisable?a("i",{staticClass:"fa fa-times h5",attrs:{"aria-hidden":"true"}}):"done"===e.status?a("i",{staticClass:"fa fa-check-circle-o h5 text-success",attrs:{"aria-hidden":"true"}}):"ip"===e.status?a("label",{staticClass:"form-checkbox form-inline c-hand"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.done,expression:"item.done"}],attrs:{type:"checkbox",disabled:e.isDisable||!t.ISROLE(e.order)},domProps:{value:e._id,checked:Array.isArray(e.done)?t._i(e.done,e._id)>-1:e.done},on:{change:function(a){var s=e.done,i=a.target,n=!!i.checked;if(Array.isArray(s)){var c=e._id,o=t._i(s,c);i.checked?o<0&&t.$set(e,"done",s.concat([c])):o>-1&&t.$set(e,"done",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(e,"done",n)}}}),a("i",{staticClass:"form-icon"}),t._v(" ตรวจสอบ\n                      ")]):"wait"===e.status?a("i",{staticClass:"fa fa fa-clock-o h5",attrs:{"aria-hidden":"true"}}):t._e()]],2)])}))])]):t._e()])]),a("div",{staticClass:"card-footer"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column text-right"},[a("span",{staticClass:"label"},[a("i",{staticClass:"fa fa fa-clock-o h5",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.TASKSTATUS["wait"]))]),a("span",{staticClass:"label"},[a("i",{staticClass:"fa fa-circle-o h5",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.TASKSTATUS["ip"]))]),a("span",{staticClass:"label"},[a("i",{staticClass:"fa fa-check-circle-o h5 text-success"}),t._v(" "+t._s(t.TASKSTATUS["done"]))])])]),a("div",{staticClass:"columns"},[t.CANSHOW(["qc"])&&"ip"===t.server.product.status?a("div",{staticClass:"column text-center"},[a("my-button",{attrs:{config:{icon:"fa fa-check-circle",btnClass:"btn btn-success",doConfirm:!0,text:"บันทึกการเปลี่ยนแปลง"}},on:{submit:function(e){return t.submitHandle("update",e)}}})],1):t._e(),t.CANSHOW(["admin"])&&"send"!==t.server.product.status?a("div",{staticClass:"column text-center"},[a("my-button",{attrs:{config:{icon:"fa fa-minus-circle",btnClass:"btn btn-error",doConfirm:!0,text:"ลบงาน"}},on:{submit:function(e){return t.submitHandle("delete",e)}}})],1):t._e(),t.CANSHOW(["admin"])&&"done"===t.server.product.status?a("div",{staticClass:"column text-center"},[a("my-button",{attrs:{config:{icon:"fa fa-paper-plane-o",btnClass:"btn btn-success",doConfirm:!0,text:"ส่งงาน"}},on:{submit:function(e){return t.submitHandle("send",e)}}})],1):t._e(),t.CANSHOW("*")?a("div",{staticClass:"column text-center"},[a("my-button",{attrs:{config:{icon:"fa fa-info-circle",btnClass:"btn btn-secondary",doConfirm:!1,text:"รายละเอียดงาน"}},on:{submit:function(e){return t.submitHandle("detail",e)}}})],1):t._e(),t.CANSHOW(["admin","monitor"])?a("div",{staticClass:"column text-center"},[a("my-button",{attrs:{config:{icon:"fa fa-print",btnClass:"btn btn-secondary",doConfirm:!1,text:"ใบสั่งผลิต"}},on:{submit:function(e){return t.submitHandle("production-report",e)}}})],1):t._e(),t.CANSHOW(["admin","monitor"])?a("div",{staticClass:"column text-center"},[a("my-button",{attrs:{config:{icon:"fa fa-print",btnClass:"btn btn-secondary",doConfirm:!1,text:"รายงาน"}},on:{submit:function(e){return t.submitHandle("report",e)}}})],1):t._e()])]),a("my-modal",{ref:"myModal"},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column col-4 col-sm-6"},[a("div",{staticClass:"tile tile-centered"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title text-bold"},[t._v("ชื่อลูกค้า")]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.server.customer.name))])])])]),a("div",{staticClass:"column col-4 col-sm-6"},[a("div",{staticClass:"tile tile-centered"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title text-bold"},[t._v("เลขที่")]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.server.job.code))])])])]),a("div",{staticClass:"column col-4 col-sm-6"},[a("div",{staticClass:"tile tile-centered"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title text-bold"},[t._v("วันเริ่มเปิดจ๊อบ")]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.GET_DATE(t.server.job.createdAt)))])])])]),a("div",{staticClass:"column col-4 col-sm-6"},[a("div",{staticClass:"tile tile-centered"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title text-bold"},[t._v("กำหนดส่ง")]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.GET_DATE(t.product.dateEnd)))])])])]),a("div",{staticClass:"column col-4 col-sm-6"},[a("div",{staticClass:"tile tile-centered"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title text-bold"},[t._v("สถานะ")]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.JOBSTATUS[t.product.status]))])])])]),t.product.sendAt?a("div",{staticClass:"column col-4 col-sm-6"},[a("div",{staticClass:"tile tile-centered"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title text-bold"},[t._v("วันที่ส่ง")]),a("div",{staticClass:"tile-subtitle"},[t._v(t._s(t.GET_DATE(t.product.sendAt)))])])])]):t._e(),a("div",{staticClass:"column col-12 panel"},[a("div",{staticClass:"tile tile-centered"},[a("div",{staticClass:"tile-content"},[a("div",{staticClass:"tile-title text-bold"},[t._v("รายละเอียดการผลิต")]),a("div",{staticClass:"tile-subtitle"},[a("div",[t._v("รายการผลิต: "+t._s(t.product.name))]),a("div",[t._v("ประเภทตู้: "+t._s(t.getDataFromConfig(t.product.type,"productType")))]),a("div",[t._v("จำนวน: "+t._s(t.product.amount))]),a("div",[t._v("หนา: "+t._s(t.product.thickness))]),a("div",[t._v("\n                        วัสดุ: "+t._s(t.getDataFromConfig(t.product.equipment,"equipment"))+"\n                        "),t.product.surface?[t._v("( "+t._s(t.product.surface)+" )")]:t._e()],2),a("div",[t._v("\n                        สี: "+t._s(t.getDataFromConfig(t.product.colorType,"colorType"))+"\n                        "),t.product.colorName?[t._v("( "+t._s(t.product.colorName)+" )")]:t._e()],2),a("div",[t._v("อุปกรณ์เสริม: "+t._s(t.getDataFromConfig(t.product.accessory,"accessory")))]),a("div",[t._v("หมายเหตุ: "+t._s(t.product.note))])])])])])])])])])],1)]),a("report-template",{ref:"reportTemplate",staticClass:"report-template",attrs:{dataObj:t.server}}),a("production-report-template",{ref:"procuctionReportTemplate",staticClass:"production-report-template",attrs:{dataObj:t.server}})],1):t._e()},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-center text-bold",attrs:{width:"200"}},[t._v("แผนก")]),a("th",{staticClass:"text-center text-bold",attrs:{width:"170"}},[t._v("วันที่เริ่ม")]),a("th",{staticClass:"text-center text-bold",attrs:{width:"170"}},[t._v("วันที่เสร็จ")]),a("th",{staticClass:"text-center text-bold"},[t._v("หมายเหตุ")]),a("th",{staticClass:"text-center text-bold",attrs:{width:"130"}},[t._v("การตรวจสอบ")])])])}],n=(a("96cf"),a("3040")),c=(a("cadf"),a("551c"),a("097d"),a("56d7")),o=a("7599"),r=a("c414"),l=a("deaf"),d=a("a908"),u=a("9822"),p=a("8671"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!==t.local?a("div",{ref:"productReport",staticClass:"report"},[a("table",{attrs:{width:"100%"}},[a("tr",[a("td",{staticStyle:{"text-align":"left"},attrs:{width:"30%"}}),t._m(0),a("td",{staticStyle:{"text-align":"right"},attrs:{width:"30%"}},[t._v("\n          "+t._s(t.job.code)+"\n          "),a("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(t.TODAY()))])])])]),a("table",{staticClass:"main-table",attrs:{width:"100%"}},[a("thead",[a("tr",[a("td",{staticClass:"no-padding"},[a("table",{staticClass:"receiver",attrs:{width:"100%"}},[a("tbody",[a("tr",[a("td",{staticStyle:{width:"50%"}},[t._v("ชื่อลูกค้า: "+t._s(t.customer.name))]),a("td",{staticStyle:{width:"50%"}},[t._v("รายการผลิต: "+t._s(t.product.name))])]),a("tr",[a("td",{staticStyle:{width:"50%"}},[t._v("เลขที่จ๊อบ: "+t._s(t.job.code))]),a("td",{staticStyle:{width:"50%"}},[t._v("ประเภทตู้: "+t._s(t.getDataFromConfig(t.product.type,"productType")))])]),a("tr",[a("td",{staticStyle:{width:"50%"}},[t._v("วันเริ่มเปิดจ๊อบ: "+t._s(t.GET_DATE(t.job.createdAt)))]),a("td",{staticStyle:{width:"50%"}},[t._v("จำนวน: "+t._s(t.product.amount))])]),a("tr",[a("td",{staticStyle:{width:"50%"}},[t._v("กำหนดส่ง: "+t._s(t.GET_DATE(t.product.dateEnd)))]),a("td",{staticStyle:{width:"50%"}},[a("span",[t._v("หนา: "+t._s(t.product.thickness)+",  ")]),a("span",[t._v("วัสดุ: "+t._s(t.getDataFromConfig(t.product.equipment,"equipment"))+",  ")]),a("span",[t._v("สี: "+t._s(t.getDataFromConfig(t.product.colorType,"colorType"))+" "),t.product.colorName?[t._v("( "+t._s(t.product.colorName)+" )")]:t._e()],2)])]),a("tr",[a("td",{staticStyle:{width:"50%"}},[t._v("สถานะ: "+t._s(t.JOBSTATUS[t.product.status]))]),a("td",{staticStyle:{width:"50%"}},[t._v("อุปกรณ์เสริม: "+t._s(t.getDataFromConfig(t.product.accessory,"accessory")))])]),t.product.sendAt?a("tr",[a("td",{staticStyle:{width:"50%"}},[t._v("วันที่ส่ง: "+t._s(t.GET_DATE(t.product.sendAt)))]),a("td",{staticStyle:{width:"50%"}})]):t._e(),t._m(1)])])])])]),a("tbody",{staticClass:"border"},[a("tr",[a("td",{staticClass:"no-padding"},[a("div",{staticStyle:{"margin-bottom":"10px"}},[t._v("สถานะการทำงาน")]),a("table",{staticClass:"item-lists",staticStyle:{"border-collapse":"collapse"},attrs:{width:"100%",border:"1"}},[t._m(2),a("tbody",t._l(t.tasks,function(e,s){return a("tr",{key:s},[a("td",{staticStyle:{"font-size":"13px","text-align":"center",padding:"5px"}},[t._v(t._s(e.department))]),a("td",{staticStyle:{"font-size":"13px","text-align":"center",padding:"5px"}},[t._v(t._s(t.GET_DATE(e.dateStart)))]),a("td",{staticStyle:{"font-size":"13px","text-align":"center",padding:"5px"}},[t._v(t._s(t.GET_DATE(e.dateEnd)))]),a("td",{staticStyle:{"font-size":"13px",padding:"5px"}},[t._v(t._s(e.note))]),a("td",{staticStyle:{"font-size":"13px","text-align":"center",padding:"5px"}},[e.isDisable?a("span",[t._v("-")]):a("span",[t._v(t._s(t.TASKSTATUS[e.status]))])])])}))])])]),a("tr",[a("td",{staticClass:"no-padding border"},[a("table",{attrs:{width:"100%"}},[a("tbody",[a("tr",[a("td",{staticStyle:{width:"50%"}},[t._v("หมายเหตุ: "+t._s(t.product.note))])])])])])])])])]):t._e()},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticStyle:{"text-align":"center","font-weight":"bold"},attrs:{width:"30%"}},[a("h4",{staticStyle:{margin:"0"}},[t._v("รายงานการผลิต")]),a("p",{staticStyle:{margin:"7px 0"}},[t._v("บริษัทร่วมสร้างอินเตอร์กรุ๊ปจำกัด")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticStyle:{width:"50%"}}),a("td",{staticStyle:{width:"50%"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",{staticStyle:{"text-align":"center",padding:"5px"},attrs:{width:"15%"}},[t._v("แผนก")]),a("td",{staticStyle:{"text-align":"center",padding:"5px"},attrs:{width:"15%"}},[t._v("วันที่เริ่ม")]),a("td",{staticStyle:{"text-align":"center",padding:"5px"},attrs:{width:"15%"}},[t._v("วันที่เสร็จ")]),a("td",{staticStyle:{"text-align":"center",padding:"5px"},attrs:{width:"30%"}},[t._v("หมายเหตุ")]),a("td",{staticStyle:{"text-align":"center",padding:"5px"},attrs:{width:"10%"}},[t._v("สถานะ")])])])}],f={props:{dataObj:{type:Object,required:!0}},components:{},name:"reportTemplate",data:function(){return{local:null}},computed:{customer:function(){return this.local.customer},job:function(){return this.local.job},product:function(){return this.local.product},tasks:function(){return this.local.tasks}},created:function(){this.local=this.dataObj},methods:{getHtm:function(){return this.$refs.productReport},printReceipt:function(){var t=this.getHtm(),e=window.open("","Title","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=950,height=600,top=0,left=0"),a=document.createElement("style");a.type="text/css";var s="@media print {@page { margin: 0; }body { margin: 1.5cm 1cm; }}";a.styleSheet?a.styleSheet.cssText=s:a.appendChild(document.createTextNode(s)),e.document.getElementsByTagName("head")[0].appendChild(a),e.document.body.innerHTML=t.innerHTML,e.print()},getDataFromConfig:function(t,e){return this.GET_VALUEFROMCONFIG(t,e,this.local.config[e])}},watch:{dataObj:function(){this.local=this.dataObj}}},_=f,h=(a("7148"),a("2877")),y=Object(h["a"])(_,m,v,!1,null,"fd448ff4",null);y.options.__file="report.vue";var g=y.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!==t.local?a("div",{ref:"procuctionReportTemplate",staticClass:"report"},[a("div",{staticStyle:{border:"1px solid #ccc",padding:"10px"}},[a("table",{attrs:{width:"100%"}},[a("tr",[a("td",{staticStyle:{"text-align":"left"},attrs:{width:"30%"}},[a("img",{attrs:{src:t.APPDATA.logo,width:"60",height:"60"}})]),t._m(0),a("td",{staticStyle:{"text-align":"right"},attrs:{width:"30%"}},[t._v("\n            "+t._s(t.job.code)+"\n            "),a("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(t.TODAY()))])])])]),a("br"),a("table",{attrs:{width:"100%"}},[a("tbody",[a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("ชื่อลูกค้า: "+t._s(t.customer.name))]),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("รายการผลิต: "+t._s(t.product.name))])]),a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("เลขที่จ๊อบ: "+t._s(t.job.code))]),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("ประเภทตู้: "+t._s(t.getDataFromConfig(t.product.type,"productType")))])]),a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("วันเริ่มเปิดจ๊อบ: "+t._s(t.GET_DATE(t.job.createdAt)))]),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("จำนวน: "+t._s(t.product.amount))])]),a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("กำหนดส่ง: "+t._s(t.GET_DATE(t.product.dateEnd)))]),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[a("span",[t._v("หนา: "+t._s(t.product.thickness)+",  ")]),a("span",[t._v("วัสดุ: "+t._s(t.getDataFromConfig(t.product.equipment,"equipment"))+",  ")]),a("span",[t._v("สี: "+t._s(t.getDataFromConfig(t.product.colorType,"colorType"))+" "),t.product.colorName?[t._v("( "+t._s(t.product.colorName)+" )")]:t._e()],2)])]),a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}}),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("อุปกรณ์เสริม: "+t._s(t.getDataFromConfig(t.product.accessory,"accessory")))])])])]),a("br"),t._m(1)]),a("br"),a("div",{staticStyle:{border:"1px solid #ccc",padding:"10px"}},[a("table",{attrs:{width:"100%"}},[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("img",{attrs:{src:t.APPDATA.logo,width:"60",height:"60"}})]),t._m(2),a("td",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(t.job.code)+"\n            "),a("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(t.TODAY()))])])])]),a("br"),a("table",{attrs:{width:"100%"}},[a("tbody",[a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("ชื่อลูกค้า: "+t._s(t.customer.name))]),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("รายการผลิต: "+t._s(t.product.name))])]),a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("เลขที่จ๊อบ: "+t._s(t.job.code))]),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("ประเภทตู้: "+t._s(t.getDataFromConfig(t.product.type,"productType")))])]),a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("วันเริ่มเปิดจ๊อบ: "+t._s(t.GET_DATE(t.job.createdAt)))]),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("จำนวน: "+t._s(t.product.amount))])]),a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("กำหนดส่ง: "+t._s(t.GET_DATE(t.product.dateEnd)))]),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[a("span",[t._v("หนา: "+t._s(t.product.thickness)+",  ")]),a("span",[t._v("วัสดุ: "+t._s(t.getDataFromConfig(t.product.equipment,"equipment"))+",  ")]),a("span",[t._v("สี: "+t._s(t.getDataFromConfig(t.product.colorType,"colorType"))+" "),t.product.colorName?[t._v("( "+t._s(t.product.colorName)+" )")]:t._e()],2)])]),a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}}),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("อุปกรณ์เสริม: "+t._s(t.getDataFromConfig(t.product.accessory,"accessory")))])])])]),a("br"),t._m(3)]),a("br"),a("div",{staticStyle:{border:"1px solid #ccc",padding:"10px"}},[a("table",{attrs:{width:"100%"}},[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("img",{attrs:{src:t.APPDATA.logo,width:"60",height:"60"}})]),t._m(4),a("td",{staticStyle:{"text-align":"right"}},[t._v("\n              "+t._s(t.job.code)+"\n              "),a("div",{staticStyle:{"font-size":"13px"}},[t._v(t._s(t.TODAY()))])])])]),a("br"),a("table",{attrs:{width:"100%"}},[a("tbody",[a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("ชื่อลูกค้า: "+t._s(t.customer.name))]),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("รายการผลิต: "+t._s(t.product.name))])]),a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("เลขที่จ๊อบ: "+t._s(t.job.code))]),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("ประเภทตู้: "+t._s(t.getDataFromConfig(t.product.type,"productType")))])]),a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("วันเริ่มเปิดจ๊อบ: "+t._s(t.GET_DATE(t.job.createdAt)))]),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("จำนวน: "+t._s(t.product.amount))])]),a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("กำหนดส่ง: "+t._s(t.GET_DATE(t.product.dateEnd)))]),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[a("span",[t._v("หนา: "+t._s(t.product.thickness)+",  ")]),a("span",[t._v("วัสดุ: "+t._s(t.getDataFromConfig(t.product.equipment,"equipment"))+",  ")]),a("span",[t._v("สี: "+t._s(t.getDataFromConfig(t.product.colorType,"colorType"))+" "),t.product.colorName?[t._v("( "+t._s(t.product.colorName)+" )")]:t._e()],2)])]),a("tr",[a("td",{staticStyle:{width:"50%",padding:"4px 0"}}),a("td",{staticStyle:{width:"50%",padding:"4px 0"}},[t._v("อุปกรณ์เสริม: "+t._s(t.getDataFromConfig(t.product.accessory,"accessory")))])])])]),a("br"),t._m(5)])]):t._e()},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticStyle:{"text-align":"center","font-weight":"bold"},attrs:{width:"30%"}},[a("h3",{staticStyle:{margin:"0"}},[t._v("ใบสั่งผลิต/ตรวจสอบโรงงาน 2")]),a("p",{staticStyle:{margin:"7px 0"}},[t._v("บริษัทร่วมสร้างอินเตอร์กรุ๊ปจำกัด")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"main-table",attrs:{width:"100%"}},[a("tr",[a("td",{attrs:{width:"30%"}},[t._v("ผู้จัดทำ: BENCHARAT S.")]),a("td",{attrs:{width:"30%"}},[t._v("ผู้อนุมัติ: ADUL S.")]),a("td",{attrs:{width:"30%"}},[t._v("ฝ่ายผลิต: ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticStyle:{"text-align":"center","font-weight":"bold"}},[a("h3",{staticStyle:{margin:"0"}},[t._v("ใบสั่งผลิต/ตรวจสอบโรงงาน 2")]),a("p",{staticStyle:{margin:"7px 0"}},[t._v("บริษัทร่วมสร้างอินเตอร์กรุ๊ปจำกัด")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"main-table",attrs:{width:"100%"}},[a("tr",[a("td",{attrs:{width:"30%"}},[t._v("ผู้จัดทำ: BENCHARAT S.")]),a("td",{attrs:{width:"30%"}},[t._v("ผู้อนุมัติ: ADUL S.")]),a("td",{attrs:{width:"30%"}},[t._v("QC: ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",{staticStyle:{"text-align":"center","font-weight":"bold"}},[a("h3",{staticStyle:{margin:"0"}},[t._v("ใบสั่งผลิต/ตรวจสอบโรงงาน 2")]),a("p",{staticStyle:{margin:"7px 0"}},[t._v("บริษัทร่วมสร้างอินเตอร์กรุ๊ปจำกัด")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"main-table",attrs:{width:"100%"}},[a("tr",[a("td",{attrs:{width:"30%"}},[t._v("ผู้จัดทำ: BENCHARAT S.")]),a("td",{attrs:{width:"30%"}},[t._v("ผู้อนุมัติ: ADUL S.")]),a("td",{attrs:{width:"30%"}},[t._v("PACKING: ")])])])}],x={props:{dataObj:{type:Object,required:!0}},components:{},name:"reportTemplate",data:function(){return{local:null}},computed:{customer:function(){return this.local.customer},job:function(){return this.local.job},product:function(){return this.local.product},tasks:function(){return this.local.tasks}},created:function(){this.local=this.dataObj},methods:{getHtm:function(){return this.$refs.procuctionReportTemplate},printReceipt:function(){var t=this.getHtm(),e=window.open("","Title","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=950,height=600,top=0,left=0"),a=document.createElement("style");a.type="text/css";var s="@media print {@page { margin: 0; }body { margin: .6cm .6cm; }}";a.styleSheet?a.styleSheet.cssText=s:a.appendChild(document.createTextNode(s)),e.document.getElementsByTagName("head")[0].appendChild(a),e.document.body.innerHTML=t.innerHTML,e.print()},getDataFromConfig:function(t,e){return this.GET_VALUEFROMCONFIG(t,e,this.local.config[e])}},watch:{dataObj:function(){this.local=this.dataObj}}},S=x,w=(a("b422"),Object(h["a"])(S,b,C,!1,null,"1b1c6994",null));w.options.__file="productionReport.vue";var T=w.exports,A={props:{},components:{PageTitle:o["a"],MyModal:r["a"],MyButton:d["a"],MyInput:l["a"],reportTemplate:g,productionReportTemplate:T},name:"ProductEdit",data:function(){return{server:null,local:{viewType:"table",detailObj:[]}}},computed:{product:function(){return this.server.product}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="".concat(u["a"].api.product.index,"/").concat(this.$route.params.key),t.prev=1,t.next=4,p["a"].getResource({resourceName:e,queryString:[]});case 4:a=t.sent,this.server=a.data.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),this.GO_TOPAGE("Product");case 11:case"end":return t.stop()}},t,this,[[1,8]])}));return function(){return t.apply(this,arguments)}}(),submitHandle:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e,a){var s,i,n,c=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:s={},i="".concat(u["a"].api.product.index,"/").concat(this.$route.params.key),t.t0=e,t.next="update"===t.t0?7:"send"===t.t0?17:"delete"===t.t0?17:"detail"===t.t0?25:"report"===t.t0?27:"production-report"===t.t0?29:31;break;case 7:return s=this.server,s.tasks.map(function(t){c.ISROLE(t.order)?t.isMainTask=!0:t.isMainTask=!1}),t.next=11,p["a"].putResource({resourceName:i,data:s});case 11:return n=t.sent,n.data.result.isReview&&this.UPDATE_NOTIFICATION(),this.fetchData(),this.updateProduct(),this.$notify("ทำรายการเสร็จสิ้น","success"),t.abrupt("break",31);case 17:return s={status:e},i="".concat(u["a"].api.product.status,"/").concat(this.$route.params.key),t.next=21,p["a"].putResource({resourceName:i,data:s});case 21:return"send"===e?(this.fetchData(),this.UPDATE_NOTIFICATION()):this.GO_TOPAGE("Product"),this.updateProduct(),this.$notify("ทำรายการเสร็จสิ้น","success"),t.abrupt("break",31);case 25:return this.$refs.myModal.show(),t.abrupt("break",31);case 27:return this.$refs.reportTemplate.printReceipt(),t.abrupt("break",31);case 29:return this.$refs.procuctionReportTemplate.printReceipt(),t.abrupt("break",31);case 31:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),updateProduct:function(){var t={key:"UPDATE_PRODUCT",data:{}};c["bus"].$emit("emitSocket",t)},getDataFromConfig:function(t,e){return this.GET_VALUEFROMCONFIG(t,e,this.server.config[e])}}},E=A,k=(a("b059"),Object(h["a"])(E,s,i,!1,null,"342957f2",null));k.options.__file="update.vue";e["default"]=k.exports},a908:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:t.config.btnClass,on:{click:function(e){t.onClick()}}},[t.config.icon?a("i",{class:t.config.icon,attrs:{"aria-hidden":"true"}}):t._e(),t.config.text?[t._v(t._s(t.config.text))]:t._e()],2)},i=[],n={props:{config:{type:Object,required:!0}},components:{},name:"MyButton",data:function(){return{local:{}}},computed:{},created:function(){},methods:{onClick:function(){var t=this;if(this.config.doConfirm)this.$confirm("ยืนยันการทำรายการ").set("onok",function(){t.submit(!0)}).set("oncancel",function(){t.submit(!1)});else this.submit(!0)},submit:function(t){this.$emit("submit",t)}}},c=n,o=(a("0194"),a("2877")),r=Object(o["a"])(c,s,i,!1,null,"15c70e93",null);r.options.__file="myButton.vue";e["a"]=r.exports},ab7b:function(t,e,a){},aedb:function(t,e,a){},b059:function(t,e,a){"use strict";var s=a("2d72"),i=a.n(s);i.a},b422:function(t,e,a){"use strict";var s=a("03ab"),i=a.n(s);i.a},c359:function(t,e,a){},c414:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["modal modal-md",{active:t.local.isActive}],attrs:{id:"modal-id"}},[a("a",{staticClass:"modal-overlay",attrs:{href:"#close","aria-label":"Close"},on:{click:function(e){t.closeModal()}}}),a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[a("a",{staticClass:"btn btn-clear float-right",attrs:{href:"#close","aria-label":"Close"},on:{click:function(e){t.closeModal()}}}),a("div",{staticClass:"modal-title h5"},[t._t("title")],2)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"content"},[t._t("content")],2)]),a("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])},i=[],n={props:{},components:{},name:"PageName",data:function(){return{local:{isActive:!1}}},computed:{},created:function(){},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{show:function(){this.local.isActive=!0},closeModal:function(){this.local.isActive=!1}}},c=n,o=(a("5877"),a("2877")),r=Object(o["a"])(c,s,i,!1,null,"6e223724",null);r.options.__file="index.vue";e["a"]=r.exports},de69:function(t,e,a){"use strict";var s=a("c359"),i=a.n(s);i.a},deaf:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!==t.config.rules?a("div",["checkbox"===t.config.type?a("input",{directives:[{name:"validate",rawName:"v-validate",value:t.config.rules,expression:"config.rules"},{name:"model",rawName:"v-model",value:t.myValue,expression:"myValue"}],class:t.getInputClass(),attrs:{id:"input_"+t.config.key,name:t.config.key,placeholder:t.config.placeholder,disabled:t.config.isDisable,autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(t.myValue)?t._i(t.myValue,null)>-1:t.myValue},on:{change:function(e){var a=t.myValue,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=null,c=t._i(a,n);s.checked?c<0&&(t.myValue=a.concat([n])):c>-1&&(t.myValue=a.slice(0,c).concat(a.slice(c+1)))}else t.myValue=i}}}):"radio"===t.config.type?a("input",{directives:[{name:"validate",rawName:"v-validate",value:t.config.rules,expression:"config.rules"},{name:"model",rawName:"v-model",value:t.myValue,expression:"myValue"}],class:t.getInputClass(),attrs:{id:"input_"+t.config.key,name:t.config.key,placeholder:t.config.placeholder,disabled:t.config.isDisable,autocomplete:"off",type:"radio"},domProps:{checked:t._q(t.myValue,null)},on:{change:function(e){t.myValue=null}}}):a("input",{directives:[{name:"validate",rawName:"v-validate",value:t.config.rules,expression:"config.rules"},{name:"model",rawName:"v-model",value:t.myValue,expression:"myValue"}],class:t.getInputClass(),attrs:{id:"input_"+t.config.key,name:t.config.key,placeholder:t.config.placeholder,disabled:t.config.isDisable,autocomplete:"off",type:t.config.type},domProps:{value:t.myValue},on:{input:function(e){e.target.composing||(t.myValue=e.target.value)}}}),t.errors.has(t.config.key)?a("p",{staticClass:"form-input-hint"},[t._v("กรุณาตรวจสอบข้อมูลข้างต้น")]):t._e()]):"checkbox"===t.config.type?a("input",{directives:[{name:"validate",rawName:"v-validate",value:t.config.rules,expression:"config.rules"},{name:"model",rawName:"v-model",value:t.myValue,expression:"myValue"}],class:t.getInputClass(),attrs:{id:"input_"+t.config.key,name:t.config.key,placeholder:t.config.placeholder,disabled:t.config.isDisable,autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(t.myValue)?t._i(t.myValue,null)>-1:t.myValue},on:{change:function(e){var a=t.myValue,s=e.target,i=!!s.checked;if(Array.isArray(a)){var n=null,c=t._i(a,n);s.checked?c<0&&(t.myValue=a.concat([n])):c>-1&&(t.myValue=a.slice(0,c).concat(a.slice(c+1)))}else t.myValue=i}}}):"radio"===t.config.type?a("input",{directives:[{name:"validate",rawName:"v-validate",value:t.config.rules,expression:"config.rules"},{name:"model",rawName:"v-model",value:t.myValue,expression:"myValue"}],class:t.getInputClass(),attrs:{id:"input_"+t.config.key,name:t.config.key,placeholder:t.config.placeholder,disabled:t.config.isDisable,autocomplete:"off",type:"radio"},domProps:{checked:t._q(t.myValue,null)},on:{change:function(e){t.myValue=null}}}):a("input",{directives:[{name:"validate",rawName:"v-validate",value:t.config.rules,expression:"config.rules"},{name:"model",rawName:"v-model",value:t.myValue,expression:"myValue"}],class:t.getInputClass(),attrs:{id:"input_"+t.config.key,name:t.config.key,placeholder:t.config.placeholder,disabled:t.config.isDisable,autocomplete:"off",type:t.config.type},domProps:{value:t.myValue},on:{input:function(e){e.target.composing||(t.myValue=e.target.value)}}})},i=[],n={props:{config:{type:Object,required:!0},value:{type:String,required:!1}},components:{},name:"MyInput",data:function(){return{myValue:""}},computed:{},created:function(){this.setData()},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{setData:function(){this.config.validator&&(this.$validator=this.config.validator),this.myValue=this.value},getInputClass:function(){return["form-input",{"is-error":this.errors.has(this.config.key)}]}},watch:{myValue:function(){this.$emit("input",this.myValue)}}},c=n,o=(a("3182"),a("2877")),r=Object(o["a"])(c,s,i,!1,null,"676e9946",null);r.options.__file="myInput.vue";e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-5b7c.ed94ae69.js.map