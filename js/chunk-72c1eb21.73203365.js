(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72c1eb21"],{"19ca":function(e,t,n){},5006:function(e,t,n){"use strict";n("19ca")},aa8e:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("ProposalForm",{attrs:{isCouncil:e.isCouncil,tokenInfo:e.tokenInfo,tokenAuth:e.tokenAuth,loadingApprove:e.loadingApprove,loadingAdd:e.loadingAdd},on:{approveToken:e.approveToken,addProposal:e.handleAdd}})],1)},a=[],o=n("1da1"),u=(n("96cf"),n("ac1f"),n("5319"),n("b0c0"),n("85b0")),s=n("fcfc"),c=n("1f5d"),i=n("f645"),l={name:"",components:{ProposalForm:u["a"]},data:function(){return{point:.01,daoAt:"",isCouncil:!1,daoInfo:{token:""},tokenInfo:{name:"-",totalSupply:0},tokenAuth:!0,loadingApprove:!1,loadingAdd:!1}},methods:{init:function(){this.getDaoId()},getDaoId:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.daoAt=e.$route.query.daoAt||"",e.daoAt||e.$router.replace("/detail"),e.getIsCouncil(),t.next=5,e.getDaoInfo();case 5:e.getTokenInfo();case 6:case"end":return t.stop()}}),t)})))()},getIsCouncil:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].councliAt(e.daoAt);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:n.result?e.isCouncil=!0:e.isCouncil=!1;case 6:case"end":return t.stop()}}),t)})))()},getDaoInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["a"].daoDetail(e.daoAt);case 2:if(n=t.sent,console.log(n),n.success){t.next=6;break}return t.abrupt("return");case 6:e.daoInfo=n.result;case 7:case"end":return t.stop()}}),t)})))()},getTokenInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.getSymbol(),e.getTotalSupply(),t.next=4,e.getTokenAllance();case 4:case"end":return t.stop()}}),t)})))()},getSymbol:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].getSymbol(e.daoInfo.token);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:e.tokenInfo.name=n.result;case 6:case"end":return t.stop()}}),t)})))()},getTotalSupply:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].totalSupply(e.daoInfo.token);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:e.tokenInfo.totalSupply=n.result;case 6:case"end":return t.stop()}}),t)})))()},getTokenAllance:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].allowance(e.daoInfo.token,i["a"].daoAddress);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:r=+n.result,e.tokenAuth=r>=e.tokenInfo.totalSupply*e.point;case 7:case"end":return t.stop()}}),t)})))()},approveToken:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loadingApprove=!0,t.next=3,c["a"].approve(e.daoInfo.token,i["a"].daoAddress);case 3:if(n=t.sent,e.loadingApprove=!1,n.success){t.next=7;break}return t.abrupt("return");case 7:e.tokenAuth=!0;case 8:case"end":return t.stop()}}),t)})))()},handleAdd:function(e,t,n,r){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function o(){var u;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return a.loadingAdd=!0,console.log(e,"params1"),console.log(t,"params2"),console.log(n,"mutilOption"),console.log(r,"options"),o.next=7,s["a"].proposalAdd(a.daoAt,e,t,n,r);case 7:if(u=o.sent,a.loadingAdd=!1,console.log(u),u.success){o.next=12;break}return o.abrupt("return");case 12:a.$toast("success"),a.$gbUtils.handleToPage("/detail");case 14:case"end":return o.stop()}}),o)})))()}},mounted:function(){this.init()}},p=l,d=(n("5006"),n("2877")),f=Object(d["a"])(p,r,a,!1,null,"6efd21a7",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-72c1eb21.73203365.js.map