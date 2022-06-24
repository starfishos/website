(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-879debaa"],{"17b2a":function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"uint16","name":"daoAt","type":"uint16"},{"indexed":true,"internalType":"uint16","name":"councliAt","type":"uint16"}],"name":"LogCountApply","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"uint16","name":"daoAt","type":"uint16"},{"indexed":true,"internalType":"uint16","name":"councliAt","type":"uint16"}],"name":"LogCountQuit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint16","name":"daoAt","type":"uint16"}],"name":"LogDaoAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"uint16","name":"daoAt","type":"uint16"}],"name":"LogDaoEdit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"uint16","name":"daoAt","type":"uint16"}],"name":"LogDaoRemove","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"uint16","name":"daoAt","type":"uint16"},{"indexed":true,"internalType":"uint16","name":"proposalAt","type":"uint16"}],"name":"LogProposalAdd","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"uint16","name":"daoAt","type":"uint16"},{"indexed":true,"internalType":"uint16","name":"proposalAt","type":"uint16"}],"name":"LogProposalEdit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"uint16","name":"daoAt","type":"uint16"},{"indexed":true,"internalType":"uint16","name":"proposalAt","type":"uint16"}],"name":"LogProposalFinish","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"uint16","name":"daoAt","type":"uint16"}],"name":"LogUserDaoJoin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"uint16","name":"daoAt","type":"uint16"}],"name":"LogUserDaoQuit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"uint16","name":"daoAt","type":"uint16"},{"indexed":true,"internalType":"uint16","name":"proposalAt","type":"uint16"}],"name":"LogUserVote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"addr","type":"address"},{"indexed":true,"internalType":"uint16","name":"daoAt","type":"uint16"},{"indexed":true,"internalType":"uint16","name":"proposalAt","type":"uint16"}],"name":"LogVoteFinish","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"}],"name":"councliApply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"councliAssign","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"address","name":"addr","type":"address"}],"name":"councliAt","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"}],"name":"councliQuit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"params","type":"string[]"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"lp","type":"address"}],"name":"daoAdd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"}],"name":"daoCouncliList","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"frozen","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"}],"internalType":"struct SFO_DAO.Councli[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"daoCounclis","outputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"frozen","type":"uint256"},{"internalType":"bool","name":"status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"string[]","name":"params","type":"string[]"},{"internalType":"address","name":"token","type":"address"}],"name":"daoEdit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"daoExist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"}],"name":"daoJoin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"daoList","outputs":[{"components":[{"internalType":"string[]","name":"params","type":"string[]"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"lp","type":"address"},{"internalType":"uint32","name":"memberCount","type":"uint32"},{"internalType":"bool","name":"status","type":"bool"}],"internalType":"struct SFO_DAO.Dao[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"daoProposals","outputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"bool","name":"mutilOption","type":"bool"},{"internalType":"uint256","name":"totalVote","type":"uint256"},{"internalType":"address","name":"initiate","type":"address"},{"internalType":"uint256","name":"frozenAmount","type":"uint256"},{"internalType":"uint8","name":"status","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"}],"name":"daoQuit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"}],"name":"daoRemove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"daos","outputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"lp","type":"address"},{"internalType":"uint32","name":"memberCount","type":"uint32"},{"internalType":"bool","name":"status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"lp","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"lpToTokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"string[]","name":"strParams","type":"string[]"},{"internalType":"uint256[]","name":"uintParams","type":"uint256[]"},{"internalType":"bool","name":"mutilOption","type":"bool"},{"internalType":"string[]","name":"options","type":"string[]"}],"name":"proposalAdd","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"uint16","name":"proposalAt","type":"uint16"},{"internalType":"string[]","name":"strParams","type":"string[]"},{"internalType":"uint256[]","name":"uintParams","type":"uint256[]"},{"internalType":"bool","name":"mutilOption","type":"bool"},{"internalType":"string[]","name":"options","type":"string[]"}],"name":"proposalEdit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"uint16","name":"proposalAt","type":"uint16"}],"name":"proposalFinsh","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"uint16","name":"proposalAt","type":"uint16"}],"name":"proposalRemove","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"}],"name":"prosalList","outputs":[{"components":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"string[]","name":"name_desc","type":"string[]"},{"internalType":"uint256[]","name":"uintParams","type":"uint256[]"},{"internalType":"bool","name":"mutilOption","type":"bool"},{"internalType":"string[]","name":"options","type":"string[]"},{"internalType":"uint256[]","name":"votes","type":"uint256[]"},{"internalType":"uint256","name":"totalVote","type":"uint256"},{"internalType":"address","name":"initiate","type":"address"},{"internalType":"uint256","name":"frozenAmount","type":"uint256"},{"internalType":"uint8","name":"status","type":"uint8"}],"internalType":"struct SFO_DAO.Proposal[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"allow","type":"bool"}],"name":"setTokenAllow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenAllow","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"address","name":"addr","type":"address"}],"name":"userCouncli","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint16","name":"","type":"uint16"}],"name":"userDao","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"userDaoList","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"userVoteRecordQuery","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"uint16","name":"proposalAt","type":"uint16"},{"internalType":"bool","name":"lp","type":"bool"},{"internalType":"uint8[]","name":"options","type":"uint8[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"uint16","name":"proposalAt","type":"uint16"}],"name":"voteFinsh","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"uint16","name":"proposalAt","type":"uint16"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint16","name":"count","type":"uint16"}],"name":"voteRecord","outputs":[{"components":[{"internalType":"address","name":"voter","type":"address"},{"internalType":"uint256","name":"lpAmount","type":"uint256"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint8[]","name":"options","type":"uint8[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bool","name":"status","type":"bool"}],"internalType":"struct SFO_DAO.Vote[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"uint16","name":"proposalAt","type":"uint16"},{"internalType":"uint16","name":"voteAt","type":"uint16"}],"name":"voteRecordConcat","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"uint16","name":"proposalAt","type":"uint16"},{"internalType":"uint16","name":"offset","type":"uint16"},{"internalType":"uint16","name":"count","type":"uint16"}],"name":"voteRecordList","outputs":[{"components":[{"internalType":"address","name":"voter","type":"address"},{"internalType":"uint256","name":"lpAmount","type":"uint256"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint8[]","name":"options","type":"uint8[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bool","name":"status","type":"bool"}],"internalType":"struct SFO_DAO.Vote[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"concat","type":"uint256"}],"name":"voteRecordResolve","outputs":[{"internalType":"uint16","name":"daoAt","type":"uint16"},{"internalType":"uint16","name":"proposalAt","type":"uint16"},{"internalType":"uint16","name":"voteAt","type":"uint16"}],"stateMutability":"pure","type":"function"}]')},"1f5d":function(e,t,n){"use strict";var a=n("c7eb"),r=n("1da1"),u=(n("b0c0"),n("d3b7"),n("25f0"),n("043a")),s=n("d887"),i=n("4360"),p=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n,r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new u["a"].web3.eth.Contract(s,t);case 2:return n=e.sent,e.prev=3,e.next=6,n.methods.name().call({});case 6:return r=e.sent,e.abrupt("return",u["a"].successResult(r));case 10:return e.prev=10,e.t0=e["catch"](3),e.abrupt("return",u["a"].failResult(e.t0));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n,r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new u["a"].web3.eth.Contract(s,t);case 2:return n=e.sent,e.prev=3,e.next=6,n.methods.symbol().call({});case 6:return r=e.sent,e.abrupt("return",u["a"].successResult(r));case 10:return e.prev=10,e.t0=e["catch"](3),e.abrupt("return",u["a"].failResult(e.t0));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n){var r,i,p,c;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:if(r=e.sent,r.success){e.next=5;break}return e.abrupt("return");case 5:return i=r.result,e.next=8,new u["a"].web3.eth.Contract(s,t);case 8:return p=e.sent,e.prev=9,e.next=12,p.methods.allowance(i,n).call();case 12:return c=e.sent,c=u["a"].fromWei(c),e.abrupt("return",u["a"].successResult(c));case 17:return e.prev=17,e.t0=e["catch"](9),e.abrupt("return",u["a"].failResult(e.t0));case 20:case"end":return e.stop()}}),e,null,[[9,17]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n){var r,i,p,c,o,l,y=arguments;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=y.length>2&&void 0!==y[2]?y[2]:1e19,e.next=3,u["a"].connectWallet();case 3:if(i=e.sent,i.success){e.next=6;break}return e.abrupt("return");case 6:return p=i.result,c=u["a"].toWei(r),e.next=10,new u["a"].web3.eth.Contract(s,t);case 10:return o=e.sent,e.prev=11,e.next=14,o.methods.approve(n.toString().toLowerCase(),c).send({from:p});case 14:return l=e.sent,e.abrupt("return",u["a"].successResult(l));case 18:return e.prev=18,e.t0=e["catch"](11),console.log(e.t0),e.abrupt("return",u["a"].failResult(e.t0));case 22:case"end":return e.stop()}}),e,null,[[11,18]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n,r){var i,p,c;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].web3.eth.getAccounts();case 2:return i=e.sent,n=u["a"].toWei(n),e.next=6,new u["a"].web3.eth.Contract(s,r);case 6:return p=e.sent,e.prev=7,e.next=10,p.methods.transfer(t,n).send({from:i[0]});case 10:return c=e.sent,console.log(c),e.abrupt("return",u["a"].successResult(c));case 15:return e.prev=15,e.t0=e["catch"](7),console.log(e.t0),e.abrupt("return",u["a"].failResult(e.t0));case 19:case"end":return e.stop()}}),e,null,[[7,15]])})));return function(t,n,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n){var r,p,c;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=i["a"].state.myAccount,e.next=3,new u["a"].web3.eth.Contract(s,t);case 3:return p=e.sent,e.prev=4,e.next=7,p.methods.balanceOf(n||r).call({});case 7:return c=e.sent,c=u["a"].fromWei(c),e.abrupt("return",u["a"].successResult(c));case 12:return e.prev=12,e.t0=e["catch"](4),e.abrupt("return",u["a"].failResult(e.t0));case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n,r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new u["a"].web3.eth.Contract(s,t);case 2:return n=e.sent,e.prev=3,e.next=6,n.methods.totalSupply().call({});case 6:return r=e.sent,r=u["a"].fromWei(r),e.abrupt("return",u["a"].successResult(r));case 11:return e.prev=11,e.t0=e["catch"](3),e.abrupt("return",u["a"].failResult(e.t0));case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),b={getName:p,getSymbol:c,allowance:o,approve:l,transfer:y,balanceOf:d,totalSupply:m};t["a"]=b},fcfc:function(e,t,n){"use strict";var a=n("c7eb"),r=n("1da1"),u=n("043a"),s=n("4360"),i=n("17b2a"),p=n("f645"),c=new u["a"].web3.eth.Contract(i,p["a"].daoAddress),o=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n){var r,i,p=arguments;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=p.length>2&&void 0!==p[2]?p[2]:0,e.next=3,u["a"].connectWallet();case 3:return e.prev=3,e.next=6,c.methods.daoAdd(t,n,r).send({from:s["a"].state.myAccount});case 6:return i=e.sent,e.abrupt("return",u["a"].successResult(i));case 10:return e.prev=10,e.t0=e["catch"](3),e.abrupt("return",u["a"].failResult(e.t0));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n,r){var i,p,o=arguments;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=o.length>3&&void 0!==o[3]?o[3]:0,e.next=3,u["a"].connectWallet();case 3:return e.prev=3,e.next=6,c.methods.daoEdit(t,n,r,i).send({from:s["a"].state.myAccount});case 6:return p=e.sent,e.abrupt("return",u["a"].successResult(p));case 10:return e.prev=10,e.t0=e["catch"](3),e.abrupt("return",u["a"].failResult(e.t0));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,n,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.daoJoin(t).send({from:s["a"].state.myAccount});case 5:return n=e.sent,e.abrupt("return",u["a"].successResult(n));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.daoQuit(t).send({from:s["a"].state.myAccount});case 5:return n=e.sent,e.abrupt("return",u["a"].successResult(n));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.daoRemove(t).send({from:s["a"].state.myAccount});case 5:return n=e.sent,e.abrupt("return",u["a"].successResult(n));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.councliApply(t).send({from:s["a"].state.myAccount});case 5:return n=e.sent,e.abrupt("return",u["a"].successResult(n));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n){var r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.councliAssign(t,n).send({from:s["a"].state.myAccount});case 5:return r=e.sent,e.abrupt("return",u["a"].successResult(r));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.councliQuit(t).send({from:s["a"].state.myAccount});case 5:return n=e.sent,e.abrupt("return",u["a"].successResult(n));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n,r,i,p){var o;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.proposalAdd(t,n,r,i,p).send({from:s["a"].state.myAccount});case 5:return o=e.sent,e.abrupt("return",u["a"].successResult(o));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n,a,r,u){return e.apply(this,arguments)}}(),T=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n,r,i,p){var o,l,y=arguments;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=y.length>5&&void 0!==y[5]?y[5]:[],e.next=3,u["a"].connectWallet();case 3:return e.prev=3,e.next=6,c.methods.proposalEdit(t,n,r,i,p,o).send({from:s["a"].state.myAccount});case 6:return l=e.sent,e.abrupt("return",u["a"].successResult(l));case 10:return e.prev=10,e.t0=e["catch"](3),e.abrupt("return",u["a"].failResult(e.t0));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,n,a,r,u){return e.apply(this,arguments)}}(),w=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n){var r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.proposalFinsh(t,n).send({from:s["a"].state.myAccount});case 5:return r=e.sent,e.abrupt("return",u["a"].successResult(r));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n){var r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.proposalRemove(t,n).send({from:s["a"].state.myAccount});case 5:return r=e.sent,e.abrupt("return",u["a"].successResult(r));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n,r,i,p){var o;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("options",i),console.log("amounts",p),e.next=4,u["a"].connectWallet();case 4:return e.prev=4,e.next=7,c.methods.vote(t,n,r,i,p).send({from:s["a"].state.myAccount});case 7:return o=e.sent,e.abrupt("return",u["a"].successResult(o));case 11:return e.prev=11,e.t0=e["catch"](4),e.abrupt("return",u["a"].failResult(e.t0));case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,n,a,r,u){return e.apply(this,arguments)}}(),j=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n){var r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.voteFinsh(t,n).send({from:s["a"].state.myAccount});case 5:return r=e.sent,e.abrupt("return",u["a"].successResult(r));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var t;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.methods.daoList().call({});case 3:return t=e.sent,e.abrupt("return",u["a"].successResult(t));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",u["a"].failResult(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.methods.daos(t).call({});case 3:return n=e.sent,e.abrupt("return",u["a"].successResult(n));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",u["a"].failResult(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var t,n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].web3.eth.getAccounts();case 2:return t=e.sent,e.prev=3,e.next=6,c.methods.userDaoList(t[0]).call({});case 6:return n=e.sent,e.abrupt("return",u["a"].successResult(n));case 10:return e.prev=10,e.t0=e["catch"](3),e.abrupt("return",u["a"].failResult(e.t0));case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var t,n,r=arguments;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:s["a"].state.myAccount,e.prev=1,e.next=4,c.methods.daoExist(t).call({});case 4:return n=e.sent,e.abrupt("return",u["a"].successResult(n));case 8:return e.prev=8,e.t0=e["catch"](1),e.abrupt("return",u["a"].failResult(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.userDao(s["a"].state.myAccount,t).call({});case 5:return n=e.sent,e.abrupt("return",u["a"].successResult(n));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.councliAt(t,s["a"].state.myAccount).call({});case 5:return n=e.sent,65535===+n&&(n=!1),e.abrupt("return",u["a"].successResult(n));case 10:return e.prev=10,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.userCouncli(t,s["a"].state.myAccount).call({});case 5:return n=e.sent,65535===+n&&(n=!1),e.abrupt("return",u["a"].successResult(n));case 10:return e.prev=10,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.methods.daoCouncliList(t).call({});case 3:return n=e.sent,e.abrupt("return",u["a"].successResult(n));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",u["a"].failResult(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n){var r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.methods.counclisDetail(t,n).call({});case 3:return r=e.sent,e.abrupt("return",u["a"].successResult(r));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",u["a"].failResult(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),P=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n){var r,s;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.methods.lpToTokenPrice(t,n).call({});case 3:return r=e.sent,s=u["a"].fromWei(r),console.log("price",s),e.abrupt("return",u["a"].successResult(s));case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.methods.prosalList(t).call({});case 3:return n=e.sent,e.abrupt("return",u["a"].successResult(n));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",u["a"].failResult(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n){var r;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.methods.daoProposals(t,n).call({});case 3:return r=e.sent,e.abrupt("return",u["a"].successResult(r));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",u["a"].failResult(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n,r){var i;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.voteRecord(t,n,s["a"].state.myAccount,r).call({});case 5:return i=e.sent,e.abrupt("return",u["a"].successResult(i));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n,a){return e.apply(this,arguments)}}(),S=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t,n,r,s){var i;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.methods.voteRecordList(t,n,r,s).call({});case 3:return i=e.sent,e.abrupt("return",u["a"].successResult(i));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",u["a"].failResult(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),V=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var t;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.userVoteRecordQuery(s["a"].state.myAccount).call({});case 5:return t=e.sent,e.abrupt("return",u["a"].successResult(t));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(t){var n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].connectWallet();case 2:return e.prev=2,e.next=5,c.methods.voteRecordResolve(t).call({});case 5:return n=e.sent,e.abrupt("return",u["a"].successResult(n));case 9:return e.prev=9,e.t0=e["catch"](2),e.abrupt("return",u["a"].failResult(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();t["a"]={createDao:o,daoEdit:l,daoJoin:y,daoQuit:d,daoRemove:m,proposalAdd:h,proposalEdit:T,vote:O,proposalFinsh:w,proposalRemove:x,councliApply:b,councliAssign:f,councliQuit:v,voteFinsh:j,userCouncli:W,daoList:A,userDaoList:k,daoDetail:R,daoExist:g,userDao:M,lpToTokenPrice:P,councliAt:L,daoCouncliList:C,counclisDetail:D,prosalList:F,proposalDetail:E,voteRecord:Q,voteRecordList:S,userVoteRecordQuery:V,voteRecordResolve:J}}}]);
//# sourceMappingURL=chunk-879debaa.81538527.js.map