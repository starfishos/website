(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8933d54c"],{"00a5":function(t,e,a){"use strict";a("f4c0")},"063b":function(t,e,a){"use strict";a("2e10")},"2e10":function(t,e,a){},"3dc1":function(t,e,a){},"705c":function(t,e,a){"use strict";a("dc49")},"74c2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CommomPop",{on:{close:t.closePop}},[a("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.modifyInfo")))]),a("div",{staticClass:"set-image"},[a("van-uploader",{attrs:{"after-read":t.afterRead},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},[a("div",{staticClass:"upload"},[a("van-icon",{attrs:{name:"plus",size:"25"}})],1)])],1),a("div",{staticClass:"input-wrap"},[a("van-field",{staticClass:"input",attrs:{translate:"no",placeholder:t.$t("common.inputName"),"input-align":"center"},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),a("div",{staticClass:"button-group"},[a("div",{staticClass:"button-item",on:{click:t.handleConfirm}},[t._v(" "+t._s(t.$t("common.confirm"))+" ")])])])},s=[],i=a("1da1"),c=(a("96cf"),a("93d6")),r=a("9598"),o=a("f645"),u=a("a261"),l={name:"",data:function(){return{nickname:"",logo:"",fileList:[]}},methods:{closePop:function(){this.$emit("close")},afterRead:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new FormData,n.append("file",t.file),a.next=4,Object(u["a"])(n);case 4:if(s=a.sent,s.success){a.next=8;break}return e.fileList=[],a.abrupt("return");case 8:e.logo=o["a"].imgUrl+s.data.url;case 9:case"end":return a.stop()}}),a)})))()},handleConfirm:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.nickname&&t.logo){e.next=2;break}return e.abrupt("return",t.$toast(t.$t("common.fill")));case 2:return e.next=4,Object(c["c"])({nickname:t.nickname,logo:t.logo});case 4:if(a=e.sent,a.success){e.next=7;break}return e.abrupt("return");case 7:t.$parent.getInfo(),t.closePop();case 9:case"end":return e.stop()}}),e)})))()}},mounted:function(){},components:{CommomPop:r["a"]}},d=l,m=(a("f969"),a("2877")),f=Object(m["a"])(d,n,s,!1,null,"891a0bac",null);e["a"]=f.exports},"8e8c":function(t,e,a){"use strict";a.d(e,"e",(function(){return s})),a.d(e,"b",(function(){return i})),a.d(e,"g",(function(){return c})),a.d(e,"a",(function(){return r})),a.d(e,"f",(function(){return o})),a.d(e,"d",(function(){return u})),a.d(e,"c",(function(){return l}));var n=a("b775"),s=function(t){return Object(n["a"])("GET","/dapp/information/getInformationAdminIndex",t,!0,!0,1)},i=function(t){return Object(n["a"])("GET","/dapp/information/adminList",t)},c=function(t){return Object(n["a"])("GET","/dapp/information/list",t,!0,!0)},r=function(t){return Object(n["a"])("POST","/dapp/information",t)},o=function(t){return Object(n["a"])("GET","/dapp/information/".concat(t),t,!0,!0)},u=function(t){return Object(n["a"])("PUT","/dapp/information",t)},l=function(t){return Object(n["a"])("DELETE","/dapp/information/".concat(t))}},9598:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VanPopup",{staticStyle:{"box-sizing":"border-box",width:"93%","max-width":"400px","background-color":"#352b27",padding:"15px 20px"},attrs:{round:""},on:{"click-overlay":t.closePop},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"window"},[t.closeIcon?a("div",{staticClass:"icon-wrapper"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.closePop.apply(null,arguments)}}},[a("use",{attrs:{"xlink:href":"#guanbixiao"}})])]):t._e(),t._t("default")],2)])])},s=[],i={name:"",props:{closeIcon:{type:Boolean,default:!0}},data:function(){return{show:!0}},methods:{closePop:function(){this.$emit("close")},handleConfirm:function(){this.$emit("close")}},mounted:function(){}},c=i,r=(a("705c"),a("2877")),o=Object(r["a"])(c,n,s,!1,null,"5728e034",null);e["a"]=o.exports},a261:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("b775"),s=function(t){return Object(n["a"])("POST","/dapp/oss/upload",t,!0,!0)}},b80e:function(t,e,a){"use strict";a("e07f")},c5f0:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-wrap"},[a("MediaAdminHeader"),a("div",{attrs:{id:"content"}},[a("div",{staticClass:"name"},[a("span",[t._v(t._s(t.$t("admin.contentAdmin")))]),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:t.handleRealese}},[a("use",{attrs:{"xlink:href":"#fabu"}})])]),a("div",{staticClass:"tab"},[a("div",{staticClass:"tab-item",class:{"tab-active":0===t.tabActive},on:{click:function(e){return t.handleTab(0)}}},[t._v(" "+t._s(t.$t("admin.news"))+" ")]),a("div",{staticClass:"tab-item",class:{"tab-active":1===t.tabActive},on:{click:function(e){return t.handleTab(1)}}},[t._v(" "+t._s(t.$t("admin.article"))+" ")])]),t.newsList.length>0?a("div",{staticClass:"list"},t._l(t.newsList,(function(e){return a("NewsletterItem",{key:e.id,attrs:{active:t.tabActive,dataSource:e}})})),1):a("div",{staticClass:"no-data"},[t._v(t._s(t.$t("common.noData")))])]),t.releaseShow?a("ReleasePop",{on:{close:t.handleRealese}}):t._e()],1)},s=[],i=a("1da1"),c=(a("96cf"),a("8e8c")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news-wrap"},[a("div",{staticClass:"header"},[a("div",{staticClass:"time"},[0===t.dataSource.status?a("span",{staticClass:"wait"},[t._v(t._s(t.$t("admin.reviewing")))]):2===t.dataSource.status?a("span",{staticClass:"fail"},[t._v(t._s(t.$t("admin.reviewFail")))]):t._e(),t._v(" "+t._s(t.dataSource.updateTime||t.dataSource.createTime||"00:00:00")+" ")]),a("div",{staticClass:"num"},[t._v(" "+t._s(t.dataSource.readingVolume||0)+t._s(t.$t("admin.read"))+" ")])]),a("div",{staticClass:"bottom"},[0===t.active?a("div",{staticClass:"news-content"},[a("div",{staticClass:"content"},[t._v(" "+t._s(t.dataSource.content)+" ")]),t.dataSource.preview?a("div",{staticClass:"img-box"},[a("img",{attrs:{src:t.dataSource.preview,alt:""}})]):t._e()]):a("div",{staticClass:"article-content"},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:t.dataSource.preview,alt:""}})]),a("div",{staticClass:"text",domProps:{innerHTML:t._s(t.dataSource.content)}})]),a("div",{staticClass:"button-group"},[a("van-button",{staticClass:"modify-btn",attrs:{color:"#f8bb5a"},on:{click:t.handleToEdit}},[t._v(t._s(t.$t("admin.modify")))]),a("van-button",{staticClass:"delete-btn",attrs:{color:"#dbd9d5"},on:{click:t.handleDelete}},[t._v(t._s(t.$t("admin.delete")))])],1)])])},o=[],u={name:"",props:["dataSource","active"],data:function(){return{}},methods:{handleDelete:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["c"])(t.dataSource.id);case 2:if(a=e.sent,a.success){e.next=5;break}return e.abrupt("return");case 5:t.$toast("Success"),t.$parent.getList();case 7:case"end":return e.stop()}}),e)})))()},handleToEdit:function(){0===this.active?this.$router.push({path:"/ReleaseNews?id=".concat(this.dataSource.id)}):this.$router.push({path:"/ReleaseArticle?id=".concat(this.dataSource.id)})}},mounted:function(){}},l=u,d=(a("063b"),a("2877")),m=Object(d["a"])(l,r,o,!1,null,"3ae6afe6",null),f=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"title"},[a("div",{staticClass:"info"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.mediaInfo.logo||t.defaultImg,alt:"",translate:"no"}})]),a("div",{staticClass:"name",attrs:{translate:"no"}},[t._v(t._s(t.mediaInfo.nickname))])]),a("div",{staticClass:"modify",on:{click:t.handleNameShow}},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#a-shuxiebianxie1"}})]),0===t.mediaInfo.nicknameReviewStatus?a("span",[t._v(t._s(t.$t("admin.peddingReview")))]):t._e()])]),a("div",{staticClass:"data"},[a("div",{staticClass:"data-item"},[a("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(" "+t._s(t.mediaInfo.readingsCumulative||0)+" ")]),a("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.readCount")))])]),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#star1"}})]),a("div",{staticClass:"data-item"},[a("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(" "+t._s(t.mediaInfo.readsNewsletter||0)+" ")]),a("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.newsCount")))])]),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#star1"}})]),a("div",{staticClass:"data-item"},[a("div",{staticClass:"value",attrs:{translate:"no"}},[t._v(" "+t._s(t.mediaInfo.articlesNumber||0)+" ")]),a("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.articleCount")))])])]),t.nameShow?a("NamePop",{on:{close:t.handleNameShow}}):t._e()],1)},p=[],h=a("74c2"),b={name:"",data:function(){return{nameShow:!1,mediaInfo:{},defaultImg:a("cf05")}},methods:{handleNameShow:function(){0!==this.mediaInfo.nicknameReviewStatus&&(this.nameShow=!this.nameShow)},getInfo:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["e"])();case 2:if(a=e.sent,a.success){e.next=5;break}return e.abrupt("return");case 5:t.mediaInfo=a.data;case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getInfo()},components:{NamePop:h["a"]}},w=b,_=(a("00a5"),Object(d["a"])(w,v,p,!1,null,"511ff76d",null)),C=_.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VanPopup",{staticStyle:{"box-sizing":"border-box",width:"93%","max-width":"400px","background-color":"#352b27",padding:"15px 20px"},attrs:{round:""},on:{"click-overlay":t.closePop},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"icon-wrapper"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"},on:{click:t.closePop}},[a("use",{attrs:{"xlink:href":"#guanbixiao"}})])]),a("div",{staticClass:"name"},[t._v(t._s(t.$t("admin.realease")))]),a("div",{staticClass:"button-group"},[a("div",{staticClass:"button-item",on:{click:function(e){return t.$gbUtils.handleToPage("/releaseNews")}}},[t._v(" "+t._s(t.$t("admin.realeaseNews"))+" ")]),a("div",{staticClass:"button-item",on:{click:function(e){return t.$gbUtils.handleToPage("/releaseArticle")}}},[t._v(" "+t._s(t.$t("admin.releaseArticle"))+" ")])])])])},x=[],k={name:"",data:function(){return{show:!0}},methods:{closePop:function(){this.$emit("close")}},mounted:function(){}},$=k,S=(a("b80e"),Object(d["a"])($,g,x,!1,null,"204ecc4a",null)),O=S.exports,j={name:"",data:function(){return{tabActive:0,releaseShow:!1,newsList:[]}},methods:{handleTab:function(t){this.tabActive=t,this.newsList=[],this.getList()},handleRealese:function(){this.releaseShow=!this.releaseShow},getList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["b"])({type:t.tabActive});case 2:if(a=e.sent,a.success){e.next=5;break}return e.abrupt("return");case 5:t.newsList=a.rows;case 6:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getList()},components:{NewsletterItem:f,MediaAdminHeader:C,ReleasePop:O}},P=j,R=(a("dabc"),Object(d["a"])(P,n,s,!1,null,"50ea4b18",null));e["default"]=R.exports},cf05:function(t,e,a){t.exports=a.p+"img/logo.094ab691.png"},dabc:function(t,e,a){"use strict";a("eabe")},dc49:function(t,e,a){},e07f:function(t,e,a){},eabe:function(t,e,a){},f4c0:function(t,e,a){},f969:function(t,e,a){"use strict";a("3dc1")}}]);
//# sourceMappingURL=chunk-8933d54c.72474510.js.map