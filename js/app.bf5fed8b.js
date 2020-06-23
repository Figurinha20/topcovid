(function(t){function e(e){for(var n,i,c=e[0],s=e[1],u=e[2],l=0,p=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/topcovid/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"",src:"https://covid19api.com/assets/images/image06.png?v19509205981951"}}),r("br"),r("br"),r("select",{directives:[{name:"model",rawName:"v-model",value:t.facet,expression:"facet"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.facet=e.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Select a Facet")]),r("option",[t._v("Confirmed")]),r("option",[t._v("Dead")]),r("option",[t._v("Recovered")])]),r("br"),r("br"),r("select",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.number=e.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Select a Top")]),r("option",[t._v("1")]),r("option",[t._v("2")]),r("option",[t._v("3")]),r("option",[t._v("4")]),r("option",[t._v("5")]),r("option",[t._v("6")]),r("option",[t._v("7")]),r("option",[t._v("8")]),r("option",[t._v("9")]),r("option",[t._v("10")])]),r("br"),r("br"),r("HelloWorld",{attrs:{country:"Portugal",facet:this.facet,number:Number(this.number),imageSrc:this.imageSrc}})],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("button",{on:{click:function(e){return t.search()}}},[t._v("Search")]),r("div",{staticClass:"card",staticStyle:{width:"18rem"}},[r("img",{staticClass:"card-img-top",attrs:{src:this.imageSrc,alt:"Card image cap",width:"150",height:"100"}}),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(this.facet))]),r("p",{staticClass:"card-text"},[t._v(t._s(this.date))]),r("div",{attrs:{id:"topTable"}})])])])},c=[],s=(r("99af"),r("4160"),r("fb6a"),r("a9e3"),r("d3b7"),r("159b"),r("96cf"),r("1da1")),u={name:"HelloWorld",props:{country:String,facet:String,number:Number,imageSrc:String},data:function(){return{covid:{},topCovid:{},date:""}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/summary");case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,t.covid=n.Countries,e.t0=t.facet,e.next="Confirmed"===e.t0?10:"Dead"===e.t0?12:"Recovered"===e.t0?14:16;break;case 10:return t.covid.sort((function(t,e){return e.NewConfirmed-t.NewConfirmed})),e.abrupt("break",16);case 12:return t.covid.sort((function(t,e){return e.NewDeaths-t.NewDeaths})),e.abrupt("break",16);case 14:return t.covid.sort((function(t,e){return e.NewRecovered-t.NewRecovered})),e.abrupt("break",16);case 16:case"end":return e.stop()}}),e)})))()},methods:{search:function(){var t=this;switch(this.facet){case"Confirmed":this.covid.sort((function(t,e){return e.NewConfirmed-t.NewConfirmed}));break;case"Dead":this.covid.sort((function(t,e){return e.NewDeaths-t.NewDeaths}));break;case"Recovered":this.covid.sort((function(t,e){return e.NewRecovered-t.NewRecovered}));break}this.topCovid=this.covid.slice(0,this.number+1),this.date=this.topCovid[0].Date;var e='<table style="width:100%">\n  <tr>\n    <th>Pais</th>\n    <th>Numero</th>\n  </tr>';this.topCovid.forEach((function(r){switch(t.facet){case"Confirmed":e+="<tr>\n          <td>".concat(r.Country,"</td>\n          <td>").concat(r.NewConfirmed,"</td>\n      </tr>");break;case"Dead":e+="<tr>\n          <td>".concat(r.Country,"</td>\n          <td>").concat(r.NewDeaths,"</td>\n      </tr>");break;case"Recovered":e+="<tr>\n          <td>".concat(r.Country,"</td>\n          <td>").concat(r.NewRecovered,"</td>\n      </tr>");break}})),e+="</table>",document.getElementById("topTable").innerHTML=e}}},d=u,l=(r("bfdd"),r("2877")),p=Object(l["a"])(d,i,c,!1,null,"3d267034",null),f=p.exports,v={name:"App",components:{HelloWorld:f},data:function(){return{facet:"",number:0,imageSrc:"src"}},updated:function(){"Confirmed"==this.facet?this.imageSrc="https://www.momscleanairforce.org/wp-content/uploads/confirmed-580x410.jpg":"Dead"==this.facet?this.imageSrc="https://www.fingerway.com/datos/uploads/mod_catalogo/53/thumbnail_itunesartwork.png":"Recovered"==this.facet&&(this.imageSrc="https://thumbs.dreamstime.com/b/raised-up-clenched-fist-20159169.jpg")}},m=v,h=(r("034f"),Object(l["a"])(m,o,a,!1,null,null,null)),b=h.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,r){},bfdd:function(t,e,r){"use strict";var n=r("d3a2"),o=r.n(n);o.a},d3a2:function(t,e,r){}});
//# sourceMappingURL=app.bf5fed8b.js.map