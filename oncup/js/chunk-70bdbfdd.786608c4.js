(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70bdbfdd"],{1276:function(t,e,i){"use strict";var n=i("d784"),a=i("44e7"),r=i("825a"),o=i("1d80"),c=i("4840"),s=i("8aa5"),l=i("50c4"),u=i("14c3"),d=i("9263"),f=i("d039"),h=[].push,p=Math.min,g=4294967295,v=!f((function(){return!RegExp(g,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(o(this)),r=void 0===i?g:i>>>0;if(0===r)return[];if(void 0===t)return[n];if(!a(t))return e.call(n,t,r);var c,s,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=new RegExp(t.source,f+"g");while(c=d.call(v,n)){if(s=v.lastIndex,s>p&&(u.push(n.slice(p,c.index)),c.length>1&&c.index<n.length&&h.apply(u,c.slice(1)),l=c[0].length,p=s,u.length>=r))break;v.lastIndex===c.index&&v.lastIndex++}return p===n.length?!l&&v.test("")||u.push(""):u.push(n.slice(p)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var a=o(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,a,i):n.call(String(a),e,i)},function(t,a){var o=i(n,t,this,a,n!==e);if(o.done)return o.value;var d=r(t),f=String(this),h=c(d,RegExp),x=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),k=new h(v?d:"^(?:"+d.source+")",m),b=void 0===a?g:a>>>0;if(0===b)return[];if(0===f.length)return null===u(k,f)?[f]:[];var E=0,S=0,y=[];while(S<f.length){k.lastIndex=v?S:0;var C,L=u(k,v?f:f.slice(S));if(null===L||(C=p(l(k.lastIndex+(v?0:S)),f.length))===E)S=s(f,S,x);else{if(y.push(f.slice(E,S)),y.length===b)return y;for(var T=1;T<=L.length-1;T++)if(y.push(L[T]),y.length===b)return y;S=E=C}}return y.push(f.slice(E)),y}]}),!v)},"14c3":function(t,e,i){var n=i("c6b6"),a=i("9263");t.exports=function(t,e){var i=t.exec;if("function"===typeof i){var r=i.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"159b":function(t,e,i){var n=i("da84"),a=i("fdbc"),r=i("17c2"),o=i("9112");for(var c in a){var s=n[c],l=s&&s.prototype;if(l&&l.forEach!==r)try{o(l,"forEach",r)}catch(u){l.forEach=r}}},"17bb":function(t,e,i){},"17c2":function(t,e,i){"use strict";var n=i("b727").forEach,a=i("a640"),r=i("ae40"),o=a("forEach"),c=r("forEach");t.exports=o&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,i){"use strict";var n=i("23e7"),a=i("17c2");n({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"44e7":function(t,e,i){var n=i("861d"),a=i("c6b6"),r=i("b622"),o=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==a(t))}},6547:function(t,e,i){var n=i("a691"),a=i("1d80"),r=function(t){return function(e,i){var r,o,c=String(a(e)),s=n(i),l=c.length;return s<0||s>=l?t?"":void 0:(r=c.charCodeAt(s),r<55296||r>56319||s+1===l||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):r:t?c.slice(s,s+2):o-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"8aa5":function(t,e,i){"use strict";var n=i("6547").charAt;t.exports=function(t,e,i){return e+(i?n(t,e).length:1)}},9263:function(t,e,i){"use strict";var n=i("ad6d"),a=i("9f7f"),r=RegExp.prototype.exec,o=String.prototype.replace,c=r,s=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=s||u||l;d&&(c=function(t){var e,i,a,c,d=this,f=l&&d.sticky,h=n.call(d),p=d.source,g=0,v=t;return f&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),v=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(p="(?: "+p+")",v=" "+v,g++),i=new RegExp("^(?:"+p+")",h)),u&&(i=new RegExp("^"+p+"$(?!\\s)",h)),s&&(e=d.lastIndex),a=r.call(f?i:d,v),f?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:s&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],i,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"9f52":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail"},[i("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回","right-text":"分享","left-arrow":"",fixed:!0},on:{"click-left":t.goback,"click-right":function(e){t.showShare=!0}}}),i("div",{staticClass:"imgs"},[i("img",{staticClass:"auto-img",attrs:{src:t.productDetail.large_img,alt:""}})]),i("div",{staticClass:"detail-content"},[i("div",{staticClass:"clearfix detail-info"},[i("div",{staticClass:"fl pro-name"},[t._v(t._s(t.productDetail.name))]),i("div",{staticClass:"fr like",on:{click:t.like}},[i("div",{class:[t.isLike?"iconfont iconshoucang-copy":"iconfont  iconshoucang"]})])]),i("div",{staticClass:"rule"},t._l(t.productDetail.rules,(function(e,n){return i("div",{key:n,staticClass:"rule-item clearfix"},[i("div",{staticClass:"fl rule-title"},[t._v(t._s(e.title))]),i("div",{staticClass:"rule-tags clearfix fl"},t._l(e.tag,(function(n,a){return i("div",{key:a,staticClass:"fl tag-item",class:{active:n.isActive},on:{click:function(i){return t.toggleRules(e,n)}}},[t._v(t._s(n.name))])})),0)])})),0),i("div",{staticClass:"desc"},[i("div",{staticClass:"desc-title"},[t._v("商品描述")]),i("div",{staticClass:"desc-content"},t._l(t.productDetail.desc,(function(e,n){return i("div",{key:n,staticClass:"desc-item"},[t._v(t._s(e))])})),0)]),i("div",{staticClass:"clearfix price-box"},[i("div",{staticClass:"fl price"},[t._v("￥"+t._s(t.productDetail.price))]),i("div",{staticClass:"fr"},[i("van-stepper",{attrs:{integer:!0,theme:"round","button-size":"22","disable-input":""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)]),i("van-goods-action",[i("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车",badge:0==t.cartTipNum?"":t.cartTipNum},on:{click:t.goCart}}),i("van-goods-action-button",{attrs:{color:"#ffd01e",type:"warning",text:"加入购物车"},on:{click:t.addCart}}),i("van-goods-action-button",{attrs:{color:"rgb(249,187,50)",type:"danger",text:"立即购买"},on:{click:function(e){return t.addCart(!0)}}})],1)],1),i("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.share},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}})],1)},a=[],r=(i("4160"),i("a15b"),i("b0c0"),i("ac1f"),i("1276"),i("159b"),i("17bb"),i("0746"),{data:function(){return{value:1,pid:"",productDetail:{},isLike:!1,count:1,cartTipNum:0,showShare:!1,options:[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}]}},methods:{goback:function(){this.$router.go(-1)},share:function(t){this.$toast(t.name),this.showShare=!1},getProductDetail:function(t){var e=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/productDetail",params:{appkey:this.appkey,pid:t}}).then((function(t){if(e.$toast.clear(),600==t.data.code){var i=t.data.result[0];i.desc=i.desc.split(/\n/);var n=["tem","sugar","milk","cream"],a=[];n.forEach((function(t){if(""!=i[t]){var e={title:i[t+"_desc"],tag:[]},n=i[t].split(/\//);n.forEach((function(t,i){var n={name:t,isActive:0==i};e.tag.push(n)})),a.push(e)}})),i.rules=a,e.productDetail=i}})).catch((function(t){e.$toast.clear()}))},toggleRules:function(t,e){if(!e.isActive){for(var i=0;i<t.tag.length;i++)if(t.tag[i].isActive){t.tag[i].isActive=!1;break}e.isActive=!0}},like:function(){var t=this,e=localStorage.getItem("token"),i=this.isLike?"/notlike":"/like";this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:i,data:{appkey:this.appkey,pid:this.pid,tokenString:e}}).then((function(e){t.$toast.clear(),800==e.data.code||900==e.data.code?(t.isLike=800==e.data.code,t.$toast(e.data.msg)):t.$router.push({name:"Login"})})).catch((function(e){t.$toast.clear()}))},findLike:function(t){var e=this,i=localStorage.getItem("token");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findlike",params:{appkey:this.appkey,pid:t,tokenString:i}}).then((function(t){e.$toast.clear(),1e3==t.data.code?e.isLike=t.data.result.length>0:e.$router.push({name:"Login"})})).catch((function(t){e.$toast.clear()}))},findCart:function(){var t=this,e=localStorage.getItem("token");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:"/findAllShopcart",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),5e3==e.data.code&&(t.cartTipNum=e.data.result.length)})).catch((function(e){t.$toast.clear()}))},addCart:function(t){var e=this,i=localStorage.getItem("token"),n=this.productDetail.rules,a=[];n.forEach((function(t){for(var e=0;e<t.tag.length;e++)if(t.tag[e].isActive){a.push(t.tag[e].name);break}})),this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/addShopcart",data:{appkey:this.appkey,pid:this.pid,count:this.count,rule:a.join("/"),tokenString:i}}).then((function(i){e.$toast.clear(),3e3==i.data.code&&(1==i.data.status&&e.cartTipNum++,e.$toast(i.data.msg),1==t&&setTimeout((function(){e.$router.push({name:"Pay",query:{sids:i.data.sid}})}),500))})).catch((function(t){e.$toast.clear()}))},goCart:function(){this.$router.push({name:"Cart"})}},created:function(){this.pid=this.$route.query.pid,this.getProductDetail(this.pid),this.findLike(this.pid),this.findCart()}}),o=r,c=i("2877"),s=Object(c["a"])(o,n,a,!1,null,"3253a2f6",null);e["default"]=s.exports},"9f7f":function(t,e,i){"use strict";var n=i("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,i){"use strict";var n=i("23e7"),a=i("44ad"),r=i("fc6a"),o=i("a640"),c=[].join,s=a!=Object,l=o("join",",");n({target:"Array",proto:!0,forced:s||!l},{join:function(t){return c.call(r(this),void 0===t?",":t)}})},a640:function(t,e,i){"use strict";var n=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,i){"use strict";var n=i("23e7"),a=i("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,i){"use strict";var n=i("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,i){var n=i("83ab"),a=i("9bf2").f,r=Function.prototype,o=r.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in r)&&a(r,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},d784:function(t,e,i){"use strict";i("ac1f");var n=i("6eeb"),a=i("d039"),r=i("b622"),o=i("9263"),c=i("9112"),s=r("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=r("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));t.exports=function(t,e,i,d){var p=r(t),g=!a((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),v=g&&!a((function(){var e=!1,i=/a/;return"split"===t&&(i={},i.constructor={},i.constructor[s]=function(){return i},i.flags="",i[p]=/./[p]),i.exec=function(){return e=!0,null},i[p](""),!e}));if(!g||!v||"replace"===t&&(!l||!u||f)||"split"===t&&!h){var x=/./[p],m=i(p,""[t],(function(t,e,i,n,a){return e.exec===o?g&&!a?{done:!0,value:x.call(e,i,n)}:{done:!0,value:t.call(i,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),k=m[0],b=m[1];n(String.prototype,t,k),n(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}d&&c(RegExp.prototype[p],"sham",!0)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-70bdbfdd.786608c4.js.map