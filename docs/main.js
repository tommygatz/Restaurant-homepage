(()=>{var e={434:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"html {\r\n    box-sizing: border-box;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  *, *:before, *:after {\r\n    box-sizing: inherit;\r\n  }\r\n  \r\n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  ol, ul {\r\n    list-style: none;\r\n  }\r\n  \r\n  img {\r\n    max-width: 100%;\r\n    height: auto;\r\n  }",""]);const c=a},772:(e,n,t)=>{"use strict";t.d(n,{Z:()=>v});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(112),t.b),l=new URL(t(980),t.b),u=new URL(t(158),t.b),p=new URL(t(74),t.b),h=a()(o()),m=s()(d),f=s()(l),g=s()(u),b=s()(p);h.push([e.id,"@font-face {\r\n    font-family: 'Lobster';\r\n    src: url("+m+") format('truetype');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n@font-face {\r\n    font-family: 'Merriweather-light';\r\n    src: url("+f+") format('truetype');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Merriweather-italic';\r\n    src: url("+g+") format('truetype');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\np {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n:root {\r\n    --headerheight: 25vh;\r\n    --headerfont: 'Lobster';\r\n    --mainfont: 'Merriweather-italic';\r\n}\r\n\r\nbody {\r\n    background-image: url("+b+");\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    display: block;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position: relative;\r\n    margin: 0;\r\n    height: 100vh;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n#header-title, #navbar, #main-content, .footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    position: relative;\r\n}\r\n\r\n.header {\r\n    order: 1;\r\n    display: block;\r\n    overflow: hidden;\r\n    position: relative;\r\n    height: auto;\r\n    width: 100vw;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\n    align-items: center;\r\n    justify-content: end;\r\n    font-family: var(--headerfont);\r\n    color: white;\r\n    backdrop-filter: brightness(.6) blur(10px);\r\n    border-bottom: 1px solid grey;\r\n}\r\n\r\n#header-title {\r\n    margin-top: 5vh;\r\n    font-size: 3rem;\r\n    text-shadow: 2px 2px 2px black;\r\n}\r\n\r\n#navbar {\r\n    font-size: 1.5rem;\r\n    text-shadow: 1px 1px 1px black;\r\n    gap: 50px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.tab {\r\n    width: fit-content;\r\n    height: fit-content;\r\n    padding: 10px 20px;\r\n    background: none;\r\n}\r\n\r\n.tab.active {\r\n    border-style: hidden;\r\n    border-width: 2px 2px 0px 2px;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    box-shadow: 0px -10px 25px -5px black;\r\n}\r\n\r\nbutton {\r\n    font-family : inherit;\r\n    font-size: inherit;\r\n    border: none;\r\n    color: white;\r\n}\r\n\r\n#main-content {\r\n    font-family: var(--mainfont);\r\n    order: 2;\r\n    display: flex;\r\n    color: white;\r\n    overflow-y: auto;\r\n    height: 70vh;\r\n    width: 90vw;\r\n    backdrop-filter: brightness(.6) blur(10px);\r\n    border: 1px solid grey;\r\n    border-radius: 50px;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: start;\r\n    padding: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.menu-item {\r\n    padding: 20px; \r\n}\r\n\r\n.menu-item-title {\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.menu-item-text {\r\n    font-family: 'Merriweather-light';\r\n}\r\n\r\n.menu-item:hover{\r\n    box-shadow: 0px 0px 25px -5px black;\r\n}\r\n\r\n.footer {\r\n    order: 3;\r\n    color: white;\r\n    height: auto;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.footer > p, a {\r\n    font-family: 'Merriweather-light';\r\n    font-size: .9rem;\r\n    color: white;\r\n    text-shadow: 1px 1px black;\r\n    text-decoration: none;\r\n}\r\n\r\n.footer > a {\r\n    padding: 0 .25rem 0 .25rem;\r\n}\r\n\r\na:hover {\r\n    text-decoration:line-through;\r\n}\r\n\r\n.home, .menu, .contact {\r\n    height: 90%;\r\n}\r\n\r\n.home > p {\r\n    padding-top: 20px;\r\n}\r\n\r\n.contact-title {\r\n    margin-top: 0px;\r\n}\r\n\r\n.contact > p {\r\n    padding-top: 20px;\r\n}",""]);const v=h},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{"use strict";e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var m=o(h,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},444:e=>{e.exports={menu:{item:[{name:["Grilled Salmon with Lemon Butter Sauce"],desc:["Freshly grilled salmon served with a tangy lemon butter sauce, and a side of roasted vegetables."]},{name:["Classic Cheeseburger"],desc:["A juicy beef patty topped with melted cheddar cheese, lettuce, tomato, onion, pickles, and served with crispy french fries."]},{name:["Margherita Pizza"],desc:["Thin-crust pizza topped with tomato sauce, fresh mozzarella cheese, and basil leaves."]},{name:["Chicken Alfredo Pasta"],desc:["A creamy pasta dish made with grilled chicken, fettuccine pasta, and tossed in a rich Alfredo sauce."]},{name:["Vegan Buddha Bowl"],desc:["A healthy and delicious bowl filled with brown rice, roasted sweet potatoes, sautéed kale, chickpeas, and topped with a tahini dressing."]}]}}},112:(e,n,t)=>{"use strict";e.exports=t.p+"03c38496322925fec242.ttf"},158:(e,n,t)=>{"use strict";e.exports=t.p+"5ea8dc24f88aa224bc7f.ttf"},980:(e,n,t)=>{"use strict";e.exports=t.p+"c3e7a8bc238902aee905.ttf"},74:(e,n,t)=>{"use strict";e.exports=t.p+"ba2c0e00fad400f070ac.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),h=t(772),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var f=t(434),g={};g.styleTagTransform=p(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),n()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const b=function(){const e=document.getElementById("main-content");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("home"),e.innerHTML="<h1>About Us</h1>\n    <p>At The Rustic Table, we believe in simple, honest cooking using the freshest ingredients available. \n    Our restaurant was born out of a desire to provide our customers with an exceptional dining experience in a warm and welcoming atmosphere. \n    Our menu features classic dishes with a modern twist, all made from scratch in-house by our talented chefs.</p>\n    <p>We are passionate about supporting local farmers and producers, and we source the majority of our ingredients from within the region. \n    Our commitment to sustainability is reflected in everything we do, from our eco-friendly packaging to our composting and recycling practices.</p>\n    <p>Whether you're joining us for a quick lunch, a romantic dinner for two, or a special occasion with friends and family, we invite you to sit back, relax, and enjoy the flavors of our carefully crafted dishes. \n    Welcome to The Rustic Table.</p>",e}())};var v=t(444);const x=t.n(v)().menu.item;console.log(x);for(let e=0;e<x.length;e++)console.log(x[e].name),console.log(x[e].desc);function y(e,n){const t=document.createElement("div");t.classList.add("menu-item");const r=document.createElement("h2");r.classList.add("menu-item-title"),r.textContent=e;const o=document.createElement("h3");return o.classList.add("menu-item-text"),o.textContent=n,t.appendChild(r),t.appendChild(o),t}function w(e,n){const t=document.createElement("button");return t.setAttribute("id",e),t.textContent=n,t.classList.add("tab"),t}function C(e){document.querySelector(".tab.active").classList.remove("active"),e.classList.add("active")}const L=function(){const e=document.createElement("div");e.classList.add("header");const n=document.createElement("div");n.setAttribute("id","header-title"),n.textContent="The Rustic Table";const t=function(e){const n=document.createElement("div");n.setAttribute("id","navbar"),n.classList.add("navbar");const t=w("home","Home");t.classList.add("active"),t.addEventListener("click",(()=>{C(t),b()}));const r=w("menu","Menu");r.addEventListener("click",(()=>{C(r),function(){const e=document.getElementById("main-content");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const n=document.createElement("div");n.classList.add("menu-title"),n.innerHTML="<h1>Menu</h1>",e.appendChild(n);for(let n=0;n<x.length;n++)e.appendChild(y(x[n].name,x[n].desc));return e}())}()}));const o=w("contact","Contact");return o.addEventListener("click",(()=>{C(o),function(){const e=document.getElementById("main-content");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("contact"),e.innerHTML='<h1 class="contact-title">Contact Us</h1>\n    <p>555-555-5555</p>\n    <p>contact@TheRusticTable.eat</p>',e}())}()})),n.appendChild(t),n.appendChild(r),n.appendChild(o),n}();return e.appendChild(n),e.appendChild(t),e};!function(){const e=document.getElementById("content");e.appendChild(L()),e.appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","main-content"),e.textContent="",e}()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("footer"),e.innerHTML='<p>Page created by</p><a class="ghlink" href="https://github.com/tommygatz" title="Github Link">Tommygatz</a>\n    ',e}())}(),b()})()})();