var Ts=Object.create;var Yr=Object.defineProperty;var Ps=Object.getOwnPropertyDescriptor;var Rs=Object.getOwnPropertyNames;var Ds=Object.getPrototypeOf,Is=Object.prototype.hasOwnProperty;var Nt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Os=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Rs(t))!Is.call(e,o)&&o!==i&&Yr(e,o,{get:()=>t[o],enumerable:!(r=Ps(t,o))||r.enumerable});return e};var Fs=(e,t,i)=>(i=e!=null?Ts(Ds(e)):{},Os(t||!e||!e.__esModule?Yr(i,"default",{value:e,enumerable:!0}):i,e));var Ls=Nt((kr,_r)=>{(function(e,t){typeof kr=="object"&&typeof _r<"u"?_r.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e.Data=t())})(kr,function(){"use strict";let e=new Map;return{set(i,r,o){e.has(i)||e.set(i,new Map);let n=e.get(i);if(!n.has(r)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(r,o)},get(i,r){return e.has(i)&&e.get(i).get(r)||null},remove(i,r){if(!e.has(i))return;let o=e.get(i);o.delete(r),o.size===0&&e.delete(i)}}})});var Le=Nt((Ii,As)=>{(function(e,t){typeof Ii=="object"&&typeof As<"u"?t(Ii):typeof define=="function"&&define.amd?define(["exports"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.Index={}))})(Ii,function(e){"use strict";let r="transitionend",o=x=>(x&&window.CSS&&window.CSS.escape&&(x=x.replace(/#([^\s"#']+)/g,(_,$)=>`#${CSS.escape($)}`)),x),n=x=>x==null?`${x}`:Object.prototype.toString.call(x).match(/\s([a-z]+)/i)[1].toLowerCase(),s=x=>{do x+=Math.floor(Math.random()*1e6);while(document.getElementById(x));return x},a=x=>{if(!x)return 0;let{transitionDuration:_,transitionDelay:$}=window.getComputedStyle(x),I=Number.parseFloat(_),D=Number.parseFloat($);return!I&&!D?0:(_=_.split(",")[0],$=$.split(",")[0],(Number.parseFloat(_)+Number.parseFloat($))*1e3)},c=x=>{x.dispatchEvent(new Event(r))},b=x=>!x||typeof x!="object"?!1:(typeof x.jquery<"u"&&(x=x[0]),typeof x.nodeType<"u"),E=x=>b(x)?x.jquery?x[0]:x:typeof x=="string"&&x.length>0?document.querySelector(o(x)):null,g=x=>{if(!b(x)||x.getClientRects().length===0)return!1;let _=getComputedStyle(x).getPropertyValue("visibility")==="visible",$=x.closest("details:not([open])");if(!$)return _;if($!==x){let I=x.closest("summary");if(I&&I.parentNode!==$||I===null)return!1}return _},w=x=>!x||x.nodeType!==Node.ELEMENT_NODE||x.classList.contains("disabled")?!0:typeof x.disabled<"u"?x.disabled:x.hasAttribute("disabled")&&x.getAttribute("disabled")!=="false",u=x=>{if(!document.documentElement.attachShadow)return null;if(typeof x.getRootNode=="function"){let _=x.getRootNode();return _ instanceof ShadowRoot?_:null}return x instanceof ShadowRoot?x:x.parentNode?u(x.parentNode):null},p=()=>{},l=x=>{x.offsetHeight},L=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,d=[],m=x=>{document.readyState==="loading"?(d.length||document.addEventListener("DOMContentLoaded",()=>{for(let _ of d)_()}),d.push(x)):x()},A=()=>document.documentElement.dir==="rtl",f=x=>{m(()=>{let _=L();if(_){let $=x.NAME,I=_.fn[$];_.fn[$]=x.jQueryInterface,_.fn[$].Constructor=x,_.fn[$].noConflict=()=>(_.fn[$]=I,x.jQueryInterface)}})},y=(x,_=[],$=x)=>typeof x=="function"?x.call(..._):$,S=(x,_,$=!0)=>{if(!$){y(x);return}let D=a(_)+5,V=!1,F=({target:Q})=>{Q===_&&(V=!0,_.removeEventListener(r,F),y(x))};_.addEventListener(r,F),setTimeout(()=>{V||c(_)},D)},z=(x,_,$,I)=>{let D=x.length,V=x.indexOf(_);return V===-1?!$&&I?x[D-1]:x[0]:(V+=$?1:-1,I&&(V=(V+D)%D),x[Math.max(0,Math.min(V,D-1))])};e.defineJQueryPlugin=f,e.execute=y,e.executeAfterTransition=S,e.findShadowRoot=u,e.getElement=E,e.getNextActiveElement=z,e.getTransitionDurationFromElement=a,e.getUID=s,e.getjQuery=L,e.isDisabled=w,e.isElement=b,e.isRTL=A,e.isVisible=g,e.noop=p,e.onDOMContentLoaded=m,e.parseSelector=o,e.reflow=l,e.toType=n,e.triggerTransitionEnd=c,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})});var Tr=Nt((zr,Mr)=>{(function(e,t){typeof zr=="object"&&typeof Mr<"u"?Mr.exports=t(Le()):typeof define=="function"&&define.amd?define(["../util/index"],t):(e=typeof globalThis<"u"?globalThis:e||self,e.EventHandler=t(e.Index))})(zr,function(e){"use strict";let t=/[^.]*(?=\..*)\.|.*/,i=/\..*/,r=/::\d+$/,o={},n=1,s={mouseenter:"mouseover",mouseleave:"mouseout"},a=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function c(f,y){return y&&`${y}::${n++}`||f.uidEvent||n++}function b(f){let y=c(f);return f.uidEvent=y,o[y]=o[y]||{},o[y]}function E(f,y){return function S(z){return A(z,{delegateTarget:f}),S.oneOff&&m.off(f,z.type,y),y.apply(f,[z])}}function g(f,y,S){return function z(x){let _=f.querySelectorAll(y);for(let{target:$}=x;$&&$!==this;$=$.parentNode)for(let I of _)if(I===$)return A(x,{delegateTarget:$}),z.oneOff&&m.off(f,x.type,y,S),S.apply($,[x])}}function w(f,y,S=null){return Object.values(f).find(z=>z.callable===y&&z.delegationSelector===S)}function u(f,y,S){let z=typeof y=="string",x=z?S:y||S,_=d(f);return a.has(_)||(_=f),[z,x,_]}function p(f,y,S,z,x){if(typeof y!="string"||!f)return;let[_,$,I]=u(y,S,z);y in s&&($=(M=>function(C){if(!C.relatedTarget||C.relatedTarget!==C.delegateTarget&&!C.delegateTarget.contains(C.relatedTarget))return M.call(this,C)})($));let D=b(f),V=D[I]||(D[I]={}),F=w(V,$,_?S:null);if(F){F.oneOff=F.oneOff&&x;return}let Q=c($,y.replace(t,"")),P=_?g(f,S,$):E(f,$);P.delegationSelector=_?S:null,P.callable=$,P.oneOff=x,P.uidEvent=Q,V[Q]=P,f.addEventListener(I,P,_)}function l(f,y,S,z,x){let _=w(y[S],z,x);_&&(f.removeEventListener(S,_,!!x),delete y[S][_.uidEvent])}function L(f,y,S,z){let x=y[S]||{};for(let[_,$]of Object.entries(x))_.includes(z)&&l(f,y,S,$.callable,$.delegationSelector)}function d(f){return f=f.replace(i,""),s[f]||f}let m={on(f,y,S,z){p(f,y,S,z,!1)},one(f,y,S,z){p(f,y,S,z,!0)},off(f,y,S,z){if(typeof y!="string"||!f)return;let[x,_,$]=u(y,S,z),I=$!==y,D=b(f),V=D[$]||{},F=y.startsWith(".");if(typeof _<"u"){if(!Object.keys(V).length)return;l(f,D,$,_,x?S:null);return}if(F)for(let Q of Object.keys(D))L(f,D,Q,y.slice(1));for(let[Q,P]of Object.entries(V)){let T=Q.replace(r,"");(!I||y.includes(T))&&l(f,D,$,P.callable,P.delegationSelector)}},trigger(f,y,S){if(typeof y!="string"||!f)return null;let z=e.getjQuery(),x=d(y),_=y!==x,$=null,I=!0,D=!0,V=!1;_&&z&&($=z.Event(y,S),z(f).trigger($),I=!$.isPropagationStopped(),D=!$.isImmediatePropagationStopped(),V=$.isDefaultPrevented());let F=A(new Event(y,{bubbles:I,cancelable:!0}),S);return V&&F.preventDefault(),D&&f.dispatchEvent(F),F.defaultPrevented&&$&&$.preventDefault(),F}};function A(f,y={}){for(let[S,z]of Object.entries(y))try{f[S]=z}catch{Object.defineProperty(f,S,{configurable:!0,get(){return z}})}return f}return m})});var Ss=Nt((Pr,Rr)=>{(function(e,t){typeof Pr=="object"&&typeof Rr<"u"?Rr.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e.Manipulator=t())})(Pr,function(){"use strict";function e(r){if(r==="true")return!0;if(r==="false")return!1;if(r===Number(r).toString())return Number(r);if(r===""||r==="null")return null;if(typeof r!="string")return r;try{return JSON.parse(decodeURIComponent(r))}catch{return r}}function t(r){return r.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}return{setDataAttribute(r,o,n){r.setAttribute(`data-bs-${t(o)}`,n)},removeDataAttribute(r,o){r.removeAttribute(`data-bs-${t(o)}`)},getDataAttributes(r){if(!r)return{};let o={},n=Object.keys(r.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(let s of n){let a=s.replace(/^bs/,"");a=a.charAt(0).toLowerCase()+a.slice(1),o[a]=e(r.dataset[s])}return o},getDataAttribute(r,o){return e(r.getAttribute(`data-bs-${t(o)}`))}}})});var $s=Nt((Dr,Ir)=>{(function(e,t){typeof Dr=="object"&&typeof Ir<"u"?Ir.exports=t(Ss(),Le()):typeof define=="function"&&define.amd?define(["../dom/manipulator","./index"],t):(e=typeof globalThis<"u"?globalThis:e||self,e.Config=t(e.Manipulator,e.Index))})(Dr,function(e,t){"use strict";class i{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(o){return o=this._mergeConfigObj(o),o=this._configAfterMerge(o),this._typeCheckConfig(o),o}_configAfterMerge(o){return o}_mergeConfigObj(o,n){let s=t.isElement(n)?e.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...t.isElement(n)?e.getDataAttributes(n):{},...typeof o=="object"?o:{}}}_typeCheckConfig(o,n=this.constructor.DefaultType){for(let[s,a]of Object.entries(n)){let c=o[s],b=t.isElement(c)?"element":t.toType(c);if(!new RegExp(a).test(b))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${b}" but expected type "${a}".`)}}}return i})});var ks=Nt((Or,Fr)=>{(function(e,t){typeof Or=="object"&&typeof Fr<"u"?Fr.exports=t(Ls(),Tr(),$s(),Le()):typeof define=="function"&&define.amd?define(["./dom/data","./dom/event-handler","./util/config","./util/index"],t):(e=typeof globalThis<"u"?globalThis:e||self,e.BaseComponent=t(e.Data,e.EventHandler,e.Config,e.Index))})(Or,function(e,t,i,r){"use strict";let o="5.3.8";class n extends i{constructor(a,c){super(),a=r.getElement(a),a&&(this._element=a,this._config=this._getConfig(c),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),t.off(this._element,this.constructor.EVENT_KEY);for(let a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,c,b=!0){r.executeAfterTransition(a,c,b)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return e.get(r.getElement(a),this.DATA_KEY)}static getOrCreateInstance(a,c={}){return this.getInstance(a)||new this(a,typeof c=="object"?c:null)}static get VERSION(){return o}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}return n})});var _s=Nt((Br,Nr)=>{(function(e,t){typeof Br=="object"&&typeof Nr<"u"?Nr.exports=t(Le()):typeof define=="function"&&define.amd?define(["../util/index"],t):(e=typeof globalThis<"u"?globalThis:e||self,e.SelectorEngine=t(e.Index))})(Br,function(e){"use strict";let t=r=>{let o=r.getAttribute("data-bs-target");if(!o||o==="#"){let n=r.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),o=n&&n!=="#"?n.trim():null}return o?o.split(",").map(n=>e.parseSelector(n)).join(","):null},i={find(r,o=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(o,r))},findOne(r,o=document.documentElement){return Element.prototype.querySelector.call(o,r)},children(r,o){return[].concat(...r.children).filter(n=>n.matches(o))},parents(r,o){let n=[],s=r.parentNode.closest(o);for(;s;)n.push(s),s=s.parentNode.closest(o);return n},prev(r,o){let n=r.previousElementSibling;for(;n;){if(n.matches(o))return[n];n=n.previousElementSibling}return[]},next(r,o){let n=r.nextElementSibling;for(;n;){if(n.matches(o))return[n];n=n.nextElementSibling}return[]},focusableChildren(r){let o=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(o,r).filter(n=>!e.isDisabled(n)&&e.isVisible(n))},getSelectorFromElement(r){let o=t(r);return o&&i.findOne(o)?o:null},getElementFromSelector(r){let o=t(r);return o?i.findOne(o):null},getMultipleElementsFromSelector(r){let o=t(r);return o?i.find(o):[]}};return i})});var zs=Nt((Vr,Hr)=>{(function(e,t){typeof Vr=="object"&&typeof Hr<"u"?Hr.exports=t(ks(),Tr(),_s(),Le()):typeof define=="function"&&define.amd?define(["./base-component","./dom/event-handler","./dom/selector-engine","./util/index"],t):(e=typeof globalThis<"u"?globalThis:e||self,e.Tab=t(e.BaseComponent,e.EventHandler,e.SelectorEngine,e.Index))})(Vr,function(e,t,i,r){"use strict";let o="tab",s=".bs.tab",a=`hide${s}`,c=`hidden${s}`,b=`show${s}`,E=`shown${s}`,g=`click${s}`,w=`keydown${s}`,u=`load${s}`,p="ArrowLeft",l="ArrowRight",L="ArrowUp",d="ArrowDown",m="Home",A="End",f="active",y="fade",S="show",z="dropdown",x=".dropdown-toggle",_=".dropdown-menu",$=`:not(${x})`,I='.list-group, .nav, [role="tablist"]',D=".nav-item, .list-group-item",V=`.nav-link${$}, .list-group-item${$}, [role="tab"]${$}`,F='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Q=`${V}, ${F}`,P=`.${f}[data-bs-toggle="tab"], .${f}[data-bs-toggle="pill"], .${f}[data-bs-toggle="list"]`;class T extends e{constructor(C){super(C),this._parent=this._element.closest(I),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),t.on(this._element,w,k=>this._keydown(k)))}static get NAME(){return o}show(){let C=this._element;if(this._elemIsActive(C))return;let k=this._getActiveElem(),R=k?t.trigger(k,a,{relatedTarget:C}):null;t.trigger(C,b,{relatedTarget:k}).defaultPrevented||R&&R.defaultPrevented||(this._deactivate(k,C),this._activate(C,k))}_activate(C,k){if(!C)return;C.classList.add(f),this._activate(i.getElementFromSelector(C));let R=()=>{if(C.getAttribute("role")!=="tab"){C.classList.add(S);return}C.removeAttribute("tabindex"),C.setAttribute("aria-selected",!0),this._toggleDropDown(C,!0),t.trigger(C,E,{relatedTarget:k})};this._queueCallback(R,C,C.classList.contains(y))}_deactivate(C,k){if(!C)return;C.classList.remove(f),C.blur(),this._deactivate(i.getElementFromSelector(C));let R=()=>{if(C.getAttribute("role")!=="tab"){C.classList.remove(S);return}C.setAttribute("aria-selected",!1),C.setAttribute("tabindex","-1"),this._toggleDropDown(C,!1),t.trigger(C,c,{relatedTarget:k})};this._queueCallback(R,C,C.classList.contains(y))}_keydown(C){if(![p,l,L,d,m,A].includes(C.key))return;C.stopPropagation(),C.preventDefault();let k=this._getChildren().filter(j=>!r.isDisabled(j)),R;if([m,A].includes(C.key))R=k[C.key===m?0:k.length-1];else{let j=[l,d].includes(C.key);R=r.getNextActiveElement(k,C.target,j,!0)}R&&(R.focus({preventScroll:!0}),T.getOrCreateInstance(R).show())}_getChildren(){return i.find(Q,this._parent)}_getActiveElem(){return this._getChildren().find(C=>this._elemIsActive(C))||null}_setInitialAttributes(C,k){this._setAttributeIfNotExists(C,"role","tablist");for(let R of k)this._setInitialAttributesOnChild(R)}_setInitialAttributesOnChild(C){C=this._getInnerElement(C);let k=this._elemIsActive(C),R=this._getOuterElement(C);C.setAttribute("aria-selected",k),R!==C&&this._setAttributeIfNotExists(R,"role","presentation"),k||C.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(C,"role","tab"),this._setInitialAttributesOnTargetPanel(C)}_setInitialAttributesOnTargetPanel(C){let k=i.getElementFromSelector(C);k&&(this._setAttributeIfNotExists(k,"role","tabpanel"),C.id&&this._setAttributeIfNotExists(k,"aria-labelledby",`${C.id}`))}_toggleDropDown(C,k){let R=this._getOuterElement(C);if(!R.classList.contains(z))return;let j=(B,mt)=>{let pt=i.findOne(B,R);pt&&pt.classList.toggle(mt,k)};j(x,f),j(_,S),R.setAttribute("aria-expanded",k)}_setAttributeIfNotExists(C,k,R){C.hasAttribute(k)||C.setAttribute(k,R)}_elemIsActive(C){return C.classList.contains(f)}_getInnerElement(C){return C.matches(Q)?C:i.findOne(Q,C)}_getOuterElement(C){return C.closest(D)||C}static jQueryInterface(C){return this.each(function(){let k=T.getOrCreateInstance(this);if(typeof C=="string"){if(k[C]===void 0||C.startsWith("_")||C==="constructor")throw new TypeError(`No method named "${C}"`);k[C]()}})}}return t.on(document,g,F,function(M){["A","AREA"].includes(this.tagName)&&M.preventDefault(),!r.isDisabled(this)&&T.getOrCreateInstance(this).show()}),t.on(window,u,()=>{for(let M of i.find(P))T.getOrCreateInstance(M)}),r.defineJQueryPlugin(T),T})});var ae=new Map,Ye=class extends HTMLElement{static observedAttributes=["src"];src=null;attributeChangedCallback(t,i,r){t==="src"&&(this.src=r,this.unregisterPageScriptElement(i),this.registerPageScriptElement(r))}disconnectedCallback(){this.unregisterPageScriptElement(this.src)}registerPageScriptElement(t){if(!t)throw new Error('Must provide a non-empty value for the "src" attribute.');let i=ae.get(t);i?i.referenceCount++:(i={referenceCount:1,module:null},ae.set(t,i),this.initializePageScriptModule(t,i))}unregisterPageScriptElement(t){if(!t)return;let i=ae.get(t);i&&i.referenceCount--}async initializePageScriptModule(t,i){t.startsWith("./")&&(t=new URL(t.substring(2),document.baseURI).toString());let r=await import(t);i.referenceCount<=0||(i.module=r,r.onLoad?.(),r.onUpdate?.())}};function Xr(){for(let[e,{module:t,referenceCount:i}]of ae)i<=0&&(t?.onDispose?.(),ae.delete(e));for(let{module:e}of ae.values())e?.onUpdate?.()}var Xe=globalThis,Ge=Xe.ShadowRoot&&(Xe.ShadyCSS===void 0||Xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ni=Symbol(),Gr=new WeakMap,Ae=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==Ni)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o,i=this.t;if(Ge&&t===void 0){let r=i!==void 0&&i.length===1;r&&(t=Gr.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Gr.set(i,t))}return t}toString(){return this.cssText}},Qr=e=>new Ae(typeof e=="string"?e:e+"",void 0,Ni),K=(e,...t)=>{let i=e.length===1?e[0]:t.reduce((r,o,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new Ae(i,e,Ni)},Zr=(e,t)=>{if(Ge)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of t){let r=document.createElement("style"),o=Xe.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=i.cssText,e.appendChild(r)}},Vi=Ge?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(let r of t.cssRules)i+=r.cssText;return Qr(i)})(e):e;var{is:Bs,defineProperty:Ns,getOwnPropertyDescriptor:Vs,getOwnPropertyNames:Hs,getOwnPropertySymbols:qs,getPrototypeOf:Us}=Object,Qe=globalThis,Jr=Qe.trustedTypes,Ws=Jr?Jr.emptyScript:"",js=Qe.reactiveElementPolyfillSupport,Se=(e,t)=>e,$e={toAttribute(e,t){switch(t){case Boolean:e=e?Ws:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ze=(e,t)=>!Bs(e,t),to={attribute:!0,type:String,converter:$e,reflect:!1,useDefault:!1,hasChanged:Ze};Symbol.metadata??=Symbol("metadata"),Qe.litPropertyMetadata??=new WeakMap;var Rt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=to){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(t,r,i);o!==void 0&&Ns(this.prototype,t,o)}}static getPropertyDescriptor(t,i,r){let{get:o,set:n}=Vs(this.prototype,t)??{get(){return this[i]},set(s){this[i]=s}};return{get:o,set(s){let a=o?.call(this);n?.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??to}static _$Ei(){if(this.hasOwnProperty(Se("elementProperties")))return;let t=Us(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Se("properties"))){let i=this.properties,r=[...Hs(i),...qs(i)];for(let o of r)this.createProperty(o,i[o])}let t=this[Symbol.metadata];if(t!==null){let i=litPropertyMetadata.get(t);if(i!==void 0)for(let[r,o]of i)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[i,r]of this.elementProperties){let o=this._$Eu(i,r);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let i=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let o of r)i.unshift(Vi(o))}else t!==void 0&&i.push(Vi(t));return i}static _$Eu(t,i){let r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,i=this.constructor.elementProperties;for(let r of i.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$ET(t,i){let r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute!==void 0?r.converter:$e).toAttribute(i,r.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,i){let r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let n=r.getPropertyOptions(o),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:$e;this._$Em=o;let a=s.fromAttribute(i,n.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,i,r,o=!1,n){if(t!==void 0){let s=this.constructor;if(o===!1&&(n=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??Ze)(n,i)||r.useDefault&&r.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,i,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:r,reflect:o,wrapped:n},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??i??this[t]),n!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(i=void 0),this._$AL.set(t,i)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,n]of r){let{wrapped:s}=n,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,n,a)}}let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(i)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(t){}firstUpdated(t){}};Rt.elementStyles=[],Rt.shadowRootOptions={mode:"open"},Rt[Se("elementProperties")]=new Map,Rt[Se("finalized")]=new Map,js?.({ReactiveElement:Rt}),(Qe.reactiveElementVersions??=[]).push("2.1.2");var qi=globalThis,eo=e=>e,Je=qi.trustedTypes,io=Je?Je.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ui="$lit$",Dt=`lit$${Math.random().toFixed(9).slice(2)}$`,Wi="?"+Dt,Ks=`<${Wi}>`,Xt=document,_e=()=>Xt.createComment(""),ze=e=>e===null||typeof e!="object"&&typeof e!="function",ji=Array.isArray,lo=e=>ji(e)||typeof e?.[Symbol.iterator]=="function",Hi=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ro=/-->/g,oo=/>/g,Kt=RegExp(`>|${Hi}(?:([^\\s"'>=/]+)(${Hi}*=${Hi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),no=/'/g,so=/"/g,co=/^(?:script|style|textarea|title)$/i,Ki=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),U=Ki(1),ho=Ki(2),uo=Ki(3),J=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),ao=new WeakMap,Yt=Xt.createTreeWalker(Xt,129);function po(e,t){if(!ji(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return io!==void 0?io.createHTML(t):t}var fo=(e,t)=>{let i=e.length-1,r=[],o,n=t===2?"<svg>":t===3?"<math>":"",s=ke;for(let a=0;a<i;a++){let c=e[a],b,E,g=-1,w=0;for(;w<c.length&&(s.lastIndex=w,E=s.exec(c),E!==null);)w=s.lastIndex,s===ke?E[1]==="!--"?s=ro:E[1]!==void 0?s=oo:E[2]!==void 0?(co.test(E[2])&&(o=RegExp("</"+E[2],"g")),s=Kt):E[3]!==void 0&&(s=Kt):s===Kt?E[0]===">"?(s=o??ke,g=-1):E[1]===void 0?g=-2:(g=s.lastIndex-E[2].length,b=E[1],s=E[3]===void 0?Kt:E[3]==='"'?so:no):s===so||s===no?s=Kt:s===ro||s===oo?s=ke:(s=Kt,o=void 0);let u=s===Kt&&e[a+1].startsWith("/>")?" ":"";n+=s===ke?c+Ks:g>=0?(r.push(b),c.slice(0,g)+Ui+c.slice(g)+Dt+u):c+Dt+(g===-2?a:u)}return[po(e,n+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},Me=class e{constructor({strings:t,_$litType$:i},r){let o;this.parts=[];let n=0,s=0,a=t.length-1,c=this.parts,[b,E]=fo(t,i);if(this.el=e.createElement(b,r),Yt.currentNode=this.el.content,i===2||i===3){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(o=Yt.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let g of o.getAttributeNames())if(g.endsWith(Ui)){let w=E[s++],u=o.getAttribute(g).split(Dt),p=/([.?@])?(.*)/.exec(w);c.push({type:1,index:n,name:p[2],strings:u,ctor:p[1]==="."?ei:p[1]==="?"?ii:p[1]==="@"?ri:Qt}),o.removeAttribute(g)}else g.startsWith(Dt)&&(c.push({type:6,index:n}),o.removeAttribute(g));if(co.test(o.tagName)){let g=o.textContent.split(Dt),w=g.length-1;if(w>0){o.textContent=Je?Je.emptyScript:"";for(let u=0;u<w;u++)o.append(g[u],_e()),Yt.nextNode(),c.push({type:2,index:++n});o.append(g[w],_e())}}}else if(o.nodeType===8)if(o.data===Wi)c.push({type:2,index:n});else{let g=-1;for(;(g=o.data.indexOf(Dt,g+1))!==-1;)c.push({type:7,index:n}),g+=Dt.length-1}n++}}static createElement(t,i){let r=Xt.createElement("template");return r.innerHTML=t,r}};function Gt(e,t,i=e,r){if(t===J)return t;let o=r!==void 0?i._$Co?.[r]:i._$Cl,n=ze(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(e),o._$AT(e,i,r)),r!==void 0?(i._$Co??=[])[r]=o:i._$Cl=o),o!==void 0&&(t=Gt(e,o._$AS(e,t.values),o,r)),t}var ti=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:i},parts:r}=this._$AD,o=(t?.creationScope??Xt).importNode(i,!0);Yt.currentNode=o;let n=Yt.nextNode(),s=0,a=0,c=r[0];for(;c!==void 0;){if(s===c.index){let b;c.type===2?b=new le(n,n.nextSibling,this,t):c.type===1?b=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(b=new oi(n,this,t)),this._$AV.push(b),c=r[++a]}s!==c?.index&&(n=Yt.nextNode(),s++)}return Yt.currentNode=Xt,o}p(t){let i=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}},le=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,r,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Gt(this,t,i),ze(t)?t===W||t==null||t===""?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==J&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):lo(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&ze(this._$AH)?this._$AA.nextSibling.data=t:this.T(Xt.createTextNode(t)),this._$AH=t}$(t){let{values:i,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Me.createElement(po(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(i);else{let n=new ti(o,this),s=n.u(this.options);n.p(i),this.T(s),this._$AH=n}}_$AC(t){let i=ao.get(t.strings);return i===void 0&&ao.set(t.strings,i=new Me(t)),i}k(t){ji(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,r,o=0;for(let n of t)o===i.length?i.push(r=new e(this.O(_e()),this.O(_e()),this,this.options)):r=i[o],r._$AI(n),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){let r=eo(t).nextSibling;eo(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Qt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,r,o,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=W}_$AI(t,i=this,r,o){let n=this.strings,s=!1;if(n===void 0)t=Gt(this,t,i,0),s=!ze(t)||t!==this._$AH&&t!==J,s&&(this._$AH=t);else{let a=t,c,b;for(t=n[0],c=0;c<n.length-1;c++)b=Gt(this,a[r+c],i,c),b===J&&(b=this._$AH[c]),s||=!ze(b)||b!==this._$AH[c],b===W?t=W:t!==W&&(t+=(b??"")+n[c+1]),this._$AH[c]=b}s&&!o&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ei=class extends Qt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}},ii=class extends Qt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}},ri=class extends Qt{constructor(t,i,r,o,n){super(t,i,r,o,n),this.type=5}_$AI(t,i=this){if((t=Gt(this,t,i,0)??W)===J)return;let r=this._$AH,o=t===W&&r!==W||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==W&&(r===W||o);o&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},oi=class{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Gt(this,t)}},mo={M:Ui,P:Dt,A:Wi,C:1,L:fo,R:ti,D:lo,V:Gt,I:le,H:Qt,N:ii,U:ri,B:ei,F:oi},Ys=qi.litHtmlPolyfillSupport;Ys?.(Me,le),(qi.litHtmlVersions??=[]).push("3.3.3");var go=(e,t,i)=>{let r=i?.renderBefore??t,o=r._$litPart$;if(o===void 0){let n=i?.renderBefore??null;r._$litPart$=o=new le(t.insertBefore(_e(),n),n,void 0,i??{})}return o._$AI(e),o};var Yi=globalThis,$t=class extends Rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=go(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}};$t._$litElement$=!0,$t.finalized=!0,Yi.litElementHydrateSupport?.({LitElement:$t});var Xs=Yi.litElementPolyfillSupport;Xs?.({LitElement:$t});(Yi.litElementVersions??=[]).push("4.2.2");var vo=K`
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
`;var Gs=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,bo=e=>{throw TypeError(e)},h=(e,t,i,r)=>{for(var o=r>1?void 0:r?Qs(t,i):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(r?s(t,i,o):s(o))||o);return r&&o&&Gs(t,i,o),o},wo=(e,t,i)=>t.has(e)||bo("Cannot "+i),yo=(e,t,i)=>(wo(e,t,"read from private field"),i?i.call(e):t.get(e)),Co=(e,t,i)=>t.has(e)?bo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),xo=(e,t,i,r)=>(wo(e,t,"write to private field"),r?r.call(e,i):t.set(e,i),i);var nt=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var Zs={attribute:!0,type:String,converter:$e,reflect:!1,hasChanged:Ze},Js=(e=Zs,t,i)=>{let{kind:r,metadata:o}=i,n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),r==="accessor"){let{name:s}=i;return{set(a){let c=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,c,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(r==="setter"){let{name:s}=i;return function(a){let c=this[s];t.call(this,a),this.requestUpdate(s,c,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function v(e){return(t,i)=>typeof i=="object"?Js(e,t,i):((r,o,n)=>{let s=o.hasOwnProperty(n);return o.constructor.createProperty(n,r),s?Object.getOwnPropertyDescriptor(o,n):void 0})(e,t,i)}function Z(e){return v({...e,state:!0,attribute:!1})}function Eo(e){return(t,i)=>{let r=typeof t=="function"?t:t[i];Object.assign(r,e)}}var Zt=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);function G(e,t){return(i,r,o)=>{let n=s=>s.renderRoot?.querySelector(e)??null;if(t){let{get:s,set:a}=typeof r=="object"?i:o??(()=>{let c=Symbol();return{get(){return this[c]},set(b){this[c]=b}}})();return Zt(i,r,{get(){let c=s.call(this);return c===void 0&&(c=n(this),(c!==null||this.hasUpdated)&&a.call(this,c)),c}})}return Zt(i,r,{get(){return n(this)}})}}var ta=K`
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
`,ea=/;\s+$/;function ia(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}function Lo(e){let{property:t,value:i,element:r}=e;if(i){let o=r.getAttribute("style")||"";o&&(o.match(ea)||(o+=";"),o+=" ");let n=`${t}: ${i}`;return o.includes(n)?void 0:`${o}${n};`}return null}var ni,at=class extends $t{constructor(){super(),Co(this,ni,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(t,i)=>{if(this.internals?.states)try{i?this.internals.states.add(t):this.internals.states.delete(t)}catch(r){if(String(r).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw r}},has:t=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(t)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let e=this.constructor;for(let[t,i]of e.elementProperties)i.default==="inherit"&&i.initial!==void 0&&typeof t=="string"&&this.customStates.set(`initial-${t}-${i.initial}`,!0)}static get styles(){let e=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[ta,...e]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))})}attributeChangedCallback(e,t,i){yo(this,ni)||(this.constructor.elementProperties.forEach((r,o)=>{r.reflect&&this[o]!=null&&this.initialReflectedProperties.set(o,this[o])}),xo(this,ni,!0)),super.attributeChangedCallback(e,t,i)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,i)=>{e.has(i)&&this[i]==null&&(this[i]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(t=>{t.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(t){if(this.didSSR&&!this.hasUpdated){let i=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});i.error=t,this.dispatchEvent(i)}throw t}}setStyle(e,t){if(!this.style){let i=Lo({property:ia(e),value:t,element:this});i&&this.setAttribute("style",i);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let i=Lo({property:e,value:t,element:this});i&&this.setAttribute("style",i);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};ni=new WeakMap;h([v()],at.prototype,"dir",2);h([v()],at.prototype,"lang",2);h([v({type:Boolean,reflect:!0,attribute:"did-ssr"})],at.prototype,"didSSR",2);var Ao=function(e,t,i){},si=class{static render(t,i,r){Ao(t,i,r)}};(function(e){function t(w,u,p,l){var L=e(p,u);L.addData(w),L.make(),l=l||0;var d=L.getModuleCount(),m=L.getModuleCount()+2*l;function A(f,y){return f-=l,y-=l,f<0||f>=d||y<0||y>=d?!1:L.isDark(f,y)}return{text:w,level:u,version:p,moduleCount:m,isDark:A}}function i(w,u,p,l,L){p=Math.max(1,p||1),l=Math.min(40,l||40);for(var d=p;d<=l;d+=1)try{return t(w,u,d,L)}catch{}}function r(w,u,p){p.background&&(u.fillStyle=p.background,u.fillRect(p.left,p.top,p.size,p.size))}function o(w,u,p,l,L,d,m,A,f,y){m?w.moveTo(u+d,p):w.moveTo(u,p);function S(z,x,_,$,I,D,V){z?(w.lineTo(x+D,_+V),w.arcTo(x,_,$,I,d)):w.lineTo(x,_)}S(A,l,p,l,L,-d,0),S(f,l,L,u,L,0,-d),S(y,u,L,u,p,d,0),S(m,u,p,l,p,0,d)}function n(w,u,p,l,L,d,m,A,f,y){function S(z,x,_,$){w.moveTo(z+_,x),w.lineTo(z,x),w.lineTo(z,x+$),w.arcTo(z,x,z+_,x,d)}m&&S(u,p,d,d),A&&S(l,p,-d,d),f&&S(l,L,-d,-d),y&&S(u,L,d,-d)}function s(w,u,p,l,L,d,m,A){var f=w.isDark,y=l+d,S=L+d,z=m-1,x=m+1,_=A-1,$=A+1,I=Math.floor(Math.min(.5,Math.max(0,p.radius))*d),D=f(m,A),V=f(z,_),F=f(z,A),Q=f(z,$),P=f(m,$),T=f(x,$),M=f(x,A),C=f(x,_),k=f(m,_);l=Math.round(l),L=Math.round(L),y=Math.round(y),S=Math.round(S),D?o(u,l,L,y,S,I,!F&&!k,!F&&!P,!M&&!P,!M&&!k):n(u,l,L,y,S,I,F&&k&&V,F&&P&&Q,M&&P&&T,M&&k&&C)}function a(w,u,p,l){var L=w.moduleCount,d=p.size/L,m=0,A=0;u.beginPath();let f=7+p.quiet;for(m=0;m<L;m+=1)for(A=0;A<L;A+=1)if((A<f&&m<f||A>=L-f&&m<f||A<f&&m>=L-f)===l){var y=p.left+A*d,S=p.top+m*d,z=d;s(w,u,p,y,S,z,m,A)}c(u,p,l),u.fill()}function c(w,u,p){let l=p&&u.cornerFill||u.fill;if(typeof l=="string"){w.fillStyle=l;return}let L=l.type,d=l.position,m=l.colorStops,A;if(L==="linear-gradient"){let f=d.slice(0,4).map(y=>Math.round(y*u.size));A=w.createLinearGradient.apply(w,f)}else if(L==="radial-gradient"){let f=d.slice(0,6).map(y=>Math.round(y*u.size));A=w.createRadialGradient.apply(w,f)}else throw new Error("Unsupported fill");m.forEach(([f,y])=>{A.addColorStop(f,y)}),w.fillStyle=A}function b(w,u,p){if(w=i(p.text,p.ecLevel,p.minVersion,p.maxVersion,p.quiet),!w)return null;var l=u.getContext("2d");return l&&(r(w,l,p),a(w,l,p,!0),a(w,l,p,!1)),u}function E(w,u){var p=document.createElement("canvas");return p.width=u.size,p.height=u.size,b(w,p,u)}var g={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",cornerFill:null,background:null,text:"no text",radius:.5,quiet:0,image:null,imageEcCover:.5};Ao=function(w,u,p){var l=Object.assign({},g,w);l.minVersion=l.minVersion,l.maxVersion=l.maxVersion,l.ecLevel=l.ecLevel,l.left=l.left,l.top=l.top,l.size=l.size,l.fill=l.fill,l.background=l.background,l.text=l.text,l.radius=l.radius,l.quiet=l.quiet,l.cornerFill=l.cornerFill||l.fill,l.image=l.image,l.imageBackground=l.imageBackground,l.imageEcCover=l.imageEcCover,l.imagePadding=l.imagePadding;var L=i(l.text,l.ecLevel,l.minVersion,l.maxVersion,l.quiet);if(!L)return;p=p||function(){};let d=function(){var m=u;if(u instanceof HTMLCanvasElement){(u.width!==l.size||u.height!==l.size)&&(u.width=l.size,u.height=l.size);let A=u.getContext("2d");A&&A.clearRect(0,0,u.width,u.height),b(L,u,l)}else if(L){let A=E(L,l);A&&(m=A,u.appendChild(m))}return m};if(l.image){let m=new Image;m.onload=function(){if(!L)return;let A=l.imageEcCover??g.imageEcCover,f=L.moduleCount-l.quiet*2,y=l.size/f,S=m.naturalWidth/m.naturalHeight,z=l.size*A;z=Math.min(z,z*S);let x=l.size*A;x=Math.min(x,x/S);let _=f*f-(49*3+25),$={L:.07,M:.15,Q:.25,H:.3}[l.ecLevel]*A*_|0;var I=Math.min(f,Math.sqrt($*S)|0,z),D=I/S|0;D>f&&(D=f,I=D*S|0),D=Math.min(D,x);let V=L.moduleCount/2-I/2|0,F=L.moduleCount/2-D/2|0,Q=L.isDark;L.isDark=function(X,jt){return V<=jt&&jt<V+I&&F<=X&&X<F+D?!1:Q(X,jt)};let P=Math.min(I,D*S)-l.quiet,T=Math.min(D,I/S)-l.quiet,M=V+(I-P)/2-l.quiet,C=F+(D-T)/2-l.quiet,k=M*y,R=C*y,j=P*y,B=T*y;var mt=d();let pt=mt.getContext("2d");pt&&(pt.fillStyle=l.imageBackground||"transparent",pt.fillRect(k-4,R-4,j+8,B+8),pt.drawImage(m,k,R,j,B)),p()},m.onerror=()=>{d(),p()},m.src=l.image}else d(),p()}})(function(){var e=function(){function t(g,w){var u=236,p=17,l=g,L=r[w],d=null,m=0,A=null,f=new Array,y={},S=function(P,T){m=l*4+17,d=function(M){for(var C=new Array(M),k=0;k<M;k+=1){C[k]=new Array(M);for(var R=0;R<M;R+=1)C[k][R]=null}return C}(m),z(0,0),z(m-7,0),z(0,m-7),$(),_(),D(P,T),l>=7&&I(P),A==null&&(A=Q(l,L,f)),V(A,T)},z=function(P,T){if(d!=null){for(var M=-1;M<=7;M+=1)if(!(P+M<=-1||m<=P+M))for(var C=-1;C<=7;C+=1)T+C<=-1||m<=T+C||(0<=M&&M<=6&&(C==0||C==6)||0<=C&&C<=6&&(M==0||M==6)||2<=M&&M<=4&&2<=C&&C<=4?d[P+M][T+C]=!0:d[P+M][T+C]=!1)}},x=function(){for(var P=0,T=0,M=0;M<8;M+=1){S(!0,M);var C=n.getLostPoint(y);(M==0||P>C)&&(P=C,T=M)}return T},_=function(){if(d){for(var P=8;P<m-8;P+=1)d[P][6]==null&&(d[P][6]=P%2==0);for(var T=8;T<m-8;T+=1)d[6][T]==null&&(d[6][T]=T%2==0)}},$=function(){if(d)for(var P=n.getPatternPosition(l),T=0;T<P.length;T+=1)for(var M=0;M<P.length;M+=1){var C=P[T],k=P[M];if(d[C][k]==null)for(var R=-2;R<=2;R+=1)for(var j=-2;j<=2;j+=1)d[C+R][k+j]=R==-2||R==2||j==-2||j==2||R==0&&j==0}},I=function(P){if(d){for(var T=n.getBCHTypeNumber(l),M=0;M<18;M+=1){var C=!P&&(T>>M&1)==1;d[Math.floor(M/3)][M%3+m-8-3]=C}for(var M=0;M<18;M+=1){var C=!P&&(T>>M&1)==1;d[M%3+m-8-3][Math.floor(M/3)]=C}}},D=function(P,T){var M=L<<3|T,C=n.getBCHTypeInfo(M);if(d){for(var k=0;k<15;k+=1){let R=!P&&(C>>k&1)==1;d[k<6?k:k<8?k+1:m-15+k][8]=R,d[8][k<8?m-k-1:k<9?15-k:14-k]=R}d[m-8][8]=!P}},V=function(P,T){for(var M=-1,C=m-1,k=7,R=0,j=n.getMaskFunction(T),B=m-1;B>0;B-=2)for(B==6&&(B-=1);;){for(var mt=0;mt<2;mt+=1)if(d&&d[C][B-mt]==null){var pt=!1;R<P.length&&(pt=(P[R]>>>k&1)==1);var X=j(C,B-mt);X&&(pt=!pt),d[C][B-mt]=pt,k-=1,k==-1&&(R+=1,k=7)}if(C+=M,C<0||m<=C){C-=M,M=-M;break}}},F=function(P,T){for(var M=0,C=0,k=0,R=new Array(T.length),j=new Array(T.length),B=0;B<T.length;B+=1){var mt=T[B].dataCount,pt=T[B].totalCount-mt;C=Math.max(C,mt),k=Math.max(k,pt),R[B]=new Array(mt);for(var X=0;X<R[B].length;X+=1)R[B][X]=255&P.getBuffer()[X+M];M+=mt;var jt=n.getErrorCorrectPolynomial(pt),Ms=a(R[B],jt.getLength()-1),Wr=Ms.mod(jt);j[B]=new Array(jt.getLength()-1);for(var X=0;X<j[B].length;X+=1){var jr=X+Wr.getLength()-j[B].length;j[B][X]=jr>=0?Wr.getAt(jr):0}}for(var Kr=0,X=0;X<T.length;X+=1)Kr+=T[X].totalCount;for(var Bi=new Array(Kr),Ke=0,X=0;X<C;X+=1)for(var B=0;B<T.length;B+=1)X<R[B].length&&(Bi[Ke]=R[B][X],Ke+=1);for(var X=0;X<k;X+=1)for(var B=0;B<T.length;B+=1)X<j[B].length&&(Bi[Ke]=j[B][X],Ke+=1);return Bi},Q=function(P,T,M){for(var C=c.getRSBlocks(P,T),k=b(),R=0;R<M.length;R+=1){var j=M[R];k.put(j.getMode(),4),k.put(j.getLength(),n.getLengthInBits(j.getMode(),P)),j.write(k)}for(var B=0,R=0;R<C.length;R+=1)B+=C[R].dataCount;if(k.getLengthInBits()>B*8)throw new Error("code length overflow. ("+k.getLengthInBits()+">"+B*8+")");for(k.getLengthInBits()+4<=B*8&&k.put(0,4);k.getLengthInBits()%8!=0;)k.putBit(!1);for(;!(k.getLengthInBits()>=B*8||(k.put(u,8),k.getLengthInBits()>=B*8));)k.put(p,8);return F(k,C)};return y.addData=function(P){var T=E(P);f.push(T),A=null},y.isDark=function(P,T){if(!d)throw new Error("_modules is null");if(P<0||m<=P||T<0||m<=T)throw new Error(P+","+T);return d[P][T]},y.getModuleCount=function(){return m},y.make=function(){S(!1,x())},y}t.stringToBytes=function(g){return new TextEncoder().encode(g)};var i={MODE_8BIT_BYTE:4},r={L:1,M:0,Q:3,H:2},o={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},n=function(){var g=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],w=1335,u=7973,p=21522,l={},L=function(d){for(var m=0;d!=0;)m+=1,d>>>=1;return m};return l.getBCHTypeInfo=function(d){for(var m=d<<10;L(m)-L(w)>=0;)m^=w<<L(m)-L(w);return(d<<10|m)^p},l.getBCHTypeNumber=function(d){for(var m=d<<12;L(m)-L(u)>=0;)m^=u<<L(m)-L(u);return d<<12|m},l.getPatternPosition=function(d){return g[d-1]},l.getMaskFunction=function(d){switch(d){case o.PATTERN000:return function(m,A){return(m+A)%2==0};case o.PATTERN001:return function(m,A){return m%2==0};case o.PATTERN010:return function(m,A){return A%3==0};case o.PATTERN011:return function(m,A){return(m+A)%3==0};case o.PATTERN100:return function(m,A){return(Math.floor(m/2)+Math.floor(A/3))%2==0};case o.PATTERN101:return function(m,A){return m*A%2+m*A%3==0};case o.PATTERN110:return function(m,A){return(m*A%2+m*A%3)%2==0};case o.PATTERN111:return function(m,A){return(m*A%3+(m+A)%2)%2==0};default:throw new Error("bad maskPattern:"+d)}},l.getErrorCorrectPolynomial=function(d){for(var m=a([1],0),A=0;A<d;A+=1)m=m.multiply(a([1,s.gexp(A)],0));return m},l.getLengthInBits=function(d,m){if(d!=i.MODE_8BIT_BYTE||m<1||m>40)throw new Error("mode: "+d+"; type: "+m);return m<10?8:16},l.getLostPoint=function(d){for(var m=d.getModuleCount(),A=0,f=0;f<m;f+=1)for(var y=0;y<m;y+=1){for(var S=0,z=d.isDark(f,y),x=-1;x<=1;x+=1)if(!(f+x<0||m<=f+x))for(var _=-1;_<=1;_+=1)y+_<0||m<=y+_||x==0&&_==0||z==d.isDark(f+x,y+_)&&(S+=1);S>5&&(A+=3+S-5)}for(var f=0;f<m-1;f+=1)for(var y=0;y<m-1;y+=1){var $=0;d.isDark(f,y)&&($+=1),d.isDark(f+1,y)&&($+=1),d.isDark(f,y+1)&&($+=1),d.isDark(f+1,y+1)&&($+=1),($==0||$==4)&&(A+=3)}for(var f=0;f<m;f+=1)for(var y=0;y<m-6;y+=1)d.isDark(f,y)&&!d.isDark(f,y+1)&&d.isDark(f,y+2)&&d.isDark(f,y+3)&&d.isDark(f,y+4)&&!d.isDark(f,y+5)&&d.isDark(f,y+6)&&(A+=40);for(var y=0;y<m;y+=1)for(var f=0;f<m-6;f+=1)d.isDark(f,y)&&!d.isDark(f+1,y)&&d.isDark(f+2,y)&&d.isDark(f+3,y)&&d.isDark(f+4,y)&&!d.isDark(f+5,y)&&d.isDark(f+6,y)&&(A+=40);for(var I=0,y=0;y<m;y+=1)for(var f=0;f<m;f+=1)d.isDark(f,y)&&(I+=1);var D=Math.abs(100*I/m/m-50)/5;return A+=D*10,A},l}(),s=function(){for(var g=new Array(256),w=new Array(256),u=0;u<8;u+=1)w[u]=1<<u;for(var u=8;u<256;u+=1)w[u]=w[u-4]^w[u-5]^w[u-6]^w[u-8];for(var u=0;u<255;u+=1)g[w[u]]=u;var p={};return p.glog=function(l){if(l<1)throw new Error("glog("+l+")");return g[l]},p.gexp=function(l){for(;l<0;)l+=255;for(;l>=256;)l-=255;return w[l]},p}();function a(g,w){if(typeof g.length>"u")throw new Error(g.length+"/"+w);var u=function(){for(var l=0;l<g.length&&g[l]==0;)l+=1;for(var L=new Array(g.length-l+w),d=0;d<g.length-l;d+=1)L[d]=g[d+l];return L}(),p={};return p.getAt=function(l){return u[l]},p.getLength=function(){return u.length},p.multiply=function(l){for(var L=new Array(p.getLength()+l.getLength()-1),d=0;d<p.getLength();d+=1)for(var m=0;m<l.getLength();m+=1)L[d+m]^=s.gexp(s.glog(p.getAt(d))+s.glog(l.getAt(m)));return a(L,0)},p.mod=function(l){if(p.getLength()-l.getLength()<0)return p;for(var L=s.glog(p.getAt(0))-s.glog(l.getAt(0)),d=new Array(p.getLength()),m=0;m<p.getLength();m+=1)d[m]=p.getAt(m);for(var m=0;m<l.getLength();m+=1)d[m]^=s.gexp(s.glog(l.getAt(m))+L);return a(d,0).mod(l)},p}var c=function(){var g=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],w=function(l,L){var d={};return d.totalCount=l,d.dataCount=L,d},u={},p=function(l,L){switch(L){case r.L:return g[(l-1)*4+0];case r.M:return g[(l-1)*4+1];case r.Q:return g[(l-1)*4+2];case r.H:return g[(l-1)*4+3];default:return}};return u.getRSBlocks=function(l,L){var d=p(l,L);if(typeof d>"u")throw new Error("bad rs block @ typeNumber:"+l+"/errorCorrectLevel:"+L);for(var m=d.length/3,A=new Array,f=0;f<m;f+=1)for(var y=d[f*3+0],S=d[f*3+1],z=d[f*3+2],x=0;x<y;x+=1)A.push(w(S,z));return A},u}(),b=function(){var g=new Array,w=0,u={};return u.getBuffer=function(){return g},u.getAt=function(p){var l=Math.floor(p/8);return(g[l]>>>7-p%8&1)==1},u.put=function(p,l){for(var L=0;L<l;L+=1)u.putBit((p>>>l-L-1&1)==1)},u.getLengthInBits=function(){return w},u.putBit=function(p){var l=Math.floor(w/8);g.length<=l&&g.push(0),p&&(g[l]|=128>>>w%8),w+=1},u},E=function(g){var w=i.MODE_8BIT_BYTE,u=t.stringToBytes(g),p={};return p.getMode=function(){return w},p.getLength=function(l){return u.length},p.write=function(l){for(var L=0;L<u.length;L+=1)l.put(u[L],8)},p};return t}();return e}());var lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ct=e=>(...t)=>({_$litDirective$:e,values:t}),gt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};var So="important",ra=" !"+So,Ct=ct(class extends gt{constructor(e){if(super(e),e.type!==lt.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{let r=e[i];return r==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(e,[t]){let{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?i.removeProperty(r):i[r]=null);for(let r in t){let o=t[r];if(o!=null){this.ft.add(r);let n=typeof o=="string"&&o.endsWith(ra);r.includes("-")||n?i.setProperty(r,n?o.slice(0,-11):o,n?So:""):i[r]=o}}return J}});var ht=class extends at{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="",this.background="",this.radius=0,this.errorCorrection="H",this.image=null,this.imageBackground=null,this.imageCoverage=null,this.imagePadding=null,this.computedStyle=null}updated(e){super.updated(e),this.generate()}generate(){if(!this.hasUpdated)return;this.canvas.style.maxWidth=`${this.size}px`,this.canvas.style.maxHeight=`${this.size}px`,this.computedStyle||(this.computedStyle=getComputedStyle(this));let e=this.computedStyle,t=this.shadowRoot?.querySelector("span");t&&(this.spanComputedStyle||(this.spanComputedStyle=getComputedStyle(t))),si.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill||e.color,background:this.background||null,size:this.size*2,image:this.image,imageEcCover:this.imageCoverage,imagePadding:this.imagePadding,imageBackground:this.imageBackground||this.background,cornerFill:this.spanComputedStyle?.color},this.canvas)}render(){return U`
      <canvas
        part="base qr-code"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        style=${Ct({maxWidth:`${this.size}px`,maxHeight:`${this.size}px`,minWidth:`${this.size}px`,minHeight:`${this.size}px`})}
        @transitionend=${e=>{e.propertyName==="color"&&this.generate()}}
      >
        <span style="color: var(--corner-color);"></span>
      </canvas>
    `}};ht.css=vo;h([G("canvas")],ht.prototype,"canvas",2);h([v()],ht.prototype,"value",2);h([v()],ht.prototype,"label",2);h([v({type:Number})],ht.prototype,"size",2);h([v()],ht.prototype,"fill",2);h([v()],ht.prototype,"background",2);h([v({type:Number})],ht.prototype,"radius",2);h([v({attribute:"error-correction"})],ht.prototype,"errorCorrection",2);h([v()],ht.prototype,"image",2);h([v({attribute:"image-background"})],ht.prototype,"imageBackground",2);h([v({attribute:"image-coverage",type:Number})],ht.prototype,"imageCoverage",2);h([v({attribute:"image-padding",type:Number})],ht.prototype,"imagePadding",2);ht=h([nt("wa-qr-code")],ht);var $o=K`
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

    /* Inset box-shadow, not a border: Safari seams a clip-path edge that runs along a border. */
    &::part(arrow) {
      box-shadow: inset calc(-1 * var(--wa-tooltip-border-width)) calc(-1 * var(--wa-tooltip-border-width)) 0 0
        var(--wa-tooltip-border-color);
    }
  }
`;var ko=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var _o=class extends Event{constructor(e){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};var zo=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};var Mo=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var To=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var Po=K`
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
`;var Xi=new Set,ce=new Map,It,Gi="ltr",Qi="en",Ro=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Ro){let e=new MutationObserver(Do);Gi=document.documentElement.dir||"ltr",Qi=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Te(...e){e.map(t=>{let i=t.$code.toLowerCase();ce.has(i)?ce.set(i,Object.assign(Object.assign({},ce.get(i)),t)):ce.set(i,t),It||(It=t)}),Do()}function Do(){Ro&&(Gi=document.documentElement.dir||"ltr",Qi=document.documentElement.lang||navigator.language),[...Xi.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var ai=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Xi.add(this.host)}hostDisconnected(){Xi.delete(this.host)}dir(){return`${this.host.dir||Gi}`.toLowerCase()}lang(){let t=`${this.host.lang||Qi}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(t),t}catch{return It?It.$code.toLowerCase():"en"}}getTranslationData(t){var i,r;let o;try{o=new Intl.Locale(t.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let n=o.language.toLowerCase(),s=(r=(i=o.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&r!==void 0?r:"",a=ce.get(`${n}-${s}`),c=ce.get(n);return{locale:o,language:n,region:s,primary:a,secondary:c}}exists(t,i){var r;let{primary:o,secondary:n}=this.getTranslationData((r=i.lang)!==null&&r!==void 0?r:this.lang());return i=Object.assign({includeFallback:!1},i),!!(o&&o[t]||n&&n[t]||i.includeFallback&&It&&It[t])}term(t,...i){let{primary:r,secondary:o}=this.getTranslationData(this.lang()),n;if(r&&r[t])n=r[t];else if(o&&o[t])n=o[t];else if(It&&It[t])n=It[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...i):n}date(t,i){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),i).format(t)}number(t,i){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),i).format(t)}relativeTime(t,i,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,i)}};var Io={$code:"en",$name:"English",$dir:"ltr",am:"AM",autosizeColumn:"Autosize column",captions:"Captions",carousel:"Carousel",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseTime:"Choose time",chooseYear:"Choose year",clearEntry:"Clear entry",clearFilter:"Clear filter",clearSort:"Clear sort",close:"Close",closeCalendar:"Close calendar",closeTimeInput:"Close time picker",collapseRow:"Collapse row",columnMenu:"Column options",columnMovedToPosition:(e,t,i)=>`${e} moved to position ${t} of ${i}`,columns:"Columns",compactPageXOfY:(e,t)=>`${e} of ${t}`,copied:"Copied",copy:"Copy",createOption:e=>`Create "${e}"`,currentlyPlaying:"currently playing",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",dayPeriod:"AM/PM",decrement:"Decrement",deselectAllRows:"Deselect all rows",dropFileHere:"Drop file here or click to browse",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",enterFullscreen:"Enter fullscreen",error:"Error",exitFullscreen:"Exit fullscreen",expandRow:"Expand row",filterByColumn:e=>`Filter by ${e}`,filterFrom:"From",filterMax:"Max",filterMin:"Min",filterTo:"To",firstPage:"First page",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:"Hide column",hidePassword:"Hide password",hour:"Hour",incompleteDate:"Enter a valid date.",increment:"Increment",jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:"Last page",loading:"Loading",minute:"Minute",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextPage:"Next page",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",noData:"No data",noResults:"No matching results",now:"Now",numCharacters:e=>e===1?"1 character":`${e} characters`,numCharactersRemaining:e=>e===1?"1 character remaining":`${e} characters remaining`,numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,numRowsCopied:e=>e===1?"1 row copied":`${e} rows copied`,numRowsSelected:e=>e===1?"1 row selected":`${e} rows selected`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:"Pagination",pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",pinLeft:"Pin left",pinRight:"Pin right",play:"Play",playAnimation:"Play animation",playbackSpeed:"Playback speed",playlist:"Playlist",pm:"PM",previousDecade:"Previous decade",previousMonth:"Previous month",previousPage:"Previous page",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:e=>e===1?"Select a range no longer than 1 day":`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?"Select a range at least 1 day long":`Select a range at least ${e} days long`,readonly:"Read-only",remove:"Remove",resetColumns:"Reset columns",resize:"Resize",resizeColumn:"Resize column",rowsPerPage:"Rows per page",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",search:"Search",second:"Second",seek:"Seek",seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:"Select a color from the screen",selectAllRows:"Select all rows",selected:"Selected",selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:"Select group",selectionCleared:"Selection cleared",selectRow:"Select row",showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,i)=>`${e}\u2013${t} of ${i}`,showPassword:"Show password",slideNum:e=>`Slide ${e}`,sortAscending:"Sort ascending",sortColumn:"Sort column",sortDescending:"Sort descending",startDate:"Start date",time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker.",today:"Today",toggleColorFormat:"Toggle color format",unmute:"Unmute",unpin:"Unpin",unpinColumn:"Unpin column",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out"};Te(Io);var Oo=Io;var _t=class extends ai{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||"en":super.lang()}};Te(Oo);var zt=Math.min,ft=Math.max,Re=Math.round,De=Math.floor,At=e=>({x:e,y:e}),oa={left:"right",right:"left",bottom:"top",top:"bottom"};function ci(e,t,i){return ft(e,zt(t,i))}function Jt(e,t){return typeof e=="function"?e(t):e}function Ot(e){return e.split("-")[0]}function te(e){return e.split("-")[1]}function Zi(e){return e==="x"?"y":"x"}function hi(e){return e==="y"?"height":"width"}function Mt(e){let t=e[0];return t==="t"||t==="b"?"y":"x"}function ui(e){return Zi(Mt(e))}function No(e,t,i){i===void 0&&(i=!1);let r=te(e),o=ui(e),n=hi(o),s=o==="x"?r===(i?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=Pe(s)),[s,Pe(s)]}function Vo(e){let t=Pe(e);return[li(e),t,li(t)]}function li(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}var Fo=["left","right"],Bo=["right","left"],na=["top","bottom"],sa=["bottom","top"];function aa(e,t,i){switch(e){case"top":case"bottom":return i?t?Bo:Fo:t?Fo:Bo;case"left":case"right":return t?na:sa;default:return[]}}function Ho(e,t,i,r){let o=te(e),n=aa(Ot(e),i==="start",r);return o&&(n=n.map(s=>s+"-"+o),t&&(n=n.concat(n.map(li)))),n}function Pe(e){let t=Ot(e);return oa[t]+e.slice(t.length)}function la(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ji(e){return typeof e!="number"?la(e):{top:e,right:e,bottom:e,left:e}}function ee(e){let{x:t,y:i,width:r,height:o}=e;return{width:r,height:o,top:i,left:t,right:t+r,bottom:i+o,x:t,y:i}}function qo(e,t,i){let{reference:r,floating:o}=e,n=Mt(t),s=ui(t),a=hi(s),c=Ot(t),b=n==="y",E=r.x+r.width/2-o.width/2,g=r.y+r.height/2-o.height/2,w=r[a]/2-o[a]/2,u;switch(c){case"top":u={x:E,y:r.y-o.height};break;case"bottom":u={x:E,y:r.y+r.height};break;case"right":u={x:r.x+r.width,y:g};break;case"left":u={x:r.x-o.width,y:g};break;default:u={x:r.x,y:r.y}}switch(te(t)){case"start":u[s]-=w*(i&&b?-1:1);break;case"end":u[s]+=w*(i&&b?-1:1);break}return u}async function Uo(e,t){var i;t===void 0&&(t={});let{x:r,y:o,platform:n,rects:s,elements:a,strategy:c}=e,{boundary:b="clippingAncestors",rootBoundary:E="viewport",elementContext:g="floating",altBoundary:w=!1,padding:u=0}=Jt(t,e),p=Ji(u),L=a[w?g==="floating"?"reference":"floating":g],d=ee(await n.getClippingRect({element:(i=await(n.isElement==null?void 0:n.isElement(L)))==null||i?L:L.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:b,rootBoundary:E,strategy:c})),m=g==="floating"?{x:r,y:o,width:s.floating.width,height:s.floating.height}:s.reference,A=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),f=await(n.isElement==null?void 0:n.isElement(A))?await(n.getScale==null?void 0:n.getScale(A))||{x:1,y:1}:{x:1,y:1},y=ee(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:m,offsetParent:A,strategy:c}):m);return{top:(d.top-y.top+p.top)/f.y,bottom:(y.bottom-d.bottom+p.bottom)/f.y,left:(d.left-y.left+p.left)/f.x,right:(y.right-d.right+p.right)/f.x}}var ca=50,Wo=async(e,t,i)=>{let{placement:r="bottom",strategy:o="absolute",middleware:n=[],platform:s}=i,a=s.detectOverflow?s:{...s,detectOverflow:Uo},c=await(s.isRTL==null?void 0:s.isRTL(t)),b=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:E,y:g}=qo(b,r,c),w=r,u=0,p={};for(let l=0;l<n.length;l++){let L=n[l];if(!L)continue;let{name:d,fn:m}=L,{x:A,y:f,data:y,reset:S}=await m({x:E,y:g,initialPlacement:r,placement:w,strategy:o,middlewareData:p,rects:b,platform:a,elements:{reference:e,floating:t}});E=A??E,g=f??g,p[d]={...p[d],...y},S&&u<ca&&(u++,typeof S=="object"&&(S.placement&&(w=S.placement),S.rects&&(b=S.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):S.rects),{x:E,y:g}=qo(b,w,c)),l=-1)}return{x:E,y:g,placement:w,strategy:o,middlewareData:p}},jo=e=>({name:"arrow",options:e,async fn(t){let{x:i,y:r,placement:o,rects:n,platform:s,elements:a,middlewareData:c}=t,{element:b,padding:E=0}=Jt(e,t)||{};if(b==null)return{};let g=Ji(E),w={x:i,y:r},u=ui(o),p=hi(u),l=await s.getDimensions(b),L=u==="y",d=L?"top":"left",m=L?"bottom":"right",A=L?"clientHeight":"clientWidth",f=n.reference[p]+n.reference[u]-w[u]-n.floating[p],y=w[u]-n.reference[u],S=await(s.getOffsetParent==null?void 0:s.getOffsetParent(b)),z=S?S[A]:0;(!z||!await(s.isElement==null?void 0:s.isElement(S)))&&(z=a.floating[A]||n.floating[p]);let x=f/2-y/2,_=z/2-l[p]/2-1,$=zt(g[d],_),I=zt(g[m],_),D=$,V=z-l[p]-I,F=z/2-l[p]/2+x,Q=ci(D,F,V),P=!c.arrow&&te(o)!=null&&F!==Q&&n.reference[p]/2-(F<D?$:I)-l[p]/2<0,T=P?F<D?F-D:F-V:0;return{[u]:w[u]+T,data:{[u]:Q,centerOffset:F-Q-T,...P&&{alignmentOffset:T}},reset:P}}});var Ko=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,r;let{placement:o,middlewareData:n,rects:s,initialPlacement:a,platform:c,elements:b}=t,{mainAxis:E=!0,crossAxis:g=!0,fallbackPlacements:w,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:l=!0,...L}=Jt(e,t);if((i=n.arrow)!=null&&i.alignmentOffset)return{};let d=Ot(o),m=Mt(a),A=Ot(a)===a,f=await(c.isRTL==null?void 0:c.isRTL(b.floating)),y=w||(A||!l?[Pe(a)]:Vo(a)),S=p!=="none";!w&&S&&y.push(...Ho(a,l,p,f));let z=[a,...y],x=await c.detectOverflow(t,L),_=[],$=((r=n.flip)==null?void 0:r.overflows)||[];if(E&&_.push(x[d]),g){let F=No(o,s,f);_.push(x[F[0]],x[F[1]])}if($=[...$,{placement:o,overflows:_}],!_.every(F=>F<=0)){var I,D;let F=(((I=n.flip)==null?void 0:I.index)||0)+1,Q=z[F];if(Q&&(!(g==="alignment"?m!==Mt(Q):!1)||$.every(M=>Mt(M.placement)===m?M.overflows[0]>0:!0)))return{data:{index:F,overflows:$},reset:{placement:Q}};let P=(D=$.filter(T=>T.overflows[0]<=0).sort((T,M)=>T.overflows[1]-M.overflows[1])[0])==null?void 0:D.placement;if(!P)switch(u){case"bestFit":{var V;let T=(V=$.filter(M=>{if(S){let C=Mt(M.placement);return C===m||C==="y"}return!0}).map(M=>[M.placement,M.overflows.filter(C=>C>0).reduce((C,k)=>C+k,0)]).sort((M,C)=>M[1]-C[1])[0])==null?void 0:V[0];T&&(P=T);break}case"initialPlacement":P=a;break}if(o!==P)return{reset:{placement:P}}}return{}}}};var ha=new Set(["left","top"]);async function ua(e,t){let{placement:i,platform:r,elements:o}=e,n=await(r.isRTL==null?void 0:r.isRTL(o.floating)),s=Ot(i),a=te(i),c=Mt(i)==="y",b=ha.has(s)?-1:1,E=n&&c?-1:1,g=Jt(t,e),{mainAxis:w,crossAxis:u,alignmentAxis:p}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return a&&typeof p=="number"&&(u=a==="end"?p*-1:p),c?{x:u*E,y:w*b}:{x:w*b,y:u*E}}var Yo=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var i,r;let{x:o,y:n,placement:s,middlewareData:a}=t,c=await ua(t,e);return s===((i=a.offset)==null?void 0:i.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+c.x,y:n+c.y,data:{...c,placement:s}}}}},Xo=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:i,y:r,placement:o,platform:n}=t,{mainAxis:s=!0,crossAxis:a=!1,limiter:c={fn:d=>{let{x:m,y:A}=d;return{x:m,y:A}}},...b}=Jt(e,t),E={x:i,y:r},g=await n.detectOverflow(t,b),w=Mt(Ot(o)),u=Zi(w),p=E[u],l=E[w];if(s){let d=u==="y"?"top":"left",m=u==="y"?"bottom":"right",A=p+g[d],f=p-g[m];p=ci(A,p,f)}if(a){let d=w==="y"?"top":"left",m=w==="y"?"bottom":"right",A=l+g[d],f=l-g[m];l=ci(A,l,f)}let L=c.fn({...t,[u]:p,[w]:l});return{...L,data:{x:L.x-i,y:L.y-r,enabled:{[u]:s,[w]:a}}}}}};var Go=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var i,r;let{placement:o,rects:n,platform:s,elements:a}=t,{apply:c=()=>{},...b}=Jt(e,t),E=await s.detectOverflow(t,b),g=Ot(o),w=te(o),u=Mt(o)==="y",{width:p,height:l}=n.floating,L,d;g==="top"||g==="bottom"?(L=g,d=w===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(d=g,L=w==="end"?"top":"bottom");let m=l-E.top-E.bottom,A=p-E.left-E.right,f=zt(l-E[L],m),y=zt(p-E[d],A),S=!t.middlewareData.shift,z=f,x=y;if((i=t.middlewareData.shift)!=null&&i.enabled.x&&(x=A),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(z=m),S&&!w){let $=ft(E.left,0),I=ft(E.right,0),D=ft(E.top,0),V=ft(E.bottom,0);u?x=p-2*($!==0||I!==0?$+I:ft(E.left,E.right)):z=l-2*(D!==0||V!==0?D+V:ft(E.top,E.bottom))}await c({...t,availableWidth:x,availableHeight:z});let _=await s.getDimensions(a.floating);return p!==_.width||l!==_.height?{reset:{rects:!0}}:{}}}};function di(){return typeof window<"u"}function re(e){return Zo(e)?(e.nodeName||"").toLowerCase():"#document"}function vt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function St(e){var t;return(t=(Zo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Zo(e){return di()?e instanceof Node||e instanceof vt(e).Node:!1}function xt(e){return di()?e instanceof Element||e instanceof vt(e).Element:!1}function Tt(e){return di()?e instanceof HTMLElement||e instanceof vt(e).HTMLElement:!1}function Qo(e){return!di()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof vt(e).ShadowRoot}function he(e){let{overflow:t,overflowX:i,overflowY:r,display:o}=Et(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+i)&&o!=="inline"&&o!=="contents"}function Jo(e){return/^(table|td|th)$/.test(re(e))}function Ie(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}var da=/transform|translate|scale|rotate|perspective|filter/,pa=/paint|layout|strict|content/,ie=e=>!!e&&e!=="none",tr;function ue(e){let t=xt(e)?Et(e):e;return ie(t.transform)||ie(t.translate)||ie(t.scale)||ie(t.rotate)||ie(t.perspective)||!pi()&&(ie(t.backdropFilter)||ie(t.filter))||da.test(t.willChange||"")||pa.test(t.contain||"")}function tn(e){let t=Ft(e);for(;Tt(t)&&!oe(t);){if(ue(t))return t;if(Ie(t))return null;t=Ft(t)}return null}function pi(){return tr==null&&(tr=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),tr}function oe(e){return/^(html|body|#document)$/.test(re(e))}function Et(e){return vt(e).getComputedStyle(e)}function Oe(e){return xt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ft(e){if(re(e)==="html")return e;let t=e.assignedSlot||e.parentNode||Qo(e)&&e.host||St(e);return Qo(t)?t.host:t}function en(e){let t=Ft(e);return oe(t)?e.ownerDocument?e.ownerDocument.body:e.body:Tt(t)&&he(t)?t:en(t)}function Bt(e,t,i){var r;t===void 0&&(t=[]),i===void 0&&(i=!0);let o=en(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),s=vt(o);if(n){let a=fi(s);return t.concat(s,s.visualViewport||[],he(o)?o:[],a&&i?Bt(a):[])}else return t.concat(o,Bt(o,[],i))}function fi(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function sn(e){let t=Et(e),i=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=Tt(e),n=o?e.offsetWidth:i,s=o?e.offsetHeight:r,a=Re(i)!==n||Re(r)!==s;return a&&(i=n,r=s),{width:i,height:r,$:a}}function ir(e){return xt(e)?e:e.contextElement}function de(e){let t=ir(e);if(!Tt(t))return At(1);let i=t.getBoundingClientRect(),{width:r,height:o,$:n}=sn(t),s=(n?Re(i.width):i.width)/r,a=(n?Re(i.height):i.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}var fa=At(0);function an(e){let t=vt(e);return!pi()||!t.visualViewport?fa:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ma(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==vt(e)?!1:t}function ne(e,t,i,r){t===void 0&&(t=!1),i===void 0&&(i=!1);let o=e.getBoundingClientRect(),n=ir(e),s=At(1);t&&(r?xt(r)&&(s=de(r)):s=de(e));let a=ma(n,i,r)?an(n):At(0),c=(o.left+a.x)/s.x,b=(o.top+a.y)/s.y,E=o.width/s.x,g=o.height/s.y;if(n){let w=vt(n),u=r&&xt(r)?vt(r):r,p=w,l=fi(p);for(;l&&r&&u!==p;){let L=de(l),d=l.getBoundingClientRect(),m=Et(l),A=d.left+(l.clientLeft+parseFloat(m.paddingLeft))*L.x,f=d.top+(l.clientTop+parseFloat(m.paddingTop))*L.y;c*=L.x,b*=L.y,E*=L.x,g*=L.y,c+=A,b+=f,p=vt(l),l=fi(p)}}return ee({width:E,height:g,x:c,y:b})}function mi(e,t){let i=Oe(e).scrollLeft;return t?t.left+i:ne(St(e)).left+i}function ln(e,t){let i=e.getBoundingClientRect(),r=i.left+t.scrollLeft-mi(e,i),o=i.top+t.scrollTop;return{x:r,y:o}}function ga(e){let{elements:t,rect:i,offsetParent:r,strategy:o}=e,n=o==="fixed",s=St(r),a=t?Ie(t.floating):!1;if(r===s||a&&n)return i;let c={scrollLeft:0,scrollTop:0},b=At(1),E=At(0),g=Tt(r);if((g||!g&&!n)&&((re(r)!=="body"||he(s))&&(c=Oe(r)),g)){let u=ne(r);b=de(r),E.x=u.x+r.clientLeft,E.y=u.y+r.clientTop}let w=s&&!g&&!n?ln(s,c):At(0);return{width:i.width*b.x,height:i.height*b.y,x:i.x*b.x-c.scrollLeft*b.x+E.x+w.x,y:i.y*b.y-c.scrollTop*b.y+E.y+w.y}}function va(e){return Array.from(e.getClientRects())}function ba(e){let t=St(e),i=Oe(e),r=e.ownerDocument.body,o=ft(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),n=ft(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),s=-i.scrollLeft+mi(e),a=-i.scrollTop;return Et(r).direction==="rtl"&&(s+=ft(t.clientWidth,r.clientWidth)-o),{width:o,height:n,x:s,y:a}}var rn=25;function wa(e,t){let i=vt(e),r=St(e),o=i.visualViewport,n=r.clientWidth,s=r.clientHeight,a=0,c=0;if(o){n=o.width,s=o.height;let E=pi();(!E||E&&t==="fixed")&&(a=o.offsetLeft,c=o.offsetTop)}let b=mi(r);if(b<=0){let E=r.ownerDocument,g=E.body,w=getComputedStyle(g),u=E.compatMode==="CSS1Compat"&&parseFloat(w.marginLeft)+parseFloat(w.marginRight)||0,p=Math.abs(r.clientWidth-g.clientWidth-u);p<=rn&&(n-=p)}else b<=rn&&(n+=b);return{width:n,height:s,x:a,y:c}}function ya(e,t){let i=ne(e,!0,t==="fixed"),r=i.top+e.clientTop,o=i.left+e.clientLeft,n=Tt(e)?de(e):At(1),s=e.clientWidth*n.x,a=e.clientHeight*n.y,c=o*n.x,b=r*n.y;return{width:s,height:a,x:c,y:b}}function on(e,t,i){let r;if(t==="viewport")r=wa(e,i);else if(t==="document")r=ba(St(e));else if(xt(t))r=ya(t,i);else{let o=an(e);r={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return ee(r)}function cn(e,t){let i=Ft(e);return i===t||!xt(i)||oe(i)?!1:Et(i).position==="fixed"||cn(i,t)}function Ca(e,t){let i=t.get(e);if(i)return i;let r=Bt(e,[],!1).filter(a=>xt(a)&&re(a)!=="body"),o=null,n=Et(e).position==="fixed",s=n?Ft(e):e;for(;xt(s)&&!oe(s);){let a=Et(s),c=ue(s);!c&&a.position==="fixed"&&(o=null),(n?!c&&!o:!c&&a.position==="static"&&!!o&&(o.position==="absolute"||o.position==="fixed")||he(s)&&!c&&cn(e,s))?r=r.filter(E=>E!==s):o=a,s=Ft(s)}return t.set(e,r),r}function xa(e){let{element:t,boundary:i,rootBoundary:r,strategy:o}=e,s=[...i==="clippingAncestors"?Ie(t)?[]:Ca(t,this._c):[].concat(i),r],a=on(t,s[0],o),c=a.top,b=a.right,E=a.bottom,g=a.left;for(let w=1;w<s.length;w++){let u=on(t,s[w],o);c=ft(u.top,c),b=zt(u.right,b),E=zt(u.bottom,E),g=ft(u.left,g)}return{width:b-g,height:E-c,x:g,y:c}}function Ea(e){let{width:t,height:i}=sn(e);return{width:t,height:i}}function La(e,t,i){let r=Tt(t),o=St(t),n=i==="fixed",s=ne(e,!0,n,t),a={scrollLeft:0,scrollTop:0},c=At(0);function b(){c.x=mi(o)}if(r||!r&&!n)if((re(t)!=="body"||he(o))&&(a=Oe(t)),r){let u=ne(t,!0,n,t);c.x=u.x+t.clientLeft,c.y=u.y+t.clientTop}else o&&b();n&&!r&&o&&b();let E=o&&!r&&!n?ln(o,a):At(0),g=s.left+a.scrollLeft-c.x-E.x,w=s.top+a.scrollTop-c.y-E.y;return{x:g,y:w,width:s.width,height:s.height}}function er(e){return Et(e).position==="static"}function nn(e,t){if(!Tt(e)||Et(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return St(e)===i&&(i=i.ownerDocument.body),i}function hn(e,t){let i=vt(e);if(Ie(e))return i;if(!Tt(e)){let o=Ft(e);for(;o&&!oe(o);){if(xt(o)&&!er(o))return o;o=Ft(o)}return i}let r=nn(e,t);for(;r&&Jo(r)&&er(r);)r=nn(r,t);return r&&oe(r)&&er(r)&&!ue(r)?i:r||tn(e)||i}var Aa=async function(e){let t=this.getOffsetParent||hn,i=this.getDimensions,r=await i(e.floating);return{reference:La(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Sa(e){return Et(e).direction==="rtl"}var Fe={convertOffsetParentRelativeRectToViewportRelativeRect:ga,getDocumentElement:St,getClippingRect:xa,getOffsetParent:hn,getElementRects:Aa,getClientRects:va,getDimensions:Ea,getScale:de,isElement:xt,isRTL:Sa};function un(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function $a(e,t){let i=null,r,o=St(e);function n(){var a;clearTimeout(r),(a=i)==null||a.disconnect(),i=null}function s(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),n();let b=e.getBoundingClientRect(),{left:E,top:g,width:w,height:u}=b;if(a||t(),!w||!u)return;let p=De(g),l=De(o.clientWidth-(E+w)),L=De(o.clientHeight-(g+u)),d=De(E),A={rootMargin:-p+"px "+-l+"px "+-L+"px "+-d+"px",threshold:ft(0,zt(1,c))||1},f=!0;function y(S){let z=S[0].intersectionRatio;if(z!==c){if(!f)return s();z?s(!1,z):r=setTimeout(()=>{s(!1,1e-7)},1e3)}z===1&&!un(b,e.getBoundingClientRect())&&s(),f=!1}try{i=new IntersectionObserver(y,{...A,root:o.ownerDocument})}catch{i=new IntersectionObserver(y,A)}i.observe(e)}return s(!0),n}function dn(e,t,i,r){r===void 0&&(r={});let{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,b=ir(e),E=o||n?[...b?Bt(b):[],...t?Bt(t):[]]:[];E.forEach(d=>{o&&d.addEventListener("scroll",i,{passive:!0}),n&&d.addEventListener("resize",i)});let g=b&&a?$a(b,i):null,w=-1,u=null;s&&(u=new ResizeObserver(d=>{let[m]=d;m&&m.target===b&&u&&t&&(u.unobserve(t),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{var A;(A=u)==null||A.observe(t)})),i()}),b&&!c&&u.observe(b),t&&u.observe(t));let p,l=c?ne(e):null;c&&L();function L(){let d=ne(e);l&&!un(l,d)&&i(),l=d,p=requestAnimationFrame(L)}return i(),()=>{var d;E.forEach(m=>{o&&m.removeEventListener("scroll",i),n&&m.removeEventListener("resize",i)}),g?.(),(d=u)==null||d.disconnect(),u=null,c&&cancelAnimationFrame(p)}}var pn=Yo;var fn=Xo,mn=Ko,rr=Go;var gn=jo;var vn=(e,t,i)=>{let r=new Map,o={platform:Fe,...i},n={...o.platform,_c:r};return Wo(e,t,{...o,platform:n})};function bn(e){return ka(e)}function or(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function ka(e){for(let t=e;t;t=or(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=or(e);t;t=or(t)){if(!(t instanceof Element))continue;let i=getComputedStyle(t);if(i.display!=="contents"&&(i.position!=="static"||ue(i)||t.tagName==="BODY"))return t}return null}var it=ct(class extends gt{constructor(e){if(super(e),e.type!==lt.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}let i=e.element.classList;for(let r of this.st)r in t||(i.remove(r),this.st.delete(r));for(let r in t){let o=!!t[r];o===this.st.has(r)||this.nt?.has(r)||(o?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return J}});function wn(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var _a=!!globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),Y=class extends at{constructor(){super(...arguments),this.localize=new _t(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom"),r=0,o=0,n=0,s=0,a=0,c=0,b=0,E=0;i?e.top<t.top?(r=e.left,o=e.bottom,n=e.right,s=e.bottom,a=t.left,c=t.top,b=t.right,E=t.top):(r=t.left,o=t.bottom,n=t.right,s=t.bottom,a=e.left,c=e.top,b=e.right,E=e.top):e.left<t.left?(r=e.right,o=e.top,n=t.left,s=t.top,a=e.right,c=e.bottom,b=t.left,E=t.bottom):(r=t.right,o=t.top,n=e.left,s=e.top,a=t.right,c=t.bottom,b=e.left,E=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${b}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${E}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=_a,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||wn(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=dn(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[pn({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(rr({apply:({rects:r})=>{let o=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${r.reference.width}px`:"",this.popup.style.height=n?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let t;this.SUPPORTS_POPOVER&&!wn(this.anchor)&&this.boundary==="scroll"&&(t=Bt(this.anchorEl).filter(r=>r instanceof Element)),this.flip&&e.push(mn({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(fn({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(rr({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(gn({element:this.arrowEl,padding:this.arrowPadding}));let i=this.SUPPORTS_POPOVER?r=>Fe.getOffsetParent(r,bn):Fe.getOffsetParent;vn(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?"absolute":"fixed",platform:{...Fe,getOffsetParent:i}}).then(({x:r,y:o,middlewareData:n,placement:s})=>{let a=this.localize.dir()==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${r}px`,top:`${o}px`}),this.arrow){let b=n.arrow.x,E=n.arrow.y,g="",w="",u="",p="";if(this.arrowPlacement==="start"){let l=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";g=typeof E=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",w=a?l:"",p=a?"":l}else if(this.arrowPlacement==="end"){let l=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";w=a?"":l,p=a?l:"",u=typeof E=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof b=="number"?"calc(50% - var(--arrow-size-diagonal))":"",g=typeof E=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof b=="number"?`${b}px`:"",g=typeof E=="number"?`${E}px`:"");Object.assign(this.arrowEl.style,{top:g,right:w,bottom:u,left:p,[c]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new To)}render(){return U`
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
    `}};Y.css=Po;h([G(".popup")],Y.prototype,"popup",2);h([G(".arrow")],Y.prototype,"arrowEl",2);h([v({attribute:!1,type:Boolean})],Y.prototype,"SUPPORTS_POPOVER",2);h([v()],Y.prototype,"anchor",2);h([v({type:Boolean,reflect:!0})],Y.prototype,"active",2);h([v({reflect:!0})],Y.prototype,"placement",2);h([v()],Y.prototype,"boundary",2);h([v({type:Number})],Y.prototype,"distance",2);h([v({type:Number})],Y.prototype,"skidding",2);h([v({type:Boolean})],Y.prototype,"arrow",2);h([v({attribute:"arrow-placement"})],Y.prototype,"arrowPlacement",2);h([v({attribute:"arrow-padding",type:Number})],Y.prototype,"arrowPadding",2);h([v({type:Boolean})],Y.prototype,"flip",2);h([v({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],Y.prototype,"flipFallbackPlacements",2);h([v({attribute:"flip-fallback-strategy"})],Y.prototype,"flipFallbackStrategy",2);h([v({type:Object})],Y.prototype,"flipBoundary",2);h([v({attribute:"flip-padding",type:Number})],Y.prototype,"flipPadding",2);h([v({type:Boolean})],Y.prototype,"shift",2);h([v({type:Object})],Y.prototype,"shiftBoundary",2);h([v({attribute:"shift-padding",type:Number})],Y.prototype,"shiftPadding",2);h([v({attribute:"auto-size"})],Y.prototype,"autoSize",2);h([v()],Y.prototype,"sync",2);h([v({type:Object})],Y.prototype,"autoSizeBoundary",2);h([v({attribute:"auto-size-padding",type:Number})],Y.prototype,"autoSizePadding",2);h([v({attribute:"hover-bridge",type:Boolean})],Y.prototype,"hoverBridge",2);Y=h([nt("wa-popup")],Y);var se=[];function gi(e){pe(e),se.push(e)}function pe(e){for(let t=se.length-1;t>=0;t--)if(se[t]===e){se.splice(t,1);break}}function Be(e){return se.length>0&&se[se.length-1]===e}var yn="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var Cn=(e=21)=>{let t="",i=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=yn[i[e]&63];return t};function wt(e,t,i){let r=o=>Object.is(o,-0)?0:o;return e<t?r(t):e>i?r(i):r(e)}function xn(e=""){return`${e}${Cn()}`}function fe(e,t){return new Promise(i=>{function r(o){o.target===e&&(e.removeEventListener(t,r),i())}e.addEventListener(t,r)})}function me(e,t){return new Promise(i=>{let r=new AbortController,{signal:o}=r;if(e.classList.contains(t))return;e.classList.add(t);let n=!1,s=()=>{n||(n=!0,e.classList.remove(t),i(),r.abort())};e.addEventListener("animationend",s,{once:!0,signal:o}),e.addEventListener("animationcancel",s,{once:!0,signal:o}),requestAnimationFrame(()=>{!n&&e.getAnimations().length===0&&s()})})}function et(e,t){let i={waitUntilFirstUpdate:!1,...t};return(r,o)=>{let{update:n}=r,s=Array.isArray(e)?e:[e];r.update=function(a){s.forEach(c=>{let b=c;if(a.has(b)){let E=a.get(b),g=this[b];E!==g&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[o](E,g)}}),n.call(this,a)}}}var tt=class extends at{constructor(){super(...arguments),this.dismissedByPress=!1,this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.dismissedByPress=!1,this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{if(this.hasTrigger("click")){this.open?this.hide():this.show();return}this.hasTrigger("manual")||this.lightDismiss()},this.handleFocus=()=>{this.dismissedByPress||this.hasTrigger("focus")&&this.show()},this.handleMouseDown=()=>{this.hasTrigger("click")||this.hasTrigger("manual")||this.lightDismiss()},this.handleDocumentKeyDown=e=>{this.hasTrigger("manual")||e.key==="Escape"&&this.open&&Be(this)&&(e.preventDefault(),e.stopPropagation(),this.hide())},this.handleDocumentClick=e=>{this.hasTrigger("manual")||this.anchor&&e.composedPath().includes(this.anchor)||this.hide()},this.handleMouseOver=()=>{this.dismissedByPress||this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=e=>{let t=e.relatedTarget,i=!!(t&&this.anchor?.contains(t)),r=!!(t&&this.contains(t));i||r||(this.dismissedByPress=!1,this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)))}}connectedCallback(){super.connectedCallback(),typeof document<"u"&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.dismissedByPress=!1,this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=xn("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),pe(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(e){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),super.firstUpdated(e)}lightDismiss(){clearTimeout(this.hoverTimeout),this.dismissedByPress=!0,this.hide()}hasTrigger(e){return this.trigger.split(" ").includes(e)}addToAriaLabelledBy(e,t){let r=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);r.includes(t)||(r.push(t),e.setAttribute("aria-labelledby",r.join(" ")))}removeFromAriaLabelledBy(e,t){let o=(e.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(n=>n!==t);o.length>0?e.setAttribute("aria-labelledby",o.join(" ")):e.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;let e=new ko;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.hasTrigger("manual")||(document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),gi(this)),this.body.hidden=!1,this.popup.active=!0,await me(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new zo)}else{let e=new _o;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),pe(this),await me(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Mo)}}handleForChange(){let e=this.getRootNode?.();if(!e)return;let t=this.for?e.getElementById?.(this.for):null,i=this.anchor;if(t===i)return;this.dismissedByPress=!1;let{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener("blur",this.handleBlur,{capture:!0,signal:r}),t.addEventListener("focus",this.handleFocus,{capture:!0,signal:r}),t.addEventListener("click",this.handleClick,{signal:r}),t.addEventListener("mousedown",this.handleMouseDown,{signal:r}),t.addEventListener("mouseover",this.handleMouseOver,{signal:r}),t.addEventListener("mouseout",this.handleMouseOut,{signal:r})),i&&(this.removeFromAriaLabelledBy(i,this.id),i.removeEventListener("blur",this.handleBlur,{capture:!0}),i.removeEventListener("focus",this.handleFocus,{capture:!0}),i.removeEventListener("click",this.handleClick),i.removeEventListener("mousedown",this.handleMouseDown),i.removeEventListener("mouseover",this.handleMouseOver),i.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,fe(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,fe(this,"wa-after-hide")}render(){return U`
      <wa-popup
        part="base tooltip"
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
    `}};tt.css=$o;tt.dependencies={"wa-popup":Y};h([G("slot:not([name])")],tt.prototype,"defaultSlot",2);h([G(".body")],tt.prototype,"body",2);h([G("wa-popup")],tt.prototype,"popup",2);h([v()],tt.prototype,"placement",2);h([v({type:Boolean,reflect:!0})],tt.prototype,"disabled",2);h([v({type:Number})],tt.prototype,"distance",2);h([v({type:Boolean,reflect:!0})],tt.prototype,"open",2);h([v({type:Number})],tt.prototype,"skidding",2);h([v({attribute:"show-delay",type:Number})],tt.prototype,"showDelay",2);h([v({attribute:"hide-delay",type:Number})],tt.prototype,"hideDelay",2);h([v()],tt.prototype,"trigger",2);h([v({attribute:"without-arrow",type:Boolean,reflect:!0})],tt.prototype,"withoutArrow",2);h([v()],tt.prototype,"for",2);h([Z()],tt.prototype,"anchor",2);h([et("open",{waitUntilFirstUpdate:!0})],tt.prototype,"handleOpenChange",1);h([et("for")],tt.prototype,"handleForChange",1);h([et(["distance","placement","skidding"])],tt.prototype,"handleOptionsChange",1);h([et("disabled")],tt.prototype,"handleDisabledChange",1);tt=h([nt("wa-tooltip")],tt);function vi(e,t){function i(o){let n=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,a=n.left+s.pageXOffset,c=n.top+s.pageYOffset,b=o.pageX-a,E=o.pageY-c;t?.onMove&&t.onMove(b,E)}function r(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",r),t?.onStop&&t.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",r),t?.initialEvent instanceof PointerEvent&&i(t.initialEvent)}var Ou=typeof window<"u"&&"ontouchstart"in window;var En=K`
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
`;var Ln=(e={})=>{let{validationElement:t,validationProperty:i}=e;t||typeof document<"u"&&"createElement"in document&&(t=Object.assign(document.createElement("input"),{required:!0})),i||(i="value");let r={observedAttributes:["required"],message:t?.validationMessage,checkValidity(o){let n={message:"",isValid:!0,invalidKeys:[]};return(o.required??o.hasAttribute("required"))&&!o[i]&&(n.message=typeof r.message=="function"?r.message(o):r.message||"",n.isValid=!1,n.invalidKeys.push("valueMissing")),n}};return r};var bi=K`
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

    &:not(.has-slotted, .has-hint, .has-count) {
      display: none;
    }
  }
`;var An=K`
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
    grid-template-columns: repeat(auto-fill, minmax(min(1.5em, 100%), 1fr));
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
`;var ge=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var za=()=>({observedAttributes:["custom-error"],checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=["customError"]),t}}),ut=class extends at{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new ge))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},"addEventListener"in this&&this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[za()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let i of t.observedAttributes)e.add(i);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(!!1&&e.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),e.has("value")||e.has("disabled")||e.has("defaultValue")){let t=this.value;this.updateFormValue(t)}e.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!!1&&!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let i of e)t.append(this.name,i);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute("form",e):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],i=e[1],r=e[2];r||(r=this.validationTarget),this.internals.setValidity(t,i,r||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,i=this.hasInteracted;this.customStates.set("required",e),this.customStates.set("optional",!e),this.customStates.set("invalid",!t),this.customStates.set("valid",t),this.customStates.set("user-invalid",!t&&i),this.customStates.set("user-valid",t&&i)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t==="restore"&&this.resetValidity(),this.updateValidity()}):(this.value=e,t==="restore"&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,i]=e;this.internals.setFormValue(t,i)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},i=this.validationTarget||this.input||void 0,r="";for(let o of e){let{isValid:n,message:s,invalidKeys:a}=o.checkValidity(this);n||(r||(r=s),a?.length>=0&&a.forEach(c=>t[c]=!0))}r||(r=this.validationMessage),this.setValidity(t,r,i)}};ut.formAssociated=!0;h([v({reflect:!0})],ut.prototype,"name",2);h([v({type:Boolean})],ut.prototype,"disabled",2);h([v({state:!0,attribute:!1})],ut.prototype,"valueHasChanged",2);h([v({state:!0,attribute:!1})],ut.prototype,"hasInteracted",2);h([v({attribute:"custom-error",reflect:!0})],ut.prototype,"customError",2);h([v({attribute:!1,state:!0,type:Object})],ut.prototype,"validity",1);var Sn={small:"s",medium:"m",large:"l"},$n=new Set;function ve(e,t){t in Sn&&!$n.has(`${e}:${t}`)&&($n.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${Sn[t]}" instead. The long-form value will be removed in the next major version.`))}var be=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=i=>{let r=i.target;(this.slotNames.includes("[default]")&&!r.name||r.name&&this.slotNames.includes(r.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&"addEventListener"in e&&e.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&"removeEventListener"in e&&e.removeEventListener("slotchange",this.handleSlotChange)}};var we=K`
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
`;function ot(e,t){Ma(e)&&(e="100%");let i=Ta(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),i&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function Ne(e){return Math.min(1,Math.max(0,e))}function Ma(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function Ta(e){return typeof e=="string"&&e.indexOf("%")!==-1}function wi(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Ve(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Vt(e){return e.length===1?"0"+e:String(e)}function kn(e,t,i){return{r:ot(e,255)*255,g:ot(t,255)*255,b:ot(i,255)*255}}function sr(e,t,i){e=ot(e,255),t=ot(t,255),i=ot(i,255);let r=Math.max(e,t,i),o=Math.min(e,t,i),n=0,s=0,a=(r+o)/2;if(r===o)s=0,n=0;else{let c=r-o;switch(s=a>.5?c/(2-r-o):c/(r+o),r){case e:n=(t-i)/c+(t<i?6:0);break;case t:n=(i-e)/c+2;break;case i:n=(e-t)/c+4;break;default:break}n/=6}return{h:n,s,l:a}}function nr(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*(6*i):i<1/2?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function _n(e,t,i){let r,o,n;if(e=ot(e,360),t=ot(t,100),i=ot(i,100),t===0)o=i,n=i,r=i;else{let s=i<.5?i*(1+t):i+t-i*t,a=2*i-s;r=nr(a,s,e+1/3),o=nr(a,s,e),n=nr(a,s,e-1/3)}return{r:r*255,g:o*255,b:n*255}}function ar(e,t,i){e=ot(e,255),t=ot(t,255),i=ot(i,255);let r=Math.max(e,t,i),o=Math.min(e,t,i),n=0,s=r,a=r-o,c=r===0?0:a/r;if(r===o)n=0;else{switch(r){case e:n=(t-i)/a+(t<i?6:0);break;case t:n=(i-e)/a+2;break;case i:n=(e-t)/a+4;break;default:break}n/=6}return{h:n,s:c,v:s}}function zn(e,t,i){e=ot(e,360)*6,t=ot(t,100),i=ot(i,100);let r=Math.floor(e),o=e-r,n=i*(1-t),s=i*(1-o*t),a=i*(1-(1-o)*t),c=r%6,b=[i,s,n,n,a,i][c],E=[a,i,i,s,n,n][c],g=[n,n,a,i,i,s][c];return{r:b*255,g:E*255,b:g*255}}function lr(e,t,i,r){let o=[Vt(Math.round(e).toString(16)),Vt(Math.round(t).toString(16)),Vt(Math.round(i).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Mn(e,t,i,r,o){let n=[Vt(Math.round(e).toString(16)),Vt(Math.round(t).toString(16)),Vt(Math.round(i).toString(16)),Vt(Pa(r))];return o&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))&&n[3].startsWith(n[3].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function Tn(e,t,i,r){let o=e/100,n=t/100,s=i/100,a=r/100,c=255*(1-o)*(1-a),b=255*(1-n)*(1-a),E=255*(1-s)*(1-a);return{r:c,g:b,b:E}}function cr(e,t,i){let r=1-e/255,o=1-t/255,n=1-i/255,s=Math.min(r,o,n);return s===1?(r=0,o=0,n=0):(r=(r-s)/(1-s)*100,o=(o-s)/(1-s)*100,n=(n-s)/(1-s)*100),s*=100,{c:Math.round(r),m:Math.round(o),y:Math.round(n),k:Math.round(s)}}function Pa(e){return Math.round(parseFloat(e)*255).toString(16)}function hr(e){return bt(e)/255}function bt(e){return parseInt(e,16)}function Pn(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var He={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Rn(e){let t={r:0,g:0,b:0},i=1,r=null,o=null,n=null,s=!1,a=!1;return typeof e=="string"&&(e=Ia(e)),typeof e=="object"&&(yt(e.r)&&yt(e.g)&&yt(e.b)?(t=kn(e.r,e.g,e.b),s=!0,a=String(e.r).substr(-1)==="%"?"prgb":"rgb"):yt(e.h)&&yt(e.s)&&yt(e.v)?(r=Ve(e.s),o=Ve(e.v),t=zn(e.h,r,o),s=!0,a="hsv"):yt(e.h)&&yt(e.s)&&yt(e.l)?(r=Ve(e.s),n=Ve(e.l),t=_n(e.h,r,n),s=!0,a="hsl"):yt(e.c)&&yt(e.m)&&yt(e.y)&&yt(e.k)&&(t=Tn(e.c,e.m,e.y,e.k),s=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(e,"a")&&(i=e.a)),i=wi(i),{ok:s,format:e.format||a,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:i}}var Ra="[-\\+]?\\d+%?",Da="[-\\+]?\\d*\\.\\d+%?",Ht="(?:"+Da+")|(?:"+Ra+")",ur="[\\s|\\(]+("+Ht+")[,|\\s]+("+Ht+")[,|\\s]+("+Ht+")\\s*\\)?",yi="[\\s|\\(]+("+Ht+")[,|\\s]+("+Ht+")[,|\\s]+("+Ht+")[,|\\s]+("+Ht+")\\s*\\)?",Lt={CSS_UNIT:new RegExp(Ht),rgb:new RegExp("rgb"+ur),rgba:new RegExp("rgba"+yi),hsl:new RegExp("hsl"+ur),hsla:new RegExp("hsla"+yi),hsv:new RegExp("hsv"+ur),hsva:new RegExp("hsva"+yi),cmyk:new RegExp("cmyk"+yi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Ia(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(He[e])e=He[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let i=Lt.rgb.exec(e);return i?{r:i[1],g:i[2],b:i[3]}:(i=Lt.rgba.exec(e),i?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=Lt.hsl.exec(e),i?{h:i[1],s:i[2],l:i[3]}:(i=Lt.hsla.exec(e),i?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=Lt.hsv.exec(e),i?{h:i[1],s:i[2],v:i[3]}:(i=Lt.hsva.exec(e),i?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=Lt.cmyk.exec(e),i?{c:i[1],m:i[2],y:i[3],k:i[4]}:(i=Lt.hex8.exec(e),i?{r:bt(i[1]),g:bt(i[2]),b:bt(i[3]),a:hr(i[4]),format:t?"name":"hex8"}:(i=Lt.hex6.exec(e),i?{r:bt(i[1]),g:bt(i[2]),b:bt(i[3]),format:t?"name":"hex"}:(i=Lt.hex4.exec(e),i?{r:bt(i[1]+i[1]),g:bt(i[2]+i[2]),b:bt(i[3]+i[3]),a:hr(i[4]+i[4]),format:t?"name":"hex8"}:(i=Lt.hex3.exec(e),i?{r:bt(i[1]+i[1]),g:bt(i[2]+i[2]),b:bt(i[3]+i[3]),format:t?"name":"hex"}:!1))))))))))}function yt(e){return typeof e=="number"?!Number.isNaN(e):Lt.CSS_UNIT.test(e)}var qe=class e{constructor(t="",i={}){if(t instanceof e)return t;typeof t=="number"&&(t=Pn(t)),this.originalInput=t;let r=Rn(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=i.format??r.format,this.gradientType=i.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){let t=this.toRgb(),i,r,o,n=t.r/255,s=t.g/255,a=t.b/255;return n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),s<=.03928?r=s/12.92:r=Math.pow((s+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),.2126*i+.7152*r+.0722*o}getAlpha(){return this.a}setAlpha(t){return this.a=wi(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:t}=this.toHsl();return t===0}toHsv(){let t=ar(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){let t=ar(this.r,this.g,this.b),i=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?`hsv(${i}, ${r}%, ${o}%)`:`hsva(${i}, ${r}%, ${o}%, ${this.roundA})`}toHsl(){let t=sr(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){let t=sr(this.r,this.g,this.b),i=Math.round(t.h*360),r=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?`hsl(${i}, ${r}%, ${o}%)`:`hsla(${i}, ${r}%, ${o}%, ${this.roundA})`}toHex(t=!1){return lr(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Mn(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let t=Math.round(this.r),i=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${i}, ${r})`:`rgba(${t}, ${i}, ${r}, ${this.roundA})`}toPercentageRgb(){let t=i=>`${Math.round(ot(i,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){let t=i=>Math.round(ot(i,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...cr(this.r,this.g,this.b)}}toCmykString(){let{c:t,m:i,y:r,k:o}=cr(this.r,this.g,this.b);return`cmyk(${t}, ${i}, ${r}, ${o})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let t="#"+lr(this.r,this.g,this.b,!1);for(let[i,r]of Object.entries(He))if(t===r)return i;return!1}toString(t){let i=!!t;t=t??this.format;let r=!1,o=this.a<1&&this.a>=0;return!i&&o&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),t==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new e(this.toString())}lighten(t=10){let i=this.toHsl();return i.l+=t/100,i.l=Ne(i.l),new e(i)}brighten(t=10){let i=this.toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(t/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(t/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(t/100)))),new e(i)}darken(t=10){let i=this.toHsl();return i.l-=t/100,i.l=Ne(i.l),new e(i)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){let i=this.toHsl();return i.s-=t/100,i.s=Ne(i.s),new e(i)}saturate(t=10){let i=this.toHsl();return i.s+=t/100,i.s=Ne(i.s),new e(i)}greyscale(){return this.desaturate(100)}spin(t){let i=this.toHsl(),r=(i.h+t)%360;return i.h=r<0?360+r:r,new e(i)}mix(t,i=50){let r=this.toRgb(),o=new e(t).toRgb(),n=i/100,s={r:(o.r-r.r)*n+r.r,g:(o.g-r.g)*n+r.g,b:(o.b-r.b)*n+r.b,a:(o.a-r.a)*n+r.a};return new e(s)}analogous(t=6,i=30){let r=this.toHsl(),o=360/i,n=[this];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,n.push(new e(r));return n}complement(){let t=this.toHsl();return t.h=(t.h+180)%360,new e(t)}monochromatic(t=6){let i=this.toHsv(),{h:r}=i,{s:o}=i,{v:n}=i,s=[],a=1/t;for(;t--;)s.push(new e({h:r,s:o,v:n})),n=(n+a)%1;return s}splitcomplement(){let t=this.toHsl(),{h:i}=t;return[this,new e({h:(i+72)%360,s:t.s,l:t.l}),new e({h:(i+216)%360,s:t.s,l:t.l})]}onBackground(t){let i=this.toRgb(),r=new e(t).toRgb(),o=i.a+r.a*(1-i.a);return new e({r:(i.r*i.a+r.r*r.a*(1-i.a))/o,g:(i.g*i.a+r.g*r.a*(1-i.a))/o,b:(i.b*i.a+r.b*r.a*(1-i.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){let i=this.toHsl(),{h:r}=i,o=[this],n=360/t;for(let s=1;s<t;s++)o.push(new e({h:(r+s*n)%360,s:i.s,l:i.l}));return o}equals(t){let i=new e(t);return this.format==="cmyk"||i.format==="cmyk"?this.toCmykString()===i.toCmykString():this.toRgbString()===i.toRgbString()}};var H=e=>e??W;var O=class extends ut{constructor(){super(),this.hasSlotController=new be(this,"hint","label"),this.isSafeValue=!1,this.localize=new _t(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.inputValue="",this.hue=0,this.isEmpty=!0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="m",this.placement="bottom-start",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&Be(this)&&(t.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open&&Be(this)){t.stopPropagation(),this.focus(),this.hide();return}t.key==="Tab"&&setTimeout(()=>{let i=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||i?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=t=>{let r=t.composedPath().some(o=>o instanceof Element&&(o.closest(".color-picker")||o===this.trigger));this&&!r&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.opacity=this.hasAttribute("opacity"),this.uppercase=this.hasAttribute("uppercase");let e=this.getAttribute("format");(e==="rgb"||e==="hsl"||e==="hsv")&&(this.format=e),this.handleValueChange("",this.value||"")}static get validators(){let e=[Ln()];return[...super.validators,...e]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleSizeChange(){ve(this.localName,this.size)}updateFormValue(e){if(e==null){this.setValue("",null);return}super.updateFormValue(e)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){let e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(e){let t=this.shadowRoot.querySelector(".slider.alpha"),i=t.querySelector(".slider-handle"),{width:r}=t.getBoundingClientRect(),o=this.value,n=this.value;i.focus(),e.preventDefault(),vi(t,{onMove:s=>{this.alpha=wt(s/r*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleHueDrag(e){let t=this.shadowRoot.querySelector(".slider.hue"),i=t.querySelector(".slider-handle"),{width:r}=t.getBoundingClientRect(),o=this.value,n=this.value;i.focus(),e.preventDefault(),vi(t,{onMove:s=>{this.hue=wt(s/r*360,0,360),this.syncValues(),this.value!==n&&(n=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleGridDrag(e){let t=this.shadowRoot.querySelector(".grid"),i=t.querySelector(".grid-handle"),{width:r,height:o}=t.getBoundingClientRect(),n=this.value,s=this.value;i.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,vi(t,{onMove:(a,c)=>{this.saturation=wt(a/r*100,0,100),this.brightness=wt(100-c/o*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==n&&(n=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleAlphaKeyDown(e){let t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=wt(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=wt(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(e){let t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=wt(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=wt(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(e){let t=e.shiftKey?10:1,i=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=wt(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=wt(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=wt(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=wt(this.brightness-t,0,100),this.syncValues()),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(e){let t=e.target,i=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value||""):this.value="",this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(e){this.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){let t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(e){e.preventDefault()}parseColor(e){if(!e||e.trim()==="")return null;let t=new qe(e);if(!t.isValid)return null;let i=t.toHsl(),r=t.toRgb(),o=t.toHsv();if(!r||r.r==null||r.g==null||r.b==null)return null;let n={h:i.h||0,s:(i.s||0)*100,l:(i.l||0)*100,a:i.a||0},s=t.toHexString(),a=t.toHex8String(),c={h:o.h||0,s:(o.s||0)*100,v:(o.v||0)*100,a:o.a||0};return{hsl:{h:n.h,s:n.s,l:n.l,string:this.setLetterCase(`hsl(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%)`)},hsla:{h:n.h,s:n.s,l:n.l,a:n.a,string:this.setLetterCase(`hsla(${Math.round(n.h)}, ${Math.round(n.s)}%, ${Math.round(n.l)}%, ${n.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a||0,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${(r.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(a)}}setColor(e){let t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(t=>{let i=this.value;this.setColor(t.sRGBHex),this.value!==i&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(e){let t=this.value;this.disabled||(this.setColor(e),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(e,t,i,r=100){let o=new qe(`hsva(${e}, ${t}%, ${i}%, ${r/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(e){(e.has("value")||e.has("defaultValue"))&&this.handleValueChange(e.get("value")||"",this.value||""),super.willUpdate(e)}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let i=this.parseColor(t);i!==null?(this.inputValue=this.value||"",this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=this.opacity?i.hsva.a*100:100,this.syncValues()):this.inputValue=e??""}this.requestUpdate()}focus(e){this.trigger.focus(e)}blur(){let e=this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),this.popup?.active&&this.hide()}getFormattedValue(e="hex"){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new ge),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(e){super.firstUpdated(e),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}updateAccessibleTrigger(){let e=this.trigger;e&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,fe(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,fe(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),gi(this)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),pe(this)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await me(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await me(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){let e=this.isEmpty,t=this.hasSlotController.test("label","withLabel"),i=this.hasSlotController.test("hint","withHint"),r=this.label?!0:!!t,o=this.hint?!0:!!i,n=this.saturation,s=100-this.brightness,a=Array.isArray(this.swatches)?this.swatches.map(b=>typeof b=="string"?{color:b,label:b}:b):this.swatches.split(";").filter(b=>b.trim()!=="").map(b=>({color:b.trim(),label:b.trim()})),c=U`
      <div
        part="base color-picker"
        class=${it({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${Ct({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${it({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${Ct({top:`${s}%`,left:`${n}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${H(this.disabled?void 0:"0")}
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
                style=${Ct({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${H(this.disabled?void 0:"0")}
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
                      style=${Ct({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${Ct({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${H(this.disabled?void 0:"0")}
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
            style=${Ct({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            .value=${e?"":this.inputValue}
            value=${e?"":this.inputValue}
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
                      tabindex=${H(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${b.label}
                      @click=${()=>this.selectSwatch(b.color)}
                      @keydown=${g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),this.selectSwatch(b.color))}}
                    >
                      <div class="swatch-color" style=${Ct({backgroundColor:E.hexa})}></div>
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
          class=${it({trigger:!0,"trigger-empty":e,"transparent-bg":!0,"form-control-input":!0})}
          style=${Ct({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
          class=${it({"has-slotted":o})}
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
        ${c}
      </wa-popup>
    `}};O.css=[En,we,bi,An];O.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0};h([G('[part~="base"]')],O.prototype,"base",2);h([G('[part~="input"]')],O.prototype,"input",2);h([G('[part~="form-control-label"]')],O.prototype,"triggerLabel",2);h([G('[part~="form-control-input"]')],O.prototype,"triggerButton",2);h([G(".color-popup")],O.prototype,"popup",2);h([G('[part~="preview"]')],O.prototype,"previewButton",2);h([G('[part~="trigger"]')],O.prototype,"trigger",2);h([Z()],O.prototype,"hasFocus",2);h([Z()],O.prototype,"isDraggingGridHandle",2);h([Z()],O.prototype,"inputValue",2);h([Z()],O.prototype,"hue",2);h([Z()],O.prototype,"isEmpty",2);h([Z()],O.prototype,"saturation",2);h([Z()],O.prototype,"brightness",2);h([Z()],O.prototype,"alpha",2);h([Z()],O.prototype,"value",1);h([v({attribute:"value",reflect:!0})],O.prototype,"defaultValue",2);h([v({attribute:"with-label",reflect:!0,type:Boolean})],O.prototype,"withLabel",2);h([v({attribute:"with-hint",reflect:!0,type:Boolean})],O.prototype,"withHint",2);h([Z()],O.prototype,"hasEyeDropper",2);h([v()],O.prototype,"label",2);h([v({attribute:"hint"})],O.prototype,"hint",2);h([v()],O.prototype,"format",2);h([v({reflect:!0})],O.prototype,"size",2);h([et("size")],O.prototype,"handleSizeChange",1);h([v({reflect:!0})],O.prototype,"placement",2);h([v({attribute:"without-format-toggle",type:Boolean})],O.prototype,"withoutFormatToggle",2);h([v({reflect:!0})],O.prototype,"name",2);h([v({type:Boolean})],O.prototype,"disabled",2);h([v({type:Boolean,reflect:!0})],O.prototype,"open",2);h([v({type:Boolean})],O.prototype,"opacity",2);h([v({type:Boolean})],O.prototype,"uppercase",2);h([v()],O.prototype,"swatches",2);h([v({type:Boolean,reflect:!0})],O.prototype,"required",2);h([Eo({passive:!1})],O.prototype,"handleTouchMove",1);h([et("format",{waitUntilFirstUpdate:!0})],O.prototype,"handleFormatChange",1);h([et("opacity",{waitUntilFirstUpdate:!0})],O.prototype,"handleOpacityChange",1);h([et("value")],O.prototype,"handleValueChange",1);h([et("open",{waitUntilFirstUpdate:!0})],O.prototype,"handleOpenChange",1);O=h([nt("wa-color-picker")],O);O.disableWarning?.("change-in-update");var Dn=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function In(e,t){let i=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!i&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&Oa(t)})}function Oa(e){let t=null;if("form"in e&&(t=e.form),!t&&"getForm"in e&&(t=e.getForm()),!t)return;let i=[...t.elements];if(i.length===1){t.requestSubmit(null);return}let r=i.find(o=>o.type==="submit"&&!o.matches(":disabled"));r&&(["input","button"].includes(r.localName)?t.requestSubmit(r):r.click())}var On=K`
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
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    /* Only ring the field when the text input has focus, not inner buttons */
    &:has(input:focus, textarea:focus) {
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
    position: relative;
    display: inline-flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    height: 1.5em;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    border-radius: var(--wa-border-radius-s);
    background: none;
    padding: 0;
    transition: var(--wa-transition-normal) color;
    cursor: pointer;
    /* The box is wider than the glyph, so overhang half of that growth on each side. Keeps the
       glyph flush with the field's trailing padding edge, like every other form control. */
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.125em);
    margin-inline-end: -0.125em;

    &::after {
      content: '';
      position: absolute;
      inset-inline: 0;
      height: var(--wa-form-control-height);
    }

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

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
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
`;var Ci=()=>({checkValidity(e){let t=e.input,i={message:"",isValid:!0,invalidKeys:[]};if(!t)return i;let r=!0;if("checkValidity"in t&&(r=t.checkValidity()),r)return i;if(i.isValid=!1,"validationMessage"in t&&(i.message=t.validationMessage),!("validity"in t))return i.invalidKeys.push("customError"),i;for(let o in t.validity){if(o==="valid")continue;let n=o;t.validity[n]&&i.invalidKeys.push(n)}return i}});var{I:Fa}=mo,Fn=e=>e,Nn=e=>e===null||typeof e!="object"&&typeof e!="function";var Vn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;var xi=e=>e.strings===void 0,Bn=()=>document.createComment(""),ye=(e,t,i)=>{let r=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(i===void 0){let n=r.insertBefore(Bn(),o),s=r.insertBefore(Bn(),o);i=new Fa(n,s,e,e.options)}else{let n=i._$AB.nextSibling,s=i._$AM,a=s!==e;if(a){let c;i._$AQ?.(e),i._$AM=e,i._$AP!==void 0&&(c=e._$AU)!==s._$AU&&i._$AP(c)}if(n!==o||a){let c=i._$AA;for(;c!==n;){let b=Fn(c).nextSibling;Fn(r).insertBefore(c,o),c=b}}}return i},qt=(e,t,i=e)=>(e._$AI(t,i),e),Ba={},Ei=(e,t=Ba)=>e._$AH=t,Hn=e=>e._$AH,Li=e=>{e._$AR(),e._$AA.remove()};var dr=ct(class extends gt{constructor(e){if(super(e),e.type!==lt.PROPERTY&&e.type!==lt.ATTRIBUTE&&e.type!==lt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!xi(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===J||t===W)return t;let i=e.element,r=e.name;if(e.type===lt.PROPERTY){if(t===i[r])return J}else if(e.type===lt.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(r))return J}else if(e.type===lt.ATTRIBUTE&&i.getAttribute(r)===t+"")return J;return Ei(e),t}});var N=class extends ut{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new be(this,"hint","label"),this.localize=new _t(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Ci()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){if(e==null){this.setValue("",null);return}super.updateFormValue(e)}handleSizeChange(){ve(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new Dn),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){In(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){if(super.updated(e),e.has("value")||e.has("defaultValue")||e.has("type")){let t=["number","date","time","datetime-local"];this.input&&t.includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set("blank",!this.value),this.updateValidity()}}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,r="preserve"){let o=t??this.input.selectionStart,n=i??this.input.selectionEnd;this.input.setRangeText(e,o,n,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test("label","withLabel"),t=this.hasSlotController.test("hint","withHint"),i=this.label?!0:!!e,r=this.hint?!0:!!t,o=this.withClear&&!this.disabled&&!this.readonly,n=(!this.didSSR||this.hasUpdated)&&o&&(typeof this.value=="number"||this.value&&this.value.length>0);return U`
      <label
        part="form-control-label label"
        class=${it({label:!0,"has-label":i})}
        for="input"
        aria-hidden=${i?"false":"true"}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base input-wrapper" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
          title=${this.title}
          name=${H(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${H(this.placeholder)}
          minlength=${H(this.minlength)}
          maxlength=${H(this.maxlength)}
          min=${H(this.min)}
          max=${H(this.max)}
          step=${H(this.step)}
          .value=${dr(this.value??"")}
          autocapitalize=${H(this.autocapitalize)}
          autocomplete=${H(this.autocomplete)}
          autocorrect=${this.autocorrect?"on":"off"}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${H(this.pattern)}
          enterkeyhint=${H(this.enterkeyhint)}
          inputmode=${H(this.inputmode)}
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
    `}};N.css=[we,bi,On];N.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0};h([G("input")],N.prototype,"input",2);h([v()],N.prototype,"title",2);h([v({reflect:!0})],N.prototype,"type",2);h([Z()],N.prototype,"value",1);h([v({attribute:"value",reflect:!0})],N.prototype,"defaultValue",2);h([v({reflect:!0})],N.prototype,"size",2);h([et("size")],N.prototype,"handleSizeChange",1);h([v({reflect:!0})],N.prototype,"appearance",2);h([v({type:Boolean,reflect:!0})],N.prototype,"pill",2);h([v()],N.prototype,"label",2);h([v({attribute:"hint"})],N.prototype,"hint",2);h([v({attribute:"with-clear",type:Boolean})],N.prototype,"withClear",2);h([v()],N.prototype,"placeholder",2);h([v({type:Boolean,reflect:!0})],N.prototype,"readonly",2);h([v({attribute:"password-toggle",type:Boolean})],N.prototype,"passwordToggle",2);h([v({attribute:"password-visible",type:Boolean})],N.prototype,"passwordVisible",2);h([v({attribute:"without-spin-buttons",type:Boolean,reflect:!0})],N.prototype,"withoutSpinButtons",2);h([v({type:Boolean,reflect:!0})],N.prototype,"required",2);h([v()],N.prototype,"pattern",2);h([v({type:Number})],N.prototype,"minlength",2);h([v({type:Number})],N.prototype,"maxlength",2);h([v()],N.prototype,"min",2);h([v()],N.prototype,"max",2);h([v()],N.prototype,"step",2);h([v()],N.prototype,"autocapitalize",2);h([v({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="off"),toAttribute:e=>e?"on":"off"}})],N.prototype,"autocorrect",2);h([v()],N.prototype,"autocomplete",2);h([v({type:Boolean})],N.prototype,"autofocus",2);h([v()],N.prototype,"enterkeyhint",2);h([v({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],N.prototype,"spellcheck",2);h([v()],N.prototype,"inputmode",2);h([v({attribute:"with-label",type:Boolean})],N.prototype,"withLabel",2);h([v({attribute:"with-hint",type:Boolean})],N.prototype,"withHint",2);h([et("step",{waitUntilFirstUpdate:!0})],N.prototype,"handleStepChange",1);N=h([nt("wa-input")],N);N.disableWarning?.("change-in-update");var qn=K`
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
      /* Hidden with opacity, not visibility, so the label stays in the accessibility tree */
      opacity: 0;

      /* Unlike visibility: hidden, opacity leaves the content clickable */
      pointer-events: none;
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
`;var Un=K`
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
`;var jn=Symbol.for(""),Na=e=>{if(e?.r===jn)return e?._$litStatic$};var pr=(e,...t)=>({_$litStatic$:t.reduce((i,r,o)=>i+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+e[o+1],e[0]),r:jn}),Wn=new Map,fr=e=>(t,...i)=>{let r=i.length,o,n,s=[],a=[],c,b=0,E=!1;for(;b<r;){for(c=t[b];b<r&&(n=i[b],(o=Na(n))!==void 0);)c+=o+t[++b],E=!0;b!==r&&a.push(n),s.push(c),b++}if(b===r&&s.push(t[r]),E){let g=s.join("$$lit$$");(t=Wn.get(g))===void 0&&(s.raw=s,Wn.set(g,t=s)),i=a}return e(t,...i)},Ai=fr(U),Pp=fr(ho),Rp=fr(uo);var q=class extends ut{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new be(this,"[default]","start","end"),this.localize=new _t(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,Ci()]}handleSizeChange(){ve(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement("button");for(let t of this.attributes)t.name!=="style"&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position="absolute !important",e.style.width="0 !important",e.style.height="0 !important",e.style.clipPath="inset(50%) !important",e.style.overflow="hidden !important",e.style.whiteSpace="nowrap !important",this.name&&(e.name=this.name),e.value=this.value||"",e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;let i=this.constructLightDOMButton();this.parentElement?.append(i),i.click(),i.remove()}handleInvalid(){this.dispatchEvent(new ge)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,i=!1,r=!1,o=!1;[...e].forEach(n=>{if(n.nodeType===Node.ELEMENT_NODE){let s=n;s.localName==="wa-icon"?(i=!0,t||(t=s.label!==void 0)):o=!0}else n.nodeType===Node.TEXT_NODE&&(n.textContent?.trim()||"").length>0&&(r=!0)}),this.isIconButton=i&&!r&&!o,this.customStates.set("icon-button",this.isIconButton),this.isIconButton&&!t&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?pr`a`:pr`button`;return Ai`
      <${t}
        part="base button"
        class=${it({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start","withStart"),"has-end":this.hasSlotController.test("end","withEnd"),"is-icon-button":this.isIconButton})}
        ?disabled=${H(e?void 0:this.disabled)}
        type=${H(e?void 0:this.type)}
        title=${this.title}
        name=${H(e?void 0:this.name)}
        value=${H(e?void 0:this.value)}
        href=${H(e?this.href:void 0)}
        target=${H(e?this.target:void 0)}
        download=${H(e?this.download:void 0)}
        rel=${H(e&&this.rel?this.rel:void 0)}
        role=${H(e?void 0:"button")}
        aria-disabled=${H(e&&this.disabled?"true":void 0)}
        aria-busy=${this.loading?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Ai`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?Ai`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${t}>
    `}};q.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0};q.css=[qn,Un,we];h([G(".button")],q.prototype,"button",2);h([G("slot:not([name])")],q.prototype,"labelSlot",2);h([Z()],q.prototype,"invalid",2);h([Z()],q.prototype,"isIconButton",2);h([v()],q.prototype,"title",2);h([v({reflect:!0})],q.prototype,"variant",2);h([v({reflect:!0})],q.prototype,"appearance",2);h([v({reflect:!0})],q.prototype,"size",2);h([et("size")],q.prototype,"handleSizeChange",1);h([v({attribute:"with-caret",type:Boolean,reflect:!0})],q.prototype,"withCaret",2);h([v({attribute:"with-start",type:Boolean})],q.prototype,"withStart",2);h([v({attribute:"with-end",type:Boolean})],q.prototype,"withEnd",2);h([v({type:Boolean})],q.prototype,"disabled",2);h([v({type:Boolean,reflect:!0})],q.prototype,"loading",2);h([v({type:Boolean,reflect:!0})],q.prototype,"pill",2);h([v()],q.prototype,"type",2);h([v({reflect:!0})],q.prototype,"name",2);h([v({reflect:!0})],q.prototype,"value",2);h([v({reflect:!0})],q.prototype,"href",2);h([v()],q.prototype,"target",2);h([v()],q.prototype,"rel",2);h([v()],q.prototype,"download",2);h([v({attribute:"formaction"})],q.prototype,"formAction",2);h([v({attribute:"formenctype"})],q.prototype,"formEnctype",2);h([v({attribute:"formmethod"})],q.prototype,"formMethod",2);h([v({attribute:"formnovalidate",type:Boolean})],q.prototype,"formNoValidate",2);h([v({attribute:"formtarget"})],q.prototype,"formTarget",2);h([et("disabled",{waitUntilFirstUpdate:!0})],q.prototype,"handleDisabledChange",1);h([et("href")],q.prototype,"handleHrefChange",1);h([et("loading",{waitUntilFirstUpdate:!0})],q.prototype,"handleLoadingChange",1);q=h([nt("wa-button")],q);q.disableWarning?.("change-in-update");var Kn=K`
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
`;var mr=class extends at{constructor(){super(...arguments),this.localize=new _t(this)}render(){return U`
      <svg
        part="base spinner"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" />
        <circle class="indicator" />
      </svg>
    `}};mr.css=Kn;mr=h([nt("wa-spinner")],mr);var Yn=K`
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

    ::slotted(:first-child) {
      --_button-horizontal-indent: 0;
      --_button-horizontal-indent-outlined: 0;
    }
  }

  :host([orientation='vertical']) {
    --_button-vertical-indent: var(--wa-form-control-border-width);
    --_button-vertical-indent-outlined: calc(var(--wa-form-control-border-width) * -1);

    ::slotted(:first-child) {
      --_button-vertical-indent: 0;
      --_button-vertical-indent-outlined: 0;
    }
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
`;var Ut=class extends at{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(e){super.updated(e),e.has("orientation")&&this.setAttribute("aria-orientation",this.orientation)}handleFocus(e){Si(e.target)?.classList.add("button-focus")}handleBlur(e){Si(e.target)?.classList.remove("button-focus")}handleMouseOver(e){Si(e.target)?.classList.add("button-hover")}handleMouseOut(e){Si(e.target)?.classList.remove("button-hover")}render(){return U`
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
    `}};Ut.css=[Yn];h([G("slot")],Ut.prototype,"defaultSlot",2);h([Z()],Ut.prototype,"disableRole",2);h([Z()],Ut.prototype,"hasOutlined",2);h([v()],Ut.prototype,"label",2);h([v({reflect:!0})],Ut.prototype,"orientation",2);Ut=h([nt("wa-button-group")],Ut);function Si(e){let t="wa-button, wa-radio-button";return e.closest(t)??e.querySelector(t)}var Xn=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var Gn=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var Qn=K`
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

  /* #region Canvas — the box the icon is centered within (mirrors Font Awesome's icon canvas). Orthogonal to font-size. */

  /* Fixed width (default): 1.25em × 1em (20 × 16px) */
  :host(:not([canvas])),
  :host([canvas='fixed']) {
    width: 1.25em;
    height: 1em;
    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Auto: hug the icon's width. \`auto-width\` is the deprecated alias for canvas="auto". */
  :host([canvas='auto']),
  :host([auto-width]:not([canvas])) {
    width: auto;
    height: 1em;
  }

  /* Square: 1.25em × 1.25em (20 × 20px) */
  :host([canvas='square']) {
    width: 1.25em;
    height: 1.25em;
    min-width: 1.25em;
    min-height: 1.25em;
  }

  /* Roomy: 1.5em × 1.5em (24 × 24px) */
  :host([canvas='roomy']) {
    width: 1.5em;
    height: 1.5em;
    min-width: 1.5em;
    min-height: 1.5em;
  }

  /* #endregion */

  svg {
    /* NOTE: Avoid setting fill here. A stylesheet rule beats SVG presentation attributes, breaking stroke-based
       libraries like Lucide (fill="none" stroke="currentColor") and attribute-based mutators (issue #1733). The default
       library applies fill="currentColor" in its mutator instead. */
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

  /* #region Animations — ported from Font Awesome 7.3 (--fa-* props mapped to wa-icon's --* names) */

  :host([animation='beat']) {
    animation-name: beat;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='bounce']) {
    animation-name: bounce;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  :host([animation='fade']) {
    animation-name: fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='beat-fade']) {
    animation-name: beat-fade;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip']) {
    animation-name: flip;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.5s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
  }

  :host([animation='flip-360']) {
    animation-name: flip-360;
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
    animation-duration: var(--animation-duration, 0.75s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
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
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, steps(8));
  }

  /* spin-reverse is FA's reverse modifier expressed as a standalone value; reverse any spin via --animation-direction: reverse */
  :host([animation='spin-reverse']) {
    animation-name: spin;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, reverse);
    animation-duration: var(--animation-duration, 2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap']) {
    animation-name: spin-snap;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-4']) {
    animation-name: spin-snap-4;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 2.4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='spin-snap-8']) {
    animation-name: spin-snap-8;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 4s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='buzz']) {
    animation-name: buzz;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.6s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, linear);
  }

  :host([animation='wag']) {
    animation-name: wag;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: bottom center;
  }

  :host([animation='float']) {
    animation-name: float;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 3s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-in-out);
    will-change: transform;
  }

  :host([animation='swing']) {
    animation-name: swing;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 1.2s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
    transform-origin: top center;
  }

  :host([animation='jello']) {
    animation-name: jello;
    animation-delay: var(--animation-delay, 0s);
    animation-direction: var(--animation-direction, normal);
    animation-duration: var(--animation-duration, 0.9s);
    animation-iteration-count: var(--animation-iteration-count, infinite);
    animation-timing-function: var(--animation-timing, ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    :host([animation='beat']),
    :host([animation='bounce']),
    :host([animation='fade']),
    :host([animation='beat-fade']),
    :host([animation='flip']),
    :host([animation='flip-360']),
    :host([animation='shake']),
    :host([animation='spin']),
    :host([animation='spin-pulse']),
    :host([animation='spin-reverse']),
    :host([animation='spin-snap']),
    :host([animation='spin-snap-4']),
    :host([animation='spin-snap-8']),
    :host([animation='buzz']),
    :host([animation='wag']),
    :host([animation='float']),
    :host([animation='swing']),
    :host([animation='jello']) {
      animation: none !important;
      transition: none !important;
    }
  }

  /* #endregion */

  /* #region Keyframes — ported verbatim from Font Awesome 7.3 */

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    45% {
      transform: scale(calc(1.22 * var(--beat-scale, 1.22)));
    }
    65% {
      transform: scale(calc(1.25 * var(--beat-scale, 1.25)));
    }
    90% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
      /* No fallback by design (ported from FA 7.3): the first segment uses the user's --animation-timing or the CSS
         initial ease, while the explicit cubic-beziers on later stops drive the bounce physics. */
      animation-timing-function: var(--animation-timing);
    }
    14% {
      transform: scale(var(--bounce-start-scale-x, 1.06), var(--bounce-start-scale-y, 0.94))
        translateY(var(--bounce-anticipation, 3px));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    32% {
      transform: scale(var(--bounce-jump-scale-x, 0.94), var(--bounce-jump-scale-y, 1.12))
        translateY(calc(-1 * var(--bounce-height, 0.5em)));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    52% {
      transform: scale(1, 1) translateY(calc(-1 * var(--bounce-height, 0.5em) * 1.1));
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    70% {
      transform: scale(var(--bounce-land-scale-x, 1.06), var(--bounce-land-scale-y, 0.92)) translateY(0);
      animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
    }
    85% {
      transform: scale(0.98, 1.04) translateY(calc(-2px * var(--bounce-rebound, 1)));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes fade {
    0% {
      opacity: 1;
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    40% {
      opacity: var(--fade-opacity, 0.4);
      transform: scale(0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes beat-fade {
    0% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    25% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    45% {
      opacity: 1;
      transform: scale(var(--beat-fade-scale, 1.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    65% {
      opacity: calc(var(--beat-fade-opacity, 0.4) + 0.4);
      transform: scale(var(--beat-fade-scale, 1.28));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    100% {
      opacity: var(--beat-fade-opacity, 0.4);
      transform: scale(1);
    }
  }

  @keyframes flip {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    35% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: linear;
    }
    65% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.5));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    92% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes flip-360 {
    0% {
      transform: perspective(2em) scale(1) rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
    }
    8% {
      transform: perspective(2em) scale(var(--flip-anticipation-scale, 0.95))
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), 0deg);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    50% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), calc(var(--flip-angle, -360deg) * 0.6));
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    80% {
      transform: perspective(2em) scale(1)
        rotate3d(
          var(--flip-x, 0),
          var(--flip-y, 1),
          var(--flip-z, 0),
          calc(var(--flip-angle, -360deg) * var(--flip-overshoot, 1.04))
        );
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: perspective(2em) scale(1)
        rotate3d(var(--flip-x, 0), var(--flip-y, 1), var(--flip-z, 0), var(--flip-angle, -360deg));
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(35deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    20% {
      transform: rotate(-22deg) translateX(-1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    35% {
      transform: rotate(15deg) translateX(1px);
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    50% {
      transform: rotate(-9deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    65% {
      transform: rotate(5deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    78% {
      transform: rotate(-3deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    90% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
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

  @keyframes spin-snap {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    12% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    16.67% {
      transform: rotate(60deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    28.67% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    33.33% {
      transform: rotate(120deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    45.33% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    62% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    66.67% {
      transform: rotate(240deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    78.67% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    83.33% {
      transform: rotate(300deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    95.33% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-4 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    15% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    40% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    65% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    90% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-snap-8 {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    9% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    12.5% {
      transform: rotate(45deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    21.5% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    25% {
      transform: rotate(90deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    34% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    37.5% {
      transform: rotate(135deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    46.5% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: rotate(180deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    59% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    62.5% {
      transform: rotate(225deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    71.5% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    75% {
      transform: rotate(270deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    84% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    87.5% {
      transform: rotate(315deg);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
    96.5% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes buzz {
    0% {
      transform: translateX(0) rotate(0deg);
      animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
    }
    5% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.5deg);
    }
    10% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.5deg);
    }
    15% {
      transform: translateX(var(--buzz-distance, 4px)) rotate(0.3deg);
    }
    20% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px))) rotate(-0.3deg);
    }
    25% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.7)) rotate(0.2deg);
    }
    30% {
      transform: translateX(calc(-1 * var(--buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
    }
    35% {
      transform: translateX(calc(var(--buzz-distance, 4px) * 0.4)) rotate(0.1deg);
    }
    40% {
      transform: translateX(0) rotate(0deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

  @keyframes wag {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    12% {
      transform: rotate(var(--wag-angle, 12deg));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    24% {
      transform: rotate(2deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    36% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.85));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    48% {
      transform: rotate(1deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
    }
    58% {
      transform: rotate(calc(var(--wag-angle, 12deg) * 0.6));
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    15% {
      transform: translateY(calc(-0.4 * var(--float-height, 6px))) translateX(var(--float-drift, 1px))
        rotate(var(--float-tilt, 1deg)) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    35% {
      transform: translateY(calc(-1 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-stretch-x, 0.98), var(--float-stretch-y, 1.03));
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
    }
    50% {
      transform: translateY(calc(-0.92 * var(--float-height, 6px))) translateX(calc(-0.5 * var(--float-drift, 1px)))
        rotate(calc(-0.5 * var(--float-tilt, 1deg))) scale(0.995, 1.01);
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
    }
    70% {
      transform: translateY(calc(-0.3 * var(--float-height, 6px))) translateX(calc(-1 * var(--float-drift, 1px)))
        rotate(calc(-1 * var(--float-tilt, 1deg))) scale(1, 1);
      animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
    }
    90% {
      transform: translateY(calc(0.05 * var(--float-height, 6px))) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
      animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
    }
    100% {
      transform: translateY(0) translateX(0) rotate(0deg)
        scale(var(--float-squash-x, 1.02), var(--float-squash-y, 0.98));
    }
  }

  @keyframes swing {
    0% {
      transform: rotate(0deg);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    8% {
      transform: rotate(var(--swing-angle, 22deg));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    18% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.85));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    28% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.65));
      animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
    }
    38% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.45));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: rotate(calc(var(--swing-angle, 22deg) * 0.25));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    56% {
      transform: rotate(calc(-1 * var(--swing-angle, 22deg) * 0.1));
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    64% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes jello {
    0% {
      transform: scale(1, 1);
      animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
    }
    12% {
      transform: scale(var(--jello-scale-x, 1.15), calc(2 - var(--jello-scale-x, 1.15)));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    24% {
      transform: scale(calc(2 - var(--jello-scale-y, 1.12)), var(--jello-scale-y, 1.12));
      animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
    }
    36% {
      transform: scale(
        calc(1 + (var(--jello-scale-x, 1.15) - 1) * 0.5),
        calc(2 - (1 + (var(--jello-scale-x, 1.15) - 1) * 0.5))
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    48% {
      transform: scale(
        calc(2 - (1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)),
        calc(1 + (var(--jello-scale-y, 1.12) - 1) * 0.3)
      );
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    }
    58% {
      transform: scale(1.02, 0.98);
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    68% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  /* #endregion */
`;var Va="",gr="";function Zn(){return Va.replace(/\/$/,"")}function Ha(e){gr=e}function Jn(){if(!gr){let e=document.querySelector("[data-fa-kit-code]");e&&Ha(e.getAttribute("data-fa-kit-code")||"")}return gr}var ts="7.3.0";function qa(e,t,i){let r="solid";return t==="chisel"&&(r="chisel-regular"),t==="etch"&&(r="etch-solid"),t==="graphite"&&(r="graphite-thin"),t==="jelly"&&(r="jelly-regular",i==="duo-regular"&&(r="jelly-duo-regular"),i==="fill-regular"&&(r="jelly-fill-regular")),t==="jelly-duo"&&(r="jelly-duo-regular"),t==="jelly-fill"&&(r="jelly-fill-regular"),t==="notdog"&&(i==="solid"&&(r="notdog-solid"),i==="duo-solid"&&(r="notdog-duo-solid")),t==="notdog-duo"&&(r="notdog-duo-solid"),t==="slab"&&((i==="solid"||i==="regular")&&(r="slab-regular"),i==="press-regular"&&(r="slab-press-regular")),t==="slab-press"&&(r="slab-press-regular"),t==="slab-duo"&&(r="slab-duo-regular"),t==="slab-press-duo"&&(r="slab-press-duo-regular"),t==="thumbprint"&&(r="thumbprint-light"),t==="utility"&&(r="utility-semibold"),t==="utility-duo"&&(r="utility-duo-semibold"),t==="utility-fill"&&(r="utility-fill-semibold"),t==="whiteboard"&&(r="whiteboard-semibold"),t==="mosaic"&&(r="mosaic-solid"),t==="pixel"&&(r="pixel-regular"),t==="vellum"&&(r="vellum-solid"),t==="classic"&&(i==="thin"&&(r="thin"),i==="light"&&(r="light"),i==="regular"&&(r="regular"),i==="solid"&&(r="solid")),t==="duotone"&&(i==="thin"&&(r="duotone-thin"),i==="light"&&(r="duotone-light"),i==="regular"&&(r="duotone-regular"),i==="solid"&&(r="duotone")),t==="sharp"&&(i==="thin"&&(r="sharp-thin"),i==="light"&&(r="sharp-light"),i==="regular"&&(r="sharp-regular"),i==="solid"&&(r="sharp-solid")),t==="sharp-duotone"&&(i==="thin"&&(r="sharp-duotone-thin"),i==="light"&&(r="sharp-duotone-light"),i==="regular"&&(r="sharp-duotone-regular"),i==="solid"&&(r="sharp-duotone-solid")),t==="brands"&&(r="brands"),r}function Ua(e,t,i){let r=qa(e,t,i),o=Zn();if(o)return`${o}/${r}/${e}.svg`;let n=Jn();return n.length>0?`https://ka-p.fontawesome.com/releases/v${ts}/svgs/${r}/${e}.svg?token=${encodeURIComponent(n)}`:`https://ka-f.fontawesome.com/releases/v${ts}/svgs/${r}/${e}.svg`}var Wa={name:"default",resolver:(e,t="classic",i="solid")=>Ua(e,t,i),mutator:(e,t)=>{if(e.hasAttribute("fill")||e.setAttribute("fill","currentColor"),t?.family&&!e.hasAttribute("data-duotone-initialized")){let{family:i,variant:r}=t;if(i==="duotone"||i==="sharp-duotone"||i==="notdog-duo"||i==="notdog"&&r==="duo-solid"||i==="jelly-duo"||i==="jelly"&&r==="duo-regular"||i==="utility-duo"||i==="slab-duo"||i==="slab-press-duo"||i==="thumbprint"){let o=[...e.querySelectorAll("path")],n=o.find(a=>!a.hasAttribute("opacity")),s=o.find(a=>a.hasAttribute("opacity"));if(!n||!s)return;if(n.setAttribute("data-duotone-primary",""),s.setAttribute("data-duotone-secondary",""),t.swapOpacity&&n&&s){let a=s.getAttribute("opacity")||"0.4";n.style.setProperty("--path-opacity",a),s.style.setProperty("--path-opacity","1")}e.setAttribute("data-duotone-initialized","")}}}},es=Wa;function ja(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var vr={solid:{backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',"angles-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>',"angles-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',ellipsis:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>',"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},Ka={name:"system",resolver:(e,t="classic",i="solid")=>{let o=vr[i][e]??vr.regular[e]??vr.regular["circle-question"];return o?ja(o):""},mutator:e=>{e.hasAttribute("fill")||e.setAttribute("fill","currentColor")}},is=Ka;var Ya="classic",Xa=[es,is],rs=new Set;function os(e){rs.add(e)}function ns(e){rs.delete(e)}function $i(e){return Xa.find(t=>t.name===e)}function ss(){return Ya}var Ue=Symbol(),ki=Symbol(),br,wr=new Map,st=class extends at{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(e,t)=>{let i;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=U`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let r=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(r,this),this.svg}try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Ue:ki}catch{return ki}try{let r=document.createElement("div");r.innerHTML=await i.text();let o=r.firstElementChild;if(o?.tagName?.toLowerCase()!=="svg")return Ue;br||(br=new DOMParser);let s=br.parseFromString(o.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):Ue}catch{return Ue}}}connectedCallback(){super.connectedCallback(),os(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ns(this)}async getIconSource(){let e=$i(this.library),t=this.family||ss();if(this.name&&e){let i=this.canvas==="auto"||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,i)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),i=t?$i(this.library):void 0;if(!e){this.svg=null;return}let r=wr.get(e);r||(r=this.resolveIcon(e,i),wr.set(e,r));let o=await r;o===ki&&wr.delete(e);let n=await this.getIconSource();if(e===n.url){if(Vn(o)){this.svg=o;return}switch(o){case ki:case Ue:this.svg=null,this.dispatchEvent(new Xn);break;default:this.svg=o.cloneNode(!0),i?.mutator?.(this.svg,this),this.dispatchEvent(new Gn)}}}willUpdate(e){return this.style||this.setStyleProperty("--rotate-angle",`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=$i(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);let i=this.shadowRoot?.querySelector("svg");i&&t?.mutator?.(i,this)}render(){return this.hasUpdated?this.svg:U`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};st.css=Qn;h([Z()],st.prototype,"svg",2);h([v({reflect:!0})],st.prototype,"name",2);h([v({reflect:!0})],st.prototype,"family",2);h([v({reflect:!0})],st.prototype,"variant",2);h([v({reflect:!0})],st.prototype,"canvas",2);h([v({attribute:"auto-width",type:Boolean,reflect:!0})],st.prototype,"autoWidth",2);h([v({attribute:"swap-opacity",type:Boolean,reflect:!0})],st.prototype,"swapOpacity",2);h([v()],st.prototype,"src",2);h([v()],st.prototype,"label",2);h([v({reflect:!0})],st.prototype,"library",2);h([v({type:Number,reflect:!0})],st.prototype,"rotate",2);h([v({type:String,reflect:!0})],st.prototype,"flip",2);h([v({type:String,reflect:!0})],st.prototype,"animation",2);h([et("label")],st.prototype,"handleLabelChange",1);h([et(["family","name","library","variant","src","autoWidth","canvas","swapOpacity"],{waitUntilFirstUpdate:!0})],st.prototype,"setIcon",1);st=h([nt("wa-icon")],st);function as(e,t){window.__swc,customElements.define(e,t)}var ls="1.12.2",cs="0.3.0";function Ga(e){class t extends e{get isLTR(){return getComputedStyle(this).direction!=="rtl"}hasVisibleFocusInTree(){let r=((o=document)=>{var n;let s=o.activeElement;for(;s!=null&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;let a=s?[s]:[];for(;s;){let c=s.assignedSlot||s.parentElement||((n=s.getRootNode())==null?void 0:n.host);c&&a.push(c),s=c}return a})(this.getRootNode())[0];return r?r.matches(":focus-visible")||r.matches(".focus-visible"):!1}}return t}var Ce=class extends Ga($t){get dir(){var t;return(t=getComputedStyle(this).direction)!=null?t:"ltr"}};Ce.VERSION=ls,Ce.CORE_VERSION=cs;var hs=(e,t,i)=>{let r=new Map;for(let o=t;o<=i;o++)r.set(e[o],o);return r},Qa=ct(class extends gt{constructor(e){if(super(e),e.type!==lt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let r;i===void 0?i=t:t!==void 0&&(r=t);let o=[],n=[],s=0;for(let a of e)o[s]=r?r(a,s):s,n[s]=i(a,s),s++;return{values:n,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,r]){let o=Hn(e),{values:n,keys:s}=this.dt(t,i,r);if(!Array.isArray(o))return this.ut=s,n;let a=this.ut??=[],c=[],b,E,g=0,w=o.length-1,u=0,p=n.length-1;for(;g<=w&&u<=p;)if(o[g]===null)g++;else if(o[w]===null)w--;else if(a[g]===s[u])c[u]=qt(o[g],n[u]),g++,u++;else if(a[w]===s[p])c[p]=qt(o[w],n[p]),w--,p--;else if(a[g]===s[p])c[p]=qt(o[g],n[p]),ye(e,c[p+1],o[g]),g++,p--;else if(a[w]===s[u])c[u]=qt(o[w],n[u]),ye(e,o[g],o[w]),w--,u++;else if(b===void 0&&(b=hs(s,u,p),E=hs(a,g,w)),b.has(a[g]))if(b.has(a[w])){let l=E.get(s[u]),L=l!==void 0?o[l]:null;if(L===null){let d=ye(e,o[g]);qt(d,n[u]),c[u]=d}else c[u]=qt(L,n[u]),ye(e,o[g],L),o[l]=null;u++}else Li(o[w]),w--;else Li(o[g]),g++;for(;u<=p;){let l=ye(e,c[p+1]);qt(l,n[u]),c[u++]=l}for(;g<=w;){let l=o[g++];l!==null&&Li(l)}return this.ut=s,Ei(e,c),J}});var We=(e,t)=>{let i=e._$AN;if(i===void 0)return!1;for(let r of i)r._$AO?.(t,!1),We(r,t);return!0},_i=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},us=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),tl(t)}};function Za(e){this._$AN!==void 0?(_i(this),this._$AM=e,us(this)):this._$AM=e}function Ja(e,t=!1,i=0){let r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(r))for(let n=i;n<r.length;n++)We(r[n],!1),_i(r[n]);else r!=null&&(We(r,!1),_i(r));else We(this,e)}var tl=e=>{e.type==lt.CHILD&&(e._$AP??=Ja,e._$AQ??=Za)},Wt=class extends gt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),us(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(We(this,t),_i(this))}setValue(t){if(xi(this._$Ct))this._$Ct._$AI(t,this);else{let i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}};var zi=class{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}},Mi=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}};var ds=e=>!Nn(e)&&typeof e.then=="function",ps=1073741823,yr=class extends Wt{constructor(){super(...arguments),this._$Cwt=ps,this._$Cbt=[],this._$CK=new zi(this),this._$CX=new Mi}render(...t){return t.find(i=>!ds(i))??J}update(t,i){let r=this._$Cbt,o=r.length;this._$Cbt=i;let n=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<i.length&&!(a>this._$Cwt);a++){let c=i[a];if(!ds(c))return this._$Cwt=a,c;a<o&&c===r[a]||(this._$Cwt=ps,o=0,Promise.resolve(c).then(async b=>{for(;s.get();)await s.get();let E=n.deref();if(E!==void 0){let g=E._$Cbt.indexOf(c);g>-1&&g<E._$Cwt&&(E._$Cwt=g,E.setValue(b))}}))}return J}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},el=ct(yr);var je=class extends gt{constructor(t){if(super(t),this.it=W,t.type!==lt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===W||t==null)return this._t=void 0,this.it=t;if(t===J)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};je.directiveName="unsafeHTML",je.resultType=1;var il=ct(je);var Cr=new WeakMap,rl=ct(class extends Wt{render(e){return W}update(e,[t]){let i=t!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),W}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){let t=this.ht??globalThis,i=Cr.get(t);i===void 0&&(i=new WeakMap,Cr.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Cr.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var xe=["",()=>{}],xr=class extends Wt{constructor(){super(...arguments),this.start=xe,this.streamInside=xe,this.end=xe,this.streamOutside=xe,this.state="off",this.handleStart=t=>{this.clearStream(),this.callHandler(this.start[1],t),!t.defaultPrevented&&(this.removeListeners(),this.addListeners("on"))},this.handleInside=t=>{this.handleStream(this.streamInside[1],t)},this.handleEnd=t=>{this.clearStream(),this.callHandler(this.end[1],t),this.removeListeners(),this.addListeners("off")},this.handleOutside=t=>{this.handleStream(this.streamOutside[1],t)}}render(t){return W}update(t,[{start:i,end:r,streamInside:o=xe,streamOutside:n=xe}]){var s;this.element!==t.element&&(this.element=t.element,this.removeListeners()),this.host=((s=t.options)==null?void 0:s.host)||this.element,this.start=i,this.end=r,this.streamInside=o,this.streamOutside=n,this.addListeners()}addListeners(t){this.state=t||this.state,this.state==="off"?(this.addListener(this.streamOutside[0],this.handleOutside),this.addListener(this.start[0],this.handleStart)):this.state==="on"&&(this.addListener(this.streamInside[0],this.handleInside),this.addListener(this.end[0],this.handleEnd))}callHandler(t,i){typeof t=="function"?t.call(this.host,i):t.handleEvent(i)}handleStream(t,i){this.stream||(this.callHandler(t,i),this.stream=requestAnimationFrame(()=>{this.stream=void 0}))}clearStream(){this.stream!=null&&(cancelAnimationFrame(this.stream),this.stream=void 0)}addListener(t,i){Array.isArray(t)?t.map(r=>{this.element.addEventListener(r,i)}):this.element.addEventListener(t,i)}removeListener(t,i){Array.isArray(t)?t.map(r=>{this.element.removeEventListener(r,i)}):this.element.removeEventListener(t,i)}removeListeners(){this.removeListener(this.start[0],this.handleStart),this.removeListener(this.streamInside[0],this.handleInside),this.removeListener(this.end[0],this.handleEnd),this.removeListener(this.streamOutside[0],this.handleOutside)}disconnected(){this.removeListeners()}reconnected(){this.addListeners()}},fs=ct(xr);function ms(){return Array.from(crypto.getRandomValues(new Uint8Array(4)),e=>`0${(e&255).toString(16)}`.slice(-2)).join("")}var ol=K`
    :host{--spectrum-splitview-vertical-width:100%;--spectrum-splitview-vertical-gripper-width:50%;--spectrum-splitview-vertical-gripper-outer-width:100%;--spectrum-splitview-vertical-gripper-reset:0;--spectrum-splitview-content-color:var(--spectrum-body-color);--spectrum-splitview-handle-background-color-hover:var(--spectrum-gray-400);--spectrum-splitview-handle-background-color-down:var(--spectrum-gray-800);--spectrum-splitview-handle-background-color-focus:var(--spectrum-focus-indicator-color);--spectrum-splitview-handle-width:var(--spectrum-border-width-200);--spectrum-splitview-gripper-width:var(--spectrum-border-width-400);--spectrum-splitview-gripper-height:16px;--spectrum-splitview-gripper-border-width-horizontal:3px;--spectrum-splitview-gripper-border-width-vertical:var(--spectrum-border-width-400);display:flex;overflow:hidden}::slotted(*){block-size:100%;color:var(--mod-splitview-content-color,var(--spectrum-splitview-content-color));background-color:var(--mod-splitview-background-color,var(--spectrum-splitview-background-color))}#gripper{border-block-width:var(--mod-splitview-gripper-border-width-vertical,var(--spectrum-splitview-gripper-border-width-vertical));border-inline-width:var(--mod-splitview-gripper-border-width-horizontal,var(--spectrum-splitview-gripper-border-width-horizontal));inline-size:var(--mod-splitview-gripper-width,var(--spectrum-splitview-gripper-width));block-size:var(--mod-splitview-gripper-height,var(--spectrum-splitview-gripper-height));border-color:var(--highcontrast-splitview-handle-background-color,var(--mod-splitview-handle-background-color,var(--spectrum-splitview-handle-background-color)));border-radius:var(--mod-splitview-gripper-border-radius,var(--spectrum-splitview-gripper-border-radius));touch-action:none;content:"";border-style:solid;display:block;position:absolute;inset-block-start:50%;inset-inline-start:calc((var(--mod-splitview-gripper-width,var(--spectrum-splitview-gripper-width)) + (2*var(--mod-splitview-gripper-border-width-vertical,var(--spectrum-splitview-gripper-border-width-vertical))) - var(--mod-splitview-gripper-width,var(--spectrum-splitview-gripper-width)))/2*-1);transform:translateY(-50%)}#gripper:before{background-color:var(--highcontrast-splitview-handle-background-color,var(--mod-splitview-handle-background-color,var(--spectrum-splitview-handle-background-color)))}#splitter{z-index:1;inline-size:var(--mod-splitview-handle-width,var(--spectrum-splitview-handle-width));background-color:var(--highcontrast-splitview-handle-background-color,var(--mod-splitview-handle-background-color,var(--spectrum-splitview-handle-background-color)));-webkit-user-select:none;user-select:none;block-size:100%;position:relative}#splitter.is-collapsed-end #gripper:before,#splitter.is-collapsed-start #gripper:before{inline-size:var(--mod-splitview-handle-width,var(--spectrum-splitview-handle-width));content:"";block-size:100%;position:absolute;inset-block-start:0;inset-inline-start:calc(50% - var(--mod-splitview-handle-width,var(--spectrum-splitview-handle-width))/2)}#splitter.is-collapsed-start #gripper{inset-inline-start:0}#splitter.is-collapsed-end #gripper{inset-inline:auto 0}:host([resizable]) #splitter.is-hovered{background-color:var(--highcontrast-splitview-handle-background-color-hover,var(--mod-splitview-handle-background-color-hover,var(--spectrum-splitview-handle-background-color-hover)))}:host([resizable]) #splitter.is-hovered #gripper{border-color:var(--highcontrast-splitview-handle-background-color-hover,var(--mod-splitview-handle-background-color-hover,var(--spectrum-splitview-handle-background-color-hover)))}:host([resizable]) #splitter.is-hovered #gripper:before{background-color:var(--highcontrast-splitview-handle-background-color-hover,var(--mod-splitview-handle-background-color-hover,var(--spectrum-splitview-handle-background-color-hover)))}@media (hover:hover){:host([resizable]) #splitter:hover{background-color:var(--highcontrast-splitview-handle-background-color-hover,var(--mod-splitview-handle-background-color-hover,var(--spectrum-splitview-handle-background-color-hover)))}:host([resizable]) #splitter:hover #gripper{border-color:var(--highcontrast-splitview-handle-background-color-hover,var(--mod-splitview-handle-background-color-hover,var(--spectrum-splitview-handle-background-color-hover)))}:host([resizable]) #splitter:hover #gripper:before{background-color:var(--highcontrast-splitview-handle-background-color-hover,var(--mod-splitview-handle-background-color-hover,var(--spectrum-splitview-handle-background-color-hover)))}}:host([resizable]) #splitter.is-active,:host([resizable]) #splitter:active{background-color:var(--highcontrast-splitview-handle-background-color-down,var(--mod-splitview-handle-background-color-down,var(--spectrum-splitview-handle-background-color-down)))}:host([resizable]) #splitter.is-active #gripper,:host([resizable]) #splitter:active #gripper{border-color:var(--highcontrast-splitview-handle-background-color-down,var(--mod-splitview-handle-background-color-down,var(--spectrum-splitview-handle-background-color-down)))}:host([resizable]) #splitter.is-active #gripper:before,:host([resizable]) #splitter:active #gripper:before{background-color:var(--highcontrast-splitview-handle-background-color-down,var(--mod-splitview-handle-background-color-down,var(--spectrum-splitview-handle-background-color-down)))}:host([resizable]) #splitter:focus{outline:none}:host([resizable]) #splitter:focus-visible{background-color:var(--highcontrast-splitview-handle-background-color-focus,var(--mod-splitview-handle-background-color-focus,var(--spectrum-splitview-handle-background-color-focus)));outline:none}:host([resizable]) #splitter:focus-visible #gripper{border-color:var(--highcontrast-splitview-handle-background-color-focus,var(--mod-splitview-handle-background-color-focus,var(--spectrum-splitview-handle-background-color-focus)));box-shadow:0 0 0 1px var(--highcontrast-splitview-handle-background-color-focus,var(--mod-splitview-handle-background-color-focus,var(--spectrum-splitview-handle-background-color-focus)))}:host([resizable]) #splitter:focus-visible #gripper:before{background-color:var(--highcontrast-splitview-handle-background-color-focus,var(--mod-splitview-handle-background-color-focus,var(--spectrum-splitview-handle-background-color-focus)))}:host([vertical]){flex-direction:column}:host([vertical]) ::slotted(*){inline-size:var(--mod-splitview-vertical-width,var(--spectrum-splitview-vertical-width));block-size:auto}:host([vertical]) #gripper{border-block-width:var(--mod-splitview-gripper-border-width-horizontal,var(--spectrum-splitview-gripper-border-width-horizontal));border-inline-width:var(--mod-splitview-gripper-border-width-vertical,var(--spectrum-splitview-gripper-border-width-vertical));inline-size:var(--mod-splitview-gripper-height,var(--spectrum-splitview-gripper-height));block-size:var(--mod-splitview-gripper-width,var(--spectrum-splitview-gripper-width));transform:translate(calc(var(--mod-splitview-vertical-gripper-width,var(--spectrum-splitview-vertical-gripper-width))*-1));inset-block-start:calc((var(--mod-splitview-gripper-width,var(--spectrum-splitview-gripper-width)) + (2*var(--mod-splitview-gripper-border-width-vertical,var(--spectrum-splitview-gripper-border-width-vertical))) - var(--mod-splitview-gripper-width,var(--spectrum-splitview-gripper-width)))/2*-1);inset-inline-start:var(--mod-splitview-vertical-gripper-width,var(--spectrum-splitview-vertical-gripper-width))}:host([vertical]) #splitter{inline-size:var(--mod-splitview-vertical-width,var(--spectrum-splitview-vertical-width));block-size:var(--mod-splitview-handle-width,var(--spectrum-splitview-handle-width))}:host([vertical]) #splitter.is-collapsed-end #gripper,:host([vertical]) #splitter.is-collapsed-start #gripper{inset-inline-start:var(--mod-splitview-vertical-gripper-width,var(--spectrum-splitview-vertical-gripper-width))}:host([vertical]) #splitter.is-collapsed-end #gripper:before,:host([vertical]) #splitter.is-collapsed-start #gripper:before{inline-size:var(--mod-splitview-vertical-gripper-outer-width,var(--spectrum-splitview-vertical-gripper-outer-width));block-size:var(--mod-splitview-handle-width,var(--spectrum-splitview-handle-width));inset-block-start:calc(var(--mod-splitview-vertical-gripper-width,var(--spectrum-splitview-vertical-gripper-width)) - var(--mod-splitview-handle-width,var(--spectrum-splitview-handle-width))/2);inset-inline-start:var(--mod-splitview-vertical-gripper-reset,var(--spectrum-splitview-vertical-gripper-reset))}:host([vertical]) #splitter.is-collapsed-start #gripper{inset-block-start:var(--mod-splitview-vertical-gripper-reset,var(--spectrum-splitview-vertical-gripper-reset))}:host([vertical]) #splitter.is-collapsed-end #gripper{inset-block-start:auto;inset-block-end:var(--mod-splitview-vertical-gripper-reset,var(--spectrum-splitview-vertical-gripper-reset))}@media (forced-colors:active){:host{--highcontrast-splitview-handle-background-color:CanvasText;--highcontrast-splitview-handle-background-color-hover:CanvasText;--highcontrast-splitview-handle-background-color-down:CanvasText;--highcontrast-splitview-handle-background-color-focus:Highlight}}:host{--spectrum-splitview-background-color:var(--system-split-view-background-color);--spectrum-splitview-handle-background-color:var(--system-split-view-handle-background-color);--spectrum-splitview-gripper-border-radius:var(--system-split-view-gripper-border-radius)}:host{--spectrum-split-view-first-pane-size:50%}::slotted(*){overflow:auto}::slotted(:first-child){order:1}:host(:not([vertical])) ::slotted(:first-child:not(:last-child)){width:var(--spectrum-split-view-first-pane-size)}:host([vertical]) ::slotted(:first-child:not(:last-child)){height:var(--spectrum-split-view-first-pane-size)}::slotted(:nth-child(2)){flex:1;order:3}::slotted(:nth-child(n+3)){display:none}#gripper{touch-action:none}#splitter{order:2;height:auto}:host([resizable]) #splitter{cursor:ew-resize;background-clip:content-box}:host([vertical][resizable]) #splitter{cursor:ns-resize;background-clip:content-box}:host([resizable]) #splitter.is-resized-start:dir(ltr),:host([resizable]) #splitter.is-resized-end:dir(rtl){cursor:e-resize}:host([resizable]) #splitter.is-resized-end:dir(ltr),:host([resizable]) #splitter.is-resized-start:dir(rtl){cursor:w-resize}:host([vertical][resizable]) #splitter.is-resized-start{cursor:s-resize}:host([vertical][resizable]) #splitter.is-resized-end{cursor:n-resize}:host([resizable][collapsible]) #splitter.is-resized-start,:host([resizable][collapsible]) #splitter.is-resized-end{cursor:ew-resize}:host([resizable][collapsible]) #splitter.is-collapsed-start:dir(ltr),:host([resizable][collapsible]) #splitter.is-collapsed-end:dir(rtl){cursor:e-resize}:host([resizable][collapsible]) #splitter.is-collapsed-end:dir(ltr),:host([resizable][collapsible]) #splitter.is-collapsed-start:dir(rtl){cursor:w-resize}:host([vertical][resizable][collapsible]) #splitter.is-collapsed-start{cursor:s-resize}:host([vertical][resizable][collapsible]) #splitter.is-collapsed-end{cursor:n-resize}:host([vertical][resizable][collapsible]) #splitter.is-resized-start,:host([vertical][resizable][collapsible]) #splitter.is-resized-end{cursor:ns-resize}
`,gs=ol;var nl=Object.defineProperty,sl=Object.getOwnPropertyDescriptor,dt=(e,t,i,r)=>{for(var o=r>1?void 0:r?sl(t,i):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(r?s(t,i,o):s(o))||o);return r&&o&&nl(t,i,o),o},Er=3840,al=2,ll=10,cl=50,vs=50,rt=class extends Ce{constructor(){super(),this.vertical=!1,this.resizable=!1,this.collapsible=!1,this.primaryMin=0,this.primaryMax=Er,this.secondaryMin=0,this.secondaryMax=Er,this.firstPaneSize="auto",this.enoughChildren=!1,this.viewSize=0,this.offset=0,this.minPos=0,this.maxPos=Er,this.controlledElIDApplied=!1;let t=window.ResizeObserver;t&&(this.observer=new t(()=>{this.rect=void 0,this.updateMinMax()}))}static get styles(){return[gs]}connectedCallback(){var t;super.connectedCallback(),(t=this.observer)==null||t.observe(this)}disconnectedCallback(){var t;(t=this.observer)==null||t.unobserve(this),super.disconnectedCallback()}get splitterSize(){return this._splitterSize||(this._splitterSize=this.splitter&&Math.round(parseFloat(window.getComputedStyle(this.splitter).getPropertyValue(this.vertical?"height":"width")))||al),this._splitterSize}render(){var t,i;let r={"is-resized-start":this.splitterPos===this.minPos,"is-resized-end":this.splitterPos&&this.splitterPos>this.splitterSize&&this.splitterPos===this.maxPos,"is-collapsed-start":this.splitterPos===0,"is-collapsed-end":this.splitterPos&&this.splitterPos>=Math.max(this.splitterSize,this.viewSize-this.splitterSize)},o=this.resizable?this.label||"Resize the panels":void 0;return U`
      <slot
        id=${H(this.resizable?(t=this.controlledEl)==null?void 0:t.id:void 0)}
        @slotchange=${this.onContentSlotChange}
        style="--spectrum-split-view-first-pane-size: ${this.firstPaneSize}"
      ></slot>
      ${this.enoughChildren?U`
            <div
              id="splitter"
              class=${it(r)}
              role="separator"
              aria-controls=${H(this.resizable?(i=this.controlledEl)==null?void 0:i.id:void 0)}
              aria-label=${H(o)}
              aria-orientation=${this.vertical?"horizontal":"vertical"}
              aria-valuenow=${Math.round(parseFloat(this.firstPaneSize)/this.viewSize*100)}
              tabindex=${H(this.resizable?"0":void 0)}
              @keydown=${this.onKeydown}
              ${fs({start:["pointerdown",this.onPointerdown],streamInside:["pointermove",this.onPointermove],end:[["pointerup","pointercancel","pointerleave"],this.onPointerup]})}
            >
              ${this.resizable?U`
                    <div id="gripper"></div>
                  `:W}
            </div>
          `:W}
    `}onContentSlotChange(t){this.controlledEl&&this.controlledElIDApplied&&(this.controlledEl.removeAttribute("id"),this.controlledElIDApplied=!1),this.controlledEl=t.target.assignedElements()[0],this.controlledEl&&!this.controlledEl.id&&(this.controlledEl.id=`${this.tagName.toLowerCase()}-${ms()}`,this.controlledElIDApplied=!0),this.enoughChildren=this.children.length>1,this.checkResize()}onPointerdown(t){if(!this.resizable||t.button&&t.button!==0){t.preventDefault();return}this.splitter.setPointerCapture(t.pointerId),this.offset=this.getOffset()}onPointermove(t){t.preventDefault();let i=this.vertical||this.dir==="ltr"?this.getPosition(t)-this.offset:this.offset-this.getPosition(t);this.collapsible&&i<this.minPos-vs&&(i=0),this.collapsible&&i>this.maxPos+vs&&(i=this.viewSize-this.splitterSize),this.updatePosition(i)}onPointerup(t){this.splitter.releasePointerCapture(t.pointerId)}getOffset(){this.rect||(this.rect=this.getBoundingClientRect());let t=this.dir==="ltr"?this.rect.left:this.rect.right;return this.vertical?this.rect.top:t}getPosition(t){return this.vertical?t.clientY:t.clientX}movePosition(t,i){t.preventDefault(),this.splitterPos!==void 0&&this.updatePosition(this.splitterPos+i)}onKeydown(t){if(!this.resizable)return;let i=0,r=getComputedStyle(this).direction==="ltr"||this.vertical;switch(t.key){case"Home":t.preventDefault(),this.updatePosition(this.collapsible?0:this.minPos);return;case"End":t.preventDefault(),this.updatePosition(this.collapsible?this.viewSize-this.splitterSize:this.maxPos);return;case"ArrowLeft":i=r?-1:1;break;case"ArrowRight":i=r?1:-1;break;case"ArrowUp":i=this.vertical?-1:1;break;case"ArrowDown":i=this.vertical?1:-1;break;case"PageUp":i=this.vertical?-1:1;break;case"PageDown":i=this.vertical?1:-1;break}if(i!==0){let o=t.key.startsWith("Page")?cl:ll;this.movePosition(t,o*i)}}async checkResize(){if(this.enoughChildren&&(this.updateMinMax(),this.splitterPos===void 0)){let t=await this.calcStartPos();this.updatePosition(t)}}updateMinMax(){this.viewSize=this.vertical?this.offsetHeight:this.offsetWidth,this.minPos=Math.max(this.primaryMin,this.viewSize-this.secondaryMax),this.maxPos=Math.min(this.primaryMax,this.viewSize-Math.max(this.secondaryMin,this.splitterSize))}updatePosition(t){let i=this.getLimitedPosition(t);this.collapsible&&t<=0&&(i=0),this.collapsible&&t>this.maxPos&&t>=this.viewSize-this.splitterSize&&(i=this.viewSize-this.splitterSize),i!==this.splitterPos&&(this.splitterPos=i,this.dispatchChangeEvent())}getLimitedPosition(t){return t<=this.minPos?this.minPos:t>=this.maxPos?this.maxPos:Math.max(this.minPos,Math.min(this.maxPos,t))}async calcStartPos(){if(this.primarySize!==void 0&&/^\d+(px)?$/.test(this.primarySize))return parseInt(this.primarySize,10);if(this.primarySize!==void 0&&/^\d+%$/.test(this.primarySize))return parseInt(this.primarySize,10)*this.viewSize/100;if(this.primarySize==="auto"){this.firstPaneSize="auto";let t=this.paneSlot.assignedNodes({flatten:!0}).find(i=>i instanceof HTMLElement);if(typeof t.updateComplete<"u"&&await t.updateComplete,t){let i=window.getComputedStyle(t).getPropertyValue(this.vertical?"height":"width"),r=parseFloat(i);if(!isNaN(r))return this.getLimitedPosition(Math.ceil(r))}}return this.viewSize/2}dispatchChangeEvent(){let t=new Event("change",{bubbles:!0,composed:!0});this.dispatchEvent(t)}willUpdate(t){(!this.hasUpdated||t.has("primarySize"))&&(this.splitterPos=void 0,this.checkResize()),t.has("splitterPos")&&this.splitterPos!==void 0&&this.enoughChildren&&(this.firstPaneSize=`${Math.round(this.splitterPos)}px`)}};dt([Z()],rt.prototype,"controlledEl",2),dt([v({type:Boolean,reflect:!0})],rt.prototype,"vertical",2),dt([v({type:Boolean,reflect:!0})],rt.prototype,"resizable",2),dt([v({type:Boolean,reflect:!0})],rt.prototype,"collapsible",2),dt([v({type:Number,attribute:"primary-min"})],rt.prototype,"primaryMin",2),dt([v({type:Number,attribute:"primary-max"})],rt.prototype,"primaryMax",2),dt([v({type:String,attribute:"primary-size"})],rt.prototype,"primarySize",2),dt([v({type:Number,attribute:"secondary-min"})],rt.prototype,"secondaryMin",2),dt([v({type:Number,attribute:"secondary-max"})],rt.prototype,"secondaryMax",2),dt([v({type:Number,reflect:!0,attribute:"splitter-pos"})],rt.prototype,"splitterPos",2),dt([v({type:String,attribute:!1})],rt.prototype,"firstPaneSize",2),dt([v()],rt.prototype,"label",2),dt([v({type:Boolean,attribute:!1})],rt.prototype,"enoughChildren",2),dt([v({type:Number})],rt.prototype,"viewSize",2),dt([G("slot")],rt.prototype,"paneSlot",2),dt([G("#splitter")],rt.prototype,"splitter",2);as("sp-split-view",rt);function bs(e,t,i){return(t=hl(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function hl(e){var t=ul(e,"string");return typeof t=="symbol"?t:t+""}function ul(e,t){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Lr=class extends HTMLElement{static get observedAttributes(){return["value","max"]}constructor(){super(),bs(this,"_initialized",!1),bs(this,"_resetTimer",null),this.attachShadow({mode:"open"})}connectedCallback(){this._initialized||(this.setup(),this._initialized=!0,this.updateValue(this.value))}setup(){let t=document.createElement("style");t.textContent=`
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
        }`;let i=document.createElement("span");i.classList.add("numbers"),i.setAttribute("aria-hidden","true"),this.shadowRoot.append(t,i),this.wrapper=i,this.rebuildNumbers()}rebuildNumbers(){this.wrapper.innerHTML="";let t=this.max;for(let r=0;r<=t;r++){let o=document.createElement("span");o.textContent=String(r),this.wrapper.appendChild(o)}let i=document.createElement("span");i.textContent="".concat(t,"+"),this.wrapper.appendChild(i),this._initialized&&this.updateValue(this.value)}attributeChangedCallback(t,i,r){if(r!==i&&this._initialized)if(t==="value"){let o=parseInt(i??"0",10)||0,n=parseInt(r??"0",10)||0;this.applyChangeState(o,n),this.updateValue(n)}else t==="max"&&this.rebuildNumbers()}updateValue(t){let i=this.max,r=t>i?i+1:Math.max(0,t),o=this.wrapper.getBoundingClientRect().height||16;this.wrapper.style.transform="translateY(-".concat(r*o,"px)");let n=t>i?"".concat(i,"+"):"".concat(t);this.setAttribute("aria-label",n)}clearResetTimer(){this._resetTimer!==null&&(clearTimeout(this._resetTimer),this._resetTimer=null)}scheduleResetChange(){this.clearResetTimer();let t=3e3;this._resetTimer=window.setTimeout(()=>{this.removeAttribute("data-change"),this._resetTimer=null},t)}applyChangeState(t,i){i>t?(this.setAttribute("data-change","up"),this.scheduleResetChange()):i<t&&(this.setAttribute("data-change","down"),this.scheduleResetChange())}set value(t){this.value!==t&&(this.setAttribute("value",String(t)),this._initialized&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0})))}get value(){return parseInt(this.getAttribute("value")||"0",10)||0}set max(t){this.setAttribute("max",String(t))}get max(){return parseInt(this.getAttribute("max")||"9",10)||9}};customElements.get("bl-odometer")||customElements.define("bl-odometer",Lr);function ws(e,t,i){return(t=dl(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function dl(e){var t=pl(e,"string");return typeof t=="symbol"?t:t+""}function pl(e,t){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var r=i.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ti=class e extends Event{constructor(t,i){super(e.eventName,{bubbles:!0,composed:!0}),this.index=t,this.item=i}};ws(Ti,"eventName","bl-select");var Ar=class extends HTMLElement{constructor(){super(),ws(this,"handleChildrenChanged",()=>{var t;let i=(t=this.items[this.activeIndex])===null||t===void 0?void 0:t.id;if(this.updateItems(),i){let r=this.items.findIndex(o=>o.id===i);this.activeIndex=r>=0?r:-1}else this.activeIndex=-1;this.updateActiveItem()}),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML='<slot style="border-radius: inherit"></slot>',this.activeIndex=-1,this.items=[],this.inputElement=null,this.slotElement=null,this.observer=null}get activeClass(){return this.getAttribute("active-class")||"active"}connectedCallback(){var t,i;this.setAttribute("role","listbox"),this.tabIndex=-1,this.updateItems(),this.syncActiveIndexFromDataSelected(),this.updateActiveItem();let r=this.getAttribute("for");this.inputElement=r?document.getElementById(r):null,this.inputElement&&(this.inputElement.setAttribute("role","combobox"),this.inputElement.setAttribute("aria-controls",this.id),this.inputElement.setAttribute("aria-expanded","true"),this.inputElement.addEventListener("keydown",this.onKeyDown.bind(this))),this.addEventListener("keydown",this.onKeyDown.bind(this)),this.addEventListener("click",o=>{let n=o.target instanceof Element?o.target.closest("[data-select-list-index]"):null;if(n&&n.hasAttribute("data-select-list-index")){let s=Number(n.getAttribute("data-select-list-index"));this.select(s)}}),this.observer=new MutationObserver(o=>{o.some(n=>n.type==="childList")&&this.handleChildrenChanged(),o.some(n=>n.type==="attributes"&&n.attributeName==="data-selected")&&(this.syncActiveIndexFromDataSelected(),this.updateActiveItem())}),this.observer.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-selected"]}),this.slotElement=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector("slot"),(i=this.slotElement)===null||i===void 0||i.addEventListener("slotchange",this.handleChildrenChanged)}disconnectedCallback(){var t,i;(t=this.observer)===null||t===void 0||t.disconnect(),this.observer=null,(i=this.slotElement)===null||i===void 0||i.removeEventListener("slotchange",this.handleChildrenChanged)}syncActiveIndexFromDataSelected(){let t=this.items.findIndex(i=>i.hasAttribute("data-selected"));t>=0&&(this.activeIndex=t)}updateItems(){let t=["button:not([disabled])","a[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])','[role="option"]'].join(", ");this.items=Array.from(this.querySelectorAll(t)),this.items.forEach((i,r)=>{i.hasAttribute("id")||i.setAttribute("id","".concat(this.id,"-option-").concat(r)),i.setAttribute("data-select-list-index",r.toString()),i.setAttribute("aria-selected","false"),i.setAttribute("role","option"),i.tabIndex=-1})}onKeyDown(t){if(this.items.length){if(t.key==="ArrowDown")t.preventDefault(),this.activeIndex=(this.activeIndex+1)%this.items.length,this.updateActiveItem();else if(t.key==="ArrowUp")t.preventDefault(),this.activeIndex=(this.activeIndex-1+this.items.length)%this.items.length,this.updateActiveItem();else if(t.key==="Enter"&&this.activeIndex>=0){t.preventDefault();let i=this.items[this.activeIndex];i?.click()}}}updateActiveItem(){let t=this.activeClass.split(" ");this.items.forEach((r,o)=>{let n=o===this.activeIndex;t.forEach(s=>{r.classList.toggle(s,n)}),r.setAttribute("aria-selected",n.toString())});let i=this.items[this.activeIndex];i&&this.inputElement?(this.inputElement.setAttribute("aria-activedescendant",i.id),i.scrollIntoView({block:"nearest"})):this.inputElement&&this.inputElement.removeAttribute("aria-activedescendant")}select(t){this.activeIndex=t,this.items.forEach(r=>r.removeAttribute("data-selected"));let i=this.items[t];i&&(i.setAttribute("data-selected",""),this.dispatchEvent(new Ti(t,i)),this.updateActiveItem())}};customElements.get("bl-select-list")||customElements.define("bl-select-list",Ar);var Pi=new Map;function Ri(e){if(!e||(Pi.has(e)&&Di(e),!e.querySelector(".offcanvas")))return;let i=new AbortController;Pi.set(e,i),window.addEventListener("popstate",()=>e?.close(),{signal:i.signal}),window.addEventListener("resize",()=>{let n=e.querySelector(".offcanvas");n&&getComputedStyle(n).position!=="fixed"&&e?.close()},{signal:i.signal});let r=history.pushState;history.pushState=function(){for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];r.apply(history,s),e?.close()};let o=history.replaceState;history.replaceState=function(){for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];o.apply(history,s),e?.close()}}function Di(e){let t=Pi.get(e);t&&(t.abort(),Pi.delete(e))}typeof window<"u"&&(window.blueWeb=window.blueWeb||{},window.blueWeb.modalResponsive={init:Ri,dispose:Di});var Pt=new Map;function fl(e){if(!e)return;Pt.has(e)&&ys(e);let t=e.querySelector('[data-blue-toggle="layout-side"]'),i=e.querySelector(".blue-layout-side"),r=e.querySelector(".blue-layout-side > dialog"),o=e.querySelector(".blue-layout-main > sp-split-view.blue-layout-splitter"),n=e.querySelector(".blue-layout-inspector");if(!t||!i||!r)return;let s=new AbortController,a={toggleLayoutSideEl:t,layoutSideEl:i,modalEl:r,splitterEl:o,inspectorEl:n,controller:s};return Pt.set(e,a),localStorage.getItem("blueLayoutSideShrink")!=null&&(i.classList.add("d-lg-none","w-lg-0"),t.setAttribute("aria-expanded","false")),t.addEventListener("click",()=>ml(e),{signal:s.signal}),o&&n&&(Ri(n),gl(e,a)),Ri(r),i.classList.add("with-transition"),a}function ys(e){let t=Pt.get(e);if(!t)return;let i=t.controller,r=t.modalEl;i.abort(),r&&Di(r),Pt.delete(e)}function ml(e){let t=Pt.get(e);if(!t)return;let i=t.layoutSideEl,r=t.toggleLayoutSideEl;if(!i||!r)return;i.classList.toggle("d-lg-none"),i.classList.toggle("w-lg-0");let o=!i.classList.contains("d-lg-none");r.setAttribute("aria-expanded",o.toString()),o?localStorage.removeItem("blueLayoutSideShrink"):localStorage.setItem("blueLayoutSideShrink","")}function $r(e,t){t<0?e.splitterPos=0:e.maxPos&&t>e.maxPos?e.splitterPos=e.maxPos:e.splitterPos=t}function Cs(e,t){let i=localStorage.getItem("blueLayoutInspectorSize"),r=i?Number.parseInt(i,10):NaN;$r(t,t.viewSize-(Number.isFinite(r)?r:244)),t.resizable=!0,t.dataset.blueInspectorSize=(t.viewSize-t.splitterPos).toString(),e.dataset.blueSplitterEnabled=""}function Sr(e,t){$r(t,t.maxPos||t.viewSize),t.resizable=!1,delete e.dataset.blueSplitterEnabled}function gl(e,t){let i=t.splitterEl,r=t.inspectorEl,o=t.controller;if(!i||!r||!o)return;localStorage.getItem("blueLayoutInspectorEnabled")!=null&&getComputedStyle(r).position!=="fixed"?Cs(e,i):Sr(e,i),Ee(e),window.addEventListener("resize",()=>{i&&(r&&getComputedStyle(r).display==="none"||!i.resizable?(Sr(e,i),Ee(e)):i.resizable&&i.dataset.blueInspectorSize&&($r(i,i.viewSize-parseInt(i.dataset.blueInspectorSize)),Ee(e)))},{signal:o.signal}),i.addEventListener("change",s=>{let a=s.target,c=a.viewSize-a.splitterPos;c&&(c=Math.round(c),a.dataset.blueInspectorSize=c.toString(),localStorage.setItem("blueLayoutInspectorSize",c.toString()))},{signal:o.signal}),r.addEventListener("close",()=>{Ee(e)},{signal:o.signal})}function Ee(e){let t=typeof e=="string"?document.querySelector(e):e;if(!t)return;let i=Pt.get(t);if(!(i!=null&&i.splitterEl)||!i.inspectorEl)return;let r=i.splitterEl,o=i.inspectorEl,n=getComputedStyle(o).position==="fixed"?o.open:r.resizable,s=t.dataset.blueInspectorOpen;n?t.dataset.blueInspectorOpen="":delete t.dataset.blueInspectorOpen,s!==t.dataset.blueInspectorOpen&&t.dispatchEvent(new Event("blue-inspector-change"))}function xs(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"show-modal",i=typeof e=="string"?document.querySelector(e):e;if(!i)return;let r=Pt.get(i);if(!(r!=null&&r.splitterEl)||!r.inspectorEl)return;let o=r.splitterEl,n=r.inspectorEl;getComputedStyle(n).position==="fixed"?t==="show"?n.show():n.showModal():(Cs(i,o),localStorage.setItem("blueLayoutInspectorEnabled","")),Ee(i)}function Es(e){let t=typeof e=="string"?document.querySelector(e):e;if(!t)return;let i=Pt.get(t);if(!(i!=null&&i.splitterEl)||!i.inspectorEl)return;let r=i.splitterEl,o=i.inspectorEl;getComputedStyle(o).position==="fixed"?o.close():(Sr(t,r),localStorage.removeItem("blueLayoutInspectorEnabled")),Ee(t)}function vl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"show-modal",i=typeof e=="string"?document.querySelector(e):e;if(!i)return;let r=Pt.get(i);if(!(r!=null&&r.splitterEl)||!r.inspectorEl)return;let o=r.splitterEl,n=r.inspectorEl;(getComputedStyle(n).position==="fixed"?n.open:o.resizable)?Es(e):xs(e,t)}typeof window<"u"&&(window.blueWeb=window.blueWeb||{},window.blueWeb.layout={init:fl,dispose:ys,instances:Pt,toggleInspector:vl,openInspector:xs,closeInspector:Es});var h1=Fs(zs(),1),Oi=!1,Fi=!1;function u1(e){Fi||qr(e,"web")}function d1(e){Oi||Ur(e)}function p1(e){Oi||Ur(e)}function f1(e){Fi||qr(e,"wasm")}function m1(e){Oi||Ur(e)}function g1(e){Fi||qr(e,"server")}function qr(e,t){typeof e.addEventListener=="function"&&t==="web"&&(customElements.define("page-script",Ye),e.addEventListener("enhancedload",Xr)),e.registerCustomEventType("washow",{browserEventName:"wa-show",createEventArgs:()=>null}),e.registerCustomEventType("wahide",{browserEventName:"wa-hide",createEventArgs:()=>null}),e.registerCustomEventType("blselect",{browserEventName:"bl-select",createEventArgs:({index:i,item:r})=>({index:i,value:r.dataset.value||r.innerText||"",description:r.dataset.description||null})}),e.registerCustomEventType("popovertoggle",{browserEventName:"toggle",createEventArgs:({newState:i})=>({newState:i==="open"?1:0})}),Fi=!0}function Ur(e){Oi=!0}function bl(e,t,i){let r=()=>e.invokeMethodAsync(t,i);document.startViewTransition?document.startViewTransition(r):r()}window.blueBlazor=window.blueBlazor||{};window.blueBlazor.startViewTransition=bl;export{Ti as BlSelectEvent,Lr as Odometer,Ar as SelectList,g1 as afterServerStarted,qr as afterStarted,f1 as afterWebAssemblyStarted,u1 as afterWebStarted,m1 as beforeServerStart,Ur as beforeStart,p1 as beforeWebAssemblyStart,d1 as beforeWebStart,Es as closeInspector,ys as dispose,fl as init,xs as openInspector,vl as toggleInspector};
//# sourceMappingURL=BlueBlazor.lib.module.js.map
