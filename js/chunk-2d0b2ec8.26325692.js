(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ec8"],{"25d3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[t.isLoading?a("Spinner"):[a("div",[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(t._s(t.restaurant.categoryName))])]),a("hr"),a("ul",[a("li",[t._v("評論數： "+t._s(t.restaurant.commentsLength))]),a("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts))])]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")])]],2)},r=[],s=(a("b0c0"),a("5530")),i=(a("96cf"),a("1da1")),o=a("c4c3"),c=a("2375"),u=a("2fa3"),d={name:"RestaurantDashboard",components:{Spinner:c["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",commentsLength:0,viewCounts:0},isLoading:!0}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},beforeRouteUpdate:function(t,e,a){var n=t.params.id;this.fetchRestaurant(n),a()},methods:{fetchRestaurant:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r,i,c,d,m,l,h;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isLoading=!0,a.next=4,o["a"].getRestaurant({restaurantId:t});case 4:if(n=a.sent,r=n.data,"error"!==r.status){a.next=8;break}throw new Error(r.message);case 8:i=r.restaurant,c=i.id,d=i.name,m=i.Category,l=i.Comments,h=i.viewCounts,e.restaurant=Object(s["a"])({},e.restaurant,{id:c,name:d,categoryName:m?m.name:"未分類",commentsLength:l.length,viewCounts:h}),e.isLoading=!1,a.next=18;break;case 13:a.prev=13,a.t0=a["catch"](0),console.error(a.t0.message),e.isLoading=!1,u["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 18:case"end":return a.stop()}}),a,null,[[0,13]])})))()}}},m=d,l=a("2877"),h=Object(l["a"])(m,n,r,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0b2ec8.26325692.js.map