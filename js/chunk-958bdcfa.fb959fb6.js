(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-958bdcfa"],{6135:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("AdminNav"),t.isLoading?r("Spinner"):r("table",{staticClass:"table"},[r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v(" # ")]),r("th",{attrs:{scope:"col"}},[t._v(" Email ")]),r("th",{attrs:{scope:"col"}},[t._v(" Role ")]),r("th",{attrs:{scope:"col",width:"140"}},[t._v(" Action ")])])]),r("tbody",t._l(t.users,(function(e){return r("tr",{key:e.id},[r("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),r("td",[t._v(t._s(e.email))]),r("td",[t._v(t._s(e.isAdmin?"admin":"user"))]),r("td",[t.currentUser.id!==e.id?r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(r){return t.toggleUserRole({userId:e.id,isAdmin:e.isAdmin})}}},[t._v(" "+t._s(e.isAdmin?"set as user":"set as admin")+" ")]):t._e()])])})),0)])],1)},a=[],s=(r("d81d"),r("d3b7"),r("25f0"),r("96cf"),r("1da1")),i=r("5530"),c=r("2f62"),u=r("e04c"),o=r("be6c"),d=r("2fa3"),m=r("2375"),l={components:{AdminNav:u["a"],Spinner:m["a"]},data:function(){return{users:[],isLoading:!0}},computed:Object(i["a"])({},Object(c["b"])(["currentUser"])),created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,o["a"].users.get();case 4:if(r=e.sent,n=r.data,"error"!==n.status){e.next=8;break}throw new Error(n.message);case 8:t.users=n.users,t.isLoading=!1,e.next=17;break;case 12:e.prev=12,e.t0=e["catch"](0),console.error(e.t0.message),t.isLoading=!1,d["a"].fire({icon:"error",title:"無法取得會員資料，請稍後再試"});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))()},toggleUserRole:function(t){var e=this,r=t.userId,n=t.isAdmin;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].users.update({userId:r,isAdmin:(!n).toString()});case 3:if(a=t.sent,s=a.data,"error"!==s.status){t.next=7;break}throw new Error(s.message);case 7:e.users=e.users.map((function(t){return t.id===r?Object(i["a"])({},t,{isAdmin:!n}):t})),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0.message),d["a"].fire({icon:"error",title:"無法更新會員角色，請稍後再試"});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},f=l,v=r("2877"),p=Object(v["a"])(f,n,a,!1,null,null,null);e["default"]=p.exports},be6c:function(t,e,r){"use strict";r("b0c0");var n=r("2fa3");e["a"]={categories:{get:function(){return n["b"].get("/admin/categories")},create:function(t){var e=t.name;return n["b"].post("/admin/categories",{name:e})},update:function(t){var e=t.categoryId,r=t.name;return n["b"].put("/admin/categories/".concat(e),{name:r})},delete:function(t){var e=t.categoryId;return n["b"].delete("/admin/categories/".concat(e))}},restaurants:{getDetail:function(t){var e=t.restaurantId;return n["b"].get("/admin/restaurants/".concat(e))},get:function(){return n["b"].get("/admin/restaurants")},create:function(t){var e=t.formData;return n["b"].post("/admin/restaurants",e)},delete:function(t){var e=t.restaurantId;return n["b"].delete("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,r=t.formData;return n["b"].put("/admin/restaurants/".concat(e),r)}},users:{get:function(){return n["b"].get("/admin/users")},update:function(t){var e=t.userId,r=t.isAdmin;return n["b"].put("/admin/users/".concat(e),{isAdmin:r})}}}},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,s=r("1dde"),i=r("ae40"),c=s("map"),u=i("map");n({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3"},[r("h1",[t._v("餐廳後台")]),r("router-link",{attrs:{to:"/admin/restaurants"}},[t._v(" Restaurants ")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/categories"}},[t._v(" Categories ")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/users"}},[t._v(" Users ")])],1)},a=[],s={name:"AdminNav"},i=s,c=r("2877"),u=Object(c["a"])(i,n,a,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-958bdcfa.fb959fb6.js.map