(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b6bfa8c"],{2909:function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function s(t){if(Array.isArray(t))return n(t)}a.d(e,"a",(function(){return c}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}a("fb6a"),a("b0c0"),a("ac1f"),a("00b4");function i(t,e){if(t){if("string"===typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(t,e):void 0}}a("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return s(t)||r(t)||i(t)||o()}},"40f9":function(t,e,a){},"4df4":function(t,e,a){"use strict";var n=a("da84"),s=a("0366"),r=a("c65b"),i=a("7b0b"),o=a("9bdd"),c=a("e95a"),u=a("68ee"),l=a("07fa"),d=a("8418"),p=a("9a1f"),m=a("35a1"),h=n.Array;t.exports=function(t){var e=i(t),a=u(this),n=arguments.length,f=n>1?arguments[1]:void 0,v=void 0!==f;v&&(f=s(f,n>2?arguments[2]:void 0));var g,b,y,w,k,L,S=m(e),_=0;if(!S||this==h&&c(S))for(g=l(e),b=a?new this(g):h(g);g>_;_++)L=v?f(e[_],_):e[_],d(b,_,L);else for(w=p(e,S),k=w.next,b=a?new this:[];!(y=r(k,w)).done;_++)L=v?o(w,f,[y.value,_],!0):y.value,d(b,_,L);return b.length=_,b}},5244:function(t,e,a){"use strict";a("80f2")},"58fd":function(t,e,a){"use strict";a("6bd2")},"5bbb4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("div",{staticClass:"iconfont tongzhi"}),a("div",{staticClass:"notic-content"},["1"===t.type?a("div",{domProps:{innerHTML:t._s(t.applyRule)}}):a("div",{domProps:{innerHTML:t._s(t.rule)}})])])},s=[],r={name:"",props:["type"],data:function(){return{point:.01}},computed:{rule:function(){return this.$t("createDao.rule",{point:100*this.point})},applyRule:function(){return this.$t("my.rule",{point:100*this.point})}},methods:{},mounted:function(){}},i=r,o=(a("6c26"),a("58fd"),a("2877")),c=Object(o["a"])(i,n,s,!1,null,"52a65b12",null);e["a"]=c.exports},"6a43":function(t,e,a){"use strict";a("40f9")},"6bd2":function(t,e,a){},"6c26":function(t,e,a){"use strict";a("ca39")},"80f2":function(t,e,a){},"873b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"empty-page"},[t._m(0),t._t("default")],2)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("img",{staticClass:"img",attrs:{src:a("9d64")}})])}],r={name:"",data:function(){return{}},methods:{},mounted:function(){}},i=r,o=(a("f546"),a("2877")),c=Object(o["a"])(i,n,s,!1,null,"6a3dc824",null);e["a"]=c.exports},"9bdd":function(t,e,a){var n=a("825a"),s=a("2a62");t.exports=function(t,e,a,r){try{return r?e(n(a)[0],a[1]):e(a)}catch(i){s(t,"throw",i)}}},a434:function(t,e,a){"use strict";var n=a("23e7"),s=a("da84"),r=a("23cb"),i=a("5926"),o=a("07fa"),c=a("7b0b"),u=a("65f0"),l=a("8418"),d=a("1dde"),p=d("splice"),m=s.TypeError,h=Math.max,f=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p},{splice:function(t,e){var a,n,s,d,p,b,y=c(this),w=o(y),k=r(t,w),L=arguments.length;if(0===L?a=n=0:1===L?(a=0,n=w-k):(a=L-2,n=f(h(i(e),0),w-k)),w+a-n>v)throw m(g);for(s=u(y,n),d=0;d<n;d++)p=k+d,p in y&&l(s,d,y[p]);if(s.length=n,a<n){for(d=k;d<w-n;d++)p=d+n,b=d+a,p in y?y[b]=y[p]:delete y[b];for(d=w;d>w-n+a;d--)delete y[d-1]}else if(a>n)for(d=w-n;d>k;d--)p=d+n-1,b=d+a-1,p in y?y[b]=y[p]:delete y[b];for(d=0;d<a;d++)y[d+k]=arguments[d+2];return y.length=w-n+a,s}})},a630:function(t,e,a){var n=a("23e7"),s=a("4df4"),r=a("1c7e"),i=!r((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:s})},ab36:function(t,e,a){var n=a("861d"),s=a("9112");t.exports=function(t,e){n(e)&&"cause"in e&&s(t,"cause",e.cause)}},aeb0:function(t,e,a){var n=a("9bf2").f;t.exports=function(t,e,a){a in t||n(t,a,{configurable:!0,get:function(){return e[a]},set:function(t){e[a]=t}})}},af49:function(t,e,a){"use strict";a("da04")},b980:function(t,e,a){var n=a("d039"),s=a("5c6c");t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",s(1,7)),7!==t.stack)}))},c770:function(t,e,a){var n=a("e330"),s=Error,r=n("".replace),i=function(t){return String(s(t).stack)}("zxcasd"),o=/\n\s*at [^:]*:[^\n]*/,c=o.test(i);t.exports=function(t,e){if(c&&"string"==typeof t&&!s.prepareStackTrace)while(e--)t=r(t,o,"");return t}},c7d6:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-wrap"},[a("MyHeader",{on:{changeTab:t.handleTabChange,changeMenu:t.handleMenuChange},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}}),0===t.currentTab&&t.voteListShow?a("div",{staticClass:"vote-list"},[t._l(t.voteList,(function(t,e){return a("VoteItem",{key:e,attrs:{dataSource:t}})})),t.voteList<=0?a("Empty"):t._e()],2):a("div",{staticClass:"dao-list"},[t._l(t.myDaoList,(function(e,n){return a("DaoItem",{key:e.daoAt,ref:"menu"+n,refInFor:!0,attrs:{dataSource:e},on:{hide:t.handleHideMenu,changeLoading:t.changeLoading}})})),t.myDaoList<=0?a("Empty"):t._e()],2)],1)},s=[],r=a("2909"),i=a("5530"),o=a("1da1"),c=(a("96cf"),a("d3b7"),a("159b"),a("b0c0"),a("a434"),a("fcfc")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"my-header"},[a("div",{staticClass:"tab"},[a("div",{staticClass:"tab-item",class:{active:0===t.currentTab},on:{click:function(e){return t.handleChangeTab(0)}}},[t._v(" "+t._s(t.$t("my.myVote"))+" ")]),a("div",{staticClass:"tab-item",class:{active1:1===t.currentTab},on:{click:function(e){return t.handleChangeTab(1)}}},[t._v(" "+t._s(t.$t("my.daoAdmin"))+" ")])])]),a("div",{staticClass:"menu"},[0===t.currentTab?a("div",{staticClass:"status",on:{click:function(e){return e.stopPropagation(),t.handleShowMenu.apply(null,arguments)}}},[t._v(" "+t._s(t.currentMenu.text)+" "),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#xiangxiajiantou-copy"}})])]):t._e(),t.menuShow?a("div",{ref:"menu",staticClass:"wrapper"},t._l(t.menuList,(function(e){return a("div",{key:e.value,staticClass:"item",class:{active:e.value===t.currentMenu.value},on:{click:function(a){return t.handleChangeMenu(e)}}},[t._v(" "+t._s(e.text)+" ")])})),0):t._e()])])},l=[],d={name:"",props:["value"],data:function(){return{currentTab:0,menuShow:!1,menuList:[{value:0,text:this.$t("my.all")},{value:1,text:this.$t("my.ing")},{value:2,text:this.$t("my.wait")},{value:3,text:this.$t("my.end")}],currentMenu:{}}},methods:{handleChangeTab:function(t){this.currentTab=t,this.$emit("changeTab",t)},handleChangeMenu:function(t){this.currentMenu=t,this.$emit("changeMenu",t.value)},handleHideMenu:function(){this.menuShow=!1},handleShowMenu:function(){this.menuShow=!0}},mounted:function(){this.currentTab=this.value,this.currentMenu=this.menuList[0]},created:function(){document.addEventListener("click",this.handleHideMenu)},destroyed:function(){document.removeEventListener("click",this.handleHideMenu)},watch:{}},p=d,m=(a("af49"),a("2877")),h=Object(m["a"])(p,u,l,!1,null,"568e2da6",null),f=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"proposal-wrap",on:{click:t.handleToDetail}},[a("div",{staticClass:"item-header"},[a("div",{staticClass:"dao-info"},[a("img",{attrs:{src:t.dataSource.logo,alt:""}}),a("div",{staticClass:"name"},[t._v(t._s(t.dataSource.name))]),1===t.timeStatus?a("div",{staticClass:"time"},[t._v(" "+t._s(t.$t("proposal.left"))+t._s(t.dataSource.endTime)+" ")]):t._e()]),a("div",{staticClass:"time-info"},[1===t.timeStatus?a("div",{staticClass:"status-wrap"},[a("div",{staticClass:"status"},[t._v(t._s(t.$t("proposal.voting")))])]):4===t.timeStatus?a("div",{staticClass:"status status4"},[t._v(t._s(t.$t("proposal.waitVote")))]):a("div",{staticClass:"status status2"},[t._v(t._s(t.$t("proposal.ended")))])])]),a("div",{staticClass:"title"},[t._v(" "+t._s(t.dataSource.name_desc[0])+" ")]),a("div",{staticClass:"content ellipsis-3"},[t._v(" "+t._s(t.dataSource.name_desc[1])+" ")]),a("div",{staticClass:"bottom"},[a("div",{staticClass:"tag-group"},[a("div",{staticClass:"tag",class:"type"+t.type},[t._v(" "+t._s(t.list1[t.type])+" ")]),a("div",{staticClass:"tag",class:"tag"+t.tag},[t._v(" "+t._s(t.list2[t.tag])+" ")]),t.isReward?a("div",{staticClass:"tag pink-bg"},[t._v(" "+t._s(t.voteReward)+" ")]):t._e()]),a("div",{staticClass:"info"},[t._v(" "+t._s(t.$gbUtils.formatBalance(t.dataSource.totalVote/1e18))+" "),a("span",[t._v(t._s(t.$t("proposal.ticket")))])])])])},g=[],b=a("1f5d"),y=a("2f62"),w={name:"",props:["dataSource"],data:function(){return{type:0,tag:0,isReward:!1,timeStatus:0,tokenName:""}},computed:{list1:function(){return this.$t("proposal.list1")},list2:function(){return this.$t("proposal.list2")},voteReward:function(){return this.$t("proposal.voteReward")}},methods:Object(i["a"])(Object(i["a"])({},Object(y["b"])(["chanegProposalDetail"])),{},{handleToDetail:function(){this.chanegProposalDetail(this.dataSource),this.$router.push({path:"/proposalDetail?status=".concat(this.timeStatus)})},getTokenInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["a"].getSymbol(t.dataSource.token);case 2:a=e.sent,a.success&&(t.tokenName=a.result);case 4:case"end":return e.stop()}}),e)})))()},init:function(){this.type=parseInt(this.dataSource.uintParams[0]/10)-1,this.tag=parseInt(this.dataSource.uintParams[1]/10)-1,this.isReward=this.dataSource.uintParams[2]>0,this.timeStatus=this.dataSource.timeStatus}}),mounted:function(){this.getTokenInfo(),this.init()}},k=w,L=(a("5244"),Object(m["a"])(k,v,g,!1,null,"4ed961b3",null)),S=L.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dao-item"},[a("div",{staticClass:"info-box"},[a("img",{attrs:{src:t.dataSource.params[0]||t.defaultImg,alt:""}}),a("div",{staticClass:"info"},["ZH"===t.lang?a("div",{staticClass:"name"},[t._v(" "+t._s(t.dataSource.params[1])+" ")]):a("div",{staticClass:"name"},[t._v(t._s(t.dataSource.params[2]))]),a("div",{staticClass:"member"},[t._v(" "+t._s(t.dataSource.memberCount)+t._s(t.$t("my.members"))+" ")])])]),a("div",{staticClass:"operation",on:{click:function(e){return e.stopPropagation(),t.handleShowMenu.apply(null,arguments)}}},[t._v(" "+t._s(t.$t("my.operation"))),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#xiangxiajiantou-copy"}})])]),t.menuShow?a("div",{ref:"menu",staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"operation",on:{click:function(e){t.menuShow=!1}}},[t._v(" "+t._s(t.$t("my.operation"))),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#xiangxiajiantou-copy"}})])]),t.isCouncliAt?a("div",{staticClass:"item modify-info",on:{click:function(e){return e.stopPropagation(),t.handleToModify.apply(null,arguments)}}},[t._v(" "+t._s(t.$t("my.modifyInfo"))+" ")]):t._e(),t.isCouncliAt?a("div",{staticClass:"item remove",on:{click:function(e){return e.stopPropagation(),t.handleRemoveShow(0)}}},[t._v(" "+t._s(t.$t("my.remove"))+" ")]):a("div",{staticClass:"item apply",on:{click:function(e){return e.stopPropagation(),t.handleApplyShow.apply(null,arguments)}}},[t._v(" "+t._s(t.$t("my.apply"))+" ")]),t.isCouncliAt?t._e():a("div",{staticClass:"item quit",on:{click:function(e){return e.stopPropagation(),t.handleRemoveShow(1)}}},[t._v(" "+t._s(t.$t("my.quit"))+" ")])]):t._e(),t.applyShow?a("ApplyCouncli",{attrs:{dataSource:t.dataSource},on:{close:t.handleApplyShow}}):t._e(),t.removeShow?a("RemoveCouncli",{attrs:{dataSource:t.dataSource,isRemove:t.isRemove},on:{close:t.handleRemoveShow}}):t._e()],1)},x=[],C=(a("e9c4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VanPopup",{staticStyle:{"box-sizing":"border-box",width:"93%","max-width":"350px",padding:"20px",background:"transparent"},attrs:{round:""},on:{"click-overlay":t.closePop},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("DaoRule",{attrs:{type:"1"}}),a("div",{staticClass:"window-wrap"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.dataSource.params[0]||t.defaultImg,alt:""}}),"ZH"===t.lang?a("div",{staticClass:"name"},[t._v(" "+t._s(t.dataSource.params[1])+" ")]):a("div",{staticClass:"name"},[t._v(t._s(t.dataSource.params[2]))])]),a("div",{staticClass:"contract"},[a("div",{staticClass:"name"},[t._v(t._s(t.$t("my.addressDes")))]),a("div",{staticClass:"address"},[t._v(" "+t._s(t.$gbUtils.formatAddress(t.dataSource.token,"...",10))+" ")])]),a("div",{staticClass:"content"},[a("div",{staticClass:"key-value"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("my.tokenName")))]),a("div",{staticClass:"value"},[t._v(t._s(t.tokenName))])]),a("div",{staticClass:"key-value"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("my.totalSupply")))]),a("div",{staticClass:"value"},[t._v(t._s(t.totalSupply))])]),a("div",{staticClass:"key-value"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("my.needStake")))]),a("div",{staticClass:"value"},[t._v(t._s(t.totalSupply/100))])]),a("div",{staticClass:"key-value"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("my.account")))]),a("div",{staticClass:"value"},[t._v(t._s(t.$gbUtils.formatBalance(t.tokenBalance)))])])]),a("div",{staticClass:"button-group"},[t.authToken?a("VanButton",{staticClass:"button",attrs:{loading:t.btnLoading},on:{click:t.handleApplyDao}},[t._v(t._s(t.$t("my.appBtn")))]):a("VanButton",{staticClass:"button",attrs:{loading:t.btnLoading},on:{click:t.approveToken}},[t._v("授权")])],1)])],1)}),$=[],R=a("f645"),A=a("5bbb4"),j={name:"",props:["dataSource"],data:function(){return{defaultImg:a("9d64"),show:!0,authToken:!1,btnLoading:!0,tokenName:"",totalSupply:0,tokenBalance:0}},methods:{closePop:function(){this.$emit("close")},getAllowance:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,e.next=3,b["a"].allowance(t.dataSource.token,R["a"].daoAddress);case 3:a=e.sent,a.success&&(t.authToken=a.result>0),t.btnLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},approveToken:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,e.next=3,b["a"].approve(t.dataSource.token,R["a"].daoAddress,1e17);case 3:if(a=e.sent,t.btnLoading=!1,a.success){e.next=7;break}return e.abrupt("return",t.$toast(a.message.message));case 7:t.authToken=!0;case 8:case"end":return e.stop()}}),e)})))()},handleApplyDao:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,e.next=3,c["a"].councliApply(t.dataSource.daoAt);case 3:if(a=e.sent,t.btnLoading=!1,a.success){e.next=7;break}return e.abrupt("return");case 7:t.$toast("success"),t.closePop();case 9:case"end":return e.stop()}}),e)})))()},getTokenInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["a"].getSymbol(t.dataSource.token);case 2:return a=e.sent,e.next=5,b["a"].totalSupply(t.dataSource.token);case 5:return n=e.sent,e.next=8,b["a"].balanceOf(t.dataSource.token);case 8:s=e.sent,a.success&&n.success&&s.success&&(t.tokenName=a.result,t.totalSupply=n.result,t.tokenBalance=s.result);case 10:case"end":return e.stop()}}),e)})))()}},computed:Object(i["a"])({},Object(y["c"])(["lang"])),mounted:function(){this.getAllowance(),this.getTokenInfo()},components:{DaoRule:A["a"]}},O=j,T=(a("6a43"),Object(m["a"])(O,C,$,!1,null,"9eaaef76",null)),D=T.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VanPopup",{staticStyle:{"box-sizing":"border-box",width:"93%","max-width":"350px",padding:"20px",background:"#fff"},attrs:{round:""},on:{"click-overlay":t.closePop},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.dataSource.params[0],alt:""}}),0===t.isRemove?a("div",{staticClass:"name"},[t._v(t._s(t.$t("my.removeTitle")))]):a("div",{staticClass:"name"},[t._v(t._s(t.$t("my.quitTitle")))])]),0===t.isRemove?a("div",{staticClass:"des",domProps:{innerHTML:t._s(t.rule)}}):a("div",{staticClass:"des des1",domProps:{innerHTML:t._s(t.rule1)}}),a("div",{staticClass:"btn-group"},[a("VanButton",{staticClass:"button",attrs:{loading:t.btnLoading},on:{click:t.handleDao}},[t._v(t._s(t.$t("common.confirm")))])],1)])},E=[],P={name:"",props:["isRemove","dataSource"],data:function(){return{show:!0,daoName:"我的DAO",isQuit:0,btnLoading:!1,tokenName:"",totalSupply:0}},methods:{closePop:function(){this.$emit("close")},handleDao:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.btnLoading=!0,console.log("this.isQuit",t.isQuit),t.isQuit){e.next=15;break}return console.log("councliQuit"),e.next=6,c["a"].councliQuit(t.dataSource.daoAt);case 6:if(a=e.sent,t.btnLoading=!1,a.success){e.next=10;break}return e.abrupt("return");case 10:t.$toast("success"),t.$parent.$parent.reload(),t.closePop(),e.next=25;break;case 15:return console.log("Daoquit"),e.next=18,c["a"].daoQuit(t.dataSource.daoAt);case 18:if(n=e.sent,t.btnLoading=!1,n.success){e.next=22;break}return e.abrupt("return");case 22:t.$toast("success"),t.$parent.$parent.reload(),t.closePop();case 25:case"end":return e.stop()}}),e)})))()},getTokenInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["a"].getSymbol(t.dataSource.token);case 2:return a=e.sent,e.next=5,b["a"].totalSupply(t.dataSource.token);case 5:n=e.sent,a.success&&n.success&&(t.tokenName=a.result,t.totalSupply=n.result);case 7:case"end":return e.stop()}}),e)})))()}},computed:Object(i["a"])(Object(i["a"])({},Object(y["c"])(["lang"])),{},{rule:function(){return this.$t("my.removeDao",{daoName:"ZH"===this.lang?this.dataSource.params[1]:this.dataSource.params[2],stakeNumber:this.totalSupply/100,tokenName:this.tokenName})},rule1:function(){return this.$t("my.quitDao",{daoName:"ZH"===this.lang?this.dataSource.params[1]:this.dataSource.params[2]})}}),watch:{isRemove:function(t){this.isQuit=t,console.log("this.isQuit",this.isQuit)}},mounted:function(){this.getTokenInfo(),this.isQuit=this.isRemove,console.log("this.isQuit",this.isQuit)}},I=P,V=(a("fb89"),Object(m["a"])(I,M,E,!1,null,"702e0e75",null)),H=V.exports,N={name:"",props:["dataSource"],data:function(){return{defaultImg:a("9d64"),menuShow:!1,removeShow:!1,applyShow:!1,isRemove:0,isCouncliAt:!1}},methods:{handleHideMenu:function(){this.menuShow=!1},handleApplyShow:function(){this.$emit("hide"),this.applyShow=!this.applyShow},handleRemoveShow:function(t){this.$emit("hide"),this.isRemove=t,console.log("this.isRemove",this.isRemove),this.removeShow=!this.removeShow},handleShowMenu:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$emit("hide"),e.next=3,t.getIsCouncliAt();case 3:t.menuShow=!0;case 4:case"end":return e.stop()}}),e)})))()},getIsCouncliAt:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$emit("changeLoading",!0),e.next=3,c["a"].userCouncli(t.dataSource.daoAt);case 3:if(a=e.sent,t.$emit("changeLoading",!1),a.success){e.next=7;break}return e.abrupt("return");case 7:t.isCouncliAt=a.result;case 8:case"end":return e.stop()}}),e)})))()},handleToModify:function(){localStorage.setItem("daoDetail",JSON.stringify(this.dataSource)),this.$router.push({path:"/modifyDao?dao"})}},computed:Object(i["a"])({},Object(y["c"])(["lang"])),mounted:function(){},created:function(){document.addEventListener("click",this.handleHideMenu)},destroyed:function(){document.removeEventListener("click",this.handleHideMenu)},components:{ApplyCouncli:D,RemoveCouncli:H}},Q=N,B=(a("fcb5"),Object(m["a"])(Q,_,x,!1,null,"3f0fdeec",null)),U=B.exports,Z=a("873b"),q={name:"",data:function(){return{currentTab:0,daoList:[],myDaoList:[],recordResloveList:[],myVoteMapList:[],myVoteList:[],votingList:[],endList:[],redeemList:[],voteList:[],voteListShow:!0}},methods:{changeLoading:function(t){this.$emit("changeLoadingIconType",0),this.$emit("changeLoading",t)},handleHideMenu:function(){var t=this;this.daoList.forEach((function(e,a){t.$refs["menu".concat(a)]&&(t.$refs["menu".concat(a)][0].menuShow=!1)}))},handleTabChange:function(t){this.currentTab=t},getDaoList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$emit("changeLoading",!0),t.$emit("changeLoadingIconType",1),e.next=4,c["a"].daoList();case 4:if(a=e.sent,a.success){e.next=7;break}return e.abrupt("return",t.$emit("changeLoading",!1));case 7:if(t.daoList=a.result||[],console.log(t.daoList),!(t.daoList.length<=0)){e.next=11;break}return e.abrupt("return",t.$emit("changeLoading",!1));case 11:t.getUserList();case 12:case"end":return e.stop()}}),e)})))()},getUserList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$emit("changeLoading",!0),t.$emit("changeLoadingIconType",1),e.next=4,c["a"].userDaoList();case 4:if(a=e.sent,a.success){e.next=7;break}return e.abrupt("return",t.$emit("changeLoading",!1));case 7:a.result.forEach((function(e,a){if(e){var n=Object(i["a"])({},t.daoList[a]);n.name="ZH"===t.lang?n.params[1]:n.params[2],n.daoAt=a,n.proposalList=[],t.myDaoList.push(n)}})),console.log("this.myDaoList",t.myDaoList),n=0;case 10:if(!(n<t.myDaoList.length)){e.next=16;break}return e.next=13,t.handleProposalList(t.myDaoList[n].daoAt,n);case 13:n++,e.next=10;break;case 16:t.myVoteMapList.forEach((function(e){var a=(new Date).getTime()/1e3,n=-1;a<+t.myDaoList[e.daoAt].proposalList[e.proposalAt].uintParams[3]?n=0:a<+t.myDaoList[e.daoAt].proposalList[e.proposalAt].uintParams[4]?(n=1,t.votingList.push(Object(i["a"])(Object(i["a"])({},t.myDaoList[e.daoAt].proposalList[e.proposalAt]),{},{endTime:t.$gbUtils.showStartime(+t.myDaoList[e.daoAt].proposalList[e.proposalAt].uintParams[4],t.lang),proposalAt:e.proposalAt,daoAt:e.daoAt,logo:t.myDaoList[e.daoAt].params[0],name:"ZH"===t.lang?t.myDaoList[e.daoAt].params[1]:t.myDaoList[e.daoAt].params[2],token:t.myDaoList[e.daoAt].token,timeStatus:n}))):(n=2,t.endList.push(Object(i["a"])(Object(i["a"])({},t.myDaoList[e.daoAt].proposalList[e.proposalAt]),{},{proposalAt:e.proposalAt,daoAt:e.daoAt,logo:t.myDaoList[e.daoAt].params[0],name:"ZH"===t.lang?t.myDaoList[e.daoAt].params[1]:t.myDaoList[e.daoAt].params[2],token:t.myDaoList[e.daoAt].token,timeStatus:2})))})),t.getRedeemList(),t.voteList=t.myVoteList,t.voteListShow=!0,t.$emit("changeLoading",!1);case 21:case"end":return e.stop()}}),e)})))()},handleProposalList:function(t,e){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c["a"].prosalList(t);case 2:s=n.sent,console.log("resp.result",s.result),s.result.forEach((function(t,n){var s=Object(i["a"])({},t);s.index=n,a.myDaoList[e].proposalList.push(s)}));case 5:case"end":return n.stop()}}),n)})))()},handleMyVoteRecord:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].userVoteRecordQuery();case 2:if(a=e.sent,a.success){e.next=5;break}return e.abrupt("return");case 5:n=0;case 6:if(!(n<a.result.length)){e.next=12;break}return e.next=9,t.handleResolveVoteRecord(a.result[n]);case 9:n++,e.next=6;break;case 12:t.myVoteMapList=t.$gbUtils.objHeavy(t.recordResloveList);case 13:case"end":return e.stop()}}),e)})))()},handleResolveVoteRecord:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,c["a"].voteRecordResolve(t);case 2:n=a.sent,n.success&&e.recordResloveList.push({daoAt:n.result.daoAt,proposalAt:n.result.proposalAt});case 4:case"end":return a.stop()}}),a)})))()},getRedeemList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,s,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.endList.length){e.next=2;break}return e.abrupt("return");case 2:o=0;case 3:if(!(o<t.endList.length)){e.next=11;break}return e.next=6,t.getVoteRecords(t.endList[o].daoAt,t.endList[o].proposalAt);case 6:c=e.sent,c&&(t.redeemList.push(Object(i["a"])(Object(i["a"])({},t.endList[o]),{},{timeStatus:4})),t.endList.splice(o,1));case 8:o++,e.next=3;break;case 11:(a=t.myVoteList).push.apply(a,Object(r["a"])(t.votingList)),(n=t.myVoteList).push.apply(n,Object(r["a"])(t.redeemList)),(s=t.myVoteList).push.apply(s,Object(r["a"])(t.endList));case 14:case"end":return e.stop()}}),e)})))()},getVoteRecords:function(t,e){return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,c["a"].voteRecord(t,e,1e3);case 2:return n=a.sent,a.abrupt("return",n.result[0].status);case 4:case"end":return a.stop()}}),a)})))()},handleMenuChange:function(t){switch(t){case 0:this.voteList=this.myVoteList;break;case 1:this.voteList=this.votingList;break;case 2:this.voteList=this.redeemList;break;case 3:this.voteList=this.endList;break}this.reload()},reload:function(){var t=this;this.voteListShow=!1,this.$nextTick((function(){t.voteListShow=!0}))},init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$emit("changeLoading",!0),t.$emit("changeLoadingIconType",1),e.next=4,t.handleMyVoteRecord();case 4:return e.next=6,t.getDaoList();case 6:case"end":return e.stop()}}),e)})))()}},computed:Object(i["a"])({},Object(y["c"])(["lang"])),mounted:function(){this.voteListShow=!1,this.init()},components:{MyHeader:f,VoteItem:S,DaoItem:U,Empty:Z["a"]}},z=q,J=(a("cfde"),Object(m["a"])(z,n,s,!1,null,"49a26fb2",null));e["default"]=J.exports},ca39:function(t,e,a){},cfde:function(t,e,a){"use strict";a("f580")},d28b:function(t,e,a){var n=a("746f");n("iterator")},d5cf:function(t,e,a){},d655:function(t,e,a){},d9e2:function(t,e,a){var n=a("23e7"),s=a("da84"),r=a("2ba4"),i=a("e5cb"),o="WebAssembly",c=s[o],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var a={};a[t]=i(t,e,u),n({global:!0,arity:1,forced:u},a)},d=function(t,e){if(c&&c[t]){var a={};a[t]=i(o+"."+t,e,u),n({target:o,stat:!0,arity:1,forced:u},a)}};l("Error",(function(t){return function(e){return r(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return r(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return r(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return r(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return r(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return r(t,this,arguments)}})),l("URIError",(function(t){return function(e){return r(t,this,arguments)}})),d("CompileError",(function(t){return function(e){return r(t,this,arguments)}})),d("LinkError",(function(t){return function(e){return r(t,this,arguments)}})),d("RuntimeError",(function(t){return function(e){return r(t,this,arguments)}}))},da04:function(t,e,a){},e01a:function(t,e,a){"use strict";var n=a("23e7"),s=a("83ab"),r=a("da84"),i=a("e330"),o=a("1a2d"),c=a("1626"),u=a("3a9b"),l=a("577e"),d=a("9bf2").f,p=a("e893"),m=r.Symbol,h=m&&m.prototype;if(s&&c(m)&&(!("description"in h)||void 0!==m().description)){var f={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(h,this)?new m(t):void 0===t?m():m(t);return""===t&&(f[e]=!0),e};p(v,m),v.prototype=h,h.constructor=v;var g="Symbol(test)"==String(m("test")),b=i(h.toString),y=i(h.valueOf),w=/^Symbol\((.*)\)[^)]+$/,k=i("".replace),L=i("".slice);d(h,"description",{configurable:!0,get:function(){var t=y(this),e=b(t);if(o(f,t))return"";var a=g?L(e,7,-1):k(e,w,"$1");return""===a?void 0:a}}),n({global:!0,forced:!0},{Symbol:v})}},e391:function(t,e,a){var n=a("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},e5cb:function(t,e,a){"use strict";var n=a("d066"),s=a("1a2d"),r=a("9112"),i=a("3a9b"),o=a("d2bb"),c=a("e893"),u=a("aeb0"),l=a("7156"),d=a("e391"),p=a("ab36"),m=a("c770"),h=a("b980"),f=a("83ab"),v=a("c430");t.exports=function(t,e,a,g){var b="stackTraceLimit",y=g?2:1,w=t.split("."),k=w[w.length-1],L=n.apply(null,w);if(L){var S=L.prototype;if(!v&&s(S,"cause")&&delete S.cause,!a)return L;var _=n("Error"),x=e((function(t,e){var a=d(g?e:t,void 0),n=g?new L(t):new L;return void 0!==a&&r(n,"message",a),h&&r(n,"stack",m(n.stack,2)),this&&i(S,this)&&l(n,this,x),arguments.length>y&&p(n,arguments[y]),n}));if(x.prototype=S,"Error"!==k?o?o(x,_):c(x,_,{name:!0}):f&&b in L&&(u(x,L,b),u(x,L,"prepareStackTrace")),c(x,L),!v)try{S.name!==k&&r(S,"name",k),S.constructor=x}catch(C){}return x}}},f546:function(t,e,a){"use strict";a("d5cf")},f580:function(t,e,a){},fb89:function(t,e,a){"use strict";a("fd5f")},fcb5:function(t,e,a){"use strict";a("d655")},fd5f:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5b6bfa8c.65959867.js.map