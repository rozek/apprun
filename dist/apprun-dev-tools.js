!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.apprun=t():e.apprun=t()}(this,(()=>(()=>{"use strict";var e={752:(e,t,n)=>{n.d(t,{Z:()=>l});let o;const s="object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g;s.app&&s._AppRunVersions?o=s.app:(o=new class{constructor(){this._events={}}on(e,t,n={}){this._events[e]=this._events[e]||[],this._events[e].push({fn:t,options:n})}off(e,t){const n=this._events[e]||[];this._events[e]=n.filter((e=>e.fn!==t))}find(e){return this._events[e]}run(e,...t){const n=this.getSubscribers(e,this._events);return console.assert(n&&n.length>0,"No subscriber for event: "+e),n.forEach((n=>{const{fn:o,options:s}=n;return s.delay?this.delay(e,o,t,s):Object.keys(s).length>0?o.apply(this,[...t,s]):o.apply(this,t),!n.options.once})),n.length}once(e,t,n={}){this.on(e,t,Object.assign(Object.assign({},n),{once:!0}))}delay(e,t,n,o){o._t&&clearTimeout(o._t),o._t=setTimeout((()=>{clearTimeout(o._t),Object.keys(o).length>0?t.apply(this,[...n,o]):t.apply(this,n)}),o.delay)}query(e,...t){const n=this.getSubscribers(e,this._events);console.assert(n&&n.length>0,"No subscriber for event: "+e);const o=n.map((e=>{const{fn:n,options:o}=e;return Object.keys(o).length>0?n.apply(this,[...t,o]):n.apply(this,t)}));return Promise.all(o)}getSubscribers(e,t){const n=t[e]||[];return t[e]=n.filter((e=>!e.options.once)),Object.keys(t).filter((t=>t.endsWith("*")&&e.startsWith(t.replace("*","")))).sort(((e,t)=>t.length-e.length)).forEach((o=>n.push(...t[o].map((t=>Object.assign(Object.assign({},t),{options:Object.assign(Object.assign({},t.options),{event:e})})))))),n}},s.app=o,s._AppRunVersions="AppRun-3");const l=o}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,n),l.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{n.r(o);var e=n(752);function t(e){return e.map((e=>l(e))).join("")}function s(e){for(var t in e)null==e[t]?delete e[t]:"object"==typeof e[t]&&s(e[t])}function l(e){if(!e)return"";if("_$litType$"in e)return e.toString();if(s(e),Array.isArray(e))return t(e);if("string"==typeof e)return e.startsWith("_html:")?e.substring(6):e;if(e.tag){const n=e.props?function(e){return Object.keys(e).map((t=>{return` ${"className"===t?"class":t}="${n=e[t],"object"==typeof n?Object.keys(n).map((e=>`${e}:${n[e]}`)).join(";"):n.toString()}"`;var n})).join("")}(e.props):"",o=e.children?t(e.children):"";return`<${e.tag}${n}>${o}</${e.tag}>`}return"object"==typeof e?JSON.stringify(e):void 0}const r=l;let c;function i(e){c=window.open("",e),c.document.write(`<html>\n  <title>AppRun Analyzer | ${document.location.href}</title>\n  <style>\n    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI" }\n  </style>\n  <body><pre>`)}function a(e){c.document.write(e+"\n")}function p(){c.document.write("</pre>\n  </body>\n  </html>"),c.document.close()}app.debug=!0;const u=e=>{a(`import ${e.constructor.name} from '../src/${e.constructor.name}'`),a(`describe('${e.constructor.name}', ()=>{`),e._actions.forEach((t=>{"."!==t.name&&(a(`  it ('should handle event: ${t.name}', (done)=>{`),a(`    const component = new ${e.constructor.name}().mount();`),a(`    component.run('${t.name}');`),a("    setTimeout(() => {"),a("      //expect(?).toHaveBeenCalled();"),a("      //expect(component.state).toBe(?);"),a("    done();"),a("  })"))})),a("});")};let f=!1,d=[];app.on("debug",(e=>{f&&e.vdom&&(d.push(e),console.log(`* ${d.length} state(s) recorded.`))}));var m;function h(e){const t=window.open("","_apprun_debug","toolbar=0");t.document.write(`<html>\n  <title>AppRun Analyzer | ${document.location.href}</title>\n  <style>\n    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI" }\n    li { margin-left: 80px; }\n  </style>\n  <body>\n  <div id="main">${e}</div>\n  <\/script>\n  </body>\n  </html>`),t.document.close()}e.Z.debug=!0,window["_apprun-help"]=["",()=>{Object.keys(window).forEach((e=>{e.startsWith("_apprun-")&&("_apprun-help"===e?console.log("AppRun Commands:"):console.log(`* ${e.substring(8)}: ${window[e][0]}`))}))}];const g=()=>{const t={components:{}};e.Z.run("get-components",t);const{components:n}=t;return n};let v=Number(null===(m=null===window||void 0===window?void 0:window.localStorage)||void 0===m?void 0:m.getItem("__apprun_debugging__"))||0;if(e.Z.on("debug",(e=>{1&v&&e.event&&console.log(e),2&v&&e.vdom&&console.log(e)})),window["_apprun-components"]=["components [print]",t=>{(t=>{const n=g(),o=[];if(n instanceof Map)for(let[e,t]of n){const n="string"==typeof e?document.getElementById(e)||document.querySelector(e):e;o.push({element:n,comps:t})}else Object.keys(n).forEach((e=>{const t="string"==typeof e?document.getElementById(e)||document.querySelector(e):e;o.push({element:t,comps:n[e]})}));if(t){const t=(t=>{const n=({events:t})=>e.Z.h("ul",null,t&&t.filter((e=>"."!==e.name)).map((t=>e.Z.h("li",null,t.name)))),o=({components:t})=>e.Z.h("ul",null,t.map((t=>e.Z.h("li",null,e.Z.h("div",null,t.constructor.name),e.Z.h(n,{events:t._actions})))));return e.Z.h("ul",null,t.map((({element:t,comps:n})=>e.Z.h("li",null,e.Z.h("div",null,(t=>e.Z.h("div",null,t.tagName.toLowerCase(),t.id?"#"+t.id:""," ",t.className&&t.className.split(" ").map((e=>"."+e)).join()))(t)),e.Z.h(o,{components:n})))))})(o);h(r(t))}else o.forEach((({element:e,comps:t})=>console.log(e,t)))})("print"===t)}],window["_apprun-events"]=["events [print]",t=>{(t=>{const n=e.Z._events,o={},s=g(),l=e=>e._actions.forEach((t=>{o[t.name]=o[t.name]||[],o[t.name].push(e)}));if(s instanceof Map)for(let[e,t]of s)t.forEach(l);else Object.keys(s).forEach((e=>s[e].forEach(l)));const c=[];if(Object.keys(o).forEach((e=>{c.push({event:e,components:o[e],global:!!n[e]})})),c.sort(((e,t)=>e.event>t.event?1:-1)).map((e=>e.event)),t){const t=(t=>{const n=({components:t})=>e.Z.h("ul",null,t.map((t=>e.Z.h("li",null,e.Z.h("div",null,t.constructor.name))))),o=({events:t,global:o})=>e.Z.h("ul",null,t&&t.filter((e=>e.global===o&&"."!==e.event)).map((({event:t,components:o})=>e.Z.h("li",null,e.Z.h("div",null,t),e.Z.h(n,{components:o})))));return e.Z.h("div",null,e.Z.h("div",null,"GLOBAL EVENTS"),e.Z.h(o,{events:t,global:!0}),e.Z.h("div",null,"LOCAL EVENTS"),e.Z.h(o,{events:t,global:!1}))})(c);h(r(t))}else console.log("=== GLOBAL EVENTS ==="),c.filter((e=>e.global&&"."!==e.event)).forEach((({event:e,components:t})=>console.log({event:e},t))),console.log("=== LOCAL EVENTS ==="),c.filter((e=>!e.global&&"."!==e.event)).forEach((({event:e,components:t})=>console.log({event:e},t)))})("print"===t)}],window["_apprun-log"]=["log [event|view] on|off",(e,t)=>{var n;"on"===e?v=3:"off"===e?v=0:"event"===e?"on"===t?v|=1:"off"===t&&(v&=-2):"view"===e&&("on"===t?v|=2:"off"===t&&(v&=-3)),console.log(`* log ${e} ${t||""}`),null===(n=null===window||void 0===window?void 0:window.localStorage)||void 0===n||n.setItem("__apprun_debugging__",`${v}`)}],window["_apprun-create-event-tests"]=["create-event-tests",()=>(()=>{const e={components:{}};app.run("get-components",e);const{components:t}=e;if(i(""),t instanceof Map)for(let[e,n]of t)n.forEach(u);else Object.keys(t).forEach((e=>{t[e].forEach(u)}));p()})()],window["_apprun-create-state-tests"]=["create-state-tests <start|stop>",e=>{var t;"start"===(t=e)?(d=[],f=!0,console.log("* State logging started.")):"stop"===t?(0!==d.length?(i(""),d.forEach(((e,t)=>{a(`  it ('view snapshot: #${t+1}', ()=>{`),a(`    const component = new ${e.component.constructor.name}()`),a(`    const state = ${JSON.stringify(e.state,void 0,2)};`),a("    const vdom = component['view'](state);"),a("    expect(JSON.stringify(vdom)).toMatchSnapshot();"),a("  })")})),p()):console.log("* No state recorded."),f=!1,d=[],console.log("* State logging stopped.")):console.log("create-state-tests <start|stop>")}],window._apprun=e=>{const[t,...n]=e[0].split(" ").filter((e=>!!e)),o=window[`_apprun-${t}`];o?o[1](...n):window["_apprun-help"][1]()},console.info('AppRun DevTools 2.27: type "_apprun `help`" to list all available commands.'),window.__REDUX_DEVTOOLS_EXTENSION__){let t=!1;const n=window.__REDUX_DEVTOOLS_EXTENSION__.connect();if(n){const o=location.hash||"#";n.send(o,"");const s=[{component:null,state:""}];console.info("Connected to the Redux DevTools"),n.subscribe((n=>{if("START"===n.type)t=!0;else if("STOP"===n.type)t=!1;else if("DISPATCH"===n.type){const t=n.payload.index;if(0===t)e.Z.run(o);else{const{component:e,state:n}=s[t];null==e||e.setState(n)}}}));const l=(e,t,o)=>{null!=o&&(s.push({component:e,state:o}),n.send(t,o))};e.Z.on("debug",(e=>{if(t&&e.event){const t=e.newState,n={type:e.event,payload:e.p},o=e.component;t instanceof Promise?t.then((e=>l(o,n,e))):l(o,n,t)}}))}}})(),o})()));
//# sourceMappingURL=apprun-dev-tools.js.map