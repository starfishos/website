(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b71e4dc"],{4489:function(t,n,e){},5908:function(t,n,e){"use strict";e("715b")},"715b":function(t,n,e){},7646:function(t,n,e){"use strict";e("4489")},"910a":function(t,n,e){t.exports=e.p+"img/connect.295bc875.png"},ae11:function(t,n,e){"use strict";var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"language-wrapper",on:{click:t.changeLanguage}},[e("i",{staticClass:"iconfont lang"}),e("span",{staticClass:"lang-box",attrs:{translate:"no"}},[t._v(t._s(t.langText[t.lang]))])])},a=[],s=e("5530"),o=e("2f62"),i={name:"ChangeLanguage",data:function(){return{langText:{EN:"English",ZH:"繁体中文"}}},computed:Object(s["a"])({},Object(o["c"])(["lang"])),methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])(["changeLang"])),{},{changeLanguage:function(){var t="ZH"===this.lang?"EN":"ZH";this.changeLang(t)}}),mounted:function(){}},r=i,u=(e("5908"),e("2877")),l=Object(u["a"])(r,c,a,!1,null,"1ba3c640",null);n["a"]=l.exports},e620:function(t,n,e){t.exports=e.p+"img/certik.230cf796.png"},ede4:function(t,n,e){"use strict";e.r(n);var c=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"login-page bg-wrapper"},[c("div",{staticClass:"lan-wrapper"},[c("ChangeLanguage")],1),t._m(0),c("VanButton",{staticClass:"click-btn",attrs:{loading:t.btnLoading},on:{click:t.getConnect}},[t._v(t._s(t.common.link))]),c("div",{staticClass:"view-check",on:{click:t.handleToCertik}},[t._v(t._s(t.common.auditReports))]),c("div",{staticClass:"bottom"},[c("p",[t._v(t._s(t.common.auditor))]),c("img",{staticClass:"certik-img",attrs:{src:e("e620")},on:{click:t.handleToCertik}})])],1)},a=[function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"wallet-box"},[c("img",{staticClass:"wallet-img",attrs:{src:e("910a")}}),c("div",{staticClass:"wallet-title"},[t._v("Connect Wallet")])])}],s=e("c7eb"),o=e("1da1"),i=e("5530"),r=(e("ac1f"),e("5319"),e("2f62")),u=e("ae11"),l=e("f645"),g={components:{ChangeLanguage:u["a"]},data:function(){return{btnLoading:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(r["c"])(["myAccount"])),{},{common:function(){return this.$t("common")}}),methods:Object(i["a"])(Object(i["a"])({},Object(r["b"])(["changeAccount"])),{},{listenWallet:function(){var t=this;this.$web3.ethereum.on("accountsChanged",(function(n){console.log("accountsChanged"),t.changeAccount(n[0])})),this.$web3.ethereum.on("disconnect",(function(n){console.log("disconnect"),t.changeAccount()})),this.$web3.ethereum.on("chainChanged",(function(n){console.log(n),n!==l["a"].chainId&&t.changeAccount()}))},getAcount:function(){var t=this;return Object(o["a"])(Object(s["a"])().mark((function n(){var e;return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.btnLoading=!0,n.next=3,t.$web3.connectWallet();case 3:if(e=n.sent,t.btnLoading=!1,e.success){n.next=7;break}return n.abrupt("return",t.$toast(e.message));case 7:t.acount=e.result,t.changeAccount(t.acount);case 9:case"end":return n.stop()}}),n)})))()},getConnect:function(){var t=this;return Object(o["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getAcount();case 2:t.acount&&t.$router.replace("/systerm");case 3:case"end":return n.stop()}}),n)})))()},handleToCertik:function(){window.open("https://www.certik.com/projects/starfish-os")}}),mounted:function(){}},h=g,b=(e("7646"),e("2877")),d=Object(b["a"])(h,c,a,!1,null,"440cea86",null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-6b71e4dc.21056282.js.map