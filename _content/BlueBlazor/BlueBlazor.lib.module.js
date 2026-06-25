var Yn=Object.create;var Sr=Object.defineProperty;var Gn=Object.getOwnPropertyDescriptor;var Xn=Object.getOwnPropertyNames;var Qn=Object.getPrototypeOf,Zn=Object.prototype.hasOwnProperty;var Dt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Jn=(t,e,o,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Xn(e))!Zn.call(t,i)&&i!==o&&Sr(t,i,{get:()=>e[i],enumerable:!(r=Gn(e,i))||r.enumerable});return t};var ts=(t,e,o)=>(o=t!=null?Yn(Qn(t)):{},Jn(e||!t||!t.__esModule?Sr(o,"default",{value:t,enumerable:!0}):o,t));var Nn=Dt((sr,ar)=>{(function(t,e){typeof sr=="object"&&typeof ar<"u"?ar.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self,t.Data=e())})(sr,function(){"use strict";let t=new Map;return{set(o,r,i){t.has(o)||t.set(o,new Map);let n=t.get(o);if(!n.has(r)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(r,i)},get(o,r){return t.has(o)&&t.get(o).get(r)||null},remove(o,r){if(!t.has(o))return;let i=t.get(o);i.delete(r),i.size===0&&t.delete(o)}}})});var fe=Dt((yo,Vn)=>{(function(t,e){typeof yo=="object"&&typeof Vn<"u"?e(yo):typeof define=="function"&&define.amd?define(["exports"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.Index={}))})(yo,function(t){"use strict";let r="transitionend",i=y=>(y&&window.CSS&&window.CSS.escape&&(y=y.replace(/#([^\s"#']+)/g,(k,$)=>`#${CSS.escape($)}`)),y),n=y=>y==null?`${y}`:Object.prototype.toString.call(y).match(/\s([a-z]+)/i)[1].toLowerCase(),s=y=>{do y+=Math.floor(Math.random()*1e6);while(document.getElementById(y));return y},a=y=>{if(!y)return 0;let{transitionDuration:k,transitionDelay:$}=window.getComputedStyle(y),O=Number.parseFloat(k),z=Number.parseFloat($);return!O&&!z?0:(k=k.split(",")[0],$=$.split(",")[0],(Number.parseFloat(k)+Number.parseFloat($))*1e3)},h=y=>{y.dispatchEvent(new Event(r))},b=y=>!y||typeof y!="object"?!1:(typeof y.jquery<"u"&&(y=y[0]),typeof y.nodeType<"u"),E=y=>b(y)?y.jquery?y[0]:y:typeof y=="string"&&y.length>0?document.querySelector(i(y)):null,C=y=>{if(!b(y)||y.getClientRects().length===0)return!1;let k=getComputedStyle(y).getPropertyValue("visibility")==="visible",$=y.closest("details:not([open])");if(!$)return k;if($!==y){let O=y.closest("summary");if(O&&O.parentNode!==$||O===null)return!1}return k},x=y=>!y||y.nodeType!==Node.ELEMENT_NODE||y.classList.contains("disabled")?!0:typeof y.disabled<"u"?y.disabled:y.hasAttribute("disabled")&&y.getAttribute("disabled")!=="false",u=y=>{if(!document.documentElement.attachShadow)return null;if(typeof y.getRootNode=="function"){let k=y.getRootNode();return k instanceof ShadowRoot?k:null}return y instanceof ShadowRoot?y:y.parentNode?u(y.parentNode):null},m=()=>{},l=y=>{y.offsetHeight},L=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,d=[],f=y=>{document.readyState==="loading"?(d.length||document.addEventListener("DOMContentLoaded",()=>{for(let k of d)k()}),d.push(y)):y()},A=()=>document.documentElement.dir==="rtl",p=y=>{f(()=>{let k=L();if(k){let $=y.NAME,O=k.fn[$];k.fn[$]=y.jQueryInterface,k.fn[$].Constructor=y,k.fn[$].noConflict=()=>(k.fn[$]=O,y.jQueryInterface)}})},g=(y,k=[],$=y)=>typeof y=="function"?y.call(...k):$,S=(y,k,$=!0)=>{if(!$){g(y);return}let z=a(k)+5,V=!1,F=({target:G})=>{G===k&&(V=!0,k.removeEventListener(r,F),g(y))};k.addEventListener(r,F),setTimeout(()=>{V||h(k)},z)},T=(y,k,$,O)=>{let z=y.length,V=y.indexOf(k);return V===-1?!$&&O?y[z-1]:y[0]:(V+=$?1:-1,O&&(V=(V+z)%z),y[Math.max(0,Math.min(V,z-1))])};t.defineJQueryPlugin=p,t.execute=g,t.executeAfterTransition=S,t.findShadowRoot=u,t.getElement=E,t.getNextActiveElement=T,t.getTransitionDurationFromElement=a,t.getUID=s,t.getjQuery=L,t.isDisabled=x,t.isElement=b,t.isRTL=A,t.isVisible=C,t.noop=m,t.onDOMContentLoaded=f,t.parseSelector=i,t.reflow=l,t.toType=n,t.triggerTransitionEnd=h,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})})});var hr=Dt((lr,cr)=>{(function(t,e){typeof lr=="object"&&typeof cr<"u"?cr.exports=e(fe()):typeof define=="function"&&define.amd?define(["../util/index"],e):(t=typeof globalThis<"u"?globalThis:t||self,t.EventHandler=e(t.Index))})(lr,function(t){"use strict";let e=/[^.]*(?=\..*)\.|.*/,o=/\..*/,r=/::\d+$/,i={},n=1,s={mouseenter:"mouseover",mouseleave:"mouseout"},a=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function h(p,g){return g&&`${g}::${n++}`||p.uidEvent||n++}function b(p){let g=h(p);return p.uidEvent=g,i[g]=i[g]||{},i[g]}function E(p,g){return function S(T){return A(T,{delegateTarget:p}),S.oneOff&&f.off(p,T.type,g),g.apply(p,[T])}}function C(p,g,S){return function T(y){let k=p.querySelectorAll(g);for(let{target:$}=y;$&&$!==this;$=$.parentNode)for(let O of k)if(O===$)return A(y,{delegateTarget:$}),T.oneOff&&f.off(p,y.type,g,S),S.apply($,[y])}}function x(p,g,S=null){return Object.values(p).find(T=>T.callable===g&&T.delegationSelector===S)}function u(p,g,S){let T=typeof g=="string",y=T?S:g||S,k=d(p);return a.has(k)||(k=p),[T,y,k]}function m(p,g,S,T,y){if(typeof g!="string"||!p)return;let[k,$,O]=u(g,S,T);g in s&&($=(M=>function(w){if(!w.relatedTarget||w.relatedTarget!==w.delegateTarget&&!w.delegateTarget.contains(w.relatedTarget))return M.call(this,w)})($));let z=b(p),V=z[O]||(z[O]={}),F=x(V,$,k?S:null);if(F){F.oneOff=F.oneOff&&y;return}let G=h($,g.replace(e,"")),D=k?C(p,S,$):E(p,$);D.delegationSelector=k?S:null,D.callable=$,D.oneOff=y,D.uidEvent=G,V[G]=D,p.addEventListener(O,D,k)}function l(p,g,S,T,y){let k=x(g[S],T,y);k&&(p.removeEventListener(S,k,!!y),delete g[S][k.uidEvent])}function L(p,g,S,T){let y=g[S]||{};for(let[k,$]of Object.entries(y))k.includes(T)&&l(p,g,S,$.callable,$.delegationSelector)}function d(p){return p=p.replace(o,""),s[p]||p}let f={on(p,g,S,T){m(p,g,S,T,!1)},one(p,g,S,T){m(p,g,S,T,!0)},off(p,g,S,T){if(typeof g!="string"||!p)return;let[y,k,$]=u(g,S,T),O=$!==g,z=b(p),V=z[$]||{},F=g.startsWith(".");if(typeof k<"u"){if(!Object.keys(V).length)return;l(p,z,$,k,y?S:null);return}if(F)for(let G of Object.keys(z))L(p,z,G,g.slice(1));for(let[G,D]of Object.entries(V)){let R=G.replace(r,"");(!O||g.includes(R))&&l(p,z,$,D.callable,D.delegationSelector)}},trigger(p,g,S){if(typeof g!="string"||!p)return null;let T=t.getjQuery(),y=d(g),k=g!==y,$=null,O=!0,z=!0,V=!1;k&&T&&($=T.Event(g,S),T(p).trigger($),O=!$.isPropagationStopped(),z=!$.isImmediatePropagationStopped(),V=$.isDefaultPrevented());let F=A(new Event(g,{bubbles:O,cancelable:!0}),S);return V&&F.preventDefault(),z&&p.dispatchEvent(F),F.defaultPrevented&&$&&$.preventDefault(),F}};function A(p,g={}){for(let[S,T]of Object.entries(g))try{p[S]=T}catch{Object.defineProperty(p,S,{configurable:!0,get(){return T}})}return p}return f})});var Hn=Dt((ur,dr)=>{(function(t,e){typeof ur=="object"&&typeof dr<"u"?dr.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self,t.Manipulator=e())})(ur,function(){"use strict";function t(r){if(r==="true")return!0;if(r==="false")return!1;if(r===Number(r).toString())return Number(r);if(r===""||r==="null")return null;if(typeof r!="string")return r;try{return JSON.parse(decodeURIComponent(r))}catch{return r}}function e(r){return r.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}return{setDataAttribute(r,i,n){r.setAttribute(`data-bs-${e(i)}`,n)},removeDataAttribute(r,i){r.removeAttribute(`data-bs-${e(i)}`)},getDataAttributes(r){if(!r)return{};let i={},n=Object.keys(r.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(let s of n){let a=s.replace(/^bs/,"");a=a.charAt(0).toLowerCase()+a.slice(1),i[a]=t(r.dataset[s])}return i},getDataAttribute(r,i){return t(r.getAttribute(`data-bs-${e(i)}`))}}})});var qn=Dt((pr,fr)=>{(function(t,e){typeof pr=="object"&&typeof fr<"u"?fr.exports=e(Hn(),fe()):typeof define=="function"&&define.amd?define(["../dom/manipulator","./index"],e):(t=typeof globalThis<"u"?globalThis:t||self,t.Config=e(t.Manipulator,t.Index))})(pr,function(t,e){"use strict";class o{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(i){return i=this._mergeConfigObj(i),i=this._configAfterMerge(i),this._typeCheckConfig(i),i}_configAfterMerge(i){return i}_mergeConfigObj(i,n){let s=e.isElement(n)?t.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...e.isElement(n)?t.getDataAttributes(n):{},...typeof i=="object"?i:{}}}_typeCheckConfig(i,n=this.constructor.DefaultType){for(let[s,a]of Object.entries(n)){let h=i[s],b=e.isElement(h)?"element":e.toType(h);if(!new RegExp(a).test(b))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${b}" but expected type "${a}".`)}}}return o})});var Un=Dt((mr,gr)=>{(function(t,e){typeof mr=="object"&&typeof gr<"u"?gr.exports=e(Nn(),hr(),qn(),fe()):typeof define=="function"&&define.amd?define(["./dom/data","./dom/event-handler","./util/config","./util/index"],e):(t=typeof globalThis<"u"?globalThis:t||self,t.BaseComponent=e(t.Data,t.EventHandler,t.Config,t.Index))})(mr,function(t,e,o,r){"use strict";let i="5.3.8";class n extends o{constructor(a,h){super(),a=r.getElement(a),a&&(this._element=a,this._config=this._getConfig(h),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),e.off(this._element,this.constructor.EVENT_KEY);for(let a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,h,b=!0){r.executeAfterTransition(a,h,b)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return t.get(r.getElement(a),this.DATA_KEY)}static getOrCreateInstance(a,h={}){return this.getInstance(a)||new this(a,typeof h=="object"?h:null)}static get VERSION(){return i}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}return n})});var Wn=Dt((vr,br)=>{(function(t,e){typeof vr=="object"&&typeof br<"u"?br.exports=e(fe()):typeof define=="function"&&define.amd?define(["../util/index"],e):(t=typeof globalThis<"u"?globalThis:t||self,t.SelectorEngine=e(t.Index))})(vr,function(t){"use strict";let e=r=>{let i=r.getAttribute("data-bs-target");if(!i||i==="#"){let n=r.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),i=n&&n!=="#"?n.trim():null}return i?i.split(",").map(n=>t.parseSelector(n)).join(","):null},o={find(r,i=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(i,r))},findOne(r,i=document.documentElement){return Element.prototype.querySelector.call(i,r)},children(r,i){return[].concat(...r.children).filter(n=>n.matches(i))},parents(r,i){let n=[],s=r.parentNode.closest(i);for(;s;)n.push(s),s=s.parentNode.closest(i);return n},prev(r,i){let n=r.previousElementSibling;for(;n;){if(n.matches(i))return[n];n=n.previousElementSibling}return[]},next(r,i){let n=r.nextElementSibling;for(;n;){if(n.matches(i))return[n];n=n.nextElementSibling}return[]},focusableChildren(r){let i=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(i,r).filter(n=>!t.isDisabled(n)&&t.isVisible(n))},getSelectorFromElement(r){let i=e(r);return i&&o.findOne(i)?i:null},getElementFromSelector(r){let i=e(r);return i?o.findOne(i):null},getMultipleElementsFromSelector(r){let i=e(r);return i?o.find(i):[]}};return o})});var jn=Dt((wr,yr)=>{(function(t,e){typeof wr=="object"&&typeof yr<"u"?yr.exports=e(Un(),hr(),Wn(),fe()):typeof define=="function"&&define.amd?define(["./base-component","./dom/event-handler","./dom/selector-engine","./util/index"],e):(t=typeof globalThis<"u"?globalThis:t||self,t.Tab=e(t.BaseComponent,t.EventHandler,t.SelectorEngine,t.Index))})(wr,function(t,e,o,r){"use strict";let i="tab",s=".bs.tab",a=`hide${s}`,h=`hidden${s}`,b=`show${s}`,E=`shown${s}`,C=`click${s}`,x=`keydown${s}`,u=`load${s}`,m="ArrowLeft",l="ArrowRight",L="ArrowUp",d="ArrowDown",f="Home",A="End",p="active",g="fade",S="show",T="dropdown",y=".dropdown-toggle",k=".dropdown-menu",$=`:not(${y})`,O='.list-group, .nav, [role="tablist"]',z=".nav-item, .list-group-item",V=`.nav-link${$}, .list-group-item${$}, [role="tab"]${$}`,F='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',G=`${V}, ${F}`,D=`.${p}[data-bs-toggle="tab"], .${p}[data-bs-toggle="pill"], .${p}[data-bs-toggle="list"]`;class R extends t{constructor(w){super(w),this._parent=this._element.closest(O),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),e.on(this._element,x,_=>this._keydown(_)))}static get NAME(){return i}show(){let w=this._element;if(this._elemIsActive(w))return;let _=this._getActiveElem(),P=_?e.trigger(_,a,{relatedTarget:w}):null;e.trigger(w,b,{relatedTarget:_}).defaultPrevented||P&&P.defaultPrevented||(this._deactivate(_,w),this._activate(w,_))}_activate(w,_){if(!w)return;w.classList.add(p),this._activate(o.getElementFromSelector(w));let P=()=>{if(w.getAttribute("role")!=="tab"){w.classList.add(S);return}w.removeAttribute("tabindex"),w.setAttribute("aria-selected",!0),this._toggleDropDown(w,!0),e.trigger(w,E,{relatedTarget:_})};this._queueCallback(P,w,w.classList.contains(g))}_deactivate(w,_){if(!w)return;w.classList.remove(p),w.blur(),this._deactivate(o.getElementFromSelector(w));let P=()=>{if(w.getAttribute("role")!=="tab"){w.classList.remove(S);return}w.setAttribute("aria-selected",!1),w.setAttribute("tabindex","-1"),this._toggleDropDown(w,!1),e.trigger(w,h,{relatedTarget:_})};this._queueCallback(P,w,w.classList.contains(g))}_keydown(w){if(![m,l,L,d,f,A].includes(w.key))return;w.stopPropagation(),w.preventDefault();let _=this._getChildren().filter(q=>!r.isDisabled(q)),P;if([f,A].includes(w.key))P=_[w.key===f?0:_.length-1];else{let q=[l,d].includes(w.key);P=r.getNextActiveElement(_,w.target,q,!0)}P&&(P.focus({preventScroll:!0}),R.getOrCreateInstance(P).show())}_getChildren(){return o.find(G,this._parent)}_getActiveElem(){return this._getChildren().find(w=>this._elemIsActive(w))||null}_setInitialAttributes(w,_){this._setAttributeIfNotExists(w,"role","tablist");for(let P of _)this._setInitialAttributesOnChild(P)}_setInitialAttributesOnChild(w){w=this._getInnerElement(w);let _=this._elemIsActive(w),P=this._getOuterElement(w);w.setAttribute("aria-selected",_),P!==w&&this._setAttributeIfNotExists(P,"role","presentation"),_||w.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(w,"role","tab"),this._setInitialAttributesOnTargetPanel(w)}_setInitialAttributesOnTargetPanel(w){let _=o.getElementFromSelector(w);_&&(this._setAttributeIfNotExists(_,"role","tabpanel"),w.id&&this._setAttributeIfNotExists(_,"aria-labelledby",`${w.id}`))}_toggleDropDown(w,_){let P=this._getOuterElement(w);if(!P.classList.contains(T))return;let q=(B,ut)=>{let ct=o.findOne(B,P);ct&&ct.classList.toggle(ut,_)};q(y,p),q(k,S),P.setAttribute("aria-expanded",_)}_setAttributeIfNotExists(w,_,P){w.hasAttribute(_)||w.setAttribute(_,P)}_elemIsActive(w){return w.classList.contains(p)}_getInnerElement(w){return w.matches(G)?w:o.findOne(G,w)}_getOuterElement(w){return w.closest(z)||w}static jQueryInterface(w){return this.each(function(){let _=R.getOrCreateInstance(this);if(typeof w=="string"){if(_[w]===void 0||w.startsWith("_")||w==="constructor")throw new TypeError(`No method named "${w}"`);_[w]()}})}}return e.on(document,C,F,function(M){["A","AREA"].includes(this.tagName)&&M.preventDefault(),!r.isDisabled(this)&&R.getOrCreateInstance(this).show()}),e.on(window,u,()=>{for(let M of o.find(D))R.getOrCreateInstance(M)}),r.defineJQueryPlugin(R),R})});var ee=new Map,Fe=class extends HTMLElement{static observedAttributes=["src"];src=null;attributeChangedCallback(e,o,r){e==="src"&&(this.src=r,this.unregisterPageScriptElement(o),this.registerPageScriptElement(r))}disconnectedCallback(){this.unregisterPageScriptElement(this.src)}registerPageScriptElement(e){if(!e)throw new Error('Must provide a non-empty value for the "src" attribute.');let o=ee.get(e);o?o.referenceCount++:(o={referenceCount:1,module:null},ee.set(e,o),this.initializePageScriptModule(e,o))}unregisterPageScriptElement(e){if(!e)return;let o=ee.get(e);o&&o.referenceCount--}async initializePageScriptModule(e,o){e.startsWith("./")&&(e=new URL(e.substring(2),document.baseURI).toString());let r=await import(e);o.referenceCount<=0||(o.module=r,r.onLoad?.(),r.onUpdate?.())}};function $r(){for(let[t,{module:e,referenceCount:o}]of ee)o<=0&&(e?.onDispose?.(),ee.delete(t));for(let{module:t}of ee.values())t?.onUpdate?.()}var Be=globalThis,Ne=Be.ShadowRoot&&(Be.ShadyCSS===void 0||Be.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Lo=Symbol(),_r=new WeakMap,me=class{constructor(e,o,r){if(this._$cssResult$=!0,r!==Lo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o,o=this.t;if(Ne&&e===void 0){let r=o!==void 0&&o.length===1;r&&(e=_r.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&_r.set(o,e))}return e}toString(){return this.cssText}},kr=t=>new me(typeof t=="string"?t:t+"",void 0,Lo),K=(t,...e)=>{let o=t.length===1?t[0]:e.reduce((r,i,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new me(o,t,Lo)},Tr=(t,e)=>{if(Ne)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(let o of e){let r=document.createElement("style"),i=Be.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=o.cssText,t.appendChild(r)}},Ao=Ne?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(let r of e.cssRules)o+=r.cssText;return kr(o)})(t):t;var{is:es,defineProperty:os,getOwnPropertyDescriptor:rs,getOwnPropertyNames:is,getOwnPropertySymbols:ns,getPrototypeOf:ss}=Object,Ve=globalThis,Mr=Ve.trustedTypes,as=Mr?Mr.emptyScript:"",ls=Ve.reactiveElementPolyfillSupport,ge=(t,e)=>t,ve={toAttribute(t,e){switch(e){case Boolean:t=t?as:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},He=(t,e)=>!es(t,e),Rr={attribute:!0,type:String,converter:ve,reflect:!1,useDefault:!1,hasChanged:He};Symbol.metadata??=Symbol("metadata"),Ve.litPropertyMetadata??=new WeakMap;var _t=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=Rr){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(e,o),!o.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,o);i!==void 0&&os(this.prototype,e,i)}}static getPropertyDescriptor(e,o,r){let{get:i,set:n}=rs(this.prototype,e)??{get(){return this[o]},set(s){this[o]=s}};return{get:i,set(s){let a=i?.call(this);n?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Rr}static _$Ei(){if(this.hasOwnProperty(ge("elementProperties")))return;let e=ss(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ge("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge("properties"))){let o=this.properties,r=[...is(o),...ns(o)];for(let i of r)this.createProperty(i,o[i])}let e=this[Symbol.metadata];if(e!==null){let o=litPropertyMetadata.get(e);if(o!==void 0)for(let[r,i]of o)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[o,r]of this.elementProperties){let i=this._$Eu(o,r);i!==void 0&&this._$Eh.set(i,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let o=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)o.unshift(Ao(i))}else e!==void 0&&o.push(Ao(e));return o}static _$Eu(e,o){let r=o.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,o=this.constructor.elementProperties;for(let r of o.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,o,r){this._$AK(e,r)}_$ET(e,o){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute!==void 0?r.converter:ve).toAttribute(o,r.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,o){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:ve;this._$Em=i;let a=s.fromAttribute(o,n.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,o,r,i=!1,n){if(e!==void 0){let s=this.constructor;if(i===!1&&(n=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??He)(n,o)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,o,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,o,{useDefault:r,reflect:i,wrapped:n},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??o??this[e]),n!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(o=void 0),this._$AL.set(e,o)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:s}=n,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,n,a)}}let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(o)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(o)}willUpdate(e){}_$AE(e){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(o=>this._$ET(o,this[o])),this._$EM()}updated(e){}firstUpdated(e){}};_t.elementStyles=[],_t.shadowRootOptions={mode:"open"},_t[ge("elementProperties")]=new Map,_t[ge("finalized")]=new Map,ls?.({ReactiveElement:_t}),(Ve.reactiveElementVersions??=[]).push("2.1.2");var $o=globalThis,Dr=t=>t,qe=$o.trustedTypes,Pr=qe?qe.createPolicy("lit-html",{createHTML:t=>t}):void 0,_o="$lit$",kt=`lit$${Math.random().toFixed(9).slice(2)}$`,ko="?"+kt,cs=`<${ko}>`,Ht=document,we=()=>Ht.createComment(""),ye=t=>t===null||typeof t!="object"&&typeof t!="function",To=Array.isArray,Nr=t=>To(t)||typeof t?.[Symbol.iterator]=="function",So=`[ 	
\f\r]`,be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zr=/-->/g,Or=/>/g,Nt=RegExp(`>|${So}(?:([^\\s"'>=/]+)(${So}*=${So}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ir=/'/g,Fr=/"/g,Vr=/^(?:script|style|textarea|title)$/i,Mo=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),U=Mo(1),Hr=Mo(2),qr=Mo(3),st=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Br=new WeakMap,Vt=Ht.createTreeWalker(Ht,129);function Ur(t,e){if(!To(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pr!==void 0?Pr.createHTML(e):e}var Wr=(t,e)=>{let o=t.length-1,r=[],i,n=e===2?"<svg>":e===3?"<math>":"",s=be;for(let a=0;a<o;a++){let h=t[a],b,E,C=-1,x=0;for(;x<h.length&&(s.lastIndex=x,E=s.exec(h),E!==null);)x=s.lastIndex,s===be?E[1]==="!--"?s=zr:E[1]!==void 0?s=Or:E[2]!==void 0?(Vr.test(E[2])&&(i=RegExp("</"+E[2],"g")),s=Nt):E[3]!==void 0&&(s=Nt):s===Nt?E[0]===">"?(s=i??be,C=-1):E[1]===void 0?C=-2:(C=s.lastIndex-E[2].length,b=E[1],s=E[3]===void 0?Nt:E[3]==='"'?Fr:Ir):s===Fr||s===Ir?s=Nt:s===zr||s===Or?s=be:(s=Nt,i=void 0);let u=s===Nt&&t[a+1].startsWith("/>")?" ":"";n+=s===be?h+cs:C>=0?(r.push(b),h.slice(0,C)+_o+h.slice(C)+kt+u):h+kt+(C===-2?a:u)}return[Ur(t,n+(t[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Ce=class t{constructor({strings:e,_$litType$:o},r){let i;this.parts=[];let n=0,s=0,a=e.length-1,h=this.parts,[b,E]=Wr(e,o);if(this.el=t.createElement(b,r),Vt.currentNode=this.el.content,o===2||o===3){let C=this.el.content.firstChild;C.replaceWith(...C.childNodes)}for(;(i=Vt.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let C of i.getAttributeNames())if(C.endsWith(_o)){let x=E[s++],u=i.getAttribute(C).split(kt),m=/([.?@])?(.*)/.exec(x);h.push({type:1,index:n,name:m[2],strings:u,ctor:m[1]==="."?We:m[1]==="?"?je:m[1]==="@"?Ke:Ut}),i.removeAttribute(C)}else C.startsWith(kt)&&(h.push({type:6,index:n}),i.removeAttribute(C));if(Vr.test(i.tagName)){let C=i.textContent.split(kt),x=C.length-1;if(x>0){i.textContent=qe?qe.emptyScript:"";for(let u=0;u<x;u++)i.append(C[u],we()),Vt.nextNode(),h.push({type:2,index:++n});i.append(C[x],we())}}}else if(i.nodeType===8)if(i.data===ko)h.push({type:2,index:n});else{let C=-1;for(;(C=i.data.indexOf(kt,C+1))!==-1;)h.push({type:7,index:n}),C+=kt.length-1}n++}}static createElement(e,o){let r=Ht.createElement("template");return r.innerHTML=e,r}};function qt(t,e,o=t,r){if(e===st)return e;let i=r!==void 0?o._$Co?.[r]:o._$Cl,n=ye(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,o,r)),r!==void 0?(o._$Co??=[])[r]=i:o._$Cl=i),i!==void 0&&(e=qt(t,i._$AS(t,e.values),i,r)),e}var Ue=class{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:o},parts:r}=this._$AD,i=(e?.creationScope??Ht).importNode(o,!0);Vt.currentNode=i;let n=Vt.nextNode(),s=0,a=0,h=r[0];for(;h!==void 0;){if(s===h.index){let b;h.type===2?b=new oe(n,n.nextSibling,this,e):h.type===1?b=new h.ctor(n,h.name,h.strings,this,e):h.type===6&&(b=new Ye(n,this,e)),this._$AV.push(b),h=r[++a]}s!==h?.index&&(n=Vt.nextNode(),s++)}return Vt.currentNode=Ht,i}p(e){let o=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,o),o+=r.strings.length-2):r._$AI(e[o])),o++}},oe=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,o,r,i){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=qt(this,e,o),ye(e)?e===J||e==null||e===""?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==st&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Nr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==J&&ye(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ht.createTextNode(e)),this._$AH=e}$(e){let{values:o,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ce.createElement(Ur(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(o);else{let n=new Ue(i,this),s=n.u(this.options);n.p(o),this.T(s),this._$AH=n}}_$AC(e){let o=Br.get(e.strings);return o===void 0&&Br.set(e.strings,o=new Ce(e)),o}k(e){To(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,r,i=0;for(let n of e)i===o.length?o.push(r=new t(this.O(we()),this.O(we()),this,this.options)):r=o[i],r._$AI(n),i++;i<o.length&&(this._$AR(r&&r._$AB.nextSibling,i),o.length=i)}_$AR(e=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);e!==this._$AB;){let r=Dr(e).nextSibling;Dr(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ut=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,r,i,n){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=o,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=J}_$AI(e,o=this,r,i){let n=this.strings,s=!1;if(n===void 0)e=qt(this,e,o,0),s=!ye(e)||e!==this._$AH&&e!==st,s&&(this._$AH=e);else{let a=e,h,b;for(e=n[0],h=0;h<n.length-1;h++)b=qt(this,a[r+h],o,h),b===st&&(b=this._$AH[h]),s||=!ye(b)||b!==this._$AH[h],b===J?e=J:e!==J&&(e+=(b??"")+n[h+1]),this._$AH[h]=b}s&&!i&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},We=class extends Ut{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}},je=class extends Ut{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}},Ke=class extends Ut{constructor(e,o,r,i,n){super(e,o,r,i,n),this.type=5}_$AI(e,o=this){if((e=qt(this,e,o,0)??J)===st)return;let r=this._$AH,i=e===J&&r!==J||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==J&&(r===J||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ye=class{constructor(e,o,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){qt(this,e)}},jr={M:_o,P:kt,A:ko,C:1,L:Wr,R:Ue,D:Nr,V:qt,I:oe,H:Ut,N:je,U:Ke,B:We,F:Ye},hs=$o.litHtmlPolyfillSupport;hs?.(Ce,oe),($o.litHtmlVersions??=[]).push("3.3.3");var Kr=(t,e,o)=>{let r=o?.renderBefore??e,i=r._$litPart$;if(i===void 0){let n=o?.renderBefore??null;r._$litPart$=i=new oe(e.insertBefore(we(),n),n,void 0,o??{})}return i._$AI(t),i};var Ro=globalThis,Pt=class extends _t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Kr(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return st}};Pt._$litElement$=!0,Pt.finalized=!0,Ro.litElementHydrateSupport?.({LitElement:Pt});var us=Ro.litElementPolyfillSupport;us?.({LitElement:Pt});(Ro.litElementVersions??=[]).push("4.2.2");var Yr=K`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
  }

  canvas {
    width: 100%;
    height: 100%;
    /* We force a near-instant transition so we can listen for transitionend when the color changes */
    transition: color 1ms;
  }

  span {
    /* We force a near-instant transition so we can listen for transitionend when the color changes */
    transition: color 1ms;
  }
`;var ds=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,Gr=t=>{throw TypeError(t)},c=(t,e,o,r)=>{for(var i=r>1?void 0:r?ps(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=(r?s(e,o,i):s(i))||i);return r&&i&&ds(e,o,i),i},Xr=(t,e,o)=>e.has(t)||Gr("Cannot "+o),Qr=(t,e,o)=>(Xr(t,e,"read from private field"),o?o.call(t):e.get(t)),Zr=(t,e,o)=>e.has(t)?Gr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),Jr=(t,e,o,r)=>(Xr(t,e,"write to private field"),r?r.call(t,o):e.set(t,o),o);var ot=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var fs={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:He},ms=(t=fs,e,o)=>{let{kind:r,metadata:i}=o,n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(o.name,t),r==="accessor"){let{name:s}=o;return{set(a){let h=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,h,t,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,t,a),a}}}if(r==="setter"){let{name:s}=o;return function(a){let h=this[s];e.call(this,a),this.requestUpdate(s,h,t,!0,a)}}throw Error("Unsupported decorator location: "+r)};function v(t){return(e,o)=>typeof o=="object"?ms(t,e,o):((r,i,n)=>{let s=i.hasOwnProperty(n);return i.constructor.createProperty(n,r),s?Object.getOwnPropertyDescriptor(i,n):void 0})(t,e,o)}function Q(t){return v({...t,state:!0,attribute:!1})}function ti(t){return(e,o)=>{let r=typeof e=="function"?e:e[o];Object.assign(r,t)}}var Wt=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);function X(t,e){return(o,r,i)=>{let n=s=>s.renderRoot?.querySelector(t)??null;if(e){let{get:s,set:a}=typeof r=="object"?o:i??(()=>{let h=Symbol();return{get(){return this[h]},set(b){this[h]=b}}})();return Wt(o,r,{get(){let h=s.call(this);return h===void 0&&(h=n(this),(h!==null||this.hasUpdated)&&a.call(this,h)),h}})}return Wt(o,r,{get(){return n(this)}})}}var gs=K`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden],
  :host([hidden]) {
    display: none !important;
  }
`,vs=/;\s+$/;function bs(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ei(t){let{property:e,value:o,element:r}=t;if(o){let i=r.getAttribute("style")||"";i&&(i.match(vs)||(i+=";"),i+=" ");let n=`${e}: ${o}`;return i.includes(n)?void 0:`${i}${n};`}return null}var Ge,rt=class extends Pt{constructor(){super(),Zr(this,Ge,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,o)=>{if(this.internals?.states)try{o?this.internals.states.add(e):this.internals.states.delete(e)}catch(r){if(String(r).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw r}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,o]of t.elementProperties)o.default==="inherit"&&o.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${o.initial}`,!0)}static get styles(){let t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[gs,...t]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))})}attributeChangedCallback(t,e,o){Qr(this,Ge)||(this.constructor.elementProperties.forEach((r,i)=>{r.reflect&&this[i]!=null&&this.initialReflectedProperties.set(i,this[i])}),Jr(this,Ge,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){let o=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});o.error=e,this.dispatchEvent(o)}throw e}}setStyle(t,e){if(!this.style){let o=ei({property:bs(t),value:e,element:this});o&&this.setAttribute("style",o);return}this.style[t]=e}setStyleProperty(t,e){if(!this.style){let o=ei({property:t,value:e,element:this});o&&this.setAttribute("style",o);return}this.style.setProperty(t,e)}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};Ge=new WeakMap;c([v()],rt.prototype,"dir",2);c([v()],rt.prototype,"lang",2);c([v({type:Boolean,reflect:!0,attribute:"did-ssr"})],rt.prototype,"didSSR",2);var oi=function(t,e,o){},Xe=class{static render(e,o,r){oi(e,o,r)}};(function(t){function e(x,u,m,l){var L=t(m,u);L.addData(x),L.make(),l=l||0;var d=L.getModuleCount(),f=L.getModuleCount()+2*l;function A(p,g){return p-=l,g-=l,p<0||p>=d||g<0||g>=d?!1:L.isDark(p,g)}return{text:x,level:u,version:m,moduleCount:f,isDark:A}}function o(x,u,m,l,L){m=Math.max(1,m||1),l=Math.min(40,l||40);for(var d=m;d<=l;d+=1)try{return e(x,u,d,L)}catch{}}function r(x,u,m){m.background&&(u.fillStyle=m.background,u.fillRect(m.left,m.top,m.size,m.size))}function i(x,u,m,l,L,d,f,A,p,g){f?x.moveTo(u+d,m):x.moveTo(u,m);function S(T,y,k,$,O,z,V){T?(x.lineTo(y+z,k+V),x.arcTo(y,k,$,O,d)):x.lineTo(y,k)}S(A,l,m,l,L,-d,0),S(p,l,L,u,L,0,-d),S(g,u,L,u,m,d,0),S(f,u,m,l,m,0,d)}function n(x,u,m,l,L,d,f,A,p,g){function S(T,y,k,$){x.moveTo(T+k,y),x.lineTo(T,y),x.lineTo(T,y+$),x.arcTo(T,y,T+k,y,d)}f&&S(u,m,d,d),A&&S(l,m,-d,d),p&&S(l,L,-d,-d),g&&S(u,L,d,-d)}function s(x,u,m,l,L,d,f,A){var p=x.isDark,g=l+d,S=L+d,T=f-1,y=f+1,k=A-1,$=A+1,O=Math.floor(Math.min(.5,Math.max(0,m.radius))*d),z=p(f,A),V=p(T,k),F=p(T,A),G=p(T,$),D=p(f,$),R=p(y,$),M=p(y,A),w=p(y,k),_=p(f,k);l=Math.round(l),L=Math.round(L),g=Math.round(g),S=Math.round(S),z?i(u,l,L,g,S,O,!F&&!_,!F&&!D,!M&&!D,!M&&!_):n(u,l,L,g,S,O,F&&_&&V,F&&D&&G,M&&D&&R,M&&_&&w)}function a(x,u,m,l){var L=x.moduleCount,d=m.size/L,f=0,A=0;u.beginPath();let p=7+m.quiet;for(f=0;f<L;f+=1)for(A=0;A<L;A+=1)if((A<p&&f<p||A>=L-p&&f<p||A<p&&f>=L-p)===l){var g=m.left+A*d,S=m.top+f*d,T=d;s(x,u,m,g,S,T,f,A)}h(u,m,l),u.fill()}function h(x,u,m){let l=m&&u.cornerFill||u.fill;if(typeof l=="string"){x.fillStyle=l;return}let L=l.type,d=l.position,f=l.colorStops,A;if(L==="linear-gradient"){let p=d.slice(0,4).map(g=>Math.round(g*u.size));A=x.createLinearGradient.apply(x,p)}else if(L==="radial-gradient"){let p=d.slice(0,6).map(g=>Math.round(g*u.size));A=x.createRadialGradient.apply(x,p)}else throw new Error("Unsupported fill");f.forEach(([p,g])=>{A.addColorStop(p,g)}),x.fillStyle=A}function b(x,u,m){if(x=o(m.text,m.ecLevel,m.minVersion,m.maxVersion,m.quiet),!x)return null;var l=u.getContext("2d");return l&&(r(x,l,m),a(x,l,m,!0),a(x,l,m,!1)),u}function E(x,u){var m=document.createElement("canvas");return m.width=u.size,m.height=u.size,b(x,m,u)}var C={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",cornerFill:null,background:null,text:"no text",radius:.5,quiet:0,image:null,imageEcCover:.5};oi=function(x,u,m){var l=Object.assign({},C,x);l.minVersion=l.minVersion,l.maxVersion=l.maxVersion,l.ecLevel=l.ecLevel,l.left=l.left,l.top=l.top,l.size=l.size,l.fill=l.fill,l.background=l.background,l.text=l.text,l.radius=l.radius,l.quiet=l.quiet,l.cornerFill=l.cornerFill||l.fill,l.image=l.image,l.imageBackground=l.imageBackground,l.imageEcCover=l.imageEcCover,l.imagePadding=l.imagePadding;var L=o(l.text,l.ecLevel,l.minVersion,l.maxVersion,l.quiet);if(!L)return;m=m||function(){};let d=function(){var f=u;if(u instanceof HTMLCanvasElement){(u.width!==l.size||u.height!==l.size)&&(u.width=l.size,u.height=l.size);let A=u.getContext("2d");A&&A.clearRect(0,0,u.width,u.height),b(L,u,l)}else if(L){let A=E(L,l);A&&(f=A,u.appendChild(f))}return f};if(l.image){let f=new Image;f.onload=function(){if(!L)return;let A=l.imageEcCover??C.imageEcCover,p=L.moduleCount-l.quiet*2,g=l.size/p,S=f.naturalWidth/f.naturalHeight,T=l.size*A;T=Math.min(T,T*S);let y=l.size*A;y=Math.min(y,y/S);let k=p*p-(49*3+25),$={L:.07,M:.15,Q:.25,H:.3}[l.ecLevel]*A*k|0;var O=Math.min(p,Math.sqrt($*S)|0,T),z=O/S|0;z>p&&(z=p,O=z*S|0),z=Math.min(z,y);let V=L.moduleCount/2-O/2|0,F=L.moduleCount/2-z/2|0,G=L.isDark;L.isDark=function(j,Bt){return V<=Bt&&Bt<V+O&&F<=j&&j<F+z?!1:G(j,Bt)};let D=Math.min(O,z*S)-l.quiet,R=Math.min(z,O/S)-l.quiet,M=V+(O-D)/2-l.quiet,w=F+(z-R)/2-l.quiet,_=M*g,P=w*g,q=D*g,B=R*g;var ut=d();let ct=ut.getContext("2d");ct&&(ct.fillStyle=l.imageBackground||"transparent",ct.fillRect(_-4,P-4,q+8,B+8),ct.drawImage(f,_,P,q,B)),m()},f.onerror=()=>{d(),m()},f.src=l.image}else d(),m()}})(function(){var t=function(){function e(C,x){var u=236,m=17,l=C,L=r[x],d=null,f=0,A=null,p=new Array,g={},S=function(D,R){f=l*4+17,d=function(M){for(var w=new Array(M),_=0;_<M;_+=1){w[_]=new Array(M);for(var P=0;P<M;P+=1)w[_][P]=null}return w}(f),T(0,0),T(f-7,0),T(0,f-7),$(),k(),z(D,R),l>=7&&O(D),A==null&&(A=G(l,L,p)),V(A,R)},T=function(D,R){if(d!=null){for(var M=-1;M<=7;M+=1)if(!(D+M<=-1||f<=D+M))for(var w=-1;w<=7;w+=1)R+w<=-1||f<=R+w||(0<=M&&M<=6&&(w==0||w==6)||0<=w&&w<=6&&(M==0||M==6)||2<=M&&M<=4&&2<=w&&w<=4?d[D+M][R+w]=!0:d[D+M][R+w]=!1)}},y=function(){for(var D=0,R=0,M=0;M<8;M+=1){S(!0,M);var w=n.getLostPoint(g);(M==0||D>w)&&(D=w,R=M)}return R},k=function(){if(d){for(var D=8;D<f-8;D+=1)d[D][6]==null&&(d[D][6]=D%2==0);for(var R=8;R<f-8;R+=1)d[6][R]==null&&(d[6][R]=R%2==0)}},$=function(){if(d)for(var D=n.getPatternPosition(l),R=0;R<D.length;R+=1)for(var M=0;M<D.length;M+=1){var w=D[R],_=D[M];if(d[w][_]==null)for(var P=-2;P<=2;P+=1)for(var q=-2;q<=2;q+=1)d[w+P][_+q]=P==-2||P==2||q==-2||q==2||P==0&&q==0}},O=function(D){if(d){for(var R=n.getBCHTypeNumber(l),M=0;M<18;M+=1){var w=!D&&(R>>M&1)==1;d[Math.floor(M/3)][M%3+f-8-3]=w}for(var M=0;M<18;M+=1){var w=!D&&(R>>M&1)==1;d[M%3+f-8-3][Math.floor(M/3)]=w}}},z=function(D,R){var M=L<<3|R,w=n.getBCHTypeInfo(M);if(d){for(var _=0;_<15;_+=1){let P=!D&&(w>>_&1)==1;d[_<6?_:_<8?_+1:f-15+_][8]=P,d[8][_<8?f-_-1:_<9?15-_:14-_]=P}d[f-8][8]=!D}},V=function(D,R){for(var M=-1,w=f-1,_=7,P=0,q=n.getMaskFunction(R),B=f-1;B>0;B-=2)for(B==6&&(B-=1);;){for(var ut=0;ut<2;ut+=1)if(d&&d[w][B-ut]==null){var ct=!1;P<D.length&&(ct=(D[P]>>>_&1)==1);var j=q(w,B-ut);j&&(ct=!ct),d[w][B-ut]=ct,_-=1,_==-1&&(P+=1,_=7)}if(w+=M,w<0||f<=w){w-=M,M=-M;break}}},F=function(D,R){for(var M=0,w=0,_=0,P=new Array(R.length),q=new Array(R.length),B=0;B<R.length;B+=1){var ut=R[B].dataCount,ct=R[B].totalCount-ut;w=Math.max(w,ut),_=Math.max(_,ct),P[B]=new Array(ut);for(var j=0;j<P[B].length;j+=1)P[B][j]=255&D.getBuffer()[j+M];M+=ut;var Bt=n.getErrorCorrectPolynomial(ct),Kn=a(P[B],Bt.getLength()-1),Er=Kn.mod(Bt);q[B]=new Array(Bt.getLength()-1);for(var j=0;j<q[B].length;j+=1){var Lr=j+Er.getLength()-q[B].length;q[B][j]=Lr>=0?Er.getAt(Lr):0}}for(var Ar=0,j=0;j<R.length;j+=1)Ar+=R[j].totalCount;for(var Eo=new Array(Ar),Ie=0,j=0;j<w;j+=1)for(var B=0;B<R.length;B+=1)j<P[B].length&&(Eo[Ie]=P[B][j],Ie+=1);for(var j=0;j<_;j+=1)for(var B=0;B<R.length;B+=1)j<q[B].length&&(Eo[Ie]=q[B][j],Ie+=1);return Eo},G=function(D,R,M){for(var w=h.getRSBlocks(D,R),_=b(),P=0;P<M.length;P+=1){var q=M[P];_.put(q.getMode(),4),_.put(q.getLength(),n.getLengthInBits(q.getMode(),D)),q.write(_)}for(var B=0,P=0;P<w.length;P+=1)B+=w[P].dataCount;if(_.getLengthInBits()>B*8)throw new Error("code length overflow. ("+_.getLengthInBits()+">"+B*8+")");for(_.getLengthInBits()+4<=B*8&&_.put(0,4);_.getLengthInBits()%8!=0;)_.putBit(!1);for(;!(_.getLengthInBits()>=B*8||(_.put(u,8),_.getLengthInBits()>=B*8));)_.put(m,8);return F(_,w)};return g.addData=function(D){var R=E(D);p.push(R),A=null},g.isDark=function(D,R){if(!d)throw new Error("_modules is null");if(D<0||f<=D||R<0||f<=R)throw new Error(D+","+R);return d[D][R]},g.getModuleCount=function(){return f},g.make=function(){S(!1,y())},g}e.stringToBytes=function(C){return new TextEncoder().encode(C)};var o={MODE_8BIT_BYTE:4},r={L:1,M:0,Q:3,H:2},i={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},n=function(){var C=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],x=1335,u=7973,m=21522,l={},L=function(d){for(var f=0;d!=0;)f+=1,d>>>=1;return f};return l.getBCHTypeInfo=function(d){for(var f=d<<10;L(f)-L(x)>=0;)f^=x<<L(f)-L(x);return(d<<10|f)^m},l.getBCHTypeNumber=function(d){for(var f=d<<12;L(f)-L(u)>=0;)f^=u<<L(f)-L(u);return d<<12|f},l.getPatternPosition=function(d){return C[d-1]},l.getMaskFunction=function(d){switch(d){case i.PATTERN000:return function(f,A){return(f+A)%2==0};case i.PATTERN001:return function(f,A){return f%2==0};case i.PATTERN010:return function(f,A){return A%3==0};case i.PATTERN011:return function(f,A){return(f+A)%3==0};case i.PATTERN100:return function(f,A){return(Math.floor(f/2)+Math.floor(A/3))%2==0};case i.PATTERN101:return function(f,A){return f*A%2+f*A%3==0};case i.PATTERN110:return function(f,A){return(f*A%2+f*A%3)%2==0};case i.PATTERN111:return function(f,A){return(f*A%3+(f+A)%2)%2==0};default:throw new Error("bad maskPattern:"+d)}},l.getErrorCorrectPolynomial=function(d){for(var f=a([1],0),A=0;A<d;A+=1)f=f.multiply(a([1,s.gexp(A)],0));return f},l.getLengthInBits=function(d,f){if(d!=o.MODE_8BIT_BYTE||f<1||f>40)throw new Error("mode: "+d+"; type: "+f);return f<10?8:16},l.getLostPoint=function(d){for(var f=d.getModuleCount(),A=0,p=0;p<f;p+=1)for(var g=0;g<f;g+=1){for(var S=0,T=d.isDark(p,g),y=-1;y<=1;y+=1)if(!(p+y<0||f<=p+y))for(var k=-1;k<=1;k+=1)g+k<0||f<=g+k||y==0&&k==0||T==d.isDark(p+y,g+k)&&(S+=1);S>5&&(A+=3+S-5)}for(var p=0;p<f-1;p+=1)for(var g=0;g<f-1;g+=1){var $=0;d.isDark(p,g)&&($+=1),d.isDark(p+1,g)&&($+=1),d.isDark(p,g+1)&&($+=1),d.isDark(p+1,g+1)&&($+=1),($==0||$==4)&&(A+=3)}for(var p=0;p<f;p+=1)for(var g=0;g<f-6;g+=1)d.isDark(p,g)&&!d.isDark(p,g+1)&&d.isDark(p,g+2)&&d.isDark(p,g+3)&&d.isDark(p,g+4)&&!d.isDark(p,g+5)&&d.isDark(p,g+6)&&(A+=40);for(var g=0;g<f;g+=1)for(var p=0;p<f-6;p+=1)d.isDark(p,g)&&!d.isDark(p+1,g)&&d.isDark(p+2,g)&&d.isDark(p+3,g)&&d.isDark(p+4,g)&&!d.isDark(p+5,g)&&d.isDark(p+6,g)&&(A+=40);for(var O=0,g=0;g<f;g+=1)for(var p=0;p<f;p+=1)d.isDark(p,g)&&(O+=1);var z=Math.abs(100*O/f/f-50)/5;return A+=z*10,A},l}(),s=function(){for(var C=new Array(256),x=new Array(256),u=0;u<8;u+=1)x[u]=1<<u;for(var u=8;u<256;u+=1)x[u]=x[u-4]^x[u-5]^x[u-6]^x[u-8];for(var u=0;u<255;u+=1)C[x[u]]=u;var m={};return m.glog=function(l){if(l<1)throw new Error("glog("+l+")");return C[l]},m.gexp=function(l){for(;l<0;)l+=255;for(;l>=256;)l-=255;return x[l]},m}();function a(C,x){if(typeof C.length>"u")throw new Error(C.length+"/"+x);var u=function(){for(var l=0;l<C.length&&C[l]==0;)l+=1;for(var L=new Array(C.length-l+x),d=0;d<C.length-l;d+=1)L[d]=C[d+l];return L}(),m={};return m.getAt=function(l){return u[l]},m.getLength=function(){return u.length},m.multiply=function(l){for(var L=new Array(m.getLength()+l.getLength()-1),d=0;d<m.getLength();d+=1)for(var f=0;f<l.getLength();f+=1)L[d+f]^=s.gexp(s.glog(m.getAt(d))+s.glog(l.getAt(f)));return a(L,0)},m.mod=function(l){if(m.getLength()-l.getLength()<0)return m;for(var L=s.glog(m.getAt(0))-s.glog(l.getAt(0)),d=new Array(m.getLength()),f=0;f<m.getLength();f+=1)d[f]=m.getAt(f);for(var f=0;f<l.getLength();f+=1)d[f]^=s.gexp(s.glog(l.getAt(f))+L);return a(d,0).mod(l)},m}var h=function(){var C=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],x=function(l,L){var d={};return d.totalCount=l,d.dataCount=L,d},u={},m=function(l,L){switch(L){case r.L:return C[(l-1)*4+0];case r.M:return C[(l-1)*4+1];case r.Q:return C[(l-1)*4+2];case r.H:return C[(l-1)*4+3];default:return}};return u.getRSBlocks=function(l,L){var d=m(l,L);if(typeof d>"u")throw new Error("bad rs block @ typeNumber:"+l+"/errorCorrectLevel:"+L);for(var f=d.length/3,A=new Array,p=0;p<f;p+=1)for(var g=d[p*3+0],S=d[p*3+1],T=d[p*3+2],y=0;y<g;y+=1)A.push(x(S,T));return A},u}(),b=function(){var C=new Array,x=0,u={};return u.getBuffer=function(){return C},u.getAt=function(m){var l=Math.floor(m/8);return(C[l]>>>7-m%8&1)==1},u.put=function(m,l){for(var L=0;L<l;L+=1)u.putBit((m>>>l-L-1&1)==1)},u.getLengthInBits=function(){return x},u.putBit=function(m){var l=Math.floor(x/8);C.length<=l&&C.push(0),m&&(C[l]|=128>>>x%8),x+=1},u},E=function(C){var x=o.MODE_8BIT_BYTE,u=e.stringToBytes(C),m={};return m.getMode=function(){return x},m.getLength=function(l){return u.length},m.write=function(l){for(var L=0;L<u.length;L+=1)l.put(u[L],8)},m};return e}();return t}());var wt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},re=t=>(...e)=>({_$litDirective$:t,values:e}),zt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,r){this._$Ct=e,this._$AM=o,this._$Ci=r}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};var ri="important",ws=" !"+ri,yt=re(class extends zt{constructor(t){if(super(t),t.type!==wt.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,o)=>{let r=t[o];return r==null?e:e+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(t,[e]){let{style:o}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let r of this.ft)e[r]==null&&(this.ft.delete(r),r.includes("-")?o.removeProperty(r):o[r]=null);for(let r in e){let i=e[r];if(i!=null){this.ft.add(r);let n=typeof i=="string"&&i.endsWith(ws);r.includes("-")||n?o.setProperty(r,n?i.slice(0,-11):i,n?ri:""):o[r]=i}}return st}});var at=class extends rt{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="",this.background="",this.radius=0,this.errorCorrection="H",this.image=null,this.imageBackground=null,this.imageCoverage=null,this.imagePadding=null,this.computedStyle=null}updated(t){super.updated(t),this.generate()}generate(){if(!this.hasUpdated)return;this.canvas.style.maxWidth=`${this.size}px`,this.canvas.style.maxHeight=`${this.size}px`,this.computedStyle||(this.computedStyle=getComputedStyle(this));let t=this.computedStyle,e=this.shadowRoot?.querySelector("span");e&&(this.spanComputedStyle||(this.spanComputedStyle=getComputedStyle(e))),Xe.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill||t.color,background:this.background||null,size:this.size*2,image:this.image,imageEcCover:this.imageCoverage,imagePadding:this.imagePadding,imageBackground:this.imageBackground||this.background,cornerFill:this.spanComputedStyle?.color},this.canvas)}render(){return U`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        style=${yt({maxWidth:`${this.size}px`,maxHeight:`${this.size}px`,minWidth:`${this.size}px`,minHeight:`${this.size}px`})}
        @transitionend=${t=>{t.propertyName==="color"&&this.generate()}}
      >
        <span style="color: var(--corner-color);"></span>
      </canvas>
    `}};at.css=Yr;c([X("canvas")],at.prototype,"canvas",2);c([v()],at.prototype,"value",2);c([v()],at.prototype,"label",2);c([v({type:Number})],at.prototype,"size",2);c([v()],at.prototype,"fill",2);c([v()],at.prototype,"background",2);c([v({type:Number})],at.prototype,"radius",2);c([v({attribute:"error-correction"})],at.prototype,"errorCorrection",2);c([v()],at.prototype,"image",2);c([v({attribute:"image-background"})],at.prototype,"imageBackground",2);c([v({attribute:"image-coverage",type:Number})],at.prototype,"imageCoverage",2);c([v({attribute:"image-padding",type:Number})],at.prototype,"imagePadding",2);at=c([ot("wa-qr-code")],at);var ii=K`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    &::part(arrow) {
      border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
      border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    }
  }
`;var ni=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var si=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var ai=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var li=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};var ci=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var hi=K`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;var Do=new Set,ie=new Map,jt,Po="ltr",zo="en",ui=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ui){let t=new MutationObserver(di);Po=document.documentElement.dir||"ltr",zo=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function xe(...t){t.map(e=>{let o=e.$code.toLowerCase();ie.has(o)?ie.set(o,Object.assign(Object.assign({},ie.get(o)),e)):ie.set(o,e),jt||(jt=e)}),di()}function di(){ui&&(Po=document.documentElement.dir||"ltr",zo=document.documentElement.lang||navigator.language),[...Do.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var Qe=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Do.add(this.host)}hostDisconnected(){Do.delete(this.host)}dir(){return`${this.host.dir||Po}`.toLowerCase()}lang(){return`${this.host.lang||zo}`.toLowerCase()}getTranslationData(e){var o,r;let i;try{i=new Intl.Locale(e.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let n=i.language.toLowerCase(),s=(r=(o=i.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&r!==void 0?r:"",a=ie.get(`${n}-${s}`),h=ie.get(n);return{locale:i,language:n,region:s,primary:a,secondary:h}}exists(e,o){var r;let{primary:i,secondary:n}=this.getTranslationData((r=o.lang)!==null&&r!==void 0?r:this.lang());return o=Object.assign({includeFallback:!1},o),!!(i&&i[e]||n&&n[e]||o.includeFallback&&jt&&jt[e])}term(e,...o){let{primary:r,secondary:i}=this.getTranslationData(this.lang()),n;if(r&&r[e])n=r[e];else if(i&&i[e])n=i[e];else if(jt&&jt[e])n=jt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...o):n}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,o)}};var pi={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",captions:"Captions",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseYear:"Choose year",clearEntry:"Clear entry",close:"Close",closeCalendar:"Close calendar",createOption:t=>`Create "${t}"`,copied:"Copied",copy:"Copy",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",incompleteDate:"Enter a complete date.",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",error:"Error",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",numCharacters:t=>t===1?"1 character":`${t} characters`,numCharactersRemaining:t=>t===1?"1 character remaining":`${t} characters remaining`,numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",play:"Play",playbackSpeed:"Playback speed",playlist:"Playlist",playAnimation:"Play animation",previousDecade:"Previous decade",previousMonth:"Previous month",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:t=>t===1?"Select a range no longer than 1 day":`Select a range no longer than ${t} days`,rangeTooShort:t=>t===1?"Select a range at least 1 day long":`Select a range at least ${t} days long`,readonly:"Read-only",selected:"Selected",selectedDateLabel:t=>`Selected: ${t}`,selectedRangeLabel:t=>`Selected range: ${t}`,selectionCleared:"Selection cleared",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,startDate:"Start date",today:"Today",toggleColorFormat:"Toggle color format",seek:"Seek",seekProgress:(t,e)=>`${t} of ${e}`,currentlyPlaying:"currently playing",unmute:"Unmute",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out",am:"AM",chooseTime:"Choose time",closeTimeInput:"Close time picker",dayPeriod:"AM/PM",hour:"Hour",minute:"Minute",now:"Now",pm:"PM",second:"Second",time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker."};xe(pi);var fi=pi;var Lt=class extends Qe{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||"en":super.lang()}};xe(fi);var At=Math.min,ht=Math.max,Le=Math.round,Ae=Math.floor,Ct=t=>({x:t,y:t}),ys={left:"right",right:"left",bottom:"top",top:"bottom"};function Je(t,e,o){return ht(t,At(e,o))}function Kt(t,e){return typeof t=="function"?t(e):t}function Tt(t){return t.split("-")[0]}function Yt(t){return t.split("-")[1]}function Oo(t){return t==="x"?"y":"x"}function to(t){return t==="y"?"height":"width"}function St(t){let e=t[0];return e==="t"||e==="b"?"y":"x"}function eo(t){return Oo(St(t))}function vi(t,e,o){o===void 0&&(o=!1);let r=Yt(t),i=eo(t),n=to(i),s=i==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=Ee(s)),[s,Ee(s)]}function bi(t){let e=Ee(t);return[Ze(t),e,Ze(e)]}function Ze(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}var mi=["left","right"],gi=["right","left"],Cs=["top","bottom"],xs=["bottom","top"];function Es(t,e,o){switch(t){case"top":case"bottom":return o?e?gi:mi:e?mi:gi;case"left":case"right":return e?Cs:xs;default:return[]}}function wi(t,e,o,r){let i=Yt(t),n=Es(Tt(t),o==="start",r);return i&&(n=n.map(s=>s+"-"+i),e&&(n=n.concat(n.map(Ze)))),n}function Ee(t){let e=Tt(t);return ys[e]+t.slice(e.length)}function Ls(t){return{top:0,right:0,bottom:0,left:0,...t}}function Io(t){return typeof t!="number"?Ls(t):{top:t,right:t,bottom:t,left:t}}function Gt(t){let{x:e,y:o,width:r,height:i}=t;return{width:r,height:i,top:o,left:e,right:e+r,bottom:o+i,x:e,y:o}}function yi(t,e,o){let{reference:r,floating:i}=t,n=St(e),s=eo(e),a=to(s),h=Tt(e),b=n==="y",E=r.x+r.width/2-i.width/2,C=r.y+r.height/2-i.height/2,x=r[a]/2-i[a]/2,u;switch(h){case"top":u={x:E,y:r.y-i.height};break;case"bottom":u={x:E,y:r.y+r.height};break;case"right":u={x:r.x+r.width,y:C};break;case"left":u={x:r.x-i.width,y:C};break;default:u={x:r.x,y:r.y}}switch(Yt(e)){case"start":u[s]-=x*(o&&b?-1:1);break;case"end":u[s]+=x*(o&&b?-1:1);break}return u}async function Ci(t,e){var o;e===void 0&&(e={});let{x:r,y:i,platform:n,rects:s,elements:a,strategy:h}=t,{boundary:b="clippingAncestors",rootBoundary:E="viewport",elementContext:C="floating",altBoundary:x=!1,padding:u=0}=Kt(e,t),m=Io(u),L=a[x?C==="floating"?"reference":"floating":C],d=Gt(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(L)))==null||o?L:L.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:b,rootBoundary:E,strategy:h})),f=C==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,A=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),p=await(n.isElement==null?void 0:n.isElement(A))?await(n.getScale==null?void 0:n.getScale(A))||{x:1,y:1}:{x:1,y:1},g=Gt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:f,offsetParent:A,strategy:h}):f);return{top:(d.top-g.top+m.top)/p.y,bottom:(g.bottom-d.bottom+m.bottom)/p.y,left:(d.left-g.left+m.left)/p.x,right:(g.right-d.right+m.right)/p.x}}var As=50,xi=async(t,e,o)=>{let{placement:r="bottom",strategy:i="absolute",middleware:n=[],platform:s}=o,a=s.detectOverflow?s:{...s,detectOverflow:Ci},h=await(s.isRTL==null?void 0:s.isRTL(e)),b=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:E,y:C}=yi(b,r,h),x=r,u=0,m={};for(let l=0;l<n.length;l++){let L=n[l];if(!L)continue;let{name:d,fn:f}=L,{x:A,y:p,data:g,reset:S}=await f({x:E,y:C,initialPlacement:r,placement:x,strategy:i,middlewareData:m,rects:b,platform:a,elements:{reference:t,floating:e}});E=A??E,C=p??C,m[d]={...m[d],...g},S&&u<As&&(u++,typeof S=="object"&&(S.placement&&(x=S.placement),S.rects&&(b=S.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):S.rects),{x:E,y:C}=yi(b,x,h)),l=-1)}return{x:E,y:C,placement:x,strategy:i,middlewareData:m}},Ei=t=>({name:"arrow",options:t,async fn(e){let{x:o,y:r,placement:i,rects:n,platform:s,elements:a,middlewareData:h}=e,{element:b,padding:E=0}=Kt(t,e)||{};if(b==null)return{};let C=Io(E),x={x:o,y:r},u=eo(i),m=to(u),l=await s.getDimensions(b),L=u==="y",d=L?"top":"left",f=L?"bottom":"right",A=L?"clientHeight":"clientWidth",p=n.reference[m]+n.reference[u]-x[u]-n.floating[m],g=x[u]-n.reference[u],S=await(s.getOffsetParent==null?void 0:s.getOffsetParent(b)),T=S?S[A]:0;(!T||!await(s.isElement==null?void 0:s.isElement(S)))&&(T=a.floating[A]||n.floating[m]);let y=p/2-g/2,k=T/2-l[m]/2-1,$=At(C[d],k),O=At(C[f],k),z=$,V=T-l[m]-O,F=T/2-l[m]/2+y,G=Je(z,F,V),D=!h.arrow&&Yt(i)!=null&&F!==G&&n.reference[m]/2-(F<z?$:O)-l[m]/2<0,R=D?F<z?F-z:F-V:0;return{[u]:x[u]+R,data:{[u]:G,centerOffset:F-G-R,...D&&{alignmentOffset:R}},reset:D}}});var Li=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,r;let{placement:i,middlewareData:n,rects:s,initialPlacement:a,platform:h,elements:b}=e,{mainAxis:E=!0,crossAxis:C=!0,fallbackPlacements:x,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:l=!0,...L}=Kt(t,e);if((o=n.arrow)!=null&&o.alignmentOffset)return{};let d=Tt(i),f=St(a),A=Tt(a)===a,p=await(h.isRTL==null?void 0:h.isRTL(b.floating)),g=x||(A||!l?[Ee(a)]:bi(a)),S=m!=="none";!x&&S&&g.push(...wi(a,l,m,p));let T=[a,...g],y=await h.detectOverflow(e,L),k=[],$=((r=n.flip)==null?void 0:r.overflows)||[];if(E&&k.push(y[d]),C){let F=vi(i,s,p);k.push(y[F[0]],y[F[1]])}if($=[...$,{placement:i,overflows:k}],!k.every(F=>F<=0)){var O,z;let F=(((O=n.flip)==null?void 0:O.index)||0)+1,G=T[F];if(G&&(!(C==="alignment"?f!==St(G):!1)||$.every(M=>St(M.placement)===f?M.overflows[0]>0:!0)))return{data:{index:F,overflows:$},reset:{placement:G}};let D=(z=$.filter(R=>R.overflows[0]<=0).sort((R,M)=>R.overflows[1]-M.overflows[1])[0])==null?void 0:z.placement;if(!D)switch(u){case"bestFit":{var V;let R=(V=$.filter(M=>{if(S){let w=St(M.placement);return w===f||w==="y"}return!0}).map(M=>[M.placement,M.overflows.filter(w=>w>0).reduce((w,_)=>w+_,0)]).sort((M,w)=>M[1]-w[1])[0])==null?void 0:V[0];R&&(D=R);break}case"initialPlacement":D=a;break}if(i!==D)return{reset:{placement:D}}}return{}}}};var Ss=new Set(["left","top"]);async function $s(t,e){let{placement:o,platform:r,elements:i}=t,n=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=Tt(o),a=Yt(o),h=St(o)==="y",b=Ss.has(s)?-1:1,E=n&&h?-1:1,C=Kt(e,t),{mainAxis:x,crossAxis:u,alignmentAxis:m}=typeof C=="number"?{mainAxis:C,crossAxis:0,alignmentAxis:null}:{mainAxis:C.mainAxis||0,crossAxis:C.crossAxis||0,alignmentAxis:C.alignmentAxis};return a&&typeof m=="number"&&(u=a==="end"?m*-1:m),h?{x:u*E,y:x*b}:{x:x*b,y:u*E}}var Ai=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,r;let{x:i,y:n,placement:s,middlewareData:a}=e,h=await $s(e,t);return s===((o=a.offset)==null?void 0:o.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+h.x,y:n+h.y,data:{...h,placement:s}}}}},Si=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:r,placement:i,platform:n}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:h={fn:d=>{let{x:f,y:A}=d;return{x:f,y:A}}},...b}=Kt(t,e),E={x:o,y:r},C=await n.detectOverflow(e,b),x=St(Tt(i)),u=Oo(x),m=E[u],l=E[x];if(s){let d=u==="y"?"top":"left",f=u==="y"?"bottom":"right",A=m+C[d],p=m-C[f];m=Je(A,m,p)}if(a){let d=x==="y"?"top":"left",f=x==="y"?"bottom":"right",A=l+C[d],p=l-C[f];l=Je(A,l,p)}let L=h.fn({...e,[u]:m,[x]:l});return{...L,data:{x:L.x-o,y:L.y-r,enabled:{[u]:s,[x]:a}}}}}};var $i=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,r;let{placement:i,rects:n,platform:s,elements:a}=e,{apply:h=()=>{},...b}=Kt(t,e),E=await s.detectOverflow(e,b),C=Tt(i),x=Yt(i),u=St(i)==="y",{width:m,height:l}=n.floating,L,d;C==="top"||C==="bottom"?(L=C,d=x===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(d=C,L=x==="end"?"top":"bottom");let f=l-E.top-E.bottom,A=m-E.left-E.right,p=At(l-E[L],f),g=At(m-E[d],A),S=!e.middlewareData.shift,T=p,y=g;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(y=A),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(T=f),S&&!x){let $=ht(E.left,0),O=ht(E.right,0),z=ht(E.top,0),V=ht(E.bottom,0);u?y=m-2*($!==0||O!==0?$+O:ht(E.left,E.right)):T=l-2*(z!==0||V!==0?z+V:ht(E.top,E.bottom))}await h({...e,availableWidth:y,availableHeight:T});let k=await s.getDimensions(a.floating);return m!==k.width||l!==k.height?{reset:{rects:!0}}:{}}}};function oo(){return typeof window<"u"}function Qt(t){return ki(t)?(t.nodeName||"").toLowerCase():"#document"}function dt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function xt(t){var e;return(e=(ki(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ki(t){return oo()?t instanceof Node||t instanceof dt(t).Node:!1}function gt(t){return oo()?t instanceof Element||t instanceof dt(t).Element:!1}function $t(t){return oo()?t instanceof HTMLElement||t instanceof dt(t).HTMLElement:!1}function _i(t){return!oo()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof dt(t).ShadowRoot}function ne(t){let{overflow:e,overflowX:o,overflowY:r,display:i}=vt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&i!=="inline"&&i!=="contents"}function Ti(t){return/^(table|td|th)$/.test(Qt(t))}function Se(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}var _s=/transform|translate|scale|rotate|perspective|filter/,ks=/paint|layout|strict|content/,Xt=t=>!!t&&t!=="none",Fo;function se(t){let e=gt(t)?vt(t):t;return Xt(e.transform)||Xt(e.translate)||Xt(e.scale)||Xt(e.rotate)||Xt(e.perspective)||!ro()&&(Xt(e.backdropFilter)||Xt(e.filter))||_s.test(e.willChange||"")||ks.test(e.contain||"")}function Mi(t){let e=Mt(t);for(;$t(e)&&!Zt(e);){if(se(e))return e;if(Se(e))return null;e=Mt(e)}return null}function ro(){return Fo==null&&(Fo=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Fo}function Zt(t){return/^(html|body|#document)$/.test(Qt(t))}function vt(t){return dt(t).getComputedStyle(t)}function $e(t){return gt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Mt(t){if(Qt(t)==="html")return t;let e=t.assignedSlot||t.parentNode||_i(t)&&t.host||xt(t);return _i(e)?e.host:e}function Ri(t){let e=Mt(t);return Zt(e)?t.ownerDocument?t.ownerDocument.body:t.body:$t(e)&&ne(e)?e:Ri(e)}function Rt(t,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);let i=Ri(t),n=i===((r=t.ownerDocument)==null?void 0:r.body),s=dt(i);if(n){let a=io(s);return e.concat(s,s.visualViewport||[],ne(i)?i:[],a&&o?Rt(a):[])}else return e.concat(i,Rt(i,[],o))}function io(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Oi(t){let e=vt(t),o=parseFloat(e.width)||0,r=parseFloat(e.height)||0,i=$t(t),n=i?t.offsetWidth:o,s=i?t.offsetHeight:r,a=Le(o)!==n||Le(r)!==s;return a&&(o=n,r=s),{width:o,height:r,$:a}}function No(t){return gt(t)?t:t.contextElement}function ae(t){let e=No(t);if(!$t(e))return Ct(1);let o=e.getBoundingClientRect(),{width:r,height:i,$:n}=Oi(e),s=(n?Le(o.width):o.width)/r,a=(n?Le(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}var Ts=Ct(0);function Ii(t){let e=dt(t);return!ro()||!e.visualViewport?Ts:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ms(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==dt(t)?!1:e}function Jt(t,e,o,r){e===void 0&&(e=!1),o===void 0&&(o=!1);let i=t.getBoundingClientRect(),n=No(t),s=Ct(1);e&&(r?gt(r)&&(s=ae(r)):s=ae(t));let a=Ms(n,o,r)?Ii(n):Ct(0),h=(i.left+a.x)/s.x,b=(i.top+a.y)/s.y,E=i.width/s.x,C=i.height/s.y;if(n){let x=dt(n),u=r&&gt(r)?dt(r):r,m=x,l=io(m);for(;l&&r&&u!==m;){let L=ae(l),d=l.getBoundingClientRect(),f=vt(l),A=d.left+(l.clientLeft+parseFloat(f.paddingLeft))*L.x,p=d.top+(l.clientTop+parseFloat(f.paddingTop))*L.y;h*=L.x,b*=L.y,E*=L.x,C*=L.y,h+=A,b+=p,m=dt(l),l=io(m)}}return Gt({width:E,height:C,x:h,y:b})}function no(t,e){let o=$e(t).scrollLeft;return e?e.left+o:Jt(xt(t)).left+o}function Fi(t,e){let o=t.getBoundingClientRect(),r=o.left+e.scrollLeft-no(t,o),i=o.top+e.scrollTop;return{x:r,y:i}}function Rs(t){let{elements:e,rect:o,offsetParent:r,strategy:i}=t,n=i==="fixed",s=xt(r),a=e?Se(e.floating):!1;if(r===s||a&&n)return o;let h={scrollLeft:0,scrollTop:0},b=Ct(1),E=Ct(0),C=$t(r);if((C||!C&&!n)&&((Qt(r)!=="body"||ne(s))&&(h=$e(r)),C)){let u=Jt(r);b=ae(r),E.x=u.x+r.clientLeft,E.y=u.y+r.clientTop}let x=s&&!C&&!n?Fi(s,h):Ct(0);return{width:o.width*b.x,height:o.height*b.y,x:o.x*b.x-h.scrollLeft*b.x+E.x+x.x,y:o.y*b.y-h.scrollTop*b.y+E.y+x.y}}function Ds(t){return Array.from(t.getClientRects())}function Ps(t){let e=xt(t),o=$e(t),r=t.ownerDocument.body,i=ht(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),n=ht(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),s=-o.scrollLeft+no(t),a=-o.scrollTop;return vt(r).direction==="rtl"&&(s+=ht(e.clientWidth,r.clientWidth)-i),{width:i,height:n,x:s,y:a}}var Di=25;function zs(t,e){let o=dt(t),r=xt(t),i=o.visualViewport,n=r.clientWidth,s=r.clientHeight,a=0,h=0;if(i){n=i.width,s=i.height;let E=ro();(!E||E&&e==="fixed")&&(a=i.offsetLeft,h=i.offsetTop)}let b=no(r);if(b<=0){let E=r.ownerDocument,C=E.body,x=getComputedStyle(C),u=E.compatMode==="CSS1Compat"&&parseFloat(x.marginLeft)+parseFloat(x.marginRight)||0,m=Math.abs(r.clientWidth-C.clientWidth-u);m<=Di&&(n-=m)}else b<=Di&&(n+=b);return{width:n,height:s,x:a,y:h}}function Os(t,e){let o=Jt(t,!0,e==="fixed"),r=o.top+t.clientTop,i=o.left+t.clientLeft,n=$t(t)?ae(t):Ct(1),s=t.clientWidth*n.x,a=t.clientHeight*n.y,h=i*n.x,b=r*n.y;return{width:s,height:a,x:h,y:b}}function Pi(t,e,o){let r;if(e==="viewport")r=zs(t,o);else if(e==="document")r=Ps(xt(t));else if(gt(e))r=Os(e,o);else{let i=Ii(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Gt(r)}function Bi(t,e){let o=Mt(t);return o===e||!gt(o)||Zt(o)?!1:vt(o).position==="fixed"||Bi(o,e)}function Is(t,e){let o=e.get(t);if(o)return o;let r=Rt(t,[],!1).filter(a=>gt(a)&&Qt(a)!=="body"),i=null,n=vt(t).position==="fixed",s=n?Mt(t):t;for(;gt(s)&&!Zt(s);){let a=vt(s),h=se(s);!h&&a.position==="fixed"&&(i=null),(n?!h&&!i:!h&&a.position==="static"&&!!i&&(i.position==="absolute"||i.position==="fixed")||ne(s)&&!h&&Bi(t,s))?r=r.filter(E=>E!==s):i=a,s=Mt(s)}return e.set(t,r),r}function Fs(t){let{element:e,boundary:o,rootBoundary:r,strategy:i}=t,s=[...o==="clippingAncestors"?Se(e)?[]:Is(e,this._c):[].concat(o),r],a=Pi(e,s[0],i),h=a.top,b=a.right,E=a.bottom,C=a.left;for(let x=1;x<s.length;x++){let u=Pi(e,s[x],i);h=ht(u.top,h),b=At(u.right,b),E=At(u.bottom,E),C=ht(u.left,C)}return{width:b-C,height:E-h,x:C,y:h}}function Bs(t){let{width:e,height:o}=Oi(t);return{width:e,height:o}}function Ns(t,e,o){let r=$t(e),i=xt(e),n=o==="fixed",s=Jt(t,!0,n,e),a={scrollLeft:0,scrollTop:0},h=Ct(0);function b(){h.x=no(i)}if(r||!r&&!n)if((Qt(e)!=="body"||ne(i))&&(a=$e(e)),r){let u=Jt(e,!0,n,e);h.x=u.x+e.clientLeft,h.y=u.y+e.clientTop}else i&&b();n&&!r&&i&&b();let E=i&&!r&&!n?Fi(i,a):Ct(0),C=s.left+a.scrollLeft-h.x-E.x,x=s.top+a.scrollTop-h.y-E.y;return{x:C,y:x,width:s.width,height:s.height}}function Bo(t){return vt(t).position==="static"}function zi(t,e){if(!$t(t)||vt(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return xt(t)===o&&(o=o.ownerDocument.body),o}function Ni(t,e){let o=dt(t);if(Se(t))return o;if(!$t(t)){let i=Mt(t);for(;i&&!Zt(i);){if(gt(i)&&!Bo(i))return i;i=Mt(i)}return o}let r=zi(t,e);for(;r&&Ti(r)&&Bo(r);)r=zi(r,e);return r&&Zt(r)&&Bo(r)&&!se(r)?o:r||Mi(t)||o}var Vs=async function(t){let e=this.getOffsetParent||Ni,o=this.getDimensions,r=await o(t.floating);return{reference:Ns(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Hs(t){return vt(t).direction==="rtl"}var _e={convertOffsetParentRelativeRectToViewportRelativeRect:Rs,getDocumentElement:xt,getClippingRect:Fs,getOffsetParent:Ni,getElementRects:Vs,getClientRects:Ds,getDimensions:Bs,getScale:ae,isElement:gt,isRTL:Hs};function Vi(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function qs(t,e){let o=null,r,i=xt(t);function n(){var a;clearTimeout(r),(a=o)==null||a.disconnect(),o=null}function s(a,h){a===void 0&&(a=!1),h===void 0&&(h=1),n();let b=t.getBoundingClientRect(),{left:E,top:C,width:x,height:u}=b;if(a||e(),!x||!u)return;let m=Ae(C),l=Ae(i.clientWidth-(E+x)),L=Ae(i.clientHeight-(C+u)),d=Ae(E),A={rootMargin:-m+"px "+-l+"px "+-L+"px "+-d+"px",threshold:ht(0,At(1,h))||1},p=!0;function g(S){let T=S[0].intersectionRatio;if(T!==h){if(!p)return s();T?s(!1,T):r=setTimeout(()=>{s(!1,1e-7)},1e3)}T===1&&!Vi(b,t.getBoundingClientRect())&&s(),p=!1}try{o=new IntersectionObserver(g,{...A,root:i.ownerDocument})}catch{o=new IntersectionObserver(g,A)}o.observe(t)}return s(!0),n}function Hi(t,e,o,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:h=!1}=r,b=No(t),E=i||n?[...b?Rt(b):[],...e?Rt(e):[]]:[];E.forEach(d=>{i&&d.addEventListener("scroll",o,{passive:!0}),n&&d.addEventListener("resize",o)});let C=b&&a?qs(b,o):null,x=-1,u=null;s&&(u=new ResizeObserver(d=>{let[f]=d;f&&f.target===b&&u&&e&&(u.unobserve(e),cancelAnimationFrame(x),x=requestAnimationFrame(()=>{var A;(A=u)==null||A.observe(e)})),o()}),b&&!h&&u.observe(b),e&&u.observe(e));let m,l=h?Jt(t):null;h&&L();function L(){let d=Jt(t);l&&!Vi(l,d)&&o(),l=d,m=requestAnimationFrame(L)}return o(),()=>{var d;E.forEach(f=>{i&&f.removeEventListener("scroll",o),n&&f.removeEventListener("resize",o)}),C?.(),(d=u)==null||d.disconnect(),u=null,h&&cancelAnimationFrame(m)}}var qi=Ai;var Ui=Si,Wi=Li,Vo=$i;var ji=Ei;var Ki=(t,e,o)=>{let r=new Map,i={platform:_e,...o},n={...i.platform,_c:r};return xi(t,e,{...i,platform:n})};function Yi(t){return Us(t)}function Ho(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Us(t){for(let e=t;e;e=Ho(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Ho(t);e;e=Ho(e)){if(!(e instanceof Element))continue;let o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||se(o)||e.tagName==="BODY"))return e}return null}var it=re(class extends zt{constructor(t){if(super(t),t.type!==wt.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}let o=t.element.classList;for(let r of this.st)r in e||(o.remove(r),this.st.delete(r));for(let r in e){let i=!!e[r];i===this.st.has(r)||this.nt?.has(r)||(i?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return st}});function Gi(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var Ws=!!globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),W=class extends rt{constructor(){super(...arguments),this.localize=new Lt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),r=0,i=0,n=0,s=0,a=0,h=0,b=0,E=0;o?t.top<e.top?(r=t.left,i=t.bottom,n=t.right,s=t.bottom,a=e.left,h=e.top,b=e.right,E=e.top):(r=e.left,i=e.bottom,n=e.right,s=e.bottom,a=t.left,h=t.top,b=t.right,E=t.top):t.left<e.left?(r=t.right,i=t.top,n=e.left,s=e.top,a=t.right,h=t.bottom,b=e.left,E=e.bottom):(r=e.right,i=e.top,n=t.left,s=t.top,a=e.right,h=e.bottom,b=t.left,E=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${h}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${b}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${E}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Ws,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Gi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Hi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let t=[qi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Vo({apply:({rects:r})=>{let i=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=n?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;this.SUPPORTS_POPOVER&&!Gi(this.anchor)&&this.boundary==="scroll"&&(e=Rt(this.anchorEl).filter(r=>r instanceof Element)),this.flip&&t.push(Wi({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Ui({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(Vo({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(ji({element:this.arrowEl,padding:this.arrowPadding}));let o=this.SUPPORTS_POPOVER?r=>_e.getOffsetParent(r,Yi):_e.getOffsetParent;Ki(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.SUPPORTS_POPOVER?"absolute":"fixed",platform:{..._e,getOffsetParent:o}}).then(({x:r,y:i,middlewareData:n,placement:s})=>{let a=this.localize.dir()==="rtl",h={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){let b=n.arrow.x,E=n.arrow.y,C="",x="",u="",m="";if(this.arrowPlacement==="start"){let l=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";C=typeof E=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",x=a?l:"",m=a?"":l}else if(this.arrowPlacement==="end"){let l=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";x=a?"":l,m=a?l:"",u=typeof E=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(m=typeof b=="number"?"calc(50% - var(--arrow-size-diagonal))":"",C=typeof E=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(m=typeof b=="number"?`${b}px`:"",C=typeof E=="number"?`${E}px`:"");Object.assign(this.arrowEl.style,{top:C,right:x,bottom:u,left:m,[h]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new ci)}render(){return U`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${it({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${it({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?U`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};W.css=hi;c([X(".popup")],W.prototype,"popup",2);c([X(".arrow")],W.prototype,"arrowEl",2);c([v({attribute:!1,type:Boolean})],W.prototype,"SUPPORTS_POPOVER",2);c([v()],W.prototype,"anchor",2);c([v({type:Boolean,reflect:!0})],W.prototype,"active",2);c([v({reflect:!0})],W.prototype,"placement",2);c([v()],W.prototype,"boundary",2);c([v({type:Number})],W.prototype,"distance",2);c([v({type:Number})],W.prototype,"skidding",2);c([v({type:Boolean})],W.prototype,"arrow",2);c([v({attribute:"arrow-placement"})],W.prototype,"arrowPlacement",2);c([v({attribute:"arrow-padding",type:Number})],W.prototype,"arrowPadding",2);c([v({type:Boolean})],W.prototype,"flip",2);c([v({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],W.prototype,"flipFallbackPlacements",2);c([v({attribute:"flip-fallback-strategy"})],W.prototype,"flipFallbackStrategy",2);c([v({type:Object})],W.prototype,"flipBoundary",2);c([v({attribute:"flip-padding",type:Number})],W.prototype,"flipPadding",2);c([v({type:Boolean})],W.prototype,"shift",2);c([v({type:Object})],W.prototype,"shiftBoundary",2);c([v({attribute:"shift-padding",type:Number})],W.prototype,"shiftPadding",2);c([v({attribute:"auto-size"})],W.prototype,"autoSize",2);c([v()],W.prototype,"sync",2);c([v({type:Object})],W.prototype,"autoSizeBoundary",2);c([v({attribute:"auto-size-padding",type:Number})],W.prototype,"autoSizePadding",2);c([v({attribute:"hover-bridge",type:Boolean})],W.prototype,"hoverBridge",2);W=c([ot("wa-popup")],W);var te=[];function so(t){te.push(t)}function ke(t){for(let e=te.length-1;e>=0;e--)if(te[e]===t){te.splice(e,1);break}}function Te(t){return te.length>0&&te[te.length-1]===t}var Xi="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var Qi=(t=21)=>{let e="",o=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=Xi[o[t]&63];return e};function ft(t,e,o){let r=i=>Object.is(i,-0)?0:i;return t<e?r(e):t>o?r(o):r(t)}function Zi(t=""){return`${t}${Qi()}`}function le(t,e){return new Promise(o=>{function r(i){i.target===t&&(t.removeEventListener(e,r),o())}t.addEventListener(e,r)})}function ce(t,e){return new Promise(o=>{let r=new AbortController,{signal:i}=r;if(t.classList.contains(e))return;t.classList.add(e);let n=!1,s=()=>{n||(n=!0,t.classList.remove(e),o(),r.abort())};t.addEventListener("animationend",s,{once:!0,signal:i}),t.addEventListener("animationcancel",s,{once:!0,signal:i}),requestAnimationFrame(()=>{!n&&t.getAnimations().length===0&&s()})})}function tt(t,e){let o={waitUntilFirstUpdate:!1,...e};return(r,i)=>{let{update:n}=r,s=Array.isArray(t)?t:[t];r.update=function(a){s.forEach(h=>{let b=h;if(a.has(b)){let E=a.get(b),C=this[b];E!==C&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[i](E,C)}}),n.call(this,a)}}}var Z=class extends rt{constructor(){super(...arguments),this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.open&&Te(this)&&(t.preventDefault(),t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=t=>{if(this.hasTrigger("hover")){let e=t.relatedTarget,o=!!(e&&this.anchor?.contains(e)),r=!!(e&&this.contains(e));if(o||r)return;clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)}}}connectedCallback(){super.connectedCallback(),typeof document<"u"&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=Zi("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),ke(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){let r=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);r.includes(e)||(r.push(e),t.setAttribute("aria-labelledby",r.join(" ")))}removeFromAriaLabelledBy(t,e){let i=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(n=>n!==e);i.length>0?t.setAttribute("aria-labelledby",i.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;let t=new ni;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),so(this),this.body.hidden=!1,this.popup.active=!0,await ce(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new li)}else{let t=new si;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),ke(this),await ce(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new ai)}}handleForChange(){let t=this.getRootNode?.();if(!t)return;let e=this.for?t.getElementById?.(this.for):null,o=this.anchor;if(e===o)return;let{signal:r}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:r}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:r}),e.addEventListener("click",this.handleClick,{signal:r}),e.addEventListener("mouseover",this.handleMouseOver,{signal:r}),e.addEventListener("mouseout",this.handleMouseOut,{signal:r})),o&&(this.removeFromAriaLabelledBy(o,this.id),o.removeEventListener("blur",this.handleBlur,{capture:!0}),o.removeEventListener("focus",this.handleFocus,{capture:!0}),o.removeEventListener("click",this.handleClick),o.removeEventListener("mouseover",this.handleMouseOver),o.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,le(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,le(this,"wa-after-hide")}render(){return U`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${it({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};Z.css=ii;Z.dependencies={"wa-popup":W};c([X("slot:not([name])")],Z.prototype,"defaultSlot",2);c([X(".body")],Z.prototype,"body",2);c([X("wa-popup")],Z.prototype,"popup",2);c([v()],Z.prototype,"placement",2);c([v({type:Boolean,reflect:!0})],Z.prototype,"disabled",2);c([v({type:Number})],Z.prototype,"distance",2);c([v({type:Boolean,reflect:!0})],Z.prototype,"open",2);c([v({type:Number})],Z.prototype,"skidding",2);c([v({attribute:"show-delay",type:Number})],Z.prototype,"showDelay",2);c([v({attribute:"hide-delay",type:Number})],Z.prototype,"hideDelay",2);c([v()],Z.prototype,"trigger",2);c([v({attribute:"without-arrow",type:Boolean,reflect:!0})],Z.prototype,"withoutArrow",2);c([v()],Z.prototype,"for",2);c([Q()],Z.prototype,"anchor",2);c([tt("open",{waitUntilFirstUpdate:!0})],Z.prototype,"handleOpenChange",1);c([tt("for")],Z.prototype,"handleForChange",1);c([tt(["distance","placement","skidding"])],Z.prototype,"handleOptionsChange",1);c([tt("disabled")],Z.prototype,"handleDisabledChange",1);Z=c([ot("wa-tooltip")],Z);function ao(t,e){function o(i){let n=t.getBoundingClientRect(),s=t.ownerDocument.defaultView,a=n.left+s.pageXOffset,h=n.top+s.pageYOffset,b=i.pageX-a,E=i.pageY-h;e?.onMove&&e.onMove(b,E)}function r(){document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",r),e?.onStop&&e.onStop()}document.addEventListener("pointermove",o,{passive:!0}),document.addEventListener("pointerup",r),e?.initialEvent instanceof PointerEvent&&o(e.initialEvent)}var Oh=typeof window<"u"&&"ontouchstart"in window;var Ji=K`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;var tn=(t={})=>{let{validationElement:e,validationProperty:o}=t;e||typeof document<"u"&&"createElement"in document&&(e=Object.assign(document.createElement("input"),{required:!0})),o||(o="value");let r={observedAttributes:["required"],message:e?.validationMessage,checkValidity(i){let n={message:"",isValid:!0,invalidKeys:[]};return(i.required??i.hasAttribute("required"))&&!i[o]&&(n.message=typeof r.message=="function"?r.message(i):r.message||"",n.isValid=!1,n.invalidKeys.push("valueMissing")),n}};return r};var lo=K`
  :host {
    display: flex;
    flex-direction: column;
  }

  /* Treat wrapped labels, inputs, and hints as direct children of the host element */
  [part~='form-control'] {
    display: contents;
  }

  /* Label */
  :is([part~='form-control-label'], [part~='label']):has(*:not(:empty)),
  :is([part~='form-control-label'], [part~='label']).has-label {
    display: inline-flex;
    color: var(--wa-form-control-label-color);
    font-weight: var(--wa-form-control-label-font-weight);
    line-height: var(--wa-form-control-label-line-height);
    margin-block-end: 0.5em;
  }

  :host([required]) :is([part~='form-control-label'], [part~='label'])::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
    color: var(--wa-form-control-required-content-color);
  }

  /* Help text */
  [part~='hint'] {
    display: block;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);

    &:not(.has-slotted, .has-hint) {
      display: none;
    }
  }
`;var en=K`
  :host {
    --grid-width: 17em;
    --grid-height: 12em;
    --grid-handle-size: 1.25em;
    --slider-height: 1em;
    --slider-handle-size: calc(var(--slider-height) + 0.25em);
  }

  .color-picker {
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-border-radius-m);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    border-color: var(--wa-color-surface-border);
    box-shadow: var(--wa-shadow-m);
    color: var(--color);
    font: inherit;
    font-size: inherit;
    user-select: none;
    width: var(--grid-width);
    -webkit-user-select: none;
  }

  .grid {
    position: relative;
    height: var(--grid-height);
    background-image:
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    border-top-right-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: var(--wa-border-radius-circle);
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    border: solid 0.125rem white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .grid-handle-dragging {
    cursor: none;
    scale: 1.5;
  }

  .grid-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .controls {
    padding: 0.75em;
    display: flex;
    align-items: center;
  }

  .sliders {
    flex: 1 1 auto;
  }

  .slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--wa-border-radius-s);
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .slider:not(:last-of-type) {
    margin-bottom: 0.75em;
  }

  .slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    border-radius: var(--wa-border-radius-circle);
    border: solid 0.125rem white;
    box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .slider-handle:focus-visible {
    outline: var(--wa-focus-ring);
  }

  .hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .alpha .alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3em;
    height: 3em;
    border: none;
    border-radius: var(--wa-border-radius-circle);
    background: none;
    font-size: inherit;
    margin-inline-start: 0.75em;
    cursor: copy;
    forced-color-adjust: none;
  }

  .preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .preview:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
  }

  .preview-color-copied {
    animation: pulse 850ms;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--wa-color-brand-fill-loud);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .user-input {
    display: flex;
    align-items: center;
    padding: 0 0.75em 0.75em 0.75em;
  }

  .user-input wa-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;

    &::part(form-control-label) {
      /* Visually hidden */
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      clip: rect(0 0 0 0) !important;
      clip-path: inset(50%) !important;
      border: none !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      padding: 0 !important;
    }
  }

  .user-input wa-button-group {
    margin-inline-start: 0.75em;

    &::part(base) {
      flex-wrap: nowrap;
    }
  }

  .user-input wa-button:first-of-type {
    min-width: 3em;
    max-width: 3em;
  }

  .swatches {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(1.5em, 100%), 1fr));
    grid-gap: 0.5em;
    justify-items: center;
    border-block-start: var(--wa-form-control-border-style) var(--wa-form-control-border-width)
      var(--wa-color-surface-border);
    padding: 0.5em;
    forced-color-adjust: none;
  }

  .swatch {
    position: relative;
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: var(--wa-border-radius-s);
  }

  .swatch .swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 0.0625rem rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .swatch:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .transparent-bg {
    background-image:
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
      linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%);
    background-size: 0.5rem 0.5rem;
    background-position:
      0 0,
      0 0,
      -0.25rem -0.25rem,
      0.25rem 0.25rem;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    .grid,
    .grid-handle,
    .slider,
    .slider-handle,
    .preview,
    .swatch,
    .swatch-color {
      pointer-events: none;
    }
  }

  /*
   * Color dropdown
   */

  .color-dropdown {
    display: contents;
  }

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--wa-color-surface-raised);
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    overflow: visible;
  }

  .trigger {
    display: block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: inherit;
    forced-color-adjust: none;
    width: var(--wa-form-control-height);
    height: var(--wa-form-control-height);
    border-radius: var(--wa-form-control-border-radius);
  }

  .trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 var(--wa-form-control-border-width) var(--wa-form-control-border-color),
      inset 0 0 0 calc(var(--wa-form-control-border-width) * 3) var(--wa-color-surface-default);
  }

  .trigger-empty:before {
    background-color: transparent;
  }

  .trigger:focus-visible {
    outline: none;
  }

  .trigger:focus-visible:not(.trigger:disabled) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([disabled]) :is(.label, .trigger) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .form-control.form-control-has-label .label {
    cursor: pointer;
    display: inline-block;
  }
`;var he=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var js=()=>({observedAttributes:["custom-error"],checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),lt=class extends rt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new he))},this.handleInteraction=t=>{let e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},"addEventListener"in this&&this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[js()]}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let e of this.validators)if(e.observedAttributes)for(let o of e.observedAttributes)t.add(o);return[...t]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener?.(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(!!1&&t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")||t.has("defaultValue")){let e=this.value;this.updateFormValue(e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!!1&&!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(t),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(t){if(Array.isArray(t)){if(this.name){let e=new FormData;for(let o of t)e.append(this.name,o);this.setValue(e,e)}}else this.setValue(t,t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(t){t?this.setAttribute("form",t):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){let e=t[0],o=t[1],r=t[2];r||(r=this.validationTarget),this.internals.setValidity(e,o,r||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let t=!!this.required,e=this.internals.validity.valid,o=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&o),this.customStates.set("user-valid",e&&o)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}):(this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity())}setValue(...t){let[e,o]=t;this.internals.setFormValue(e,o)}get allValidators(){let t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let t=this.allValidators;if(!t?.length)return;let e={customError:!!this.customError},o=this.validationTarget||this.input||void 0,r="";for(let i of t){let{isValid:n,message:s,invalidKeys:a}=i.checkValidity(this);n||(r||(r=s),a?.length>=0&&a.forEach(h=>e[h]=!0))}r||(r=this.validationMessage),this.setValidity(e,r,o)}};lt.formAssociated=!0;c([v({reflect:!0})],lt.prototype,"name",2);c([v({type:Boolean})],lt.prototype,"disabled",2);c([v({state:!0,attribute:!1})],lt.prototype,"valueHasChanged",2);c([v({state:!0,attribute:!1})],lt.prototype,"hasInteracted",2);c([v({attribute:"custom-error",reflect:!0})],lt.prototype,"customError",2);c([v({attribute:!1,state:!0,type:Object})],lt.prototype,"validity",1);var on={small:"s",medium:"m",large:"l"},rn=new Set;function ue(t,e){e in on&&!rn.has(`${t}:${e}`)&&(rn.add(`${t}:${e}`),console.warn(`[${t}] size="${e}" is deprecated. Use size="${on[e]}" instead. The long-form value will be removed in the next major version.`))}var de=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{let r=o.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1}):!1}hasNamedSlot(t){return this.host.querySelector?.(`:scope > [slot="${t}"]`)!==null}test(t,e){return e&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[e]:t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){let t=this.host.shadowRoot;t&&"addEventListener"in t&&t.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){let t=this.host.shadowRoot;t&&"removeEventListener"in t&&t.removeEventListener("slotchange",this.handleSlotChange)}};var pe=K`
  :host([size='xs']) {
    font-size: var(--wa-font-size-xs);
  }

  :host([size='s']),
  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='m']),
  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='l']),
  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  :host([size='xl']) {
    font-size: var(--wa-font-size-xl);
  }
`;function et(t,e){Ks(t)&&(t="100%");let o=Ys(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),o&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function Me(t){return Math.min(1,Math.max(0,t))}function Ks(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function Ys(t){return typeof t=="string"&&t.indexOf("%")!==-1}function co(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Re(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Ot(t){return t.length===1?"0"+t:String(t)}function nn(t,e,o){return{r:et(t,255)*255,g:et(e,255)*255,b:et(o,255)*255}}function Uo(t,e,o){t=et(t,255),e=et(e,255),o=et(o,255);let r=Math.max(t,e,o),i=Math.min(t,e,o),n=0,s=0,a=(r+i)/2;if(r===i)s=0,n=0;else{let h=r-i;switch(s=a>.5?h/(2-r-i):h/(r+i),r){case t:n=(e-o)/h+(e<o?6:0);break;case e:n=(o-t)/h+2;break;case o:n=(t-e)/h+4;break;default:break}n/=6}return{h:n,s,l:a}}function qo(t,e,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(e-t)*(6*o):o<1/2?e:o<2/3?t+(e-t)*(2/3-o)*6:t}function sn(t,e,o){let r,i,n;if(t=et(t,360),e=et(e,100),o=et(o,100),e===0)i=o,n=o,r=o;else{let s=o<.5?o*(1+e):o+e-o*e,a=2*o-s;r=qo(a,s,t+1/3),i=qo(a,s,t),n=qo(a,s,t-1/3)}return{r:r*255,g:i*255,b:n*255}}function Wo(t,e,o){t=et(t,255),e=et(e,255),o=et(o,255);let r=Math.max(t,e,o),i=Math.min(t,e,o),n=0,s=r,a=r-i,h=r===0?0:a/r;if(r===i)n=0;else{switch(r){case t:n=(e-o)/a+(e<o?6:0);break;case e:n=(o-t)/a+2;break;case o:n=(t-e)/a+4;break;default:break}n/=6}return{h:n,s:h,v:s}}function an(t,e,o){t=et(t,360)*6,e=et(e,100),o=et(o,100);let r=Math.floor(t),i=t-r,n=o*(1-e),s=o*(1-i*e),a=o*(1-(1-i)*e),h=r%6,b=[o,s,n,n,a,o][h],E=[a,o,o,s,n,n][h],C=[n,n,a,o,o,s][h];return{r:b*255,g:E*255,b:C*255}}function jo(t,e,o,r){let i=[Ot(Math.round(t).toString(16)),Ot(Math.round(e).toString(16)),Ot(Math.round(o).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function ln(t,e,o,r,i){let n=[Ot(Math.round(t).toString(16)),Ot(Math.round(e).toString(16)),Ot(Math.round(o).toString(16)),Ot(Gs(r))];return i&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))&&n[3].startsWith(n[3].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function cn(t,e,o,r){let i=t/100,n=e/100,s=o/100,a=r/100,h=255*(1-i)*(1-a),b=255*(1-n)*(1-a),E=255*(1-s)*(1-a);return{r:h,g:b,b:E}}function Ko(t,e,o){let r=1-t/255,i=1-e/255,n=1-o/255,s=Math.min(r,i,n);return s===1?(r=0,i=0,n=0):(r=(r-s)/(1-s)*100,i=(i-s)/(1-s)*100,n=(n-s)/(1-s)*100),s*=100,{c:Math.round(r),m:Math.round(i),y:Math.round(n),k:Math.round(s)}}function Gs(t){return Math.round(parseFloat(t)*255).toString(16)}function Yo(t){return pt(t)/255}function pt(t){return parseInt(t,16)}function hn(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var De={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function un(t){let e={r:0,g:0,b:0},o=1,r=null,i=null,n=null,s=!1,a=!1;return typeof t=="string"&&(t=Zs(t)),typeof t=="object"&&(mt(t.r)&&mt(t.g)&&mt(t.b)?(e=nn(t.r,t.g,t.b),s=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):mt(t.h)&&mt(t.s)&&mt(t.v)?(r=Re(t.s),i=Re(t.v),e=an(t.h,r,i),s=!0,a="hsv"):mt(t.h)&&mt(t.s)&&mt(t.l)?(r=Re(t.s),n=Re(t.l),e=sn(t.h,r,n),s=!0,a="hsl"):mt(t.c)&&mt(t.m)&&mt(t.y)&&mt(t.k)&&(e=cn(t.c,t.m,t.y,t.k),s=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(o=t.a)),o=co(o),{ok:s,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:o}}var Xs="[-\\+]?\\d+%?",Qs="[-\\+]?\\d*\\.\\d+%?",It="(?:"+Qs+")|(?:"+Xs+")",Go="[\\s|\\(]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")\\s*\\)?",ho="[\\s|\\(]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")\\s*\\)?",bt={CSS_UNIT:new RegExp(It),rgb:new RegExp("rgb"+Go),rgba:new RegExp("rgba"+ho),hsl:new RegExp("hsl"+Go),hsla:new RegExp("hsla"+ho),hsv:new RegExp("hsv"+Go),hsva:new RegExp("hsva"+ho),cmyk:new RegExp("cmyk"+ho),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Zs(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(De[t])t=De[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let o=bt.rgb.exec(t);return o?{r:o[1],g:o[2],b:o[3]}:(o=bt.rgba.exec(t),o?{r:o[1],g:o[2],b:o[3],a:o[4]}:(o=bt.hsl.exec(t),o?{h:o[1],s:o[2],l:o[3]}:(o=bt.hsla.exec(t),o?{h:o[1],s:o[2],l:o[3],a:o[4]}:(o=bt.hsv.exec(t),o?{h:o[1],s:o[2],v:o[3]}:(o=bt.hsva.exec(t),o?{h:o[1],s:o[2],v:o[3],a:o[4]}:(o=bt.cmyk.exec(t),o?{c:o[1],m:o[2],y:o[3],k:o[4]}:(o=bt.hex8.exec(t),o?{r:pt(o[1]),g:pt(o[2]),b:pt(o[3]),a:Yo(o[4]),format:e?"name":"hex8"}:(o=bt.hex6.exec(t),o?{r:pt(o[1]),g:pt(o[2]),b:pt(o[3]),format:e?"name":"hex"}:(o=bt.hex4.exec(t),o?{r:pt(o[1]+o[1]),g:pt(o[2]+o[2]),b:pt(o[3]+o[3]),a:Yo(o[4]+o[4]),format:e?"name":"hex8"}:(o=bt.hex3.exec(t),o?{r:pt(o[1]+o[1]),g:pt(o[2]+o[2]),b:pt(o[3]+o[3]),format:e?"name":"hex"}:!1))))))))))}function mt(t){return typeof t=="number"?!Number.isNaN(t):bt.CSS_UNIT.test(t)}var Pe=class t{constructor(e="",o={}){if(e instanceof t)return e;typeof e=="number"&&(e=hn(e)),this.originalInput=e;let r=un(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=o.format??r.format,this.gradientType=o.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),o,r,i,n=e.r/255,s=e.g/255,a=e.b/255;return n<=.03928?o=n/12.92:o=Math.pow((n+.055)/1.055,2.4),s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),.2126*o+.7152*r+.0722*i}getAlpha(){return this.a}setAlpha(e){return this.a=co(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=Wo(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=Wo(this.r,this.g,this.b),o=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.v*100);return this.a===1?`hsv(${o}, ${r}%, ${i}%)`:`hsva(${o}, ${r}%, ${i}%, ${this.roundA})`}toHsl(){let e=Uo(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=Uo(this.r,this.g,this.b),o=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.l*100);return this.a===1?`hsl(${o}, ${r}%, ${i}%)`:`hsla(${o}, ${r}%, ${i}%, ${this.roundA})`}toHex(e=!1){return jo(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return ln(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),o=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${e}, ${o}, ${r})`:`rgba(${e}, ${o}, ${r}, ${this.roundA})`}toPercentageRgb(){let e=o=>`${Math.round(et(o,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=o=>Math.round(et(o,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Ko(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:o,y:r,k:i}=Ko(this.r,this.g,this.b);return`cmyk(${e}, ${o}, ${r}, ${i})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let e="#"+jo(this.r,this.g,this.b,!1);for(let[o,r]of Object.entries(De))if(e===r)return o;return!1}toString(e){let o=!!e;e=e??this.format;let r=!1,i=this.a<1&&this.a>=0;return!o&&i&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),e==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new t(this.toString())}lighten(e=10){let o=this.toHsl();return o.l+=e/100,o.l=Me(o.l),new t(o)}brighten(e=10){let o=this.toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(255*-(e/100)))),o.g=Math.max(0,Math.min(255,o.g-Math.round(255*-(e/100)))),o.b=Math.max(0,Math.min(255,o.b-Math.round(255*-(e/100)))),new t(o)}darken(e=10){let o=this.toHsl();return o.l-=e/100,o.l=Me(o.l),new t(o)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){let o=this.toHsl();return o.s-=e/100,o.s=Me(o.s),new t(o)}saturate(e=10){let o=this.toHsl();return o.s+=e/100,o.s=Me(o.s),new t(o)}greyscale(){return this.desaturate(100)}spin(e){let o=this.toHsl(),r=(o.h+e)%360;return o.h=r<0?360+r:r,new t(o)}mix(e,o=50){let r=this.toRgb(),i=new t(e).toRgb(),n=o/100,s={r:(i.r-r.r)*n+r.r,g:(i.g-r.g)*n+r.g,b:(i.b-r.b)*n+r.b,a:(i.a-r.a)*n+r.a};return new t(s)}analogous(e=6,o=30){let r=this.toHsl(),i=360/o,n=[this];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,n.push(new t(r));return n}complement(){let e=this.toHsl();return e.h=(e.h+180)%360,new t(e)}monochromatic(e=6){let o=this.toHsv(),{h:r}=o,{s:i}=o,{v:n}=o,s=[],a=1/e;for(;e--;)s.push(new t({h:r,s:i,v:n})),n=(n+a)%1;return s}splitcomplement(){let e=this.toHsl(),{h:o}=e;return[this,new t({h:(o+72)%360,s:e.s,l:e.l}),new t({h:(o+216)%360,s:e.s,l:e.l})]}onBackground(e){let o=this.toRgb(),r=new t(e).toRgb(),i=o.a+r.a*(1-o.a);return new t({r:(o.r*o.a+r.r*r.a*(1-o.a))/i,g:(o.g*o.a+r.g*r.a*(1-o.a))/i,b:(o.b*o.a+r.b*r.a*(1-o.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){let o=this.toHsl(),{h:r}=o,i=[this],n=360/e;for(let s=1;s<e;s++)i.push(new t({h:(r+s*n)%360,s:o.s,l:o.l}));return i}equals(e){let o=new t(e);return this.format==="cmyk"||o.format==="cmyk"?this.toCmykString()===o.toCmykString():this.toRgbString()===o.toRgbString()}};var Y=t=>t??J;var I=class extends lt{constructor(){super(),this.hasSlotController=new de(this,"hint","label"),this.isSafeValue=!1,this.localize=new Lt(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.inputValue="",this.hue=0,this.isEmpty=!0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="m",this.placement="bottom-start",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&Te(this)&&(t.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open&&Te(this)){t.stopPropagation(),this.focus(),this.hide();return}t.key==="Tab"&&setTimeout(()=>{let e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=t=>{let o=t.composedPath().some(r=>r instanceof Element&&(r.closest(".color-picker")||r===this.trigger));this&&!o&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.handleValueChange("",this.value||"")}static get validators(){let t=[tn()];return[...super.validators,...t]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleSizeChange(){ue(this.localName,this.size)}updateFormValue(t){if(t==null){this.setValue("",null);return}super.updateFormValue(t)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(t){let e=this.shadowRoot.querySelector(".slider.alpha"),o=e.querySelector(".slider-handle"),{width:r}=e.getBoundingClientRect(),i=this.value,n=this.value;o.focus(),t.preventDefault(),ao(e,{onMove:s=>{this.alpha=ft(s/r*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleHueDrag(t){let e=this.shadowRoot.querySelector(".slider.hue"),o=e.querySelector(".slider-handle"),{width:r}=e.getBoundingClientRect(),i=this.value,n=this.value;o.focus(),t.preventDefault(),ao(e,{onMove:s=>{this.hue=ft(s/r*360,0,360),this.syncValues(),this.value!==n&&(n=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleGridDrag(t){let e=this.shadowRoot.querySelector(".grid"),o=e.querySelector(".grid-handle"),{width:r,height:i}=e.getBoundingClientRect(),n=this.value,s=this.value;o.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,ao(e,{onMove:(a,h)=>{this.saturation=ft(a/r*100,0,100),this.brightness=ft(100-h/i*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==n&&(n=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleAlphaKeyDown(t){let e=t.shiftKey?10:1,o=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=ft(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=ft(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(t){let e=t.shiftKey?10:1,o=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=ft(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=ft(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(t){let e=t.shiftKey?10:1,o=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=ft(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=ft(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=ft(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=ft(this.brightness-e,0,100),this.syncValues()),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(t){let e=t.target,o=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value||""):this.value="",this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(t){this.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(t){t.preventDefault()}parseColor(t){if(!t||t.trim()==="")return null;let e=new Pe(t);if(!e.isValid)return null;let o=e.toHsl(),r=e.toRgb(),i=e.toHsv();if(!r||r.r==null||r.g==null||r.b==null)return null;let n={h:o.h||0,s:(o.s||0)*100,l:(o.l||0)*100,a:o.a||0},s=e.toHexString(),a=e.toHex8String(),h={h:i.h||0,s:(i.s||0)*100,v:(i.v||0)*100,a:i.a||0};return{hsl:{h:n.h,s:n.s,l:n.l,string:this.setLetterCase(`hsl(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%)`)},hsla:{h:n.h,s:n.s,l:n.l,a:n.a,string:this.setLetterCase(`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${n.a.toFixed(2).toString()})`)},hsv:{h:h.h,s:h.s,v:h.v,string:this.setLetterCase(`hsv(${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.v)}%)`)},hsva:{h:h.h,s:h.s,v:h.v,a:h.a,string:this.setLetterCase(`hsva(${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.v)}%, ${h.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a||0,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${(r.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(a)}}setColor(t){let e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(e=>{let o=this.value;this.setColor(e.sRGBHex),this.value!==o&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(t){let e=this.value;this.disabled||(this.setColor(t),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(t,e,o,r=100){let i=new Pe(`hsva(${t}, ${e}%, ${o}%, ${r/100})`);return i.isValid?i.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(t){(t.has("value")||t.has("defaultValue"))&&this.handleValueChange(t.get("value")||"",this.value||""),super.willUpdate(t)}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let o=this.parseColor(e);o!==null?(this.inputValue=this.value||"",this.hue=o.hsva.h,this.saturation=o.hsva.s,this.brightness=o.hsva.v,this.alpha=o.hsva.a*100,this.syncValues()):this.inputValue=t??""}this.requestUpdate()}focus(t){this.trigger.focus(t)}blur(){let t=this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.popup?.active&&this.hide()}getFormattedValue(t="hex"){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new he),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(t){super.firstUpdated(t),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}updateAccessibleTrigger(){let t=this.trigger;t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,le(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,le(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),so(this)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),ke(this)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await ce(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await ce(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){let t=this.isEmpty,e=this.hasSlotController.test("label","withLabel"),o=this.hasSlotController.test("hint","withHint"),r=this.label?!0:!!e,i=this.hint?!0:!!o,n=this.saturation,s=100-this.brightness,a=Array.isArray(this.swatches)?this.swatches.map(b=>typeof b=="string"?{color:b,label:b}:b):this.swatches.split(";").filter(b=>b.trim()!=="").map(b=>({color:b.trim(),label:b.trim()})),h=U`
      <div
        part="base"
        class=${it({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${yt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${it({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${yt({top:`${s}%`,left:`${n}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${Y(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="controls">
          <div class="sliders">
            <div
              part="slider hue-slider"
              class="hue slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="slider-handle"
                style=${yt({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${Y(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?U`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${yt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${yt({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${Y(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="preview transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${yt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="user-input" aria-live="polite">
          <wa-input
            part="input"
            type="text"
            name=${this.name}
            size="s"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${t?"":this.inputValue}
            value=${t?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}
            @input=${this.handleInputInput}
            @blur=${this.stopNestedEventPropagation}
            @focus=${this.stopNestedEventPropagation}
          ></wa-input>

          <wa-button-group>
            ${this.withoutFormatToggle?"":U`
                  <wa-button
                    part="format-button"
                    size="s"
                    appearance="outlined"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      start:format-button__start,
                      label:format-button__label,
                      end:format-button__end,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </wa-button>
                `}
            ${this.hasEyeDropper?U`
                  <wa-button
                    part="eyedropper-button"
                    size="s"
                    appearance="outlined"
                    exportparts="
                      base:eyedropper-button__base,
                      start:eyedropper-button__start,
                      label:eyedropper-button__label,
                      end:eyedropper-button__end,
                      caret:eyedropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    <wa-icon
                      library="system"
                      name="eyedropper"
                      variant="solid"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></wa-icon>
                  </wa-button>
                `:""}
          </wa-button-group>
        </div>

        ${a.length>0?U`
              <div part="swatches" class="swatches">
                ${a.map(b=>{let E=this.parseColor(b.color);return E?U`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${Y(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${b.label}
                      @click=${()=>this.selectSwatch(b.color)}
                      @keydown=${C=>!this.disabled&&C.key==="Enter"&&this.setColor(E.hexa)}
                    >
                      <div class="swatch-color" style=${yt({backgroundColor:E.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return U`
      <div
        class=${it({container:!0,"form-control":!0,"form-control-has-label":r})}
        part="trigger-container form-control"
      >
        <div
          part="form-control-label"
          class=${it({label:!0,"has-label":r})}
          id="form-control-label"
        >
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${it({trigger:!0,"trigger-empty":t,"transparent-bg":!0,"form-control-input":!0})}
          style=${yt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
          aria-labelledby="form-control-label"
          aria-describedby="hint"
          .disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        ></button>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${it({"has-slotted":i})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement=${this.placement}
        distance="0"
        skidding="0"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?"true":"false"}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${h}
      </wa-popup>
    `}};I.css=[Ji,pe,lo,en];I.shadowRootOptions={...lt.shadowRootOptions,delegatesFocus:!0};c([X('[part~="base"]')],I.prototype,"base",2);c([X('[part~="input"]')],I.prototype,"input",2);c([X('[part~="form-control-label"]')],I.prototype,"triggerLabel",2);c([X('[part~="form-control-input"]')],I.prototype,"triggerButton",2);c([X(".color-popup")],I.prototype,"popup",2);c([X('[part~="preview"]')],I.prototype,"previewButton",2);c([X('[part~="trigger"]')],I.prototype,"trigger",2);c([Q()],I.prototype,"hasFocus",2);c([Q()],I.prototype,"isDraggingGridHandle",2);c([Q()],I.prototype,"inputValue",2);c([Q()],I.prototype,"hue",2);c([Q()],I.prototype,"isEmpty",2);c([Q()],I.prototype,"saturation",2);c([Q()],I.prototype,"brightness",2);c([Q()],I.prototype,"alpha",2);c([Q()],I.prototype,"value",1);c([v({attribute:"value",reflect:!0})],I.prototype,"defaultValue",2);c([v({attribute:"with-label",reflect:!0,type:Boolean})],I.prototype,"withLabel",2);c([v({attribute:"with-hint",reflect:!0,type:Boolean})],I.prototype,"withHint",2);c([Q()],I.prototype,"hasEyeDropper",2);c([v()],I.prototype,"label",2);c([v({attribute:"hint"})],I.prototype,"hint",2);c([v()],I.prototype,"format",2);c([v({reflect:!0})],I.prototype,"size",2);c([tt("size")],I.prototype,"handleSizeChange",1);c([v({reflect:!0})],I.prototype,"placement",2);c([v({attribute:"without-format-toggle",type:Boolean})],I.prototype,"withoutFormatToggle",2);c([v({reflect:!0})],I.prototype,"name",2);c([v({type:Boolean})],I.prototype,"disabled",2);c([v({type:Boolean,reflect:!0})],I.prototype,"open",2);c([v({type:Boolean})],I.prototype,"opacity",2);c([v({type:Boolean})],I.prototype,"uppercase",2);c([v()],I.prototype,"swatches",2);c([v({type:Boolean,reflect:!0})],I.prototype,"required",2);c([ti({passive:!1})],I.prototype,"handleTouchMove",1);c([tt("format",{waitUntilFirstUpdate:!0})],I.prototype,"handleFormatChange",1);c([tt("opacity")],I.prototype,"handleOpacityChange",1);c([tt("value")],I.prototype,"handleValueChange",1);c([tt("open",{waitUntilFirstUpdate:!0})],I.prototype,"handleOpenChange",1);I=c([ot("wa-color-picker")],I);I.disableWarning?.("change-in-update");var dn=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function pn(t,e){let o=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!o&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&Js(e)})}function Js(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;let o=[...e.elements];if(o.length===1){e.requestSubmit(null);return}let r=o.find(i=>i.type==="submit"&&!i.matches(":disabled"));r&&(["input","button"].includes(r.localName)?e.requestSubmit(r):r.click())}var fn=K`
  :host {
    border-width: 0;
  }

  :host(:focus) {
    outline: none;
  }

  .text-field {
    display: flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    transition: inherit;
    height: var(--wa-form-control-height);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    cursor: text;
    color: var(--wa-form-control-value-color);
    font-size: var(--wa-form-control-value-font-size);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    vertical-align: middle;
    width: 100%;
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    background-color: var(--wa-form-control-background-color);
    box-shadow: var(--box-shadow);
    padding: 0 var(--wa-form-control-padding-inline);
    outline-offset: var(--wa-focus-ring-offset);

    &:focus-within {
      outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled inputs */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .text-field {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .text-field {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  :host([pill]) .text-field {
    border-radius: var(--wa-border-radius-pill) !important;
  }

  .text-field {
    /* Show autofill styles over the entire text field, not just the native <input> */
    &:has(:autofill),
    &:has(:-webkit-autofill) {
      background-color: var(--wa-color-brand-fill-quiet) !important;
    }

    input,
    textarea {
      /*
      Fixes an alignment issue with placeholders.
      https://github.com/shoelace-style/webawesome/issues/342
    */
      height: 100%;

      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      margin: 0;
      cursor: inherit;
      -webkit-appearance: none;
      font: inherit;

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }
    }
  }

  input {
    flex: 1 1 auto;
    min-width: 0;
    height: 100%;
    transition: inherit;

    /* prettier-ignore */
    background-color: rgb(118 118 118 / 0); /* ensures proper placeholder styles in webkit's date input */
    height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    padding-block: 0;
    color: inherit;

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }
  }

  .start,
  .end {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;

    &::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }
  }

  .start::slotted(*) {
    margin-inline-end: var(--wa-form-control-padding-inline);
  }

  .end::slotted(*) {
    margin-inline-start: var(--wa-form-control-padding-inline);
  }

  /*
   * Clearable + Password Toggle
   */

  .clear,
  .password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    margin-inline-start: var(--wa-form-control-padding-inline);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:active {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
    }

    &:focus {
      outline: none;
    }
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  :host([without-spin-buttons]) input[type='number'] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }
  }
`;var uo=()=>({checkValidity(t){let e=t.input,o={message:"",isValid:!0,invalidKeys:[]};if(!e)return o;let r=!0;if("checkValidity"in e&&(r=e.checkValidity()),r)return o;if(o.isValid=!1,"validationMessage"in e&&(o.message=e.validationMessage),!("validity"in e))return o.invalidKeys.push("customError"),o;for(let i in e.validity){if(i==="valid")continue;let n=i;e.validity[n]&&o.invalidKeys.push(n)}return o}});var{I:td}=jr;var mn=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var gn=t=>t.strings===void 0;var ta={},vn=(t,e=ta)=>t._$AH=e;var bn=re(class extends zt{constructor(t){if(super(t),t.type!==wt.PROPERTY&&t.type!==wt.ATTRIBUTE&&t.type!==wt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!gn(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===st||e===J)return e;let o=t.element,r=t.name;if(t.type===wt.PROPERTY){if(e===o[r])return st}else if(t.type===wt.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(r))return st}else if(t.type===wt.ATTRIBUTE&&o.getAttribute(r)===e+"")return st;return vn(t),e}});var N=class extends lt{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new de(this,"hint","label"),this.localize=new Lt(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,uo()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}updateFormValue(t){if(t==null){this.setValue("",null);return}super.updateFormValue(t)}handleSizeChange(){ue(this.localName,this.size)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new dn),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){pn(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){if(super.updated(t),t.has("value")||t.has("defaultValue")||t.has("type")){let e=["number","date","time","datetime-local"];this.input&&e.includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set("blank",!this.value),this.updateValidity()}}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,r="preserve"){let i=e??this.input.selectionStart,n=o??this.input.selectionEnd;this.input.setRangeText(t,i,n,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!t,r=this.hint?!0:!!e,i=this.withClear&&!this.disabled&&!this.readonly,n=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value=="number"||this.value&&this.value.length>0);return U`
      <label
        part="form-control-label label"
        class=${it({label:!0,"has-label":o})}
        for="input"
        aria-hidden=${o?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${Y(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${Y(this.placeholder)}
          minlength=${Y(this.minlength)}
          maxlength=${Y(this.maxlength)}
          min=${Y(this.min)}
          max=${Y(this.max)}
          step=${Y(this.step)}
          .value=${bn(this.value??"")}
          autocapitalize=${Y(this.autocapitalize)}
          autocomplete=${Y(this.autocomplete)}
          autocorrect=${this.autocorrect?"on":"off"}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${Y(this.pattern)}
          enterkeyhint=${Y(this.enterkeyhint)}
          inputmode=${Y(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${n?U`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?U`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?U`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:U`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${it({"has-slotted":r})}
        aria-hidden=${r?"false":"true"}
        >${this.hint}</slot
      >
    `}};N.css=[pe,lo,fn];N.shadowRootOptions={...lt.shadowRootOptions,delegatesFocus:!0};c([X("input")],N.prototype,"input",2);c([v()],N.prototype,"title",2);c([v({reflect:!0})],N.prototype,"type",2);c([Q()],N.prototype,"value",1);c([v({attribute:"value",reflect:!0})],N.prototype,"defaultValue",2);c([v({reflect:!0})],N.prototype,"size",2);c([tt("size")],N.prototype,"handleSizeChange",1);c([v({reflect:!0})],N.prototype,"appearance",2);c([v({type:Boolean,reflect:!0})],N.prototype,"pill",2);c([v()],N.prototype,"label",2);c([v({attribute:"hint"})],N.prototype,"hint",2);c([v({attribute:"with-clear",type:Boolean})],N.prototype,"withClear",2);c([v()],N.prototype,"placeholder",2);c([v({type:Boolean,reflect:!0})],N.prototype,"readonly",2);c([v({attribute:"password-toggle",type:Boolean})],N.prototype,"passwordToggle",2);c([v({attribute:"password-visible",type:Boolean})],N.prototype,"passwordVisible",2);c([v({attribute:"without-spin-buttons",type:Boolean,reflect:!0})],N.prototype,"withoutSpinButtons",2);c([v({type:Boolean,reflect:!0})],N.prototype,"required",2);c([v()],N.prototype,"pattern",2);c([v({type:Number})],N.prototype,"minlength",2);c([v({type:Number})],N.prototype,"maxlength",2);c([v()],N.prototype,"min",2);c([v()],N.prototype,"max",2);c([v()],N.prototype,"step",2);c([v()],N.prototype,"autocapitalize",2);c([v({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="off"),toAttribute:t=>t?"on":"off"}})],N.prototype,"autocorrect",2);c([v()],N.prototype,"autocomplete",2);c([v({type:Boolean})],N.prototype,"autofocus",2);c([v()],N.prototype,"enterkeyhint",2);c([v({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],N.prototype,"spellcheck",2);c([v()],N.prototype,"inputmode",2);c([v({attribute:"with-label",type:Boolean})],N.prototype,"withLabel",2);c([v({attribute:"with-hint",type:Boolean})],N.prototype,"withHint",2);c([tt("step",{waitUntilFirstUpdate:!0})],N.prototype,"handleStepChange",1);N=c([ot("wa-input")],N);N.disableWarning?.("change-in-update");var wn=K`
  @layer wa-component {
    :host {
      display: inline-block;

      /* Workaround because Chrome doesn't like :host(:has()) below
       * https://issues.chromium.org/issues/40062355
       * Firefox doesn't like this nested rule, so both are needed */
      &:has(wa-badge) {
        position: relative;
      }
    }

    /* Apply relative positioning only when needed to position wa-badge
     * This avoids creating a new stacking context for every button */
    :host(:has(wa-badge)) {
      position: relative;
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, border, box-shadow, color, opacity, transform;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    transform-origin: center;
    cursor: pointer;
    padding: 0 var(--wa-form-control-padding-inline);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--wa-font-weight-action);
    height: var(--wa-form-control-height);
    width: 100%;

    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));

    border-color: transparent;
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-form-control-border-radius));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-form-control-border-radius));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-form-control-border-radius));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-form-control-border-radius));
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
  }

  /* Hover and active transforms */
  .button:not(.disabled):not(.loading) {
    @media (hover: hover) {
      &:hover {
        transform: var(--wa-button-transform-hover);
      }
    }
    &:active {
      transform: var(--wa-button-transform-active);
    }

    @media (prefers-reduced-motion: reduce) {
      &:hover,
      &:active {
        transform: none;
      }
    }
  }

  /* Appearance modifiers */
  :host([appearance='plain']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: transparent;
      border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
        background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='filled-outlined']) {
    /* Indentation overrides for grouping outlined */
    margin-inline-start: var(--_button-horizontal-indent-outlined);
    margin-block-start: var(--_button-vertical-indent-outlined);

    .button {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal));
      border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      color: var(--wa-color-on-normal, var(--wa-color-neutral-on-normal));
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-normal, var(--wa-color-neutral-fill-normal)),
        var(--wa-color-mix-active)
      );
    }
  }

  :host([appearance='accent']) {
    /* Indentation overrides for grouping */
    margin-inline-start: var(--_button-horizontal-indent);
    margin-block-start: var(--_button-vertical-indent);

    .button {
      color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
      background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
      border-color: transparent;
    }
    @media (hover: hover) {
      .button:not(.disabled):not(.loading):hover {
        background-color: color-mix(
          in oklab,
          var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
          var(--wa-color-mix-hover)
        );
      }
    }
    .button:not(.disabled):not(.loading):active {
      background-color: color-mix(
        in oklab,
        var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud)),
        var(--wa-color-mix-active)
      );
    }
  }

  /* Focus states */
  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled state */
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;

    /* When disabled, prevent mouse events from bubbling up from children */
    .button {
      pointer-events: none;
    }
  }

  /* Keep it last so Safari doesn't stop parsing this block */
  .button::-moz-focus-inner {
    border: 0;
  }

  /* Icon buttons */
  .button.is-icon-button {
    outline-offset: 2px;
    width: var(--wa-form-control-height);
    aspect-ratio: 1;
  }

  /* Icon buttons with a caret need to grow to fit both the icon and the caret */
  .button.is-icon-button.caret {
    width: auto;
    aspect-ratio: auto;
    min-width: var(--wa-form-control-height);
  }

  /* Pill modifier */
  :host([pill]) .button {
    border-start-start-radius: var(--_button-start-start-radius, var(--wa-border-radius-pill));
    border-start-end-radius: var(--_button-start-end-radius, var(--wa-border-radius-pill));
    border-end-start-radius: var(--_button-end-start-radius, var(--wa-border-radius-pill));
    border-end-end-radius: var(--_button-end-end-radius, var(--wa-border-radius-pill));
  }

  /*
   * Label
   */

  .start,
  .end {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .label {
    display: inline-block;
  }

  .is-icon-button .label {
    display: flex;
    justify-content: center;
  }

  .label::slotted(wa-icon) {
    align-self: center;
  }

  /*
   * Caret modifier
   */

  wa-icon[part='caret'] {
    display: flex;
    align-self: center;
    align-items: center;

    &::part(svg) {
      width: 0.875em;
      height: 0.875em;
    }

    .button:has(&) .end {
      display: none;
    }
  }

  /*
   * Loading modifier
   */

  .loading {
    position: relative;
    cursor: wait;

    .start,
    .label,
    .end,
    .caret {
      visibility: hidden;
    }

    wa-spinner {
      --indicator-color: currentColor;
      --track-color: color-mix(in oklab, currentColor, transparent 90%);

      position: absolute;
      font-size: 1em;
      height: 1em;
      width: 1em;
      top: calc(50% - 0.5em);
      left: calc(50% - 0.5em);
    }
  }

  /*
   * Badges
   */

  .button ::slotted(wa-badge) {
    border-color: var(--wa-color-surface-default);
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  :host(:dir(rtl)) ::slotted(wa-badge) {
    translate: -50% -50%;
  }

  /*
  * Button spacing
  */

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.75em;
  }

  slot[name='end']::slotted(*),
  .button:not(.visually-hidden-label) [part='caret'] {
    margin-inline-start: 0.75em;
  }
`;var yn=K`
  :where(:root),
  .wa-neutral,
  :host([variant='neutral']) {
    --wa-color-fill-loud: var(--wa-color-neutral-fill-loud);
    --wa-color-fill-normal: var(--wa-color-neutral-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-neutral-fill-quiet);
    --wa-color-border-loud: var(--wa-color-neutral-border-loud);
    --wa-color-border-normal: var(--wa-color-neutral-border-normal);
    --wa-color-border-quiet: var(--wa-color-neutral-border-quiet);
    --wa-color-on-loud: var(--wa-color-neutral-on-loud);
    --wa-color-on-normal: var(--wa-color-neutral-on-normal);
    --wa-color-on-quiet: var(--wa-color-neutral-on-quiet);
  }

  .wa-brand,
  :host([variant='brand']) {
    --wa-color-fill-loud: var(--wa-color-brand-fill-loud);
    --wa-color-fill-normal: var(--wa-color-brand-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-brand-fill-quiet);
    --wa-color-border-loud: var(--wa-color-brand-border-loud);
    --wa-color-border-normal: var(--wa-color-brand-border-normal);
    --wa-color-border-quiet: var(--wa-color-brand-border-quiet);
    --wa-color-on-loud: var(--wa-color-brand-on-loud);
    --wa-color-on-normal: var(--wa-color-brand-on-normal);
    --wa-color-on-quiet: var(--wa-color-brand-on-quiet);
  }

  .wa-success,
  :host([variant='success']) {
    --wa-color-fill-loud: var(--wa-color-success-fill-loud);
    --wa-color-fill-normal: var(--wa-color-success-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-success-fill-quiet);
    --wa-color-border-loud: var(--wa-color-success-border-loud);
    --wa-color-border-normal: var(--wa-color-success-border-normal);
    --wa-color-border-quiet: var(--wa-color-success-border-quiet);
    --wa-color-on-loud: var(--wa-color-success-on-loud);
    --wa-color-on-normal: var(--wa-color-success-on-normal);
    --wa-color-on-quiet: var(--wa-color-success-on-quiet);
  }

  .wa-warning,
  :host([variant='warning']) {
    --wa-color-fill-loud: var(--wa-color-warning-fill-loud);
    --wa-color-fill-normal: var(--wa-color-warning-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-warning-fill-quiet);
    --wa-color-border-loud: var(--wa-color-warning-border-loud);
    --wa-color-border-normal: var(--wa-color-warning-border-normal);
    --wa-color-border-quiet: var(--wa-color-warning-border-quiet);
    --wa-color-on-loud: var(--wa-color-warning-on-loud);
    --wa-color-on-normal: var(--wa-color-warning-on-normal);
    --wa-color-on-quiet: var(--wa-color-warning-on-quiet);
  }

  .wa-danger,
  :host([variant='danger']) {
    --wa-color-fill-loud: var(--wa-color-danger-fill-loud);
    --wa-color-fill-normal: var(--wa-color-danger-fill-normal);
    --wa-color-fill-quiet: var(--wa-color-danger-fill-quiet);
    --wa-color-border-loud: var(--wa-color-danger-border-loud);
    --wa-color-border-normal: var(--wa-color-danger-border-normal);
    --wa-color-border-quiet: var(--wa-color-danger-border-quiet);
    --wa-color-on-loud: var(--wa-color-danger-on-loud);
    --wa-color-on-normal: var(--wa-color-danger-on-normal);
    --wa-color-on-quiet: var(--wa-color-danger-on-quiet);
  }
`;var xn=Symbol.for(""),ea=t=>{if(t?.r===xn)return t?._$litStatic$};var Xo=(t,...e)=>({_$litStatic$:e.reduce((o,r,i)=>o+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+t[i+1],t[0]),r:xn}),Cn=new Map,Qo=t=>(e,...o)=>{let r=o.length,i,n,s=[],a=[],h,b=0,E=!1;for(;b<r;){for(h=e[b];b<r&&(n=o[b],(i=ea(n))!==void 0);)h+=i+e[++b],E=!0;b!==r&&a.push(n),s.push(h),b++}if(b===r&&s.push(e[r]),E){let C=s.join("$$lit$$");(e=Cn.get(C))===void 0&&(s.raw=s,Cn.set(C,e=s)),o=a}return t(e,...o)},po=Qo(U),Dd=Qo(Hr),Pd=Qo(qr);var H=class extends lt{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new de(this,"[default]","start","end"),this.localize=new Lt(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,uo()]}handleSizeChange(){ue(this.localName,this.size)}constructLightDOMButton(){let t=document.createElement("button");for(let e of this.attributes)e.name!=="style"&&t.setAttribute(e.name,e.value);return t.type=this.type,t.style.position="absolute !important",t.style.width="0 !important",t.style.height="0 !important",t.style.clipPath="inset(50%) !important",t.style.overflow="hidden !important",t.style.whiteSpace="nowrap !important",this.name&&(t.name=this.name),t.value=this.value||"",t}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;let o=this.constructLightDOMButton();this.parentElement?.append(o),o.click(),o.remove()}handleInvalid(){this.dispatchEvent(new he)}handleLabelSlotChange(){let t=this.labelSlot.assignedNodes({flatten:!0}),e=!1,o=!1,r=!1,i=!1;[...t].forEach(n=>{if(n.nodeType===Node.ELEMENT_NODE){let s=n;s.localName==="wa-icon"?(o=!0,e||(e=s.label!==void 0)):i=!0}else n.nodeType===Node.TEXT_NODE&&(n.textContent?.trim()||"").length>0&&(r=!0)}),this.isIconButton=o&&!r&&!i,this.customStates.set("icon-button",this.isIconButton),this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=this.isLink(),e=t?Xo`a`:Xo`button`;return po`
      <${e}
        part="base"
        class=${it({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start","withStart"),"has-end":this.hasSlotController.test("end","withEnd"),"is-icon-button":this.isIconButton})}
        ?disabled=${Y(t?void 0:this.disabled)}
        type=${Y(t?void 0:this.type)}
        title=${this.title}
        name=${Y(t?void 0:this.name)}
        value=${Y(t?void 0:this.value)}
        href=${Y(t?this.href:void 0)}
        target=${Y(t?this.target:void 0)}
        download=${Y(t?this.download:void 0)}
        rel=${Y(t&&this.rel?this.rel:void 0)}
        role=${Y(t?void 0:"button")}
        aria-disabled=${Y(t&&this.disabled?"true":void 0)}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?po`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?po`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};H.shadowRootOptions={...lt.shadowRootOptions,delegatesFocus:!0};H.css=[wn,yn,pe];c([X(".button")],H.prototype,"button",2);c([X("slot:not([name])")],H.prototype,"labelSlot",2);c([Q()],H.prototype,"invalid",2);c([Q()],H.prototype,"isIconButton",2);c([v()],H.prototype,"title",2);c([v({reflect:!0})],H.prototype,"variant",2);c([v({reflect:!0})],H.prototype,"appearance",2);c([v({reflect:!0})],H.prototype,"size",2);c([tt("size")],H.prototype,"handleSizeChange",1);c([v({attribute:"with-caret",type:Boolean,reflect:!0})],H.prototype,"withCaret",2);c([v({attribute:"with-start",type:Boolean})],H.prototype,"withStart",2);c([v({attribute:"with-end",type:Boolean})],H.prototype,"withEnd",2);c([v({type:Boolean})],H.prototype,"disabled",2);c([v({type:Boolean,reflect:!0})],H.prototype,"loading",2);c([v({type:Boolean,reflect:!0})],H.prototype,"pill",2);c([v()],H.prototype,"type",2);c([v({reflect:!0})],H.prototype,"name",2);c([v({reflect:!0})],H.prototype,"value",2);c([v({reflect:!0})],H.prototype,"href",2);c([v()],H.prototype,"target",2);c([v()],H.prototype,"rel",2);c([v()],H.prototype,"download",2);c([v({attribute:"formaction"})],H.prototype,"formAction",2);c([v({attribute:"formenctype"})],H.prototype,"formEnctype",2);c([v({attribute:"formmethod"})],H.prototype,"formMethod",2);c([v({attribute:"formnovalidate",type:Boolean})],H.prototype,"formNoValidate",2);c([v({attribute:"formtarget"})],H.prototype,"formTarget",2);c([tt("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);c([tt("href")],H.prototype,"handleHrefChange",1);c([tt("loading",{waitUntilFirstUpdate:!0})],H.prototype,"handleLoadingChange",1);H=c([ot("wa-button")],H);H.disableWarning?.("change-in-update");var En=K`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;
    --size: 1em;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
    */
    flex: none;
    display: inline-flex;
    width: var(--size);
    height: var(--size);
  }

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    animation: spin var(--speed) linear infinite;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - var(--track-width) / 2);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
    r: var(--radius);
    fill: none;
    stroke-width: var(--track-width);
  }

  .track {
    stroke: var(--track-color);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: calc(0.597 * var(--circumference)), calc(0.796 * var(--circumference));
    stroke-dashoffset: calc(-0.04 * var(--circumference));
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: calc(0.008 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.278 * var(--circumference));
    }
    100% {
      stroke-dasharray: calc(0.716 * var(--circumference)), calc(1.194 * var(--circumference));
      stroke-dashoffset: calc(-0.987 * var(--circumference));
    }
  }
`;var Zo=class extends rt{constructor(){super(...arguments),this.localize=new Lt(this)}render(){return U`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};Zo.css=En;Zo=c([ot("wa-spinner")],Zo);var Ln=K`
  :host {
    display: inline-flex;
  }

  .button-group {
    display: flex;
    position: relative;
    isolation: isolate;
    flex-wrap: wrap;

    @media (hover: hover) {
      > :hover,
      &::slotted(:hover) {
        z-index: 1;
      }
    }

    /* Focus and checked are always on top */
    > :focus,
    &::slotted(:focus),
    > [aria-checked='true'],
    &::slotted([aria-checked='true']),
    > [checked],
    &::slotted([checked]) {
      z-index: 2 !important;
    }

    :host([orientation='horizontal']) & {
      flex-direction: row;
    }

    :host([orientation='vertical']) & {
      flex-direction: column;
    }
  }

  /* Set custom properties to be inherited by slotted buttons */
  :host([orientation='horizontal']) {
    --_button-horizontal-indent: var(--wa-form-control-border-width);
    --_button-horizontal-indent-outlined: calc(var(--wa-form-control-border-width) * -1);
  }

  :host([orientation='vertical']) {
    --_button-vertical-indent: var(--wa-form-control-border-width);
    --_button-vertical-indent-outlined: calc(var(--wa-form-control-border-width) * -1);
  }

  /* All buttons that are not in front or at the end get their border radius removed */
  ::slotted(:not(:first-child):not(:last-child)) {
    --_button-start-start-radius: 0;
    --_button-start-end-radius: 0;
    --_button-end-start-radius: 0;
    --_button-end-end-radius: 0;
  }

  /* Remove leading and trailing buttons border radius individually */
  :host([orientation='horizontal']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-start-end-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-end-start-radius: 0;
    }
  }

  :host([orientation='vertical']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-end-start-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-start-end-radius: 0;
    }
  }
`;var Ft=class extends rt{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(t){super.updated(t),t.has("orientation")&&this.setAttribute("aria-orientation",this.orientation)}handleFocus(t){fo(t.target)?.classList.add("button-focus")}handleBlur(t){fo(t.target)?.classList.remove("button-focus")}handleMouseOver(t){fo(t.target)?.classList.add("button-hover")}handleMouseOut(t){fo(t.target)?.classList.remove("button-hover")}render(){return U`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      ></slot>
    `}};Ft.css=[Ln];c([X("slot")],Ft.prototype,"defaultSlot",2);c([Q()],Ft.prototype,"disableRole",2);c([Q()],Ft.prototype,"hasOutlined",2);c([v()],Ft.prototype,"label",2);c([v({reflect:!0})],Ft.prototype,"orientation",2);Ft=c([ot("wa-button-group")],Ft);function fo(t){let e="wa-button, wa-radio-button";return t.closest(e)??t.querySelector(e)}var An=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var Sn=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var $n=K`
  :host {
    --primary-color: currentColor;
    --primary-opacity: 1;
    --secondary-color: currentColor;
    --secondary-opacity: 0.4;
    --rotate-angle: 0deg;

    box-sizing: content-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: -0.125em;
  }

  /* Standard */
  :host(:not([auto-width])) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto-width */
  :host([auto-width]) {
    width: auto;
    height: 1em;
  }

  svg {
    fill: currentColor;
    height: 1em;
    overflow: visible;
    width: auto;

    /* Duotone colors with path-specific opacity fallback */
    path[data-duotone-primary] {
      color: var(--primary-color);
      opacity: var(--path-opacity, var(--primary-opacity));
    }

    path[data-duotone-secondary] {
      color: var(--secondary-color);
      opacity: var(--path-opacity, var(--secondary-opacity));
    }
  }

  /* Rotation */
  :host([rotate]) {
    transform: rotate(var(--rotate-angle, 0deg));
  }

  /* Flipping */
  :host([flip='x']) {
    transform: scaleX(-1);
  }
  :host([flip='y']) {
    transform: scaleY(-1);
  }
  :host([flip='both']) {
    transform: scale(-1, -1);
  }

  /* Rotation and Flipping combined */
  :host([rotate][flip='x']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleX(-1);
  }
  :host([rotate][flip='y']) {
    transform: rotate(var(--rotate-angle, 0deg)) scaleY(-1);
  }
  :host([rotate][flip='both']) {
    transform: rotate(var(--rotate-angle, 0deg)) scale(-1, -1);
  }

  /* Animations */
  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='shake']) {
    animation-name: shake;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-pulse']) {
    animation-name: spin-pulse;
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  /* Keyframes */
  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']) {
      animation: none !important;
      transition: none !important;
    }
  }
  @keyframes beat {
    0%,
    90% {
      transform: scale(1);
    }
    45% {
      transform: scale(var(--beat-scale, 1.25));
    }
  }

  @keyframes fade {
    50% {
      opacity: var(--fade-opacity, 0.4);
    }
  }

  @keyframes beat-fade {
    0%,
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.125));
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(var(--bounce-start-scale-x, 1.1), var(--bounce-start-scale-y, 0.9)) translateY(0);
    }
    30% {
      transform: scale(var(--bounce-jump-scale-x, 0.9), var(--bounce-jump-scale-y, 1.1))
        translateY(var(--bounce-height, -0.5em));
    }
    50% {
      transform: scale(var(--bounce-land-scale-x, 1.05), var(--bounce-land-scale-y, 0.95)) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(var(--bounce-rebound, -0.125em));
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes flip {
    50% {
      transform: rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -180deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(-15deg);
    }
    4% {
      transform: rotate(15deg);
    }
    8%,
    24% {
      transform: rotate(-18deg);
    }
    12%,
    28% {
      transform: rotate(18deg);
    }
    16% {
      transform: rotate(-22deg);
    }
    20% {
      transform: rotate(22deg);
    }
    32% {
      transform: rotate(-12deg);
    }
    36% {
      transform: rotate(12deg);
    }
    40%,
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-pulse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;var oa="",Jo="";function _n(){return oa.replace(/\/$/,"")}function ra(t){Jo=t}function kn(){if(!Jo){let t=document.querySelector("[data-fa-kit-code]");t&&ra(t.getAttribute("data-fa-kit-code")||"")}return Jo}var Tn="7.2.0";function ia(t,e,o){let r="solid";return e==="chisel"&&(r="chisel-regular"),e==="etch"&&(r="etch-solid"),e==="graphite"&&(r="graphite-thin"),e==="jelly"&&(r="jelly-regular",o==="duo-regular"&&(r="jelly-duo-regular"),o==="fill-regular"&&(r="jelly-fill-regular")),e==="jelly-duo"&&(r="jelly-duo-regular"),e==="jelly-fill"&&(r="jelly-fill-regular"),e==="notdog"&&(o==="solid"&&(r="notdog-solid"),o==="duo-solid"&&(r="notdog-duo-solid")),e==="notdog-duo"&&(r="notdog-duo-solid"),e==="slab"&&((o==="solid"||o==="regular")&&(r="slab-regular"),o==="press-regular"&&(r="slab-press-regular")),e==="slab-press"&&(r="slab-press-regular"),e==="thumbprint"&&(r="thumbprint-light"),e==="utility"&&(r="utility-semibold"),e==="utility-duo"&&(r="utility-duo-semibold"),e==="utility-fill"&&(r="utility-fill-semibold"),e==="whiteboard"&&(r="whiteboard-semibold"),e==="classic"&&(o==="thin"&&(r="thin"),o==="light"&&(r="light"),o==="regular"&&(r="regular"),o==="solid"&&(r="solid")),e==="duotone"&&(o==="thin"&&(r="duotone-thin"),o==="light"&&(r="duotone-light"),o==="regular"&&(r="duotone-regular"),o==="solid"&&(r="duotone")),e==="sharp"&&(o==="thin"&&(r="sharp-thin"),o==="light"&&(r="sharp-light"),o==="regular"&&(r="sharp-regular"),o==="solid"&&(r="sharp-solid")),e==="sharp-duotone"&&(o==="thin"&&(r="sharp-duotone-thin"),o==="light"&&(r="sharp-duotone-light"),o==="regular"&&(r="sharp-duotone-regular"),o==="solid"&&(r="sharp-duotone-solid")),e==="brands"&&(r="brands"),r}function na(t,e,o){let r=ia(t,e,o),i=_n();if(i)return`${i}/${r}/${t}.svg`;let n=kn();return n.length>0?`https://ka-p.fontawesome.com/releases/v${Tn}/svgs/${r}/${t}.svg?token=${encodeURIComponent(n)}`:`https://ka-f.fontawesome.com/releases/v${Tn}/svgs/${r}/${t}.svg`}var sa={name:"default",resolver:(t,e="classic",o="solid")=>na(t,e,o),mutator:(t,e)=>{if(e?.family&&!t.hasAttribute("data-duotone-initialized")){let{family:o,variant:r}=e;if(o==="duotone"||o==="sharp-duotone"||o==="notdog-duo"||o==="notdog"&&r==="duo-solid"||o==="jelly-duo"||o==="jelly"&&r==="duo-regular"||o==="utility-duo"||o==="thumbprint"){let i=[...t.querySelectorAll("path")],n=i.find(a=>!a.hasAttribute("opacity")),s=i.find(a=>a.hasAttribute("opacity"));if(!n||!s)return;if(n.setAttribute("data-duotone-primary",""),s.setAttribute("data-duotone-secondary",""),e.swapOpacity&&n&&s){let a=s.getAttribute("opacity")||"0.4";n.style.setProperty("--path-opacity",a),s.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},Mn=sa;function aa(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var tr={solid:{backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path fill="currentColor" d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>',"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},la={name:"system",resolver:(t,e="classic",o="solid")=>{let i=tr[o][t]??tr.regular[t]??tr.regular["circle-question"];return i?aa(i):""}},Rn=la;var ca="classic",ha=[Mn,Rn],Dn=new Set;function Pn(t){Dn.add(t)}function zn(t){Dn.delete(t)}function mo(t){return ha.find(e=>e.name===t)}function On(){return ca}var ze=Symbol(),go=Symbol(),er,or=new Map,nt=class extends rt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(t,e)=>{let o;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=U`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;let r=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(r,this),this.svg}try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?ze:go}catch{return go}try{let r=document.createElement("div");r.innerHTML=await o.text();let i=r.firstElementChild;if(i?.tagName?.toLowerCase()!=="svg")return ze;er||(er=new DOMParser);let s=er.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):ze}catch{return ze}}}connectedCallback(){super.connectedCallback(),Pn(this)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),zn(this)}async getIconSource(){let t=mo(this.library),e=this.family||On();if(this.name&&t){let o;try{o=await t.resolver(this.name,e,this.variant,this.autoWidth)}catch{o=void 0}return{url:o,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){let{url:t,fromLibrary:e}=await this.getIconSource(),o=e?mo(this.library):void 0;if(!t){this.svg=null;return}let r=or.get(t);r||(r=this.resolveIcon(t,o),or.set(t,r));let i=await r;i===go&&or.delete(t);let n=await this.getIconSource();if(t===n.url){if(mn(i)){this.svg=i;return}switch(i){case go:case ze:this.svg=null,this.dispatchEvent(new An);break;default:this.svg=i.cloneNode(!0),o?.mutator?.(this.svg,this),this.dispatchEvent(new Sn)}}}willUpdate(t){return this.style||this.setStyleProperty("--rotate-angle",`${this.rotate}deg`),super.willUpdate(t)}updated(t){super.updated(t);let e=mo(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);let o=this.shadowRoot?.querySelector("svg");o&&e?.mutator?.(o,this)}render(){return this.hasUpdated?this.svg:U`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};nt.css=$n;c([Q()],nt.prototype,"svg",2);c([v({reflect:!0})],nt.prototype,"name",2);c([v({reflect:!0})],nt.prototype,"family",2);c([v({reflect:!0})],nt.prototype,"variant",2);c([v({attribute:"auto-width",type:Boolean,reflect:!0})],nt.prototype,"autoWidth",2);c([v({attribute:"swap-opacity",type:Boolean,reflect:!0})],nt.prototype,"swapOpacity",2);c([v()],nt.prototype,"src",2);c([v()],nt.prototype,"label",2);c([v({reflect:!0})],nt.prototype,"library",2);c([v({type:Number,reflect:!0})],nt.prototype,"rotate",2);c([v({type:String,reflect:!0})],nt.prototype,"flip",2);c([v({type:String,reflect:!0})],nt.prototype,"animation",2);c([tt("label")],nt.prototype,"handleLabelChange",1);c([tt(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],nt.prototype,"setIcon",1);nt=c([ot("wa-icon")],nt);function In(t,e,o){return(e=ua(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function ua(t){var e=da(t,"string");return typeof e=="symbol"?e:e+""}function da(t,e){if(typeof t!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var rr=class extends HTMLElement{static get observedAttributes(){return["value","max"]}constructor(){super(),In(this,"_initialized",!1),In(this,"_resetTimer",null),this.attachShadow({mode:"open"})}connectedCallback(){this._initialized||(this.setup(),this._initialized=!0,this.updateValue(this.value))}setup(){let e=document.createElement("style");e.textContent=`
        :host {
          display: inline-flex;
          min-width: 1em;
          height: 1em;
          text-align: center;
          overflow: hidden;
          line-height: 1em;
        }
        .numbers {
          display: flex;
          flex-direction: column;
          transition: transform var(--bl-odometer-duration, 0.4s) cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .numbers span {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 1em;
        }`;let o=document.createElement("span");o.classList.add("numbers"),o.setAttribute("aria-hidden","true"),this.shadowRoot.append(e,o),this.wrapper=o,this.rebuildNumbers()}rebuildNumbers(){this.wrapper.innerHTML="";let e=this.max;for(let r=0;r<=e;r++){let i=document.createElement("span");i.textContent=String(r),this.wrapper.appendChild(i)}let o=document.createElement("span");o.textContent="".concat(e,"+"),this.wrapper.appendChild(o),this._initialized&&this.updateValue(this.value)}attributeChangedCallback(e,o,r){if(r!==o&&this._initialized)if(e==="value"){let i=parseInt(o??"0",10)||0,n=parseInt(r??"0",10)||0;this.applyChangeState(i,n),this.updateValue(n)}else e==="max"&&this.rebuildNumbers()}updateValue(e){let o=this.max,r=e>o?o+1:Math.max(0,e),i=this.wrapper.getBoundingClientRect().height||16;this.wrapper.style.transform="translateY(-".concat(r*i,"px)");let n=e>o?"".concat(o,"+"):"".concat(e);this.setAttribute("aria-label",n)}clearResetTimer(){this._resetTimer!==null&&(clearTimeout(this._resetTimer),this._resetTimer=null)}scheduleResetChange(){this.clearResetTimer();let e=3e3;this._resetTimer=window.setTimeout(()=>{this.removeAttribute("data-change"),this._resetTimer=null},e)}applyChangeState(e,o){o>e?(this.setAttribute("data-change","up"),this.scheduleResetChange()):o<e&&(this.setAttribute("data-change","down"),this.scheduleResetChange())}set value(e){this.value!==e&&(this.setAttribute("value",String(e)),this._initialized&&this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0})))}get value(){return parseInt(this.getAttribute("value")||"0",10)||0}set max(e){this.setAttribute("max",String(e))}get max(){return parseInt(this.getAttribute("max")||"9",10)||9}};customElements.get("bl-odometer")||customElements.define("bl-odometer",rr);function Fn(t,e,o){return(e=pa(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function pa(t){var e=fa(t,"string");return typeof e=="symbol"?e:e+""}function fa(t,e){if(typeof t!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var r=o.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var vo=class t extends Event{constructor(e,o){super(t.eventName,{bubbles:!0,composed:!0}),this.index=e,this.item=o}};Fn(vo,"eventName","bl-select");var ir=class extends HTMLElement{constructor(){super(),Fn(this,"handleChildrenChanged",()=>{var e;let o=(e=this.items[this.activeIndex])===null||e===void 0?void 0:e.id;if(this.updateItems(),o){let r=this.items.findIndex(i=>i.id===o);this.activeIndex=r>=0?r:-1}else this.activeIndex=-1;this.updateActiveItem()}),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML='<slot style="border-radius: inherit"></slot>',this.activeIndex=-1,this.items=[],this.inputElement=null,this.slotElement=null,this.observer=null}get activeClass(){return this.getAttribute("active-class")||"active"}connectedCallback(){var e,o;this.setAttribute("role","listbox"),this.tabIndex=-1,this.updateItems(),this.syncActiveIndexFromDataSelected(),this.updateActiveItem();let r=this.getAttribute("for");this.inputElement=r?document.getElementById(r):null,this.inputElement&&(this.inputElement.setAttribute("role","combobox"),this.inputElement.setAttribute("aria-controls",this.id),this.inputElement.setAttribute("aria-expanded","true"),this.inputElement.addEventListener("keydown",this.onKeyDown.bind(this))),this.addEventListener("keydown",this.onKeyDown.bind(this)),this.addEventListener("click",i=>{let n=i.target instanceof Element?i.target.closest("[data-select-list-index]"):null;if(n&&n.hasAttribute("data-select-list-index")){let s=Number(n.getAttribute("data-select-list-index"));this.select(s)}}),this.observer=new MutationObserver(i=>{i.some(n=>n.type==="childList")&&this.handleChildrenChanged(),i.some(n=>n.type==="attributes"&&n.attributeName==="data-selected")&&(this.syncActiveIndexFromDataSelected(),this.updateActiveItem())}),this.observer.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-selected"]}),this.slotElement=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("slot"),(o=this.slotElement)===null||o===void 0||o.addEventListener("slotchange",this.handleChildrenChanged)}disconnectedCallback(){var e,o;(e=this.observer)===null||e===void 0||e.disconnect(),this.observer=null,(o=this.slotElement)===null||o===void 0||o.removeEventListener("slotchange",this.handleChildrenChanged)}syncActiveIndexFromDataSelected(){let e=this.items.findIndex(o=>o.hasAttribute("data-selected"));e>=0&&(this.activeIndex=e)}updateItems(){let e=["button:not([disabled])","a[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])','[role="option"]'].join(", ");this.items=Array.from(this.querySelectorAll(e)),this.items.forEach((o,r)=>{o.hasAttribute("id")||o.setAttribute("id","".concat(this.id,"-option-").concat(r)),o.setAttribute("data-select-list-index",r.toString()),o.setAttribute("aria-selected","false"),o.setAttribute("role","option"),o.tabIndex=-1})}onKeyDown(e){if(this.items.length){if(e.key==="ArrowDown")e.preventDefault(),this.activeIndex=(this.activeIndex+1)%this.items.length,this.updateActiveItem();else if(e.key==="ArrowUp")e.preventDefault(),this.activeIndex=(this.activeIndex-1+this.items.length)%this.items.length,this.updateActiveItem();else if(e.key==="Enter"&&this.activeIndex>=0){e.preventDefault();let o=this.items[this.activeIndex];o?.click()}}}updateActiveItem(){let e=this.activeClass.split(" ");this.items.forEach((r,i)=>{let n=i===this.activeIndex;e.forEach(s=>{r.classList.toggle(s,n)}),r.setAttribute("aria-selected",n.toString())});let o=this.items[this.activeIndex];o&&this.inputElement?(this.inputElement.setAttribute("aria-activedescendant",o.id),o.scrollIntoView({block:"nearest"})):this.inputElement&&this.inputElement.removeAttribute("aria-activedescendant")}select(e){this.activeIndex=e,this.items.forEach(r=>r.removeAttribute("data-selected"));let o=this.items[e];o&&(o.setAttribute("data-selected",""),this.dispatchEvent(new vo(e,o)),this.updateActiveItem())}};customElements.get("bl-select-list")||customElements.define("bl-select-list",ir);var bo=new Map;function nr(t){if(!t||(bo.has(t)&&wo(t),!t.querySelector(".offcanvas")))return;let o=new AbortController;bo.set(t,o),window.addEventListener("popstate",()=>t?.close(),{signal:o.signal}),window.addEventListener("resize",()=>{let n=t.querySelector(".offcanvas");n&&getComputedStyle(n).position!=="fixed"&&t?.close()},{signal:o.signal});let r=history.pushState;history.pushState=function(){for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];r.apply(history,s),t?.close()};let i=history.replaceState;history.replaceState=function(){for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];i.apply(history,s),t?.close()}}function wo(t){let e=bo.get(t);e&&(e.abort(),bo.delete(t))}typeof window<"u"&&(window.blueWeb=window.blueWeb||{},window.blueWeb.modalResponsive={init:nr,dispose:wo});var Oe=new Map;function ma(t){if(!t)return;Oe.has(t)&&Bn(t);let e=t.querySelector('[data-blue-toggle="layout-side"]'),o=t.querySelector(".blue-layout-side"),r=t.querySelector(".blue-layout-side > dialog");if(!e||!o||!r)return;let i=new AbortController,n={toggleLayoutSideEl:e,layoutSideEl:o,modalEl:r,controller:i};Oe.set(t,n),localStorage.getItem("side-layout-shrink")!=null&&(o.classList.add("d-lg-none","w-lg-0"),e.setAttribute("aria-expanded","false")),e.addEventListener("click",()=>ga(t),{signal:i.signal}),nr(r)}function Bn(t){let e=Oe.get(t);if(!e)return;let{controller:o,modalEl:r}=e;o.abort(),r&&wo(r),Oe.delete(t)}function ga(t){let e=Oe.get(t);if(!e)return;let{layoutSideEl:o,toggleLayoutSideEl:r}=e;o.classList.toggle("d-lg-none"),o.classList.toggle("w-lg-0");let i=!o.classList.contains("d-lg-none");r.setAttribute("aria-expanded",i),i?localStorage.removeItem("side-layout-shrink"):localStorage.setItem("side-layout-shrink","")}typeof window<"u"&&(window.blueWeb=window.blueWeb||{},window.blueWeb.layout={init:ma,dispose:Bn});var Uf=ts(jn(),1),Co=!1,xo=!1;function Wf(t){xo||Cr(t,"web")}function jf(t){Co||xr(t)}function Kf(t){Co||xr(t)}function Yf(t){xo||Cr(t,"wasm")}function Gf(t){Co||xr(t)}function Xf(t){xo||Cr(t,"server")}function Cr(t,e){typeof t.addEventListener=="function"&&e==="web"&&(customElements.define("page-script",Fe),t.addEventListener("enhancedload",$r)),t.registerCustomEventType("washow",{browserEventName:"wa-show",createEventArgs:()=>null}),t.registerCustomEventType("wahide",{browserEventName:"wa-hide",createEventArgs:()=>null}),t.registerCustomEventType("blselect",{browserEventName:"bl-select",createEventArgs:({index:o,item:r})=>({index:o,value:r.dataset.value||r.innerText||"",description:r.dataset.description||null})}),t.registerCustomEventType("popovertoggle",{browserEventName:"toggle",createEventArgs:({newState:o})=>({newState:o==="open"?1:0})}),xo=!0}function xr(t){Co=!0}function va(t,e,o){let r=()=>t.invokeMethodAsync(e,o);document.startViewTransition?document.startViewTransition(r):r()}window.blueBlazor=window.blueBlazor||{};window.blueBlazor.startViewTransition=va;export{vo as BlSelectEvent,rr as Odometer,ir as SelectList,Xf as afterServerStarted,Cr as afterStarted,Yf as afterWebAssemblyStarted,Wf as afterWebStarted,Gf as beforeServerStart,xr as beforeStart,Kf as beforeWebAssemblyStart,jf as beforeWebStart,Bn as dispose,ma as init};
//# sourceMappingURL=BlueBlazor.lib.module.js.map
