(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-452696c7"],{"12b2":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLoading?a("Spinner"):a("form",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:e.restaurant.name},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"name",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"categoryId"}},[e._v("Category")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.restaurant,"categoryId",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[e._v(" --請選擇-- ")]),e._l(e.categories,(function(t){return a("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])}))],2)]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"tel"}},[e._v("Tel")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:e.restaurant.tel},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"tel",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"address"}},[e._v("Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:e.restaurant.address},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"address",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"opening-hours"}},[e._v("Opening Hours")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:e.restaurant.openingHours},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"openingHours",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[e._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:e.restaurant.description},on:{input:function(t){t.target.composing||e.$set(e.restaurant,"description",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[e._v("Image")]),e.restaurant.image?a("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.restaurant.image,width:"200",height:"200"}}):e._e(),a("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"處理中":"送出")+" ")])])},n=[],s=(a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),i=a("5530"),o=a("be6c"),u=a("2fa3"),c=a("2375"),d={name:"AdminRestaurantForm",components:{Spinner:c["a"]},props:{initialRestaurant:{type:Object,default:function(){return{name:"",tel:"",address:"",openingHours:"",description:"",image:"",CategoryId:""}}},isProcessing:{type:Boolean,default:!1}},data:function(){return{categories:[],restaurant:Object(i["a"])({},this.initialRestaurant),isLoading:!0}},watch:{initialRestaurant:function(e,t){this.restaurant=Object(i["a"])({},this.restaurant,{},e)}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o["a"].categories.get();case 3:if(a=t.sent,r=a.data,"error"!==r.status){t.next=7;break}throw new Error(r.message);case 7:e.categories=r.categories,e.isLoading=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](0),console.error(t.t0.message),e.isLoading=!1,u["a"].fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"});case 16:case"end":return t.stop()}}),t,null,[[0,11]])})))()},handleFileChange:function(e){var t=e.target.files;if(0===t.length)this.restaurant.image="";else{var a=window.URL.createObjectURL(t[0]);this.restaurant.image=a}},handleSubmit:function(e){if(this.restaurant.name)if(this.restaurant.categoryId){var t=e.target,a=new FormData(t);this.$emit("after-submit",a)}else u["a"].fire({icon:"warning",title:"請選擇餐廳類別"});else u["a"].fire({icon:"warning",title:"請填寫餐廳名稱"})}}},l=d,m=a("2877"),p=Object(m["a"])(l,r,n,!1,null,null,null);t["a"]=p.exports},6945:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("AdminRestaurantForm",{attrs:{"initial-restaurant":e.restaurant,"is-processing":e.isProcessing},on:{"after-submit":e.handleAfterSubmit}})],1)},n=[],s=(a("a4d3"),a("e01a"),a("b0c0"),a("5530")),i=(a("96cf"),a("1da1")),o=a("12b2"),u=a("be6c"),c=a("2fa3"),d={name:"AdminRestaurantEdit",components:{AdminRestaurantForm:o["a"]},data:function(){return{restaurant:{id:-1,name:"",tel:"",address:"",openingHours:"",description:"",image:"",categoryId:""},isProcessing:!1}},created:function(){var e=this.$route.params.id;this.fetchRestaurant(e)},beforeRouteUpdate:function(e,t,a){var r=e.params.id;this.fetchRestaurant(r),a()},methods:{fetchRestaurant:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,i,o,d,l,m,p,g,f,v;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u["a"].restaurants.getDetail({restaurantId:e});case 3:if(r=a.sent,n=r.data,"error"!==n.status){a.next=7;break}throw new Error(n.message);case 7:i=n.restaurant,o=i.id,d=i.name,l=i.tel,m=i.address,p=i.opening_hours,g=i.description,f=i.image,v=i.CategoryId,t.restaurant=Object(s["a"])({},t.restaurant,{id:o,name:d,tel:l,address:m,openingHours:p,description:g,image:f,categoryId:v}),a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](0),console.error(a.t0.message),c["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()},handleAfterSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,u["a"].restaurants.update({restaurantId:t.restaurant.id,formData:e});case 4:if(r=a.sent,n=r.data,"success"===n.status){a.next=8;break}throw new Error(n.message);case 8:t.$router.push({name:"admin-restaurants"}),a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](0),t.isProcessing=!1,c["a"].fire({icon:"error",title:"無法更新餐廳資料，請稍後再試"});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()}}},l=d,m=a("2877"),p=Object(m["a"])(l,r,n,!1,null,null,null);t["default"]=p.exports},be6c:function(e,t,a){"use strict";a("b0c0");var r=a("2fa3");t["a"]={categories:{get:function(){return r["b"].get("/admin/categories")},create:function(e){var t=e.name;return r["b"].post("/admin/categories",{name:t})},update:function(e){var t=e.categoryId,a=e.name;return r["b"].put("/admin/categories/".concat(t),{name:a})},delete:function(e){var t=e.categoryId;return r["b"].delete("/admin/categories/".concat(t))}},restaurants:{getDetail:function(e){var t=e.restaurantId;return r["b"].get("/admin/restaurants/".concat(t))},get:function(){return r["b"].get("/admin/restaurants")},create:function(e){var t=e.formData;return r["b"].post("/admin/restaurants",t)},delete:function(e){var t=e.restaurantId;return r["b"].delete("/admin/restaurants/".concat(t))},update:function(e){var t=e.restaurantId,a=e.formData;return r["b"].put("/admin/restaurants/".concat(t),a)}},users:{get:function(){return r["b"].get("/admin/users")},update:function(e){var t=e.userId,a=e.isAdmin;return r["b"].put("/admin/users/".concat(t),{isAdmin:a})}}}},e01a:function(e,t,a){"use strict";var r=a("23e7"),n=a("83ab"),s=a("da84"),i=a("5135"),o=a("861d"),u=a("9bf2").f,c=a("e893"),d=s.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new d(e):void 0===e?d():d(e);return""===e&&(l[t]=!0),t};c(m,d);var p=m.prototype=d.prototype;p.constructor=m;var g=p.toString,f="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var e=o(this)?this.valueOf():this,t=g.call(e);if(i(l,e))return"";var a=f?t.slice(7,-1):t.replace(v,"$1");return""===a?void 0:a}}),r({global:!0,forced:!0},{Symbol:m})}}}]);
//# sourceMappingURL=chunk-452696c7.50c62b4b.js.map