(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af58"],{"0194":function(e,a,t){"use strict";var n=t("ab7b"),i=t.n(n);i.a},"086f":function(e,a,t){"use strict";var n=t("435f"),i=t.n(n);i.a},2564:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"login-wrapper container"},[t("div",{staticClass:"columns bg-gray"},[t("div",{staticClass:"column col-md-12 col-4 col-mx-auto"},[t("div",{staticClass:"bg-gray docs-block"},[t("div",{staticClass:"card"},[e._m(0),t("div",{staticClass:"card-body"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"usernameInput"}},[e._v("ชื่อผู้ใช้")]),t("my-input",{attrs:{config:{type:"text",key:"username",placeholder:"ชื่อผู้ใช้",rules:"required",validator:e.$validator},value:e.local.username},on:{input:function(a){e.local.username=a}}})],1),t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"passwordInput"}},[e._v("รหัสผ่าน")]),t("my-input",{attrs:{config:{type:"password",key:"password",placeholder:"รหัสผ่าน",rules:"required",validator:e.$validator},value:e.local.password},on:{input:function(a){e.local.password=a}}})],1)]),t("div",{staticClass:"card-footer text-center"},[t("my-button",{attrs:{config:{icon:null,btnClass:"btn btn-dark",doConfirm:!1,text:"เข้าใช้งาน"}},on:{submit:function(a){return e.doLogin(a)}}})],1)])])])])])},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"card-header"},[t("div",{staticClass:"card-title h5 text-center text-dark"},[e._v("เข้าสู่ระบบ")]),t("div",{staticClass:"card-subtitle text-gray text-center"},[e._v("บจก.ร่วมสร้าง")])])}],o=(t("96cf"),t("3040")),s=t("c93e"),c=(t("cadf"),t("551c"),t("097d"),t("2f62")),l=t("9822"),r=t("8671"),u=t("deaf"),d=t("a908"),f=t("0f1e"),m={components:{MyInput:u["a"],MyButton:d["a"]},name:"LoginPage",data:function(){return{local:{username:null,password:null}}},computed:{},created:function(){},methods:Object(s["a"])({},Object(c["b"])(["SET_APP_STORE"]),{doLogin:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(a){var t,n,i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$validator.validate();case 2:if(t=e.sent,!t){e.next=16;break}return n={username:this.local.username,password:this.local.password},i=l["a"].api.login,e.prev=6,e.next=9,r["a"].postResource({data:n,resourceName:i});case 9:o=e.sent,this.setData(o.data),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](6),this.NOTIFY("error","ข้อมูลไม่ถูกต้อง โปรดตรวจสอบ");case 16:case"end":return e.stop()}},e,this,[[6,13]])}));return function(a){return e.apply(this,arguments)}}(),setData:function(e){this.SET_APP_STORE({data:e.appData}),f["a"].SET_STORAGEITEM(l["a"].variable.tokenStorage,e.token),f["a"].SET_STORAGEITEM(l["a"].variable.authStorage,1),this.REDIRECT_TOHOMEPAGE()}})},p=m,v=(t("086f"),t("2877")),g=Object(v["a"])(p,n,i,!1,null,"6bf95725",null);g.options.__file="index.vue";a["default"]=g.exports},3182:function(e,a,t){"use strict";var n=t("3595"),i=t.n(n);i.a},3595:function(e,a,t){},"435f":function(e,a,t){},a908:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("button",{class:e.config.btnClass,on:{click:function(a){e.onClick()}}},[e.config.icon?t("i",{class:e.config.icon,attrs:{"aria-hidden":"true"}}):e._e(),e.config.text?[e._v(e._s(e.config.text))]:e._e()],2)},i=[],o={props:{config:{type:Object,required:!0}},components:{},name:"MyButton",data:function(){return{local:{}}},computed:{},created:function(){},methods:{onClick:function(){var e=this;if(this.config.doConfirm)this.$confirm("ยืนยันการทำรายการ").set("onok",function(){e.submit(!0)}).set("oncancel",function(){e.submit(!1)});else this.submit(!0)},submit:function(e){this.$emit("submit",e)}}},s=o,c=(t("0194"),t("2877")),l=Object(c["a"])(s,n,i,!1,null,"15c70e93",null);l.options.__file="myButton.vue";a["a"]=l.exports},ab7b:function(e,a,t){},deaf:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return null!==e.config.rules?t("div",["checkbox"===e.config.type?t("input",{directives:[{name:"validate",rawName:"v-validate",value:e.config.rules,expression:"config.rules"},{name:"model",rawName:"v-model",value:e.myValue,expression:"myValue"}],class:e.getInputClass(),attrs:{id:"input_"+e.config.key,name:e.config.key,placeholder:e.config.placeholder,disabled:e.config.isDisable,autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(e.myValue)?e._i(e.myValue,null)>-1:e.myValue},on:{change:function(a){var t=e.myValue,n=a.target,i=!!n.checked;if(Array.isArray(t)){var o=null,s=e._i(t,o);n.checked?s<0&&(e.myValue=t.concat([o])):s>-1&&(e.myValue=t.slice(0,s).concat(t.slice(s+1)))}else e.myValue=i}}}):"radio"===e.config.type?t("input",{directives:[{name:"validate",rawName:"v-validate",value:e.config.rules,expression:"config.rules"},{name:"model",rawName:"v-model",value:e.myValue,expression:"myValue"}],class:e.getInputClass(),attrs:{id:"input_"+e.config.key,name:e.config.key,placeholder:e.config.placeholder,disabled:e.config.isDisable,autocomplete:"off",type:"radio"},domProps:{checked:e._q(e.myValue,null)},on:{change:function(a){e.myValue=null}}}):t("input",{directives:[{name:"validate",rawName:"v-validate",value:e.config.rules,expression:"config.rules"},{name:"model",rawName:"v-model",value:e.myValue,expression:"myValue"}],class:e.getInputClass(),attrs:{id:"input_"+e.config.key,name:e.config.key,placeholder:e.config.placeholder,disabled:e.config.isDisable,autocomplete:"off",type:e.config.type},domProps:{value:e.myValue},on:{input:function(a){a.target.composing||(e.myValue=a.target.value)}}}),e.errors.has(e.config.key)?t("p",{staticClass:"form-input-hint"},[e._v("กรุณาตรวจสอบข้อมูลข้างต้น")]):e._e()]):"checkbox"===e.config.type?t("input",{directives:[{name:"validate",rawName:"v-validate",value:e.config.rules,expression:"config.rules"},{name:"model",rawName:"v-model",value:e.myValue,expression:"myValue"}],class:e.getInputClass(),attrs:{id:"input_"+e.config.key,name:e.config.key,placeholder:e.config.placeholder,disabled:e.config.isDisable,autocomplete:"off",type:"checkbox"},domProps:{checked:Array.isArray(e.myValue)?e._i(e.myValue,null)>-1:e.myValue},on:{change:function(a){var t=e.myValue,n=a.target,i=!!n.checked;if(Array.isArray(t)){var o=null,s=e._i(t,o);n.checked?s<0&&(e.myValue=t.concat([o])):s>-1&&(e.myValue=t.slice(0,s).concat(t.slice(s+1)))}else e.myValue=i}}}):"radio"===e.config.type?t("input",{directives:[{name:"validate",rawName:"v-validate",value:e.config.rules,expression:"config.rules"},{name:"model",rawName:"v-model",value:e.myValue,expression:"myValue"}],class:e.getInputClass(),attrs:{id:"input_"+e.config.key,name:e.config.key,placeholder:e.config.placeholder,disabled:e.config.isDisable,autocomplete:"off",type:"radio"},domProps:{checked:e._q(e.myValue,null)},on:{change:function(a){e.myValue=null}}}):t("input",{directives:[{name:"validate",rawName:"v-validate",value:e.config.rules,expression:"config.rules"},{name:"model",rawName:"v-model",value:e.myValue,expression:"myValue"}],class:e.getInputClass(),attrs:{id:"input_"+e.config.key,name:e.config.key,placeholder:e.config.placeholder,disabled:e.config.isDisable,autocomplete:"off",type:e.config.type},domProps:{value:e.myValue},on:{input:function(a){a.target.composing||(e.myValue=a.target.value)}}})},i=[],o={props:{config:{type:Object,required:!0},value:{type:String,required:!1}},components:{},name:"MyInput",data:function(){return{myValue:""}},computed:{},created:function(){this.setData()},beforeMount:function(){},mounted:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{setData:function(){this.config.validator&&(this.$validator=this.config.validator),this.myValue=this.value},getInputClass:function(){return["form-input",{"is-error":this.errors.has(this.config.key)}]}},watch:{myValue:function(){this.$emit("input",this.myValue)}}},s=o,c=(t("3182"),t("2877")),l=Object(c["a"])(s,n,i,!1,null,"676e9946",null);l.options.__file="myInput.vue";a["a"]=l.exports}}]);
//# sourceMappingURL=chunk-af58.c8053cd0.js.map