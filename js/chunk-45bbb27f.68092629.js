(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45bbb27f"],{"4b76":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("ProposalForm",{attrs:{isEdit:!0,dateSource:e.proposalInfo,isCouncil:e.isCouncil,tokenInfo:e.tokenInfo,tokenAuth:e.tokenAuth,loadingApprove:e.loadingApprove,loadingAdd:e.loadingAdd},on:{approveToken:e.approveToken,addProposal:e.handleAdd}})],1)},o=[],r=n("c7eb"),s=n("1da1"),c=n("5530"),u=(n("ac1f"),n("5319"),n("b0c0"),n("85b0")),i=n("fcfc"),p=n("1f5d"),l=n("f645"),d=n("2f62"),f={name:"",components:{ProposalForm:u["a"]},data:function(){return{point:1e-6,daoAt:"",isCouncil:!1,proposalInfo:{},tokenInfo:{name:"-",totalSupply:0,tokenAddress:""},tokenAuth:!1,loadingApprove:!1,loadingAdd:!1}},computed:Object(c["a"])({},Object(d["c"])(["proposalDetail"])),methods:{init:function(){this.getInfo()},getInfo:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("proposalDetail",e.proposalDetail),e.proposalDetail||e.$router.replace("/detail"),e.proposalInfo=e.proposalDetail,e.daoAt=e.proposalInfo.daoAt,e.proposalId=e.proposalInfo.index,e.tokenInfo.tokenAddress=e.proposalInfo.token,e.getIsCouncil(),e.getTokenInfo();case 8:case"end":return t.stop()}}),t)})))()},getIsCouncil:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].councliAt(e.daoAt);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:n.result?e.isCouncil=!0:e.isCouncil=!1;case 6:case"end":return t.stop()}}),t)})))()},getTokenInfo:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.getSymbol(),t.next=3,e.getTotalSupply();case 3:e.getTokenAllance();case 4:case"end":return t.stop()}}),t)})))()},getSymbol:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p["a"].getSymbol(e.tokenInfo.tokenAddress);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:e.tokenInfo.name=n.result;case 6:case"end":return t.stop()}}),t)})))()},getTotalSupply:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p["a"].totalSupply(e.tokenInfo.tokenAddress);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:e.tokenInfo.totalSupply=n.result;case 6:case"end":return t.stop()}}),t)})))()},getTokenAllance:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var n,a;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p["a"].allowance(e.tokenInfo.tokenAddress,l["a"].daoAddress);case 2:if(n=t.sent,n.success){t.next=5;break}return t.abrupt("return");case 5:a=n.result,e.tokenAuth=a>=e.tokenInfo.totalSupply*e.point;case 7:case"end":return t.stop()}}),t)})))()},approveToken:function(){var e=this;return Object(s["a"])(Object(r["a"])().mark((function t(){var n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loadingApprove=!0,t.next=3,p["a"].approve(e.tokenInfo.tokenAddress,l["a"].daoAddress);case 3:if(n=t.sent,e.loadingApprove=!1,n.success){t.next=7;break}return t.abrupt("return");case 7:e.tokenAuth=!0;case 8:case"end":return t.stop()}}),t)})))()},handleAdd:function(e,t,n,a){var o=this;return Object(s["a"])(Object(r["a"])().mark((function s(){var c;return Object(r["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o.loadingAdd=!0,r.next=3,i["a"].proposalEdit(o.daoAt,o.proposalId,e,t,n,a);case 3:if(c=r.sent,o.loadingAdd=!1,console.log(c),c.success){r.next=8;break}return r.abrupt("return");case 8:o.$toast("success"),o.$gbUtils.handleToPage("/detail");case 10:case"end":return r.stop()}}),s)})))()}},mounted:function(){this.init()},beforeDestroy:function(){}},b=f,k=(n("6944"),n("2877")),h=Object(k["a"])(b,a,o,!1,null,"a737ca16",null);t["default"]=h.exports},6507:function(e,t,n){},6944:function(e,t,n){"use strict";n("6507")}}]);
//# sourceMappingURL=chunk-45bbb27f.68092629.js.map