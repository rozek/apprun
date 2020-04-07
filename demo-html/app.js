!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){"use strict";n.r(e),n.d(e,"app",(function(){return o.b})),n.d(e,"Component",(function(){return y})),n.d(e,"on",(function(){return u})),n.d(e,"update",(function(){return c})),n.d(e,"Fragment",(function(){return r.a})),n.d(e,"event",(function(){return c})),n.d(e,"ROUTER_EVENT",(function(){return v})),n.d(e,"ROUTER_404_EVENT",(function(){return E})),n.d(e,"customElement",(function(){return l}));var o=n(1),r=n(2);const s=(t,e={})=>(class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return e.observedAttributes}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const o={};Array.from(this.attributes).forEach(t=>o[t.name]=t.value),(n.observedAttributes||[]).forEach(t=>{void 0!==this[t]&&(o[t]=this[t]),Object.defineProperty(this,t,{get:()=>o[t],set(e){this.attributeChangedCallback(t,o[t],e)},configurable:!0,enumerable:!0})});const r=this.children?Array.from(this.children):[];if(r.forEach(t=>t.parentElement.removeChild(t)),this._component=new t(Object.assign(Object.assign({},o),{children:r})).mount(this._shadowRoot,n),this._component._props=o,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(o,r,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,o;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(o=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===o||o.call(n),this._component=null}attributeChangedCallback(t,n,o){var r;null===(r=this._component)||void 0===r||r.run("attributeChanged",t,n,o),this._component&&(this._component._props[t]=o),o!==n&&!1!==e.render&&window.requestAnimationFrame(()=>{var t;null===(t=this._component)||void 0===t||t.run(".")})}});var i=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,s(e,n))};const a={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function c(t,e={}){return(n,o,r)=>{const s=t?t.toString():o;return a.defineMetadata(`apprun-update:${s}`,{name:s,key:o,options:e},n),r}}function u(t,e={}){return function(n,o){const r=t?t.toString():o;a.defineMetadata(`apprun-update:${r}`,{name:r,key:o,options:e},n)}}function l(t,e){return function(n){return i(t,n,e),n}}const h=(t,e)=>(e?t.state[e]:t.state)||"",d=(t,e,n)=>{if(e){const o=t.state||{};o[e]=n,t.setState(o)}else t.setState(n)};var f,p=(t,e,n,r)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>r.run(t,e);else if("string"==typeof n)e[t]=t=>r.run(n,t);else if("function"==typeof n)e[t]=t=>r.setState(n(r.state,t));else if(Array.isArray(n)){const[o,...s]=n;"string"==typeof o?e[t]=t=>r.run(o,...s,t):"function"==typeof o&&(e[t]=t=>r.setState(o(r.state,...s,t)))}}else if("$bind"===t){const o=e.type||"text",s="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(o){case"checkbox":e.checked=h(r,s),e.onclick=t=>d(r,s||t.target.name,t.target.checked);break;case"radio":e.checked=h(r,s)===e.value,e.onclick=t=>d(r,s||t.target.name,t.target.value);break;case"number":case"range":e.value=h(r,s),e.oninput=t=>d(r,s||t.target.name,Number(t.target.value));break;default:e.value=h(r,s),e.oninput=t=>d(r,s||t.target.name,t.target.value)}else"select"===n?(e.value=h(r,s),e.onchange=t=>{t.target.multiple||d(r,s||t.target.name,t.target.value)}):"option"===n?(e.selected=h(r,s),e.onclick=t=>d(r,s||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=h(r,s),e.oninput=t=>d(r,s||t.target.name,t.target.value))}else o.b.run("$",{key:t,tag:n,props:e,component:r})};function m(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){var n,o,r,s=Array.isArray(t),i=Array.isArray(e);if(s&&i){if((o=t.length)!=e.length)return!1;for(n=o;0!=n--;)if(!m(t[n],e[n]))return!1;return!0}if(s!=i)return!1;var a=Object.keys(t);if((o=a.length)!==Object.keys(e).length)return!1;for(n=o;0!=n--;)if(!e.hasOwnProperty(a[n]))return!1;for(n=o;0!=n--;)if(!m(t[r=a[n]],e[r]))return!1;return!0}return t!=t&&e!=e}!function(t){t[t.NO_ATTR_CHANGE=1]="NO_ATTR_CHANGE",t[t.NO_TREE_CHANGE=2]="NO_TREE_CHANGE"}(f||(f={}));var b=function t(e,n){if(!(null==e?void 0:e.length)||!(null==n?void 0:n.length))return;const o=e.length,r=n.length,s=Math.min(o,r);for(let o=0;o<s;o++){const r=e[o],s=n[o];s&&"object"==typeof s&&(m(r,s)?s._op=f.NO_ATTR_CHANGE|f.NO_TREE_CHANGE:(m(r.props,s.props)&&(s._op=f.NO_ATTR_CHANGE),m(r.children,s.children)?s._op=s._op|f.NO_TREE_CHANGE:t(r.children,s.children)))}};const _={};o.b.on("get-components",t=>t.components=_);const g=t=>t;class y{constructor(t,e,n,r){this.state=t,this.view=e,this.update=n,this.options=r,this._app=new o.a,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){o.b.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=o.b.createElement;o.b.createElement=(t,e,...o)=>(e&&Object.keys(e).forEach(n=>{n.startsWith("$")&&(p(n,e,t,this),delete e[n])}),n(t,e,...o));const r=e?this.view(t,e):this.view(t);return o.b.createElement=n,r}renderState(t,e=null){if(!this.view)return;let n=e||this._view(t);if(o.b.debug&&o.b.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const r="string"==typeof this.element?document.getElementById(this.element):this.element;if(r){const t="_c";this.unload?r._component===this&&r.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),r.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver(t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(r)||(this.unload(this.state),this.observer.disconnect(),this.observer=null,this.save_vdom=[])})),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):r.removeAttribute&&r.removeAttribute(t),r._component===this&&this.save_vdom&&b([this.save_vdom],[n]),r._component=this}e||(this.render(r,n),this.save_vdom=n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,r;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=g),this.add_actions(),this.state=null!==(r=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==r?r:{},e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),o.b.debug){const e="string"==typeof t?t:t.id;_[e]=_[e]||[],_[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,(...r)=>{const s=e(this.state,...r);o.b.debug&&o.b.run("debug",{component:this,event:t,e:r,state:this.state,newState:s,options:n}),this.setState(s,n)},n))}add_actions(){const t=this.update||{};a.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=a.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Array.isArray(t)?t.forEach(t=>{const[n,o,r]=t;n.toString().split(",").forEach(t=>e[t.trim()]=[o,r])}):Object.keys(t).forEach(n=>{const o=t[n];("function"==typeof o||Array.isArray(o))&&n.split(",").forEach(t=>e[t.trim()]=o)}),e["."]||(e["."]=g),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.is_global_event(n)?o.b.run(n,...e):this._app.run(n,...e)}on(t,e,n){const r=t.toString();return this._actions.push({name:r,fn:e}),this.is_global_event(r)?o.b.on(r,e,n):this._app.on(r,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach(t=>{const{name:e,fn:n}=t;this.is_global_event(e)?o.b.off(e,n):this._app.off(e,n)})}}y.__isAppRunComponent=!0;const v="//",E="///",w=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");o.b.run(e,...n)||o.b.run(E,e,...n),o.b.run(v,e,...n)}else if(t.startsWith("/")){const[e,n,...r]=t.split("/");o.b.run("/"+n,...r)||o.b.run(E,"/"+n,...r),o.b.run(v,"/"+n,...r)}else o.b.run(t)||o.b.run(E,t),o.b.run(v,t)};o.b.h=o.b.createElement=r.b,o.b.render=function(t,e,n){Object(r.c)(t,e,n)},o.b.Fragment=r.a,o.b.webComponent=i,o.b.start=(t,e,n,o,r)=>{const s=Object.assign(Object.assign({},r),{render:!0,global_event:!0}),i=new y(e,n,o);return r&&r.rendered&&(i.rendered=r.rendered),i.mount(t,s),i};const O=t=>{};o.b.on("$",O),o.b.on("debug",t=>O),o.b.on(v,O),o.b.on("#",O),o.b.route=w,o.b.on("route",t=>o.b.route&&o.b.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{o.b.route===w&&(window.onpopstate=()=>w(location.hash),w(location.hash))});e.default=o.b;"object"==typeof window&&(window.Component=y,window.React=o.b,window.on=u,window.customElement=l)},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));class o{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter(t=>t.fn!==e)}find(t){return this._events[t]}run(t,...e){const n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter(t=>!t.options.once),n.forEach(n=>{const{fn:o,options:r}=n;return r.delay?this.delay(t,o,e,r):o.apply(this,e),!n.options.once}),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,o){o._t&&clearTimeout(o._t),o._t=setTimeout(()=>{clearTimeout(o._t),e.apply(this,n)},o.delay)}}let r;const s="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t;s.app&&s._AppRunVersions?r=s.app:(r=new o,s.app=r,s._AppRunVersions="AppRun-2"),e.b=r}).call(this,n(3))},function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return b}));var o=n(1);let r=0;function s(t,e,n=0){if(0===n&&(r=0),"string"==typeof t)return t;if(Array.isArray(t))return t.map(t=>s(t,e,r));let i=t;return t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(i=function(t,e,n){const{tag:r,props:s,children:i}=t;let a=`_${n}`,c=s&&s.id;c?a=c:c=`_${n}${Date.now()}`,e.__componentCache||(e.__componentCache={});let u=e.__componentCache[a];u?c=u.__eid:(u=e.__componentCache[a]=new r(Object.assign(Object.assign({},s),{children:i})).mount(c)).__eid=c;let l=u.state;if(u.mounted){const t=u.mounted(s,i,l);void 0!==t&&(l=u.state=t)}if(l instanceof Promise){const t=t=>{u.element=t,u.setState(l)};return o.b.createElement("section",Object.assign({},s,{id:c,ref:e=>t(e)}))}{const t=u._view(l,s),e=e=>{u.element=e,u.renderState(l,t)};return o.b.createElement("section",Object.assign({},s,{id:c,ref:t=>e(t)}),t)}}(t,e,r++)),i&&Array.isArray(i.children)&&(i.children=i.children.map(t=>s(t,e,r))),i}const i="_props";function a(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}function c(t,e,...n){const o=a(n);if("string"==typeof t)return{tag:t,props:e,children:o};if(Array.isArray(t))return t;if(void 0===t&&n)return o;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:o};if("function"==typeof t)return t(e,o);throw new Error(`Unknown tag in vdom ${t}`)}const u=new WeakMap,l=function(t,e,n={}){if(null==e||!1===e)return;e=s(e,n);const o="SVG"===(null==t?void 0:t.nodeName);if(!t)return;Array.isArray(e)?d(t,e,o):d(t,[e],o)};function h(t,e,n){n=n||"svg"===e.tag,function(t,e){const n=t.nodeName,o=`${e.tag||""}`;return n.toUpperCase()===o.toUpperCase()}(t,e)?(!(2&e._op)&&d(t,e.children,n),!(1&e._op)&&m(t,e.props,n)):t.parentNode.replaceChild(p(e,n),t)}function d(t,e,n){var o;const r=(null===(o=t.childNodes)||void 0===o?void 0:o.length)||0,s=(null==e?void 0:e.length)||0,i=Math.min(r,s);for(let o=0;o<i;o++){const r=e[o],s=t.childNodes[o];if("string"==typeof r)s.textContent!==r&&(3===s.nodeType?s.textContent=r:t.replaceChild(f(r),s));else if(r instanceof HTMLElement||r instanceof SVGElement)t.insertBefore(r,s);else{const e=r.props&&r.props.key;if(e)if(s.key===e)h(t.childNodes[o],r,n);else{const i=u[e];i?(t.insertBefore(i,s),t.appendChild(s),h(t.childNodes[o],r,n)):t.insertBefore(p(r,n),s)}else h(t.childNodes[o],r,n)}}let a=t.childNodes.length;for(;a>i;)t.removeChild(t.lastChild),a--;if(s>i){const o=document.createDocumentFragment();for(let t=i;t<e.length;t++)o.appendChild(p(e[t],n));t.appendChild(o)}}function f(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function p(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return f(t);if(!t.tag||"function"==typeof t.tag)return f(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return m(n,t.props,e),t.children&&t.children.forEach(t=>n.appendChild(p(t,e))),n}function m(t,e,n){const o=t[i]||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(o,e||{}),t[i]=e;for(const o in e){const r=e[o];if(o.startsWith("data-")){const e=o.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==r&&(r||""===r?t.dataset[e]=r:delete t.dataset[e])}else if("style"===o)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof r)t.style.cssText=r;else for(const e in r)t.style[e]!==r[e]&&(t.style[e]=r[e]);else if(o.startsWith("xlink")){const e=o.replace("xlink","").toLowerCase();null==r||!1===r?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,r)}else/^id$|^class$|^role|-/g.test(o)||n?t.getAttribute(o)!==r&&(r?t.setAttribute(o,r):t.removeAttribute(o)):t[o]!==r&&(t[o]=r);"key"===o&&r&&(u[r]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame(()=>e.ref(t))}function b(t,...e){return a(e)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},,,,,,function(t,e,n){"use strict";n.r(e);var o=n(0);let r=class extends o.Component{constructor(){super(...arguments),this.view=({num:t,children:e})=>o.default.createElement("div",null,o.default.createElement("h1",null,t),e),this.update={"-1":t=>Object.assign(Object.assign({},t),{num:t.num-1}),"+1":t=>Object.assign(Object.assign({},t),{num:t.num+1})},this.mounted=({num:t},e)=>({num:parseInt(t),children:e}),this.rendered=({num:t})=>{this.element.setAttribute("num",t)}}};r=function(t,e,n,o){var r,s=arguments.length,i=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(s<3?r(i):s>3?r(e,n,i):r(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i}([Object(o.customElement)("my-counter")],r);let s=class extends o.Component{constructor(){super(...arguments),this.state={},this.view=t=>o.default.createElement(o.default.Fragment,null,o.default.createElement("div",null,o.default.createElement("button",{$onclick:"fetchComic"},"XKCD")),t.loading?o.default.createElement("div",null,"loading ... "):"",t.comic&&o.default.createElement(o.default.Fragment,null,o.default.createElement("h3",null,t.comic.title),o.default.createElement("img",{src:t.comic.url}))),this.update={loading:(t,e)=>({loading:!0}),fetchComic:async t=>{this.run("loading",!0);const e=await fetch("https://xkcd-imgs.herokuapp.com/");return{comic:await e.json(),loading:!1}}},this.mounted=()=>this.run("fetchComic")}};s=function(t,e,n,o){var r,s=arguments.length,i=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(s<3?r(i):s>3?r(e,n,i):r(e,n))||i);return s>3&&i&&Object.defineProperty(e,n,i),i}([Object(o.customElement)("my-xkcd",{shadow:!0,render:!1})],s)}])}));
//# sourceMappingURL=app.js.map