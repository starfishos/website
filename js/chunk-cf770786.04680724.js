(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf770786"],{"7e20":function(e,a,t){"use strict";t("b9da")},"9a62":function(e,a,t){},adc9:function(e,a,t){"use strict";t("9a62")},b88f:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page"},[t("DaoRule"),t("div",{staticClass:"info-box"},[t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.logo)+" "),t("span",{staticClass:"fu-title important"},[e._v("(100*100)")])]),t("VanUploader",{staticClass:"logo-box",attrs:{multiple:"",accept:"image/jpg, image/jpeg, image/png","max-count":1,"after-read":e.handleUpLogo},model:{value:e.imageList,callback:function(a){e.imageList=a},expression:"imageList"}},[t("div",{staticClass:"upload-icon"},[e._v("+")])])],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.daoName)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.createDao.cn)+")")])]),t("VanField",{staticClass:"input-box",attrs:{"input-align":"center",placeholder:e.createDao.pleaseInput,maxlength:"40"},model:{value:e.params.nameCn,callback:function(a){e.$set(e.params,"nameCn",a)},expression:"params.nameCn"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.daoName)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.createDao.en)+")")])]),t("VanField",{staticClass:"input-box",attrs:{"input-align":"center",placeholder:e.createDao.pleaseInput,maxlength:"40"},model:{value:e.params.nameEn,callback:function(a){e.$set(e.params,"nameEn",a)},expression:"params.nameEn"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.desc)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.createDao.cn)+")")])]),t("VanField",{staticClass:"textarea-box",attrs:{type:"textarea",cols:"10",rows:"5",maxlength:"100","show-word-limit":"",placeholder:e.createDao.pleaseInput},model:{value:e.params.descCn,callback:function(a){e.$set(e.params,"descCn",a)},expression:"params.descCn"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.desc)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.createDao.en)+")")])]),t("VanField",{staticClass:"textarea-box",attrs:{type:"textarea",cols:"10",rows:"5",maxlength:"200","show-word-limit":"",placeholder:e.createDao.pleaseInput},model:{value:e.params.descEn,callback:function(a){e.$set(e.params,"descEn",a)},expression:"params.descEn"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.webSite)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.common.optional)+")")])]),t("VanField",{staticClass:"input-box",attrs:{"input-align":"center",placeholder:e.createDao.pleaseInput,maxlength:"200"},model:{value:e.params.webSite,callback:function(a){e.$set(e.params,"webSite",a)},expression:"params.webSite"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.Twitter)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.common.optional)+")")])]),t("VanField",{staticClass:"input-box",attrs:{"input-align":"center",placeholder:e.createDao.pleaseInput,maxlength:"200"},model:{value:e.params.Twitter,callback:function(a){e.$set(e.params,"Twitter",a)},expression:"params.Twitter"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.Telegram)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.common.optional)+")")])]),t("VanField",{staticClass:"input-box",attrs:{"input-align":"center",placeholder:e.createDao.pleaseInput,maxlength:"200"},model:{value:e.params.Telegram,callback:function(a){e.$set(e.params,"Telegram",a)},expression:"params.Telegram"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.Discord)+" "),t("span",{staticClass:"fu-title"},[e._v(" ("+e._s(e.common.optional)+")")])]),t("VanField",{staticClass:"input-box",attrs:{"input-align":"center",placeholder:e.createDao.pleaseInput,maxlength:"200"},model:{value:e.params.Discord,callback:function(a){e.$set(e.params,"Discord",a)},expression:"params.Discord"}})],1),t("div",{staticClass:"key-value"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.tokenAddress)+" "),t("span",{staticClass:"fu-title"},[e._v("(BEP20)")])]),t("VanField",{staticClass:"input-box input-address",attrs:{"input-align":"center",placeholder:e.createDao.pleaseInput,disabled:""},model:{value:e.tokenAddress,callback:function(a){e.tokenAddress=a},expression:"tokenAddress"}})],1)]),t("div",{staticClass:"token-info"},[t("div",[e._v(" "+e._s(e.createDao.tokenName)+": "),e.loadingTokenName?t("VanLoading",{attrs:{size:"14",color:"#105CFB"}}):t("span",{staticClass:"token-green"},[e._v(e._s(e.tokenName))])],1),t("div",[e._v(" "+e._s(e.createDao.totalSupply)+": "),e.loadingSupply?t("VanLoading",{attrs:{size:"14",color:"#105CFB"}}):t("span",{staticClass:"token-green"},[e._v(e._s(e.$gbUtils.formatNumber(e.totalSupply)))])],1)]),t("div",{staticClass:"lp-info"},[t("div",{staticClass:"key"},[e._v(e._s(e.createDao.isSupportedLp))]),t("div",{staticClass:"btn-groups"},[t("VanButton",{staticClass:"btn",class:{active:e.isSupportLp},attrs:{disabled:""},on:{click:function(a){return e.handleChange(!0)}}},[e._v(" "+e._s(e.createDao.supported)+" ")]),t("VanButton",{staticClass:"btn",class:{active:!e.isSupportLp},attrs:{disabled:""},on:{click:function(a){return e.handleChange(!1)}}},[e._v(" "+e._s(e.createDao.notSupported)+" ")])],1),e.isSupportLp?t("div",{staticClass:"key-valye"},[t("div",{staticClass:"key"},[e._v(" "+e._s(e.createDao.pleaseInput+e.createDao.lpAddress)+" "),t("span",{staticClass:"fu-title"},[e._v("(BEP20)")])]),t("VanField",{staticClass:"input-box lp-address",attrs:{"input-align":"center",placeholder:e.createDao.pleaseInput,maxlength:"200",disabled:""},model:{value:e.lpAddress,callback:function(a){e.lpAddress=a},expression:"lpAddress"}})],1):e._e()]),t("VanButton",{staticClass:"create-btn",attrs:{loading:e.loadingAdd,disabled:!e.params.logo||!e.params.nameCn||!e.params.nameEn||!e.params.descCn||!e.params.descEn},on:{click:e.handleAdd}},[e._v(" "+e._s(e.common.confirm)+" ")])],1)},n=[],i=t("1da1"),r=t("5530"),o=(t("96cf"),t("ac1f"),t("5319"),t("b64b"),t("07ac"),t("fcfc")),l=t("1f5d"),c=t("5bbb4"),p=t("2f62"),u=t("0e5c"),d={name:"",components:{DaoRule:c["a"]},data:function(){return{daoDetail:{},daoAt:"",point:.01,imageList:[],params:{logo:"",nameCn:"",nameEn:"",descCn:"",descEn:"",Twitter:"",Telegram:"",Discord:"",webSite:""},tokenAddress:"",isSupportLp:!0,lpAddress:"",tokenName:"-",loadingTokenName:!1,totalSupply:0,loadingSupply:!1,loadingAdd:!1,hasSupport:!0}},computed:Object(r["a"])(Object(r["a"])({},Object(p["c"])(["myAccount"])),{},{rule:function(){return this.$t("createDao.rule",{point:100*this.point})},createDao:function(){return this.$t("createDao")},common:function(){return this.$t("common")}}),watch:{tokenAddress:function(e){this.getTokenInfo(e)}},methods:{init:function(){var e=localStorage.getItem("daoDetail");if(!e)return this.$router.replace("/my");this.daoDetail=JSON.parse(e),this.formatData()},formatData:function(){this.daoAt=this.daoDetail.daoAt,this.tokenAddress=this.daoDetail.token,this.hasSupport="0x0000000000000000000000000000000000000000"!==this.daoDetail.lp,this.isSupportLp=this.hasSupport,this.lpAddress=this.hasSupport?this.daoDetail.lp:"";var e=Object.keys(this.params),a=this.daoDetail.params;for(var t in a)this.params[e[t]]=a[t];this.imageList.push({url:this.params.logo,isImage:!0})},handleUpLogo:function(e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),a.$emit("changeLoading",!0),t.next=4,Object(u["a"])(e.file);case 4:if(s=t.sent,console.log(s),a.$emit("changeLoading",!1),s.success){t.next=10;break}return a.imageList=[],t.abrupt("return");case 10:a.params.logo=s.result;case 11:case"end":return t.stop()}}),t)})))()},handleChange:function(e){this.isSupportLp=e},getTokenInfo:function(e){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e){t.next=10;break}if(e=e.replace(/\s/g,""),a.isTokenAddress=a.$web3.isAddress(e),a.isTokenAddress){t.next=5;break}return t.abrupt("return");case 5:return a.getTokenName(),t.next=8,a.getTokenSupply();case 8:t.next=12;break;case 10:a.tokenName="-",a.totalSupply=0;case 12:case"end":return t.stop()}}),t)})))()},getTokenName:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loadingTokenName=!0,a.next=3,l["a"].getSymbol(e.tokenAddress);case 3:if(t=a.sent,e.loadingTokenName=!1,t.success){a.next=7;break}return a.abrupt("return");case 7:e.tokenName=t.result;case 8:case"end":return a.stop()}}),a)})))()},getTokenSupply:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.loadingSupply=!0,a.next=3,l["a"].totalSupply(e.tokenAddress);case 3:if(t=a.sent,e.loadingSupply=!1,t.success){a.next=7;break}return a.abrupt("return");case 7:e.totalSupply=t.result;case 8:case"end":return a.stop()}}),a)})))()},handleAdd:function(){if(this.isSupportLp&&!this.lpAddress)return this.$toast(this.createDao.pleaseInput+"lpAddress");if(this.isSupportLp&&!this.$web3.isAddress(this.lpAddress))return this.$toast("地址不正确");if(parseFloat(this.tokenBalance)<this.totalSupply*this.point)return this.$toast(this.common.notBalance);var e=Object.values(this.params),a=this.tokenAddress,t=this.isSupportLp?this.lpAddress:"0x0000000000000000000000000000000000000000";this.addDao(e,a,t)},addDao:function(e,a,t){var s=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s.$web3.connectWallet();case 2:return s.loadingAdd=!0,n.next=5,o["a"].daoEdit(s.daoAt,e,a,t);case 5:if(i=n.sent,s.loadingAdd=!1,i.success){n.next=9;break}return n.abrupt("return",s.$toast("fail"));case 9:s.$router.replace("/my");case 10:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.init()},beforeDestroy:function(){localStorage.removeItem("daoDetail")}},m=d,v=(t("adc9"),t("7e20"),t("2877")),h=Object(v["a"])(m,s,n,!1,null,"0801634c",null);a["default"]=h.exports},b9da:function(e,a,t){}}]);
//# sourceMappingURL=chunk-cf770786.04680724.js.map