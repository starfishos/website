(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13b5a9f6"],{"0f58":function(t,a,e){"use strict";e("f24e")},"6ab7":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dao-detail"},[0===t.myDaoList.length?e("NoDao"):e("div",{staticClass:"detail-wrap"},[e("DetailHeader",{attrs:{daoList:t.myDaoList,dataSource:t.currentDao},on:{show:t.handleDetailShow,change:t.handleChangeDaoAt},model:{value:t.currentDao.name,callback:function(a){t.$set(t.currentDao,"name",a)},expression:"currentDao.name"}}),t._l(t.proposalList,(function(a){return e("ProposalItem",{key:a.title,attrs:{dataSource:a,tokenName:t.tokenName}})})),t.detailShow?e("DaoDetail",{attrs:{dataSource:t.currentDao,lang:t.lang},on:{close:t.handleDetailShow}}):t._e()],2),t.myDaoList.length>0&&t.proposalList.length<=0?e("Empty"):t._e()],1)},i=[],n=e("2909"),o=e("1da1"),r=e("5530"),c=(e("d3b7"),e("159b"),e("b0c0"),e("4e82"),e("96cf"),e("873b")),u=e("fcfc"),l=e("1f5d"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Empty",[e("div",{staticClass:"no-dao-pop"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("dao.noDaotitle")))]),e("div",{staticClass:"button-group"},[e("div",{staticClass:"btn1 btn",on:{click:function(a){return t.$gbUtils.handleToPage("/dao")}}},[t._v(" "+t._s(t.$t("dao.joinDao"))+" ")]),e("div",{staticClass:"btn2 btn",on:{click:function(a){return t.$gbUtils.handleToPage("/createDao")}}},[t._v(" "+t._s(t.$t("dao.createDao"))+" ")])])])])],1)},h=[],m={components:{Empty:c["a"]},name:"",data:function(){return{}},methods:{},mounted:function(){}},p=m,f=(e("a5d1"),e("2877")),g=Object(f["a"])(p,d,h,!1,null,"785ff92d",null),v=g.exports,_=e("2030"),S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"detail-header"},[e("div",{staticClass:"dao-introduce",on:{click:t.handleDetailShow}},[t._v(" "+t._s(t.$t("proposal.daoIntroduce"))+" ")]),e("div",{staticClass:"dao-introduce",on:{click:t.handleToProposal}},[t._v(" "+t._s(t.$t("proposal.putProposal"))+" ")])]),e("div",{staticClass:"select",on:{click:t.handleDaoPopShow}},[e("img",{attrs:{src:t.dataSource.params[0],alt:""}}),e("div",{staticClass:"name ellipsis"},[t._v(t._s(t.currentSelect))]),e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#xiangxiajiantou"}})])]),t.daoPopShow?e("CommomPop",{attrs:{closeIcon:!0},on:{close:function(a){t.daoPopShow=!1}}},[e("div",{staticClass:"dao-title"},[t._v(t._s(t.$t("dao.daoSelect")))]),e("div",{staticClass:"menu-box"},t._l(t.daoList,(function(a,s){return e("div",{key:a.token,staticClass:"menu-item ellipsis",class:{active:t.currentSelect===a.name},on:{click:function(e){return t.onConfirm(a,s)}}},[t._v(" "+t._s(a.name)+" ")])})),0)]):t._e()],1)},b=[],w=e("9598"),D={name:"",props:["daoList","value","dataSource"],components:{CommomPop:w["a"]},data:function(){return{currentSelect:"",currentDaoAt:0,daoPopShow:!1,show:!0}},methods:{handleDaoPopShow:function(){this.daoPopShow=!this.daoPopShow},onConfirm:function(t,a){this.handleDaoPopShow(),this.currentDaoAt=t.daoAt,this.$emit("change",t,a)},handleDetailShow:function(t){this.$emit("show",t)},handleToProposal:function(){console.log("this.currentDaoAt",this.dataSource.daoAt),this.$gbUtils.handleToPage("/applyProposal?daoAt=".concat(this.dataSource.daoAt))}},watch:{value:function(t){this.currentSelect=t}},mounted:function(){console.log("daoList",this.daoList),this.currentSelect=this.value}},L=D,C=(e("0f58"),Object(f["a"])(L,S,b,!1,null,"be8687f2",null)),T=C.exports,$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"proposal-wrap",on:{click:t.handleToDetail}},[e("div",{staticClass:"item-header"},[e("div",{staticClass:"time-info"},[0===t.timeStatus?e("div",{staticClass:"status-wrap"},[e("div",{staticClass:"status status1"},[t._v(t._s(t.$t("proposal.waitStart")))]),t.startTime?e("div",{staticClass:"time"},[t._v(" "+t._s(t.$t("proposal.left"))+t._s(t.startTime)+" ")]):t._e()]):1===t.timeStatus?e("div",{staticClass:"status-wrap"},[e("div",{staticClass:"status"},[t._v(t._s(t.$t("proposal.voting")))]),e("div",{staticClass:"time"},[t._v(t._s(t.$t("proposal.left"))+t._s(t.endTime))])]):e("div",{staticClass:"status status2"},[t._v(t._s(t.$t("proposal.ended")))])]),e("div",{staticClass:"address"},[t._v(" "+t._s(t.$gbUtils.formatAddress(t.dataSource.initiate))+t._s(t.$t("proposal.initiate"))+" ")])]),e("div",{staticClass:"title"},[t._v(" "+t._s(t.dataSource.name_desc[0])+" ")]),e("div",{staticClass:"content ellipsis-3"},[t._v(" "+t._s(t.dataSource.name_desc[1])+" ")]),e("div",{staticClass:"bottom"},[e("div",{staticClass:"tag-group"},[e("div",{staticClass:"tag",class:"type"+t.type},[t._v(" "+t._s(t.list1[t.type])+" ")]),e("div",{staticClass:"tag",class:"tag"+t.tag},[t._v(" "+t._s(t.list2[t.tag])+" ")]),t.isReward?e("div",{staticClass:"tag pink-bg"},[t._v(" "+t._s(t.voteReward)+" ")]):t._e()]),e("div",{staticClass:"info"},[t._v(" "+t._s(t.$gbUtils.formatBalance(t.dataSource.totalVote/1e18))+" "),e("span",[t._v(t._s(t.$t("proposal.ticket")))])])])])},k=[],x=e("2f62"),P={name:"",props:["dataSource","tokenName"],data:function(){return{nowTime:0,startTime:"",endTime:"",startTimeArr:"",endTimeArr:"",type:0,tag:0,isReward:!1,timeStatus:0}},computed:Object(r["a"])(Object(r["a"])({},Object(x["c"])(["lang"])),{},{list1:function(){return this.$t("proposal.list1")},list2:function(){return this.$t("proposal.list2")},voteReward:function(){return this.$t("proposal.voteReward")}}),methods:Object(r["a"])(Object(r["a"])({},Object(x["b"])(["chanegProposalDetail"])),{},{handleToDetail:function(){this.chanegProposalDetail(this.dataSource),this.$router.push({path:"/proposalDetail?status=".concat(this.timeStatus)})}}),mounted:function(){this.nowTime=(new Date).getTime()/1e3,this.startTimeArr=this.dataSource.uintParams[3],this.endTimeArr=this.dataSource.uintParams[4],this.startTime=this.$gbUtils.showStartime(+this.startTimeArr,this.lang),this.endTime=this.$gbUtils.showEndTime(+this.endTimeArr,this.lang),this.type=parseInt(this.dataSource.uintParams[0]/10)-1,this.tag=parseInt(this.dataSource.uintParams[1]/10)-1,this.isReward=this.dataSource.uintParams[2]>0,this.nowTime<+this.startTimeArr?this.timeStatus=0:this.nowTime<+this.endTimeArr?this.timeStatus=1:this.timeStatus=2}},y=P,j=(e("82ae"),Object(f["a"])(y,$,k,!1,null,"44888926",null)),A=j.exports,I={name:"",data:function(){return{detailShow:!1,isHaveDao:!0,currentDao:{},tokenName:"",daoAt:-1,currentIndex:-1,daoList:[],myDaoList:[],proposalList:[]}},methods:Object(r["a"])(Object(r["a"])({},Object(x["b"])(["chanegDaoList"])),{},{init:function(){this.getDaoList()},getDaoList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.$emit("changeLoading",!0),t.$emit("changeLoadingIconType",1),a.next=4,u["a"].daoList();case 4:if(e=a.sent,t.$emit("changeLoading",!1),t.daoList=e.result||[],!(t.daoList.length<=0)){a.next=9;break}return a.abrupt("return");case 9:t.getUserList();case 10:case"end":return a.stop()}}),a)})))()},getUserList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.$emit("changeLoading",!0),t.$emit("changeLoadingIconType",1),a.next=4,u["a"].userDaoList();case 4:if(e=a.sent,t.$emit("changeLoading",!1),e.success){a.next=8;break}return a.abrupt("return");case 8:if(e.result.forEach((function(a,e){if(a){t.daoAt<0&&(t.daoAt=e);var s=Object(r["a"])({},t.daoList[e]);s.name="ZH"===t.lang?s.params[1]:s.params[2],s.daoAt=e,t.myDaoList.push(s)}})),t.chanegDaoList(t.myDaoList),t.myDaoList[0]){a.next=12;break}return a.abrupt("return");case 12:t.currentIndex=localStorage.getItem("daoIndex")||0,t.myDaoList.length<=t.currentIndex&&(t.currentIndex=0),t.currentDao=t.myDaoList[t.currentIndex],localStorage.setItem("daoIndex",t.currentIndex),t.getTokenInfo(),t.handleProposalList(t.currentDao.daoAt);case 18:case"end":return a.stop()}}),a)})))()},handleProposalList:function(t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.proposalList=[],a.$emit("changeLoading",!0),a.$emit("changeLoadingIconType",1),e.next=5,u["a"].prosalList(t);case 5:s=e.sent,a.$emit("changeLoading",!1),i=s.result,o=(new Date).getTime()/1e3,i.forEach((function(t,e){var s=Object(r["a"])({},t);s.index=e,s.startTime=t.uintParams[3],s.endTime=t.uintParams[4],o<+s.startTime?s.timeStatus=1:o<+s.endTime?s.timeStatus=0:s.timeStatus=2,a.proposalList.push(s)})),a.proposalList=Object(n["a"])(a.proposalList).sort((function(t,a){return+t.timeStatus===+a.timeStatus?+a.startTime-+t.startTime:+t.timeStatus-+a.timeStatus}));case 11:case"end":return e.stop()}}),e)})))()},handleChangeDaoAt:function(t,a){this.currentDao=t,this.currentIndex=a,localStorage.setItem("daoIndex",a),this.handleProposalList(this.currentDao.daoAt)},getTokenInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,l["a"].getSymbol(t.currentDao.token);case 2:e=a.sent,e.success&&(t.tokenName=e.result);case 4:case"end":return a.stop()}}),a)})))()},handleDetailShow:function(t){this.detailShow=!this.detailShow}}),computed:Object(r["a"])({},Object(x["c"])(["lang"])),mounted:function(){this.init()},components:{NoDao:v,DaoDetail:_["a"],DetailHeader:T,ProposalItem:A,Empty:c["a"]}},O=I,R=(e("e1d0"),Object(f["a"])(O,s,i,!1,null,"ddaee3f6",null));a["default"]=R.exports},"6bed":function(t,a,e){},"82ae":function(t,a,e){"use strict";e("a653")},a5d1:function(t,a,e){"use strict";e("c669")},a653:function(t,a,e){},c669:function(t,a,e){},e1d0:function(t,a,e){"use strict";e("6bed")},f24e:function(t,a,e){}}]);
//# sourceMappingURL=chunk-13b5a9f6.15258808.js.map