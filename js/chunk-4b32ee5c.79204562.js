(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b32ee5c"],{"07ac":function(t,a,s){var e=s("23e7"),n=s("6f53").values;e({target:"Object",stat:!0},{values:function(t){return n(t)}})},"6f53":function(t,a,s){var e=s("83ab"),n=s("e330"),i=s("df75"),o=s("fc6a"),r=s("d1e7").f,l=n(r),c=n([].push),p=function(t){return function(a){var s,n=o(a),r=i(n),p=r.length,d=0,m=[];while(p>d)s=r[d++],e&&!l(n,s)||c(m,t?[s,n[s]]:n[s]);return m}};t.exports={entries:p(!0),values:p(!1)}},"6fb1":function(t,a,s){},"85b0":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"form"},[s("div",{staticClass:"info-box"},[s("div",{staticClass:"key-value"},[s("div",{staticClass:"key"},[t._v(" "+t._s(t.proposal.module+t.proposal.name)+" ")]),s("VanField",{staticClass:"input-box",attrs:{translate:"no","input-align":"center",placeholder:t.common.pleaseInput,maxlength:"40"},model:{value:t.params1.name,callback:function(a){t.$set(t.params1,"name",a)},expression:"params1.name"}})],1),s("div",{staticClass:"key-value"},[s("div",{staticClass:"key"},[t._v(" "+t._s(t.proposal.module+t.proposal.content)+" ")]),s("VanField",{staticClass:"textarea-box",attrs:{translate:"no",type:"textarea",cols:"10",rows:"8",maxlength:"1000","show-word-limit":"",placeholder:t.common.pleaseInput},model:{value:t.params1.content,callback:function(a){t.$set(t.params1,"content",a)},expression:"params1.content"}})],1),s("div",{staticClass:"key-value"},[s("div",{staticClass:"key"},[t._v(" "+t._s(t.proposal.module+t.proposal.importantType)+" ")]),s("div",{staticClass:"btn-groups"},t._l(t.typeList,(function(a,e){return s("VanButton",{key:e,staticClass:"btn",class:{active:t.params2.type===t.typeList[e]},on:{click:function(a){return t.handleChange1(t.typeList[e])}}},[t._v(" "+t._s(t.proposal.list1[e])+" ")])})),1)]),s("div",{staticClass:"key-value"},[s("div",{staticClass:"key"},[t._v(" "+t._s(t.proposal.module+t.proposal.tag)+" ")]),s("div",{staticClass:"btn-groups"},t._l(t.typeList,(function(a,e){return s("VanButton",{key:e,staticClass:"btn",class:{active:t.params2.tag===t.typeList[e]},on:{click:function(a){return t.handleChange2(t.typeList[e])}}},[t._v(" "+t._s(t.proposal.list2[e])+" ")])})),1)]),s("div",{staticClass:"key-value"},[s("div",{staticClass:"key"},[t._v(" "+t._s(t.proposal.module+t.proposal.voteReward)+" "),s("span",{staticClass:"fu-title"},[t._v(t._s(t.proposal.voteTip)+"("+t._s(t.tokenInfo.name)+")")])]),s("div",{staticClass:"btn-groups not-justify"},[s("VanButton",{staticClass:"btn",class:{active:t.isReward},attrs:{disabled:t.isEdit},on:{click:function(a){return t.handleChange3(!0)}}},[t._v(" "+t._s(t.common.open)+" ")]),s("VanButton",{staticClass:"btn",class:{active:!t.isReward},attrs:{disabled:t.isEdit},on:{click:function(a){return t.handleChange3(!1)}}},[t._v(" "+t._s(t.common.close)+" ")])],1)]),t.isReward?s("div",{staticClass:"key-value"},[s("div",{staticClass:"key"},[t._v(" "+t._s(t.proposal.rewardTotal)+" ")]),s("VanField",{staticClass:"input-box",attrs:{translate:"no","input-align":"center",placeholder:t.common.pleaseInput,disabled:t.isEdit,maxlength:"40"},model:{value:t.params2.reward,callback:function(a){t.$set(t.params2,"reward",a)},expression:"params2.reward"}}),s("div",{staticClass:"margin-height fu-title"},[t._v(t._s(t.proposal.rewardTip))])],1):t._e(),s("div",{staticClass:"key-value"},[s("div",{staticClass:"key"},[t._v(" "+t._s(t.proposal.voteTime)+" ")]),s("div",{staticClass:"time-wrapper input-box _flex"},[s("i",{staticClass:"iconfont shijian time-icon"}),s("VanButton",{staticClass:"time-box",class:{activeColor:t.startDate},attrs:{disabled:t.isEdit},on:{click:function(){t.startTimeShow=!0}}},[t._v(" "+t._s(t.startDate?t.startDate:t.$t("common.startTime"))+" ")]),s("div",{staticClass:"line"}),s("VanButton",{staticClass:"time-box",class:{activeColor:t.endDate},attrs:{disabled:!t.startDate||t.isEdit},on:{click:function(){t.endTimeShow=!0}}},[t._v(" "+t._s(t.endDate?t.endDate:t.$t("common.endTime"))+" ")])],1),t._e()]),s("div",{staticClass:"key-value"},[s("div",{staticClass:"key"},[t._v(" "+t._s(t.proposal.votingSystem)+" ")]),s("div",{staticClass:"btn-groups not-justify"},[s("VanButton",{staticClass:"btn",class:{active:!t.mutilOption},on:{click:function(a){return t.handleChange4(!1)}}},[t._v(" "+t._s(t.common.single)+" ")]),s("VanButton",{staticClass:"btn",class:{active:t.mutilOption},on:{click:function(a){return t.handleChange4(!0)}}},[t._v(" "+t._s(t.common.multi)+" ")])],1)]),t._l(t.options,(function(a,e){return s("div",{key:e,staticClass:"key-value"},[s("div",{staticClass:"key"},[s("span",[t._v(t._s(t.proposal.option)+t._s(e+1))]),e>=2?s("span",{staticClass:"del-btn",on:{click:function(a){return t.delPlan(e)}}},[t._v(t._s(t.common.delete))]):t._e()]),s("VanField",{staticClass:"input-box",attrs:{translate:"no","input-align":"center",maxlength:"100",placeholder:t.common.pleaseInput},model:{value:t.options[e],callback:function(a){t.$set(t.options,e,a)},expression:"options[index]"}})],1)})),s("VanButton",{staticClass:"add-btn",attrs:{disabled:t.options.length>=10},on:{click:t.handleAddPlan}},[t._v(t._s(t.proposal.addOptions)),s("span",{staticClass:"size-12"},[t._v(t._s(t.proposal.maxOptions))])])],2),t.isCouncil?t._e():s("div",{staticClass:"tips"},[t._v(" "+t._s(t.$t("proposal.needStake"))+" "),s("span",{attrs:{translate:"no"}},[t._v("（"+t._s(t.$gbUtils.formatNumber(t.tokenInfo.totalSupply*t.point))+" "+t._s(t.tokenInfo.name)+"）")]),t._v(t._s(t.$t("proposal.canSubmit"))+" ")]),t.isReward?s("div",{staticClass:"tips"},[t._v(" "+t._s(t.$t("proposal.needPay"))+" "),s("span",{attrs:{translate:"no"}},[t._v(" "+t._s(t.params2.reward)+" "+t._s(t.tokenInfo.name))]),t._v(t._s(t.$t("common.usedFor")+t.$t("proposal.voteReward"))+" ")]):t._e(),s("div",{staticClass:"bottom-class"},[s("div",{staticClass:"_flex"},[s("VanButton",{staticClass:"create-btn",attrs:{loading:t.loadingApprove,disabled:t.tokenAuth},on:{click:t.approveToken}},[t._v(" "+t._s(t.common.Apporve)+" ")]),s("VanButton",{staticClass:"create-btn",attrs:{loading:t.loadingAdd,disabled:!t.tokenAuth||!t.params1.name||!t.params1.content||t.isReward&&t.params2.reward<=0},on:{click:t.handleAdd}},[t._v(" "+t._s(t.isEdit?t.$t("common.confrim"):t.$t("proposal.satkeAndSubmit"))+" ")])],1),s("div",{staticClass:"tips"},[t._v(t._s(t.$t("proposal.endNotice")))])]),s("van-popup",{staticStyle:{"min-width":"320px",width:"95%"},attrs:{round:"",position:"center"},model:{value:t.startTimeShow,callback:function(a){t.startTimeShow=a},expression:"startTimeShow"}},[s("van-datetime-picker",{attrs:{type:"datetime","confirm-button-text":t.$t("common.confirm"),"cancel-button-text":t.$t("common.cancel"),title:t.$t("proposal.startTime"),"min-date":new Date,"max-date":t.startMaxDate,"item-height":"40px"},on:{confirm:t.handleStartTime,cancel:function(){t.startTimeShow=!1}}})],1),s("van-popup",{staticStyle:{"min-width":"370px"},attrs:{round:"",position:"center"},model:{value:t.endTimeShow,callback:function(a){t.endTimeShow=a},expression:"endTimeShow"}},[s("van-datetime-picker",{attrs:{"min-date":t.endMinDate,"max-date":t.endMaxDate,type:"datetime",title:t.$t("proposal.endTime"),"confirm-button-text":t.$t("common.confirm"),"cancel-button-text":t.$t("common.cancel"),"item-height":"40px"},on:{confirm:t.handleEndTime,cancel:function(){t.endTimeShow=!1}}})],1)],1)},n=[],i=(s("b0c0"),s("a434"),s("4de4"),s("d3b7"),s("07ac"),{name:"",props:["isEdit","tokenInfo","isCouncil","tokenAuth","loadingApprove","loadingAdd","dateSource"],data:function(){return{point:1e-6,typeList:[10,20,30],params1:{name:"",content:""},params2:{type:10,tag:10,reward:0,startTime:"",endTime:""},startTimeShow:!1,endTimeShow:!1,startDate:null,endDate:null,startMaxDate:null,endMinDate:null,endMaxDate:null,options:["",""],isReward:!1,mutilOption:!1}},computed:{proposal:function(){return this.$t("proposal")},common:function(){return this.$t("common")}},methods:{init:function(){this.startMaxDate=this.$moment(new Date).add("days",7)._d,this.formatData()},formatData:function(){if(this.dateSource&&this.dateSource.token){var t=this.dateSource;this.params1.name=t.name_desc[0],this.params1.content=t.name_desc[1],this.params2={type:parseInt(t.uintParams[0]),tag:parseInt(t.uintParams[1]),reward:t.uintParams[2],startTime:t.uintParams[3],endTime:t.uintParams[4]},this.mutilOption=t.mutilOption,this.options=t.options||[],this.startDate=this.$moment(1e3*t.uintParams[3]).format("YYYY-MM-DD HH:mm"),this.endDate=this.$moment(1e3*t.uintParams[4]).format("YYYY-MM-DD HH:mm")}},handleAddPlan:function(){this.options.push("")},delPlan:function(t){this.options.splice(t,1)},handleChange1:function(t){this.params2.type=t},handleChange2:function(t){this.params2.tag=t},handleChange3:function(t){this.isReward=t},handleChange4:function(t){this.mutilOption=t},approveToken:function(){this.$emit("approveToken")},handleAdd:function(){var t=this.options.filter((function(t){return""!==t}));if(!this.params2.startTime)return this.$toast(this.common.pleaseInput+this.proposal.startTime);if(!this.params2.endTime)return this.$toast(this.common.pleaseInput+this.proposal.endTime);if(this.isReward&&this.params2.reward<=0)return this.$toast(this.common.pleaseInput+this.proposal.rewardTotal);if(t.length<=1)return this.$toast(this.common.pleaseInput+this.proposal.option);this.isReward||(this.params2.reward=0);var a=Object.values(this.params1),s=Object.values(this.params2);s[2]=this.$web3.toWei(s[2]),this.$emit("addProposal",a,s,this.mutilOption,t)},handleStartTime:function(t){this.startDate=this.$moment(t).format("YYYY-MM-DD HH:mm"),this.params2.startTime=this.dateToMs(t),this.endMinDate=this.$moment(t).add("days",0)._d,console.log("this.endMinDate",this.endMinDate),this.endMaxDate=this.$moment(t).add("days",30)._d,this.params2.endTime&&(this.endDate=this.$moment(t).format("YYYY-MM-DD HH:mm"),this.params2.endTime=this.dateToMs(t)),this.startTimeShow=!1},handleEndTime:function(t){this.params2.endTime=this.dateToMs(t),this.endDate=this.$moment(t).format("YYYY-MM-DD HH:mm"),this.endTimeShow=!1},dateToMs:function(t){var a=new Date(t).getTime()/1e3;return a}},watch:{startDate:function(t){},dateSource:{handler:function(t){this.formatData()},deep:!0}},mounted:function(){this.init()}}),o=i,r=(s("ebb9"),s("e5cf"),s("2877")),l=Object(r["a"])(o,e,n,!1,null,"7e6b8288",null);a["a"]=l.exports},a434:function(t,a,s){"use strict";var e=s("23e7"),n=s("7b0b"),i=s("23cb"),o=s("5926"),r=s("07fa"),l=s("3511"),c=s("65f0"),p=s("8418"),d=s("083a"),m=s("1dde"),u=m("splice"),h=Math.max,v=Math.min;e({target:"Array",proto:!0,forced:!u},{splice:function(t,a){var s,e,m,u,f,_,b=n(this),C=r(b),k=i(t,C),w=arguments.length;for(0===w?s=e=0:1===w?(s=0,e=C-k):(s=w-2,e=v(h(o(a),0),C-k)),l(C+s-e),m=c(b,e),u=0;u<e;u++)f=k+u,f in b&&p(m,u,b[f]);if(m.length=e,s<e){for(u=k;u<C-e;u++)f=u+e,_=u+s,f in b?b[_]=b[f]:d(b,_);for(u=C;u>C-e+s;u--)d(b,u-1)}else if(s>e)for(u=C-e;u>k;u--)f=u+e-1,_=u+s-1,f in b?b[_]=b[f]:d(b,_);for(u=0;u<s;u++)b[u+k]=arguments[u+2];return b.length=C-e+s,m}})},cd35:function(t,a,s){},e5cf:function(t,a,s){"use strict";s("6fb1")},ebb9:function(t,a,s){"use strict";s("cd35")}}]);
//# sourceMappingURL=chunk-4b32ee5c.79204562.js.map