(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c17666c2"],{"0172":function(t,e,a){},"03c1":function(t,e,a){},"0cc1":function(t,e,a){},"12fe":function(t,e,a){"use strict";a("0cc1")},"142a":function(t,e,a){},"24a1":function(t,e,a){"use strict";a("0172")},"34c1":function(t,e,a){},"382a":function(t,e,a){"use strict";a("03c1")},"3c71":function(t,e,a){},"696d":function(t,e,a){"use strict";a("142a")},"917e":function(t,e,a){},"9bdb":function(t,e,a){"use strict";a("917e")},"9e58":function(t,e,a){},a8df:function(t,e,a){"use strict";a("3c71")},be50:function(t,e,a){},bea6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"proposal-detail-info"},[a("ProposalInfo",{attrs:{dataSource:t.dataSource,dao:t.currentDao,tokenName:t.tokenName,timeStatus:t.timeStatus,isRedeem:t.isRedeem}}),t.isVote||2===t.timeStatus&&"10"===t.dataSource.status?a("MyVote",{attrs:{dataSource:t.dataSource,myVoteList:t.myVoteList,myTotalVote:t.myTotalVote,tokenName:t.tokenName,timeStatus:t.timeStatus,voteMembers:t.voteNum,isRedeem:t.isRedeem,isVote:t.isVote},on:{proposalFinsh:t.proposalFinsh}}):t._e(),t.dataSource.mutilOption?a("DiverseVote",{ref:"DiverseVote",attrs:{dataSource:t.dataSource,dao:t.currentDao,tokenName:t.tokenName,timeStatus:t.timeStatus},on:{show:t.handleVoteShow}}):a("SingleVote",{ref:"SingleVote",attrs:{dataSource:t.dataSource,dao:t.currentDao,tokenName:t.tokenName,timeStatus:t.timeStatus},on:{show:t.handleVoteShow}}),t.timeStatus&&t.voteList.length>0?a("VoteRecords",{attrs:{dataSource:t.dataSource,dao:t.currentDao,voteList:t.voteList,tokenName:t.tokenName,voteMembers:t.voteNum}}):t._e(),a("VoteTime",{attrs:{dataSource:t.dataSource}}),t.voteShow?a("VotePop",{attrs:{dataSource:t.dataSource,options:t.options,dao:t.currentDao},on:{close:t.handleVoteShow,success:t.handleVoteSuccess}}):t._e()],1)},o=[],n=a("c7eb"),i=a("1da1"),r=a("5530"),c=(a("d3b7"),a("159b"),a("c740"),a("ac1f"),a("1276"),a("6262")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"time-info"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("proposal.info")))]),a("div",{staticClass:"item"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("proposal.startTime")))]),a("div",{staticClass:"value"},[t._v(" "+t._s(t.starTime)+" ")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("proposal.endTime")))]),a("div",{staticClass:"value"},[t._v(" "+t._s(t.endTime)+" ")])])])},l=[],d={props:["dataSource"],name:"",data:function(){return{starTime:"",endTime:""}},methods:{},watch:{dataSource:function(t){console.log("val",t),this.starTime=this.$moment(1e3*t.uintParams[3]).format("YYYY-MM-DD HH:mm:ss"),this.endTime=this.$moment(1e3*t.uintParams[4]).format("YYYY-MM-DD HH:mm:ss")}},mounted:function(){this.dataSource.uintParams&&(this.starTime=this.$moment(1e3*this.dataSource.uintParams[3]).format("YYYY-MM-DD HH:mm:ss"),this.endTime=this.$moment(1e3*this.dataSource.uintParams[4]).format("YYYY-MM-DD HH:mm:ss"))}},p=d,v=(a("12fe"),a("2877")),m=Object(v["a"])(p,u,l,!1,null,"f1966534",null),h=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-vote"},[t.isVote?a("div",{staticClass:"title"},[t._v(t._s(t.$t("proposal.yourVote")))]):t._e(),t._l(t.myVoteList,(function(e,s){return a("div",{key:s,staticClass:"key-value"},[e.amount?a("div",{staticClass:"for-wrap"},[a("div",{staticClass:"key",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatBalance(e.amount/1e18))+" "+t._s(t.$t("proposal.ticket"))+" ")]),a("div",{staticClass:"value ellipsis"},[a("div",{staticClass:"text"},[t._v(" "+t._s(e.name)+" ")])])]):t._e()])})),2===t.timeStatus&&t.myTotalVote&&t.totalReward?a("div",{staticClass:"reward"},[t._v(" "+t._s(t.$t("proposal.get"))+" "),a("span",{attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatBalance(t.myTotalVote/t.dataSource.totalVote*t.totalReward/1e18))+" "+t._s(t.tokenName))])]):t._e(),2!==t.timeStatus&&4!==t.timeStatus||"10"!==t.status?t._e():a("div",{staticClass:"btn-group"},[a("VanButton",{staticClass:"button",class:{"end-btn":t.isVote},attrs:{loading:t.btnLoading},on:{click:t.handleProposalFinsh}},[t._v(t._s(t.$t("proposal.endProposal")))])],1),2!==t.timeStatus&&4!==t.timeStatus||!t.redeemStatus?t._e():a("div",{staticClass:"btn-group"},[t.myVoteList.length?a("VanButton",{staticClass:"button",attrs:{loading:t.btnLoading,disabled:"10"===t.status},on:{click:t.handleRedeem}},["10"===t.status?a("span",[t._v(t._s(t.$t("proposal.waitFinish")))]):"20"===t.status?a("span",[t._v(t._s(t.$t("proposal.redeem")))]):t._e()]):t._e()],1)],2)},b=[],_=a("fcfc"),k=a("2f62"),S={props:["myVoteList","dataSource","tokenName","timeStatus","voteMembers","isRedeem","isVote","myTotalVote"],name:"",data:function(){return{totalReward:0,btnLoading:!1,voteList:[],status:"",redeemStatus:!1}},computed:Object(r["a"])({},Object(k["c"])(["myAccount"])),methods:{handleRedeem:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,e.next=3,_["a"].voteFinsh(t.dataSource.daoAt,t.dataSource.index);case 3:a=e.sent,t.btnLoading=!1,a.success&&(t.redeemStatus=!1);case 6:case"end":return e.stop()}}),e)})))()},handleProposalFinsh:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,console.log("this.dataSource.daoAt",t.dataSource.daoAt),console.log("this.dataSource.index",t.dataSource.index),e.next=5,_["a"].proposalFinsh(t.dataSource.daoAt,t.dataSource.index);case 5:if(a=e.sent,t.btnLoading=!1,a.success){e.next=9;break}return e.abrupt("return");case 9:t.status="20",t.$emit("proposalFinsh"),t.$toast("success");case 12:case"end":return e.stop()}}),e)})))()}},watch:{myVoteList:function(t){this.voteList=t;var e=this.dataSource.uintParams;this.totalReward=+e[2],this.status=this.dataSource.status,this.uintParams=this.dataSource.uintParams}},mounted:function(){this.voteList=this.myVoteList;var t=this.dataSource.uintParams;this.status=this.dataSource.status,this.redeemStatus=this.isRedeem,t&&(this.totalReward=+t[2])}},g=S,w=(a("9bdb"),Object(v["a"])(g,f,b,!1,null,"325d1766",null)),C=w.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[t._v(t._s(t.proposalInfo[0]))]),a("div",{staticClass:"vote-info"},[0===t.timeStatus?a("div",{staticClass:"status status1"},[t._v(" "+t._s(t.$t("proposal.wairStart"))+" ")]):1===t.timeStatus?a("div",{staticClass:"status"},[t._v(" "+t._s(t.$t("proposal.voting"))+" ")]):4===t.timeStatus?a("div",{staticClass:"status status4"},[t._v(" "+t._s(t.$t("proposal.waitRedeem"))+" ")]):a("div",{staticClass:"status status2"},[t._v(t._s(t.$t("proposal.ended")))]),a("div",{staticClass:"dao-info"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.daoParams[0],alt:""}})]),"ZH"===t.lang?a("div",{staticClass:"name"},[t._v(" "+t._s(t.daoParams[1])+" ")]):a("div",{staticClass:"name"},[t._v(t._s(t.daoParams[2]))])])]),+t.uintParams[2]?a("div",{staticClass:"reward"},[t._v(" "+t._s(t.$t("proposal.voteReward"))+":"+t._s(+t.uintParams[2]/1e18)+" "+t._s(t.tokenName)+" ")]):t._e(),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.analysisUrl(t.proposalInfo[1]))}}),a("div",{staticClass:"address",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatAddress(t.dataSource.initiate,"...","6"))+t._s(t.$t("proposal.initiate"))+" ")]),t.dataSource.initiate&&t.dataSource.initiate.toUpperCase()===t.myAccount.toUpperCase()&&!t.timeStatus?a("div",{staticClass:"button",on:{click:t.handleModify}},[t._v(" "+t._s(t.$t("proposal.modify"))+" ")]):t._e()])},$=[],V=(a("5319"),{props:["dataSource","dao","tokenName","timeStatus","isRedeem"],name:"",data:function(){return{daoInfo:{},daoParams:{},proposalInfo:{},redeemStatus:!0,uintParams:[]}},methods:Object(r["a"])(Object(r["a"])({},Object(k["b"])(["chanegProposalDetail"])),{},{handleModify:function(){var t=this.dataSource;t.token=this.dao.token,this.chanegProposalDetail(t),this.$gbUtils.handleToPage("/modifyProposal")},analysisUrl:function(t){if(!t)return"";var e=/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g,a=t.replace(e,'<a target=_blank href="$1$2"> $1$2 </a>');return a}}),computed:Object(r["a"])({},Object(k["c"])(["lang","myAccount"])),mounted:function(){this.daoInfo=this.dao,this.daoParams=this.daoInfo.params,this.proposalInfo=this.dataSource.name_desc,this.redeemStatus=this.isRedeem,this.uintParams=this.dataSource.uintParams},watch:{dao:function(t){this.daoInfo=t,this.daoParams=t.params},dataSource:function(t){this.proposalInfo=t.name_desc,this.uintParams=t.uintParams,this.redeemStatus=this.isRedeem}}}),x=V,O=(a("24a1"),a("a8df"),Object(v["a"])(x,L,$,!1,null,"566fc35e",null)),T=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[1===t.timeStatus?a("div",{staticClass:"vote"},[t._l(t.dataSource.options,(function(e,s){return a("div",{key:s,staticClass:"item",on:{click:function(e){return t.handleSelectVote(s)}}},[a("div",{staticClass:"center",class:{"item-content":t.options!==s}},[t._v(" "+t._s(e)+" ")])])})),a("VanButton",{staticClass:"button",attrs:{disabled:t.options.length<=0},on:{click:t.handleShowVote}},[t._v(t._s(t.$t("proposal.vote")))])],2):t._e(),a("div",{staticClass:"vote-info"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("proposal.result")))]),t._l(t.voteArr,(function(e){return a("div",{key:e.index,staticClass:"item"},[a("div",{staticClass:"item-info"},[a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"usdt",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatTwoBalance(e.num/1e18))+t._s(t.$t("proposal.ticket"))+" ")]),a("div",{staticClass:"percent",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatTwoBalance(+e.num/t.totalVotes*100)||0)+"% ")])]),a("div",{staticClass:"line-bg"},[a("div",{staticClass:"line",style:{width:(+e.num/t.totalVotes*100||0)+"%"}})])])}))],2)])},y=[],A=a("2909"),P=(a("4e82"),{name:"",props:["dataSource","dao","tokenName","timeStatus"],data:function(){return{options:[],totalVotes:0,voteArr:[]}},methods:{handleSelectVote:function(t){this.options=t},handleShowVote:function(){var t=[];t.push(this.options),console.log("options",t),this.$emit("show",t)}},mounted:function(){},watch:{dataSource:function(t){var e=this;this.totalVotes=0,this.dataSource.votes.forEach((function(t,a){e.totalVotes+=parseInt(t),e.voteArr.push({index:a,num:t,name:e.dataSource.options[a]})})),this.voteArr=Object(A["a"])(this.voteArr).sort((function(t,e){return+e.num-+t.num}))}}}),N=P,I=(a("bf6b"),Object(v["a"])(N,j,y,!1,null,"5ddeb7ee",null)),D=I.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[1===t.timeStatus?a("div",{staticClass:"vote"},[t._l(t.dataSource.options,(function(e,s){return a("div",{key:s,staticClass:"item",on:{click:function(e){return t.handleSelectVote(s)}}},[a("div",{staticClass:"center",class:{"item-content":!t.options[s]}},[t._v(" "+t._s(e)+" ")])])})),a("VanButton",{staticClass:"button",attrs:{disabled:t.options.length<=0},on:{click:t.handleShowVote}},[t._v(" "+t._s(t.$t("proposal.vote"))+" ")])],2):t._e(),a("div",{staticClass:"vote-info"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("proposal.result")))]),t._l(t.voteArr,(function(e){return a("div",{key:e.index,staticClass:"item"},[a("div",{staticClass:"item-info"},[a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"usdt",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatTwoBalance(e.num/1e18))+t._s(t.$t("proposal.ticket"))+" ")]),a("div",{staticClass:"percent",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatTwoBalance(+e.num/t.totalVotes*100)||0)+"% ")])]),a("div",{staticClass:"line-bg"},[a("div",{staticClass:"line",style:{width:(+e.num/t.totalVotes*100||0)+"%"}})])])}))],2)])},B=[],M={name:"",props:["dataSource","dao","timeStatus","tokenName"],data:function(){return{options:[],totalVotes:0,voteResult:[],voteArr:[]}},methods:{handleSelectVote:function(t){this.$set(this.options,t,!this.options[t])},handleShowVote:function(){var t=[];this.options.forEach((function(e,a){e&&t.push(a)})),this.$emit("show",t)}},watch:{dataSource:function(t){var e=this;this.totalVotes=0,this.dataSource.votes.forEach((function(t,a){e.totalVotes+=parseInt(t),e.voteArr.push({index:a,num:t,name:e.dataSource.options[a]})})),this.voteArr=Object(A["a"])(this.voteArr).sort((function(t,e){return+e.num-+t.num}))}},mounted:function(){var t=this;this.totalVotes=0,this.dataSource.votes.forEach((function(e,a){t.totalVotes+=parseInt(e),t.voteArr.push({index:a,num:e,name:t.dataSource.options[a]})})),this.voteArr=Object(A["a"])(this.voteArr).sort((function(t,e){return+e.num-+t.num}))}},E=M,U=(a("cf77"),Object(v["a"])(E,R,B,!1,null,"371b3ceb",null)),Y=U.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vote-list"},[a("div",{staticClass:"title"},[a("div",{staticClass:"name"},[t._v(t._s(t.$t("proposal.voteRecords")))]),a("div",{staticClass:"joined"},[a("span",{attrs:{translate:"no"}},[t._v(t._s(t.voteNum)+" ")]),t._v(" "+t._s(t.$t("proposal.membersJoin"))+" ")])]),t._l(t.list,(function(e,s){return a("div",{key:s,staticClass:"vote-record"},[a("div",{staticClass:"record-info"},[a("div",{staticClass:"record-header"},[a("div",{staticClass:"address",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatAddress(e.voter))+" ")]),a("div",{staticClass:"usdt",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatTwoBalance(e.tokenAmount/1e18))+t._s(t.$t("proposal.ticket"))+" ")])]),a("div",{staticClass:"tag-group"},t._l(e.options,(function(e){return a("div",{key:e,staticClass:"tag"},[a("div",{staticClass:"text"},[t._v(" "+t._s(t.dataSource.options[e])+" ")])])})),0)])])})),this.list.length!==this.voteList.length?a("div",{staticClass:"button",on:{click:t.showMoer}},[t._v(" "+t._s(t.$t("proposal.more"))+" ")]):t._e()],2)},F=[],J=(a("99af"),a("fb6a"),{props:["currentDao","dataSource","voteList","tokenName","voteMembers"],name:"",data:function(){return{voteNum:0,list:[]}},methods:{showMoer:function(){this.list.length!==this.voteList.length&&(this.list=this.list.concat(this.voteList.slice(10)),this.pageNumber++)}},mounted:function(){this.voteNum=this.voteMembers,this.list=this.voteList.slice(0,10),console.log("this.voteList",this.voteList)},watch:{voteMembers:function(t){console.log("val",t),this.voteNum=t,this.list=this.voteList.slice(0,10),this.pageNumber++}}}),z=J,q=(a("c52a"),Object(v["a"])(z,H,F,!1,null,"9a1a1198",null)),W=q.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VanPopup",{staticStyle:{"box-sizing":"border-box",width:"93%","max-width":"350px",padding:"40px 40px",background:"#1f1d39"},attrs:{round:""},on:{"click-overlay":t.closePop},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"main-title"},[t._v(t._s(t.$t("proposal.vote")))]),a("div",{staticClass:"vote-select"},[t.isSingle?a("div",{staticClass:"single"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("proposal.voteOptions")))]),t._l(t.options,(function(e){return a("div",{key:e,staticClass:"vote-item"},[t._v(" "+t._s(t.dataSource.options[e])+" ")])}))],2):a("div",[a("div",{staticClass:"title"},[t._v(t._s(t.$t("proposal.voteOptions")))]),a("div",{staticClass:"select-wrap"},t._l(t.options,(function(e){return a("div",{key:e,staticClass:"vote-item"},[t._v(" "+t._s(t.dataSource.options[e])+" ")])})),0)]),t.dao.lp!==t.noLp?a("div",{staticClass:"token-wrap"},[a("div",{staticClass:"token-item",on:{click:function(e){return t.handleIsLp(!1)}}},[a("div",{class:{text:t.isLp}},[t._v(" "+t._s(t.$t("proposal.useToken"))+" ")])]),a("div",{staticClass:"token-item",on:{click:function(e){return t.handleIsLp(!0)}}},[a("div",{class:{text:!t.isLp}},[t._v(" "+t._s(t.$t("proposal.useLp"))+" ")])])]):t._e()]),a("div",{staticClass:"input-wrap"},[t.isLp?a("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("proposal.lpValue"))+t._s(t.$gbUtils.handleRound(t.lpToToken))+t._s(t.$t("proposal.ticket"))+" ")]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ticket,expression:"ticket"}],staticClass:"input",attrs:{"input-align":"center",placeholder:t.$t("common.pleaseInput"),type:"number"},domProps:{value:t.ticket},on:{input:function(e){e.target.composing||(t.ticket=e.target.value)}}}),a("div",{staticClass:"account"},[t._v(t._s(t.$t("proposal.balance")))]),t.isLp?a("div",{staticClass:"account-value",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatBalance(t.lpBalance))+" LP≈"+t._s(t.$gbUtils.formatBalance(t.lpBalance*t.lpToToken))+t._s(t.$t("proposal.ticket"))+" ")]):a("div",{staticClass:"account-value",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatBalance(t.tokenBalance))+t._s(t.tokenName)+"≈"+t._s(t.$gbUtils.formatBalance(t.tokenBalance))+t._s(t.$t("proposal.ticket"))+" ")])]),a("div",{staticClass:"btn-group _flex"},[t.isLp?a("VanButton",{staticClass:"button",attrs:{loading:t.btnLoading,disabled:t.authLp},on:{click:t.approveLP}},[t._v(t._s(t.$t("proposal.authLp")))]):a("VanButton",{staticClass:"button",attrs:{loading:t.btnLoading,disabled:t.authToken},on:{click:t.approveToken}},[t._v(t._s(t.$t("proposal.auth")))]),a("VanButton",{staticClass:"button",attrs:{disabled:t.ticket<=0||!t.isLp&&!t.authToken||t.isLp&&!t.authLp,loading:t.btnLoading},on:{click:t.handleVote}},[t._v(t._s(t.$t("proposal.stake")))])],1),a("div",{staticClass:"notice"},[t._v(t._s(t.$t("proposal.stakeNotice")))])])},G=[],K=(a("d81d"),a("1f5d")),Q=a("f645"),X={name:"",props:["options","dataSource","dao"],data:function(){return{show:!0,ticket:null,isSingle:!1,isLp:!1,noLp:"0x0000000000000000000000000000000000000000",tokenBalance:0,lpBalance:0,btnLoading:!1,authToken:!1,authLp:!1,lpToToken:0,tokenName:""}},methods:{closePop:function(){this.$emit("close")},handleIsLp:function(t){this.isLp=t},getTokenName:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,K["a"].getSymbol(t.dao.token);case 2:if(a=e.sent,a.success){e.next=5;break}return e.abrupt("return");case 5:t.tokenName=a.result;case 6:case"end":return e.stop()}}),e)})))()},getTokenInfo:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,K["a"].balanceOf(t.dao.token);case 2:a=e.sent,a.success&&(t.tokenBalance=a.result);case 4:case"end":return e.stop()}}),e)})))()},getLpInfo:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,K["a"].balanceOf(t.dao.lp);case 2:a=e.sent,a.success&&(t.lpBalance=a.result,console.log("this.lpBalance",t.lpBalance));case 4:case"end":return e.stop()}}),e)})))()},handleVote:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a,s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,a=[],t.options.forEach((function(e){a.push(t.$web3.toWei(t.ticket/t.options.length))})),console.log(t.amounts),e.next=6,_["a"].vote(t.dataSource.daoAt,t.dataSource.index,t.isLp,t.options,a);case 6:if(s=e.sent,t.btnLoading=!1,s.success){e.next=10;break}return e.abrupt("return");case 10:t.isLp&&(console.log("this.isLp",t.isLp),console.log("this.lpToToken",t.lpToToken),a=a.map((function(e){return console.log(e),console.log("+item * +this.lpToToken",+e*+t.lpToToken),+e*+t.lpToToken}))),t.$toast("success"),t.$emit("success",a),t.closePop();case 14:case"end":return e.stop()}}),e)})))()},getTokenAllowance:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,console.log("this.dao.token",t.dao.token),e.next=4,K["a"].allowance(t.dao.token,Q["a"].daoAddress);case 4:a=e.sent,a.success&&(t.authToken=a.result>0),t.btnLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},getLpAlllowance:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,e.next=3,K["a"].allowance(t.dao.lp,Q["a"].daoAddress);case 3:a=e.sent,a.success&&(t.authLp=a.result>0),t.btnLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},approveToken:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,e.next=3,K["a"].approve(t.dao.token,Q["a"].daoAddress,1e17);case 3:if(a=e.sent,t.btnLoading=!1,a.success){e.next=7;break}return e.abrupt("return",t.$toast(a.message.message));case 7:t.authToken=!0;case 8:case"end":return e.stop()}}),e)})))()},approveLP:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,e.next=3,K["a"].approve(t.dao.lp,Q["a"].daoAddress,1e17);case 3:if(a=e.sent,t.btnLoading=!1,a.success){e.next=7;break}return e.abrupt("return",t.$toast(a.message.message));case 7:t.authLp=!0;case 8:case"end":return e.stop()}}),e)})))()},getLpTicket:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["a"].lpToTokenPrice(t.dao.lp,t.dao.token);case 2:if(a=e.sent,a.success){e.next=5;break}return e.abrupt("return");case 5:t.lpToToken=a.result;case 6:case"end":return e.stop()}}),e)})))()}},watch:{isLp:function(t){t&&this.getLpAlllowance()}},mounted:function(){this.isSingle=!this.dataSource.mutilOption,this.getTokenInfo(),this.getTokenName(),this.getTokenAllowance(),this.dao.lp!==this.noLp&&(this.getLpInfo(),this.getLpTicket())}},tt=X,et=(a("696d"),Object(v["a"])(tt,Z,G,!1,null,"1cfa1fba",null)),at=et.exports,st=a("4360"),ot={name:"",data:function(){return{voteShow:!1,options:[],currentDao:{},dataSource:{},tokenName:"",pageSize:0,voteList:[],voteMembers:[],voteNum:0,timeStatus:0,myVoteList:[],myTotalVote:0,isVote:!1,isRedeem:!1,lpToToken:0}},computed:Object(r["a"])({},Object(k["c"])(["daoList","proposalDetail"])),methods:{handleVoteShow:function(t){this.options=t,this.voteShow=!this.voteShow},getTokenInfo:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,K["a"].getSymbol(t.currentDao.token);case 2:a=e.sent,a.success&&(t.tokenName=a.result);case 4:case"end":return e.stop()}}),e)})))()},proposalFinsh:function(){this.dataSource.status="20"},handleVoteSuccess:function(t){var e=this;this.dataSource.mutilOption?this.options.forEach((function(a,s){var o=e.$refs.DiverseVote.voteArr.findIndex((function(t){return+a===+t.index}));e.$refs.DiverseVote.voteArr[o].num=+e.$refs.DiverseVote.voteArr[o].num+ +t[s],e.$refs.DiverseVote.totalVotes+=+t[s]})):this.options.forEach((function(a,s){var o=e.$refs.SingleVote.voteArr.findIndex((function(t){return+a===+t.index}));e.$refs.SingleVote.voteArr[o].num=+e.$refs.SingleVote.voteArr[o].num+ +t[s],e.$refs.SingleVote.totalVotes+=+t[s]}))},getLpTicket:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["a"].lpToTokenPrice(t.currentDao.lp,t.currentDao.token);case 2:if(a=e.sent,a.success){e.next=5;break}return e.abrupt("return");case 5:t.lpToToken=a.result;case 6:case"end":return e.stop()}}),e)})))()},getVoteList:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a,s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$emit("changeLoading",!0),t.$emit("changeLoadingIconType",1),e.next=4,_["a"].voteRecordList(t.dataSource.daoAt,t.dataSource.index,0,1e3);case 4:a=e.sent,s=0;case 6:if(!(s<a.result.length)){e.next=14;break}if("0x0000000000000000000000000000000000000000"!==a.result[s].voter){e.next=9;break}return e.abrupt("break",14);case 9:t.voteMembers.push(a.result[s].voter),t.voteList.push(a.result[s]);case 11:s++,e.next=6;break;case 14:t.$emit("changeLoading",!1),Object(c["a"])({dao:t.dataSource.daoAt,id:t.dataSource.daoAt+"_"+t.dataSource.index}).then((function(e){e.data.proposalEntities.length>0?t.voteNum=e.data.proposalEntities[0].votePerson:t.voteNum=0}));case 16:case"end":return e.stop()}}),e)})))()},getVoteRecords:function(){var t=this;return Object(i["a"])(Object(n["a"])().mark((function e(){var a;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=[],e.next=3,Object(c["c"])({creator:st["a"].state.myAccount,daoId:t.dataSource.daoAt,proposal:t.dataSource.daoAt+"_"+t.dataSource.index}).then((function(e){e.data.userProposalRecordEntities.length>0&&(t.isRedeem=e.data.userProposalRecordEntities[0].redeemStatus)}));case 3:Object(c["b"])({voter:st["a"].state.myAccount,daoId:t.dataSource.daoAt,proposal:t.dataSource.daoAt+"_"+t.dataSource.index}).then((function(e){a=e.data.userProposalOptionRecordEntities;for(var s=function(e){if("0x0000000000000000000000000000000000000000"===a[e].voter)return"break";t.isVote=!0;var s=a[e].options.split("&"),o=a[e].amounts.split("&");s.forEach((function(s,n){+a[e].lpAmount?t.myVoteList[s].amount+=+o[n]*+t.lpToToken:t.myVoteList[s].amount+=+o[n]})),t.myTotalVote+=+a[e].tokenAmount},o=0;o<a.length;o++){var n=s(o);if("break"===n)break}}));case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.dataSource=this.proposalDetail;var e=localStorage.getItem("daoIndex")||0;this.currentDao=this.daoList[e]||this.daoList[0],"0x0000000000000000000000000000000000000000"!==this.currentDao.lp&&this.getLpTicket(),this.dataSource.options.forEach((function(e){t.myVoteList.push({name:e,amount:0})})),this.getVoteRecords(),this.getVoteList(),this.getTokenInfo(),this.timeStatus=+this.$route.query.status},components:{VoteTime:h,VoteRecords:W,ProposalInfo:T,MyVote:C,DiverseVote:Y,SingleVote:D,VotePop:at}},nt=ot,it=(a("382a"),Object(v["a"])(nt,s,o,!1,null,"c554e920",null));e["default"]=it.exports},bf6b:function(t,e,a){"use strict";a("be50")},c52a:function(t,e,a){"use strict";a("9e58")},c740:function(t,e,a){"use strict";var s=a("23e7"),o=a("b727").findIndex,n=a("44d2"),i="findIndex",r=!0;i in[]&&Array(1)[i]((function(){r=!1})),s({target:"Array",proto:!0,forced:r},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(i)},cf77:function(t,e,a){"use strict";a("34c1")}}]);
//# sourceMappingURL=chunk-c17666c2.34155690.js.map