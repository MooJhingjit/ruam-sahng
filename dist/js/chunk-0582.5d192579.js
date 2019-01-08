(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0582"],{"1b67":function(t,e,c){"use strict";c.r(e);var a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return null!==t.server?c("section",{},[c("div",{staticClass:"column col-12 col-xs-12"},[c("div",{staticClass:"card bg-gray"},[c("div",{staticClass:"card-body"},[c("div",{staticClass:"columns"},[c("div",{staticClass:"column col-6 col-sm-12"},[c("div",{staticClass:"form-group"},[c("label",{staticClass:"form-label",attrs:{for:"input-example-1"}},[t._v("เลขที่จ๊อบ")]),c("my-input",{attrs:{config:{type:"text",key:"jobCode",placeholder:"เลขที่",rules:"required",validator:t.$validator},value:t.local.inputs.header.jobCode},on:{input:function(e){t.local.inputs.header.jobCode=e}}})],1)]),c("div",{staticClass:"column col-6 col-sm-12"},[c("div",{staticClass:"form-group"},[c("label",{staticClass:"form-label",attrs:{for:"input-example-1"}},[t._v("ชื่อลูกค้า")]),c("my-input",{attrs:{config:{type:"text",key:"cusName",placeholder:"ชื่อลูกค้า",rules:"required",validator:t.$validator},value:t.local.inputs.header.customer.name},on:{input:function(e){t.local.inputs.header.customer.name=e}}}),c("input",{directives:[{name:"model",rawName:"v-model",value:t.local.inputs.header.customer.id,expression:"local.inputs.header.customer.id"}],attrs:{type:"hidden",name:"cusId"},domProps:{value:t.local.inputs.header.customer.id},on:{input:function(e){e.target.composing||t.$set(t.local.inputs.header.customer,"id",e.target.value)}}})],1)]),c("div",{staticClass:"column col-6 col-sm-12"},[c("div",{staticClass:"form-group"},[c("label",{staticClass:"form-label",attrs:{for:"input-example-1"}},[t._v("วันเริ่มเปิดจ๊อบ")]),c("my-date-picker",{attrs:{config:{key:"dateStart",placeholder:"วันเริ่มเปิดจ๊อบ",rules:"required",validator:t.$validator},value:t.local.inputs.header.createDate},on:{input:function(e){t.local.inputs.header.createDate=e}}})],1)]),c("div",{staticClass:"column col-6 col-sm-12"}),c("div",{staticClass:"column col-12 pt-3"},[c("table",{staticClass:"table table-striped table-hover"},[t._m(0),c("tbody",t._l(t.local.inputs.products,function(e,a){return c("tr",{key:a},[c("td",{staticClass:"text-center"},[c("my-input",{attrs:{config:{type:"text",key:"jobName"+a,placeholder:"ชื่อรายการผลิต",rules:"required",validator:t.$validator},value:e.name},on:{input:function(t){e.name=t}}})],1),c("td",{staticClass:"text-center"},[c("my-input",{attrs:{config:{type:"text",key:"amount"+a,placeholder:"จำนวน",rules:"required",validator:t.$validator},value:e.amount},on:{input:function(t){e.amount=t}}})],1),c("td",{staticClass:"text-center"},[c("my-input",{attrs:{config:{type:"text",key:"thickness"+a,placeholder:"หนา",rules:"required",validator:t.$validator},value:e.thickness},on:{input:function(t){e.thickness=t}}})],1),c("td",{staticClass:"text-center"},[c("my-input",{attrs:{config:{type:"text",key:"note"+a,placeholder:"ระบุหมายเหตุ",rules:""},value:e.note},on:{input:function(t){e.note=t}}})],1),c("td",[e.name?c("i",{class:["fa fa-ellipsis-h h4 p-2 c-hand",{"text-error":t.local.productRequired.indexOf(a)>=0}],attrs:{"aria-hidden":"true"},on:{click:function(e){t.inputProductDetail(a)}}}):t._e()])])}))]),c("div",{staticClass:"text-right"},[t.local.inputs.products.length>1?c("i",{staticClass:"fa fa-minus-circle h4 p-2 c-hand",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editTable("minus")}}}):t._e(),c("i",{staticClass:"fa fa-plus-circle h4 p-2 c-hand",attrs:{"aria-hidden":"true"},on:{click:function(e){t.editTable("add")}}})])]),null!==t.productSelected?[c("div",{staticClass:"column col-12"},[c("h5",[t._v("รายละเอียดการผลิต: "),c("span",{staticClass:"label label-primary"},[t._v(t._s(t.local.inputs.products[t.productSelected].name))])])]),c("div",{staticClass:"column col-6 col-sm-12"},[c("div",{staticClass:"form-group"},[c("div",{staticClass:"form-group"},[c("label",{staticClass:"form-label",attrs:{for:"input-example-1"}},[t._v("กำหนดส่ง")]),c("my-date-picker",{key:"dateEnd_"+t.productSelected,attrs:{config:{key:"dateEnd",placeholder:"กำหนดส่ง",rules:"required",validator:t.$validator},value:t.local.inputs.products[t.productSelected].dateEnd},on:{input:function(e){t.local.inputs.products[t.productSelected].dateEnd=e}}})],1)]),c("div",{staticClass:"form-group"},[c("div",{staticClass:"col-12 col-sm-12"},[c("label",{staticClass:"form-label",attrs:{for:"input-example-4"}},[t._v("\n                    ประเภทตู้\n                    "),t.errors.has("productType")?c("span",{staticClass:"text-error"},[t._v("กรุณาตรวจสอบข้อมูลข้างต้น")]):t._e()])]),c("div",{staticClass:"col-12 col-sm-12  panel p-2"},t._l(t.productType,function(e,a){return c("label",{key:a,staticClass:"form-radio"},[c("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.local.inputs.products[t.productSelected].type,expression:"local.inputs.products[productSelected].type"}],attrs:{type:"radio",name:"productType"},domProps:{value:e.key,checked:t._q(t.local.inputs.products[t.productSelected].type,e.key)},on:{change:[function(c){t.$set(t.local.inputs.products[t.productSelected],"type",e.key)},function(e){t.selectProductType()}]}}),c("i",{staticClass:"form-icon"}),t._v(" "+t._s(e.name)+"\n                  ")])}))]),c("div",{staticClass:"form-group"},[t._m(1),c("div",{staticClass:"col-12 col-sm-12 panel p-2"},t._l(t.productDepartment,function(e,a){return c("label",{key:a,staticClass:"form-checkbox form-inline c-hand"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.local.inputs.products[t.productSelected].departmentSelected,expression:"local.inputs.products[productSelected].departmentSelected"}],attrs:{type:"checkbox"},domProps:{value:e.key,checked:Array.isArray(t.local.inputs.products[t.productSelected].departmentSelected)?t._i(t.local.inputs.products[t.productSelected].departmentSelected,e.key)>-1:t.local.inputs.products[t.productSelected].departmentSelected},on:{change:function(c){var a=t.local.inputs.products[t.productSelected].departmentSelected,o=c.target,s=!!o.checked;if(Array.isArray(a)){var r=e.key,l=t._i(a,r);o.checked?l<0&&t.$set(t.local.inputs.products[t.productSelected],"departmentSelected",a.concat([r])):l>-1&&t.$set(t.local.inputs.products[t.productSelected],"departmentSelected",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.local.inputs.products[t.productSelected],"departmentSelected",s)}}}),c("i",{staticClass:"form-icon"}),t._v(" "+t._s(e.name)+"\n                  ")])}))])]),c("div",{staticClass:"column col-6 col-sm-12"},[c("div",{staticClass:"form-group"},[t._m(2),c("div",{staticClass:"col-12 col-sm-12  panel p-2"},[t._l(t.equipment,function(e,a){return c("label",{key:a,staticClass:"form-radio"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.local.inputs.products[t.productSelected].equipment,expression:"local.inputs.products[productSelected].equipment"}],attrs:{type:"radio"},domProps:{value:e.key,checked:t._q(t.local.inputs.products[t.productSelected].equipment,e.key)},on:{change:function(c){t.$set(t.local.inputs.products[t.productSelected],"equipment",e.key)}}}),c("i",{staticClass:"form-icon"}),t._v(" "+t._s(e.name)+"\n                    ")])}),2===t.local.inputs.products[t.productSelected].equipment?c("my-input",{key:"equipment_"+t.productSelected,attrs:{config:{type:"text",key:"surface",placeholder:"พื้นผิว (สแตนเลส)",rules:"required",validator:t.$validator},value:t.local.inputs.products[t.productSelected].options.surface},on:{input:function(e){t.local.inputs.products[t.productSelected].options.surface=e}}}):t._e()],2)]),c("div",{staticClass:"form-group"},[t._m(3),c("div",{staticClass:"col-12 col-sm-12  panel p-2"},[t._l(t.colortype,function(e,a){return c("label",{key:a,staticClass:"form-radio"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.local.inputs.products[t.productSelected].colorType,expression:"local.inputs.products[productSelected].colorType"}],attrs:{type:"radio"},domProps:{value:e.key,checked:t._q(t.local.inputs.products[t.productSelected].colorType,e.key)},on:{change:function(c){t.$set(t.local.inputs.products[t.productSelected],"colorType",e.key)}}}),c("i",{staticClass:"form-icon"}),t._v(" "+t._s(e.name)+"\n                    ")])}),2===t.local.inputs.products[t.productSelected].colorType?c("my-input",{key:"colorCode_"+t.productSelected,attrs:{config:{type:"text",key:"colorCode",placeholder:"รายการสี (พ่น)",rules:"required",validator:t.$validator},value:t.local.inputs.products[t.productSelected].options.colorName},on:{input:function(e){t.local.inputs.products[t.productSelected].options.colorName=e}}}):t._e()],2)]),c("div",{staticClass:"form-group"},[t._m(4),c("div",{staticClass:"col-12 col-sm-12  panel p-2"},t._l(t.accessory,function(e,a){return c("label",{key:a,staticClass:"form-checkbox form-inline c-hand"},[c("input",{directives:[{name:"model",rawName:"v-model",value:t.local.inputs.products[t.productSelected].accessory,expression:"local.inputs.products[productSelected].accessory"}],attrs:{type:"checkbox"},domProps:{value:e.key,checked:Array.isArray(t.local.inputs.products[t.productSelected].accessory)?t._i(t.local.inputs.products[t.productSelected].accessory,e.key)>-1:t.local.inputs.products[t.productSelected].accessory},on:{change:function(c){var a=t.local.inputs.products[t.productSelected].accessory,o=c.target,s=!!o.checked;if(Array.isArray(a)){var r=e.key,l=t._i(a,r);o.checked?l<0&&t.$set(t.local.inputs.products[t.productSelected],"accessory",a.concat([r])):l>-1&&t.$set(t.local.inputs.products[t.productSelected],"accessory",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.local.inputs.products[t.productSelected],"accessory",s)}}}),c("i",{staticClass:"form-icon"}),t._v(" "+t._s(e.name)+"\n                    ")])}))])])]:t._e()],2)]),c("div",{staticClass:"card-footer"},[c("div",{staticClass:"columns"},[c("div",{staticClass:"column col-12 center text-center"},[c("my-button",{attrs:{config:{icon:"fa fa-check-circle",btnClass:"btn btn-success",doConfirm:!0,text:"บันทึก"}},on:{submit:function(e){return t.submitHandle("save",e)}}})],1)])])])]),c("my-modal",{ref:"myModal"})],1):t._e()},o=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("thead",[c("tr",[c("th",{staticClass:"text-center"},[t._v("รายการผลิต")]),c("th",{staticClass:"text-center",attrs:{width:"100"}},[t._v("จำนวน")]),c("th",{staticClass:"text-center",attrs:{width:"100"}},[t._v("หนา")]),c("th",{staticClass:"text-center"},[t._v("หมายเหตุ")]),c("th",{attrs:{width:"10"}})])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"col-12 col-sm-12"},[c("label",{staticClass:"form-label",attrs:{for:"input-example-4"}},[t._v("แผนก")])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"col-12 col-sm-12"},[c("label",{staticClass:"form-label",attrs:{for:"input-example-4"}},[t._v("วัสดุ")])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"col-12 col-sm-12"},[c("label",{staticClass:"form-label",attrs:{for:"input-example-4"}},[t._v("สี")])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"col-12 col-sm-12"},[c("label",{staticClass:"form-label",attrs:{for:"input-example-4"}},[t._v("อุปกรณ์เสริม")])])}],s=(c("96cf"),c("3040")),r=(c("cadf"),c("551c"),c("097d"),c("56d7")),l=c("7599"),n=c("c414"),i=c("deaf"),u=c("47b0"),d=c("a908"),p=c("0f1e"),m=c("9822"),f=c("8671"),v={props:{},components:{PageTitle:l["a"],MyModal:n["a"],MyInput:i["a"],MyDatePicker:u["a"],MyButton:d["a"]},name:"JobPage",data:function(){return{local:{inputs:{header:{jobCode:null,customer:{id:null,name:null},createDate:null},products:[]},productTemplate:{name:null,amount:null,thickness:null,note:null,dateEnd:null,type:null,departmentSelected:[],equipment:[],colorType:[],accessory:[],options:{}},productSelected:null,productRequired:[]},server:null}},computed:{productType:function(){return this.server.config.productType},productDepartment:function(){return this.server.config.productDepartment},equipment:function(){return this.server.config.equipment},colortype:function(){return this.server.config.colorType},accessory:function(){return this.server.config.accessory},productSelected:function(){return this.local.productSelected},productAll:function(){return this.local.inputs.products}},created:function(){this.ISADMIN?(this.fetchData(),this.editTable("add")):this.GO_TOPAGE("Product")},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{fetchData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=m["a"].api.job.index,t.next=3,f["a"].getResource({resourceName:e,queryString:[]});case 3:c=t.sent,this.server={},this.server.config=c.data.result.config;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),inputProductDetail:function(t){this.local.productSelected=t,this.checkProductData()},editTable:function(t){if("minus"===t)this.updateProduct(),this.local.inputs.products.pop();else{var e=p["a"].COPY_OBJECT(this.local.productTemplate);this.local.inputs.products.push(e)}},selectProductType:function(){var t=this.local.inputs.products[this.productSelected].type,e=this.productDepartment.map(function(t){return t.key});1===t&&(e=e.filter(function(t){return 9!==t&&10!==t})),this.local.inputs.products[this.productSelected].departmentSelected=e},submitHandle:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,c){var a,o,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$validator.validateAll();case 2:if(a=t.sent,o=this.checkProductData(),!(c&&a&&o)){t.next=12;break}return s=m["a"].api.job.index,r={input:this.local.inputs},t.next=9,f["a"].postResource({resourceName:s,data:r});case 9:this.updateProduct(),this.local.productRequired=[],this.$notify("ทำรายการเสร็จสิ้น","success");case 12:case"end":return t.stop()}},t,this)}));return function(e,c){return t.apply(this,arguments)}}(),checkProductData:function(){var t=this;this.local.productRequired=[];var e=!0;return this.local.inputs.products.map(function(c,a){null!==c.dateEnd&&null!==c.type&&0!==c.departmentSelected.length&&(2!==c.colorType||void 0!==c.options.colorName&&""!==c.options.colorName)&&(2!==c.equipment||void 0!==c.options.surface&&""!==c.options.surface)||(e=!1,t.local.productRequired.push(a))}),e},updateProduct:function(){var t={key:"UPDATE_PRODUCT",data:{}};r["bus"].$emit("emitSocket",t)}},watch:{productAll:function(){this.checkProductData()}}},h=v,y=(c("fb0b"),c("2877")),C=Object(y["a"])(h,a,o,!1,null,"ee4e1286",null);C.options.__file="index.vue";e["default"]=C.exports},4004:function(t,e,c){},fb0b:function(t,e,c){"use strict";var a=c("4004"),o=c.n(a);o.a}}]);
//# sourceMappingURL=chunk-0582.5d192579.js.map