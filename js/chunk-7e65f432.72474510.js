(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e65f432"],{"0e06":function(t,a,e){},"3da1":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"agency-wrap"},[e("AgencyHeader"),e("div",{attrs:{id:"content"}},[e("div",{staticClass:"name"},[e("span",[t._v(t._s(t.$t("admin.taskAdmin")))]),e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:function(a){return t.$gbUtils.handleToPage("/releaseTask")}}},[e("use",{attrs:{"xlink:href":"#fabu"}})])]),t.taskList.length>0?t._l(t.taskList,(function(a){return e("TaskItem",{key:a.id,attrs:{dataSource:a},on:{show:t.handleShowDetail}})})):e("div",{staticClass:"no-data"},[t._v(t._s(t.$t("common.noData")))]),t.detailShow?e("TaskDetailPop",{attrs:{tempData:t.tempData},on:{close:t.handleShowDetail}}):t._e()],2)],1)},n=[],i=e("1da1"),r=(e("96cf"),e("cb78")),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("VanPopup",{staticStyle:{"box-sizing":"border-box",width:"93%","background-color":"#1f1c1d",padding:"5px","border-radius":"10px"},on:{"click-overlay":t.closePop},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"header"},[e("div",{staticClass:"name"},[t._v(t._s(t.taskDetail.title))]),e("div",{staticClass:"reward"},[t._v(" "+t._s(t.$t("admin.take"))),e("span",[t._v(t._s(+t.taskDetail.times*+t.taskDetail.award||0))]),t._v(" SFO ")])]),e("div",{staticClass:"content"},[e("div",{staticClass:"detail"},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.detail"))+" :")]),e("div",{staticClass:"text"},[t._v(t._s(t.taskDetail.content||0))])]),e("div",{staticClass:"key-value"},[e("div",{staticClass:"key"},[t._v(t._s(t.$t("admin.reward")))]),e("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(" "+t._s(t.taskDetail.times*t.taskDetail.award)+" "+t._s(t.tokenList[t.taskDetail.tokenType]||"")+" ")])]),e("div",{staticClass:"key-value"},[e("div",{staticClass:"key"},[t._v(t._s(t.$t("admin.number")))]),e("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(" "+t._s(t.taskDetail.times||0)+t._s(t.$t("common.servings"))+" ")])]),e("div",{staticClass:"key-value"},[e("div",{staticClass:"key"},[t._v(t._s(t.$t("admin.validTime")))]),e("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(" "+t._s(t.taskDetail.taskDuration/60/24)+t._s(t.$t("common.day"))+" ")])]),e("div",{staticClass:"key-value"},[e("div",{staticClass:"key"},[t._v(t._s(t.$t("admin.peddingReview")))]),e("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(" "+t._s(t.taskDetail.reviewing||0)+t._s(t.$t("common.servings"))+" ")])]),e("div",{staticClass:"key-value"},[e("div",{staticClass:"key"},[t._v(t._s(t.$t("admin.rejected")))]),e("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(" "+t._s(t.taskDetail.rejected||0)+t._s(t.$t("common.servings"))+" ")])]),e("div",{staticClass:"key-value"},[e("div",{staticClass:"key"},[t._v(t._s(t.$t("admin.passed")))]),e("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(" "+t._s(t.taskDetail.passed||0)+t._s(t.$t("common.servings"))+" ")])])]),e("div",{staticClass:"button-group"},[e("div",{staticClass:"button-item",on:{click:t.handleToReviewList}},[t._v(" "+t._s(t.$t("admin.goReview"))+" ")])])])])},o=[],l={props:["tempData"],name:"",data:function(){return{show:!0,taskDetail:{},tokenList:[]}},methods:{closePop:function(){this.$emit("close")},getDetail:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(r["h"])(t.tempData.id);case 2:if(e=a.sent,e.success){a.next=5;break}return a.abrupt("return");case 5:t.taskDetail=e.data;case 6:case"end":return a.stop()}}),a)})))()},handleToReviewList:function(){console.log("this.tempData.taskID",this.tempData),this.$router.push("/ReviewList?taskId=".concat(this.tempData.id))}},mounted:function(){this.getDetail(),this.tokenList=JSON.parse(localStorage.getItem("tokenList"))}},u=l,d=(e("7d00"),e("2877")),m=Object(d["a"])(u,c,o,!1,null,"2e315e06",null),v=m.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"header"}},[e("div",{staticClass:"title"},[e("div",{staticClass:"info"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.myInfo.logo||t.defaultImg,alt:""}})]),e("div",{staticClass:"name"},[t._v(t._s(t.myInfo.nickname))])]),e("div",{staticClass:"modify",on:{click:t.handleNameShow}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#a-shuxiebianxie1"}})]),0===t.myInfo.nicknameReviewStatus?e("span",[t._v(t._s(t.$t("admin.peddingReview")))]):t._e()])]),e("div",{staticClass:"data"},[e("div",{staticClass:"data-item"},[e("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(t._s(t.myInfo.taskNumber||0))]),e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.taskCount")))])]),e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#star2"}})]),e("div",{staticClass:"data-item"},[e("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(t._s(t.myInfo.completed||0))]),e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.finishCount")))])]),e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#star2"}})]),e("div",{staticClass:"data-item"},[e("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(t._s(t.myInfo.clickNumber||0))]),e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.clickCount")))])])]),t.nameShow?e("NamePop",{on:{close:t.handleNameShow}}):t._e()],1)},p=[],h=e("74c2"),_={name:"",data:function(){return{nameShow:!1,myInfo:{},defaultImg:e("cf05")}},methods:{handleNameShow:function(){this.nameShow=!this.nameShow},getInfo:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(r["c"])();case 2:if(e=a.sent,console.log("resp",e),e.success){a.next=6;break}return a.abrupt("return");case 6:t.myInfo=e.data;case 7:case"end":return a.stop()}}),a)})))()}},mounted:function(){this.getInfo()},components:{NamePop:h["a"]}},k=_,C=(e("fbae"),Object(d["a"])(k,f,p,!1,null,"754dec14",null)),b=C.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"task-item-wrap"},[e("div",{staticClass:"header-wrap"},[0===t.dataSource.status?e("div",{staticClass:"status1"},[t._v(" "+t._s(t.$t("admin.reviewing"))+" ")]):t._e(),2===t.dataSource.status?e("div",{staticClass:"status2"},[t._v(" "+t._s(t.$t("admin.reviewFail"))+" ")]):t._e(),3===t.dataSource.status?e("div",{staticClass:"status2"},[t._v(" "+t._s(t.$t("admin.refunded"))+" ")]):t._e(),e("div",{staticClass:"header"},[e("div",{staticClass:"task"},[e("div",{staticClass:"name"},[t._v(t._s(t.dataSource.title))])]),e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#xingxingbeifen"}})]),e("div",{staticClass:"time"},[e("div",{staticClass:"des"},[t._v(t._s(t.$t("admin.validTime")))]),e("div",{staticClass:"time",attrs:{translate:"no"}},[t._v(" "+t._s(t.dataSource.taskDuration/60/24)+t._s(t.$t("common.day"))+" ")])])])]),e("div",{staticClass:"content",attrs:{translate:"no"}},[e("div",{staticClass:"reward"},[t._v(" "+t._s(t.$t("admin.reward"))+" "),e("span",[t._v(t._s(parseInt(t.dataSource.award))+" "+t._s(t.tokenName))])]),e("div",{staticClass:"copies"},[t._v(" "+t._s(t.$t("admin.number"))+" "),e("span",[t._v(t._s(t.dataSource.times-t.dataSource.completionsTimes)+"/"+t._s(t.dataSource.times))])]),e("div",{staticClass:"button",on:{click:t.handleShowDetail}},[t._v(" "+t._s(t.$t("admin.detail"))+" ")])])])},w=[],x={name:"",props:["dataSource"],data:function(){return{tokenName:""}},methods:{handleShowDetail:function(){this.$emit("show",this.dataSource)}},mounted:function(){this.tokenName=JSON.parse(localStorage.getItem("tokenList"))[this.dataSource.tokenType]}},$=x,S=(e("eed2"),Object(d["a"])($,g,w,!1,null,"5ddb1aec",null)),y=S.exports,D={name:"",data:function(){return{detailShow:!1,taskList:[],tempData:{}}},methods:{handleShowDetail:function(t){this.detailShow=!this.detailShow,this.tempData=t},getList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(r["b"])({orderByColumn:"id",isAsc:"desc"});case 2:if(e=a.sent,e.success){a.next=5;break}return a.abrupt("return");case 5:t.taskList=e.rows,console.log("resp",e);case 7:case"end":return a.stop()}}),a)})))()}},mounted:function(){this.getList()},components:{AgencyHeader:b,TaskItem:y,TaskDetailPop:v}},O=D,j=(e("5910"),Object(d["a"])(O,s,n,!1,null,"484908fe",null));a["default"]=j.exports},"3dc1":function(t,a,e){},5910:function(t,a,e){"use strict";e("cc84")},"705c":function(t,a,e){"use strict";e("dc49")},"74c2":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CommomPop",{on:{close:t.closePop}},[e("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.modifyInfo")))]),e("div",{staticClass:"set-image"},[e("van-uploader",{attrs:{"after-read":t.afterRead},model:{value:t.fileList,callback:function(a){t.fileList=a},expression:"fileList"}},[e("div",{staticClass:"upload"},[e("van-icon",{attrs:{name:"plus",size:"25"}})],1)])],1),e("div",{staticClass:"input-wrap"},[e("van-field",{staticClass:"input",attrs:{translate:"no",placeholder:t.$t("common.inputName"),"input-align":"center"},model:{value:t.nickname,callback:function(a){t.nickname=a},expression:"nickname"}})],1),e("div",{staticClass:"button-group"},[e("div",{staticClass:"button-item",on:{click:t.handleConfirm}},[t._v(" "+t._s(t.$t("common.confirm"))+" ")])])])},n=[],i=e("1da1"),r=(e("96cf"),e("93d6")),c=e("9598"),o=e("f645"),l=e("a261"),u={name:"",data:function(){return{nickname:"",logo:"",fileList:[]}},methods:{closePop:function(){this.$emit("close")},afterRead:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=new FormData,s.append("file",t.file),e.next=4,Object(l["a"])(s);case 4:if(n=e.sent,n.success){e.next=8;break}return a.fileList=[],e.abrupt("return");case 8:a.logo=o["a"].imgUrl+n.data.url;case 9:case"end":return e.stop()}}),e)})))()},handleConfirm:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.nickname&&t.logo){a.next=2;break}return a.abrupt("return",t.$toast(t.$t("common.fill")));case 2:return a.next=4,Object(r["c"])({nickname:t.nickname,logo:t.logo});case 4:if(e=a.sent,e.success){a.next=7;break}return a.abrupt("return");case 7:t.$parent.getInfo(),t.closePop();case 9:case"end":return a.stop()}}),a)})))()}},mounted:function(){},components:{CommomPop:c["a"]}},d=u,m=(e("f969"),e("2877")),v=Object(m["a"])(d,s,n,!1,null,"891a0bac",null);a["a"]=v.exports},"7d00":function(t,a,e){"use strict";e("c4ba")},9598:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("VanPopup",{staticStyle:{"box-sizing":"border-box",width:"93%","max-width":"400px","background-color":"#352b27",padding:"15px 20px"},attrs:{round:""},on:{"click-overlay":t.closePop},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"window"},[t.closeIcon?e("div",{staticClass:"icon-wrapper"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:function(a){return a.stopPropagation(),t.closePop.apply(null,arguments)}}},[e("use",{attrs:{"xlink:href":"#guanbixiao"}})])]):t._e(),t._t("default")],2)])])},n=[],i={name:"",props:{closeIcon:{type:Boolean,default:!0}},data:function(){return{show:!0}},methods:{closePop:function(){this.$emit("close")},handleConfirm:function(){this.$emit("close")}},mounted:function(){}},r=i,c=(e("705c"),e("2877")),o=Object(c["a"])(r,s,n,!1,null,"5728e034",null);a["a"]=o.exports},a261:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));var s=e("b775"),n=function(t){return Object(s["a"])("POST","/dapp/oss/upload",t,!0,!0)}},baae:function(t,a,e){},c4ba:function(t,a,e){},cb78:function(t,a,e){"use strict";e.d(a,"c",(function(){return n})),e.d(a,"b",(function(){return i})),e.d(a,"e",(function(){return r})),e.d(a,"f",(function(){return c})),e.d(a,"h",(function(){return o})),e.d(a,"a",(function(){return l})),e.d(a,"g",(function(){return u})),e.d(a,"i",(function(){return d})),e.d(a,"d",(function(){return m}));var s=e("b775"),n=function(t){return Object(s["a"])("GET","/dapp/task/getTaskAdminIndex",t,!0,!0)},i=function(t){return Object(s["a"])("GET","/dapp/task/adminList",t)},r=function(t){return Object(s["a"])("GET","/dapp/task/list",t,!0,!0)},c=function(t){return Object(s["a"])("GET","/dapp/taskLog/list",t,!0,!0)},o=function(t){return Object(s["a"])("GET","/dapp/task/".concat(t),!0,!0,1)},l=function(t){return Object(s["a"])("POST","/dapp/task",t)},u=function(t){return Object(s["a"])("GET","/dapp/taskLog/pendingReview",t,!0,!0)},d=function(t){return Object(s["a"])("POST","/dapp/taskLog",t,!0,!0)},m=function(t){return Object(s["a"])("POST","/dapp/taskLog/audit",t,!0,!0)}},cc84:function(t,a,e){},cf05:function(t,a,e){t.exports=e.p+"img/logo.094ab691.png"},dc49:function(t,a,e){},eed2:function(t,a,e){"use strict";e("baae")},f969:function(t,a,e){"use strict";e("3dc1")},fbae:function(t,a,e){"use strict";e("0e06")}}]);
//# sourceMappingURL=chunk-7e65f432.72474510.js.map