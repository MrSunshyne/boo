(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(t,e,n){var content=n(161);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("7d5c23b8",content,!0,{sourceMap:!1})},157:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return l}));n(74),n(16),n(58),n(73),n(39),n(27),n(40),n(38),n(5);var r=new(n(159).a)({url:"https://demo.ghost.io",key:"22444f78447824223cefc48062",version:"v3"});var o=15,l=["id","uuid","title","slug","feature_image","featured","published_at","custom_excerpt","excerpt"]}).call(this,n(99))},158:function(t,e,n){"use strict";(function(t){n(38);var r,o=n(5),l=n(157),c=n(164);e.a={name:"PostIndex",components:{PostList:c.a},data:function(){return{}},computed:{},asyncData:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,e.store,e.error,e.payload,r=1,n.pageNumber&&(r=n.pageNumber),t.next=6,l.a.posts.browse({limit:l.c,page:r,include:"tags,authors",fields:l.b,filter:"featured: true"});case 6:return o=t.sent,t.abrupt("return",{indexPosts:o,indexPagination:o.meta.pagination});case 8:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),head:function(){return{title:"Articles | Sandeep Ramgolam",meta:[{hid:"description",name:"description",content:"Blog articles by Sandeep Ramgolam"},{hid:"og:type",property:"og:type",content:"page"},{hid:"og:title",property:"og:title",content:"Articles | Sandeep Ramgolam"},{hid:"og:description",property:"og:description",content:"Articles written by Sandeep Ramgolam"},{hid:"og:url",property:"og:url",content:t.env.siteUrl+this.$route.path}]}}}}).call(this,n(99))},160:function(t,e,n){"use strict";var r=n(156);n.n(r).a},161:function(t,e,n){(e=n(19)(!1)).push([t.i,".blog-posts[data-v-ff18be82]{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));grid-gap:30px;margin:0 auto}.blog-posts .blog-box[data-v-ff18be82]:first-child{grid-column:1/3;grid-row:1/2}.blog-posts .blog-box[data-v-ff18be82]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px);-webkit-animation:reveal-data-v-ff18be82 .5s ease-out 1 forwards;animation:reveal-data-v-ff18be82 .5s ease-out 1 forwards;--multiplier:0.05;-webkit-animation-delay:calc(var(--delay)*var(--multiplier));animation-delay:calc(var(--delay)*var(--multiplier))}@-webkit-keyframes reveal-data-v-ff18be82{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes reveal-data-v-ff18be82{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}",""]),t.exports=e},164:function(t,e,n){"use strict";var r={props:["post"]},o=n(6),l={components:{BlogCard:Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"rounded overflow-hidden shadow",attrs:{to:"/blog/"+t.post.slug}},[n("img",{staticClass:"w-full object-cover",attrs:{src:t.post.feature_image,alt:t.post.title}}),t._v(" "),n("div",{staticClass:"px-6 py-4"},[n("div",{staticClass:"font-bold text-xl"},[t._v(t._s(t.post.title))]),t._v(" "),n("div",{staticClass:"text-xs uppercase pt-2 pb-4"},[t._v(t._s(t._f("dateFormat")(new Date(t.post.published_at),"DD MMMM YYYY")))]),t._v(" "),n("p",{staticClass:"text-gray-500"},[t._v(t._s(t.post.custom_excerpt))])])])}),[],!1,null,null,null).exports},props:{posts:{type:Array,required:!0},pagination:{type:Object,required:!0},indexBase:{type:String,required:!1,default:"/blog/"}},computed:{prevLink:function(){return 1===this.pagination.prev?this.indexBase:this.indexBase+"page/"+this.pagination.prev},nextLink:function(){return this.indexBase+"page/"+this.pagination.next}}},c=(n(160),Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"blog-posts"},t._l(t.posts,(function(t,e){return n("blog-card",{key:t.id,staticClass:"blog-box",style:"--delay:"+e+"s",attrs:{post:t}})})),1),t._v(" "),n("div",{staticClass:"flex justify-center py-10",attrs:{role:"navigation"}},[t.pagination.prev?n("p",[n("nuxt-link",{attrs:{to:t.prevLink}},[t._v("Prev")])],1):t._e(),t._v(" "),n("p",[t._v("Page "+t._s(t.pagination.page)+" of "+t._s(t.pagination.pages))]),t._v(" "),t.pagination.next?n("p",[n("nuxt-link",{attrs:{to:t.nextLink}},[t._v("Next")])],1):t._e()])])}),[],!1,null,"ff18be82",null));e.a=c.exports},171:function(t,e,n){"use strict";n.r(e);var r=n(158).a,o=n(6),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container mx-auto"},[e("h1",{staticClass:"text-2xl font-bold py-2"},[this._v("Blog posts")]),this._v(" "),this.indexPosts&&this.indexPagination?e("PostList",{attrs:{posts:this.indexPosts,pagination:this.indexPagination}}):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);