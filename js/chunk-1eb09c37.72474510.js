(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1eb09c37"],{"3a23":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"release-task-wrap"},[e("div",{attrs:{id:"task-name"}},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.taskName")))]),e("van-field",{staticClass:"input",attrs:{placeholder:t.$t("common.limit40"),maxlength:"40",translate:"no"},model:{value:t.dataForm.title,callback:function(a){t.$set(t.dataForm,"title",a)},expression:"dataForm.title"}})],1),e("div",{attrs:{id:"task-detail-des"}},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.taskDes")))]),e("van-field",{staticClass:"input",attrs:{placeholder:t.$t("common.limit1000"),maxlength:"1000",rows:"4",type:"textarea","show-word-limit":"",autosize:"",translate:"no"},model:{value:t.dataForm.content,callback:function(a){t.$set(t.dataForm,"content",a)},expression:"dataForm.content"}})],1),e("div",{attrs:{id:"task-valid"}},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.taskValid")))]),e("div",{staticClass:"time-wrap"},[e("div",{staticClass:"item",on:{click:function(a){return t.handleDaySelect(7)}}},[t._v(" 7"+t._s(t.$t("common.day"))+" "),e("div",{directives:[{name:"show",rawName:"v-show",value:7===t.daySelect,expression:"daySelect === 7"}],staticClass:"select"})]),e("div",{staticClass:"item",on:{click:function(a){return t.handleDaySelect(30)}}},[t._v(" 30"+t._s(t.$t("common.day"))+" "),e("div",{directives:[{name:"show",rawName:"v-show",value:30===t.daySelect,expression:"daySelect === 30"}],staticClass:"select"})]),e("div",{staticClass:"item",on:{click:function(a){return t.handleDaySelect(365)}}},[t._v(" 365"+t._s(t.$t("common.day"))+" "),e("div",{directives:[{name:"show",rawName:"v-show",value:365===t.daySelect,expression:"daySelect === 365"}],staticClass:"select"})])])]),e("div",{attrs:{id:"task-button"}},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.buttonSetting")))]),e("div",{staticClass:"button-box"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.buttonName")))]),e("van-field",{staticClass:"input",attrs:{placeholder:t.$t("common.limit8"),maxlength:"8",translate:"no"},model:{value:t.dataForm.buttonName,callback:function(a){t.$set(t.dataForm,"buttonName",a)},expression:"dataForm.buttonName"}})],1),e("div",{staticClass:"button-box"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.buttonLink")))]),e("van-field",{staticClass:"input",attrs:{placeholder:t.$t("admin.inputLink"),translate:"no"},model:{value:t.dataForm.url,callback:function(a){t.$set(t.dataForm,"url",a)},expression:"dataForm.url"}})],1)]),e("div",{attrs:{id:"audit-time"}},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.timeSetting")))]),e("div",{staticClass:"time-wrap"},[e("div",{staticClass:"item",on:{click:function(a){return t.handleAuditSelect(1)}}},[t._v(" 1"+t._s(t.$t("common.hour"))+" "),e("div",{directives:[{name:"show",rawName:"v-show",value:1===t.auditSelect,expression:"auditSelect === 1"}],staticClass:"select"})]),e("div",{staticClass:"item",on:{click:function(a){return t.handleAuditSelect(6)}}},[t._v(" 6"+t._s(t.$t("common.hour"))+" "),e("div",{directives:[{name:"show",rawName:"v-show",value:6===t.auditSelect,expression:"auditSelect === 6"}],staticClass:"select"})]),e("div",{staticClass:"item",on:{click:function(a){return t.handleAuditSelect(12)}}},[t._v(" 12"+t._s(t.$t("common.hour"))+" "),e("div",{directives:[{name:"show",rawName:"v-show",value:12===t.auditSelect,expression:"auditSelect === 12"}],staticClass:"select"})]),e("div",{staticClass:"item",on:{click:function(a){return t.handleAuditSelect(24)}}},[t._v(" 24"+t._s(t.$t("common.hour"))+" "),e("div",{directives:[{name:"show",rawName:"v-show",value:24===t.auditSelect,expression:"auditSelect === 24"}],staticClass:"select"})])])]),e("div",{attrs:{id:"reward-wrap"}},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.rewardSet")))]),e("div",{staticClass:"button-box"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.tokenType")))]),e("van-dropdown-menu",{attrs:{"active-color":"#000"}},[e("van-dropdown-item",{attrs:{options:t.tokenList},model:{value:t.dataForm.tokenType,callback:function(a){t.$set(t.dataForm,"tokenType",a)},expression:"dataForm.tokenType"}})],1)],1),e("div",{staticClass:"notice"},[t._v(t._s(t.$t("admin.taskNotice")))]),e("div",{staticClass:"button-box"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.taskNumber")))]),e("van-field",{staticClass:"input",attrs:{type:"digit",translate:"no"},model:{value:t.dataForm.times,callback:function(a){t.$set(t.dataForm,"times",a)},expression:"dataForm.times"}})],1),e("div",{staticClass:"button-box"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.numberReward")))]),e("van-field",{staticClass:"input",attrs:{type:"number",translate:"no"},model:{value:t.dataForm.award,callback:function(a){t.$set(t.dataForm,"award",a)},expression:"dataForm.award"}})],1)]),e("div",{staticClass:"button",on:{click:t.handleConfirm}},[t._v(t._s(t.$t("admin.release")))])])},i=[],s=e("1da1"),r=(e("96cf"),e("d81d"),e("a03d")),o=e("cb78"),c={name:"",data:function(){return{tokenList:[],daySelect:7,auditSelect:1,dataForm:{title:"",content:"",taskDuration:10080,buttonName:"",url:"",reviewTime:60,tokenType:null,times:null,award:null}}},methods:{handleDaySelect:function(t){this.daySelect=t,this.dataForm.taskDuration=24*t*60},handleAuditSelect:function(t){this.auditSelect=t,this.dataForm.reviewTime=60*t},getTokenList:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(r["a"])();case 2:e=a.sent,t.dataForm.tokenType=e.data.supportTokenList[0].tokenType,t.tokenList=e.data.supportTokenList.map((function(t){return{value:t.tokenType,text:t.tokenName}}));case 5:case"end":return a.stop()}}),a)})))()},handleConfirm:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.dataForm.title&&t.dataForm.content&&t.dataForm.buttonName&&t.dataForm.url&&t.dataForm.times&&t.dataForm.award){a.next=2;break}return a.abrupt("return",t.$toast(t.$t("common.fill")));case 2:return a.next=4,Object(o["a"])(t.dataForm);case 4:if(e=a.sent,console.log(e),e.success){a.next=8;break}return a.abrupt("return");case 8:t.$gbUtils.handleToPage("/agency");case 9:case"end":return a.stop()}}),a)})))()}},computed:{totalAward:function(){return this.dataForm.times*this.dataForm.award}},mounted:function(){this.getTokenList()}},d=c,l=(e("fe03"),e("2877")),u=Object(l["a"])(d,n,i,!1,null,"3a523413",null);a["default"]=u.exports},"53fc":function(t,a,e){},a03d:function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return s}));var n=e("b775"),i=function(t){return Object(n["a"])("GET","/dapp/mining/index",t,!0,!0,1)},s=function(t){return Object(n["a"])("GET","/dapp/mining/list",t)}},cb78:function(t,a,e){"use strict";e.d(a,"c",(function(){return i})),e.d(a,"b",(function(){return s})),e.d(a,"e",(function(){return r})),e.d(a,"f",(function(){return o})),e.d(a,"h",(function(){return c})),e.d(a,"a",(function(){return d})),e.d(a,"g",(function(){return l})),e.d(a,"i",(function(){return u})),e.d(a,"d",(function(){return m}));var n=e("b775"),i=function(t){return Object(n["a"])("GET","/dapp/task/getTaskAdminIndex",t,!0,!0)},s=function(t){return Object(n["a"])("GET","/dapp/task/adminList",t)},r=function(t){return Object(n["a"])("GET","/dapp/task/list",t,!0,!0)},o=function(t){return Object(n["a"])("GET","/dapp/taskLog/list",t,!0,!0)},c=function(t){return Object(n["a"])("GET","/dapp/task/".concat(t),!0,!0,1)},d=function(t){return Object(n["a"])("POST","/dapp/task",t)},l=function(t){return Object(n["a"])("GET","/dapp/taskLog/pendingReview",t,!0,!0)},u=function(t){return Object(n["a"])("POST","/dapp/taskLog",t,!0,!0)},m=function(t){return Object(n["a"])("POST","/dapp/taskLog/audit",t,!0,!0)}},d81d:function(t,a,e){"use strict";var n=e("23e7"),i=e("b727").map,s=e("1dde"),r=s("map");n({target:"Array",proto:!0,forced:!r},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},fe03:function(t,a,e){"use strict";e("53fc")}}]);
//# sourceMappingURL=chunk-1eb09c37.72474510.js.map