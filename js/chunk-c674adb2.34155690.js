(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c674adb2"],{"076c":function(e,t,n){"use strict";n("7cc6")},"7cc6":function(e,t,n){},aa8e:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("ProposalForm",{attrs:{isCouncil:e.isCouncil,tokenInfo:e.tokenInfo,tokenAuth:e.tokenAuth,loadingApprove:e.loadingApprove,loadingAdd:e.loadingAdd},on:{approveToken:e.approveToken,addProposal:e.handleAdd}})],1)},r=[],o=n("c7eb"),c=n("1da1"),s=(n("ac1f"),n("5319"),n("b0c0"),n("85b0")),u=n("fcfc"),i=n("1f5d"),p=n("f645"),d={name:"",components:{ProposalForm:s["a"]},data:function(){return{point:1e-6,daoAt:"",isCouncil:!1,daoInfo:{token:""},tokenInfo:{name:"-",totalSupply:0},tokenAuth:!0,loadingApprove:!1,loadingAdd:!1}},methods:{init:function(){this.getDaoId()},getDaoId:function(){var e=this;return Object(c["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.daoAt=e.$route.query.daoAt||"",e.daoAt||e.$router.replace("/detail"),e.getIsCouncil(),t.next=5,e.getDaoInfo();case 5:e.getTokenInfo();case 6:case"end":return t.stop()}}),t)})))()},getIsCouncil:function(){var e=this;return Object(c["a"])(Object(o["a"])().mark((function t(){var n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].councliAt(e.daoAt);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:n.result?e.isCouncil=!0:e.isCouncil=!1;case 6:case"end":return t.stop()}}),t)})))()},getDaoInfo:function(){var e=this;return Object(c["a"])(Object(o["a"])().mark((function t(){var n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].daoDetail(e.daoAt);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:e.daoInfo=n.result;case 6:case"end":return t.stop()}}),t)})))()},getTokenInfo:function(){var e=this;return Object(c["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.getSymbol(),e.getTotalSupply(),t.next=4,e.getTokenAllance();case 4:case"end":return t.stop()}}),t)})))()},getSymbol:function(){var e=this;return Object(c["a"])(Object(o["a"])().mark((function t(){var n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].getSymbol(e.daoInfo.token);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:e.tokenInfo.name=n.result;case 6:case"end":return t.stop()}}),t)})))()},getTotalSupply:function(){var e=this;return Object(c["a"])(Object(o["a"])().mark((function t(){var n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].totalSupply(e.daoInfo.token);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:e.tokenInfo.totalSupply=n.result;case 6:case"end":return t.stop()}}),t)})))()},getTokenAllance:function(){var e=this;return Object(c["a"])(Object(o["a"])().mark((function t(){var n,a;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].allowance(e.daoInfo.token,p["a"].daoAddress);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:a=+n.result,e.tokenAuth=a>=e.tokenInfo.totalSupply*e.point;case 7:case"end":return t.stop()}}),t)})))()},approveToken:function(){var e=this;return Object(c["a"])(Object(o["a"])().mark((function t(){var n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loadingApprove=!0,t.next=3,i["a"].approve(e.daoInfo.token,p["a"].daoAddress);case 3:if(n=t.sent,e.loadingApprove=!1,n.success){t.next=7;break}return t.abrupt("return");case 7:e.tokenAuth=!0;case 8:case"end":return t.stop()}}),t)})))()},handleAdd:function(e,t,n,a){var r=this;return Object(c["a"])(Object(o["a"])().mark((function c(){var s;return Object(o["a"])().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return r.loadingAdd=!0,o.next=3,u["a"].proposalAdd(r.daoAt,e,t,n,a);case 3:if(s=o.sent,r.loadingAdd=!1,s.success){o.next=7;break}return o.abrupt("return");case 7:r.$toast("success"),r.$gbUtils.handleToPage("/detail");case 9:case"end":return o.stop()}}),c)})))()}},mounted:function(){this.init()}},l=d,f=(n("076c"),n("2877")),b=Object(f["a"])(l,a,r,!1,null,"df673c36",null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-c674adb2.34155690.js.map