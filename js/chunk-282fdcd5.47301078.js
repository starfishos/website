(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-282fdcd5"],{"0288":function(t,e,a){"use strict";a("c9e3")},"0cc1":function(t,e,a){},"12fe":function(t,e,a){"use strict";a("0cc1")},"142a":function(t,e,a){},2909:function(t,e,a){"use strict";function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}function n(t){if(Array.isArray(t))return s(t)}a.d(e,"a",(function(){return c}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}a("fb6a"),a("b0c0"),a("ac1f"),a("00b4");function r(t,e){if(t){if("string"===typeof t)return s(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(t,e):void 0}}a("d9e2");function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||o(t)||r(t)||i()}},"34c1":function(t,e,a){},"4df4":function(t,e,a){"use strict";var s=a("da84"),n=a("0366"),o=a("c65b"),r=a("7b0b"),i=a("9bdd"),c=a("e95a"),u=a("68ee"),l=a("07fa"),d=a("8418"),p=a("9a1f"),m=a("35a1"),v=s.Array;t.exports=function(t){var e=r(t),a=u(this),s=arguments.length,f=s>1?arguments[1]:void 0,h=void 0!==f;h&&(f=n(f,s>2?arguments[2]:void 0));var b,g,_,k,S,w,C=m(e),L=0;if(!C||this==v&&c(C))for(b=l(e),g=a?new this(b):v(b);b>L;L++)w=h?f(e[L],L):e[L],d(g,L,w);else for(k=p(e,C),S=k.next,g=a?new this:[];!(_=o(S,k)).done;L++)w=h?i(k,f,[_.value,L],!0):_.value,d(g,L,w);return g.length=L,g}},"5afc":function(t,e,a){"use strict";a("d7842")},"696d":function(t,e,a){"use strict";a("142a")},"9bdd":function(t,e,a){var s=a("825a"),n=a("2a62");t.exports=function(t,e,a,o){try{return o?e(s(a)[0],a[1]):e(a)}catch(r){n(t,"throw",r)}}},"9e58":function(t,e,a){},a630:function(t,e,a){var s=a("23e7"),n=a("4df4"),o=a("1c7e"),r=!o((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:r},{from:n})},ab36:function(t,e,a){var s=a("861d"),n=a("9112");t.exports=function(t,e){s(e)&&"cause"in e&&n(t,"cause",e.cause)}},b980:function(t,e,a){var s=a("d039"),n=a("5c6c");t.exports=!s((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",n(1,7)),7!==t.stack)}))},be50:function(t,e,a){},bea6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"proposal-detail-info"},[a("ProposalInfo",{attrs:{dataSource:t.dataSource,dao:t.currentDao,tokenName:t.tokenName,timeStatus:t.timeStatus,isRedeem:t.isRedeem}}),t.isVote||2===t.timeStatus&&"10"===t.dataSource.status?a("MyVote",{attrs:{dataSource:t.dataSource,myVoteList:t.myVoteList,myTotalVote:t.myTotalVote,tokenName:t.tokenName,timeStatus:t.timeStatus,voteMembers:t.voteNum,isRedeem:t.isRedeem,isVote:t.isVote},on:{proposalFinsh:t.proposalFinsh}}):t._e(),t.dataSource.mutilOption?a("DiverseVote",{ref:"DiverseVote",attrs:{dataSource:t.dataSource,dao:t.currentDao,tokenName:t.tokenName,timeStatus:t.timeStatus},on:{show:t.handleVoteShow}}):a("SingleVote",{ref:"SingleVote",attrs:{dataSource:t.dataSource,dao:t.currentDao,tokenName:t.tokenName,timeStatus:t.timeStatus},on:{show:t.handleVoteShow}}),t.timeStatus&&t.voteList.length>0?a("VoteRecords",{attrs:{dataSource:t.dataSource,dao:t.currentDao,voteList:t.voteList,tokenName:t.tokenName,voteMembers:t.voteNum}}):t._e(),a("VoteTime",{attrs:{dataSource:t.dataSource}}),t.voteShow?a("VotePop",{attrs:{dataSource:t.dataSource,options:t.options,dao:t.currentDao},on:{close:t.handleVoteShow,success:t.handleVoteSuccess}}):t._e()],1)},n=[],o=a("1da1"),r=a("5530"),i=(a("d3b7"),a("159b"),a("c740"),a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"time-info"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("proposal.info")))]),a("div",{staticClass:"item"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("proposal.startTime")))]),a("div",{staticClass:"value"},[t._v(" "+t._s(t.starTime)+" ")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"key"},[t._v(t._s(t.$t("proposal.endTime")))]),a("div",{staticClass:"value"},[t._v(" "+t._s(t.endTime)+" ")])])])}),c=[],u={props:["dataSource"],name:"",data:function(){return{starTime:"",endTime:""}},methods:{},watch:{dataSource:function(t){console.log("val",t),this.starTime=this.$moment(1e3*t.uintParams[3]).format("YYYY-MM-DD HH:mm:ss"),this.endTime=this.$moment(1e3*t.uintParams[4]).format("YYYY-MM-DD HH:mm:ss")}},mounted:function(){this.dataSource.uintParams&&(this.starTime=this.$moment(1e3*this.dataSource.uintParams[3]).format("YYYY-MM-DD HH:mm:ss"),this.endTime=this.$moment(1e3*this.dataSource.uintParams[4]).format("YYYY-MM-DD HH:mm:ss"))}},l=u,d=(a("12fe"),a("2877")),p=Object(d["a"])(l,i,c,!1,null,"f1966534",null),m=p.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-vote"},[t.isVote?a("div",{staticClass:"title"},[t._v(t._s(t.$t("proposal.yourVote")))]):t._e(),t._l(t.myVoteList,(function(e,s){return a("div",{key:s,staticClass:"key-value"},[e.amount?a("div",{staticClass:"for-wrap"},[a("div",{staticClass:"key",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatBalance(e.amount/1e18))+" "+t._s(t.$t("proposal.ticket"))+" ")]),a("div",{staticClass:"value ellipsis"},[a("div",{staticClass:"text"},[t._v(" "+t._s(e.name)+" ")])])]):t._e()])})),2===t.timeStatus&&t.myTotalVote&&t.totalReward?a("div",{staticClass:"reward"},[t._v(" "+t._s(t.$t("proposal.get"))+" "),a("span",{attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatBalance(t.myTotalVote/t.dataSource.totalVote*t.totalReward/1e18))+" "+t._s(t.tokenName))])]):t._e(),2!==t.timeStatus&&4!==t.timeStatus||"10"!==t.status?t._e():a("div",{staticClass:"btn-group"},[a("VanButton",{staticClass:"button",class:{"end-btn":t.isVote},attrs:{loading:t.btnLoading},on:{click:t.handleProposalFinsh}},[t._v(t._s(t.$t("proposal.endProposal")))])],1),2!==t.timeStatus&&4!==t.timeStatus||!t.redeemStatus?t._e():a("div",{staticClass:"btn-group"},[t.myVoteList.length?a("VanButton",{staticClass:"button",attrs:{loading:t.btnLoading,disabled:"10"===t.status},on:{click:t.handleRedeem}},["10"===t.status?a("span",[t._v(t._s(t.$t("proposal.waitFinish")))]):"20"===t.status?a("span",[t._v(t._s(t.$t("proposal.redeem")))]):t._e()]):t._e()],1)],2)},f=[],h=a("fcfc"),b=a("2f62"),g={props:["myVoteList","dataSource","tokenName","timeStatus","voteMembers","isRedeem","isVote","myTotalVote"],name:"",data:function(){return{totalReward:0,btnLoading:!1,voteList:[],status:"",redeemStatus:!1}},computed:Object(r["a"])({},Object(b["c"])(["myAccount"])),methods:{handleRedeem:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,e.next=3,h["a"].voteFinsh(t.dataSource.daoAt,t.dataSource.index);case 3:a=e.sent,t.btnLoading=!1,a.success&&(t.redeemStatus=!1);case 6:case"end":return e.stop()}}),e)})))()},handleProposalFinsh:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,console.log("this.dataSource.daoAt",t.dataSource.daoAt),console.log("this.dataSource.index",t.dataSource.index),e.next=5,h["a"].proposalFinsh(t.dataSource.daoAt,t.dataSource.index);case 5:if(a=e.sent,t.btnLoading=!1,a.success){e.next=9;break}return e.abrupt("return");case 9:t.status="20",t.$emit("proposalFinsh"),t.$toast("success");case 12:case"end":return e.stop()}}),e)})))()}},watch:{myVoteList:function(t){this.voteList=t;var e=this.dataSource.uintParams;this.totalReward=+e[2],this.status=this.dataSource.status,this.uintParams=this.dataSource.uintParams}},mounted:function(){this.voteList=this.myVoteList;var t=this.dataSource.uintParams;this.status=this.dataSource.status,this.redeemStatus=this.isRedeem,t&&(this.totalReward=+t[2])}},_=g,k=(a("5afc"),Object(d["a"])(_,v,f,!1,null,"5d09414e",null)),S=k.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[t._v(t._s(t.proposalInfo[0]))]),a("div",{staticClass:"vote-info"},[0===t.timeStatus?a("div",{staticClass:"status status1"},[t._v(" "+t._s(t.$t("proposal.wairStart"))+" ")]):1===t.timeStatus?a("div",{staticClass:"status"},[t._v(" "+t._s(t.$t("proposal.voting"))+" ")]):4===t.timeStatus?a("div",{staticClass:"status status4"},[t._v(" "+t._s(t.$t("proposal.waitRedeem"))+" ")]):a("div",{staticClass:"status status2"},[t._v(t._s(t.$t("proposal.ended")))]),a("div",{staticClass:"dao-info"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.daoParams[0],alt:""}})]),"ZH"===t.lang?a("div",{staticClass:"name"},[t._v(" "+t._s(t.daoParams[1])+" ")]):a("div",{staticClass:"name"},[t._v(t._s(t.daoParams[2]))])])]),+t.uintParams[2]?a("div",{staticClass:"reward"},[t._v(" "+t._s(t.$t("proposal.voteReward"))+":"+t._s(+t.uintParams[2]/1e18)+" "+t._s(t.tokenName)+" ")]):t._e(),a("div",{staticClass:"content"},[t._v(" "+t._s(t.proposalInfo[1])+" ")]),a("div",{staticClass:"address",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatAddress(t.dataSource.initiate,"...","6"))+t._s(t.$t("proposal.initiate"))+" ")]),t.dataSource.initiate&&t.dataSource.initiate.toUpperCase()===t.myAccount.toUpperCase()&&!t.timeStatus?a("div",{staticClass:"button",on:{click:t.handleModify}},[t._v(" "+t._s(t.$t("proposal.modify"))+" ")]):t._e()])},C=[],L={props:["dataSource","dao","tokenName","timeStatus","isRedeem"],name:"",data:function(){return{daoInfo:{},daoParams:{},proposalInfo:{},redeemStatus:!0,uintParams:[]}},methods:Object(r["a"])(Object(r["a"])({},Object(b["b"])(["chanegProposalDetail"])),{},{handleModify:function(){var t=this.dataSource;t.token=this.dao.token,this.chanegProposalDetail(t),this.$gbUtils.handleToPage("/modifyProposal")}}),computed:Object(r["a"])({},Object(b["c"])(["lang","myAccount"])),mounted:function(){this.daoInfo=this.dao,this.daoParams=this.daoInfo.params,this.proposalInfo=this.dataSource.name_desc,this.redeemStatus=this.isRedeem,this.uintParams=this.dataSource.uintParams},watch:{dao:function(t){this.daoInfo=t,this.daoParams=t.params},dataSource:function(t){this.proposalInfo=t.name_desc,this.uintParams=t.uintParams,this.redeemStatus=this.isRedeem}}},x=L,V=(a("e89f"),Object(d["a"])(x,w,C,!1,null,"f4578be8",null)),$=V.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[1===t.timeStatus?a("div",{staticClass:"vote"},[t._l(t.dataSource.options,(function(e,s){return a("div",{key:s,staticClass:"item",on:{click:function(e){return t.handleSelectVote(s)}}},[a("div",{staticClass:"center",class:{"item-content":t.options!==s}},[t._v(" "+t._s(e)+" ")])])})),a("VanButton",{staticClass:"button",attrs:{disabled:t.options.length<=0},on:{click:t.handleShowVote}},[t._v(t._s(t.$t("proposal.vote")))])],2):t._e(),a("div",{staticClass:"vote-info"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("proposal.result")))]),t._l(t.voteArr,(function(e){return a("div",{key:e.index,staticClass:"item"},[a("div",{staticClass:"item-info"},[a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"usdt",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatTwoBalance(e.num/1e18))+t._s(t.$t("proposal.ticket"))+" ")]),a("div",{staticClass:"percent",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatTwoBalance(+e.num/t.totalVotes*100)||0)+"% ")])]),a("div",{staticClass:"line-bg"},[a("div",{staticClass:"line",style:{width:(+e.num/t.totalVotes*100||0)+"%"}})])])}))],2)])},T=[],R=a("2909"),A=(a("4e82"),{name:"",props:["dataSource","dao","tokenName","timeStatus"],data:function(){return{options:[],totalVotes:0,voteArr:[]}},methods:{handleSelectVote:function(t){this.options=t},handleShowVote:function(){var t=[];t.push(this.options),console.log("options",t),this.$emit("show",t)}},mounted:function(){},watch:{dataSource:function(t){var e=this;this.totalVotes=0,this.dataSource.votes.forEach((function(t,a){e.totalVotes+=parseInt(t),e.voteArr.push({index:a,num:t,name:e.dataSource.options[a]})})),this.voteArr=Object(R["a"])(this.voteArr).sort((function(t,e){return+e.num-+t.num}))}}}),O=A,P=(a("bf6b"),Object(d["a"])(O,y,T,!1,null,"5ddeb7ee",null)),j=P.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[1===t.timeStatus?a("div",{staticClass:"vote"},[t._l(t.dataSource.options,(function(e,s){return a("div",{key:s,staticClass:"item",on:{click:function(e){return t.handleSelectVote(s)}}},[a("div",{staticClass:"center",class:{"item-content":!t.options[s]}},[t._v(" "+t._s(e)+" ")])])})),a("VanButton",{staticClass:"button",attrs:{disabled:t.options.length<=0},on:{click:t.handleShowVote}},[t._v(" "+t._s(t.$t("proposal.vote"))+" ")])],2):t._e(),a("div",{staticClass:"vote-info"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("proposal.result")))]),t._l(t.voteArr,(function(e){return a("div",{key:e.index,staticClass:"item"},[a("div",{staticClass:"item-info"},[a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("div",{staticClass:"usdt",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatTwoBalance(e.num/1e18))+t._s(t.$t("proposal.ticket"))+" ")]),a("div",{staticClass:"percent",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatTwoBalance(+e.num/t.totalVotes*100)||0)+"% ")])]),a("div",{staticClass:"line-bg"},[a("div",{staticClass:"line",style:{width:(+e.num/t.totalVotes*100||0)+"%"}})])])}))],2)])},N=[],E={name:"",props:["dataSource","dao","timeStatus","tokenName"],data:function(){return{options:[],totalVotes:0,voteResult:[],voteArr:[]}},methods:{handleSelectVote:function(t){this.$set(this.options,t,!this.options[t])},handleShowVote:function(){var t=[];this.options.forEach((function(e,a){e&&t.push(a)})),this.$emit("show",t)}},watch:{dataSource:function(t){var e=this;this.totalVotes=0,this.dataSource.votes.forEach((function(t,a){e.totalVotes+=parseInt(t),e.voteArr.push({index:a,num:t,name:e.dataSource.options[a]})})),this.voteArr=Object(R["a"])(this.voteArr).sort((function(t,e){return+e.num-+t.num}))}},mounted:function(){var t=this;this.totalVotes=0,this.dataSource.votes.forEach((function(e,a){t.totalVotes+=parseInt(e),t.voteArr.push({index:a,num:e,name:t.dataSource.options[a]})})),this.voteArr=Object(R["a"])(this.voteArr).sort((function(t,e){return+e.num-+t.num}))}},D=E,B=(a("cf77"),Object(d["a"])(D,I,N,!1,null,"371b3ceb",null)),M=B.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vote-list"},[a("div",{staticClass:"title"},[a("div",{staticClass:"name"},[t._v(t._s(t.$t("proposal.voteRecords")))]),a("div",{staticClass:"joined"},[a("span",{attrs:{translate:"no"}},[t._v(t._s(t.voteNum)+" ")]),t._v(" "+t._s(t.$t("proposal.membersJoin"))+" ")])]),t._l(t.list,(function(e,s){return a("div",{key:s,staticClass:"vote-record"},[a("div",{staticClass:"record-info"},[a("div",{staticClass:"record-header"},[a("div",{staticClass:"address",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatAddress(e.voter))+" ")]),a("div",{staticClass:"usdt",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatTwoBalance(e.tokenAmount/1e18))+t._s(t.$t("proposal.ticket"))+" ")])]),a("div",{staticClass:"tag-group"},t._l(e.options,(function(e){return a("div",{key:e,staticClass:"tag"},[a("div",{staticClass:"text"},[t._v(" "+t._s(t.dataSource.options[e])+" ")])])})),0)])])})),this.list.length!==this.voteList.length?a("div",{staticClass:"button",on:{click:t.showMoer}},[t._v(" "+t._s(t.$t("proposal.more"))+" ")]):t._e()],2)},Y=[],F=(a("99af"),a("fb6a"),{props:["currentDao","dataSource","voteList","tokenName","voteMembers"],name:"",data:function(){return{voteNum:0,list:[]}},methods:{showMoer:function(){this.list.length!==this.voteList.length&&(this.list=this.list.concat(this.voteList.slice(10)),this.pageNumber++)}},mounted:function(){this.voteNum=this.voteMembers,this.list=this.voteList.slice(0,10),console.log("this.voteList",this.voteList)},watch:{voteMembers:function(t){console.log("val",t),this.voteNum=t,this.list=this.voteList.slice(0,10),this.pageNumber++}}}),H=F,z=(a("c52a"),Object(d["a"])(H,U,Y,!1,null,"9a1a1198",null)),J=z.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VanPopup",{staticStyle:{"box-sizing":"border-box",width:"93%","max-width":"350px",padding:"40px 40px",background:"#1f1d39"},attrs:{round:""},on:{"click-overlay":t.closePop},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"main-title"},[t._v(t._s(t.$t("proposal.vote")))]),a("div",{staticClass:"vote-select"},[t.isSingle?a("div",{staticClass:"single"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("proposal.voteOptions")))]),t._l(t.options,(function(e){return a("div",{key:e,staticClass:"vote-item"},[t._v(" "+t._s(t.dataSource.options[e])+" ")])}))],2):a("div",[a("div",{staticClass:"title"},[t._v(t._s(t.$t("proposal.voteOptions")))]),a("div",{staticClass:"select-wrap"},t._l(t.options,(function(e){return a("div",{key:e,staticClass:"vote-item"},[t._v(" "+t._s(t.dataSource.options[e])+" ")])})),0)]),t.dao.lp!==t.noLp?a("div",{staticClass:"token-wrap"},[a("div",{staticClass:"token-item",on:{click:function(e){return t.handleIsLp(!1)}}},[a("div",{class:{text:t.isLp}},[t._v(" "+t._s(t.$t("proposal.useToken"))+" ")])]),a("div",{staticClass:"token-item",on:{click:function(e){return t.handleIsLp(!0)}}},[a("div",{class:{text:!t.isLp}},[t._v(" "+t._s(t.$t("proposal.useLp"))+" ")])])]):t._e()]),a("div",{staticClass:"input-wrap"},[t.isLp?a("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("proposal.lpValue"))+t._s(t.$gbUtils.handleRound(t.lpToToken))+t._s(t.$t("proposal.ticket"))+" ")]):t._e(),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ticket,expression:"ticket"}],staticClass:"input",attrs:{"input-align":"center",placeholder:t.$t("common.pleaseInput"),type:"number"},domProps:{value:t.ticket},on:{input:function(e){e.target.composing||(t.ticket=e.target.value)}}}),a("div",{staticClass:"account"},[t._v(t._s(t.$t("proposal.balance")))]),t.isLp?a("div",{staticClass:"account-value",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatBalance(t.lpBalance))+" LP≈"+t._s(t.$gbUtils.formatBalance(t.lpBalance*t.lpToToken))+t._s(t.$t("proposal.ticket"))+" ")]):a("div",{staticClass:"account-value",attrs:{translate:"no"}},[t._v(" "+t._s(t.$gbUtils.formatBalance(t.tokenBalance))+t._s(t.tokenName)+"≈"+t._s(t.$gbUtils.formatBalance(t.tokenBalance))+t._s(t.$t("proposal.ticket"))+" ")])]),a("div",{staticClass:"btn-group _flex"},[t.isLp?a("VanButton",{staticClass:"button",attrs:{loading:t.btnLoading,disabled:t.authLp},on:{click:t.approveLP}},[t._v(t._s(t.$t("proposal.authLp")))]):a("VanButton",{staticClass:"button",attrs:{loading:t.btnLoading,disabled:t.authToken},on:{click:t.approveToken}},[t._v(t._s(t.$t("proposal.auth")))]),a("VanButton",{staticClass:"button",attrs:{disabled:t.ticket<=0||!t.isLp&&!t.authToken||t.isLp&&!t.authLp,loading:t.btnLoading},on:{click:t.handleVote}},[t._v(t._s(t.$t("proposal.stake")))])],1),a("div",{staticClass:"notice"},[t._v(t._s(t.$t("proposal.stakeNotice")))])])},W=[],Z=(a("d81d"),a("1f5d")),G=a("f645"),K={name:"",props:["options","dataSource","dao"],data:function(){return{show:!0,ticket:null,isSingle:!1,isLp:!1,noLp:"0x0000000000000000000000000000000000000000",tokenBalance:0,lpBalance:0,btnLoading:!1,authToken:!1,authLp:!1,lpToToken:0,tokenName:""}},methods:{closePop:function(){this.$emit("close")},handleIsLp:function(t){this.isLp=t},getTokenName:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Z["a"].getSymbol(t.dao.token);case 2:if(a=e.sent,a.success){e.next=5;break}return e.abrupt("return");case 5:t.tokenName=a.result;case 6:case"end":return e.stop()}}),e)})))()},getTokenInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Z["a"].balanceOf(t.dao.token);case 2:a=e.sent,a.success&&(t.tokenBalance=a.result);case 4:case"end":return e.stop()}}),e)})))()},getLpInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Z["a"].balanceOf(t.dao.lp);case 2:a=e.sent,a.success&&(t.lpBalance=a.result,console.log("this.lpBalance",t.lpBalance));case 4:case"end":return e.stop()}}),e)})))()},handleVote:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,a=[],t.options.forEach((function(e){a.push(t.$web3.toWei(t.ticket/t.options.length))})),console.log(t.amounts),e.next=6,h["a"].vote(t.dataSource.daoAt,t.dataSource.index,t.isLp,t.options,a);case 6:if(s=e.sent,t.btnLoading=!1,s.success){e.next=10;break}return e.abrupt("return");case 10:t.isLp&&(console.log("this.isLp",t.isLp),console.log("this.lpToToken",t.lpToToken),a=a.map((function(e){return console.log(e),console.log("+item * +this.lpToToken",+e*+t.lpToToken),+e*+t.lpToToken}))),t.$toast("success"),t.$emit("success",a),t.closePop();case 14:case"end":return e.stop()}}),e)})))()},getTokenAllowance:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,console.log("this.dao.token",t.dao.token),e.next=4,Z["a"].allowance(t.dao.token,G["a"].daoAddress);case 4:a=e.sent,a.success&&(t.authToken=a.result>0),t.btnLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},getLpAlllowance:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,e.next=3,Z["a"].allowance(t.dao.lp,G["a"].daoAddress);case 3:a=e.sent,a.success&&(t.authLp=a.result>0),t.btnLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},approveToken:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,e.next=3,Z["a"].approve(t.dao.token,G["a"].daoAddress,1e17);case 3:if(a=e.sent,t.btnLoading=!1,a.success){e.next=7;break}return e.abrupt("return",t.$toast(a.message.message));case 7:t.authToken=!0;case 8:case"end":return e.stop()}}),e)})))()},approveLP:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnLoading=!0,e.next=3,Z["a"].approve(t.dao.lp,G["a"].daoAddress,1e17);case 3:if(a=e.sent,t.btnLoading=!1,a.success){e.next=7;break}return e.abrupt("return",t.$toast(a.message.message));case 7:t.authLp=!0;case 8:case"end":return e.stop()}}),e)})))()},getLpTicket:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].lpToTokenPrice(t.dao.lp,t.dao.token);case 2:if(a=e.sent,a.success){e.next=5;break}return e.abrupt("return");case 5:t.lpToToken=a.result;case 6:case"end":return e.stop()}}),e)})))()}},watch:{isLp:function(t){t&&this.getLpAlllowance()}},mounted:function(){this.isSingle=!this.dataSource.mutilOption,this.getTokenInfo(),this.getTokenName(),this.getTokenAllowance(),this.dao.lp!==this.noLp&&(this.getLpInfo(),this.getLpTicket())}},Q=K,X=(a("696d"),Object(d["a"])(Q,q,W,!1,null,"1cfa1fba",null)),tt=X.exports,et={name:"",data:function(){return{voteShow:!1,options:[],currentDao:{},dataSource:{},tokenName:"",pageSize:0,voteList:[],voteMembers:[],voteNum:0,timeStatus:0,myVoteList:[],myTotalVote:0,isVote:!1,isRedeem:!1,lpToToken:0}},computed:Object(r["a"])({},Object(b["c"])(["daoList","proposalDetail"])),methods:{handleVoteShow:function(t){this.options=t,this.voteShow=!this.voteShow},getTokenInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Z["a"].getSymbol(t.currentDao.token);case 2:a=e.sent,a.success&&(t.tokenName=a.result);case 4:case"end":return e.stop()}}),e)})))()},proposalFinsh:function(){this.dataSource.status="20"},handleVoteSuccess:function(t){var e=this;this.dataSource.mutilOption?this.options.forEach((function(a,s){var n=e.$refs.DiverseVote.voteArr.findIndex((function(t){return+a===+t.index}));e.$refs.DiverseVote.voteArr[n].num=+e.$refs.DiverseVote.voteArr[n].num+ +t[s],e.$refs.DiverseVote.totalVotes+=+t[s]})):this.options.forEach((function(a,s){var n=e.$refs.SingleVote.voteArr.findIndex((function(t){return+a===+t.index}));e.$refs.SingleVote.voteArr[n].num=+e.$refs.SingleVote.voteArr[n].num+ +t[s],e.$refs.SingleVote.totalVotes+=+t[s]}))},getLpTicket:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].lpToTokenPrice(t.currentDao.lp,t.currentDao.token);case 2:if(a=e.sent,a.success){e.next=5;break}return e.abrupt("return");case 5:t.lpToToken=a.result;case 6:case"end":return e.stop()}}),e)})))()},getVoteList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$emit("changeLoading",!0),t.$emit("changeLoadingIconType",1),e.next=4,h["a"].voteRecordList(t.dataSource.daoAt,t.dataSource.index,0,1e3);case 4:a=e.sent,s=0;case 6:if(!(s<a.result.length)){e.next=14;break}if("0x0000000000000000000000000000000000000000"!==a.result[s].voter){e.next=9;break}return e.abrupt("break",14);case 9:t.voteMembers.push(a.result[s].voter),t.voteList.push(a.result[s]);case 11:s++,e.next=6;break;case 14:t.$emit("changeLoading",!1),t.voteNum=t.$_.uniq(t.voteMembers).length;case 16:case"end":return e.stop()}}),e)})))()},getVoteRecords:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].voteRecord(t.dataSource.daoAt,t.dataSource.index,100);case 2:a=e.sent,s=function(e){if("0x0000000000000000000000000000000000000000"===a.result[e].voter)return"break";t.isVote=!0,t.isRedeem=a.result[e].status,a.result[e].options.forEach((function(s,n){console.log("+resp.result[i].tokenAmount",+a.result[e].tokenAmount),+a.result[e].lpAmount?(console.log("lp"),t.myVoteList[s].amount+=+a.result[e].amounts[n]*+t.lpToToken):(console.log("token"),t.myVoteList[s].amount+=+a.result[e].amounts[n])})),console.log(" this.myVoteList",t.myVoteList),t.myTotalVote+=+a.result[e].tokenAmount},n=0;case 5:if(!(n<a.result.length)){e.next=12;break}if(o=s(n),"break"!==o){e.next=9;break}return e.abrupt("break",12);case 9:n++,e.next=5;break;case 12:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.dataSource=this.proposalDetail;var e=localStorage.getItem("daoIndex")||0;this.currentDao=this.daoList[e]||this.daoList[0],"0x0000000000000000000000000000000000000000"!==this.currentDao.lp&&this.getLpTicket(),this.dataSource.options.forEach((function(e){t.myVoteList.push({name:e,amount:0})})),this.getVoteRecords(),this.getVoteList(),this.getTokenInfo(),this.timeStatus=+this.$route.query.status},components:{VoteTime:m,VoteRecords:J,ProposalInfo:$,MyVote:S,DiverseVote:M,SingleVote:j,VotePop:tt}},at=et,st=(a("0288"),Object(d["a"])(at,s,n,!1,null,"73a5fd20",null));e["default"]=st.exports},bf6b:function(t,e,a){"use strict";a("be50")},c52a:function(t,e,a){"use strict";a("9e58")},c740:function(t,e,a){"use strict";var s=a("23e7"),n=a("b727").findIndex,o=a("44d2"),r="findIndex",i=!0;r in[]&&Array(1)[r]((function(){i=!1})),s({target:"Array",proto:!0,forced:i},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o(r)},c770:function(t,e,a){var s=a("e330"),n=Error,o=s("".replace),r=function(t){return String(n(t).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,c=i.test(r);t.exports=function(t,e){if(c&&"string"==typeof t&&!n.prepareStackTrace)while(e--)t=o(t,i,"");return t}},c9e3:function(t,e,a){},cf77:function(t,e,a){"use strict";a("34c1")},d28b:function(t,e,a){var s=a("746f");s("iterator")},d7842:function(t,e,a){},d81d:function(t,e,a){"use strict";var s=a("23e7"),n=a("b727").map,o=a("1dde"),r=o("map");s({target:"Array",proto:!0,forced:!r},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},d9e2:function(t,e,a){var s=a("23e7"),n=a("da84"),o=a("2ba4"),r=a("e5cb"),i="WebAssembly",c=n[i],u=7!==Error("e",{cause:7}).cause,l=function(t,e){var a={};a[t]=r(t,e,u),s({global:!0,arity:1,forced:u},a)},d=function(t,e){if(c&&c[t]){var a={};a[t]=r(i+"."+t,e,u),s({target:i,stat:!0,arity:1,forced:u},a)}};l("Error",(function(t){return function(e){return o(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return o(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return o(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return o(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return o(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return o(t,this,arguments)}})),l("URIError",(function(t){return function(e){return o(t,this,arguments)}})),d("CompileError",(function(t){return function(e){return o(t,this,arguments)}})),d("LinkError",(function(t){return function(e){return o(t,this,arguments)}})),d("RuntimeError",(function(t){return function(e){return o(t,this,arguments)}}))},e01a:function(t,e,a){"use strict";var s=a("23e7"),n=a("83ab"),o=a("da84"),r=a("e330"),i=a("1a2d"),c=a("1626"),u=a("3a9b"),l=a("577e"),d=a("9bf2").f,p=a("e893"),m=o.Symbol,v=m&&m.prototype;if(n&&c(m)&&(!("description"in v)||void 0!==m().description)){var f={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(v,this)?new m(t):void 0===t?m():m(t);return""===t&&(f[e]=!0),e};p(h,m),h.prototype=v,v.constructor=h;var b="Symbol(test)"==String(m("test")),g=r(v.toString),_=r(v.valueOf),k=/^Symbol\((.*)\)[^)]+$/,S=r("".replace),w=r("".slice);d(v,"description",{configurable:!0,get:function(){var t=_(this),e=g(t);if(i(f,t))return"";var a=b?w(e,7,-1):S(e,k,"$1");return""===a?void 0:a}}),s({global:!0,forced:!0},{Symbol:h})}},e391:function(t,e,a){var s=a("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:s(t)}},e5cb:function(t,e,a){"use strict";var s=a("d066"),n=a("1a2d"),o=a("9112"),r=a("3a9b"),i=a("d2bb"),c=a("e893"),u=a("aeb0"),l=a("7156"),d=a("e391"),p=a("ab36"),m=a("c770"),v=a("b980"),f=a("83ab"),h=a("c430");t.exports=function(t,e,a,b){var g="stackTraceLimit",_=b?2:1,k=t.split("."),S=k[k.length-1],w=s.apply(null,k);if(w){var C=w.prototype;if(!h&&n(C,"cause")&&delete C.cause,!a)return w;var L=s("Error"),x=e((function(t,e){var a=d(b?e:t,void 0),s=b?new w(t):new w;return void 0!==a&&o(s,"message",a),v&&o(s,"stack",m(s.stack,2)),this&&r(C,this)&&l(s,this,x),arguments.length>_&&p(s,arguments[_]),s}));if(x.prototype=C,"Error"!==S?i?i(x,L):c(x,L,{name:!0}):f&&g in w&&(u(x,w,g),u(x,w,"prepareStackTrace")),c(x,w),!h)try{C.name!==S&&o(C,"name",S),C.constructor=x}catch(V){}return x}}},e89f:function(t,e,a){"use strict";a("ed80")},ed80:function(t,e,a){}}]);
//# sourceMappingURL=chunk-282fdcd5.47301078.js.map