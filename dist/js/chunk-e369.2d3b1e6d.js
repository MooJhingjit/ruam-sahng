(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e369"],{"040d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"p-2"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column text-left"},[a("h5",{staticClass:"text-bold text-primary"},[[t.local.isPause?a("i",{staticClass:"fa fa-play text-gray c-hand",attrs:{"aria-hidden":"true"},on:{click:function(e){t.switchStatus(!1)}}}):a("i",{staticClass:"fa fa-pause text-gray c-hand",attrs:{"aria-hidden":"true"},on:{click:function(e){t.switchStatus(!0)}}})],t._v("\n        "+t._s(t.local.currentPage)+" / "+t._s(t.pageCount)+" จาก "+t._s(t.totalProducts)+" งาน\n      ")],2)]),t._m(0),a("div",{staticClass:"column text-right"},[a("span",{staticClass:"label"},[a("i",{staticClass:"fa fa fa-clock-o h5",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.TASKSTATUS["wait"]))]),a("span",{staticClass:"label"},[a("i",{staticClass:"fa fa-circle-o h5",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.TASKSTATUS["ip"]))]),a("span",{staticClass:"label"},[a("i",{staticClass:"fa fa-check-circle-o h5 text-success"}),t._v(" "+t._s(t.TASKSTATUS["done"]))]),t._v("\n       \n      "),a("i",{staticClass:"fa fa-sign-out text-gray c-hand",attrs:{"aria-hidden":"true"},on:{click:function(e){t.GO_TOPAGE("Product")}}})])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.products,function(e){return a("tr",{key:e._id},t._l(e.tasks,function(s,r){return a("td",{key:r,class:t.getItemClass(e,s)},["itemName"===s.key?[a("div",{staticClass:"text-bold"},[t._v(t._s(e.header.jobCode)+" / "+t._s(e.header.productName))]),a("div",{staticClass:"text-bold"},[t._v(t._s(e.header.cusName))]),a("div",[t._v(t._s(t.GET_DATE(s.dateStart))+" - "+t._s(t.GET_DATE(s.dateEnd)))])]:[s.isDisable?[t._m(2,!0)]:"ip"===s.status?[a("div",[a("i",{class:["fa fa-circle-o h4"],attrs:{"aria-hidden":"true"}})]),a("div",[t._v(t._s(t.GET_DATE(s.dateStart)))]),a("div",[t._v("กำลังดำเนินงาน..")])]:"wait"===s.status?[t._m(3,!0)]:"done"===s.status?[a("div",[a("i",{class:["fa fa-check-circle h4 text-success"],attrs:{"aria-hidden":"true"}})]),a("div",[t._v(t._s(t.GET_DATE(s.dateStart)))]),a("div",[t._v(t._s(t.GET_DATE(s.dateEnd)))])]:t._e()]],2)}))}))])])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column text-center"},[a("h5")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"h5 text-bold text-center text-primary",attrs:{width:""}}),a("th",{staticClass:"h5 text-bold text-center text-primary",attrs:{width:"120"}},[t._v("สเปคงาน")]),a("th",{staticClass:"h5 text-bold text-center text-primary",attrs:{width:"120"}},[t._v("แบบ")]),a("th",{staticClass:"h5 text-bold text-center text-primary",attrs:{width:"120"}},[t._v("ตัด")]),a("th",{staticClass:"h5 text-bold text-center text-primary",attrs:{width:"120"}},[t._v("พันท์")]),a("th",{staticClass:"h5 text-bold text-center text-primary",attrs:{width:"120"}},[t._v("พับ")]),a("th",{staticClass:"h5 text-bold text-center text-primary",attrs:{width:"120"}},[t._v("เชื่อม")]),a("th",{staticClass:"h5 text-bold text-center text-primary",attrs:{width:"120"}},[t._v("พ่นสี")]),a("th",{staticClass:"h5 text-bold text-center text-primary",attrs:{width:"120"}},[t._v("ประกอบ")]),a("th",{staticClass:"h5 text-bold text-center text-primary",attrs:{width:"120"}},[t._v("อุปกรณ์")]),a("th",{staticClass:"h5 text-bold text-center text-primary",attrs:{width:"120"}},[t._v("วายริ่ง")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"fa fa-times-circle-o h1 text-gray",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"fa fa fa-clock-o h1 text-gray",attrs:{"aria-hidden":"true"}})])}],c=(a("96cf"),a("3040")),i=a("56d7"),n=a("9822"),l=a("8671"),o=a("0f1e"),u={props:{},components:{},name:"SchedulePage",data:function(){return{local:{products:[],currentProductObj:[],rows:0,time:0,currentPage:1,timer:null,pageCount:0,isPause:!1},tmp:{productStore:[]}}},computed:{products:function(){return this.local.products},totalProducts:function(){return this.local.currentProductObj.length},pageCount:function(){return Math.ceil(this.totalProducts/this.local.rows)}},created:function(){i["bus"].$on("reloadSchedule",this.fetchData),this.fetchData(!0)},methods:{fetchData:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,a,s,r=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]&&r[0],a="".concat(n["a"].api.schedule.index),t.prev=2,t.next=5,l["a"].getResource({resourceName:a,queryString:[]});case 5:s=t.sent,this.local.rows=s.data.config.rows,this.local.time=parseInt(s.data.config.time),this.tmp.productStore=o["a"].COPY_OBJECT(s.data.result),e&&this.runSchedule(),t.next=14;break;case 12:t.prev=12,t.t0=t["catch"](2);case 14:case"end":return t.stop()}},t,this,[[2,12]])}));return function(){return t.apply(this,arguments)}}(),runSchedule:function(){var t=this;this.recheckProductLists(),this.local.products=this.local.currentProductObj.slice(0,this.local.rows),this.local.timer=setInterval(function(){t.local.isPause||(t.local.currentPage=parseInt(t.local.currentPage)+1,t.pageCount<t.local.currentPage&&(t.local.currentPage=1),1===t.local.currentPage?(t.recheckProductLists(),t.local.start=0):2===t.local.currentPage?t.local.start=t.local.rows:t.local.start=t.local.end,t.local.end=t.local.start+t.local.rows,t.local.products=t.local.currentProductObj.slice(t.local.start,t.local.end))},this.local.time)},recheckProductLists:function(){this.local.currentProductObj=o["a"].COPY_OBJECT(this.tmp.productStore)},addProductEvent:function(){},removeProductEvent:function(){},stopRunnigSchedule:function(){clearInterval(this.local.timer)},getItemClass:function(t,e){return["text-center",{"item-name":"itemName"===e.key},{"bg-success":"itemName"===e.key&&"review"===t.header.status},{"bg-error":"itemName"===e.key&&this.IS_LATE(e.dateEnd)&&"review"!==t.header.status},{"bg-gray":e.isDisable},{"":"wait"===e.status&&!e.isDisable}]},switchStatus:function(t){this.local.isPause=t}},beforeDestroy:function(){i["bus"].$off("reloadSchedule",this.fetchData),this.stopRunnigSchedule()}},d=u,h=(a("a872"),a("2877")),f=Object(h["a"])(d,s,r,!1,null,"dbe60252",null);f.options.__file="index.vue";e["default"]=f.exports},"18e9":function(t,e,a){},a872:function(t,e,a){"use strict";var s=a("18e9"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-e369.2d3b1e6d.js.map