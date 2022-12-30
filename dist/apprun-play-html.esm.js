class t{constructor(){this._events={}}on(t,n,i={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:n,options:i})}off(t,n){const i=this._events[t]||[];this._events[t]=i.filter((t=>t.fn!==n))}find(t){return this._events[t]}run(t,...n){const i=this.getSubscribers(t,this._events);return console.assert(i&&i.length>0,"No subscriber for event: "+t),i.forEach((i=>{const{fn:e,options:s}=i;return s.delay?this.delay(t,e,n,s):Object.keys(s).length>0?e.apply(this,[...n,s]):e.apply(this,n),!i.options.once})),i.length}once(t,n,i={}){this.on(t,n,Object.assign(Object.assign({},i),{once:!0}))}delay(t,n,i,e){e._t&&clearTimeout(e._t),e._t=setTimeout((()=>{clearTimeout(e._t),Object.keys(e).length>0?n.apply(this,[...i,e]):n.apply(this,i)}),e.delay)}query(t,...n){const i=this.getSubscribers(t,this._events);console.assert(i&&i.length>0,"No subscriber for event: "+t);const e=i.map((t=>{const{fn:i,options:e}=t;return Object.keys(e).length>0?i.apply(this,[...n,e]):i.apply(this,n)}));return Promise.all(e)}getSubscribers(t,n){const i=n[t]||[];return n[t]=i.filter((t=>!t.options.once)),Object.keys(n).filter((n=>n.endsWith("*")&&t.startsWith(n.replace("*","")))).sort(((t,n)=>n.length-t.length)).forEach((e=>i.push(...n[e].map((n=>Object.assign(Object.assign({},n),{options:Object.assign(Object.assign({},n.options),{event:t})})))))),i}}let n;const i="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;i.app&&i._AppRunVersions?n=i.app:(n=new t,i.app=n,i._AppRunVersions="AppRun-3");var e=n;const s=(t,n)=>(n?t.state[n]:t.state)||"",o=(t,n,i)=>{if(n){const e=t.state||{};e[n]=i,t.setState(e)}else t.setState(i)},r=(t,n)=>{if(Array.isArray(t))return t.map((t=>r(t,n)));{let{tag:i,props:l,children:h}=t;return i?(l&&Object.keys(l).forEach((t=>{t.startsWith("$")&&(((t,n,i,r)=>{if(t.startsWith("$on")){const i=n[t];if(t=t.substring(1),"boolean"==typeof i)n[t]=n=>r.run?r.run(t,n):e.run(t,n);else if("string"==typeof i)n[t]=t=>r.run?r.run(i,t):e.run(i,t);else if("function"==typeof i)n[t]=t=>r.setState(i(r.state,t));else if(Array.isArray(i)){const[s,...o]=i;"string"==typeof s?n[t]=t=>r.run?r.run(s,...o,t):e.run(s,...o,t):"function"==typeof s&&(n[t]=t=>r.setState(s(r.state,...o,t)))}}else if("$bind"===t){const e=n.type||"text",l="string"==typeof n[t]?n[t]:n.name;if("input"===i)switch(e){case"checkbox":n.checked=s(r,l),n.onclick=t=>o(r,l||t.target.name,t.target.checked);break;case"radio":n.checked=s(r,l)===n.value,n.onclick=t=>o(r,l||t.target.name,t.target.value);break;case"number":case"range":n.value=s(r,l),n.oninput=t=>o(r,l||t.target.name,Number(t.target.value));break;default:n.value=s(r,l),n.oninput=t=>o(r,l||t.target.name,t.target.value)}else"select"===i?(n.value=s(r,l),n.onchange=t=>{t.target.multiple||o(r,l||t.target.name,t.target.value)}):"option"===i?(n.selected=s(r,l),n.onclick=t=>o(r,l||t.target.name,t.target.selected)):"textarea"===i&&(n.innerHTML=s(r,l),n.oninput=t=>o(r,l||t.target.name,t.target.value))}else e.run("$",{key:t,tag:i,props:n,component:r})})(t,l,i,n),delete l[t])})),h&&(h=r(h,n)),{tag:i,props:l,children:h}):t}};function l(t,...n){return h(n)}function h(t){const n=[],i=t=>{null!=t&&""!==t&&!1!==t&&n.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>i(t))):i(t)})),n}function c(t,n,...i){const e=h(i);if("string"==typeof t)return{tag:t,props:n,children:e};if(Array.isArray(t))return t;if(void 0===t&&i)return e;if(Object.getPrototypeOf(t).t)return{tag:t,props:n,children:e};if("function"==typeof t)return t(n,e);throw new Error(`Unknown tag in vdom ${t}`)}const u=new WeakMap,a=(t,n,i={})=>{if(null==n||!1===n)return;!function(t,n,i={}){if(null==n||!1===n)return;if(n=g(n,i),!t)return;const e="SVG"===t.nodeName;Array.isArray(n)?p(t,n,e):p(t,[n],e)}("string"==typeof t&&t?document.getElementById(t)||document.querySelector(t):t,n=r(n,i),i)};function d(t,n,i){3!==n._op&&(i=i||"svg"===n.tag,!function(t,n){const i=t.nodeName,e=`${n.tag||""}`;return i.toUpperCase()===e.toUpperCase()}(t,n)?t.parentNode.replaceChild(y(n,i),t):(!(2&n._op)&&p(t,n.children,i),!(1&n._op)&&b(t,n.props,i)))}function p(t,n,i){var e,s;const o=(null===(e=t.childNodes)||void 0===e?void 0:e.length)||0,r=(null==n?void 0:n.length)||0,l=Math.min(o,r);for(let e=0;e<l;e++){const s=n[e];if(3===s._op)continue;const o=t.childNodes[e];if("string"==typeof s)o.textContent!==s&&(3===o.nodeType?o.nodeValue=s:t.replaceChild(v(s),o));else if(s instanceof HTMLElement||s instanceof SVGElement)t.insertBefore(s,o);else{const n=s.props&&s.props.key;if(n)if(o.key===n)d(t.childNodes[e],s,i);else{const r=u[n];if(r){const n=r.nextSibling;t.insertBefore(r,o),n?t.insertBefore(o,n):t.appendChild(o),d(t.childNodes[e],s,i)}else t.replaceChild(y(s,i),o)}else d(t.childNodes[e],s,i)}}let h=(null===(s=t.childNodes)||void 0===s?void 0:s.length)||0;for(;h>l;)t.removeChild(t.lastChild),h--;if(r>l){const e=document.createDocumentFragment();for(let t=l;t<n.length;t++)e.appendChild(y(n[t],i));t.appendChild(e)}}const f=t=>{const n=document.createElement("section");return n.insertAdjacentHTML("afterbegin",t),Array.from(n.children)};function v(t){if(0===(null==t?void 0:t.indexOf("_html:"))){const n=document.createElement("div");return n.insertAdjacentHTML("afterbegin",t.substring(6)),n}return document.createTextNode(null!=t?t:"")}function y(t,n){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return v(t);if(!t.tag||"function"==typeof t.tag)return v(JSON.stringify(t));const i=(n=n||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return b(i,t.props,n),t.children&&t.children.forEach((t=>i.appendChild(y(t,n)))),i}function b(t,n,i){const e=t._props||{};n=function(t,n){n.class=n.class||n.className,delete n.className;const i={};return t&&Object.keys(t).forEach((t=>i[t]=null)),n&&Object.keys(n).forEach((t=>i[t]=n[t])),i}(e,n||{}),t._props=n;for(const e in n){const s=n[e];if(e.startsWith("data-")){const n=e.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[n]!==s&&(s||""===s?t.dataset[n]=s:delete t.dataset[n])}else if("style"===e)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof s)t.style.cssText=s;else for(const n in s)t.style[n]!==s[n]&&(t.style[n]=s[n]);else if(e.startsWith("xlink")){const n=e.replace("xlink","").toLowerCase();null==s||!1===s?t.removeAttributeNS("http://www.w3.org/1999/xlink",n):t.setAttributeNS("http://www.w3.org/1999/xlink",n,s)}else e.startsWith("on")?s&&"function"!=typeof s?"string"==typeof s&&(s?t.setAttribute(e,s):t.removeAttribute(e)):t[e]=s:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(e)||i?t.getAttribute(e)!==s&&(s?t.setAttribute(e,s):t.removeAttribute(e)):t[e]!==s&&(t[e]=s);"key"===e&&s&&(u[s]=t)}n&&"function"==typeof n.ref&&window.requestAnimationFrame((()=>n.ref(t)))}function g(t,n,i=0){var e;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>g(t,n,i++)));let s=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(s=function(t,n,i){const{tag:e,props:s,children:o}=t;let r=`_${i}`,l=s&&s.id;l?r=l:l=`_${i}${Date.now()}`;let h="section";s&&s.as&&(h=s.as,delete s.as),n.i||(n.i={});let c=n.i[r];if(!(c&&c instanceof e&&c.element)){const t=document.createElement(h);c=n.i[r]=new e(Object.assign(Object.assign({},s),{children:o})).start(t)}if(c.mounted){const t=c.mounted(s,o,c.state);void 0!==t&&c.setState(t)}return b(c.element,s,!1),c.element}(t,n,i)),s&&Array.isArray(s.children)){const t=null===(e=s.props)||void 0===e?void 0:e._component;if(t){let n=0;s.children=s.children.map((i=>g(i,t,n++)))}else s.children=s.children.map((t=>g(t,n,i++)))}return s}const m=(t,n={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(n.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const i=n||{};this._shadowRoot=i.shadow?this.attachShadow({mode:"open"}):this;const e=i.observedAttributes||[],s=e.reduce(((t,n)=>{const i=n.toLowerCase();return i!==n&&(t[i]=n),t}),{});this._attrMap=t=>s[t]||t;const o={};Array.from(this.attributes).forEach((t=>o[this._attrMap(t.name)]=t.value)),e.forEach((t=>{void 0!==this[t]&&(o[t]=this[t]),Object.defineProperty(this,t,{get:()=>o[t],set(n){this.attributeChangedCallback(t,o[t],n)},configurable:!0,enumerable:!0})})),requestAnimationFrame((()=>{const n=this.children?Array.from(this.children):[];if(n.forEach((t=>t.parentElement.removeChild(t))),this._component=new t(Object.assign(Object.assign({},o),{children:n})).mount(this._shadowRoot,i),this._component._props=o,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(o,n,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==i.render&&this._component.run(".")}))}}disconnectedCallback(){var t,n,i,e;null===(n=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===n||n.call(t),null===(e=null===(i=this._component)||void 0===i?void 0:i.unmount)||void 0===e||e.call(i),this._component=null}attributeChangedCallback(t,i,e){if(this._component){const s=this._attrMap(t);this._component._props[s]=e,this._component.run("attributeChanged",s,i,e),e!==i&&!1!==n.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}};var w=(t,n,i)=>{"undefined"!=typeof customElements&&customElements.define(t,m(n,i))};const $={meta:new WeakMap,defineMetadata(t,n,i){this.meta.has(i)||this.meta.set(i,{}),this.meta.get(i)[t]=n},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,n){return n=Object.getPrototypeOf(n),this.meta.get(n)?this.meta.get(n)[t]:null}};const j=new Map;e.find("get-components")||e.on("get-components",(t=>t.components=j));const x=t=>t;class A{constructor(n,i,e,s){this.state=n,this.view=i,this.update=e,this.options=s,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,n)=>this.mount(t,Object.assign({render:!0},n))}renderState(t,n=null){if(!this.view)return;let i=n||this.view(t);if(e.debug&&e.run("debug",{component:this,_:i?".":"-",state:t,vdom:i,el:this.element}),"object"!=typeof document)return;const s="string"==typeof this.element&&this.element?document.getElementById(this.element)||document.querySelector(this.element):this.element;if(s){const t="_c";this.unload?s._component===this&&s.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),s.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(s)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):s.removeAttribute&&s.removeAttribute(t),s._component=this}!n&&i&&(i=r(i,this),e.render(s,i,this)),this.rendered&&this.rendered(this.state)}setState(t,n={render:!0,history:!1}){if(t instanceof Promise)Promise.resolve(t).then((i=>{this.setState(i,n),this._state=t}));else{if(this._state=t,null==t)return;this.state=t,!1!==n.render&&this.renderState(t),!1!==n.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof n.callback&&n.callback(this.state)}}mount(t=null,n){var i,s;return console.assert(!this.element,"Component already mounted."),this.options=n=Object.assign(Object.assign({},this.options),n),this.element=t,this.global_event=n.global_event,this.enable_history=!!n.history,this.enable_history&&(this.on(n.history.prev||"history-prev",this._history_prev),this.on(n.history.next||"history-next",this._history_next)),n.route&&(this.update=this.update||{},this.update[n.route]||(this.update[n.route]=x)),this.add_actions(),this.state=null!==(s=null!==(i=this.state)&&void 0!==i?i:this.model)&&void 0!==s?s:{},"function"==typeof this.state&&(this.state=this.state()),this.setState(this.state,{render:!!n.render,history:!0}),e.debug&&(j.get(t)?j.get(t).push(this):j.set(t,[this])),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,n,i={}){n&&"function"==typeof n&&(i.global&&this._global_events.push(t),this.on(t,((...s)=>{e.debug&&e.run("debug",{component:this,_:">",event:t,p:s,current_state:this.state,options:i});const o=n(this.state,...s);e.debug&&e.run("debug",{component:this,_:"<",event:t,p:s,newState:o,state:this.state,options:i}),this.setState(o,i)}),i))}add_actions(){const t=this.update||{};$.getMetadataKeys(this).forEach((n=>{if(n.startsWith("apprun-update:")){const i=$.getMetadata(n,this);t[i.name]=[this[i.key].bind(this),i.options]}}));const n={};Array.isArray(t)?t.forEach((t=>{const[i,e,s]=t;i.toString().split(",").forEach((t=>n[t.trim()]=[e,s]))})):Object.keys(t).forEach((i=>{const e=t[i];("function"==typeof e||Array.isArray(e))&&i.split(",").forEach((t=>n[t.trim()]=e))})),n["."]||(n["."]=x),Object.keys(n).forEach((t=>{const i=n[t];"function"==typeof i?this.add_action(t,i):Array.isArray(i)&&this.add_action(t,i[0],i[1])}))}run(t,...n){if(this.state instanceof Promise)return Promise.resolve(this.state).then((i=>{this.state=i,this.run(t,...n)}));{const i=t.toString();return this.is_global_event(i)?e.run(i,...n):this._app.run(i,...n)}}on(t,n,i){const s=t.toString();return this._actions.push({name:s,fn:n}),this.is_global_event(s)?e.on(s,n,i):this._app.on(s,n,i)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((t=>{const{name:n,fn:i}=t;this.is_global_event(n)?e.off(n,i):this._app.off(n,i)}))}}A.t=!0;const O=t=>{if(t||(t="#"),t.startsWith("#")){const[n,...i]=t.split("/");e.run(n,...i)||e.run("///",n,...i),e.run("//",n,...i)}else if(t.startsWith("/")){const[n,i,...s]=t.split("/");e.run("/"+i,...s)||e.run("///","/"+i,...s),e.run("//","/"+i,...s)}else e.run(t)||e.run("///",t),e.run("//",t)};e.h=e.createElement=c,e.render=a,e.Fragment=l,e.webComponent=w,e.safeHTML=f,e.start=(t,n,i,e,s)=>{const o=Object.assign({render:!0,global_event:!0},s),r=new A(n,i,e);return s&&s.rendered&&(r.rendered=s.rendered),r.mount(t,o),r};const _=t=>{};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var k;e.on("$",_),e.on("debug",(t=>_)),e.on("//",_),e.on("#",_),e.route=O,e.on("route",(t=>e.route&&e.route(t))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{e.route===O&&(window.onpopstate=()=>O(location.hash),document.body.hasAttribute("apprun-no-init")||e["no-init-route"]||O(location.hash))})),"object"==typeof window&&(window.Component=A,window._React=window.React,window.React=e,window.on=function(t,n={}){return function(i,e){const s=t?t.toString():e;$.defineMetadata(`apprun-update:${s}`,{name:s,key:e,options:n},i)}},window.customElement=function(t,n){return function(i){return w(t,i,n),i}},window.safeHTML=f);const T=globalThis.trustedTypes,C=T?T.createPolicy("lit-html",{createHTML:t=>t}):void 0,M=`lit$${(Math.random()+"").slice(9)}$`,E="?"+M,S=`<${E}>`,P=document,N=(t="")=>P.createComment(t),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,D=/>/g,H=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,R=/'/g,F=/"/g,I=/^(?:script|style|textarea|title)$/i,V=t=>(n,...i)=>({_$litType$:t,strings:n,values:i}),q=V(1),G=V(2),W=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),Z=new WeakMap,J=(t,n,i)=>{var e,s;const o=null!==(e=null==i?void 0:i.renderBefore)&&void 0!==e?e:n;let r=o._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new it(n.insertBefore(N(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r},K=P.createTreeWalker(P,129,null,!1),Y=(t,n)=>{const i=t.length-1,e=[];let s,o=2===n?"<svg>":"",r=B;for(let n=0;n<i;n++){const i=t[n];let l,h,c=-1,u=0;for(;u<i.length&&(r.lastIndex=u,h=r.exec(i),null!==h);)u=r.lastIndex,r===B?"!--"===h[1]?r=L:void 0!==h[1]?r=D:void 0!==h[2]?(I.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=H):void 0!==h[3]&&(r=H):r===H?">"===h[0]?(r=null!=s?s:B,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?H:'"'===h[3]?F:R):r===F||r===R?r=H:r===L||r===D?r=B:(r=H,s=void 0);const a=r===H&&t[n+1].startsWith("/>")?" ":"";o+=r===B?i+S:c>=0?(e.push(l),i.slice(0,c)+"$lit$"+i.slice(c)+M+a):i+M+(-2===c?(e.push(void 0),n):a)}const l=o+(t[i]||"<?>")+(2===n?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==C?C.createHTML(l):l,e]};class Q{constructor({strings:t,_$litType$:n},i){let e;this.parts=[];let s=0,o=0;const r=t.length-1,l=this.parts,[h,c]=Y(t,n);if(this.el=Q.createElement(h,i),K.currentNode=this.el.content,2===n){const t=this.el.content,n=t.firstChild;n.remove(),t.append(...n.childNodes)}for(;null!==(e=K.nextNode())&&l.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const n of e.getAttributeNames())if(n.endsWith("$lit$")||n.startsWith(M)){const i=c[o++];if(t.push(n),void 0!==i){const t=e.getAttribute(i.toLowerCase()+"$lit$").split(M),n=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:n[2],strings:t,ctor:"."===n[1]?st:"?"===n[1]?rt:"@"===n[1]?lt:et})}else l.push({type:6,index:s})}for(const n of t)e.removeAttribute(n)}if(I.test(e.tagName)){const t=e.textContent.split(M),n=t.length-1;if(n>0){e.textContent=T?T.emptyScript:"";for(let i=0;i<n;i++)e.append(t[i],N()),K.nextNode(),l.push({type:2,index:++s});e.append(t[n],N())}}}else if(8===e.nodeType)if(e.data===E)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=e.data.indexOf(M,t+1));)l.push({type:7,index:s}),t+=M.length-1}s++}}static createElement(t,n){const i=P.createElement("template");return i.innerHTML=t,i}}function tt(t,n,i=t,e){var s,o,r,l;if(n===W)return n;let h=void 0!==e?null===(s=i._$Cl)||void 0===s?void 0:s[e]:i._$Cu;const c=U(n)?void 0:n._$litDirective$;return(null==h?void 0:h.constructor)!==c&&(null===(o=null==h?void 0:h._$AO)||void 0===o||o.call(h,!1),void 0===c?h=void 0:(h=new c(t),h._$AT(t,i,e)),void 0!==e?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[e]=h:i._$Cu=h),void 0!==h&&(n=tt(t,h._$AS(t,n.values),h,e)),n}class nt{constructor(t,n){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var n;const{el:{content:i},parts:e}=this._$AD,s=(null!==(n=null==t?void 0:t.creationScope)&&void 0!==n?n:P).importNode(i,!0);K.currentNode=s;let o=K.nextNode(),r=0,l=0,h=e[0];for(;void 0!==h;){if(r===h.index){let n;2===h.type?n=new it(o,o.nextSibling,this,t):1===h.type?n=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(n=new ht(o,this,t)),this.v.push(n),h=e[++l]}r!==(null==h?void 0:h.index)&&(o=K.nextNode(),r++)}return s}m(t){let n=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}}class it{constructor(t,n,i,e){var s;this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=e,this._$Cg=null===(s=null==e?void 0:e.isConnected)||void 0===s||s}get _$AU(){var t,n;return null!==(n=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==n?n:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return void 0!==n&&11===t.nodeType&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=tt(this,t,n),U(t)?t===X||null==t||""===t?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==W&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var n;return z(t)||"function"==typeof(null===(n=t)||void 0===n?void 0:n[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,n=this._$AB){return this._$AA.parentNode.insertBefore(t,n)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==X&&U(this._$AH)?this._$AA.nextSibling.data=t:this.k(P.createTextNode(t)),this._$AH=t}T(t){var n;const{values:i,_$litType$:e}=t,s="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=Q.createElement(e.h,this.options)),e);if((null===(n=this._$AH)||void 0===n?void 0:n._$AD)===s)this._$AH.m(i);else{const t=new nt(s,this),n=t.p(this.options);t.m(i),this.k(n),this._$AH=t}}_$AC(t){let n=Z.get(t.strings);return void 0===n&&Z.set(t.strings,n=new Q(t)),n}S(t){z(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,e=0;for(const s of t)e===n.length?n.push(i=new it(this.A(N()),this.A(N()),this,this.options)):i=n[e],i._$AI(s),e++;e<n.length&&(this._$AR(i&&i._$AB.nextSibling,e),n.length=e)}_$AR(t=this._$AA.nextSibling,n){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,n);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var n;void 0===this._$AM&&(this._$Cg=t,null===(n=this._$AP)||void 0===n||n.call(this,t))}}class et{constructor(t,n,i,e,s){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=n,this._$AM=e,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,i,e){const s=this.strings;let o=!1;if(void 0===s)t=tt(this,t,n,0),o=!U(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const e=t;let r,l;for(t=s[0],r=0;r<s.length-1;r++)l=tt(this,e[i+r],n,r),l===W&&(l=this._$AH[r]),o||(o=!U(l)||l!==this._$AH[r]),l===X?t=X:t!==X&&(t+=(null!=l?l:"")+s[r+1]),this._$AH[r]=l}o&&!e&&this.C(t)}C(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class st extends et{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===X?void 0:t}}const ot=T?T.emptyScript:"";class rt extends et{constructor(){super(...arguments),this.type=4}C(t){t&&t!==X?this.element.setAttribute(this.name,ot):this.element.removeAttribute(this.name)}}class lt extends et{constructor(t,n,i,e,s){super(t,n,i,e,s),this.type=5}_$AI(t,n=this){var i;if((t=null!==(i=tt(this,t,n,0))&&void 0!==i?i:X)===W)return;const e=this._$AH,s=t===X&&e!==X||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==X&&(e===X||s);s&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(n=this.options)||void 0===n?void 0:n.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class ht{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}}const ct=window.litHtmlPolyfillSupport;null==ct||ct(Q,it),(null!==(k=globalThis.litHtmlVersions)&&void 0!==k?k:globalThis.litHtmlVersions=[]).push("2.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut=2,at=5,dt=t=>(...n)=>({_$litDirective$:t,values:n});class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this._$Ct=t,this._$AM=n,this._$Ci=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ft extends pt{constructor(t){if(super(t),this.it=X,t.type!==ut)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===X||null==t)return this.ft=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const n=[t];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}}ft.directiveName="unsafeHTML",ft.resultType=1;const vt=dt(ft);const yt=dt(class extends pt{constructor(t){if(super(t),t.type!==at)throw new Error("${run} can only be used in event handlers")}update(t,n){let{element:i,name:s}=t;const o=()=>{let t=i._component;for(;!t&&i;)i=i.parentElement,t=i&&i._component;return console.assert(!!t,"Component not found."),t},[r,...l]=n;return"string"==typeof r?i[`on${s}`]=t=>{const n=o();n?n.run(r,...l,t):e.run(r,...l,t)}:"function"==typeof r&&(i[`on${s}`]=t=>o().setState(r(o().state,...l,t))),this.render()}render(){return W}});e.createElement=c,e.render=function(t,n,i){n&&("string"==typeof n?(t._$litPart$||t.replaceChildren(),J(q`${vt(n)}`,t)):"_$litType$"in n?(t._$litPart$||t.replaceChildren(),J(n,t)):(a(t,n,i),t._$litPart$=void 0))},e.Fragment=l,"object"==typeof window&&(window.React=window._React||e,window.html=q,window.svg=G,window.run=yt);const bt=(t,n,i,e)=>{if(!n||!i)return;const s=t=>{var i,e;const s=n.cloneNode();null===(i=n.parentNode)||void 0===i||i.replaceChild(s,n);const o=null===(e=(n=s).contentWindow)||void 0===e?void 0:e.document;o&&(o.open(),t.indexOf("<html")>=0?o.write(t):o.write((t=>`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/custom-elements/1.1.2/custom-elements.min.js"><\/script>\n  <title>AppRun Playground</title>\n  <style>\n    body {\n      font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;\n      margin: 2em;\n    }\n  </style>\n  <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n  <script src="https://unpkg.com/apprun/dist/apprun-html.js"><\/script>\n</head>\n<body>\n<script>\n  Babel.registerPlugin("d", [Babel.availablePlugins["proposal-decorators"], {legacy: true}]);\n  Babel.registerPlugin("c", [Babel.availablePlugins["proposal-class-properties"], {loose: true}]);\n  Babel.registerPlugin("b", [Babel.availablePlugins["proposal-private-methods"], {loose: true}]);\n<\/script>\n<script type="text/babel" data-plugins="d, c, b">\n  ${t}\n<\/script>\n</body>\n</html>`)(t)),o.close())};s(i),!e&&t&&"TEXTAREA"===t.nodeName&&("undefined"==typeof CodeMirror?t.onkeyup=()=>s(t.value):t.editor||(t.editor=CodeMirror.fromTextArea(t,{lineNumbers:!0,mode:"jsx"}),t.editor.on("change",(t=>s(t.getValue())))))};e.webComponent("apprun-play",class extends A{constructor(){super(...arguments),this.view=t=>{const n=t["code-element"],i=this.element;let e,s;return e=n?document.querySelector(n):i.previousElementSibling||i.parentElement.previousElementSibling,s=(null==e?void 0:e.innerText)||(null==e?void 0:e.value)||t.code,this.state.code_area=e,this.state.code=s,s?`<div class="toolbox">\n        ${!t.hide_button&&'<a class="button" onclick="app.run("@show-popup")" >Try the Code</a>'}\n      </div>`:"<div>AppRun Play cannot find code to run, please set code-element selector.</div>"},this.rendered=({style:t,hide_src:n,code_area:i,code:e})=>{if(!e)return;if(!document.getElementById("play-popup")){document.body.insertAdjacentHTML("beforeend",'<div id="play-popup" class="overlay">\n<style id="apprun-play-style">\n.apprun-play .col {\n  height: 100%;\n  flex: 1;\n}\n.apprun-preview {\n  width: 100%\n}\n.apprun-play .editor, .apprun-play .preview {\n  display: inline-block;\n  width: calc(100% - 20px);\n  height: calc(100% - 10px);\n}\n\na.button {\n  font-size: .8em;\n  padding: 10px;\n  cursor: pointer;\n  color: var(--md-primary-bg-color);\n  background: var(--md-primary-fg-color)\n}\na.button:hover {\n  color: var(--md-primary-fg-color);\n  background: var(--md-primary-bg-color)\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  visibility: hidden;\n  opacity: 0;\n  z-index: 999;\n}\n.overlay.show {\n  visibility: visible;\n  opacity: 1;\n}\n\n.popup {\n  margin: 80px auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 3px;\n  position: relative;\n  width: 90%;\n  height: calc(100% - 150px);\n}\n\n.popup .close {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #333;\n}\n.popup .close:hover {\n  color: #06D85F;\n}\n.popup .content {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n}\n\n.cm-s-default {\n  height: 100%;\n  font-size: small;\n  line-height: 1.5em;\n  z-index: 0;\n}\n</style>\n\n\t<div class="popup apprun-play">\n\t\t<a class="close" href="javascript:app.run(\'@close-popup\')">&times;</a>\n\t\t<div class="content">\n\t\t\t<div class="col">\n        <textarea class="editor"></textarea>\n      </div>\n      <div class="col">\n      <iframe class="preview"/>\n      </div>\n    </div>\n\t</div>\n</div>');const t=document.querySelector(".apprun-play .editor"),n=document.querySelector(".apprun-play .preview");t.value=e,bt(t,n,e,!1)}const s=document.createElement("iframe");s.classList.add("apprun-preview"),s.style.cssText=t,this.element.before(s),n&&(i.style.display="none"),bt(i,s,e,n)},this.update={"@show-popup":({code:t})=>{var n;null===(n=document.querySelector(".apprun-play .editor").editor)||void 0===n||n.setValue(t),document.getElementById("play-popup").classList.add("show")},"@close-popup":()=>{document.getElementById("play-popup").classList.remove("show")}}}});
//# sourceMappingURL=apprun-play-html.esm.js.map
