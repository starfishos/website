(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34f0bc8a"],{"53ce":function(e,a,t){},"924e":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page"},[t("DaoRule"),t("div",{staticClass:"info-box"},[t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.logo)+" "),t("span",{staticClass:"fu-title important"},[e._v("(100*100)")])]),t("VanUploader",{staticClass:"logo-box",attrs:{multiple:"",accept:"image/jpg, image/jpeg, image/png","max-count":1,"after-read":e.handleUpLogo},model:{value:e.imageList,callback:function(a){e.imageList=a},expression:"imageList"}},[t("div",{staticClass:"upload-icon"},[e._v("+")])]),e._e()],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.daoName)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.createDao.cn)+")")])]),t("VanField",{staticClass:"input-box",attrs:{"input-align":"center",translate:"no",placeholder:e.createDao.pleaseInput,maxlength:"40"},model:{value:e.params.nameCn,callback:function(a){e.$set(e.params,"nameCn",a)},expression:"params.nameCn"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key",attrs:{translate:"no"}},[e._v(" "+e._s(e.createDao.daoName)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.createDao.en)+")")])]),t("VanField",{staticClass:"input-box",attrs:{"input-align":"center",placeholder:e.createDao.pleaseInput,translate:"no",maxlength:"40"},model:{value:e.params.nameEn,callback:function(a){e.$set(e.params,"nameEn",a)},expression:"params.nameEn"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.desc)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.createDao.cn)+")")])]),t("VanField",{staticClass:"textarea-box",attrs:{type:"textarea",cols:"10",rows:"5",maxlength:"100",translate:"no","show-word-limit":"",placeholder:e.createDao.pleaseInput},model:{value:e.params.descCn,callback:function(a){e.$set(e.params,"descCn",a)},expression:"params.descCn"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.desc)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.createDao.en)+")")])]),t("VanField",{staticClass:"textarea-box",attrs:{type:"textarea",cols:"10",rows:"5",maxlength:"200",translate:"no","show-word-limit":"",placeholder:e.createDao.pleaseInput},model:{value:e.params.descEn,callback:function(a){e.$set(e.params,"descEn",a)},expression:"params.descEn"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.webSite)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.common.optional)+")")])]),t("VanField",{staticClass:"input-box",attrs:{translate:"no","input-align":"center",placeholder:e.createDao.pleaseInput,maxlength:"200"},model:{value:e.params.webSite,callback:function(a){e.$set(e.params,"webSite",a)},expression:"params.webSite"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.Twitter)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.common.optional)+")")])]),t("VanField",{staticClass:"input-box",attrs:{translate:"no","input-align":"center",placeholder:e.createDao.pleaseInput,maxlength:"200"},model:{value:e.params.Twitter,callback:function(a){e.$set(e.params,"Twitter",a)},expression:"params.Twitter"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.Telegram)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.common.optional)+")")])]),t("VanField",{staticClass:"input-box",attrs:{translate:"no","input-align":"center",placeholder:e.createDao.pleaseInput,maxlength:"200"},model:{value:e.params.Telegram,callback:function(a){e.$set(e.params,"Telegram",a)},expression:"params.Telegram"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.Discord)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.common.optional)+")")])]),t("VanField",{staticClass:"input-box",attrs:{translate:"no","input-align":"center",placeholder:e.createDao.pleaseInput,maxlength:"200"},model:{value:e.params.Discord,callback:function(a){e.$set(e.params,"Discord",a)},expression:"params.Discord"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.tokenAddress)+" "),t("span",{staticClass:"fu-title"},[e._v("(BEP20)")])]),t("VanField",{staticClass:"input-box input-address",attrs:{translate:"no","input-align":"center",placeholder:e.createDao.pleaseInput},model:{value:e.tokenAddress,callback:function(a){e.tokenAddress=a},expression:"tokenAddress"}}),e.isExit?t("div",{staticClass:"tips"},[e._v(e._s(e.createDao.daoExit))]):e._e()],1)]),t("div",{staticClass:"token-info"},[t("div",[e._v(" "+e._s(e.createDao.tokenName)+": "),e.loadingTokenName?t("VanLoading",{attrs:{size:"14",color:"#105CFB"}}):t("span",{staticClass:"token-green"},[e._v(e._s(e.tokenName))])],1),t("div",[e._v(" "+e._s(e.createDao.totalSupply)+": "),e.loadingSupply?t("VanLoading",{attrs:{size:"14",color:"#105CFB"}}):t("span",{staticClass:"token-green"},[e._v(e._s(e.$gbUtils.formatNumber(e.totalSupply)))])],1)]),t("div",{staticClass:"lp-info"},[t("div",{staticClass:"key"},[e._v(e._s(e.createDao.isSupportedLp))]),t("div",{staticClass:"btn-groups"},[t("VanButton",{staticClass:"btn",class:{active:e.isSupportLp},on:{click:function(a){return e.handleChange(!0)}}},[e._v(" "+e._s(e.createDao.supported)+" ")]),t("VanButton",{staticClass:"btn",class:{active:!e.isSupportLp},on:{click:function(a){return e.handleChange(!1)}}},[e._v(" "+e._s(e.createDao.notSupported)+" ")])],1),e.isSupportLp?t("div",{staticClass:"key-valye"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.pleaseInput+e.createDao.lpAddress)+" "),t("span",{staticClass:"fu-title"},[e._v("(BEP20)")])]),t("VanField",{staticClass:"input-box lp-address",attrs:{translate:"no","input-align":"center",placeholder:e.createDao.pleaseInput,maxlength:"200"},model:{value:e.lpAddress,callback:function(a){e.lpAddress=a},expression:"lpAddress"}})],1):e._e()]),t("div",{staticClass:"token-info"},[t("div",[e._v(" "+e._s(e.createDao.needNum)+": "),e.loadingSupply?t("VanLoading",{attrs:{size:"14",color:"#105CFB"}}):t("span",{staticClass:"token-green"},[e._v(e._s(e.$gbUtils.formatNumber(e.totalSupply*e.point)))])],1),t("div",[e._v(" "+e._s(e.createDao.balance)+": "),e.loadingBalance?t("VanLoading",{attrs:{size:"14",color:"#105CFB"}}):t("span",{staticClass:"token-green"},[e._v(e._s(e.$gbUtils.formatNumber(e.tokenBalance)))])],1)]),t("div",{staticClass:"_flex"},[t("VanButton",{staticClass:"create-btn",attrs:{loading:e.loadingApprove,disabled:!e.isTokenAddress||!e.tokenAddress||e.isExit||e.tokenAuth},on:{click:e.approveToken}},[e._v(" "+e._s(e.common.Apporve)+" ")]),t("VanButton",{staticClass:"create-btn",attrs:{loading:e.loadingAdd,disabled:!e.tokenAuth||!e.params.logo||!e.params.nameCn||!e.params.nameEn||!e.params.descCn||!e.params.descEn||!e.tokenAddress||!e.isTokenAddress||e.isExit},on:{click:e.handleAdd}},[e._v(" "+e._s(e.createDao.createDao)+" ")])],1)],1)},n=[],r=t("c7eb"),i=t("1da1"),o=t("5530"),c=(t("ac1f"),t("5319"),t("07ac"),t("fcfc")),l=t("1f5d"),p=t("5bbb4"),u=t("f645"),d=t("2f62"),v=t("0e5c"),m={name:"",components:{DaoRule:p["a"]},data:function(){return{point:1e-6,imageList:[],params:{logo:"",nameCn:"",nameEn:"",descCn:"",descEn:"",Twitter:"",Telegram:"",Discord:"",webSite:""},tokenAddress:"",isSupportLp:!0,lpAddress:"",tokenName:"-",loadingTokenName:!1,totalSupply:0,loadingSupply:!1,tokenAuth:!1,tokenBalance:0,loadingBalance:!1,loadingApprove:!1,loadingAdd:!1,isExit:!1,isTokenAddress:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(d["c"])(["myAccount"])),{},{rule:function(){return this.$t("createDao.rule",{point:this.$gbUtils.accMul(this.point,100)})},createDao:function(){return this.$t("createDao")},common:function(){return this.$t("common")}}),watch:{tokenAddress:function(e){this.getTokenInfo(e)}},methods:{onOversize:function(e){this.$toast(this.createDao.logoSize)},handleUpLogo:function(e){var a=this;return Object(i["a"])(Object(r["a"])().mark((function t(){var s;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(v["a"])(e.file);case 2:if(s=t.sent,s.success){t.next=6;break}return a.uploadFile=[],t.abrupt("return");case 6:a.params.logo=s.result;case 7:case"end":return t.stop()}}),t)})))()},handleChange:function(e){this.isSupportLp=e},getTokenInfo:function(e){var a=this;return Object(i["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e){t.next=13;break}if(e=e.replace(/\s/g,""),a.isTokenAddress=a.$web3.isAddress(e),a.isTokenAddress){t.next=5;break}return t.abrupt("return");case 5:return a.getDaoExit(),a.getTokenName(),a.getUserBalance(),t.next=10,a.getTokenSupply();case 10:a.getTokenAllance(),t.next=18;break;case 13:a.tokenName="-",a.totalSupply=0,a.tokenBalance=0,a.tokenAuth=!1,a.isExit=!1;case 18:case"end":return t.stop()}}),t)})))()},getDaoExit:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function a(){var t;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,c["a"].daoExist(e.tokenAddress);case 2:if(t=a.sent,t.success){a.next=5;break}return a.abrupt("return");case 5:e.isExit=t.result;case 6:case"end":return a.stop()}}),a)})))()},getTokenName:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function a(){var t;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loadingTokenName=!0,a.next=3,l["a"].getSymbol(e.tokenAddress);case 3:if(t=a.sent,e.loadingTokenName=!1,t.success){a.next=7;break}return a.abrupt("return");case 7:e.tokenName=t.result;case 8:case"end":return a.stop()}}),a)})))()},getTokenSupply:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function a(){var t;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loadingSupply=!0,a.next=3,l["a"].totalSupply(e.tokenAddress);case 3:if(t=a.sent,e.loadingSupply=!1,t.success){a.next=7;break}return a.abrupt("return");case 7:e.totalSupply=t.result;case 8:case"end":return a.stop()}}),a)})))()},getTokenAllance:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function a(){var t,s;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l["a"].allowance(e.tokenAddress,u["a"].daoAddress);case 2:if(t=a.sent,t.success){a.next=5;break}return a.abrupt("return");case 5:s=t.result,e.tokenAuth=s>=e.totalSupply*e.point;case 7:case"end":return a.stop()}}),a)})))()},getUserBalance:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function a(){var t;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loadingBalance=!0,a.next=3,e.$web3.balanceOf(e.tokenAddress);case 3:if(t=a.sent,console.log(t),e.loadingBalance=!1,t.success){a.next=8;break}return a.abrupt("return");case 8:e.tokenBalance=e.$gbUtils.formatBalance(t.result);case 9:case"end":return a.stop()}}),a)})))()},approveToken:function(){var e=this;return Object(i["a"])(Object(r["a"])().mark((function a(){var t;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loadingApprove=!0,a.next=3,l["a"].approve(e.tokenAddress,u["a"].daoAddress);case 3:if(t=a.sent,e.loadingApprove=!1,t.success){a.next=7;break}return a.abrupt("return");case 7:e.tokenAuth=!0;case 8:case"end":return a.stop()}}),a)})))()},handleAdd:function(){if(this.isSupportLp&&!this.lpAddress)return this.$toast(this.createDao.pleaseInput+"lpAddress");if(this.isSupportLp&&!this.$web3.isAddress(this.lpAddress))return this.$toast("error lpAddress");if(parseFloat(this.tokenBalance)<this.totalSupply*this.point)return this.$toast(this.common.notBalance);var e=Object.values(this.params),a=this.tokenAddress,t=this.isSupportLp?this.lpAddress:"0x0000000000000000000000000000000000000000";this.addDao(e,a,t)},addDao:function(e,a,t){var s=this;return Object(i["a"])(Object(r["a"])().mark((function n(){var i;return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s.$web3.connectWallet();case 2:return s.loadingAdd=!0,n.next=5,c["a"].createDao(e,a,t);case 5:if(i=n.sent,s.loadingAdd=!1,i.success){n.next=9;break}return n.abrupt("return",s.$toast("fail"));case 9:s.$router.replace("/dao");case 10:case"end":return n.stop()}}),n)})))()}},mounted:function(){}},k=m,b=(t("b6e4"),t("f0b4"),t("2877")),f=Object(b["a"])(k,s,n,!1,null,"d02f8478",null);a["default"]=f.exports},"96d8":function(e,a,t){},b6e4:function(e,a,t){"use strict";t("53ce")},f0b4:function(e,a,t){"use strict";t("96d8")}}]);
//# sourceMappingURL=chunk-34f0bc8a.79204562.js.map