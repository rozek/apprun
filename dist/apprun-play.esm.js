class t{constructor(){this._events={}}on(t,n,e={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:n,options:e})}off(t,n){const e=this._events[t]||[];this._events[t]=e.filter((t=>t.fn!==n))}find(t){return this._events[t]}run(t,...n){const e=this.getSubscribers(t,this._events);return console.assert(e&&e.length>0,"No subscriber for event: "+t),e.forEach((e=>{const{fn:i,options:s}=e;return s.delay?this.delay(t,i,n,s):Object.keys(s).length>0?i.apply(this,[...n,s]):i.apply(this,n),!e.options.once})),e.length}once(t,n,e={}){this.on(t,n,Object.assign(Object.assign({},e),{once:!0}))}delay(t,n,e,i){i._t&&clearTimeout(i._t),i._t=setTimeout((()=>{clearTimeout(i._t),Object.keys(i).length>0?n.apply(this,[...e,i]):n.apply(this,e)}),i.delay)}query(t,...n){const e=this.getSubscribers(t,this._events);console.assert(e&&e.length>0,"No subscriber for event: "+t);const i=e.map((t=>{const{fn:e,options:i}=t;return Object.keys(i).length>0?e.apply(this,[...n,i]):e.apply(this,n)}));return Promise.all(i)}getSubscribers(t,n){const e=n[t]||[];return n[t]=e.filter((t=>!t.options.once)),Object.keys(n).filter((n=>n.endsWith("*")&&t.startsWith(n.replace("*","")))).sort(((t,n)=>n.length-t.length)).forEach((i=>e.push(...n[i].map((n=>Object.assign(Object.assign({},n),{options:Object.assign(Object.assign({},n.options),{event:t})})))))),e}}let n;const e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;e.app&&e._AppRunVersions?n=e.app:(n=new t,e.app=n,e._AppRunVersions="AppRun-3");var i=n;const s=(t,n)=>(n?t.state[n]:t.state)||"",o=(t,n,e)=>{if(n){const i=t.state||{};i[n]=e,t.setState(i)}else t.setState(e)},r=(t,n)=>{if(Array.isArray(t))return t.map((t=>r(t,n)));{let{tag:e,props:c,children:l}=t;return e?(c&&Object.keys(c).forEach((t=>{t.startsWith("$")&&(((t,n,e,r)=>{if(t.startsWith("$on")){const e=n[t];if(t=t.substring(1),"boolean"==typeof e)n[t]=n=>r.run?r.run(t,n):i.run(t,n);else if("string"==typeof e)n[t]=t=>r.run?r.run(e,t):i.run(e,t);else if("function"==typeof e)n[t]=t=>r.setState(e(r.state,t));else if(Array.isArray(e)){const[s,...o]=e;"string"==typeof s?n[t]=t=>r.run?r.run(s,...o,t):i.run(s,...o,t):"function"==typeof s&&(n[t]=t=>r.setState(s(r.state,...o,t)))}}else if("$bind"===t){const i=n.type||"text",c="string"==typeof n[t]?n[t]:n.name;if("input"===e)switch(i){case"checkbox":n.checked=s(r,c),n.onclick=t=>o(r,c||t.target.name,t.target.checked);break;case"radio":n.checked=s(r,c)===n.value,n.onclick=t=>o(r,c||t.target.name,t.target.value);break;case"number":case"range":n.value=s(r,c),n.oninput=t=>o(r,c||t.target.name,Number(t.target.value));break;default:n.value=s(r,c),n.oninput=t=>o(r,c||t.target.name,t.target.value)}else"select"===e?(n.value=s(r,c),n.onchange=t=>{t.target.multiple||o(r,c||t.target.name,t.target.value)}):"option"===e?(n.selected=s(r,c),n.onclick=t=>o(r,c||t.target.name,t.target.selected)):"textarea"===e&&(n.innerHTML=s(r,c),n.oninput=t=>o(r,c||t.target.name,t.target.value))}else i.run("$",{key:t,tag:e,props:n,component:r})})(t,c,e,n),delete c[t])})),l&&(l=r(l,n)),{tag:e,props:c,children:l}):t}};function c(t){const n=[],e=t=>{null!=t&&""!==t&&!1!==t&&n.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>e(t))):e(t)})),n}const l=new WeakMap;function a(t,n,e){3!==n._op&&(e=e||"svg"===n.tag,!function(t,n){const e=t.nodeName,i=`${n.tag||""}`;return e.toUpperCase()===i.toUpperCase()}(t,n)?t.parentNode.replaceChild(d(n,e),t):(!(2&n._op)&&h(t,n.children,e),!(1&n._op)&&f(t,n.props,e)))}function h(t,n,e){var i,s;const o=(null===(i=t.childNodes)||void 0===i?void 0:i.length)||0,r=(null==n?void 0:n.length)||0,c=Math.min(o,r);for(let i=0;i<c;i++){const s=n[i];if(3===s._op)continue;const o=t.childNodes[i];if("string"==typeof s)o.textContent!==s&&(3===o.nodeType?o.nodeValue=s:t.replaceChild(p(s),o));else if(s instanceof HTMLElement||s instanceof SVGElement)t.insertBefore(s,o);else{const n=s.props&&s.props.key;if(n)if(o.key===n)a(t.childNodes[i],s,e);else{const r=l[n];if(r){const n=r.nextSibling;t.insertBefore(r,o),n?t.insertBefore(o,n):t.appendChild(o),a(t.childNodes[i],s,e)}else t.replaceChild(d(s,e),o)}else a(t.childNodes[i],s,e)}}let h=(null===(s=t.childNodes)||void 0===s?void 0:s.length)||0;for(;h>c;)t.removeChild(t.lastChild),h--;if(r>c){const i=document.createDocumentFragment();for(let t=c;t<n.length;t++)i.appendChild(d(n[t],e));t.appendChild(i)}}const u=t=>{const n=document.createElement("section");return n.insertAdjacentHTML("afterbegin",t),Array.from(n.children)};function p(t){if(0===(null==t?void 0:t.indexOf("_html:"))){const n=document.createElement("div");return n.insertAdjacentHTML("afterbegin",t.substring(6)),n}return document.createTextNode(null!=t?t:"")}function d(t,n){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return p(t);if(!t.tag||"function"==typeof t.tag)return p(JSON.stringify(t));const e=(n=n||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return f(e,t.props,n),t.children&&t.children.forEach((t=>e.appendChild(d(t,n)))),e}function f(t,n,e){const i=t._props||{};n=function(t,n){n.class=n.class||n.className,delete n.className;const e={};return t&&Object.keys(t).forEach((t=>e[t]=null)),n&&Object.keys(n).forEach((t=>e[t]=n[t])),e}(i,n||{}),t._props=n;for(const i in n){const s=n[i];if(i.startsWith("data-")){const n=i.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[n]!==s&&(s||""===s?t.dataset[n]=s:delete t.dataset[n])}else if("style"===i)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof s)t.style.cssText=s;else for(const n in s)t.style[n]!==s[n]&&(t.style[n]=s[n]);else if(i.startsWith("xlink")){const n=i.replace("xlink","").toLowerCase();null==s||!1===s?t.removeAttributeNS("http://www.w3.org/1999/xlink",n):t.setAttributeNS("http://www.w3.org/1999/xlink",n,s)}else i.startsWith("on")?s&&"function"!=typeof s?"string"==typeof s&&(s?t.setAttribute(i,s):t.removeAttribute(i)):t[i]=s:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(i)||e?t.getAttribute(i)!==s&&(s?t.setAttribute(i,s):t.removeAttribute(i)):t[i]!==s&&(t[i]=s);"key"===i&&s&&(l[s]=t)}n&&"function"==typeof n.ref&&window.requestAnimationFrame((()=>n.ref(t)))}function b(t,n,e=0){var i;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>b(t,n,e++)));let s=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(s=function(t,n,e){const{tag:i,props:s,children:o}=t;let r=`_${e}`,c=s&&s.id;c?r=c:c=`_${e}${Date.now()}`;let l="section";s&&s.as&&(l=s.as,delete s.as),n.i||(n.i={});let a=n.i[r];if(!(a&&a instanceof i&&a.element)){const t=document.createElement(l);a=n.i[r]=new i(Object.assign(Object.assign({},s),{children:o})).start(t)}if(a.mounted){const t=a.mounted(s,o,a.state);void 0!==t&&a.setState(t)}return f(a.element,s,!1),a.element}(t,n,e)),s&&Array.isArray(s.children)){const t=null===(i=s.props)||void 0===i?void 0:i._component;if(t){let n=0;s.children=s.children.map((e=>b(e,t,n++)))}else s.children=s.children.map((t=>b(t,n,e++)))}return s}const m=(t,n={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(n.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const e=n||{};this._shadowRoot=e.shadow?this.attachShadow({mode:"open"}):this;const i=e.observedAttributes||[],s=i.reduce(((t,n)=>{const e=n.toLowerCase();return e!==n&&(t[e]=n),t}),{});this._attrMap=t=>s[t]||t;const o={};Array.from(this.attributes).forEach((t=>o[this._attrMap(t.name)]=t.value)),i.forEach((t=>{void 0!==this[t]&&(o[t]=this[t]),Object.defineProperty(this,t,{get:()=>o[t],set(n){this.attributeChangedCallback(t,o[t],n)},configurable:!0,enumerable:!0})})),requestAnimationFrame((()=>{const n=this.children?Array.from(this.children):[];if(n.forEach((t=>t.parentElement.removeChild(t))),this._component=new t(Object.assign(Object.assign({},o),{children:n})).mount(this._shadowRoot,e),this._component._props=o,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(o,n,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==e.render&&this._component.run(".")}))}}disconnectedCallback(){var t,n,e,i;null===(n=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===n||n.call(t),null===(i=null===(e=this._component)||void 0===e?void 0:e.unmount)||void 0===i||i.call(e),this._component=null}attributeChangedCallback(t,e,i){if(this._component){const s=this._attrMap(t);this._component._props[s]=i,this._component.run("attributeChanged",s,e,i),i!==e&&!1!==n.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}};var y=(t,n,e)=>{"undefined"!=typeof customElements&&customElements.define(t,m(n,e))};const v={meta:new WeakMap,defineMetadata(t,n,e){this.meta.has(e)||this.meta.set(e,{}),this.meta.get(e)[t]=n},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,n){return n=Object.getPrototypeOf(n),this.meta.get(n)?this.meta.get(n)[t]:null}};const g=new Map;i.find("get-components")||i.on("get-components",(t=>t.components=g));const w=t=>t;class j{constructor(n,e,i,s){this.state=n,this.view=e,this.update=i,this.options=s,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,n)=>this.mount(t,Object.assign({render:!0},n))}renderState(t,n=null){if(!this.view)return;let e=n||this.view(t);if(i.debug&&i.run("debug",{component:this,_:e?".":"-",state:t,vdom:e,el:this.element}),"object"!=typeof document)return;const s="string"==typeof this.element&&this.element?document.getElementById(this.element)||document.querySelector(this.element):this.element;if(s){const t="_c";this.unload?s._component===this&&s.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),s.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(s)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):s.removeAttribute&&s.removeAttribute(t),s._component=this}!n&&e&&(e=r(e,this),i.render(s,e,this)),this.rendered&&this.rendered(this.state)}setState(t,n={render:!0,history:!1}){if(t instanceof Promise)Promise.resolve(t).then((e=>{this.setState(e,n),this._state=t}));else{if(this._state=t,null==t)return;this.state=t,!1!==n.render&&this.renderState(t),!1!==n.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof n.callback&&n.callback(this.state)}}mount(t=null,n){var e,s;return console.assert(!this.element,"Component already mounted."),this.options=n=Object.assign(Object.assign({},this.options),n),this.element=t,this.global_event=n.global_event,this.enable_history=!!n.history,this.enable_history&&(this.on(n.history.prev||"history-prev",this._history_prev),this.on(n.history.next||"history-next",this._history_next)),n.route&&(this.update=this.update||{},this.update[n.route]||(this.update[n.route]=w)),this.add_actions(),this.state=null!==(s=null!==(e=this.state)&&void 0!==e?e:this.model)&&void 0!==s?s:{},"function"==typeof this.state&&(this.state=this.state()),this.setState(this.state,{render:!!n.render,history:!0}),i.debug&&(g.get(t)?g.get(t).push(this):g.set(t,[this])),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,n,e={}){n&&"function"==typeof n&&(e.global&&this._global_events.push(t),this.on(t,((...s)=>{i.debug&&i.run("debug",{component:this,_:">",event:t,p:s,current_state:this.state,options:e});const o=n(this.state,...s);i.debug&&i.run("debug",{component:this,_:"<",event:t,p:s,newState:o,state:this.state,options:e}),this.setState(o,e)}),e))}add_actions(){const t=this.update||{};v.getMetadataKeys(this).forEach((n=>{if(n.startsWith("apprun-update:")){const e=v.getMetadata(n,this);t[e.name]=[this[e.key].bind(this),e.options]}}));const n={};Array.isArray(t)?t.forEach((t=>{const[e,i,s]=t;e.toString().split(",").forEach((t=>n[t.trim()]=[i,s]))})):Object.keys(t).forEach((e=>{const i=t[e];("function"==typeof i||Array.isArray(i))&&e.split(",").forEach((t=>n[t.trim()]=i))})),n["."]||(n["."]=w),Object.keys(n).forEach((t=>{const e=n[t];"function"==typeof e?this.add_action(t,e):Array.isArray(e)&&this.add_action(t,e[0],e[1])}))}run(t,...n){if(this.state instanceof Promise)return Promise.resolve(this.state).then((e=>{this.state=e,this.run(t,...n)}));{const e=t.toString();return this.is_global_event(e)?i.run(e,...n):this._app.run(e,...n)}}on(t,n,e){const s=t.toString();return this._actions.push({name:s,fn:n}),this.is_global_event(s)?i.on(s,n,e):this._app.on(s,n,e)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((t=>{const{name:n,fn:e}=t;this.is_global_event(n)?i.off(n,e):this._app.off(n,e)}))}}j.t=!0;const O=t=>{if(t||(t="#"),t.startsWith("#")){const[n,...e]=t.split("/");i.run(n,...e)||i.run("///",n,...e),i.run("//",n,...e)}else if(t.startsWith("/")){const[n,e,...s]=t.split("/");i.run("/"+e,...s)||i.run("///","/"+e,...s),i.run("//","/"+e,...s)}else i.run(t)||i.run("///",t),i.run("//",t)};i.h=i.createElement=function(t,n,...e){const i=c(e);if("string"==typeof t)return{tag:t,props:n,children:i};if(Array.isArray(t))return t;if(void 0===t&&e)return i;if(Object.getPrototypeOf(t).t)return{tag:t,props:n,children:i};if("function"==typeof t)return t(n,i);throw new Error(`Unknown tag in vdom ${t}`)},i.render=(t,n,e={})=>{if(null==n||!1===n)return;!function(t,n,e={}){if(null==n||!1===n)return;if(n=b(n,e),!t)return;const i="SVG"===t.nodeName;Array.isArray(n)?h(t,n,i):h(t,[n],i)}("string"==typeof t&&t?document.getElementById(t)||document.querySelector(t):t,n=r(n,e),e)},i.Fragment=function(t,...n){return c(n)},i.webComponent=y,i.safeHTML=u,i.start=(t,n,e,i,s)=>{const o=Object.assign({render:!0,global_event:!0},s),r=new j(n,e,i);return s&&s.rendered&&(r.rendered=s.rendered),r.mount(t,o),r};const x=t=>{};i.on("$",x),i.on("debug",(t=>x)),i.on("//",x),i.on("#",x),i.route=O,i.on("route",(t=>i.route&&i.route(t))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{i.route===O&&(window.onpopstate=()=>O(location.hash),document.body.hasAttribute("apprun-no-init")||O(location.hash))})),"object"==typeof window&&(window.Component=j,window.React=i,window.on=function(t,n={}){return function(e,i){const s=t?t.toString():i;v.defineMetadata(`apprun-update:${s}`,{name:s,key:i,options:n},e)}},window.customElement=function(t,n){return function(e){return y(t,e,n),e}},window.safeHTML=u);const k=(t,n,e,i)=>{if(!n||!e)return;const s=t=>{var e,i;const s=n.cloneNode();null===(e=n.parentNode)||void 0===e||e.replaceChild(s,n);const o=null===(i=(n=s).contentWindow)||void 0===i?void 0:i.document;o&&(o.open(),t.indexOf("<html")>=0?o.write(t):o.write((t=>`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/custom-elements/1.1.2/custom-elements.min.js"><\/script>\n  <title>AppRun Playground</title>\n  <style>\n    body {\n      font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;\n      margin: 2em;\n    }\n  </style>\n  <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n  <script src="https://unpkg.com/apprun/dist/apprun-html.js"><\/script>\n</head>\n<body>\n<script>\n  Babel.registerPlugin("d", [Babel.availablePlugins["proposal-decorators"], {legacy: true}]);\n  Babel.registerPlugin("c", [Babel.availablePlugins["proposal-class-properties"], {loose: true}]);\n  Babel.registerPlugin("b", [Babel.availablePlugins["proposal-private-methods"], {loose: true}]);\n<\/script>\n<script type="text/babel" data-plugins="d, c, b">\n  ${t}\n<\/script>\n</body>\n</html>`)(t)),o.close())};s(e),!i&&t&&"TEXTAREA"===t.nodeName&&("undefined"==typeof CodeMirror?t.onkeyup=()=>s(t.value):t.editor||(t.editor=CodeMirror.fromTextArea(t,{lineNumbers:!0,mode:"jsx"}),t.editor.on("change",(t=>s(t.getValue())))))};i.webComponent("apprun-play",class extends j{constructor(){super(...arguments),this.view=t=>{const n=t["code-element-id"],e=this.element;let s,o;return s=n?document.getElementById(n):e.previousElementSibling||e.parentElement.previousElementSibling,o=(null==s?void 0:s.innerText)||(null==s?void 0:s.value)||t.code,this.state.code_area=s,this.state.code=o,o?i.h(i.Fragment,null,i.h("div",{class:"toolbox"},!t.hide_button&&i.h("a",{class:"button",$onclick:"show-popup"},"Try the Code"))):i.h("div",null,"AppRun Play cannot find code to run, please set code-element-id or code.")},this.rendered=({style:t,hide_src:n,code_area:e,code:i})=>{if(!i)return;if(!document.getElementById("play-popup")){document.body.insertAdjacentHTML("beforeend",'<div id="play-popup" class="overlay">\n<style id="apprun-play-style">\n.apprun-play .col {\n  height: 100%;\n  flex: 1;\n}\n.apprun-preview {\n  width: 100%\n}\n.apprun-play .editor, .apprun-play .preview {\n  display: inline-block;\n  width: calc(100% - 20px);\n  height: calc(100% - 10px);\n}\n\na.button {\n  font-size: .8em;\n  padding: 10px;\n  cursor: pointer;\n  color: var(--md-primary-bg-color);\n  background: var(--md-primary-fg-color)\n}\na.button:hover {\n  color: var(--md-primary-fg-color);\n  background: var(--md-primary-bg-color)\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  visibility: hidden;\n  opacity: 0;\n  z-index: 999;\n}\n.overlay.show {\n  visibility: visible;\n  opacity: 1;\n}\n\n.popup {\n  margin: 80px auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 3px;\n  position: relative;\n  width: 90%;\n  height: calc(100% - 150px);\n}\n\n.popup .close {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #333;\n}\n.popup .close:hover {\n  color: #06D85F;\n}\n.popup .content {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n}\n\n.cm-s-default {\n  height: 100%;\n  font-size: small;\n  line-height: 1.5em;\n  z-index: 0;\n}\n</style>\n\n\t<div class="popup apprun-play">\n\t\t<a class="close" href="javascript:app.run(\'@close-popup\')">&times;</a>\n\t\t<div class="content">\n\t\t\t<div class="col">\n        <textarea class="editor"></textarea>\n      </div>\n      <div class="col">\n      <iframe class="preview"/>\n      </div>\n    </div>\n\t</div>\n</div>');const t=document.querySelector(".apprun-play .editor"),n=document.querySelector(".apprun-play .preview");t.value=i,k(t,n,i,!1)}const s=document.createElement("iframe");s.classList.add("apprun-preview"),s.style.cssText=t,this.element.before(s),n&&(e.style.display="none"),k(e,s,i,n)},this.update={"show-popup":({code:t})=>{var n;null===(n=document.querySelector(".apprun-play .editor").editor)||void 0===n||n.setValue(t),document.getElementById("play-popup").classList.add("show")},"@close-popup":()=>{document.getElementById("play-popup").classList.remove("show")}}}});
//# sourceMappingURL=apprun-play.esm.js.map
