(()=>{"use strict";var e={6875:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var r=a(9766),n=a(885);const i=JSON.parse('{"products":[{"id":"1","img":"https://avatars.mds.yandex.net/i?id=b2319386f2df8f97d0f3efe960d60b2c19448766-9293984-images-thumbs&n=13","name":"MOGAN MID","price":5000},{"id":"2","img":"https://avatars.mds.yandex.net/i?id=ef4ad6f2c6a61ce250fd2464ddaed1cb46f8924d-8235455-images-thumbs&n=13","name":"AIR FORCE","price":12000},{"id":"3","img":"https://avatars.mds.yandex.net/i?id=2a0000017a0b7ed689c05802fa3e97a576e1-3923189-images-thumbs&n=13","name":"AIR MIX","price":8000},{"id":"4","img":"https://avatars.mds.yandex.net/i?id=ff9e193aa487b7bb614117d83ebbd2ba39d377f3-4809955-images-thumbs&n=13","name":"ROSHE ONE","price":4500},{"id":"5","img":"https://avatars.mds.yandex.net/i?id=7930d4df17dda4898c55035abd5b757115296fa2-9106835-images-thumbs&n=13","name":"V RACER","price":2000},{"id":"6","img":"https://avatars.mds.yandex.net/i?id=16717309fedea32032b8cb87d7385d5a640b42a8-7866615-images-thumbs&n=13","name":"BARHAT","price":"999 999 999 $"},{"id":"7","img":"https://avatars.mds.yandex.net/i?id=5e559abab67db34b3d768edb1420fe6f096c6abd-10455853-images-thumbs&n=13","name":"AHAHAH YES","price":"999 999 999 $"}]}');var d=a(7901),o=a(8473),s=a(7775),c=a(5589),u=a(5012),f=a(5770);function l(e){var t=e.navigation,a=(0,r.useState)(i.products),s=(0,n.default)(a,2),l=s[0],p=s[1];(0,r.useEffect)((function(){p(i.products)}),[]);return(0,f.jsx)(c.default,{contentContainerStyle:m.container,children:l.map((function(e){return function(e){return(0,f.jsxs)(u.default,{onPress:function(e){console.log(e.img),t.navigate("InfoProduct",e)},style:m.productContainer,children:[(0,f.jsx)(o.default,{source:{uri:e.img},style:m.productImage}),(0,f.jsx)(d.default,{style:m.productName,children:e.name}),(0,f.jsx)(d.default,{style:m.productPrice,children:e.price})]})}(e)}))})}var m=s.default.create({container:{flex:1,flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",padding:10},productContainer:{width:"48%",marginBottom:10,backgroundColor:"#f2f2f2",borderRadius:5,padding:10},productImage:{width:"100%",height:150,marginBottom:10,borderRadius:5},productName:{fontSize:16,fontWeight:"bold",marginBottom:5},productPrice:{fontSize:14,color:"#888"}}),p=a(3936);function b(e){var t=e.route;return console.log(t.params.name),(0,f.jsx)(p.default,{children:(0,f.jsx)(d.default,{style:{marginTop:"50%"},children:t.params.name})})}s.default.create({});var g=a(452),h=a(1717),v=(0,g.default)();function y(){return(0,f.jsx)(h.default,{children:(0,f.jsxs)(v.Navigator,{children:[(0,f.jsx)(v.Screen,{name:"Main",component:l,options:{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}}),(0,f.jsx)(v.Screen,{name:"InfoProduct",component:b,options:{title:"InfoProduct"}})]})})}function x(){return(0,f.jsx)(y,{})}}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,a),i.exports}a.m=e,(()=>{var e=[];a.O=(t,r,n,i)=>{if(!r){var d=1/0;for(u=0;u<e.length;u++){for(var[r,n,i]=e[u],o=!0,s=0;s<r.length;s++)(!1&i||d>=i)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(o=!1,i<d&&(d=i));if(o){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,n,i]}})(),a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[d,o,s]=r,c=0;if(d.some((t=>0!==e[t]))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(s)var u=s(a)}for(t&&t(r);c<d.length;c++)i=d[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(u)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=a.O(void 0,[646],(()=>a(8887)));r=a.O(r)})();
//# sourceMappingURL=main.0a56d6eb.js.map