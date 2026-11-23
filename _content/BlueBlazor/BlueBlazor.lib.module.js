var om=Object.create;var Mi=Object.defineProperty;var nm=Object.getOwnPropertyDescriptor;var im=Object.getOwnPropertyNames;var sm=Object.getPrototypeOf,am=Object.prototype.hasOwnProperty;var wt=(t,e)=>()=>(t&&(e=t(t=0)),e);var Ae=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),fl=(t,e)=>{for(var r in e)Mi(t,r,{get:e[r],enumerable:!0})},lm=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of im(e))!am.call(t,n)&&n!==r&&Mi(t,n,{get:()=>e[n],enumerable:!(o=nm(e,n))||o.enumerable});return t};var cm=(t,e,r)=>(r=t!=null?om(sm(t)):{},lm(e||!t||!t.__esModule?Mi(r,"default",{value:t,enumerable:!0}):r,t));function ot(t,e,r,o){return t.addEventListener(e,r,o),()=>t.removeEventListener(e,r,o)}function Tr(t){let e="nativeEvent"in t?t.nativeEvent:t;return e.isComposing===!0||e.keyCode===229}var te=wt(()=>{});function Sn(){return St&&(/iP(hone|ad|od)/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)}function kn(t){return!!t&&St&&getComputedStyle(t).direction==="rtl"}var St,ue=wt(()=>{St=typeof window<"u"&&typeof document<"u"});function ze(t,e,r){let o=t.style.getPropertyValue(e),n=t.style.getPropertyPriority(e);t.style.setProperty(e,r);let i=t.style.getPropertyValue(e);return()=>{t.style.getPropertyValue(e)===i&&(o?t.style.setProperty(e,o,n):t.style.removeProperty(e))}}function gd(t){if(ks.has(t))return ks.get(t);let e;for(let o=t;o&&!e;o=o.defaultView?.frameElement?.ownerDocument)e=o.head?.querySelector('meta[property="csp-nonce"]');let r=e?e.nonce||e.getAttribute("nonce")||"":null;return ks.set(t,r),r}function ee(t,e,r){if(!t.head)return;let o=t.defaultView;gd(t)===""&&o&&"adoptedStyleSheets"in t?e0(t,o,e,r):t0(t,e,r)}function t0(t,e,r){let o=t.getElementById(e);if(o){if(Es.get(o)===r)return;o.textContent!==r&&(o.textContent=r),Es.set(o,r);return}let n=t.createElement("style");n.id=e;let i=gd(t);i&&(n.nonce=i),n.textContent=r,Es.set(n,r);let s=t.head.querySelectorAll(':scope > style[id^="ui-sdk-"]');s.length?s[s.length-1].after(n):t.head.prepend(n)}function e0(t,e,r,o){let n=md().get(t);n||md().set(t,n=new Map);let i=n.get(r);i||n.set(r,i={sheet:new e.CSSStyleSheet,css:""}),i.css!==o&&(i.sheet.replaceSync(o),i.css=o),t.adoptedStyleSheets.includes(i.sheet)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,i.sheet])}function Pn(t){ee(t,"ui-sdk-hidden",'@layer ui-sdk { :where([data-slot][hidden]:not([hidden="until-found"])) { display: none !important } }')}function $n(t){typeof window>"u"||(performance.getEntriesByType("paint").length?vo?vo.push(t):(vo=[t],(window.requestIdleCallback??setTimeout)(()=>{let e=vo;vo=void 0,e.forEach(r=>r())})):t())}function vd(t){let e,r=requestAnimationFrame(()=>{e=setTimeout(t)});return()=>{cancelAnimationFrame(r),clearTimeout(e)}}var md,ks,Es,vo,De=wt(()=>{md=()=>globalThis[Symbol.for("ui-sdk.styles@1")]??=new WeakMap,ks=new WeakMap;Es=new WeakMap});function df(t,e=!1){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}var ff=wt(()=>{});function Wn(t){return t.towardMore?!t.atLargest&&t.expandOnScroll?"sheet":"scroll":t.scrollAtStart?"sheet":"scroll"}var qs=wt(()=>{});function W0(t,e){return t*e/(1-e)}function js(t){let{extent:e,velocity:r,candidates:o}=t;if(Math.abs(r)<t.minFlingVelocity)return ke(o,e);let n=e+W0(r,t.rate),i=q0(o,e,Math.sign(r)),s=ke(o,n);return(r>0?o[s]<=e+.5:o[s]>=e-.5)&&i!==-1&&(s=i),!t.skipSnapPoints&&i!==-1&&(s=r>0?Math.min(s,i):Math.max(s,i)),s}function ke(t,e){let r=0;for(let o=1;o<t.length;o++)Math.abs(t[o]-e)<Math.abs(t[r]-e)&&(r=o);return r}function q0(t,e,r){if(r>0)return t.findIndex(o=>o>e+.5);for(let o=t.length-1;o>=0;o--)if(t[o]<e-.5)return o;return-1}var qn=wt(()=>{});function Ks(t,e,r=Us){return t<=0?0:(1-1/(t*r/e+1))*e}function jn(t,e,r=Us){return t<=0?0:(1/(1-Math.min(t/e,.999999))-1)*e/r}function wf(t,e,r=Us){if(t<=0)return 1;let o=t*r/e+1;return r/(o*o)}var Us,yf=wt(()=>{Us=.55});function Rr(t,e,r,o){let n=2*Math.PI/(t*1e3),i=e;return Math.abs(i-1)<1e-6?U0(n,r,o):i<1?j0(n,i,r,o):K0(n,i,r,o)}function j0(t,e,r,o){let n=e*t,i=t*Math.sqrt(1-e*e),s=(o+n*r)/i;return{position:a=>Math.exp(-n*a)*(r*Math.cos(i*a)+s*Math.sin(i*a)),velocity:a=>{let l=Math.cos(i*a),c=Math.sin(i*a);return Math.exp(-n*a)*((s*i-n*r)*l-(r*i+n*s)*c)}}}function U0(t,e,r){let o=r+t*e;return{position:n=>Math.exp(-t*n)*(e+o*n),velocity:n=>Math.exp(-t*n)*(o-t*(e+o*n))}}function K0(t,e,r,o){let n=Math.sqrt(e*e-1),i=-t*(e+n),s=-t*(e-n),a=(o-i*r)/(s-i),l=r-a;return{position:c=>a*Math.exp(s*c)+l*Math.exp(i*c),velocity:c=>a*s*Math.exp(s*c)+l*i*Math.exp(i*c)}}function Un(t,{positionTolerance:e=.5,velocityTolerance:r=.02,step:o=1,limit:n=1e4}={}){for(let i=0;i<=n;i+=o)if(Math.abs(t.position(i))<=e&&Math.abs(t.velocity(i))<=r)return i;return n}function Kn(t,e,r,o,n=1e3/120){let i=r-e;if(Math.abs(i)<1e-6)return"linear";let s=[];for(let a=0;a<o;a+=n)s.push(Y0(1+t.position(a)/i));return s.push("1"),`linear(${s.join(", ")})`}function Y0(t){return String(Math.round(t*1e4)/1e4)}var Yn=wt(()=>{});function Dt(t,e){return{phase:"idle",extent:t,restingIndex:e}}function Xn(t,e,r){switch(e.type){case"down":return G0(t,e,r);case"move":return Q0(t,e,r);case"up":return tv(t,e,r);case"settled":return ev(t);case"rest":return rv(t,e,r);case"snap-to":return ov(t,e,r);case"nudge":return nv(t,e,r);case"close":return or(t,r,{targetIndex:-1,motion:Ys(t,e.time),time:e.time,reason:"imperative",outcome:{type:"dismiss",reason:"imperative"}})}}function Ys(t,e){if(t.phase!=="settling")return{extent:t.extent,velocity:0};let r=Rr(t.response,t.dampingRatio,t.from-t.to,t.velocity),o=Math.max(0,e-t.startTime);return{extent:t.to+r.position(o),velocity:r.velocity(o)}}function G0(t,e,r){let o=e.pointer==="mouse"?r.physics.mouseSlop:r.physics.touchSlop;if(t.phase==="idle"&&t.restingIndex>=0)return{state:{...t,phase:"pending",originX:e.x,originY:e.y,slop:o},effects:Gt};if(t.phase!=="settling")return{state:t,effects:Gt};let{extent:n}=Ys(t,e.time);return{state:{phase:"dragging",extent:n,restingIndex:t.restingIndex,anchorY:e.y,anchorExtent:iv(n,r),lastY:e.y,isScrollingContent:!1},effects:[{type:"move",extent:n}]}}function Q0(t,e,r){return t.phase==="pending"?Z0(t,e,r):t.phase==="scrolling"&&r.contentScroll?r.contentScroll.move(t,e):t.phase==="dragging"?J0(t,e,r):{state:t,effects:Gt}}function Z0(t,e,r){let o=e.x-t.originX,n=e.y-t.originY;if(Math.max(Math.abs(o),Math.abs(n))<t.slop)return{state:t,effects:Gt};if(Math.abs(o)>Math.abs(n))return{state:Dt(t.extent,t.restingIndex),effects:Gt};let i=r.contentScroll?.claim(t,e,n<0,r);if(i)return{state:i,effects:Gt};let s={...Xs(t,t.originY+Math.sign(n)*t.slop),lastY:e.y},a=xf(s.anchorExtent+(s.anchorY-e.y),r);return{state:{...s,extent:a},effects:[{type:"move",extent:a}]}}function Xs(t,e){return{phase:"dragging",extent:t.extent,restingIndex:t.restingIndex,anchorY:e,anchorExtent:t.extent,lastY:e,isScrollingContent:!1}}function J0(t,e,r){let o=t.lastY-e.y,n=t.isScrollingContent?{anchorY:t.lastY,anchorExtent:t.extent}:t,i=n.anchorExtent+(n.anchorY-e.y),s=r.contentScroll?.drag(t,e,o,i,r);if(s)return s;let a=xf(i,r);return{state:{...t,anchorY:n.anchorY,anchorExtent:n.anchorExtent,extent:a,lastY:e.y,isScrollingContent:!1},effects:[{type:"move",extent:a}]}}function tv(t,e,r){if(t.phase==="pending"||t.phase==="scrolling")return{state:Dt(t.extent,t.restingIndex),effects:Gt};if(t.phase!=="dragging")return{state:t,effects:Gt};let o=r.contentScroll?.release(t,e,r);if(o)return o;let n=-e.velocity*sv(t.extent,r),i=[0,...Cf(r)],s=r.physics,a={candidates:i,rate:s.projectionRate,minFlingVelocity:s.minFlingVelocity,skipSnapPoints:s.skipSnapPoints},l=js({...a,extent:t.extent,velocity:n}),c={motion:{extent:t.extent,velocity:n},time:e.time,reason:"swipe"};if(r.dismissible)return l>0?or(t,r,{...c,targetIndex:l-1}):or(t,r,{...c,targetIndex:-1,outcome:{type:"dismiss",reason:"swipe"}});let h=t.anchorExtent+(t.anchorY-t.lastY),m=js({...a,extent:h,velocity:-e.velocity})===0,u=Math.max(0,l-1);return m?or(t,r,{...c,targetIndex:0,outcome:{type:"attempt-dismiss",reason:"swipe"}}):or(t,r,{...c,targetIndex:u})}function ev(t){return t.phase!=="settling"?{state:t,effects:Gt}:{state:Dt(t.to,t.targetIndex),effects:Gt}}function rv(t,e,r){if(e.extent<1&&r.dismissible)return{state:Dt(0,-1),effects:[{type:"dismiss",reason:"swipe"}]};let o=ke(Cf(r),e.extent),n=o===t.restingIndex?[]:[{type:"snap",id:r.snapPoints[o].id,reason:"swipe"}];return{state:Dt(e.extent,o),effects:n}}function ov(t,e,r){let o=r.snapPoints.findIndex(n=>n.id===e.id);return o===-1||t.phase==="dragging"?{state:t,effects:Gt}:or(t,r,{targetIndex:o,motion:Ys(t,e.time),time:e.time,reason:e.reason})}function nv(t,e,r){return t.phase!=="idle"||t.restingIndex<0?{state:t,effects:Gt}:or(t,r,{targetIndex:t.restingIndex,motion:{extent:t.extent,velocity:-X0},time:e.time,reason:"imperative"})}function or(t,e,r){let{targetIndex:o,motion:n,time:i,reason:s}=r,a=e.physics,l=o<0?0:e.snapPoints[o].extent,h=Math.abs(n.velocity)>=a.minFlingVelocity?a.momentumDampingRatio:a.dampingRatio,m={phase:"settling",extent:n.extent,restingIndex:t.restingIndex,targetIndex:o,from:n.extent,to:l,velocity:n.velocity,response:a.response,dampingRatio:h,startTime:i},u=[{type:"settle",from:n.extent,to:l,velocity:n.velocity,response:a.response,dampingRatio:h}];return o>=0&&o!==t.restingIndex&&u.push({type:"snap",id:e.snapPoints[o].id,reason:s}),r.outcome&&u.push(r.outcome),{state:m,effects:u}}function xf(t,e){let r=Fr(e),{coefficient:o,dimension:n}=Gs(e);if(t>r)return r+Ks(t-r,n,o);if(e.dismissible)return Math.max(0,t);let i=e.snapPoints[0].extent;return t<i?i-Ks(i-t,n,o):t}function iv(t,e){let r=Fr(e),{coefficient:o,dimension:n}=Gs(e);if(t>r)return r+jn(t-r,n,o);let i=e.snapPoints[0].extent;return!e.dismissible&&t<i?i-jn(i-t,n,o):t}function Gs(t){return{coefficient:t.physics.rubberBand,dimension:t.physics.rubberBandDimension??t.dimension}}function sv(t,e){let{coefficient:r,dimension:o}=Gs(e),n=Fr(e),i=e.snapPoints[0].extent,s=t>n?t-n:!e.dismissible&&t<i?i-t:0;return s<=0?1:wf(jn(s,o,r),o,r)}function Fr(t){return t.snapPoints[t.snapPoints.length-1].extent}function Cf(t){return t.snapPoints.map(e=>e.extent)}var Gt,X0,Gn=wt(()=>{qn();yf();Yn();Gt=[],X0=1});var Sf,kf,Ef=wt(()=>{qs();Gn();Sf=[],kf={claim(t,e,r,o){if(!(!e.scroll||Wn({towardMore:r,scrollAtStart:e.scroll.atStart,atLargest:t.extent>=Fr(o)-.5,expandOnScroll:o.expandOnScroll})!=="scroll"))return{phase:"scrolling",extent:t.extent,restingIndex:t.restingIndex,lastY:e.y}},move(t,e){return e.y>t.lastY&&e.scroll?.atStart?{state:Xs(t,e.y),effects:Sf}:{state:{...t,lastY:e.y},effects:Sf}},drag(t,e,r,o,n){let i=e.scroll;if(!i)return;if(t.isScrollingContent&&(r>0?!i.atEnd:!i.atStart)){let c=[{type:"scroll",delta:r}];return{state:{...t,lastY:e.y},effects:c}}let s=Fr(n);if(!(r>0&&o>s&&t.extent<=s&&!i.atEnd))return;let a=[{type:"scroll",delta:o-s}];return t.extent!==s&&a.unshift({type:"move",extent:s}),{state:{...t,extent:s,anchorY:e.y,anchorExtent:s,lastY:e.y,isScrollingContent:!0},effects:a}},release(t,e,r){if(!t.isScrollingContent)return;let o=r.snapPoints.length-1,n=[{type:"fling-scroll",velocity:-e.velocity}];return t.restingIndex!==o&&n.push({type:"snap",id:r.snapPoints[o].id,reason:"swipe"}),{state:Dt(t.extent,o),effects:n}}}});var Qn,Af=wt(()=>{Qn={ios:{response:.34,dampingRatio:1,momentumDampingRatio:.88,projectionRate:.99,minFlingVelocity:.5,skipSnapPoints:!0,rubberBand:1.9,rubberBandDimension:24,touchSlop:8,mouseSlop:4,dim:.2,velocityHorizon:70}}});function av(t){return String(t)}function lv(t,e){if(typeof t=="number")return t<=1?t*e.container:t;if(t==="content")return e.content;let r=parseFloat(t);return t.endsWith("rem")?r*e.rootFontSize:t.endsWith("%")?r/100*e.container:t.endsWith("px")?r:NaN}function Lf(t,e){let r=t.map((n,i)=>({value:n,index:i,extent:Math.min(lv(n,e),e.content)})).filter(n=>n.extent>0).sort((n,i)=>n.extent-i.extent||n.index-i.index),o=[];for(let n of r){let i=av(n.value),s=o[o.length-1];if(s&&n.extent-s.extent<1){s.ids.push(i),n.index>s.index&&Object.assign(s,{id:i,value:n.value,index:n.index}),s.extent=Math.max(s.extent,n.extent);continue}o.push({id:i,value:n.value,extent:Math.round(n.extent*100)/100,ids:[i],index:n.index})}return o.map(({index:n,...i})=>i)}function nr(t,e){if(e==null)return-1;let r=String(e);return t.findIndex(o=>o.ids.includes(r))}function Mf(t,e,r){let o=nr(t,r),n=nr(t,e);return o>=0&&n>=0&&n<=o}var Pf=wt(()=>{});function cv(t,e,r){let o=Math.max(0,e.layoutHeight-e.offsetTop-e.height);return Math.abs(e.height-e.layoutHeight)<=1&&$f.set(t,e.scale),r>0?Math.round(Math.min(r,o)):e.scale>($f.get(t)??1)+.01?0:Math.round(o)}function Jn(t,e){let r=t.ownerDocument.defaultView,o=r?.visualViewport;if(!r||!o)return()=>{};let n=null,i=l=>{let c=cv(r,l,0),h=n!==null&&c!==n;n=c,h&&e?.before(),t.style.setProperty("--keyboard-inset",`${c}px`),t.style.setProperty("--visual-viewport-height",`${Math.round(l.height)}px`),c>0?t.setAttribute("data-keyboard",""):t.removeAttribute("data-keyboard"),h&&e?.after()},s=Zn.get(r);i(s&&s.layoutHeight-s.offsetTop-s.height<=1?s:Zs(r,o));let a=dv(r,o,i);return()=>{a(),t.style.removeProperty("--keyboard-inset"),t.style.removeProperty("--visual-viewport-height"),t.removeAttribute("data-keyboard")}}function Zs(t,e){return{width:e.width,layoutHeight:t.innerHeight,height:e.height,offsetTop:e.offsetTop,scale:e.scale}}function uv(t,e){let r=new Set,o=s=>{let a=Zs(t,e);for(let l of r)l(a,s)};e.addEventListener("resize",o),e.addEventListener("scroll",o);let i={followers:r,stop:()=>{e.removeEventListener("resize",o),e.removeEventListener("scroll",o),Qs.delete(e)}};return Qs.set(e,i),i}function dv(t,e,r){let{followers:o,stop:n}=Qs.get(e)??uv(t,e);return o.add(r),()=>{o.delete(r)&&!o.size&&n()}}function Tf(t){let e=t?.visualViewport;!t||!e||Zn.has(t)||(Zn.set(t,Zs(t,e)),setTimeout(()=>Zn.delete(t)))}var $f,Qs,Zn,ti=wt(()=>{$f=new WeakMap;Qs=new WeakMap;Zn=new WeakMap});function Js(t,e){return df(t,t==="start"||t==="end"?kn(e):!1)}function ir(t,e,r,o){let n=Ee(t);return o.y=(n?r:e)*Of(t),o.x=n?e:r,o}function yo(t,e){let r=`${Math.round(e*Of(t)*100)/100}px`;return Ee(t)?`0 ${r}`:`${r} 0`}function _f(t,e){return Ee(e)?t.offsetHeight:t.offsetWidth}function zf(t,e,r){let o=ta(t,e,r);if(!o)return null;let{start:n,end:i}=pv(o,r);return{atStart:n,atEnd:i,area:o}}function ta(t,e,r){let o=e.ownerDocument.defaultView;if(!o||!(t instanceof Element)||!e.contains(t))return null;let n=Ee(r);for(let i=t;i&&i!==e.parentElement;i=i.parentElement){if(!(n?i.scrollHeight>i.clientHeight+1:i.scrollWidth>i.clientWidth+1)||!(i instanceof HTMLElement))continue;let a=n?o.getComputedStyle(i).overflowY:o.getComputedStyle(i).overflowX;if(/auto|scroll/.test(a))return i}return null}function fv(t,e){if(Ee(e)){let i=t.scrollHeight-t.clientHeight;return{position:e==="bottom"?t.scrollTop:i-t.scrollTop,max:i}}let r=t.scrollWidth-t.clientWidth,o=Math.abs(t.scrollLeft),n=kn(t)?r-o:o;return{position:e==="right"?n:r-n,max:r}}function pv(t,e){let{position:r,max:o}=fv(t,e);return{start:r<=.5,end:r>=o-1}}function ea(t,e,r){if(Ee(e))t.scrollTop+=e==="bottom"?r:-r;else{let o=e==="right"?r:-r;t.scrollLeft+=kn(t)?-o:o}}var Ee,Of,ra=wt(()=>{ue();ff();Ee=t=>t==="bottom"||t==="top",Of=t=>t==="bottom"||t==="right"?1:-1});function ri(t,e){t.requestAnimationFrame(()=>t.requestAnimationFrame(e))}function oi(t){return t==="bottom"?-Ne:-32}function ni(t,e){let r=[];for(let o=0;o<t.duration;o+=1e3/60)r.push(e(t.extentAt(o)));return r.push(e(t.extentAt(t.duration))),r}function sr(t,e){let r=Object.entries(e).map(([o,n])=>ze(t,o,n));return()=>r.forEach(o=>o())}var ei,Ne,Df,If,ii=wt(()=>{De();ei=1e3;Ne=120;Df=200,If=150});function Rf(t,e,r=-1){let o=r<0?0:e[r],n=r<0?e[0]:e[r+1];return n===void 0||n<=o?t>o?1:0:oa((t-o)/(n-o))}function Ff(t,e){let r=e[e.length-1],o=e.length>1?e[e.length-2]:0;return r<=o?t>=r?1:0:oa((t-o)/(r-o))}function Nf(t,e){let r=e[e.length-1];return r>0?oa(t/r):0}var oa,Bf=wt(()=>{oa=t=>Math.max(0,Math.min(1,t))});function jf(t){let e=t.defaultView?.CSS;if(!(ia.has(t)||!e?.registerProperty)){ia.add(t);for(let r of na)try{e.registerProperty({name:r,syntax:"<number>",inherits:!1,initialValue:"0"})}catch{}}}function Uf(){typeof document<"u"&&!ia.has(document)&&$n(()=>jf(document))}function Kf(t){jf(t.sheet.ownerDocument);let e=[1],r=-1,o=[],n=new Map,i={dim:0,progress:0,expand:0},s;function a(y){e=y.snapExtents.length?y.snapExtents:[1],r=y.undimmedIndex}function l(y,$=i){return $.dim=si(Rf(y,e,r)),$.progress=si(Nf(y,e)),$.expand=si(Ff(y,e)),$}let c=!1;function h(y,{rest:$=!1}={}){if(!c){S(),l(y),m(i.dim),g(t.sheet,i),f(i.progress);for(let M of t.outlets())g(M.el,i),M.keyframes&&d(M,i.expand,$);$&&t.themeColor?.(i.dim)}}function m(y){let $=t.backdrop();$&&($.style.opacity=String(y));let M=u();M&&(M.currentTime=y*1e3)}function u(){return!t.dimmed||s||(s=t.dimmed.animate({opacity:[0,1]},{...Hf,duration:1e3,fill:"both"}),s.pause(),s.currentTime=0),s}function f(y){let $=t.ancestors();for(let M=0;M<$.length;M++)$[M].style.setProperty("--drawer-stack",String(M+y))}function g(y,{dim:$,progress:M,expand:V}){y.style.setProperty("--drawer-progress",String(M)),y.style.setProperty("--drawer-dim",String($)),y.style.setProperty("--drawer-expand",String(V))}function d(y,$,M){let V=n.get(y.el);V||(V=y.el.animate(Wf(y.keyframes),{duration:1e3,fill:"both"}),V.pause(),n.set(y.el,V)),V.currentTime=$*1e3,M&&(V.commitStyles?.(),V.cancel(),n.delete(y.el))}function w(y){if(c)return;if(S(),_(),!xo())return h(y.type==="settle"?y.extentAt(y.duration):0,{rest:!0});let $=C(y);u();let M=y.type==="settle"?{duration:Math.max(1,y.duration),fill:"both"}:{timeline:y.timeline,fill:"both"},V=(Z,z,L,O)=>{let E=Z.animate(z,{...M,...O,easing:hv(L)});y.type==="settle"&&(E.startTime=y.startTime),o.push(E)},q=t.backdrop();q&&V(q,{opacity:[0,1]},$.dim),t.dimmed&&V(t.dimmed,{opacity:[0,1]},$.dim,Hf),p(t.sheet,$,V),t.ancestors().forEach((Z,z)=>V(Z,{"--drawer-stack":[z,z+1]},$.progress));for(let Z of t.outlets())p(Z.el,$,V),Z.keyframes&&V(Z.el,Wf(Z.keyframes),$.expand);if(y.type!=="settle")return;let G=y.extentAt(y.duration);v(G);let Y=o;Y[0]&&(Y[0].onfinish=()=>o===Y&&S())}function p(y,$,M){M(y,{"--drawer-progress":[0,1]},$.progress),M(y,{"--drawer-dim":[0,1]},$.dim),M(y,{"--drawer-expand":[0,1]},$.expand)}function v(y){let $=l(y,{dim:0,progress:0,expand:0});m($.dim),g(t.sheet,$),f($.progress);for(let M of t.outlets())if(g(M.el,$),!!M.keyframes)for(let[V,q]of Object.entries(M.keyframes)){let G=q[$.expand>=.5?q.length-1:0];M.el.style.setProperty(qf(V),String(G))}t.themeColor?.($.dim)}function C(y){let $={dim:[],progress:[],expand:[]},M={dim:0,progress:0,expand:0},V=y.type==="settle"?Math.max(2,Math.ceil(y.duration/Vf)+1):61;for(let q=0;q<V;q++){let G=q/(V-1),Y=y.type==="settle"?y.extentAt(Math.min(y.duration,q*Vf)):y.extentAt(G);l(Y,M),$.dim.push(M.dim),$.progress.push(M.progress),$.expand.push(M.expand)}return $}function b(y){for(let $ of o)$.startTime=y}function S(){if(o.length){for(let y of o)y.cancel();o=[]}}function _(){for(let y of n.values())y.cancel();n.clear()}function I(){c=!0,S(),_(),t.backdrop()?.style.removeProperty("opacity"),s?.cancel();for(let y of na.slice(0,3))t.sheet.style.removeProperty(y);for(let y of t.outlets()){for(let $ of na.slice(0,3))y.el.style.removeProperty($);for(let $ of Object.keys(y.keyframes??{}))y.el.style.removeProperty(qf($))}}return{configure:a,compute:l,apply:h,play:w,sync:b,follow:w,stop:S,destroy:I}}function hv(t){return`linear(${t.map(si).join(", ")})`}function qf(t){return t.startsWith("--")?t:t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}var Vf,na,ia,xo,si,Hf,Wf,Co=wt(()=>{Bf();De();Vf=1e3/60,na=["--drawer-progress","--drawer-dim","--drawer-expand","--drawer-stack"],ia=new WeakSet;xo=()=>typeof CSS<"u"&&CSS.supports("animation-timing-function","linear(0, 1)"),si=t=>Math.round(t*1e4)/1e4;Hf={pseudoElement:"::backdrop"};Wf=t=>t});function gv(t,e,r=0,o=t.length){let n=o-r;if(n<2)return 0;let i=t[o-1];if(n<4)return Yf(t,e,r,o);let s=0,a=0,l=0,c=0,h=0,m=0,u=0,f=0;for(let w=r;w<o;w++){let p=t[w]-i,v=e[w],C=p*p;s+=1,a+=p,l+=C,c+=C*p,h+=C*C,m+=v,u+=v*p,f+=v*C}let g=s*(l*h-c*c)-a*(a*h-c*l)+l*(a*c-l*l);return Math.abs(g)<1e-9?Yf(t,e,r,o):(s*(u*h-c*f)-m*(a*h-c*l)+l*(a*f-u*l))/g}function Yf(t,e,r,o){let n=0,i=0,s=o-r;for(let c=r;c<o;c++)n+=t[c]/s,i+=e[c]/s;let a=0,l=0;for(let c=r;c<o;c++){let h=t[c]-n;a+=h*(e[c]-i),l+=h*h}return l>0?a/l:0}function Xf(t={}){let{horizon:e,staleAfter:r,maxSpeed:o,capacity:n}={...mv,...t},i=new Float64Array(n),s=new Float64Array(n),a=new Float64Array(n),l=new Float64Array(n),c=0,h=-1;function m(g,d){c>0&&g<=i[h]||(h=(h+1)%n,i[h]=g,s[h]=d,c=Math.min(c+1,n))}function u(g){if(c<2)return 0;let d=i[h];if(g-d>r)return 0;let w=0;for(let v=c-1;v>=0;v--){let C=(h-v+n)%n;d-i[C]>e||(a[w]=i[C],l[w]=s[C],w++)}let p=gv(a,l,0,w);return Math.max(-o,Math.min(o,p))}function f(){c=0,h=-1}return{add:m,velocity:u,reset:f}}var mv,Gf=wt(()=>{mv={horizon:70,staleAfter:40,maxSpeed:8,capacity:20}});function Qf(t,e=!1,r){let o=t.defaultView??window,n=c=>r===void 0||!("pointerId"in c)||c.pointerId===r,i=c=>{n(c)&&(c.preventDefault(),c.stopPropagation(),t.removeEventListener("click",i,!0))},s=()=>{t.removeEventListener("click",i,!0),t.removeEventListener("pointerdown",a,!0),t.removeEventListener("pointerup",l,!0),t.removeEventListener("pointercancel",l,!0)},a=c=>n(c)&&s(),l=c=>n(c)&&o.setTimeout(s);if(t.addEventListener("click",i,!0),t.addEventListener("pointerdown",a,!0),!e)return o.setTimeout(s);t.addEventListener("pointerup",l,!0),t.addEventListener("pointercancel",l,!0)}var vv,ai,Zf=wt(()=>{vv=new WeakSet,ai=t=>vv.has(t)});function Jf(t){let{sheet:e}=t,r=e.ownerDocument,o=r.defaultView??window,n=Dt(0,-1),i=0,s=null,a=0,l=0,c=null,h=null,m=null,u=null,f=null,g=null,d=null,w=!1,p=!1,v=null,C=null,b=null,S={x:0,y:0},_=Xf({horizon:t.config().physics.velocityHorizon}),I=[ot(r,"touchstart",Q,{capture:!0,passive:!0}),ot(r,"touchmove",J,{capture:!0,passive:!1}),ot(r,"touchend",bt,{capture:!0,passive:!0}),ot(r,"touchcancel",bt,{capture:!0,passive:!0}),ot(e,"pointerdown",P)],y=!1;function $(A){y||(e.style.translate=yo(t.side(),t.size()-A),i=A)}function M(A,F){if(y)return;let W=Xn(n,A,t.config());n=W.state;let X="time"in A?A.time:performance.now();for(let U of W.effects)V(U,X,F);let tt=n.phase==="dragging";tt!==w&&(w=tt,t.onDragChange(w))}function V(A,F,W){switch(A.type){case"move":c?(Z(),$(A.extent),t.onFrame(A.extent)):(s=A.extent,L());return;case"settle":return q(A,F);case"scroll":return a+=A.delta,L();case"fling-scroll":return f&&(u={velocity:A.velocity,startTime:F,startScroll:0,area:f}),L();case"snap":return C=A.id,t.onSnap(A.id,A.reason,W);case"dismiss":return A.reason!=="swipe"?void 0:(m="swipe",t.onDismiss(W));case"attempt-dismiss":return t.onDismissAttempt(W)}}function q(A,F){Z(),s=null;let W=t.closedExtent(),X=A.from<=0?W:A.from,tt=A.to<=0?W:A.to,U=t.reducedMotion()&&(X===W||tt===W),et=t.reducedMotion()?Y(X,tt,U):G(X,tt,A);if($(U?Math.max(tt,0):tt),Math.abs(tt-X)<.5&&A.velocity===0||et.duration===0)return z();let st=t.size(),pt=t.side();c=U?e.animate({opacity:X===W?[0,1]:[1,0]},{duration:et.duration,fill:"both"}):Math.abs(tt-X)<1||!xo()?e.animate({translate:ni(et,gt=>yo(pt,st-gt))},{duration:et.duration,fill:"backwards"}):e.animate({translate:[yo(pt,st-X),yo(pt,st-tt)]},{duration:et.duration,easing:et.easing,fill:"backwards"}),U&&(h=c);let Nt=c;c.onfinish=()=>{c===Nt&&z()},c.startTime=F,t.onMotion({type:"settle",extentAt:et.extentAt,startTime:F,duration:et.duration})}function G(A,F,W){let X=Rr(W.response,W.dampingRatio,A-F,W.velocity),tt=Un(X);return{duration:tt,easing:Kn(X,A,F,tt),extentAt:U=>F+X.position(U)}}function Y(A,F,W){let X=W?If:Df,tt=U=>1-(1-U)**3;return{duration:X,easing:"cubic-bezier(0.33, 1, 0.68, 1)",extentAt:U=>A+(F-A)*tt(Math.min(1,U/X))}}function Z(){c?.cancel(),c=null,h&&(h.cancel(),h=null)}function z(){if(Z(),M({type:"settled"}),n.phase==="idle"){if(n.restingIndex<0)return m=null,C=null,t.onRest(null);C=t.config().snapPoints[n.restingIndex].id,t.onRest(C)}}function L(){l||=o.requestAnimationFrame(O)}function O(A){l=0,a&&f&&(ea(f,t.side(),a),a=0),u&&E(A),s!==null&&($(s),s=null,t.onFrame(i))}function E(A){if(!u)return;let F=Math.max(0,A-u.startTime),W=u.velocity*(sa**F-1)/Math.log(sa);ea(u.area,t.side(),W-u.startScroll),u.startScroll=W,Math.abs(u.velocity*sa**F)<.01?u=null:L()}function D(A){return A instanceof Element&&A.closest(bv)!==null}function H(A){let F=zf(A,e,t.side());return f=F?.area??null,F&&{atStart:F.atStart,atEnd:F.atEnd}}function Q(A){let F=v!==null&&ai(v);if(v=null,g||A.touches.length>1||m||F||!t.owns(A.target)||D(A.target))return;let W=A.changedTouches[0];g={id:W.identifier,originX:W.clientX,originY:W.clientY},u=null,_.reset(),ir(t.side(),W.clientX,W.clientY,S),_.add(A.timeStamp,S.y),M({type:"down",time:A.timeStamp,x:S.x,y:S.y,pointer:"touch"},A)}function J(A){let F=x(A.changedTouches);if(!F)return;ir(t.side(),F.clientX,F.clientY,S),_.add(A.timeStamp,S.y);let W=n.phase==="dragging",X=H(A.target);if(M({type:"move",time:A.timeStamp,x:S.x,y:S.y,scroll:X},A),n.phase==="pending")return ft(A,F,X);n.phase==="dragging"&&(A.cancelable?A.preventDefault():!W&&f&&(f.style.overscrollBehavior="none"))}function ft(A,F,W){if(!A.cancelable||!g)return;let X=ir(t.side(),g.originX,g.originY,{x:0,y:0});if(Math.abs(S.y-X.y)<Math.abs(S.x-X.x))return;let tt=t.config().snapPoints.at(-1)?.extent??0;(W?Wn({towardMore:S.y<X.y,scrollAtStart:W.atStart,atLargest:i>=tt-.5,expandOnScroll:t.config().expandOnScroll}):"sheet")==="sheet"&&A.preventDefault()}function bt(A){if(!x(A.changedTouches))return;g=null,f&&f.style.removeProperty("overscroll-behavior");let F=A.type==="touchcancel"?0:_.velocity(A.timeStamp);M({type:"up",time:A.timeStamp,velocity:F},A)}function x(A){if(!g)return null;for(let F=0;F<A.length;F++)if(A[F].identifier===g.id)return A[F];return null}function P(A){if(v=A,A.pointerType==="touch"||A.button!==0||d!==null||m)return;let F=A.target;if(!t.owns(F)||D(F)||!(F instanceof Element)||!t.canMouseDrag(F))return;d=A.pointerId,p=!1,b=n.phase==="settling"&&n.targetIndex>=0?C:null,u=null,_.reset(),ir(t.side(),A.clientX,A.clientY,S),_.add(A.timeStamp,S.y),R=[ot(r,"pointermove",N,{capture:!0}),ot(r,"pointerup",K,{capture:!0}),ot(r,"pointercancel",K,{capture:!0})];let W=A.pointerType==="pen"?"pen":"mouse";M({type:"down",time:A.timeStamp,x:S.x,y:S.y,pointer:W},A)}let R=[];function N(A){if(A.pointerId!==d)return;if(v&&ai(v))return j(A,0,b);let F=A.getCoalescedEvents?.();for(let W of F?.length?F:[A])_.add(W.timeStamp,ir(t.side(),W.clientX,W.clientY,S).y);if(ir(t.side(),A.clientX,A.clientY,S),M({type:"move",time:A.timeStamp,x:S.x,y:S.y,scroll:H(A.target)},A),!(n.phase!=="dragging"||p)){p=!0,r.getSelection()?.removeAllRanges(),e.style.userSelect="none";try{e.setPointerCapture(A.pointerId)}catch{}}}function K(A){if(A.pointerId===d){if(v&&ai(v))return j(A,0,b);j(A,A.type==="pointercancel"?0:_.velocity(A.timeStamp))}}function j(A,F,W=null){d=null,v=null,R.forEach(U=>U()),R=[],e.style.removeProperty("user-select");let X=A.timeStamp,tt=t.config().snapPoints.findIndex(U=>U.id===W);W!==null&&tt>=0?(n=Dt(n.extent,tt),M({type:"snap-to",time:X,id:W,reason:"imperative"})):M({type:"up",time:X,velocity:F},A),p&&Qf(r)}return{open(A,F){m=null,C=A,Z();let W=t.config().snapPoints.findIndex(tt=>tt.id===A);if(!F&&W>=0)return n=Dt(t.config().snapPoints[W].extent,W),$(n.extent),t.onRest(A);n=Dt(0,-1),$(t.closedExtent()),M({type:"snap-to",time:performance.now()+ei,id:A,reason:"imperative"});let X=c;X&&ri(o,tt=>{c!==X||n.phase!=="settling"||(X.startTime=tt,n={...n,startTime:tt},t.onMotionStart(tt))})},close(){let A=m;m="close",A||M({type:"close",time:performance.now()})},snapTo(A,F){m!=="close"&&(m=null,M({type:"snap-to",time:performance.now(),id:A,reason:F}))},nudge(){!m&&!t.reducedMotion()&&M({type:"nudge",time:performance.now()})},relayout(A,F){let W=t.config().snapPoints;if(m||C===null||n.phase==="dragging"||n.phase==="pending")return $(i);let X=W.findIndex(pt=>pt.id===C),tt=W.findIndex(pt=>pt.id===F),U=X>=0?X:tt>=0?tt:ke(W.map(pt=>pt.extent),i),{id:et,extent:st}=W[U];if(n.phase==="idle"&&(n=Dt(i,X),A||Math.abs(st-i)<.5))return n=Dt(st,U),$(st),A?(et!==C&&V({type:"snap",id:et,reason:"content-resize"},performance.now()),t.onRest(et)):void 0;M({type:"snap-to",time:performance.now(),id:et,reason:"content-resize"})},target:()=>m?null:C,isMoving:()=>n.phase!=="idle",destroy(){y=!0,Z(),l&&o.cancelAnimationFrame(l),I.forEach(A=>A()),R.forEach(A=>A()),w&&t.onDragChange(!1);for(let A of["translate","user-select","opacity"])e.style.removeProperty(A)}}}var sa,bv,tp=wt(()=>{qs();Gn();qn();Yn();Gf();te();Zf();ra();ii();Co();sa=.998,bv='input, textarea, select, [contenteditable]:not([contenteditable="false"]), [data-drawer-no-drag]'});function rp(t){let{sheet:e,host:r}=t,o=e.ownerDocument,n=o.defaultView??window,i=Dt(0,-1),s=0,a=[],l=null,c=!1,h=!1,m=!1,u=null,f=0,g=0,d=null,w=new Map,p=null,v=sr(r,{inset:`0 0 calc(var(--keyboard-inset, 0px) - ${Ne}px) 0`,display:"block","overflow-y":"scroll","overflow-x":"hidden","scroll-snap-type":"y mandatory","scrollbar-width":"none","overscroll-behavior":"contain","pointer-events":"auto"}),C=sr(e,{position:"absolute",left:"0",right:"0"}),b="onscrollend"in r,S=n.ScrollTimeline,_=[ot(r,"scroll",Y,{passive:!0}),...b?[ot(r,"scrollend",O)]:[],ot(r,"touchstart",()=>{c=!0,h=!1,l&&!u&&D()},{passive:!0}),ot(r,"touchend",z,{passive:!0}),ot(r,"touchcancel",z,{passive:!0})],I=new IntersectionObserver(E,{root:r,rootMargin:"0px 0px -1px 0px",threshold:0});I.observe(e);let y=()=>t.config().dimension,$=()=>t.config().snapPoints.at(-1)?.extent??0,M=()=>$()+wv-s,V=()=>Math.min(r.scrollTop+s,$());function q(){let P=t.config();s=P.dismissible?-Ne:P.snapPoints[0].extent,e.style.top=`${y()-s}px`;for(let K of a)K.remove();let R=P.snapPoints.map(K=>K.extent);a=(P.dismissible?[s,...R]:R).map(K=>G(K-s,"start")),a.push(G(M()+r.clientHeight-1,"none")),r.append(...a);for(let K of w.keys())e.contains(K)||w.delete(K);for(let K of yv(e))w.has(K)||w.set(K,[K.style.getPropertyValue("overflow-y"),K.style.getPropertyPriority("overflow-y")])}function G(P,R){let N=o.createElement("div");return N.setAttribute("aria-hidden","true"),N.style.cssText=`position:absolute;left:0;width:1px;height:1px;top:${P}px;scroll-snap-align:${R};pointer-events:none`,N}function Y(){l||u||(p&&c&&Math.abs(r.scrollTop-p.offsetTop)>1&&H(),c&&!m&&L(!0),S||(g||=n.requestAnimationFrame(Z)),n.clearTimeout(f),!b&&!c&&(f=n.setTimeout(O,ep)))}function Z(){g=0,t.onFrame(V())}function z(){if(c=!1,L(!1),p){H();let P=t.config().snapPoints,R=ke(P.map(N=>N.extent),V());return x(P[R].id,"swipe")}!t.config().dismissible&&r.scrollTop<-2&&t.onDismissAttempt(),(h||!b)&&(f=n.setTimeout(O,ep)),h=!1}function L(P){m!==P&&(m=P,t.onDragChange(P))}function O(){if(c){h=!0;return}if(l||u)return;let P=t.config(),R=Xn(i,{type:"rest",extent:V()},P);i=R.state;for(let N of R.effects)N.type==="snap"&&(d=N.id,t.onSnap(N.id,N.reason));i.restingIndex>=0&&ft(P.snapPoints[i.restingIndex].id)}function E(P){P[P.length-1].isIntersecting||l||u||d===null||!t.config().dismissible||(u="swipe",d=null,t.onDismiss())}function D(){if(!l)return;let P=Math.max(0,l.extentAt(performance.now()-l.startTime)-s);J(),p=G(P,"start"),r.append(p),r.scrollTop=P,Z(),bt()}function H(){p?.remove(),p=null}function Q(P,R,N,K){J();let j=t.config().physics,A=Rr(j.response,j.dampingRatio,R-P,0),F=Math.max(1,Un(A)),W=Math.max(s,P);r.scrollTop=W-s;let X=st=>P+A.position(Math.max(0,st)),tt=Math.abs(P-R)<.5,U=!tt&&!xo(),et=e.animate({translate:U?ni({duration:F,extentAt:X},st=>`0 ${W-st}px`):[`0 ${W-R}px`,`0 ${W-P}px`]},{duration:F,easing:tt||U?"linear":Kn(A,R,P,F),fill:"both"});et.startTime=N,l={animation:et,to:P,extentAt:X,startTime:N},t.onMotion({type:"settle",extentAt:X,startTime:N,duration:F}),et.onfinish=()=>{l?.animation===et&&(l=null,K(),et.cancel())}}function J(){l?.animation.cancel(),l=null}function ft(P){let R=t.config(),N=R.snapPoints.findIndex(j=>j.id===P);i=Dt(R.snapPoints[N].extent,N),d=P,r.style.pointerEvents=t.isInteractive(P)?"none":"auto";let K=N===R.snapPoints.length-1;for(let[j,[A,F]]of w)K?j.style.setProperty("overflow-y",A,F):j.style.overflowY="hidden";t.onRest(P),bt()}function bt(){if(!S)return;let P=M(),R=new S({source:r,axis:"block"});t.onMotion({type:"timeline",timeline:R,extentAt:N=>Math.min($(),N*P+s)})}function x(P,R){let N=t.config().snapPoints.find(j=>j.id===P);if(!N||u==="close")return;u=null,P!==d&&(d=P,t.onSnap(P,R));let K=l?l.extentAt(performance.now()-l.startTime):V();Q(N.extent,K,performance.now(),()=>ft(P))}return{open(P,R){u=null,d=P,q();let N=t.config().snapPoints.find(j=>j.id===P);if(!N)return;if(!R)return r.scrollTop=N.extent-s,ft(P);Q(N.extent,-Ne,performance.now()+ei,()=>ft(P));let K=l;ri(n,j=>{!K||l!==K||(K.animation.startTime=j,K.startTime=j,t.onMotionStart(j))})},close(){let P=u;if(u="close",P)return;d=null;let R=l?l.extentAt(performance.now()-l.startTime):V();Q(-Ne,R,performance.now(),()=>t.onRest(null))},snapTo:x,nudge(){if(u||t.reducedMotion()||d===null)return;let P=t.config().snapPoints.find(R=>R.id===d);P&&Q(P.extent,P.extent-20,performance.now(),()=>ft(P.id))},relayout(P,R){if(u||c)return;let N=t.config().snapPoints,K=N.findIndex(X=>X.id===d),j=N.findIndex(X=>X.id===R),A=K>=0?K:j>=0?j:ke(N.map(X=>X.extent),V()),F=s;q();let W=N[A];if(W.id!==d&&(d=W.id,t.onSnap(W.id,"content-resize")),l){let X=l,tt=performance.now();(X.to!==W.extent||s!==F)&&(Q(W.extent,X.extentAt(tt-X.startTime),Math.max(tt,X.startTime),()=>ft(W.id)),l=Object.assign(X,l));return}r.scrollTop=W.extent-s,ft(W.id)},target:()=>u?null:d,isMoving:()=>!!l||m,destroy(){J(),H(),n.clearTimeout(f),g&&n.cancelAnimationFrame(g),I.disconnect(),_.forEach(P=>P());for(let P of a)P.remove();for(let[P,[R,N]]of w)P.style.setProperty("overflow-y",R,N);m&&t.onDragChange(!1),e.style.removeProperty("top"),C(),v()}}}function yv(t){let e=t.ownerDocument.defaultView??window;return Array.from(t.querySelectorAll("*")).filter(r=>/auto|scroll/.test(e.getComputedStyle(r).overflowY))}var ep,wv,op=wt(()=>{Gn();qn();Yn();te();ii();Co();ep=120,wv=24});function xv(t){let e=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/.exec(t);return e?[e[1],e[2],e[3]].map(Number):null}function np(t,e){let r=Array.from(t.querySelectorAll('meta[name="theme-color"]')),o=r.map(l=>l.content),n=o.map(l=>xv(Cv(t,l))),i=-1;function s(l){let c=Math.round(l*e*100)/100;c!==i&&(i=c,r.forEach((h,m)=>{let u=n[m];u&&(h.content=c?`rgb(${u.map(f=>Math.round(f*(1-c))).join(" ")})`:o[m])}))}function a(){r.forEach((l,c)=>l.content=o[c]),i=-1}return{write:s,restore:a}}function Cv(t,e){let r=t.createElement("span");r.style.color=e,r.style.display="none",t.body.append(r);let o=t.defaultView?.getComputedStyle(r).color??e;return r.remove(),o}var ip=wt(()=>{});function Ev(t){return{side:()=>"bottom",snapPoints:()=>["content"],snapPoint:()=>null,dismissible:()=>!0,modalAbove:()=>{},driver:()=>"auto",expandOnScroll:()=>!0,physics:()=>{},backdrop:()=>{},hostBackdrop:!1,outlets:()=>[],parent:()=>{},themeColor:()=>!1,preventEdgeSwipe:()=>!1,canMouseDrag:kv,onSnap:So,onRest:So,onDismissAttempt:So,onDragChange:So,onLayout:So,...Av(t)}}function Av(t){return Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0))}function lp(t){for(let e=t.parent;e;e=e.parent){let r=li.get(e);if(r)return r}}function Lv(t){for(let e=t instanceof Element?t:null;e;){if(aa.has(e))return e;let r=e.getRootNode();e=e.parentElement??(r instanceof ShadowRoot?r.host:null)}return null}function Mv(t,e){let r=e.driver();return r!=="auto"?r==="scroll-snap":e.modalAbove()===void 0&&e.expandOnScroll()&&!!t.matchMedia?.("(hover: none) and (pointer: coarse)").matches}function cp(t,e){let r=Ev(e),{host:o}=r,n=t.ownerDocument,i=n.defaultView??window,s=i.matchMedia?.("(prefers-reduced-motion: reduce)"),a=Js(r.side(),t),l=[],c=0,h,m=Qn.ios,u,f,g={snapPoints:[],dimension:0,dismissible:!0,expandOnScroll:!0,physics:m,contentScroll:kf},d=a==="bottom"&&Mv(i,r);aa.add(t);let w=[ap(o,a,t),$v(t)],p=[],v=Kf({sheet:t,backdrop:r.backdrop,dimmed:r.hostBackdrop?o:void 0,outlets:r.outlets,ancestors:()=>p,themeColor:x=>u?.write(x)});function C(){let x=r.physics();return x!==h&&(h=x,m=x?{...Qn.ios,...x}:Qn.ios),g.physics=m,g.dismissible=r.dismissible(),g.expandOnScroll=r.expandOnScroll(),g}function b(){let x=Js(r.side(),t);x!==a&&(a=x,w[0](),w[0]=ap(o,a,t));let P=(Ee(a)?o.clientHeight:o.clientWidth)-(d?Ne:0);c=_f(t,a);let R=parseFloat(i.getComputedStyle(n.documentElement).fontSize)||16,N=Lf(r.snapPoints(),{container:P,content:c,rootFontSize:R});N.length||N.push({id:"content",value:"content",extent:c,ids:["content"]});let K=P!==g.dimension||N.length!==l.length||N.some((j,A)=>j.id!==l[A].id||Math.abs(j.extent-l[A].extent)>=.5);return l=N,g.dimension=P,g.snapPoints=l.map(({id:j,extent:A})=>({id:j,extent:A})),v.configure({snapExtents:g.snapPoints.map(j=>j.extent),undimmedIndex:nr(l,r.modalAbove())}),K&&$(),K}let S=!1,_=x=>x===null?null:l.find(P=>P.id===x)?.value??null,I={sheet:t,host:o,side:()=>a,config:C,size:()=>c,closedExtent:()=>oi(a),reducedMotion:()=>!!s?.matches,owns:x=>Lv(x)===t,canMouseDrag:r.canMouseDrag,onSnap:(x,P,R)=>{let N=_(x);N!==null&&r.onSnap(N,P,R)},onRest(x){if(S)return;let P=l.find(R=>R.id===x);v.apply(P?.extent??oi(a),{rest:!0}),r.onRest(_(x)),D&&x!==null&&Q(),D=!1},onDismiss:r.onDismiss,onDismissAttempt:r.onDismissAttempt,onDragChange:r.onDragChange,isInteractive:x=>bt.isInteractiveAt(_(x)),onFrame:x=>S||v.apply(x),onMotion:x=>S||v.play(x),onMotionStart:x=>S||v.sync(x)},y=!0;function $(){if(!y)return r.onLayout({side:a,snapPoints:l});queueMicrotask(()=>S||r.onLayout({side:a,snapPoints:l}))}b(),C();let M=d?rp(I):Jf(I);t.setAttribute("data-driver",d?"scroll-snap":"pointer"),y=!1;let V=new ResizeObserver(()=>{J(!1)});V.observe(t),V.observe(o);let q=0,G=i.visualViewport?.height,Y=null,z=[Jn(o,{before:()=>q=t.getBoundingClientRect().top,after:L}),...r.preventEdgeSwipe()?[ot(n,"touchstart",O,{capture:!0,passive:!1})]:[],...Sn()?[ot(n,"touchend",E,{capture:!0,passive:!1})]:[],ot(t,"focusin",H)];function L(){J(!0),Q();let x=i.visualViewport?.height;if(x===G)return;G=x,Y?.cancel(),Y=null;let P=q-t.getBoundingClientRect().top;Math.abs(P)<1||s?.matches||(Y=o.animate({translate:[`0 ${P}px`,"0 0"]},Pv))}function O(x){if(!x.cancelable)return;let P=x.touches[0];if(!P||P.clientX>sp&&P.clientX<i.innerWidth-sp)return;let R=x.target;R&&(o.contains(R)||r.backdrop()?.contains(R))&&x.preventDefault()}function E(x){let P=x.target;(P instanceof HTMLInputElement||P instanceof HTMLTextAreaElement)&&(!t.contains(P)||P===n.activeElement||M.isMoving()||!x.cancelable||(x.preventDefault(),P.focus({preventScroll:!0})))}let D=!1;function H(){M.isMoving()?D=!0:Q()}function Q(){let x=n.activeElement;if(!(x instanceof HTMLElement)||!t.contains(x)||x===t)return;let P=ta(x,t,"bottom");if(!P)return;let R=i.visualViewport,N=Math.min(P.getBoundingClientRect().bottom,R?R.offsetTop+R.height:i.innerHeight),{top:K,bottom:j}=x.getBoundingClientRect(),A=16,F=P.getBoundingClientRect().top,W=j+A>N?j+A-N:K-A<F?K-A-F:0;W&&P.scrollBy({top:W,behavior:s?.matches?"instant":"smooth"})}function J(x){b()&&M.relayout(x,l[nr(l,r.snapPoint())]?.id)}function ft(x){let P=nr(l,x);return l[P>=0?P:0]?.id}let bt={element:t,parent:r.parent,open(x){if(S)return;p=[];for(let R=r.parent();R;R=R.parent())p.push(R.element);b(),C(),r.themeColor()&&(u??=np(n,m.dim)),x&&v.apply(oi(a)),f?.();let P=r.backdrop();f=P&&sr(P,{"will-change":"opacity"}),M.open(ft(r.snapPoint()),x)},close:()=>S||M.close(),snapTo(x,P){let R=nr(l,x);R>=0&&l[R].id!==M.target()&&M.snapTo(l[R].id,P)},nudge:()=>M.nudge(),snapPoints:()=>l,target:()=>_(M.target()),isInteractiveAt:x=>Mf(l,x,r.modalAbove()),refresh(){J(!1)},destroy(){S=!0,V.disconnect(),Y?.cancel(),z.forEach(x=>x()),M.destroy(),v.destroy(),f?.(),u?.restore(),w.forEach(x=>x()),t.removeAttribute("data-driver"),aa.delete(t)}};return bt}function ap(t,e,r){let o=Ee(e),n=r.ownerDocument.defaultView?.getComputedStyle(t).direction==="rtl";return sr(t,{position:"fixed",inset:"0 0 var(--keyboard-inset, 0px) 0",width:"auto",height:"auto","max-width":"none","max-height":"none",margin:"0",padding:"0",border:"0",background:"transparent",color:"inherit",overflow:"visible",display:"flex","flex-direction":o?"column":"row","justify-content":e==="bottom"||e==="right"!==n?"flex-end":"flex-start","pointer-events":"none"})}function $v(t){return sr(t,{"pointer-events":"auto","overscroll-behavior":"contain","will-change":"translate"})}var Sv,kv,So,aa,li,sp,Pv,up=wt(()=>{Ef();Af();Pf();te();ti();ue();ra();ii();Co();tp();op();ip();Sv='a[href], button, label, summary, [role="button"], [role="link"], [role="slider"], [tabindex]:not([tabindex="-1"])',kv=t=>!t.closest(Sv),So=()=>{};aa=new WeakSet,li=new WeakMap;sp=24;Pv={duration:250,easing:"cubic-bezier(0.38, 0.7, 0.125, 1)"}});var dp={};fl(dp,{prepareVariables:()=>Uf,presentSheet:()=>zv});function Tv(t){let e=t.getAttribute("data-slot");e&&ee(t.ownerDocument,`ui-sdk-sheet-${e}`,`@layer ui-sdk { :where([data-slot="${e}"])::backdrop { background: var(--sheet-backdrop, rgb(0 0 0 / 0.2)); pointer-events: auto } }`)}function Ov(t,e){let r=[],o=n=>{for(let i of Array.from(n.children))e.includes(i)||(e.some(s=>s&&i.contains(s))?o(i):i instanceof HTMLElement&&r.push(ze(i,"display","none")))};return o(t),()=>r.forEach(n=>n())}function _v(t,e,r){let o,n=e.bind(t,{...r,position:void 0,inline:!0,onShow(){let[i,s]=r.drillIn();return i&&(o=Ov(i,[t,s])),()=>o?.()},onClose(){o?.(),o=ze(t,"display","none")}});return()=>{n(),o?.()}}function zv(t,e,r){if(r.drillIn)return _v(t,e,r);let o=t.parentElement;if(!o)return;Tv(o);let n;return e.bind(t,{...r,position:void 0,host:()=>o,onShow(i){let s=Dv(t,o,e,r,i);return n=s.sheet,()=>{s.hide(),n=void 0}},onClose:()=>n?.close()})}function Dv(t,e,r,o,n){let i=null,s=lp(n),a=!o.backdrop?.(),l=cp(t,{host:e,snapPoints:()=>o.snapPoints??["content"],snapPoint:()=>i,backdrop:o.backdrop,hostBackdrop:a,dismissible:o.dismissible,onDismissAttempt:o.onDismissAttempt,parent:()=>s?.(),onSnap:m=>i=m,onDismiss(m){r.requestClose("swipe",m),requestAnimationFrame(()=>{let u=i??l.snapPoints()[0]?.value;n.active()&&u!==void 0&&l.snapTo(u,"imperative")})}});li.set(n,()=>l),o.onSheet?.(l);let c=ot(t,"focusin",m=>{let u=l.snapPoints().at(-1);u&&l.snapPoints().length>1&&m.target.matches("input, textarea")&&l.snapTo(u.value,"imperative")}),h=a?getComputedStyle(t).getPropertyValue("--sheet-backdrop"):"transparent";return h&&e.style.setProperty("--sheet-backdrop",h),n.active()&&l.open(r.opener()!=="initial"),{sheet:l,hide(){c(),li.delete(n),l.destroy(),o.onSheet?.(void 0),e.style.removeProperty("--sheet-backdrop")}}}var fp=wt(()=>{te();De();up();Co()});var qp={};fl(qp,{announce:()=>tb,prepareAnnouncements:()=>Jv,setAnnouncer:()=>Zv});function Zv(t){mi=t}function va(t,e){let r=Hp.get(t);r||Hp.set(t,r={});let o=r[e];if(o?.isConnected)return o;let n=t.createElement("div");return n.setAttribute("role",e==="assertive"?"alert":"status"),n.setAttribute("aria-live",e),n.setAttribute("aria-atomic","true"),n.setAttribute("data-ui-sdk-announcer",e==="assertive"?"assertive":""),n.style.cssText="position:fixed;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap",t.body.append(n),r[e]=n,n}function Jv(t){mi||!t.body||(va(t,"polite"),va(t,"assertive"))}function tb(t,{priority:e="polite",doc:r=typeof document>"u"?void 0:document}={}){if(!t)return;if(mi)return mi(t,e);if(!r?.body)return;let o=va(r,e);o.textContent="",clearTimeout(Wp[e]),Wp[e]=setTimeout(()=>{o.textContent=t},100)}var Hp,mi,Wp,jp=wt(()=>{Hp=new WeakMap,Wp={}});var Gh=Ae((Xa,Ga)=>{(function(t,e){typeof Xa=="object"&&typeof Ga<"u"?Ga.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self,t.Data=e())})(Xa,function(){"use strict";let t=new Map;return{set(r,o,n){t.has(r)||t.set(r,new Map);let i=t.get(r);if(!i.has(o)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(o,n)},get(r,o){return t.has(r)&&t.get(r).get(o)||null},remove(r,o){if(!t.has(r))return;let n=t.get(r);n.delete(o),n.size===0&&t.delete(r)}}})});var qr=Ae((Ei,Qh)=>{(function(t,e){typeof Ei=="object"&&typeof Qh<"u"?e(Ei):typeof define=="function"&&define.amd?define(["exports"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.Index={}))})(Ei,function(t){"use strict";let o="transitionend",n=y=>(y&&window.CSS&&window.CSS.escape&&(y=y.replace(/#([^\s"#']+)/g,($,M)=>`#${CSS.escape(M)}`)),y),i=y=>y==null?`${y}`:Object.prototype.toString.call(y).match(/\s([a-z]+)/i)[1].toLowerCase(),s=y=>{do y+=Math.floor(Math.random()*1e6);while(document.getElementById(y));return y},a=y=>{if(!y)return 0;let{transitionDuration:$,transitionDelay:M}=window.getComputedStyle(y),V=Number.parseFloat($),q=Number.parseFloat(M);return!V&&!q?0:($=$.split(",")[0],M=M.split(",")[0],(Number.parseFloat($)+Number.parseFloat(M))*1e3)},l=y=>{y.dispatchEvent(new Event(o))},c=y=>!y||typeof y!="object"?!1:(typeof y.jquery<"u"&&(y=y[0]),typeof y.nodeType<"u"),h=y=>c(y)?y.jquery?y[0]:y:typeof y=="string"&&y.length>0?document.querySelector(n(y)):null,m=y=>{if(!c(y)||y.getClientRects().length===0)return!1;let $=getComputedStyle(y).getPropertyValue("visibility")==="visible",M=y.closest("details:not([open])");if(!M)return $;if(M!==y){let V=y.closest("summary");if(V&&V.parentNode!==M||V===null)return!1}return $},u=y=>!y||y.nodeType!==Node.ELEMENT_NODE||y.classList.contains("disabled")?!0:typeof y.disabled<"u"?y.disabled:y.hasAttribute("disabled")&&y.getAttribute("disabled")!=="false",f=y=>{if(!document.documentElement.attachShadow)return null;if(typeof y.getRootNode=="function"){let $=y.getRootNode();return $ instanceof ShadowRoot?$:null}return y instanceof ShadowRoot?y:y.parentNode?f(y.parentNode):null},g=()=>{},d=y=>{y.offsetHeight},w=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,p=[],v=y=>{document.readyState==="loading"?(p.length||document.addEventListener("DOMContentLoaded",()=>{for(let $ of p)$()}),p.push(y)):y()},C=()=>document.documentElement.dir==="rtl",b=y=>{v(()=>{let $=w();if($){let M=y.NAME,V=$.fn[M];$.fn[M]=y.jQueryInterface,$.fn[M].Constructor=y,$.fn[M].noConflict=()=>($.fn[M]=V,y.jQueryInterface)}})},S=(y,$=[],M=y)=>typeof y=="function"?y.call(...$):M,_=(y,$,M=!0)=>{if(!M){S(y);return}let q=a($)+5,G=!1,Y=({target:Z})=>{Z===$&&(G=!0,$.removeEventListener(o,Y),S(y))};$.addEventListener(o,Y),setTimeout(()=>{G||l($)},q)},I=(y,$,M,V)=>{let q=y.length,G=y.indexOf($);return G===-1?!M&&V?y[q-1]:y[0]:(G+=M?1:-1,V&&(G=(G+q)%q),y[Math.max(0,Math.min(G,q-1))])};t.defineJQueryPlugin=b,t.execute=S,t.executeAfterTransition=_,t.findShadowRoot=f,t.getElement=h,t.getNextActiveElement=I,t.getTransitionDurationFromElement=a,t.getUID=s,t.getjQuery=w,t.isDisabled=u,t.isElement=c,t.isRTL=C,t.isVisible=m,t.noop=g,t.onDOMContentLoaded=v,t.parseSelector=n,t.reflow=d,t.toType=i,t.triggerTransitionEnd=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})})});var Ja=Ae((Qa,Za)=>{(function(t,e){typeof Qa=="object"&&typeof Za<"u"?Za.exports=e(qr()):typeof define=="function"&&define.amd?define(["../util/index"],e):(t=typeof globalThis<"u"?globalThis:t||self,t.EventHandler=e(t.Index))})(Qa,function(t){"use strict";let e=/[^.]*(?=\..*)\.|.*/,r=/\..*/,o=/::\d+$/,n={},i=1,s={mouseenter:"mouseover",mouseleave:"mouseout"},a=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function l(b,S){return S&&`${S}::${i++}`||b.uidEvent||i++}function c(b){let S=l(b);return b.uidEvent=S,n[S]=n[S]||{},n[S]}function h(b,S){return function _(I){return C(I,{delegateTarget:b}),_.oneOff&&v.off(b,I.type,S),S.apply(b,[I])}}function m(b,S,_){return function I(y){let $=b.querySelectorAll(S);for(let{target:M}=y;M&&M!==this;M=M.parentNode)for(let V of $)if(V===M)return C(y,{delegateTarget:M}),I.oneOff&&v.off(b,y.type,S,_),_.apply(M,[y])}}function u(b,S,_=null){return Object.values(b).find(I=>I.callable===S&&I.delegationSelector===_)}function f(b,S,_){let I=typeof S=="string",y=I?_:S||_,$=p(b);return a.has($)||($=b),[I,y,$]}function g(b,S,_,I,y){if(typeof S!="string"||!b)return;let[$,M,V]=f(S,_,I);S in s&&(M=(O=>function(E){if(!E.relatedTarget||E.relatedTarget!==E.delegateTarget&&!E.delegateTarget.contains(E.relatedTarget))return O.call(this,E)})(M));let q=c(b),G=q[V]||(q[V]={}),Y=u(G,M,$?_:null);if(Y){Y.oneOff=Y.oneOff&&y;return}let Z=l(M,S.replace(e,"")),z=$?m(b,_,M):h(b,M);z.delegationSelector=$?_:null,z.callable=M,z.oneOff=y,z.uidEvent=Z,G[Z]=z,b.addEventListener(V,z,$)}function d(b,S,_,I,y){let $=u(S[_],I,y);$&&(b.removeEventListener(_,$,!!y),delete S[_][$.uidEvent])}function w(b,S,_,I){let y=S[_]||{};for(let[$,M]of Object.entries(y))$.includes(I)&&d(b,S,_,M.callable,M.delegationSelector)}function p(b){return b=b.replace(r,""),s[b]||b}let v={on(b,S,_,I){g(b,S,_,I,!1)},one(b,S,_,I){g(b,S,_,I,!0)},off(b,S,_,I){if(typeof S!="string"||!b)return;let[y,$,M]=f(S,_,I),V=M!==S,q=c(b),G=q[M]||{},Y=S.startsWith(".");if(typeof $<"u"){if(!Object.keys(G).length)return;d(b,q,M,$,y?_:null);return}if(Y)for(let Z of Object.keys(q))w(b,q,Z,S.slice(1));for(let[Z,z]of Object.entries(G)){let L=Z.replace(o,"");(!V||S.includes(L))&&d(b,q,M,z.callable,z.delegationSelector)}},trigger(b,S,_){if(typeof S!="string"||!b)return null;let I=t.getjQuery(),y=p(S),$=S!==y,M=null,V=!0,q=!0,G=!1;$&&I&&(M=I.Event(S,_),I(b).trigger(M),V=!M.isPropagationStopped(),q=!M.isImmediatePropagationStopped(),G=M.isDefaultPrevented());let Y=C(new Event(S,{bubbles:V,cancelable:!0}),_);return G&&Y.preventDefault(),q&&b.dispatchEvent(Y),Y.defaultPrevented&&M&&M.preventDefault(),Y}};function C(b,S={}){for(let[_,I]of Object.entries(S))try{b[_]=I}catch{Object.defineProperty(b,_,{configurable:!0,get(){return I}})}return b}return v})});var Zh=Ae((tl,el)=>{(function(t,e){typeof tl=="object"&&typeof el<"u"?el.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self,t.Manipulator=e())})(tl,function(){"use strict";function t(o){if(o==="true")return!0;if(o==="false")return!1;if(o===Number(o).toString())return Number(o);if(o===""||o==="null")return null;if(typeof o!="string")return o;try{return JSON.parse(decodeURIComponent(o))}catch{return o}}function e(o){return o.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}return{setDataAttribute(o,n,i){o.setAttribute(`data-bs-${e(n)}`,i)},removeDataAttribute(o,n){o.removeAttribute(`data-bs-${e(n)}`)},getDataAttributes(o){if(!o)return{};let n={},i=Object.keys(o.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(let s of i){let a=s.replace(/^bs/,"");a=a.charAt(0).toLowerCase()+a.slice(1),n[a]=t(o.dataset[s])}return n},getDataAttribute(o,n){return t(o.getAttribute(`data-bs-${e(n)}`))}}})});var Jh=Ae((rl,ol)=>{(function(t,e){typeof rl=="object"&&typeof ol<"u"?ol.exports=e(Zh(),qr()):typeof define=="function"&&define.amd?define(["../dom/manipulator","./index"],e):(t=typeof globalThis<"u"?globalThis:t||self,t.Config=e(t.Manipulator,t.Index))})(rl,function(t,e){"use strict";class r{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(n){return n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n}_mergeConfigObj(n,i){let s=e.isElement(i)?t.getDataAttribute(i,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...e.isElement(i)?t.getDataAttributes(i):{},...typeof n=="object"?n:{}}}_typeCheckConfig(n,i=this.constructor.DefaultType){for(let[s,a]of Object.entries(i)){let l=n[s],c=e.isElement(l)?"element":e.toType(l);if(!new RegExp(a).test(c))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${c}" but expected type "${a}".`)}}}return r})});var tm=Ae((nl,il)=>{(function(t,e){typeof nl=="object"&&typeof il<"u"?il.exports=e(Gh(),Ja(),Jh(),qr()):typeof define=="function"&&define.amd?define(["./dom/data","./dom/event-handler","./util/config","./util/index"],e):(t=typeof globalThis<"u"?globalThis:t||self,t.BaseComponent=e(t.Data,t.EventHandler,t.Config,t.Index))})(nl,function(t,e,r,o){"use strict";let n="5.3.9";class i extends r{constructor(a,l){super(),a=o.getElement(a),a&&(this._element=a,this._config=this._getConfig(l),t.set(this._element,this.constructor.DATA_KEY,this))}dispose(){t.remove(this._element,this.constructor.DATA_KEY),e.off(this._element,this.constructor.EVENT_KEY);for(let a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,l,c=!0){o.executeAfterTransition(a,l,c)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return t.get(o.getElement(a),this.DATA_KEY)}static getOrCreateInstance(a,l={}){return this.getInstance(a)||new this(a,typeof l=="object"?l:null)}static get VERSION(){return n}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}return i})});var em=Ae((sl,al)=>{(function(t,e){typeof sl=="object"&&typeof al<"u"?al.exports=e(qr()):typeof define=="function"&&define.amd?define(["../util/index"],e):(t=typeof globalThis<"u"?globalThis:t||self,t.SelectorEngine=e(t.Index))})(sl,function(t){"use strict";let e=o=>{let n=o.getAttribute("data-bs-target");if(!n||n==="#"){let i=o.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),n=i&&i!=="#"?i.trim():null}return n?n.split(",").map(i=>t.parseSelector(i)).join(","):null},r={find(o,n=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(n,o))},findOne(o,n=document.documentElement){return Element.prototype.querySelector.call(n,o)},children(o,n){return[].concat(...o.children).filter(i=>i.matches(n))},parents(o,n){let i=[],s=o.parentNode.closest(n);for(;s;)i.push(s),s=s.parentNode.closest(n);return i},prev(o,n){let i=o.previousElementSibling;for(;i;){if(i.matches(n))return[i];i=i.previousElementSibling}return[]},next(o,n){let i=o.nextElementSibling;for(;i;){if(i.matches(n))return[i];i=i.nextElementSibling}return[]},focusableChildren(o){let n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(i=>`${i}:not([tabindex^="-"])`).join(",");return this.find(n,o).filter(i=>!t.isDisabled(i)&&t.isVisible(i))},getSelectorFromElement(o){let n=e(o);return n&&r.findOne(n)?n:null},getElementFromSelector(o){let n=e(o);return n?r.findOne(n):null},getMultipleElementsFromSelector(o){let n=e(o);return n?r.find(n):[]}};return r})});var rm=Ae((ll,cl)=>{(function(t,e){typeof ll=="object"&&typeof cl<"u"?cl.exports=e(tm(),Ja(),em(),qr()):typeof define=="function"&&define.amd?define(["./base-component","./dom/event-handler","./dom/selector-engine","./util/index"],e):(t=typeof globalThis<"u"?globalThis:t||self,t.Tab=e(t.BaseComponent,t.EventHandler,t.SelectorEngine,t.Index))})(ll,function(t,e,r,o){"use strict";let n="tab",s=".bs.tab",a=`hide${s}`,l=`hidden${s}`,c=`show${s}`,h=`shown${s}`,m=`click${s}`,u=`keydown${s}`,f=`load${s}`,g="ArrowLeft",d="ArrowRight",w="ArrowUp",p="ArrowDown",v="Home",C="End",b="active",S="fade",_="show",I="dropdown",y=".dropdown-toggle",$=".dropdown-menu",M=`:not(${y})`,V='.list-group, .nav, [role="tablist"]',q=".nav-item, .list-group-item",G=`.nav-link${M}, .list-group-item${M}, [role="tab"]${M}`,Y='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Z=`${G}, ${Y}`,z=`.${b}[data-bs-toggle="tab"], .${b}[data-bs-toggle="pill"], .${b}[data-bs-toggle="list"]`;class L extends t{constructor(E){super(E),this._parent=this._element.closest(V),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),e.on(this._element,u,D=>this._keydown(D)))}static get NAME(){return n}show(){let E=this._element;if(this._elemIsActive(E))return;let D=this._getActiveElem(),H=D?e.trigger(D,a,{relatedTarget:E}):null;e.trigger(E,c,{relatedTarget:D}).defaultPrevented||H&&H.defaultPrevented||(this._deactivate(D,E),this._activate(E,D))}_activate(E,D){if(!E)return;E.classList.add(b),this._activate(r.getElementFromSelector(E));let H=()=>{if(E.getAttribute("role")!=="tab"){E.classList.add(_);return}E.removeAttribute("tabindex"),E.setAttribute("aria-selected",!0),this._toggleDropDown(E,!0),e.trigger(E,h,{relatedTarget:D})};this._queueCallback(H,E,E.classList.contains(S))}_deactivate(E,D){if(!E)return;E.classList.remove(b),E.blur(),this._deactivate(r.getElementFromSelector(E));let H=()=>{if(E.getAttribute("role")!=="tab"){E.classList.remove(_);return}E.setAttribute("aria-selected",!1),E.setAttribute("tabindex","-1"),this._toggleDropDown(E,!1),e.trigger(E,l,{relatedTarget:D})};this._queueCallback(H,E,E.classList.contains(S))}_keydown(E){if(![g,d,w,p,v,C].includes(E.key))return;E.stopPropagation(),E.preventDefault();let D=this._getChildren().filter(Q=>!o.isDisabled(Q)),H;if([v,C].includes(E.key))H=D[E.key===v?0:D.length-1];else{let Q=[d,p].includes(E.key);H=o.getNextActiveElement(D,E.target,Q,!0)}H&&(H.focus({preventScroll:!0}),L.getOrCreateInstance(H).show())}_getChildren(){return r.find(Z,this._parent)}_getActiveElem(){return this._getChildren().find(E=>this._elemIsActive(E))||null}_setInitialAttributes(E,D){this._setAttributeIfNotExists(E,"role","tablist");for(let H of D)this._setInitialAttributesOnChild(H)}_setInitialAttributesOnChild(E){E=this._getInnerElement(E);let D=this._elemIsActive(E),H=this._getOuterElement(E);E.setAttribute("aria-selected",D),H!==E&&this._setAttributeIfNotExists(H,"role","presentation"),D||E.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(E,"role","tab"),this._setInitialAttributesOnTargetPanel(E)}_setInitialAttributesOnTargetPanel(E){let D=r.getElementFromSelector(E);D&&(this._setAttributeIfNotExists(D,"role","tabpanel"),E.id&&this._setAttributeIfNotExists(D,"aria-labelledby",`${E.id}`))}_toggleDropDown(E,D){let H=this._getOuterElement(E);if(!H.classList.contains(I))return;let Q=(J,ft)=>{let bt=r.findOne(J,H);bt&&bt.classList.toggle(ft,D)};Q(y,b),Q($,_),H.setAttribute("aria-expanded",D)}_setAttributeIfNotExists(E,D,H){E.hasAttribute(D)||E.setAttribute(D,H)}_elemIsActive(E){return E.classList.contains(b)}_getInnerElement(E){return E.matches(Z)?E:r.findOne(Z,E)}_getOuterElement(E){return E.closest(q)||E}static jQueryInterface(E){return this.each(function(){let D=L.getOrCreateInstance(this);if(typeof E=="string"){if(D[E]===void 0||E.startsWith("_")||E==="constructor")throw new TypeError(`No method named "${E}"`);D[E]()}})}}return e.on(document,m,Y,function(O){["A","AREA"].includes(this.tagName)&&O.preventDefault(),!o.isDisabled(this)&&L.getOrCreateInstance(this).show()}),e.on(window,f,()=>{for(let O of r.find(z))L.getOrCreateInstance(O)}),o.defineJQueryPlugin(L),L})});var pr=new Map,zo=class extends HTMLElement{static observedAttributes=["src"];src=null;attributeChangedCallback(e,r,o){e==="src"&&(this.src=o,this.unregisterPageScriptElement(r),this.registerPageScriptElement(o))}disconnectedCallback(){this.unregisterPageScriptElement(this.src)}registerPageScriptElement(e){if(!e)throw new Error('Must provide a non-empty value for the "src" attribute.');let r=pr.get(e);r?r.referenceCount++:(r={referenceCount:1,module:null},pr.set(e,r),this.initializePageScriptModule(e,r))}unregisterPageScriptElement(e){if(!e)return;let r=pr.get(e);r&&r.referenceCount--}async initializePageScriptModule(e,r){e.startsWith("./")&&(e=new URL(e.substring(2),document.baseURI).toString());let o=await import(e);r.referenceCount<=0||(r.module=o,o.onLoad?.(),o.onUpdate?.())}};function pl(){for(let[t,{module:e,referenceCount:r}]of pr)r<=0&&(e?.onDispose?.(),pr.delete(t));for(let{module:t}of pr.values())t?.onUpdate?.()}var Do=globalThis,Io=Do.ShadowRoot&&(Do.ShadyCSS===void 0||Do.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pi=Symbol(),hl=new WeakMap,jr=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==Pi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(Io&&e===void 0){let o=r!==void 0&&r.length===1;o&&(e=hl.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&hl.set(r,e))}return e}toString(){return this.cssText}},ml=t=>new jr(typeof t=="string"?t:t+"",void 0,Pi),ht=(t,...e)=>{let r=t.length===1?t[0]:e.reduce((o,n,i)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1],t[0]);return new jr(r,t,Pi)},gl=(t,e)=>{if(Io)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let o=document.createElement("style"),n=Do.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,t.appendChild(o)}},$i=Io?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let o of e.cssRules)r+=o.cssText;return ml(r)})(t):t;var{is:um,defineProperty:dm,getOwnPropertyDescriptor:fm,getOwnPropertyNames:pm,getOwnPropertySymbols:hm,getPrototypeOf:mm}=Object,Ro=globalThis,vl=Ro.trustedTypes,gm=vl?vl.emptyScript:"",vm=Ro.reactiveElementPolyfillSupport,Ur=(t,e)=>t,Kr={toAttribute(t,e){switch(e){case Boolean:t=t?gm:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Fo=(t,e)=>!um(t,e),bl={attribute:!0,type:String,converter:Kr,reflect:!1,useDefault:!1,hasChanged:Fo};Symbol.metadata??=Symbol("metadata"),Ro.litPropertyMetadata??=new WeakMap;var ge=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=bl){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){let o=Symbol(),n=this.getPropertyDescriptor(e,o,r);n!==void 0&&dm(this.prototype,e,n)}}static getPropertyDescriptor(e,r,o){let{get:n,set:i}=fm(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get:n,set(s){let a=n?.call(this);i?.call(this,s),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??bl}static _$Ei(){if(this.hasOwnProperty(Ur("elementProperties")))return;let e=mm(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ur("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ur("properties"))){let r=this.properties,o=[...pm(r),...hm(r)];for(let n of o)this.createProperty(n,r[n])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[o,n]of r)this.elementProperties.set(o,n)}this._$Eh=new Map;for(let[r,o]of this.elementProperties){let n=this._$Eu(r,o);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let n of o)r.unshift($i(n))}else e!==void 0&&r.push($i(e));return r}static _$Eu(e,r){let o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gl(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$ET(e,r){let o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(n!==void 0&&o.reflect===!0){let i=(o.converter?.toAttribute!==void 0?o.converter:Kr).toAttribute(r,o.type);this._$Em=e,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,r){let o=this.constructor,n=o._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let i=o.getPropertyOptions(n),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Kr;this._$Em=n;let a=s.fromAttribute(r,i.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(e,r,o,n=!1,i){if(e!==void 0){let s=this.constructor;if(n===!1&&(i=this[e]),o??=s.getPropertyOptions(e),!((o.hasChanged??Fo)(i,r)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,o))))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:o,reflect:n,wrapped:i},s){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??r??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(r=void 0),this._$AL.set(e,r)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[n,i]of o){let{wrapped:s}=i,a=this[n];s!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,i,a)}}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};ge.elementStyles=[],ge.shadowRootOptions={mode:"open"},ge[Ur("elementProperties")]=new Map,ge[Ur("finalized")]=new Map,vm?.({ReactiveElement:ge}),(Ro.reactiveElementVersions??=[]).push("2.1.2");var Oi=globalThis,wl=t=>t,No=Oi.trustedTypes,yl=No?No.createPolicy("lit-html",{createHTML:t=>t}):void 0,_i="$lit$",ve=`lit$${Math.random().toFixed(9).slice(2)}$`,zi="?"+ve,bm=`<${zi}>`,We=document,Xr=()=>We.createComment(""),Gr=t=>t===null||typeof t!="object"&&typeof t!="function",Di=Array.isArray,Al=t=>Di(t)||typeof t?.[Symbol.iterator]=="function",Ti=`[ 	
\f\r]`,Yr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xl=/-->/g,Cl=/>/g,Ve=RegExp(`>|${Ti}(?:([^\\s"'>=/]+)(${Ti}*=${Ti}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sl=/'/g,kl=/"/g,Ll=/^(?:script|style|textarea|title)$/i,Ii=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),ut=Ii(1),Ml=Ii(2),Pl=Ii(3),xt=Symbol.for("lit-noChange"),dt=Symbol.for("lit-nothing"),El=new WeakMap,He=We.createTreeWalker(We,129);function $l(t,e){if(!Di(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return yl!==void 0?yl.createHTML(e):e}var Tl=(t,e)=>{let r=t.length-1,o=[],n,i=e===2?"<svg>":e===3?"<math>":"",s=Yr;for(let a=0;a<r;a++){let l=t[a],c,h,m=-1,u=0;for(;u<l.length&&(s.lastIndex=u,h=s.exec(l),h!==null);)u=s.lastIndex,s===Yr?h[1]==="!--"?s=xl:h[1]!==void 0?s=Cl:h[2]!==void 0?(Ll.test(h[2])&&(n=RegExp("</"+h[2],"g")),s=Ve):h[3]!==void 0&&(s=Ve):s===Ve?h[0]===">"?(s=n??Yr,m=-1):h[1]===void 0?m=-2:(m=s.lastIndex-h[2].length,c=h[1],s=h[3]===void 0?Ve:h[3]==='"'?kl:Sl):s===kl||s===Sl?s=Ve:s===xl||s===Cl?s=Yr:(s=Ve,n=void 0);let f=s===Ve&&t[a+1].startsWith("/>")?" ":"";i+=s===Yr?l+bm:m>=0?(o.push(c),l.slice(0,m)+_i+l.slice(m)+ve+f):l+ve+(m===-2?a:f)}return[$l(t,i+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},Qr=class t{constructor({strings:e,_$litType$:r},o){let n;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,h]=Tl(e,r);if(this.el=t.createElement(c,o),He.currentNode=this.el.content,r===2||r===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(n=He.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(let m of n.getAttributeNames())if(m.endsWith(_i)){let u=h[s++],f=n.getAttribute(m).split(ve),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:i,name:g[2],strings:f,ctor:g[1]==="."?Vo:g[1]==="?"?Ho:g[1]==="@"?Wo:je}),n.removeAttribute(m)}else m.startsWith(ve)&&(l.push({type:6,index:i}),n.removeAttribute(m));if(Ll.test(n.tagName)){let m=n.textContent.split(ve),u=m.length-1;if(u>0){n.textContent=No?No.emptyScript:"";for(let f=0;f<u;f++)n.append(m[f],Xr()),He.nextNode(),l.push({type:2,index:++i});n.append(m[u],Xr())}}}else if(n.nodeType===8)if(n.data===zi)l.push({type:2,index:i});else{let m=-1;for(;(m=n.data.indexOf(ve,m+1))!==-1;)l.push({type:7,index:i}),m+=ve.length-1}i++}}static createElement(e,r){let o=We.createElement("template");return o.innerHTML=e,o}};function qe(t,e,r=t,o){if(e===xt)return e;let n=o!==void 0?r._$Co?.[o]:r._$Cl,i=Gr(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(t),n._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=n:r._$Cl=n),n!==void 0&&(e=qe(t,n._$AS(t,e.values),n,o)),e}var Bo=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:o}=this._$AD,n=(e?.creationScope??We).importNode(r,!0);He.currentNode=n;let i=He.nextNode(),s=0,a=0,l=o[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new hr(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new qo(i,this,e)),this._$AV.push(c),l=o[++a]}s!==l?.index&&(i=He.nextNode(),s++)}return He.currentNode=We,n}p(e){let r=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}},hr=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,n){this.type=2,this._$AH=dt,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=qe(this,e,r),Gr(e)?e===dt||e==null||e===""?(this._$AH!==dt&&this._$AR(),this._$AH=dt):e!==this._$AH&&e!==xt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Al(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==dt&&Gr(this._$AH)?this._$AA.nextSibling.data=e:this.T(We.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Qr.createElement($l(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{let i=new Bo(n,this),s=i.u(this.options);i.p(r),this.T(s),this._$AH=i}}_$AC(e){let r=El.get(e.strings);return r===void 0&&El.set(e.strings,r=new Qr(e)),r}k(e){Di(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,o,n=0;for(let i of e)n===r.length?r.push(o=new t(this.O(Xr()),this.O(Xr()),this,this.options)):o=r[n],o._$AI(i),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){let o=wl(e).nextSibling;wl(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},je=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,n,i){this.type=1,this._$AH=dt,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=dt}_$AI(e,r=this,o,n){let i=this.strings,s=!1;if(i===void 0)e=qe(this,e,r,0),s=!Gr(e)||e!==this._$AH&&e!==xt,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=qe(this,a[o+l],r,l),c===xt&&(c=this._$AH[l]),s||=!Gr(c)||c!==this._$AH[l],c===dt?e=dt:e!==dt&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!n&&this.j(e)}j(e){e===dt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Vo=class extends je{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===dt?void 0:e}},Ho=class extends je{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==dt)}},Wo=class extends je{constructor(e,r,o,n,i){super(e,r,o,n,i),this.type=5}_$AI(e,r=this){if((e=qe(this,e,r,0)??dt)===xt)return;let o=this._$AH,n=e===dt&&o!==dt||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==dt&&(o===dt||n);n&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},qo=class{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){qe(this,e)}},Ol={M:_i,P:ve,A:zi,C:1,L:Tl,R:Bo,D:Al,V:qe,I:hr,H:je,N:Ho,U:Wo,B:Vo,F:qo},wm=Oi.litHtmlPolyfillSupport;wm?.(Qr,hr),(Oi.litHtmlVersions??=[]).push("3.3.3");var _l=(t,e,r)=>{let o=r?.renderBefore??e,n=o._$litPart$;if(n===void 0){let i=r?.renderBefore??null;o._$litPart$=n=new hr(e.insertBefore(Xr(),i),i,void 0,r??{})}return n._$AI(t),n};var Ri=globalThis,oe=class extends ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_l(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return xt}};oe._$litElement$=!0,oe.finalized=!0,Ri.litElementHydrateSupport?.({LitElement:oe});var ym=Ri.litElementPolyfillSupport;ym?.({LitElement:oe});(Ri.litElementVersions??=[]).push("4.2.2");var zl=ht`
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
`;var xm=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,Dl=t=>{throw TypeError(t)},k=(t,e,r,o)=>{for(var n=o>1?void 0:o?Cm(e,r):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=(o?s(e,r,n):s(n))||n);return o&&n&&xm(e,r,n),n},Il=(t,e,r)=>e.has(t)||Dl("Cannot "+r),Rl=(t,e,r)=>(Il(t,e,"read from private field"),r?r.call(t):e.get(t)),Fl=(t,e,r)=>e.has(t)?Dl("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),Nl=(t,e,r,o)=>(Il(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r);var Pt=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var Sm={attribute:!0,type:String,converter:Kr,reflect:!1,hasChanged:Fo},km=(t=Sm,e,r)=>{let{kind:o,metadata:n}=r,i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(r.name,t),o==="accessor"){let{name:s}=r;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,t,a),a}}}if(o==="setter"){let{name:s}=r;return function(a){let l=this[s];e.call(this,a),this.requestUpdate(s,l,t,!0,a)}}throw Error("Unsupported decorator location: "+o)};function T(t){return(e,r)=>typeof r=="object"?km(t,e,r):((o,n,i)=>{let s=n.hasOwnProperty(i);return n.constructor.createProperty(i,o),s?Object.getOwnPropertyDescriptor(n,i):void 0})(t,e,r)}function yt(t){return T({...t,state:!0,attribute:!1})}function Bl(t){return(e,r)=>{let o=typeof e=="function"?e:e[r];Object.assign(o,t)}}var Ue=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);function vt(t,e){return(r,o,n)=>{let i=s=>s.renderRoot?.querySelector(t)??null;if(e){let{get:s,set:a}=typeof o=="object"?r:n??(()=>{let l=Symbol();return{get(){return this[l]},set(c){this[l]=c}}})();return Ue(r,o,{get(){let l=s.call(this);return l===void 0&&(l=i(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return Ue(r,o,{get(){return i(this)}})}}var Em=ht`
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
`,Am=/;\s+$/;function Lm(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function Vl(t){let{property:e,value:r,element:o}=t;if(r){let n=o.getAttribute("style")||"";n&&(n.match(Am)||(n+=";"),n+=" ");let i=`${e}: ${r}`;return n.includes(i)?void 0:`${n}${i};`}return null}var jo,Ot=class extends oe{constructor(){super(),Fl(this,jo,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,r)=>{if(this.internals?.states)try{r?this.internals.states.add(e):this.internals.states.delete(e)}catch(o){if(String(o).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw o}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,r]of t.elementProperties)r.default==="inherit"&&r.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${r.initial}`,!0)}static get styles(){let t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Em,...t]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))})}attributeChangedCallback(t,e,r){Rl(this,jo)||(this.constructor.elementProperties.forEach((o,n)=>{o.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),Nl(this,jo,!0)),super.attributeChangedCallback(t,e,r)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,r)=>{t.has(r)&&this[r]==null&&(this[r]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){let r=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});r.error=e,this.dispatchEvent(r)}throw e}}setStyle(t,e){if(!this.style){let r=Vl({property:Lm(t),value:e,element:this});r&&this.setAttribute("style",r);return}this.style[t]=e}setStyleProperty(t,e){if(!this.style){let r=Vl({property:t,value:e,element:this});r&&this.setAttribute("style",r);return}this.style.setProperty(t,e)}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};jo=new WeakMap;k([T()],Ot.prototype,"dir",2);k([T()],Ot.prototype,"lang",2);k([T({type:Boolean,reflect:!0,attribute:"did-ssr"})],Ot.prototype,"didSSR",2);var Hl=function(t,e,r){},Uo=class{static render(e,r,o){Hl(e,r,o)}};(function(t){function e(u,f,g,d){var w=t(g,f);w.addData(u),w.make(),d=d||0;var p=w.getModuleCount(),v=w.getModuleCount()+2*d;function C(b,S){return b-=d,S-=d,b<0||b>=p||S<0||S>=p?!1:w.isDark(b,S)}return{text:u,level:f,version:g,moduleCount:v,isDark:C}}function r(u,f,g,d,w){g=Math.max(1,g||1),d=Math.min(40,d||40);for(var p=g;p<=d;p+=1)try{return e(u,f,p,w)}catch{}}function o(u,f,g){g.background&&(f.fillStyle=g.background,f.fillRect(g.left,g.top,g.size,g.size))}function n(u,f,g,d,w,p,v,C,b,S){v?u.moveTo(f+p,g):u.moveTo(f,g);function _(I,y,$,M,V,q,G){I?(u.lineTo(y+q,$+G),u.arcTo(y,$,M,V,p)):u.lineTo(y,$)}_(C,d,g,d,w,-p,0),_(b,d,w,f,w,0,-p),_(S,f,w,f,g,p,0),_(v,f,g,d,g,0,p)}function i(u,f,g,d,w,p,v,C,b,S){function _(I,y,$,M){u.moveTo(I+$,y),u.lineTo(I,y),u.lineTo(I,y+M),u.arcTo(I,y,I+$,y,p)}v&&_(f,g,p,p),C&&_(d,g,-p,p),b&&_(d,w,-p,-p),S&&_(f,w,p,-p)}function s(u,f,g,d,w,p,v,C){var b=u.isDark,S=d+p,_=w+p,I=v-1,y=v+1,$=C-1,M=C+1,V=Math.floor(Math.min(.5,Math.max(0,g.radius))*p),q=b(v,C),G=b(I,$),Y=b(I,C),Z=b(I,M),z=b(v,M),L=b(y,M),O=b(y,C),E=b(y,$),D=b(v,$);d=Math.round(d),w=Math.round(w),S=Math.round(S),_=Math.round(_),q?n(f,d,w,S,_,V,!Y&&!D,!Y&&!z,!O&&!z,!O&&!D):i(f,d,w,S,_,V,Y&&D&&G,Y&&z&&Z,O&&z&&L,O&&D&&E)}function a(u,f,g,d){var w=u.moduleCount,p=g.size/w,v=0,C=0;f.beginPath();let b=7+g.quiet;for(v=0;v<w;v+=1)for(C=0;C<w;C+=1)if((C<b&&v<b||C>=w-b&&v<b||C<b&&v>=w-b)===d){var S=g.left+C*p,_=g.top+v*p,I=p;s(u,f,g,S,_,I,v,C)}l(f,g,d),f.fill()}function l(u,f,g){let d=g&&f.cornerFill||f.fill;if(typeof d=="string"){u.fillStyle=d;return}let w=d.type,p=d.position,v=d.colorStops,C;if(w==="linear-gradient"){let b=p.slice(0,4).map(S=>Math.round(S*f.size));C=u.createLinearGradient.apply(u,b)}else if(w==="radial-gradient"){let b=p.slice(0,6).map(S=>Math.round(S*f.size));C=u.createRadialGradient.apply(u,b)}else throw new Error("Unsupported fill");v.forEach(([b,S])=>{C.addColorStop(b,S)}),u.fillStyle=C}function c(u,f,g){if(u=r(g.text,g.ecLevel,g.minVersion,g.maxVersion,g.quiet),!u)return null;var d=f.getContext("2d");return d&&(o(u,d,g),a(u,d,g,!0),a(u,d,g,!1)),f}function h(u,f){var g=document.createElement("canvas");return g.width=f.size,g.height=f.size,c(u,g,f)}var m={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",cornerFill:null,background:null,text:"no text",radius:.5,quiet:0,image:null,imageEcCover:.5};Hl=function(u,f,g){var d=Object.assign({},m,u);d.minVersion=d.minVersion,d.maxVersion=d.maxVersion,d.ecLevel=d.ecLevel,d.left=d.left,d.top=d.top,d.size=d.size,d.fill=d.fill,d.background=d.background,d.text=d.text,d.radius=d.radius,d.quiet=d.quiet,d.cornerFill=d.cornerFill||d.fill,d.image=d.image,d.imageBackground=d.imageBackground,d.imageEcCover=d.imageEcCover,d.imagePadding=d.imagePadding;var w=r(d.text,d.ecLevel,d.minVersion,d.maxVersion,d.quiet);if(!w)return;g=g||function(){};let p=function(){var v=f;if(f instanceof HTMLCanvasElement){(f.width!==d.size||f.height!==d.size)&&(f.width=d.size,f.height=d.size);let C=f.getContext("2d");C&&C.clearRect(0,0,f.width,f.height),c(w,f,d)}else if(w){let C=h(w,d);C&&(v=C,f.appendChild(v))}return v};if(d.image){let v=new Image;v.onload=function(){if(!w)return;let C=d.imageEcCover??m.imageEcCover,b=w.moduleCount-d.quiet*2,S=d.size/b,_=v.naturalWidth/v.naturalHeight,I=d.size*C;I=Math.min(I,I*_);let y=d.size*C;y=Math.min(y,y/_);let $=b*b-(49*3+25),M={L:.07,M:.15,Q:.25,H:.3}[d.ecLevel]*C*$|0;var V=Math.min(b,Math.sqrt(M*_)|0,I),q=V/_|0;q>b&&(q=b,V=q*_|0),q=Math.min(q,y);let G=w.moduleCount/2-V/2|0,Y=w.moduleCount/2-q/2|0,Z=w.isDark;w.isDark=function(x,P){return G<=P&&P<G+V&&Y<=x&&x<Y+q?!1:Z(x,P)};let z=Math.min(V,q*_)-d.quiet,L=Math.min(q,V/_)-d.quiet,O=G+(V-z)/2-d.quiet,E=Y+(q-L)/2-d.quiet,D=O*S,H=E*S,Q=z*S,J=L*S;var ft=p();let bt=ft.getContext("2d");bt&&(bt.fillStyle=d.imageBackground||"transparent",bt.fillRect(D-4,H-4,Q+8,J+8),bt.drawImage(v,D,H,Q,J)),g()},v.onerror=()=>{p(),g()},v.src=d.image}else p(),g()}})(function(){var t=function(){function e(m,u){var f=236,g=17,d=m,w=o[u],p=null,v=0,C=null,b=new Array,S={},_=function(z,L){v=d*4+17,p=function(O){for(var E=new Array(O),D=0;D<O;D+=1){E[D]=new Array(O);for(var H=0;H<O;H+=1)E[D][H]=null}return E}(v),I(0,0),I(v-7,0),I(0,v-7),M(),$(),q(z,L),d>=7&&V(z),C==null&&(C=Z(d,w,b)),G(C,L)},I=function(z,L){if(p!=null){for(var O=-1;O<=7;O+=1)if(!(z+O<=-1||v<=z+O))for(var E=-1;E<=7;E+=1)L+E<=-1||v<=L+E||(0<=O&&O<=6&&(E==0||E==6)||0<=E&&E<=6&&(O==0||O==6)||2<=O&&O<=4&&2<=E&&E<=4?p[z+O][L+E]=!0:p[z+O][L+E]=!1)}},y=function(){for(var z=0,L=0,O=0;O<8;O+=1){_(!0,O);var E=i.getLostPoint(S);(O==0||z>E)&&(z=E,L=O)}return L},$=function(){if(p){for(var z=8;z<v-8;z+=1)p[z][6]==null&&(p[z][6]=z%2==0);for(var L=8;L<v-8;L+=1)p[6][L]==null&&(p[6][L]=L%2==0)}},M=function(){if(p)for(var z=i.getPatternPosition(d),L=0;L<z.length;L+=1)for(var O=0;O<z.length;O+=1){var E=z[L],D=z[O];if(p[E][D]==null)for(var H=-2;H<=2;H+=1)for(var Q=-2;Q<=2;Q+=1)p[E+H][D+Q]=H==-2||H==2||Q==-2||Q==2||H==0&&Q==0}},V=function(z){if(p){for(var L=i.getBCHTypeNumber(d),O=0;O<18;O+=1){var E=!z&&(L>>O&1)==1;p[Math.floor(O/3)][O%3+v-8-3]=E}for(var O=0;O<18;O+=1){var E=!z&&(L>>O&1)==1;p[O%3+v-8-3][Math.floor(O/3)]=E}}},q=function(z,L){var O=w<<3|L,E=i.getBCHTypeInfo(O);if(p){for(var D=0;D<15;D+=1){let H=!z&&(E>>D&1)==1;p[D<6?D:D<8?D+1:v-15+D][8]=H,p[8][D<8?v-D-1:D<9?15-D:14-D]=H}p[v-8][8]=!z}},G=function(z,L){for(var O=-1,E=v-1,D=7,H=0,Q=i.getMaskFunction(L),J=v-1;J>0;J-=2)for(J==6&&(J-=1);;){for(var ft=0;ft<2;ft+=1)if(p&&p[E][J-ft]==null){var bt=!1;H<z.length&&(bt=(z[H]>>>D&1)==1);var x=Q(E,J-ft);x&&(bt=!bt),p[E][J-ft]=bt,D-=1,D==-1&&(H+=1,D=7)}if(E+=O,E<0||v<=E){E-=O,O=-O;break}}},Y=function(z,L){for(var O=0,E=0,D=0,H=new Array(L.length),Q=new Array(L.length),J=0;J<L.length;J+=1){var ft=L[J].dataCount,bt=L[J].totalCount-ft;E=Math.max(E,ft),D=Math.max(D,bt),H[J]=new Array(ft);for(var x=0;x<H[J].length;x+=1)H[J][x]=255&z.getBuffer()[x+O];O+=ft;var P=i.getErrorCorrectPolynomial(bt),R=a(H[J],P.getLength()-1),N=R.mod(P);Q[J]=new Array(P.getLength()-1);for(var x=0;x<Q[J].length;x+=1){var K=x+N.getLength()-Q[J].length;Q[J][x]=K>=0?N.getAt(K):0}}for(var j=0,x=0;x<L.length;x+=1)j+=L[x].totalCount;for(var A=new Array(j),F=0,x=0;x<E;x+=1)for(var J=0;J<L.length;J+=1)x<H[J].length&&(A[F]=H[J][x],F+=1);for(var x=0;x<D;x+=1)for(var J=0;J<L.length;J+=1)x<Q[J].length&&(A[F]=Q[J][x],F+=1);return A},Z=function(z,L,O){for(var E=l.getRSBlocks(z,L),D=c(),H=0;H<O.length;H+=1){var Q=O[H];D.put(Q.getMode(),4),D.put(Q.getLength(),i.getLengthInBits(Q.getMode(),z)),Q.write(D)}for(var J=0,H=0;H<E.length;H+=1)J+=E[H].dataCount;if(D.getLengthInBits()>J*8)throw new Error("code length overflow. ("+D.getLengthInBits()+">"+J*8+")");for(D.getLengthInBits()+4<=J*8&&D.put(0,4);D.getLengthInBits()%8!=0;)D.putBit(!1);for(;!(D.getLengthInBits()>=J*8||(D.put(f,8),D.getLengthInBits()>=J*8));)D.put(g,8);return Y(D,E)};return S.addData=function(z){var L=h(z);b.push(L),C=null},S.isDark=function(z,L){if(!p)throw new Error("_modules is null");if(z<0||v<=z||L<0||v<=L)throw new Error(z+","+L);return p[z][L]},S.getModuleCount=function(){return v},S.make=function(){_(!1,y())},S}e.stringToBytes=function(m){return new TextEncoder().encode(m)};var r={MODE_8BIT_BYTE:4},o={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i=function(){var m=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],u=1335,f=7973,g=21522,d={},w=function(p){for(var v=0;p!=0;)v+=1,p>>>=1;return v};return d.getBCHTypeInfo=function(p){for(var v=p<<10;w(v)-w(u)>=0;)v^=u<<w(v)-w(u);return(p<<10|v)^g},d.getBCHTypeNumber=function(p){for(var v=p<<12;w(v)-w(f)>=0;)v^=f<<w(v)-w(f);return p<<12|v},d.getPatternPosition=function(p){return m[p-1]},d.getMaskFunction=function(p){switch(p){case n.PATTERN000:return function(v,C){return(v+C)%2==0};case n.PATTERN001:return function(v,C){return v%2==0};case n.PATTERN010:return function(v,C){return C%3==0};case n.PATTERN011:return function(v,C){return(v+C)%3==0};case n.PATTERN100:return function(v,C){return(Math.floor(v/2)+Math.floor(C/3))%2==0};case n.PATTERN101:return function(v,C){return v*C%2+v*C%3==0};case n.PATTERN110:return function(v,C){return(v*C%2+v*C%3)%2==0};case n.PATTERN111:return function(v,C){return(v*C%3+(v+C)%2)%2==0};default:throw new Error("bad maskPattern:"+p)}},d.getErrorCorrectPolynomial=function(p){for(var v=a([1],0),C=0;C<p;C+=1)v=v.multiply(a([1,s.gexp(C)],0));return v},d.getLengthInBits=function(p,v){if(p!=r.MODE_8BIT_BYTE||v<1||v>40)throw new Error("mode: "+p+"; type: "+v);return v<10?8:16},d.getLostPoint=function(p){for(var v=p.getModuleCount(),C=0,b=0;b<v;b+=1)for(var S=0;S<v;S+=1){for(var _=0,I=p.isDark(b,S),y=-1;y<=1;y+=1)if(!(b+y<0||v<=b+y))for(var $=-1;$<=1;$+=1)S+$<0||v<=S+$||y==0&&$==0||I==p.isDark(b+y,S+$)&&(_+=1);_>5&&(C+=3+_-5)}for(var b=0;b<v-1;b+=1)for(var S=0;S<v-1;S+=1){var M=0;p.isDark(b,S)&&(M+=1),p.isDark(b+1,S)&&(M+=1),p.isDark(b,S+1)&&(M+=1),p.isDark(b+1,S+1)&&(M+=1),(M==0||M==4)&&(C+=3)}for(var b=0;b<v;b+=1)for(var S=0;S<v-6;S+=1)p.isDark(b,S)&&!p.isDark(b,S+1)&&p.isDark(b,S+2)&&p.isDark(b,S+3)&&p.isDark(b,S+4)&&!p.isDark(b,S+5)&&p.isDark(b,S+6)&&(C+=40);for(var S=0;S<v;S+=1)for(var b=0;b<v-6;b+=1)p.isDark(b,S)&&!p.isDark(b+1,S)&&p.isDark(b+2,S)&&p.isDark(b+3,S)&&p.isDark(b+4,S)&&!p.isDark(b+5,S)&&p.isDark(b+6,S)&&(C+=40);for(var V=0,S=0;S<v;S+=1)for(var b=0;b<v;b+=1)p.isDark(b,S)&&(V+=1);var q=Math.abs(100*V/v/v-50)/5;return C+=q*10,C},d}(),s=function(){for(var m=new Array(256),u=new Array(256),f=0;f<8;f+=1)u[f]=1<<f;for(var f=8;f<256;f+=1)u[f]=u[f-4]^u[f-5]^u[f-6]^u[f-8];for(var f=0;f<255;f+=1)m[u[f]]=f;var g={};return g.glog=function(d){if(d<1)throw new Error("glog("+d+")");return m[d]},g.gexp=function(d){for(;d<0;)d+=255;for(;d>=256;)d-=255;return u[d]},g}();function a(m,u){if(typeof m.length>"u")throw new Error(m.length+"/"+u);var f=function(){for(var d=0;d<m.length&&m[d]==0;)d+=1;for(var w=new Array(m.length-d+u),p=0;p<m.length-d;p+=1)w[p]=m[p+d];return w}(),g={};return g.getAt=function(d){return f[d]},g.getLength=function(){return f.length},g.multiply=function(d){for(var w=new Array(g.getLength()+d.getLength()-1),p=0;p<g.getLength();p+=1)for(var v=0;v<d.getLength();v+=1)w[p+v]^=s.gexp(s.glog(g.getAt(p))+s.glog(d.getAt(v)));return a(w,0)},g.mod=function(d){if(g.getLength()-d.getLength()<0)return g;for(var w=s.glog(g.getAt(0))-s.glog(d.getAt(0)),p=new Array(g.getLength()),v=0;v<g.getLength();v+=1)p[v]=g.getAt(v);for(var v=0;v<d.getLength();v+=1)p[v]^=s.gexp(s.glog(d.getAt(v))+w);return a(p,0).mod(d)},g}var l=function(){var m=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u=function(d,w){var p={};return p.totalCount=d,p.dataCount=w,p},f={},g=function(d,w){switch(w){case o.L:return m[(d-1)*4+0];case o.M:return m[(d-1)*4+1];case o.Q:return m[(d-1)*4+2];case o.H:return m[(d-1)*4+3];default:return}};return f.getRSBlocks=function(d,w){var p=g(d,w);if(typeof p>"u")throw new Error("bad rs block @ typeNumber:"+d+"/errorCorrectLevel:"+w);for(var v=p.length/3,C=new Array,b=0;b<v;b+=1)for(var S=p[b*3+0],_=p[b*3+1],I=p[b*3+2],y=0;y<S;y+=1)C.push(u(_,I));return C},f}(),c=function(){var m=new Array,u=0,f={};return f.getBuffer=function(){return m},f.getAt=function(g){var d=Math.floor(g/8);return(m[d]>>>7-g%8&1)==1},f.put=function(g,d){for(var w=0;w<d;w+=1)f.putBit((g>>>d-w-1&1)==1)},f.getLengthInBits=function(){return u},f.putBit=function(g){var d=Math.floor(u/8);m.length<=d&&m.push(0),g&&(m[d]|=128>>>u%8),u+=1},f},h=function(m){var u=r.MODE_8BIT_BYTE,f=e.stringToBytes(m),g={};return g.getMode=function(){return u},g.getLength=function(d){return f.length},g.write=function(d){for(var w=0;w<f.length;w+=1)d.put(f[w],8)},g};return e}();return t}());var _t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zt=t=>(...e)=>({_$litDirective$:t,values:e}),Vt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};var Wl="important",Mm=" !"+Wl,Ut=zt(class extends Vt{constructor(t){if(super(t),t.type!==_t.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{let o=t[r];return o==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){let{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?r.removeProperty(o):r[o]=null);for(let o in e){let n=e[o];if(n!=null){this.ft.add(o);let i=typeof n=="string"&&n.endsWith(Mm);o.includes("-")||i?r.setProperty(o,i?n.slice(0,-11):n,i?Wl:""):r[o]=n}}return xt}});var It=class extends Ot{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="",this.background="",this.radius=0,this.errorCorrection="H",this.image=null,this.imageBackground=null,this.imageCoverage=null,this.imagePadding=null,this.computedStyle=null}updated(t){super.updated(t),this.generate()}generate(){if(!this.hasUpdated)return;this.canvas.style.maxWidth=`${this.size}px`,this.canvas.style.maxHeight=`${this.size}px`,this.computedStyle||(this.computedStyle=getComputedStyle(this));let t=this.computedStyle,e=this.shadowRoot?.querySelector("span");e&&(this.spanComputedStyle||(this.spanComputedStyle=getComputedStyle(e))),Uo.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill||t.color,background:this.background||null,size:this.size*2,image:this.image,imageEcCover:this.imageCoverage,imagePadding:this.imagePadding,imageBackground:this.imageBackground||this.background,cornerFill:this.spanComputedStyle?.color},this.canvas)}render(){return ut`
      <canvas
        part="base qr-code"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        style=${Ut({maxWidth:`${this.size}px`,maxHeight:`${this.size}px`,minWidth:`${this.size}px`,minHeight:`${this.size}px`})}
        @transitionend=${t=>{t.propertyName==="color"&&this.generate()}}
      >
        <span style="color: var(--corner-color);"></span>
      </canvas>
    `}};It.css=zl;k([vt("canvas")],It.prototype,"canvas",2);k([T()],It.prototype,"value",2);k([T()],It.prototype,"label",2);k([T({type:Number})],It.prototype,"size",2);k([T()],It.prototype,"fill",2);k([T()],It.prototype,"background",2);k([T({type:Number})],It.prototype,"radius",2);k([T({attribute:"error-correction"})],It.prototype,"errorCorrection",2);k([T()],It.prototype,"image",2);k([T({attribute:"image-background"})],It.prototype,"imageBackground",2);k([T({attribute:"image-coverage",type:Number})],It.prototype,"imageCoverage",2);k([T({attribute:"image-padding",type:Number})],It.prototype,"imagePadding",2);It=k([Pt("wa-qr-code")],It);var ql=ht`
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
`;var jl=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};var Ul=class extends Event{constructor(t){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0}),this.detail=t}};var Kl=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}};var Yl=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}};var Xl=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var Gl=ht`
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
`;var Fi=new Set,mr=new Map,be,Ni="ltr",Bi="en",Ql=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Ql){let t=new MutationObserver(Zl);Ni=document.documentElement.dir||"ltr",Bi=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Zr(...t){t.map(e=>{let r=e.$code.toLowerCase();mr.has(r)?mr.set(r,Object.assign(Object.assign({},mr.get(r)),e)):mr.set(r,e),be||(be=e)}),Zl()}function Zl(){Ql&&(Ni=document.documentElement.dir||"ltr",Bi=document.documentElement.lang||navigator.language),[...Fi.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var Ko=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Fi.add(this.host)}hostDisconnected(){Fi.delete(this.host)}dir(){return`${this.host.dir||Ni}`.toLowerCase()}lang(){let e=`${this.host.lang||Bi}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(e),e}catch{return be?be.$code.toLowerCase():"en"}}getTranslationData(e){var r,o;let n;try{n=new Intl.Locale(e.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let i=n.language.toLowerCase(),s=(o=(r=n.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",a=mr.get(`${i}-${s}`),l=mr.get(i);return{locale:n,language:i,region:s,primary:a,secondary:l}}exists(e,r){var o;let{primary:n,secondary:i}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(n&&n[e]||i&&i[e]||r.includeFallback&&be&&be[e])}term(e,...r){let{primary:o,secondary:n}=this.getTranslationData(this.lang()),i;if(o&&o[e])i=o[e];else if(n&&n[e])i=n[e];else if(be&&be[e])i=be[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i=="function"?i(...r):i}date(e,r){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),r).format(e)}number(e,r){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),r).format(e)}relativeTime(e,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,r)}};var Jl={$code:"en",$name:"English",$dir:"ltr",am:"AM",autosizeColumn:"Autosize column",captions:"Captions",carousel:"Carousel",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseTime:"Choose time",chooseYear:"Choose year",clearEntry:"Clear entry",clearFilter:"Clear filter",clearSort:"Clear sort",close:"Close",closeCalendar:"Close calendar",closeTimeInput:"Close time picker",collapseRow:"Collapse row",columnMenu:"Column options",columnMovedToPosition:(t,e,r)=>`${t} moved to position ${e} of ${r}`,columns:"Columns",compactPageXOfY:(t,e)=>`${t} of ${e}`,copied:"Copied",copy:"Copy",createOption:t=>`Create "${t}"`,currentlyPlaying:"currently playing",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",dayPeriod:"AM/PM",decrement:"Decrement",deselectAllRows:"Deselect all rows",dropFileHere:"Drop file here or click to browse",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",enterFullscreen:"Enter fullscreen",error:"Error",exitFullscreen:"Exit fullscreen",expandRow:"Expand row",filterByColumn:t=>`Filter by ${t}`,filterFrom:"From",filterMax:"Max",filterMin:"Min",filterTo:"To",firstPage:"First page",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hideColumn:"Hide column",hidePassword:"Hide password",hour:"Hour",incompleteDate:"Enter a valid date.",increment:"Increment",jumpBackwardX:t=>`Jump back ${t} pages`,jumpForwardX:t=>`Jump forward ${t} pages`,lastPage:"Last page",loading:"Loading",minute:"Minute",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextPage:"Next page",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",noData:"No data",noResults:"No matching results",now:"Now",numCharacters:t=>t===1?"1 character":`${t} characters`,numCharactersRemaining:t=>t===1?"1 character remaining":`${t} characters remaining`,numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,numRowsCopied:t=>t===1?"1 row copied":`${t} rows copied`,numRowsSelected:t=>t===1?"1 row selected":`${t} rows selected`,pageXOfY:(t,e)=>`Page ${t} of ${e}`,pagination:"Pagination",pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",pinLeft:"Pin left",pinRight:"Pin right",play:"Play",playAnimation:"Play animation",playbackSpeed:"Playback speed",playlist:"Playlist",pm:"PM",previousDecade:"Previous decade",previousMonth:"Previous month",previousPage:"Previous page",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:t=>t===1?"Select a range no longer than 1 day":`Select a range no longer than ${t} days`,rangeTooShort:t=>t===1?"Select a range at least 1 day long":`Select a range at least ${t} days long`,readonly:"Read-only",remove:"Remove",resetColumns:"Reset columns",resize:"Resize",resizeColumn:"Resize column",rowsPerPage:"Rows per page",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",search:"Search",second:"Second",seek:"Seek",seekProgress:(t,e)=>`${t} of ${e}`,selectAColorFromTheScreen:"Select a color from the screen",selectAllRows:"Select all rows",selected:"Selected",selectedDateLabel:t=>`Selected: ${t}`,selectedRangeLabel:t=>`Selected range: ${t}`,selectGroup:"Select group",selectionCleared:"Selection cleared",selectRow:"Select row",showingNofMRows:(t,e)=>`Showing ${t} of ${e} rows`,showingXtoYofZ:(t,e,r)=>`${t}\u2013${e} of ${r}`,showPassword:"Show password",slideNum:t=>`Slide ${t}`,sortAscending:"Sort ascending",sortColumn:"Sort column",sortDescending:"Sort descending",startDate:"Start date",time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker.",today:"Today",toggleColorFormat:"Toggle color format",unmute:"Unmute",unpin:"Unpin",unpinColumn:"Unpin column",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out"};Zr(Jl);var tc=Jl;var ie=class extends Ko{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||"en":super.lang()}};Zr(tc);var se=Math.min,Bt=Math.max,to=Math.round,eo=Math.floor,Zt=t=>({x:t,y:t}),Pm={left:"right",right:"left",bottom:"top",top:"bottom"};function Xo(t,e,r){return Bt(t,se(e,r))}function Ke(t,e){return typeof t=="function"?t(e):t}function we(t){return t.split("-")[0]}function Ye(t){return t.split("-")[1]}function Vi(t){return t==="x"?"y":"x"}function Go(t){return t==="y"?"height":"width"}function ae(t){let e=t[0];return e==="t"||e==="b"?"y":"x"}function Qo(t){return Vi(ae(t))}function oc(t,e,r){r===void 0&&(r=!1);let o=Ye(t),n=Qo(t),i=Go(n),s=n==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=Jr(s)),[s,Jr(s)]}function nc(t){let e=Jr(t);return[Yo(t),e,Yo(e)]}function Yo(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}var ec=["left","right"],rc=["right","left"],$m=["top","bottom"],Tm=["bottom","top"];function Om(t,e,r){switch(t){case"top":case"bottom":return r?e?rc:ec:e?ec:rc;case"left":case"right":return e?$m:Tm;default:return[]}}function ic(t,e,r,o){let n=Ye(t),i=Om(we(t),r==="start",o);return n&&(i=i.map(s=>s+"-"+n),e&&(i=i.concat(i.map(Yo)))),i}function Jr(t){let e=we(t);return Pm[e]+t.slice(e.length)}function _m(t){return{top:0,right:0,bottom:0,left:0,...t}}function Hi(t){return typeof t!="number"?_m(t):{top:t,right:t,bottom:t,left:t}}function Xe(t){let{x:e,y:r,width:o,height:n}=t;return{width:o,height:n,top:r,left:e,right:e+o,bottom:r+n,x:e,y:r}}function sc(t,e,r){let{reference:o,floating:n}=t,i=ae(e),s=Qo(e),a=Go(s),l=we(e),c=i==="y",h=o.x+o.width/2-n.width/2,m=o.y+o.height/2-n.height/2,u=o[a]/2-n[a]/2,f;switch(l){case"top":f={x:h,y:o.y-n.height};break;case"bottom":f={x:h,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:m};break;case"left":f={x:o.x-n.width,y:m};break;default:f={x:o.x,y:o.y}}switch(Ye(e)){case"start":f[s]-=u*(r&&c?-1:1);break;case"end":f[s]+=u*(r&&c?-1:1);break}return f}async function ac(t,e){var r;e===void 0&&(e={});let{x:o,y:n,platform:i,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:m="floating",altBoundary:u=!1,padding:f=0}=Ke(e,t),g=Hi(f),w=a[u?m==="floating"?"reference":"floating":m],p=Xe(await i.getClippingRect({element:(r=await(i.isElement==null?void 0:i.isElement(w)))==null||r?w:w.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),v=m==="floating"?{x:o,y:n,width:s.floating.width,height:s.floating.height}:s.reference,C=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),b=await(i.isElement==null?void 0:i.isElement(C))?await(i.getScale==null?void 0:i.getScale(C))||{x:1,y:1}:{x:1,y:1},S=Xe(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:C,strategy:l}):v);return{top:(p.top-S.top+g.top)/b.y,bottom:(S.bottom-p.bottom+g.bottom)/b.y,left:(p.left-S.left+g.left)/b.x,right:(S.right-p.right+g.right)/b.x}}var zm=50,lc=async(t,e,r)=>{let{placement:o="bottom",strategy:n="absolute",middleware:i=[],platform:s}=r,a=s.detectOverflow?s:{...s,detectOverflow:ac},l=await(s.isRTL==null?void 0:s.isRTL(e)),c=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:h,y:m}=sc(c,o,l),u=o,f=0,g={};for(let d=0;d<i.length;d++){let w=i[d];if(!w)continue;let{name:p,fn:v}=w,{x:C,y:b,data:S,reset:_}=await v({x:h,y:m,initialPlacement:o,placement:u,strategy:n,middlewareData:g,rects:c,platform:a,elements:{reference:t,floating:e}});h=C??h,m=b??m,g[p]={...g[p],...S},_&&f<zm&&(f++,typeof _=="object"&&(_.placement&&(u=_.placement),_.rects&&(c=_.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):_.rects),{x:h,y:m}=sc(c,u,l)),d=-1)}return{x:h,y:m,placement:u,strategy:n,middlewareData:g}},cc=t=>({name:"arrow",options:t,async fn(e){let{x:r,y:o,placement:n,rects:i,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=Ke(t,e)||{};if(c==null)return{};let m=Hi(h),u={x:r,y:o},f=Qo(n),g=Go(f),d=await s.getDimensions(c),w=f==="y",p=w?"top":"left",v=w?"bottom":"right",C=w?"clientHeight":"clientWidth",b=i.reference[g]+i.reference[f]-u[f]-i.floating[g],S=u[f]-i.reference[f],_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c)),I=_?_[C]:0;(!I||!await(s.isElement==null?void 0:s.isElement(_)))&&(I=a.floating[C]||i.floating[g]);let y=b/2-S/2,$=I/2-d[g]/2-1,M=se(m[p],$),V=se(m[v],$),q=M,G=I-d[g]-V,Y=I/2-d[g]/2+y,Z=Xo(q,Y,G),z=!l.arrow&&Ye(n)!=null&&Y!==Z&&i.reference[g]/2-(Y<q?M:V)-d[g]/2<0,L=z?Y<q?Y-q:Y-G:0;return{[f]:u[f]+L,data:{[f]:Z,centerOffset:Y-Z-L,...z&&{alignmentOffset:L}},reset:z}}});var uc=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,o;let{placement:n,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:m=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:d=!0,...w}=Ke(t,e);if((r=i.arrow)!=null&&r.alignmentOffset)return{};let p=we(n),v=ae(a),C=we(a)===a,b=await(l.isRTL==null?void 0:l.isRTL(c.floating)),S=u||(C||!d?[Jr(a)]:nc(a)),_=g!=="none";!u&&_&&S.push(...ic(a,d,g,b));let I=[a,...S],y=await l.detectOverflow(e,w),$=[],M=((o=i.flip)==null?void 0:o.overflows)||[];if(h&&$.push(y[p]),m){let Y=oc(n,s,b);$.push(y[Y[0]],y[Y[1]])}if(M=[...M,{placement:n,overflows:$}],!$.every(Y=>Y<=0)){var V,q;let Y=(((V=i.flip)==null?void 0:V.index)||0)+1,Z=I[Y];if(Z&&(!(m==="alignment"?v!==ae(Z):!1)||M.every(O=>ae(O.placement)===v?O.overflows[0]>0:!0)))return{data:{index:Y,overflows:M},reset:{placement:Z}};let z=(q=M.filter(L=>L.overflows[0]<=0).sort((L,O)=>L.overflows[1]-O.overflows[1])[0])==null?void 0:q.placement;if(!z)switch(f){case"bestFit":{var G;let L=(G=M.filter(O=>{if(_){let E=ae(O.placement);return E===v||E==="y"}return!0}).map(O=>[O.placement,O.overflows.filter(E=>E>0).reduce((E,D)=>E+D,0)]).sort((O,E)=>O[1]-E[1])[0])==null?void 0:G[0];L&&(z=L);break}case"initialPlacement":z=a;break}if(n!==z)return{reset:{placement:z}}}return{}}}};var Dm=new Set(["left","top"]);async function Im(t,e){let{placement:r,platform:o,elements:n}=t,i=await(o.isRTL==null?void 0:o.isRTL(n.floating)),s=we(r),a=Ye(r),l=ae(r)==="y",c=Dm.has(s)?-1:1,h=i&&l?-1:1,m=Ke(e,t),{mainAxis:u,crossAxis:f,alignmentAxis:g}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return a&&typeof g=="number"&&(f=a==="end"?g*-1:g),l?{x:f*h,y:u*c}:{x:u*c,y:f*h}}var dc=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,o;let{x:n,y:i,placement:s,middlewareData:a}=e,l=await Im(e,t);return s===((r=a.offset)==null?void 0:r.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:n+l.x,y:i+l.y,data:{...l,placement:s}}}}},fc=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:r,y:o,placement:n,platform:i}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:p=>{let{x:v,y:C}=p;return{x:v,y:C}}},...c}=Ke(t,e),h={x:r,y:o},m=await i.detectOverflow(e,c),u=ae(we(n)),f=Vi(u),g=h[f],d=h[u];if(s){let p=f==="y"?"top":"left",v=f==="y"?"bottom":"right",C=g+m[p],b=g-m[v];g=Xo(C,g,b)}if(a){let p=u==="y"?"top":"left",v=u==="y"?"bottom":"right",C=d+m[p],b=d-m[v];d=Xo(C,d,b)}let w=l.fn({...e,[f]:g,[u]:d});return{...w,data:{x:w.x-r,y:w.y-o,enabled:{[f]:s,[u]:a}}}}}};var pc=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var r,o;let{placement:n,rects:i,platform:s,elements:a}=e,{apply:l=()=>{},...c}=Ke(t,e),h=await s.detectOverflow(e,c),m=we(n),u=Ye(n),f=ae(n)==="y",{width:g,height:d}=i.floating,w,p;m==="top"||m==="bottom"?(w=m,p=u===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(p=m,w=u==="end"?"top":"bottom");let v=d-h.top-h.bottom,C=g-h.left-h.right,b=se(d-h[w],v),S=se(g-h[p],C),_=!e.middlewareData.shift,I=b,y=S;if((r=e.middlewareData.shift)!=null&&r.enabled.x&&(y=C),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(I=v),_&&!u){let M=Bt(h.left,0),V=Bt(h.right,0),q=Bt(h.top,0),G=Bt(h.bottom,0);f?y=g-2*(M!==0||V!==0?M+V:Bt(h.left,h.right)):I=d-2*(q!==0||G!==0?q+G:Bt(h.top,h.bottom))}await l({...e,availableWidth:y,availableHeight:I});let $=await s.getDimensions(a.floating);return g!==$.width||d!==$.height?{reset:{rects:!0}}:{}}}};function Zo(){return typeof window<"u"}function Qe(t){return mc(t)?(t.nodeName||"").toLowerCase():"#document"}function Ht(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Jt(t){var e;return(e=(mc(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function mc(t){return Zo()?t instanceof Node||t instanceof Ht(t).Node:!1}function Kt(t){return Zo()?t instanceof Element||t instanceof Ht(t).Element:!1}function le(t){return Zo()?t instanceof HTMLElement||t instanceof Ht(t).HTMLElement:!1}function hc(t){return!Zo()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Ht(t).ShadowRoot}function gr(t){let{overflow:e,overflowX:r,overflowY:o,display:n}=Yt(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+r)&&n!=="inline"&&n!=="contents"}function gc(t){return/^(table|td|th)$/.test(Qe(t))}function ro(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}var Rm=/transform|translate|scale|rotate|perspective|filter/,Fm=/paint|layout|strict|content/,Ge=t=>!!t&&t!=="none",Wi;function vr(t){let e=Kt(t)?Yt(t):t;return Ge(e.transform)||Ge(e.translate)||Ge(e.scale)||Ge(e.rotate)||Ge(e.perspective)||!Jo()&&(Ge(e.backdropFilter)||Ge(e.filter))||Rm.test(e.willChange||"")||Fm.test(e.contain||"")}function vc(t){let e=ye(t);for(;le(e)&&!Ze(e);){if(vr(e))return e;if(ro(e))return null;e=ye(e)}return null}function Jo(){return Wi==null&&(Wi=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Wi}function Ze(t){return/^(html|body|#document)$/.test(Qe(t))}function Yt(t){return Ht(t).getComputedStyle(t)}function oo(t){return Kt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ye(t){if(Qe(t)==="html")return t;let e=t.assignedSlot||t.parentNode||hc(t)&&t.host||Jt(t);return hc(e)?e.host:e}function bc(t){let e=ye(t);return Ze(e)?t.ownerDocument?t.ownerDocument.body:t.body:le(e)&&gr(e)?e:bc(e)}function xe(t,e,r){var o;e===void 0&&(e=[]),r===void 0&&(r=!0);let n=bc(t),i=n===((o=t.ownerDocument)==null?void 0:o.body),s=Ht(n);if(i){let a=tn(s);return e.concat(s,s.visualViewport||[],gr(n)?n:[],a&&r?xe(a):[])}else return e.concat(n,xe(n,[],r))}function tn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Cc(t){let e=Yt(t),r=parseFloat(e.width)||0,o=parseFloat(e.height)||0,n=le(t),i=n?t.offsetWidth:r,s=n?t.offsetHeight:o,a=to(r)!==i||to(o)!==s;return a&&(r=i,o=s),{width:r,height:o,$:a}}function ji(t){return Kt(t)?t:t.contextElement}function br(t){let e=ji(t);if(!le(e))return Zt(1);let r=e.getBoundingClientRect(),{width:o,height:n,$:i}=Cc(e),s=(i?to(r.width):r.width)/o,a=(i?to(r.height):r.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}var Nm=Zt(0);function Sc(t){let e=Ht(t);return!Jo()||!e.visualViewport?Nm:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Bm(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Ht(t)?!1:e}function Je(t,e,r,o){e===void 0&&(e=!1),r===void 0&&(r=!1);let n=t.getBoundingClientRect(),i=ji(t),s=Zt(1);e&&(o?Kt(o)&&(s=br(o)):s=br(t));let a=Bm(i,r,o)?Sc(i):Zt(0),l=(n.left+a.x)/s.x,c=(n.top+a.y)/s.y,h=n.width/s.x,m=n.height/s.y;if(i){let u=Ht(i),f=o&&Kt(o)?Ht(o):o,g=u,d=tn(g);for(;d&&o&&f!==g;){let w=br(d),p=d.getBoundingClientRect(),v=Yt(d),C=p.left+(d.clientLeft+parseFloat(v.paddingLeft))*w.x,b=p.top+(d.clientTop+parseFloat(v.paddingTop))*w.y;l*=w.x,c*=w.y,h*=w.x,m*=w.y,l+=C,c+=b,g=Ht(d),d=tn(g)}}return Xe({width:h,height:m,x:l,y:c})}function en(t,e){let r=oo(t).scrollLeft;return e?e.left+r:Je(Jt(t)).left+r}function kc(t,e){let r=t.getBoundingClientRect(),o=r.left+e.scrollLeft-en(t,r),n=r.top+e.scrollTop;return{x:o,y:n}}function Vm(t){let{elements:e,rect:r,offsetParent:o,strategy:n}=t,i=n==="fixed",s=Jt(o),a=e?ro(e.floating):!1;if(o===s||a&&i)return r;let l={scrollLeft:0,scrollTop:0},c=Zt(1),h=Zt(0),m=le(o);if((m||!m&&!i)&&((Qe(o)!=="body"||gr(s))&&(l=oo(o)),m)){let f=Je(o);c=br(o),h.x=f.x+o.clientLeft,h.y=f.y+o.clientTop}let u=s&&!m&&!i?kc(s,l):Zt(0);return{width:r.width*c.x,height:r.height*c.y,x:r.x*c.x-l.scrollLeft*c.x+h.x+u.x,y:r.y*c.y-l.scrollTop*c.y+h.y+u.y}}function Hm(t){return Array.from(t.getClientRects())}function Wm(t){let e=Jt(t),r=oo(t),o=t.ownerDocument.body,n=Bt(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),i=Bt(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight),s=-r.scrollLeft+en(t),a=-r.scrollTop;return Yt(o).direction==="rtl"&&(s+=Bt(e.clientWidth,o.clientWidth)-n),{width:n,height:i,x:s,y:a}}var wc=25;function qm(t,e){let r=Ht(t),o=Jt(t),n=r.visualViewport,i=o.clientWidth,s=o.clientHeight,a=0,l=0;if(n){i=n.width,s=n.height;let h=Jo();(!h||h&&e==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}let c=en(o);if(c<=0){let h=o.ownerDocument,m=h.body,u=getComputedStyle(m),f=h.compatMode==="CSS1Compat"&&parseFloat(u.marginLeft)+parseFloat(u.marginRight)||0,g=Math.abs(o.clientWidth-m.clientWidth-f);g<=wc&&(i-=g)}else c<=wc&&(i+=c);return{width:i,height:s,x:a,y:l}}function jm(t,e){let r=Je(t,!0,e==="fixed"),o=r.top+t.clientTop,n=r.left+t.clientLeft,i=le(t)?br(t):Zt(1),s=t.clientWidth*i.x,a=t.clientHeight*i.y,l=n*i.x,c=o*i.y;return{width:s,height:a,x:l,y:c}}function yc(t,e,r){let o;if(e==="viewport")o=qm(t,r);else if(e==="document")o=Wm(Jt(t));else if(Kt(e))o=jm(e,r);else{let n=Sc(t);o={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return Xe(o)}function Ec(t,e){let r=ye(t);return r===e||!Kt(r)||Ze(r)?!1:Yt(r).position==="fixed"||Ec(r,e)}function Um(t,e){let r=e.get(t);if(r)return r;let o=xe(t,[],!1).filter(a=>Kt(a)&&Qe(a)!=="body"),n=null,i=Yt(t).position==="fixed",s=i?ye(t):t;for(;Kt(s)&&!Ze(s);){let a=Yt(s),l=vr(s);!l&&a.position==="fixed"&&(n=null),(i?!l&&!n:!l&&a.position==="static"&&!!n&&(n.position==="absolute"||n.position==="fixed")||gr(s)&&!l&&Ec(t,s))?o=o.filter(h=>h!==s):n=a,s=ye(s)}return e.set(t,o),o}function Km(t){let{element:e,boundary:r,rootBoundary:o,strategy:n}=t,s=[...r==="clippingAncestors"?ro(e)?[]:Um(e,this._c):[].concat(r),o],a=yc(e,s[0],n),l=a.top,c=a.right,h=a.bottom,m=a.left;for(let u=1;u<s.length;u++){let f=yc(e,s[u],n);l=Bt(f.top,l),c=se(f.right,c),h=se(f.bottom,h),m=Bt(f.left,m)}return{width:c-m,height:h-l,x:m,y:l}}function Ym(t){let{width:e,height:r}=Cc(t);return{width:e,height:r}}function Xm(t,e,r){let o=le(e),n=Jt(e),i=r==="fixed",s=Je(t,!0,i,e),a={scrollLeft:0,scrollTop:0},l=Zt(0);function c(){l.x=en(n)}if(o||!o&&!i)if((Qe(e)!=="body"||gr(n))&&(a=oo(e)),o){let f=Je(e,!0,i,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else n&&c();i&&!o&&n&&c();let h=n&&!o&&!i?kc(n,a):Zt(0),m=s.left+a.scrollLeft-l.x-h.x,u=s.top+a.scrollTop-l.y-h.y;return{x:m,y:u,width:s.width,height:s.height}}function qi(t){return Yt(t).position==="static"}function xc(t,e){if(!le(t)||Yt(t).position==="fixed")return null;if(e)return e(t);let r=t.offsetParent;return Jt(t)===r&&(r=r.ownerDocument.body),r}function Ac(t,e){let r=Ht(t);if(ro(t))return r;if(!le(t)){let n=ye(t);for(;n&&!Ze(n);){if(Kt(n)&&!qi(n))return n;n=ye(n)}return r}let o=xc(t,e);for(;o&&gc(o)&&qi(o);)o=xc(o,e);return o&&Ze(o)&&qi(o)&&!vr(o)?r:o||vc(t)||r}var Gm=async function(t){let e=this.getOffsetParent||Ac,r=this.getDimensions,o=await r(t.floating);return{reference:Xm(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Qm(t){return Yt(t).direction==="rtl"}var no={convertOffsetParentRelativeRectToViewportRelativeRect:Vm,getDocumentElement:Jt,getClippingRect:Km,getOffsetParent:Ac,getElementRects:Gm,getClientRects:Hm,getDimensions:Ym,getScale:br,isElement:Kt,isRTL:Qm};function Lc(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Zm(t,e){let r=null,o,n=Jt(t);function i(){var a;clearTimeout(o),(a=r)==null||a.disconnect(),r=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),i();let c=t.getBoundingClientRect(),{left:h,top:m,width:u,height:f}=c;if(a||e(),!u||!f)return;let g=eo(m),d=eo(n.clientWidth-(h+u)),w=eo(n.clientHeight-(m+f)),p=eo(h),C={rootMargin:-g+"px "+-d+"px "+-w+"px "+-p+"px",threshold:Bt(0,se(1,l))||1},b=!0;function S(_){let I=_[0].intersectionRatio;if(I!==l){if(!b)return s();I?s(!1,I):o=setTimeout(()=>{s(!1,1e-7)},1e3)}I===1&&!Lc(c,t.getBoundingClientRect())&&s(),b=!1}try{r=new IntersectionObserver(S,{...C,root:n.ownerDocument})}catch{r=new IntersectionObserver(S,C)}r.observe(t)}return s(!0),i}function Mc(t,e,r,o){o===void 0&&(o={});let{ancestorScroll:n=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=ji(t),h=n||i?[...c?xe(c):[],...e?xe(e):[]]:[];h.forEach(p=>{n&&p.addEventListener("scroll",r,{passive:!0}),i&&p.addEventListener("resize",r)});let m=c&&a?Zm(c,r):null,u=-1,f=null;s&&(f=new ResizeObserver(p=>{let[v]=p;v&&v.target===c&&f&&e&&(f.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var C;(C=f)==null||C.observe(e)})),r()}),c&&!l&&f.observe(c),e&&f.observe(e));let g,d=l?Je(t):null;l&&w();function w(){let p=Je(t);d&&!Lc(d,p)&&r(),d=p,g=requestAnimationFrame(w)}return r(),()=>{var p;h.forEach(v=>{n&&v.removeEventListener("scroll",r),i&&v.removeEventListener("resize",r)}),m?.(),(p=f)==null||p.disconnect(),f=null,l&&cancelAnimationFrame(g)}}var Pc=dc;var $c=fc,Tc=uc,Ui=pc;var Oc=cc;var _c=(t,e,r)=>{let o=new Map,n={platform:no,...r},i={...n.platform,_c:o};return lc(t,e,{...n,platform:i})};function zc(t){return Jm(t)}function Ki(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Jm(t){for(let e=t;e;e=Ki(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Ki(t);e;e=Ki(e)){if(!(e instanceof Element))continue;let r=getComputedStyle(e);if(r.display!=="contents"&&(r.position!=="static"||vr(r)||e.tagName==="BODY"))return e}return null}var Et=zt(class extends Vt{constructor(t){if(super(t),t.type!==_t.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}let r=t.element.classList;for(let o of this.st)o in e||(r.remove(o),this.st.delete(o));for(let o in e){let n=!!e[o];n===this.st.has(o)||this.nt?.has(o)||(n?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return xt}});function Dc(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var tg=!!globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),mt=class extends Ot{constructor(){super(...arguments),this.localize=new ie(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom"),o=0,n=0,i=0,s=0,a=0,l=0,c=0,h=0;r?t.top<e.top?(o=t.left,n=t.bottom,i=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(o=e.left,n=e.bottom,i=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(o=t.right,n=t.top,i=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(o=e.right,n=e.top,i=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${i}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=tg,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||Dc(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Mc(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let t=[Pc({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ui({apply:({rects:o})=>{let n=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=n?`${o.reference.width}px`:"",this.popup.style.height=i?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;this.SUPPORTS_POPOVER&&!Dc(this.anchor)&&this.boundary==="scroll"&&(e=xe(this.anchorEl).filter(o=>o instanceof Element)),this.flip&&t.push(Tc({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push($c({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(Ui({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:n})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${n}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Oc({element:this.arrowEl,padding:this.arrowPadding}));let r=this.SUPPORTS_POPOVER?o=>no.getOffsetParent(o,zc):no.getOffsetParent;_c(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.SUPPORTS_POPOVER?"absolute":"fixed",platform:{...no,getOffsetParent:r}}).then(({x:o,y:n,middlewareData:i,placement:s})=>{let a=this.localize.dir()==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${o}px`,top:`${n}px`}),this.arrow){let c=i.arrow.x,h=i.arrow.y,m="",u="",f="",g="";if(this.arrowPlacement==="start"){let d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=a?d:"",g=a?"":d}else if(this.arrowPlacement==="end"){let d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=a?"":d,g=a?d:"",f=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",m=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof c=="number"?`${c}px`:"",m=typeof h=="number"?`${h}px`:"");Object.assign(this.arrowEl.style,{top:m,right:u,bottom:f,left:g,[l]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Xl)}render(){return ut`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Et({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Et({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ut`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};mt.css=Gl;k([vt(".popup")],mt.prototype,"popup",2);k([vt(".arrow")],mt.prototype,"arrowEl",2);k([T({attribute:!1,type:Boolean})],mt.prototype,"SUPPORTS_POPOVER",2);k([T()],mt.prototype,"anchor",2);k([T({type:Boolean,reflect:!0})],mt.prototype,"active",2);k([T({reflect:!0})],mt.prototype,"placement",2);k([T()],mt.prototype,"boundary",2);k([T({type:Number})],mt.prototype,"distance",2);k([T({type:Number})],mt.prototype,"skidding",2);k([T({type:Boolean})],mt.prototype,"arrow",2);k([T({attribute:"arrow-placement"})],mt.prototype,"arrowPlacement",2);k([T({attribute:"arrow-padding",type:Number})],mt.prototype,"arrowPadding",2);k([T({type:Boolean})],mt.prototype,"flip",2);k([T({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],mt.prototype,"flipFallbackPlacements",2);k([T({attribute:"flip-fallback-strategy"})],mt.prototype,"flipFallbackStrategy",2);k([T({type:Object})],mt.prototype,"flipBoundary",2);k([T({attribute:"flip-padding",type:Number})],mt.prototype,"flipPadding",2);k([T({type:Boolean})],mt.prototype,"shift",2);k([T({type:Object})],mt.prototype,"shiftBoundary",2);k([T({attribute:"shift-padding",type:Number})],mt.prototype,"shiftPadding",2);k([T({attribute:"auto-size"})],mt.prototype,"autoSize",2);k([T()],mt.prototype,"sync",2);k([T({type:Object})],mt.prototype,"autoSizeBoundary",2);k([T({attribute:"auto-size-padding",type:Number})],mt.prototype,"autoSizePadding",2);k([T({attribute:"hover-bridge",type:Boolean})],mt.prototype,"hoverBridge",2);mt=k([Pt("wa-popup")],mt);var tr=[];function rn(t){wr(t),tr.push(t)}function wr(t){for(let e=tr.length-1;e>=0;e--)if(tr[e]===t){tr.splice(e,1);break}}function io(t){return tr.length>0&&tr[tr.length-1]===t}var Ic="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var Rc=(t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+=Ic[r[t]&63];return e};function qt(t,e,r){let o=n=>Object.is(n,-0)?0:n;return t<e?o(e):t>r?o(r):o(t)}function Fc(t=""){return`${t}${Rc()}`}function yr(t,e){return new Promise(r=>{function o(n){n.target===t&&(t.removeEventListener(e,o),r())}t.addEventListener(e,o)})}function xr(t,e){return new Promise(r=>{let o=new AbortController,{signal:n}=o;if(t.classList.contains(e))return;t.classList.add(e);let i=!1,s=()=>{i||(i=!0,t.classList.remove(e),r(),o.abort())};t.addEventListener("animationend",s,{once:!0,signal:n}),t.addEventListener("animationcancel",s,{once:!0,signal:n}),requestAnimationFrame(()=>{!i&&t.getAnimations().length===0&&s()})})}function kt(t,e){let r={waitUntilFirstUpdate:!1,...e};return(o,n)=>{let{update:i}=o,s=Array.isArray(t)?t:[t];o.update=function(a){s.forEach(l=>{let c=l;if(a.has(c)){let h=a.get(c),m=this[c];h!==m&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](h,m)}}),i.call(this,a)}}}var Ct=class extends Ot{constructor(){super(...arguments),this.dismissedByPress=!1,this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger="hover focus",this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.dismissedByPress=!1,this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{if(this.hasTrigger("click")){this.open?this.hide():this.show();return}this.hasTrigger("manual")||this.lightDismiss()},this.handleFocus=()=>{this.dismissedByPress||this.hasTrigger("focus")&&this.show()},this.handleMouseDown=()=>{this.hasTrigger("click")||this.hasTrigger("manual")||this.lightDismiss()},this.handleDocumentKeyDown=t=>{this.hasTrigger("manual")||t.key==="Escape"&&this.open&&io(this)&&(t.preventDefault(),t.stopPropagation(),this.hide())},this.handleDocumentClick=t=>{this.hasTrigger("manual")||this.anchor&&t.composedPath().includes(this.anchor)||this.hide()},this.handleMouseOver=()=>{this.dismissedByPress||this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=t=>{let e=t.relatedTarget,r=!!(e&&this.anchor?.contains(e)),o=!!(e&&this.contains(e));r||o||(this.dismissedByPress=!1,this.hasTrigger("hover")&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)))}}connectedCallback(){super.connectedCallback(),typeof document<"u"&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener("mouseout",this.handleMouseOut),this.dismissedByPress=!1,this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||(this.id=Fc("wa-tooltip-")),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),wr(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(t){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),super.firstUpdated(t)}lightDismiss(){clearTimeout(this.hoverTimeout),this.dismissedByPress=!0,this.hide()}hasTrigger(t){return this.trigger.split(" ").includes(t)}addToAriaLabelledBy(t,e){let o=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean);o.includes(e)||(o.push(e),t.setAttribute("aria-labelledby",o.join(" ")))}removeFromAriaLabelledBy(t,e){let n=(t.getAttribute("aria-labelledby")||"").split(/\s+/).filter(Boolean).filter(i=>i!==e);n.length>0?t.setAttribute("aria-labelledby",n.join(" ")):t.removeAttribute("aria-labelledby")}async handleOpenChange(){if(this.open){if(this.disabled)return;let t=new jl;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!1;return}this.hasTrigger("manual")||(document.addEventListener("keydown",this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener("click",this.handleDocumentClick,{signal:this.eventController.signal}),rn(this)),this.body.hidden=!1,this.popup.active=!0,await xr(this.popup.popup,"show-with-scale"),this.popup.reposition(),this.dispatchEvent(new Kl)}else{let t=new Ul;if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0;return}document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("click",this.handleDocumentClick),wr(this),await xr(this.popup.popup,"hide-with-scale"),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Yl)}}handleForChange(){let t=this.getRootNode?.();if(!t)return;let e=this.for?t.getElementById?.(this.for):null,r=this.anchor;if(e===r)return;this.dismissedByPress=!1;let{signal:o}=this.eventController;e&&(this.addToAriaLabelledBy(e,this.id),e.addEventListener("blur",this.handleBlur,{capture:!0,signal:o}),e.addEventListener("focus",this.handleFocus,{capture:!0,signal:o}),e.addEventListener("click",this.handleClick,{signal:o}),e.addEventListener("mousedown",this.handleMouseDown,{signal:o}),e.addEventListener("mouseover",this.handleMouseOver,{signal:o}),e.addEventListener("mouseout",this.handleMouseOut,{signal:o})),r&&(this.removeFromAriaLabelledBy(r,this.id),r.removeEventListener("blur",this.handleBlur,{capture:!0}),r.removeEventListener("focus",this.handleFocus,{capture:!0}),r.removeEventListener("click",this.handleClick),r.removeEventListener("mousedown",this.handleMouseDown),r.removeEventListener("mouseover",this.handleMouseOver),r.removeEventListener("mouseout",this.handleMouseOut)),this.anchor=e}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,yr(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,yr(this,"wa-after-hide")}render(){return ut`
      <wa-popup
        part="base tooltip"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Et({tooltip:!0,"tooltip-open":this.open})}
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
    `}};Ct.css=ql;Ct.dependencies={"wa-popup":mt};k([vt("slot:not([name])")],Ct.prototype,"defaultSlot",2);k([vt(".body")],Ct.prototype,"body",2);k([vt("wa-popup")],Ct.prototype,"popup",2);k([T()],Ct.prototype,"placement",2);k([T({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);k([T({type:Number})],Ct.prototype,"distance",2);k([T({type:Boolean,reflect:!0})],Ct.prototype,"open",2);k([T({type:Number})],Ct.prototype,"skidding",2);k([T({attribute:"show-delay",type:Number})],Ct.prototype,"showDelay",2);k([T({attribute:"hide-delay",type:Number})],Ct.prototype,"hideDelay",2);k([T()],Ct.prototype,"trigger",2);k([T({attribute:"without-arrow",type:Boolean,reflect:!0})],Ct.prototype,"withoutArrow",2);k([T()],Ct.prototype,"for",2);k([yt()],Ct.prototype,"anchor",2);k([kt("open",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleOpenChange",1);k([kt("for")],Ct.prototype,"handleForChange",1);k([kt(["distance","placement","skidding"])],Ct.prototype,"handleOptionsChange",1);k([kt("disabled")],Ct.prototype,"handleDisabledChange",1);Ct=k([Pt("wa-tooltip")],Ct);function on(t,e){function r(n){let i=t.getBoundingClientRect(),s=t.ownerDocument.defaultView,a=i.left+s.pageXOffset,l=i.top+s.pageYOffset,c=n.pageX-a,h=n.pageY-l;e?.onMove&&e.onMove(c,h)}function o(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",o),e?.onStop&&e.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",o),e?.initialEvent instanceof PointerEvent&&r(e.initialEvent)}var ly=typeof window<"u"&&"ontouchstart"in window;var Nc=ht`
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
`;var Bc=(t={})=>{let{validationElement:e,validationProperty:r}=t;e||typeof document<"u"&&"createElement"in document&&(e=Object.assign(document.createElement("input"),{required:!0})),r||(r="value");let o={observedAttributes:["required"],message:e?.validationMessage,checkValidity(n){let i={message:"",isValid:!0,invalidKeys:[]};return(n.required??n.hasAttribute("required"))&&!n[r]&&(i.message=typeof o.message=="function"?o.message(n):o.message||"",i.isValid=!1,i.invalidKeys.push("valueMissing")),i}};return o};var nn=ht`
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
`;var Vc=ht`
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
`;var Cr=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}};var eg=()=>({observedAttributes:["custom-error"],checkValidity(t){let e={message:"",isValid:!0,invalidKeys:[]};return t.customError&&(e.message=t.customError,e.isValid=!1,e.invalidKeys=["customError"]),e}}),Rt=class extends Ot{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=t=>{t.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Cr))},this.handleInteraction=t=>{let e=this.emittedEvents;e.includes(t.type)||e.push(t.type),e.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},"addEventListener"in this&&this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[eg()]}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let e of this.validators)if(e.observedAttributes)for(let r of e.observedAttributes)t.add(r);return[...t]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(t=>{this.addEventListener?.(t,this.handleInteraction)})}firstUpdated(...t){super.firstUpdated(...t),this.updateValidity()}willUpdate(t){if(!!1&&t.has("customError")&&(this.customError||(this.customError=null),this.setCustomValidity(this.customError||"")),t.has("value")||t.has("disabled")||t.has("defaultValue")){let e=this.value;this.updateFormValue(e)}t.has("disabled")&&(this.customStates.set("disabled",this.disabled),(this.hasAttribute("disabled")||!!1&&!this.matches(":disabled"))&&this.toggleAttribute("disabled",this.disabled)),super.willUpdate(t),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(t){if(Array.isArray(t)){if(this.name){let e=new FormData;for(let r of t)e.append(this.name,r);this.setValue(e,e)}}else this.setValue(t,t)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(t){t?this.setAttribute("form",t):this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...t){let e=t[0],r=t[1],o=t[2];o||(o=this.validationTarget),this.internals.setValidity(e,r,o||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let t=!!this.required,e=this.internals.validity.valid,r=this.hasInteracted;this.customStates.set("required",t),this.customStates.set("optional",!t),this.customStates.set("invalid",!e),this.customStates.set("valid",e),this.customStates.set("user-invalid",!e&&r),this.customStates.set("user-valid",e&&r)}setCustomValidity(t){if(!t){this.customError=null,this.setValidity({});return}this.customError=t,this.setValidity({customError:!0},t,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(t){this.disabled=t,this.updateValidity()}formStateRestoreCallback(t,e){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity()}):(this.value=t,e==="restore"&&this.resetValidity(),this.updateValidity())}setValue(...t){let[e,r]=t;this.internals.setFormValue(e,r)}get allValidators(){let t=this.constructor.validators||[],e=this.validators||[];return[...t,...e]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let t=this.allValidators;if(!t?.length)return;let e={customError:!!this.customError},r=this.validationTarget||this.input||void 0,o="";for(let n of t){let{isValid:i,message:s,invalidKeys:a}=n.checkValidity(this);i||(o||(o=s),a?.length>=0&&a.forEach(l=>e[l]=!0))}o||(o=this.validationMessage),this.setValidity(e,o,r)}};Rt.formAssociated=!0;k([T({reflect:!0})],Rt.prototype,"name",2);k([T({type:Boolean})],Rt.prototype,"disabled",2);k([T({state:!0,attribute:!1})],Rt.prototype,"valueHasChanged",2);k([T({state:!0,attribute:!1})],Rt.prototype,"hasInteracted",2);k([T({attribute:"custom-error",reflect:!0})],Rt.prototype,"customError",2);k([T({attribute:!1,state:!0,type:Object})],Rt.prototype,"validity",1);var Hc={small:"s",medium:"m",large:"l"},Wc=new Set;function Sr(t,e){e in Hc&&!Wc.has(`${t}:${e}`)&&(Wc.add(`${t}:${e}`),console.warn(`[${t}] size="${e}" is deprecated. Use size="${Hc[e]}" instead. The long-form value will be removed in the next major version.`))}var kr=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=r=>{let o=r.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(t=>{if(t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===Node.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1}):!1}hasNamedSlot(t){return this.host.querySelector?.(`:scope > [slot="${t}"]`)!==null}test(t,e){return e&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[e]:t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){let t=this.host.shadowRoot;t&&"addEventListener"in t&&t.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){let t=this.host.shadowRoot;t&&"removeEventListener"in t&&t.removeEventListener("slotchange",this.handleSlotChange)}};var Er=ht`
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
`;function Mt(t,e){rg(t)&&(t="100%");let r=og(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function so(t){return Math.min(1,Math.max(0,t))}function rg(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function og(t){return typeof t=="string"&&t.indexOf("%")!==-1}function sn(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function ao(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Le(t){return t.length===1?"0"+t:String(t)}function qc(t,e,r){return{r:Mt(t,255)*255,g:Mt(e,255)*255,b:Mt(r,255)*255}}function Xi(t,e,r){t=Mt(t,255),e=Mt(e,255),r=Mt(r,255);let o=Math.max(t,e,r),n=Math.min(t,e,r),i=0,s=0,a=(o+n)/2;if(o===n)s=0,i=0;else{let l=o-n;switch(s=a>.5?l/(2-o-n):l/(o+n),o){case t:i=(e-r)/l+(e<r?6:0);break;case e:i=(r-t)/l+2;break;case r:i=(t-e)/l+4;break;default:break}i/=6}return{h:i,s,l:a}}function Yi(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*(6*r):r<1/2?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function jc(t,e,r){let o,n,i;if(t=Mt(t,360),e=Mt(e,100),r=Mt(r,100),e===0)n=r,i=r,o=r;else{let s=r<.5?r*(1+e):r+e-r*e,a=2*r-s;o=Yi(a,s,t+1/3),n=Yi(a,s,t),i=Yi(a,s,t-1/3)}return{r:o*255,g:n*255,b:i*255}}function Gi(t,e,r){t=Mt(t,255),e=Mt(e,255),r=Mt(r,255);let o=Math.max(t,e,r),n=Math.min(t,e,r),i=0,s=o,a=o-n,l=o===0?0:a/o;if(o===n)i=0;else{switch(o){case t:i=(e-r)/a+(e<r?6:0);break;case e:i=(r-t)/a+2;break;case r:i=(t-e)/a+4;break;default:break}i/=6}return{h:i,s:l,v:s}}function Uc(t,e,r){t=Mt(t,360)*6,e=Mt(e,100),r=Mt(r,100);let o=Math.floor(t),n=t-o,i=r*(1-e),s=r*(1-n*e),a=r*(1-(1-n)*e),l=o%6,c=[r,s,i,i,a,r][l],h=[a,r,r,s,i,i][l],m=[i,i,a,r,r,s][l];return{r:c*255,g:h*255,b:m*255}}function Qi(t,e,r,o){let n=[Le(Math.round(t).toString(16)),Le(Math.round(e).toString(16)),Le(Math.round(r).toString(16))];return o&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function Kc(t,e,r,o,n){let i=[Le(Math.round(t).toString(16)),Le(Math.round(e).toString(16)),Le(Math.round(r).toString(16)),Le(ng(o))];return n&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))&&i[3].startsWith(i[3].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Yc(t,e,r,o){let n=t/100,i=e/100,s=r/100,a=o/100,l=255*(1-n)*(1-a),c=255*(1-i)*(1-a),h=255*(1-s)*(1-a);return{r:l,g:c,b:h}}function Zi(t,e,r){let o=1-t/255,n=1-e/255,i=1-r/255,s=Math.min(o,n,i);return s===1?(o=0,n=0,i=0):(o=(o-s)/(1-s)*100,n=(n-s)/(1-s)*100,i=(i-s)/(1-s)*100),s*=100,{c:Math.round(o),m:Math.round(n),y:Math.round(i),k:Math.round(s)}}function ng(t){return Math.round(parseFloat(t)*255).toString(16)}function Ji(t){return Wt(t)/255}function Wt(t){return parseInt(t,16)}function Xc(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var lo={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Gc(t){let e={r:0,g:0,b:0},r=1,o=null,n=null,i=null,s=!1,a=!1;return typeof t=="string"&&(t=ag(t)),typeof t=="object"&&(jt(t.r)&&jt(t.g)&&jt(t.b)?(e=qc(t.r,t.g,t.b),s=!0,a=String(t.r).substr(-1)==="%"?"prgb":"rgb"):jt(t.h)&&jt(t.s)&&jt(t.v)?(o=ao(t.s),n=ao(t.v),e=Uc(t.h,o,n),s=!0,a="hsv"):jt(t.h)&&jt(t.s)&&jt(t.l)?(o=ao(t.s),i=ao(t.l),e=jc(t.h,o,i),s=!0,a="hsl"):jt(t.c)&&jt(t.m)&&jt(t.y)&&jt(t.k)&&(e=Yc(t.c,t.m,t.y,t.k),s=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(r=t.a)),r=sn(r),{ok:s,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}var ig="[-\\+]?\\d+%?",sg="[-\\+]?\\d*\\.\\d+%?",Me="(?:"+sg+")|(?:"+ig+")",ts="[\\s|\\(]+("+Me+")[,|\\s]+("+Me+")[,|\\s]+("+Me+")\\s*\\)?",an="[\\s|\\(]+("+Me+")[,|\\s]+("+Me+")[,|\\s]+("+Me+")[,|\\s]+("+Me+")\\s*\\)?",Xt={CSS_UNIT:new RegExp(Me),rgb:new RegExp("rgb"+ts),rgba:new RegExp("rgba"+an),hsl:new RegExp("hsl"+ts),hsla:new RegExp("hsla"+an),hsv:new RegExp("hsv"+ts),hsva:new RegExp("hsva"+an),cmyk:new RegExp("cmyk"+an),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ag(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(lo[t])t=lo[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=Xt.rgb.exec(t);return r?{r:r[1],g:r[2],b:r[3]}:(r=Xt.rgba.exec(t),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Xt.hsl.exec(t),r?{h:r[1],s:r[2],l:r[3]}:(r=Xt.hsla.exec(t),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Xt.hsv.exec(t),r?{h:r[1],s:r[2],v:r[3]}:(r=Xt.hsva.exec(t),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Xt.cmyk.exec(t),r?{c:r[1],m:r[2],y:r[3],k:r[4]}:(r=Xt.hex8.exec(t),r?{r:Wt(r[1]),g:Wt(r[2]),b:Wt(r[3]),a:Ji(r[4]),format:e?"name":"hex8"}:(r=Xt.hex6.exec(t),r?{r:Wt(r[1]),g:Wt(r[2]),b:Wt(r[3]),format:e?"name":"hex"}:(r=Xt.hex4.exec(t),r?{r:Wt(r[1]+r[1]),g:Wt(r[2]+r[2]),b:Wt(r[3]+r[3]),a:Ji(r[4]+r[4]),format:e?"name":"hex8"}:(r=Xt.hex3.exec(t),r?{r:Wt(r[1]+r[1]),g:Wt(r[2]+r[2]),b:Wt(r[3]+r[3]),format:e?"name":"hex"}:!1))))))))))}function jt(t){return typeof t=="number"?!Number.isNaN(t):Xt.CSS_UNIT.test(t)}var co=class t{constructor(e="",r={}){if(e instanceof t)return e;typeof e=="number"&&(e=Xc(e)),this.originalInput=e;let o=Gc(e);this.originalInput=e,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??o.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),r,o,n,i=e.r/255,s=e.g/255,a=e.b/255;return i<=.03928?r=i/12.92:r=Math.pow((i+.055)/1.055,2.4),s<=.03928?o=s/12.92:o=Math.pow((s+.055)/1.055,2.4),a<=.03928?n=a/12.92:n=Math.pow((a+.055)/1.055,2.4),.2126*r+.7152*o+.0722*n}getAlpha(){return this.a}setAlpha(e){return this.a=sn(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=Gi(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=Gi(this.r,this.g,this.b),r=Math.round(e.h*360),o=Math.round(e.s*100),n=Math.round(e.v*100);return this.a===1?`hsv(${r}, ${o}%, ${n}%)`:`hsva(${r}, ${o}%, ${n}%, ${this.roundA})`}toHsl(){let e=Xi(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=Xi(this.r,this.g,this.b),r=Math.round(e.h*360),o=Math.round(e.s*100),n=Math.round(e.l*100);return this.a===1?`hsl(${r}, ${o}%, ${n}%)`:`hsla(${r}, ${o}%, ${n}%, ${this.roundA})`}toHex(e=!1){return Qi(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return Kc(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),r=Math.round(this.g),o=Math.round(this.b);return this.a===1?`rgb(${e}, ${r}, ${o})`:`rgba(${e}, ${r}, ${o}, ${this.roundA})`}toPercentageRgb(){let e=r=>`${Math.round(Mt(r,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=r=>Math.round(Mt(r,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Zi(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:r,y:o,k:n}=Zi(this.r,this.g,this.b);return`cmyk(${e}, ${r}, ${o}, ${n})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let e="#"+Qi(this.r,this.g,this.b,!1);for(let[r,o]of Object.entries(lo))if(e===o)return r;return!1}toString(e){let r=!!e;e=e??this.format;let o=!1,n=this.a<1&&this.a>=0;return!r&&n&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(o=this.toRgbString()),e==="prgb"&&(o=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(o=this.toHexString()),e==="hex3"&&(o=this.toHexString(!0)),e==="hex4"&&(o=this.toHex8String(!0)),e==="hex8"&&(o=this.toHex8String()),e==="name"&&(o=this.toName()),e==="hsl"&&(o=this.toHslString()),e==="hsv"&&(o=this.toHsvString()),e==="cmyk"&&(o=this.toCmykString()),o||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new t(this.toString())}lighten(e=10){let r=this.toHsl();return r.l+=e/100,r.l=so(r.l),new t(r)}brighten(e=10){let r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(e/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(e/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(e/100)))),new t(r)}darken(e=10){let r=this.toHsl();return r.l-=e/100,r.l=so(r.l),new t(r)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){let r=this.toHsl();return r.s-=e/100,r.s=so(r.s),new t(r)}saturate(e=10){let r=this.toHsl();return r.s+=e/100,r.s=so(r.s),new t(r)}greyscale(){return this.desaturate(100)}spin(e){let r=this.toHsl(),o=(r.h+e)%360;return r.h=o<0?360+o:o,new t(r)}mix(e,r=50){let o=this.toRgb(),n=new t(e).toRgb(),i=r/100,s={r:(n.r-o.r)*i+o.r,g:(n.g-o.g)*i+o.g,b:(n.b-o.b)*i+o.b,a:(n.a-o.a)*i+o.a};return new t(s)}analogous(e=6,r=30){let o=this.toHsl(),n=360/r,i=[this];for(o.h=(o.h-(n*e>>1)+720)%360;--e;)o.h=(o.h+n)%360,i.push(new t(o));return i}complement(){let e=this.toHsl();return e.h=(e.h+180)%360,new t(e)}monochromatic(e=6){let r=this.toHsv(),{h:o}=r,{s:n}=r,{v:i}=r,s=[],a=1/e;for(;e--;)s.push(new t({h:o,s:n,v:i})),i=(i+a)%1;return s}splitcomplement(){let e=this.toHsl(),{h:r}=e;return[this,new t({h:(r+72)%360,s:e.s,l:e.l}),new t({h:(r+216)%360,s:e.s,l:e.l})]}onBackground(e){let r=this.toRgb(),o=new t(e).toRgb(),n=r.a+o.a*(1-r.a);return new t({r:(r.r*r.a+o.r*o.a*(1-r.a))/n,g:(r.g*r.a+o.g*o.a*(1-r.a))/n,b:(r.b*r.a+o.b*o.a*(1-r.a))/n,a:n})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){let r=this.toHsl(),{h:o}=r,n=[this],i=360/e;for(let s=1;s<e;s++)n.push(new t({h:(o+s*i)%360,s:r.s,l:r.l}));return n}equals(e){let r=new t(e);return this.format==="cmyk"||r.format==="cmyk"?this.toCmykString()===r.toCmykString():this.toRgbString()===r.toRgbString()}};var at=t=>t??dt;var rt=class extends Rt{constructor(){super(),this.hasSlotController=new kr(this,"hint","label"),this.isSafeValue=!1,this.localize=new ie(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.inputValue="",this.hue=0,this.isEmpty=!0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="m",this.placement="bottom-start",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&io(this)&&(e.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=e=>{if(e.key==="Escape"&&this.open&&io(this)){e.stopPropagation(),this.focus(),this.hide();return}e.key==="Tab"&&setTimeout(()=>{let r=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||r?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=e=>{let o=e.composedPath().some(n=>n instanceof Element&&(n.closest(".color-picker")||n===this.trigger));this&&!o&&this.hide()},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.opacity=this.hasAttribute("opacity"),this.uppercase=this.hasAttribute("uppercase");let t=this.getAttribute("format");(t==="rgb"||t==="hsl"||t==="hsv")&&(this.format=t),this.handleValueChange("",this.value||"")}static get validators(){let t=[Bc()];return[...super.validators,...t]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}handleSizeChange(){Sr(this.localName,this.size)}updateFormValue(t){if(t==null){this.setValue("",null);return}super.updateFormValue(t)}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(t){let e=this.shadowRoot.querySelector(".slider.alpha"),r=e.querySelector(".slider-handle"),{width:o}=e.getBoundingClientRect(),n=this.value,i=this.value;r.focus(),t.preventDefault(),on(e,{onMove:s=>{this.alpha=qt(s/o*100,0,100),this.syncValues(),this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==n&&(n=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleHueDrag(t){let e=this.shadowRoot.querySelector(".slider.hue"),r=e.querySelector(".slider-handle"),{width:o}=e.getBoundingClientRect(),n=this.value,i=this.value;r.focus(),t.preventDefault(),on(e,{onMove:s=>{this.hue=qt(s/o*360,0,360),this.syncValues(),this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))}))},onStop:()=>{this.value!==n&&(n=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleGridDrag(t){let e=this.shadowRoot.querySelector(".grid"),r=e.querySelector(".grid-handle"),{width:o,height:n}=e.getBoundingClientRect(),i=this.value,s=this.value;r.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,on(e,{onMove:(a,l)=>{this.saturation=qt(a/o*100,0,100),this.brightness=qt(100-l/n*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==i&&(i=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},initialEvent:t})}handleAlphaKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=qt(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=qt(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=qt(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=qt(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=qt(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=qt(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=qt(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=qt(this.brightness-e,0,100),this.syncValues()),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(t){let e=t.target,r=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value||""):this.value="",this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(t){this.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(t){t.preventDefault()}parseColor(t){if(!t||t.trim()==="")return null;let e=new co(t);if(!e.isValid)return null;let r=e.toHsl(),o=e.toRgb(),n=e.toHsv();if(!o||o.r==null||o.g==null||o.b==null)return null;let i={h:r.h||0,s:(r.s||0)*100,l:(r.l||0)*100,a:r.a||0},s=e.toHexString(),a=e.toHex8String(),l={h:n.h||0,s:(n.s||0)*100,v:(n.v||0)*100,a:n.a||0};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a||0,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${(o.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(s),hexa:this.setLetterCase(a)}}setColor(t){let e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then(e=>{let r=this.value;this.setColor(e.sRGBHex),this.value!==r&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(t){let e=this.value;this.disabled||(this.setColor(t),this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))}getHexString(t,e,r,o=100){let n=new co(`hsva(${t}, ${e}%, ${r}%, ${o/100})`);return n.isValid?n.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(t){(t.has("value")||t.has("defaultValue"))&&this.handleValueChange(t.get("value")||"",this.value||""),super.willUpdate(t)}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let r=this.parseColor(e);r!==null?(this.inputValue=this.value||"",this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=this.opacity?r.hsva.a*100:100,this.syncValues()):this.inputValue=t??""}this.requestUpdate()}focus(t){this.trigger.focus(t)}blur(){let t=this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.popup?.active&&this.hide()}getFormattedValue(t="hex"){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new Cr),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(t){super.firstUpdated(t),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}updateAccessibleTrigger(){let t=this.trigger;t&&(t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false"))}async show(){if(!this.open)return this.open=!0,yr(this,"wa-after-show")}async hide(){if(this.open)return this.open=!1,yr(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),rn(this)}removeOpenListeners(){this.base&&this.base.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),wr(this)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await xr(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"))):(this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await xr(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide")))}render(){let t=this.isEmpty,e=this.hasSlotController.test("label","withLabel"),r=this.hasSlotController.test("hint","withHint"),o=this.label?!0:!!e,n=this.hint?!0:!!r,i=this.saturation,s=100-this.brightness,a=Array.isArray(this.swatches)?this.swatches.map(c=>typeof c=="string"?{color:c,label:c}:c):this.swatches.split(";").filter(c=>c.trim()!=="").map(c=>({color:c.trim(),label:c.trim()})),l=ut`
      <div
        part="base color-picker"
        class=${Et({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${Ut({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Et({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${Ut({top:`${s}%`,left:`${i}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${at(this.disabled?void 0:"0")}
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
                style=${Ut({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${at(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?ut`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${Ut({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${Ut({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${at(this.disabled?void 0:"0")}
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
            style=${Ut({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.withoutFormatToggle?"":ut`
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
            ${this.hasEyeDropper?ut`
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

        ${a.length>0?ut`
              <div part="swatches" class="swatches">
                ${a.map(c=>{let h=this.parseColor(c.color);return h?ut`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${at(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${c.label}
                      @click=${()=>this.selectSwatch(c.color)}
                      @keydown=${m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),this.selectSwatch(c.color))}}
                    >
                      <div class="swatch-color" style=${Ut({backgroundColor:h.hexa})}></div>
                    </div>
                  `:""})}
              </div>
            `:""}
      </div>
    `;return ut`
      <div
        class=${Et({container:!0,"form-control":!0,"form-control-has-label":o})}
        part="trigger-container form-control"
      >
        <div
          part="form-control-label"
          class=${Et({label:!0,"has-label":o})}
          id="form-control-label"
        >
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${Et({trigger:!0,"trigger-empty":t,"transparent-bg":!0,"form-control-input":!0})}
          style=${Ut({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
          class=${Et({"has-slotted":n})}
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
        ${l}
      </wa-popup>
    `}};rt.css=[Nc,Er,nn,Vc];rt.shadowRootOptions={...Rt.shadowRootOptions,delegatesFocus:!0};k([vt('[part~="base"]')],rt.prototype,"base",2);k([vt('[part~="input"]')],rt.prototype,"input",2);k([vt('[part~="form-control-label"]')],rt.prototype,"triggerLabel",2);k([vt('[part~="form-control-input"]')],rt.prototype,"triggerButton",2);k([vt(".color-popup")],rt.prototype,"popup",2);k([vt('[part~="preview"]')],rt.prototype,"previewButton",2);k([vt('[part~="trigger"]')],rt.prototype,"trigger",2);k([yt()],rt.prototype,"hasFocus",2);k([yt()],rt.prototype,"isDraggingGridHandle",2);k([yt()],rt.prototype,"inputValue",2);k([yt()],rt.prototype,"hue",2);k([yt()],rt.prototype,"isEmpty",2);k([yt()],rt.prototype,"saturation",2);k([yt()],rt.prototype,"brightness",2);k([yt()],rt.prototype,"alpha",2);k([yt()],rt.prototype,"value",1);k([T({attribute:"value",reflect:!0})],rt.prototype,"defaultValue",2);k([T({attribute:"with-label",reflect:!0,type:Boolean})],rt.prototype,"withLabel",2);k([T({attribute:"with-hint",reflect:!0,type:Boolean})],rt.prototype,"withHint",2);k([yt()],rt.prototype,"hasEyeDropper",2);k([T()],rt.prototype,"label",2);k([T({attribute:"hint"})],rt.prototype,"hint",2);k([T()],rt.prototype,"format",2);k([T({reflect:!0})],rt.prototype,"size",2);k([kt("size")],rt.prototype,"handleSizeChange",1);k([T({reflect:!0})],rt.prototype,"placement",2);k([T({attribute:"without-format-toggle",type:Boolean})],rt.prototype,"withoutFormatToggle",2);k([T({reflect:!0})],rt.prototype,"name",2);k([T({type:Boolean})],rt.prototype,"disabled",2);k([T({type:Boolean,reflect:!0})],rt.prototype,"open",2);k([T({type:Boolean})],rt.prototype,"opacity",2);k([T({type:Boolean})],rt.prototype,"uppercase",2);k([T()],rt.prototype,"swatches",2);k([T({type:Boolean,reflect:!0})],rt.prototype,"required",2);k([Bl({passive:!1})],rt.prototype,"handleTouchMove",1);k([kt("format",{waitUntilFirstUpdate:!0})],rt.prototype,"handleFormatChange",1);k([kt("opacity",{waitUntilFirstUpdate:!0})],rt.prototype,"handleOpacityChange",1);k([kt("value")],rt.prototype,"handleValueChange",1);k([kt("open",{waitUntilFirstUpdate:!0})],rt.prototype,"handleOpenChange",1);rt=k([Pt("wa-color-picker")],rt);rt.disableWarning?.("change-in-update");var Qc=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};function Zc(t,e){let r=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!r&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&lg(e)})}function lg(t){let e=null;if("form"in t&&(e=t.form),!e&&"getForm"in t&&(e=t.getForm()),!e)return;let r=[...e.elements];if(r.length===1){e.requestSubmit(null);return}let o=r.find(n=>n.type==="submit"&&!n.matches(":disabled"));o&&(["input","button"].includes(o.localName)?e.requestSubmit(o):o.click())}var Jc=ht`
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
`;var ln=()=>({checkValidity(t){let e=t.input,r={message:"",isValid:!0,invalidKeys:[]};if(!e)return r;let o=!0;if("checkValidity"in e&&(o=e.checkValidity()),o)return r;if(r.isValid=!1,"validationMessage"in e&&(r.message=e.validationMessage),!("validity"in e))return r.invalidKeys.push("customError"),r;for(let n in e.validity){if(n==="valid")continue;let i=n;e.validity[i]&&r.invalidKeys.push(i)}return r}});var{I:cg}=Ol,tu=t=>t,ru=t=>t===null||typeof t!="object"&&typeof t!="function";var ou=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var cn=t=>t.strings===void 0,eu=()=>document.createComment(""),Ar=(t,e,r)=>{let o=t._$AA.parentNode,n=e===void 0?t._$AB:e._$AA;if(r===void 0){let i=o.insertBefore(eu(),n),s=o.insertBefore(eu(),n);r=new cg(i,s,t,t.options)}else{let i=r._$AB.nextSibling,s=r._$AM,a=s!==t;if(a){let l;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(l=t._$AU)!==s._$AU&&r._$AP(l)}if(i!==n||a){let l=r._$AA;for(;l!==i;){let c=tu(l).nextSibling;tu(o).insertBefore(l,n),l=c}}}return r},Pe=(t,e,r=t)=>(t._$AI(e,r),t),ug={},un=(t,e=ug)=>t._$AH=e,nu=t=>t._$AH,dn=t=>{t._$AR(),t._$AA.remove()};var es=zt(class extends Vt{constructor(t){if(super(t),t.type!==_t.PROPERTY&&t.type!==_t.ATTRIBUTE&&t.type!==_t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!cn(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===xt||e===dt)return e;let r=t.element,o=t.name;if(t.type===_t.PROPERTY){if(e===r[o])return xt}else if(t.type===_t.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(o))return xt}else if(t.type===_t.ATTRIBUTE&&r.getAttribute(o)===e+"")return xt;return un(t),e}});var it=class extends Rt{constructor(){super(...arguments),this.assumeInteractionOn=["blur","input"],this.hasSlotController=new kr(this,"hint","label"),this.localize=new ie(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="m",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,ln()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(t){this._value!==t&&(this.valueHasChanged=!0,this._value=t)}updateFormValue(t){if(t==null){this.setValue("",null);return}super.updateFormValue(t)}handleSizeChange(){Sr(this.localName,this.size)}handleChange(t){this.value=this.input.value,this.relayNativeEvent(t,{bubbles:!0,composed:!0})}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new Qc),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(t){Zc(t,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(t){if(super.updated(t),t.has("value")||t.has("defaultValue")||t.has("type")){let e=["number","date","time","datetime-local"];this.input&&e.includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set("blank",!this.value),this.updateValidity()}}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,o="preserve"){let n=e??this.input.selectionStart,i=r??this.input.selectionEnd;this.input.setRangeText(t,n,i,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let t=this.hasSlotController.test("label","withLabel"),e=this.hasSlotController.test("hint","withHint"),r=this.label?!0:!!t,o=this.hint?!0:!!e,n=this.withClear&&!this.disabled&&!this.readonly,i=(!this.didSSR||this.hasUpdated)&&n&&(typeof this.value=="number"||this.value&&this.value.length>0);return ut`
      <label
        part="form-control-label label"
        class=${Et({label:!0,"has-label":r})}
        for="input"
        aria-hidden=${r?"false":"true"}
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
          name=${at(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${at(this.placeholder)}
          minlength=${at(this.minlength)}
          maxlength=${at(this.maxlength)}
          min=${at(this.min)}
          max=${at(this.max)}
          step=${at(this.step)}
          .value=${es(this.value??"")}
          autocapitalize=${at(this.autocapitalize)}
          autocomplete=${at(this.autocomplete)}
          autocorrect=${this.autocorrect?"on":"off"}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${at(this.pattern)}
          enterkeyhint=${at(this.enterkeyhint)}
          inputmode=${at(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${i?ut`
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
        ${this.passwordToggle&&!this.disabled?ut`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?ut`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:ut`
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
        class=${Et({"has-slotted":o})}
        aria-hidden=${o?"false":"true"}
        >${this.hint}</slot
      >
    `}};it.css=[Er,nn,Jc];it.shadowRootOptions={...Rt.shadowRootOptions,delegatesFocus:!0};k([vt("input")],it.prototype,"input",2);k([T()],it.prototype,"title",2);k([T({reflect:!0})],it.prototype,"type",2);k([yt()],it.prototype,"value",1);k([T({attribute:"value",reflect:!0})],it.prototype,"defaultValue",2);k([T({reflect:!0})],it.prototype,"size",2);k([kt("size")],it.prototype,"handleSizeChange",1);k([T({reflect:!0})],it.prototype,"appearance",2);k([T({type:Boolean,reflect:!0})],it.prototype,"pill",2);k([T()],it.prototype,"label",2);k([T({attribute:"hint"})],it.prototype,"hint",2);k([T({attribute:"with-clear",type:Boolean})],it.prototype,"withClear",2);k([T()],it.prototype,"placeholder",2);k([T({type:Boolean,reflect:!0})],it.prototype,"readonly",2);k([T({attribute:"password-toggle",type:Boolean})],it.prototype,"passwordToggle",2);k([T({attribute:"password-visible",type:Boolean})],it.prototype,"passwordVisible",2);k([T({attribute:"without-spin-buttons",type:Boolean,reflect:!0})],it.prototype,"withoutSpinButtons",2);k([T({type:Boolean,reflect:!0})],it.prototype,"required",2);k([T()],it.prototype,"pattern",2);k([T({type:Number})],it.prototype,"minlength",2);k([T({type:Number})],it.prototype,"maxlength",2);k([T()],it.prototype,"min",2);k([T()],it.prototype,"max",2);k([T()],it.prototype,"step",2);k([T()],it.prototype,"autocapitalize",2);k([T({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="off"),toAttribute:t=>t?"on":"off"}})],it.prototype,"autocorrect",2);k([T()],it.prototype,"autocomplete",2);k([T({type:Boolean})],it.prototype,"autofocus",2);k([T()],it.prototype,"enterkeyhint",2);k([T({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],it.prototype,"spellcheck",2);k([T()],it.prototype,"inputmode",2);k([T({attribute:"with-label",type:Boolean})],it.prototype,"withLabel",2);k([T({attribute:"with-hint",type:Boolean})],it.prototype,"withHint",2);k([kt("step",{waitUntilFirstUpdate:!0})],it.prototype,"handleStepChange",1);it=k([Pt("wa-input")],it);it.disableWarning?.("change-in-update");var iu=ht`
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
`;var su=ht`
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
`;var lu=Symbol.for(""),dg=t=>{if(t?.r===lu)return t?._$litStatic$};var rs=(t,...e)=>({_$litStatic$:e.reduce((r,o,n)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[n+1],t[0]),r:lu}),au=new Map,os=t=>(e,...r)=>{let o=r.length,n,i,s=[],a=[],l,c=0,h=!1;for(;c<o;){for(l=e[c];c<o&&(i=r[c],(n=dg(i))!==void 0);)l+=n+e[++c],h=!0;c!==o&&a.push(i),s.push(l),c++}if(c===o&&s.push(e[o]),h){let m=s.join("$$lit$$");(e=au.get(m))===void 0&&(s.raw=s,au.set(m,e=s)),r=a}return t(e,...r)},fn=os(ut),n3=os(Ml),i3=os(Pl);var lt=class extends Rt{constructor(){super(...arguments),this.assumeInteractionOn=["click"],this.hasSlotController=new kr(this,"[default]","start","end"),this.localize=new ie(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="m",this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,ln()]}handleSizeChange(){Sr(this.localName,this.size)}constructLightDOMButton(){let t=document.createElement("button");for(let e of this.attributes)e.name!=="style"&&t.setAttribute(e.name,e.value);return t.type=this.type,t.style.position="absolute !important",t.style.width="0 !important",t.style.height="0 !important",t.style.clipPath="inset(50%) !important",t.style.overflow="hidden !important",t.style.whiteSpace="nowrap !important",this.name&&(t.name=this.name),t.value=this.value||"",t}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopImmediatePropagation();return}if(this.type!=="submit"&&this.type!=="reset"||!this.getForm())return;let r=this.constructLightDOMButton();this.parentElement?.append(r),r.click(),r.remove()}handleInvalid(){this.dispatchEvent(new Cr)}handleLabelSlotChange(){let t=this.labelSlot.assignedNodes({flatten:!0}),e=!1,r=!1,o=!1,n=!1;[...t].forEach(i=>{if(i.nodeType===Node.ELEMENT_NODE){let s=i;s.localName==="wa-icon"?(r=!0,e||(e=s.label!==void 0)):n=!0}else i.nodeType===Node.TEXT_NODE&&(i.textContent?.trim()||"").length>0&&(o=!0)}),this.isIconButton=r&&!o&&!n,this.customStates.set("icon-button",this.isIconButton),this.isIconButton&&!e&&console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set("disabled",this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set("link",this.isLink())}handleLoadingChange(){this.customStates.set("loading",this.loading)}setValue(...t){}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=this.isLink(),e=t?rs`a`:rs`button`;return fn`
      <${e}
        part="base button"
        class=${Et({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start","withStart"),"has-end":this.hasSlotController.test("end","withEnd"),"is-icon-button":this.isIconButton})}
        ?disabled=${at(t?void 0:this.disabled)}
        type=${at(t?void 0:this.type)}
        title=${this.title}
        name=${at(t?void 0:this.name)}
        value=${at(t?void 0:this.value)}
        href=${at(t?this.href:void 0)}
        target=${at(t?this.target:void 0)}
        download=${at(t?this.download:void 0)}
        rel=${at(t&&this.rel?this.rel:void 0)}
        role=${at(t?void 0:"button")}
        aria-disabled=${at(t&&this.disabled?"true":void 0)}
        aria-busy=${this.loading?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?fn`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?fn`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${e}>
    `}};lt.shadowRootOptions={...Rt.shadowRootOptions,delegatesFocus:!0};lt.css=[iu,su,Er];k([vt(".button")],lt.prototype,"button",2);k([vt("slot:not([name])")],lt.prototype,"labelSlot",2);k([yt()],lt.prototype,"invalid",2);k([yt()],lt.prototype,"isIconButton",2);k([T()],lt.prototype,"title",2);k([T({reflect:!0})],lt.prototype,"variant",2);k([T({reflect:!0})],lt.prototype,"appearance",2);k([T({reflect:!0})],lt.prototype,"size",2);k([kt("size")],lt.prototype,"handleSizeChange",1);k([T({attribute:"with-caret",type:Boolean,reflect:!0})],lt.prototype,"withCaret",2);k([T({attribute:"with-start",type:Boolean})],lt.prototype,"withStart",2);k([T({attribute:"with-end",type:Boolean})],lt.prototype,"withEnd",2);k([T({type:Boolean})],lt.prototype,"disabled",2);k([T({type:Boolean,reflect:!0})],lt.prototype,"loading",2);k([T({type:Boolean,reflect:!0})],lt.prototype,"pill",2);k([T()],lt.prototype,"type",2);k([T({reflect:!0})],lt.prototype,"name",2);k([T({reflect:!0})],lt.prototype,"value",2);k([T({reflect:!0})],lt.prototype,"href",2);k([T()],lt.prototype,"target",2);k([T()],lt.prototype,"rel",2);k([T()],lt.prototype,"download",2);k([T({attribute:"formaction"})],lt.prototype,"formAction",2);k([T({attribute:"formenctype"})],lt.prototype,"formEnctype",2);k([T({attribute:"formmethod"})],lt.prototype,"formMethod",2);k([T({attribute:"formnovalidate",type:Boolean})],lt.prototype,"formNoValidate",2);k([T({attribute:"formtarget"})],lt.prototype,"formTarget",2);k([kt("disabled",{waitUntilFirstUpdate:!0})],lt.prototype,"handleDisabledChange",1);k([kt("href")],lt.prototype,"handleHrefChange",1);k([kt("loading",{waitUntilFirstUpdate:!0})],lt.prototype,"handleLoadingChange",1);lt=k([Pt("wa-button")],lt);lt.disableWarning?.("change-in-update");var cu=ht`
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
`;var ns=class extends Ot{constructor(){super(...arguments),this.localize=new ie(this)}render(){return ut`
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
    `}};ns.css=cu;ns=k([Pt("wa-spinner")],ns);var uu=ht`
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
`;var $e=class extends Ot{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(t){super.updated(t),t.has("orientation")&&this.setAttribute("aria-orientation",this.orientation)}handleFocus(t){pn(t.target)?.classList.add("button-focus")}handleBlur(t){pn(t.target)?.classList.remove("button-focus")}handleMouseOver(t){pn(t.target)?.classList.add("button-hover")}handleMouseOut(t){pn(t.target)?.classList.remove("button-hover")}render(){return ut`
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
    `}};$e.css=[uu];k([vt("slot")],$e.prototype,"defaultSlot",2);k([yt()],$e.prototype,"disableRole",2);k([yt()],$e.prototype,"hasOutlined",2);k([T()],$e.prototype,"label",2);k([T({reflect:!0})],$e.prototype,"orientation",2);$e=k([Pt("wa-button-group")],$e);function pn(t){let e="wa-button, wa-radio-button";return t.closest(e)??t.querySelector(e)}var du=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}};var fu=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};var pu=ht`
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
`;var fg="",is="";function hu(){return fg.replace(/\/$/,"")}function pg(t){is=t}function mu(){if(!is){let t=document.querySelector("[data-fa-kit-code]");t&&pg(t.getAttribute("data-fa-kit-code")||"")}return is}var gu="7.3.0";function hg(t,e,r){let o="solid";return e==="chisel"&&(o="chisel-regular"),e==="etch"&&(o="etch-solid"),e==="graphite"&&(o="graphite-thin"),e==="jelly"&&(o="jelly-regular",r==="duo-regular"&&(o="jelly-duo-regular"),r==="fill-regular"&&(o="jelly-fill-regular")),e==="jelly-duo"&&(o="jelly-duo-regular"),e==="jelly-fill"&&(o="jelly-fill-regular"),e==="notdog"&&(r==="solid"&&(o="notdog-solid"),r==="duo-solid"&&(o="notdog-duo-solid")),e==="notdog-duo"&&(o="notdog-duo-solid"),e==="slab"&&((r==="solid"||r==="regular")&&(o="slab-regular"),r==="press-regular"&&(o="slab-press-regular")),e==="slab-press"&&(o="slab-press-regular"),e==="slab-duo"&&(o="slab-duo-regular"),e==="slab-press-duo"&&(o="slab-press-duo-regular"),e==="thumbprint"&&(o="thumbprint-light"),e==="utility"&&(o="utility-semibold"),e==="utility-duo"&&(o="utility-duo-semibold"),e==="utility-fill"&&(o="utility-fill-semibold"),e==="whiteboard"&&(o="whiteboard-semibold"),e==="mosaic"&&(o="mosaic-solid"),e==="pixel"&&(o="pixel-regular"),e==="vellum"&&(o="vellum-solid"),e==="classic"&&(r==="thin"&&(o="thin"),r==="light"&&(o="light"),r==="regular"&&(o="regular"),r==="solid"&&(o="solid")),e==="duotone"&&(r==="thin"&&(o="duotone-thin"),r==="light"&&(o="duotone-light"),r==="regular"&&(o="duotone-regular"),r==="solid"&&(o="duotone")),e==="sharp"&&(r==="thin"&&(o="sharp-thin"),r==="light"&&(o="sharp-light"),r==="regular"&&(o="sharp-regular"),r==="solid"&&(o="sharp-solid")),e==="sharp-duotone"&&(r==="thin"&&(o="sharp-duotone-thin"),r==="light"&&(o="sharp-duotone-light"),r==="regular"&&(o="sharp-duotone-regular"),r==="solid"&&(o="sharp-duotone-solid")),e==="brands"&&(o="brands"),o}function mg(t,e,r){let o=hg(t,e,r),n=hu();if(n)return`${n}/${o}/${t}.svg`;let i=mu();return i.length>0?`https://ka-p.fontawesome.com/releases/v${gu}/svgs/${o}/${t}.svg?token=${encodeURIComponent(i)}`:`https://ka-f.fontawesome.com/releases/v${gu}/svgs/${o}/${t}.svg`}var gg={name:"default",resolver:(t,e="classic",r="solid")=>mg(t,e,r),mutator:(t,e)=>{if(t.hasAttribute("fill")||t.setAttribute("fill","currentColor"),e?.family&&!t.hasAttribute("data-duotone-initialized")){let{family:r,variant:o}=e;if(r==="duotone"||r==="sharp-duotone"||r==="notdog-duo"||r==="notdog"&&o==="duo-solid"||r==="jelly-duo"||r==="jelly"&&o==="duo-regular"||r==="utility-duo"||r==="slab-duo"||r==="slab-press-duo"||r==="thumbprint"){let n=[...t.querySelectorAll("path")],i=n.find(a=>!a.hasAttribute("opacity")),s=n.find(a=>a.hasAttribute("opacity"));if(!i||!s)return;if(i.setAttribute("data-duotone-primary",""),s.setAttribute("data-duotone-secondary",""),e.swapOpacity&&i&&s){let a=s.getAttribute("opacity")||"0.4";i.style.setProperty("--path-opacity",a),s.style.setProperty("--path-opacity","1")}t.setAttribute("data-duotone-initialized","")}}}},vu=gg;function vg(t){return`data:image/svg+xml,${encodeURIComponent(t)}`}var ss={solid:{backward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>',"backward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>',"angles-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>',"angles-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>',check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',"closed-captioning":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>',"closed-captioning-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>',compress:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>',ellipsis:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>',"ellipsis-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>',expand:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',forward:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>',"file-audio":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>',"file-code":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>',"file-excel":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>',"file-image":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>',"file-pdf":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>',"file-powerpoint":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>',"file-video":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>',"file-word":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>',"file-zipper":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>',"forward-step":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>',gauge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',gear:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',"picture-in-picture":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',"play-circle":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',upload:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',volume:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-low":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>',"volume-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{calendar:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>',"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',clock:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},bg={name:"system",resolver:(t,e="classic",r="solid")=>{let n=ss[r][t]??ss.regular[t]??ss.regular["circle-question"];return n?vg(n):""},mutator:t=>{t.hasAttribute("fill")||t.setAttribute("fill","currentColor")}},bu=bg;var wg="classic",yg=[vu,bu],wu=new Set;function yu(t){wu.add(t)}function xu(t){wu.delete(t)}function hn(t){return yg.find(e=>e.name===t)}function Cu(){return wg}var uo=Symbol(),mn=Symbol(),as,ls=new Map,$t=class extends Ot{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.rotate=0,this.resolveIcon=async(t,e)=>{let r;if(e?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=ut`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,await this.updateComplete;let o=this.shadowRoot.querySelector("[part='svg']");return typeof e.mutator=="function"&&e.mutator(o,this),this.svg}try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?uo:mn}catch{return mn}try{let o=document.createElement("div");o.innerHTML=await r.text();let n=o.firstElementChild;if(n?.tagName?.toLowerCase()!=="svg")return uo;as||(as=new DOMParser);let s=as.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):uo}catch{return uo}}}connectedCallback(){super.connectedCallback(),yu(this)}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),xu(this)}async getIconSource(){let t=hn(this.library),e=this.family||Cu();if(this.name&&t){let r=this.canvas==="auto"||this.autoWidth,o;try{o=await t.resolver(this.name,e,this.variant,r)}catch{o=void 0}return{url:o,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){let{url:t,fromLibrary:e}=await this.getIconSource(),r=e?hn(this.library):void 0;if(!t){this.svg=null;return}let o=ls.get(t);o||(o=this.resolveIcon(t,r),ls.set(t,o));let n=await o;n===mn&&ls.delete(t);let i=await this.getIconSource();if(t===i.url){if(ou(n)){this.svg=n;return}switch(n){case mn:case uo:this.svg=null,this.dispatchEvent(new du);break;default:this.svg=n.cloneNode(!0),r?.mutator?.(this.svg,this),this.dispatchEvent(new fu)}}}willUpdate(t){return this.style||this.setStyleProperty("--rotate-angle",`${this.rotate}deg`),super.willUpdate(t)}updated(t){super.updated(t);let e=hn(this.library);this.hasAttribute("rotate")&&this.style.setProperty("--rotate-angle",`${this.rotate}deg`);let r=this.shadowRoot?.querySelector("svg");r&&e?.mutator?.(r,this)}render(){return this.hasUpdated?this.svg:ut`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};$t.css=pu;k([yt()],$t.prototype,"svg",2);k([T({reflect:!0})],$t.prototype,"name",2);k([T({reflect:!0})],$t.prototype,"family",2);k([T({reflect:!0})],$t.prototype,"variant",2);k([T({reflect:!0})],$t.prototype,"canvas",2);k([T({attribute:"auto-width",type:Boolean,reflect:!0})],$t.prototype,"autoWidth",2);k([T({attribute:"swap-opacity",type:Boolean,reflect:!0})],$t.prototype,"swapOpacity",2);k([T()],$t.prototype,"src",2);k([T()],$t.prototype,"label",2);k([T({reflect:!0})],$t.prototype,"library",2);k([T({type:Number,reflect:!0})],$t.prototype,"rotate",2);k([T({type:String,reflect:!0})],$t.prototype,"flip",2);k([T({type:String,reflect:!0})],$t.prototype,"animation",2);k([kt("label")],$t.prototype,"handleLabelChange",1);k([kt(["family","name","library","variant","src","autoWidth","canvas","swapOpacity"],{waitUntilFirstUpdate:!0})],$t.prototype,"setIcon",1);$t=k([Pt("wa-icon")],$t);function Su(t,e){window.__swc,customElements.define(t,e)}var ku="1.12.2",Eu="0.3.0";function xg(t){class e extends t{get isLTR(){return getComputedStyle(this).direction!=="rtl"}hasVisibleFocusInTree(){let o=((n=document)=>{var i;let s=n.activeElement;for(;s!=null&&s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;let a=s?[s]:[];for(;s;){let l=s.assignedSlot||s.parentElement||((i=s.getRootNode())==null?void 0:i.host);l&&a.push(l),s=l}return a})(this.getRootNode())[0];return o?o.matches(":focus-visible")||o.matches(".focus-visible"):!1}}return e}var Lr=class extends xg(oe){get dir(){var e;return(e=getComputedStyle(this).direction)!=null?e:"ltr"}};Lr.VERSION=ku,Lr.CORE_VERSION=Eu;var Au=(t,e,r)=>{let o=new Map;for(let n=e;n<=r;n++)o.set(t[n],n);return o},Cg=zt(class extends Vt{constructor(t){if(super(t),t.type!==_t.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let o;r===void 0?r=e:e!==void 0&&(o=e);let n=[],i=[],s=0;for(let a of t)n[s]=o?o(a,s):s,i[s]=r(a,s),s++;return{values:i,keys:n}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,o]){let n=nu(t),{values:i,keys:s}=this.dt(e,r,o);if(!Array.isArray(n))return this.ut=s,i;let a=this.ut??=[],l=[],c,h,m=0,u=n.length-1,f=0,g=i.length-1;for(;m<=u&&f<=g;)if(n[m]===null)m++;else if(n[u]===null)u--;else if(a[m]===s[f])l[f]=Pe(n[m],i[f]),m++,f++;else if(a[u]===s[g])l[g]=Pe(n[u],i[g]),u--,g--;else if(a[m]===s[g])l[g]=Pe(n[m],i[g]),Ar(t,l[g+1],n[m]),m++,g--;else if(a[u]===s[f])l[f]=Pe(n[u],i[f]),Ar(t,n[m],n[u]),u--,f++;else if(c===void 0&&(c=Au(s,f,g),h=Au(a,m,u)),c.has(a[m]))if(c.has(a[u])){let d=h.get(s[f]),w=d!==void 0?n[d]:null;if(w===null){let p=Ar(t,n[m]);Pe(p,i[f]),l[f]=p}else l[f]=Pe(w,i[f]),Ar(t,n[m],w),n[d]=null;f++}else dn(n[u]),u--;else dn(n[m]),m++;for(;f<=g;){let d=Ar(t,l[g+1]);Pe(d,i[f]),l[f++]=d}for(;m<=u;){let d=n[m++];d!==null&&dn(d)}return this.ut=s,un(t,l),xt}});var fo=(t,e)=>{let r=t._$AN;if(r===void 0)return!1;for(let o of r)o._$AO?.(e,!1),fo(o,e);return!0},gn=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while(r?.size===0)},Lu=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Eg(e)}};function Sg(t){this._$AN!==void 0?(gn(this),this._$AM=t,Lu(this)):this._$AM=t}function kg(t,e=!1,r=0){let o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(o))for(let i=r;i<o.length;i++)fo(o[i],!1),gn(o[i]);else o!=null&&(fo(o,!1),gn(o));else fo(this,t)}var Eg=t=>{t.type==_t.CHILD&&(t._$AP??=kg,t._$AQ??=Sg)},Te=class extends Vt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,o){super._$AT(e,r,o),Lu(this),this.isConnected=e._$AU}_$AO(e,r=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),r&&(fo(this,e),gn(this))}setValue(e){if(cn(this._$Ct))this._$Ct._$AI(e,this);else{let r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}};var vn=class{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}},bn=class{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}};var Mu=t=>!ru(t)&&typeof t.then=="function",Pu=1073741823,cs=class extends Te{constructor(){super(...arguments),this._$Cwt=Pu,this._$Cbt=[],this._$CK=new vn(this),this._$CX=new bn}render(...e){return e.find(r=>!Mu(r))??xt}update(e,r){let o=this._$Cbt,n=o.length;this._$Cbt=r;let i=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<r.length&&!(a>this._$Cwt);a++){let l=r[a];if(!Mu(l))return this._$Cwt=a,l;a<n&&l===o[a]||(this._$Cwt=Pu,n=0,Promise.resolve(l).then(async c=>{for(;s.get();)await s.get();let h=i.deref();if(h!==void 0){let m=h._$Cbt.indexOf(l);m>-1&&m<h._$Cwt&&(h._$Cwt=m,h.setValue(c))}}))}return xt}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}},Ag=zt(cs);var po=class extends Vt{constructor(e){if(super(e),this.it=dt,e.type!==_t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===dt||e==null)return this._t=void 0,this.it=e;if(e===xt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};po.directiveName="unsafeHTML",po.resultType=1;var Lg=zt(po);var us=new WeakMap,Mg=zt(class extends Te{render(t){return dt}update(t,[e]){let r=e!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),dt}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){let e=this.ht??globalThis,r=us.get(e);r===void 0&&(r=new WeakMap,us.set(e,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?us.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Mr=["",()=>{}],ds=class extends Te{constructor(){super(...arguments),this.start=Mr,this.streamInside=Mr,this.end=Mr,this.streamOutside=Mr,this.state="off",this.handleStart=e=>{this.clearStream(),this.callHandler(this.start[1],e),!e.defaultPrevented&&(this.removeListeners(),this.addListeners("on"))},this.handleInside=e=>{this.handleStream(this.streamInside[1],e)},this.handleEnd=e=>{this.clearStream(),this.callHandler(this.end[1],e),this.removeListeners(),this.addListeners("off")},this.handleOutside=e=>{this.handleStream(this.streamOutside[1],e)}}render(e){return dt}update(e,[{start:r,end:o,streamInside:n=Mr,streamOutside:i=Mr}]){var s;this.element!==e.element&&(this.element=e.element,this.removeListeners()),this.host=((s=e.options)==null?void 0:s.host)||this.element,this.start=r,this.end=o,this.streamInside=n,this.streamOutside=i,this.addListeners()}addListeners(e){this.state=e||this.state,this.state==="off"?(this.addListener(this.streamOutside[0],this.handleOutside),this.addListener(this.start[0],this.handleStart)):this.state==="on"&&(this.addListener(this.streamInside[0],this.handleInside),this.addListener(this.end[0],this.handleEnd))}callHandler(e,r){typeof e=="function"?e.call(this.host,r):e.handleEvent(r)}handleStream(e,r){this.stream||(this.callHandler(e,r),this.stream=requestAnimationFrame(()=>{this.stream=void 0}))}clearStream(){this.stream!=null&&(cancelAnimationFrame(this.stream),this.stream=void 0)}addListener(e,r){Array.isArray(e)?e.map(o=>{this.element.addEventListener(o,r)}):this.element.addEventListener(e,r)}removeListener(e,r){Array.isArray(e)?e.map(o=>{this.element.removeEventListener(o,r)}):this.element.removeEventListener(e,r)}removeListeners(){this.removeListener(this.start[0],this.handleStart),this.removeListener(this.streamInside[0],this.handleInside),this.removeListener(this.end[0],this.handleEnd),this.removeListener(this.streamOutside[0],this.handleOutside)}disconnected(){this.removeListeners()}reconnected(){this.addListeners()}},$u=zt(ds);function Tu(){return Array.from(crypto.getRandomValues(new Uint8Array(4)),t=>`0${(t&255).toString(16)}`.slice(-2)).join("")}var Pg=ht`
    :host{--spectrum-splitview-vertical-width:100%;--spectrum-splitview-vertical-gripper-width:50%;--spectrum-splitview-vertical-gripper-outer-width:100%;--spectrum-splitview-vertical-gripper-reset:0;--spectrum-splitview-content-color:var(--spectrum-body-color);--spectrum-splitview-handle-background-color-hover:var(--spectrum-gray-400);--spectrum-splitview-handle-background-color-down:var(--spectrum-gray-800);--spectrum-splitview-handle-background-color-focus:var(--spectrum-focus-indicator-color);--spectrum-splitview-handle-width:var(--spectrum-border-width-200);--spectrum-splitview-gripper-width:var(--spectrum-border-width-400);--spectrum-splitview-gripper-height:16px;--spectrum-splitview-gripper-border-width-horizontal:3px;--spectrum-splitview-gripper-border-width-vertical:var(--spectrum-border-width-400);display:flex;overflow:hidden}::slotted(*){block-size:100%;color:var(--mod-splitview-content-color,var(--spectrum-splitview-content-color));background-color:var(--mod-splitview-background-color,var(--spectrum-splitview-background-color))}#gripper{border-block-width:var(--mod-splitview-gripper-border-width-vertical,var(--spectrum-splitview-gripper-border-width-vertical));border-inline-width:var(--mod-splitview-gripper-border-width-horizontal,var(--spectrum-splitview-gripper-border-width-horizontal));inline-size:var(--mod-splitview-gripper-width,var(--spectrum-splitview-gripper-width));block-size:var(--mod-splitview-gripper-height,var(--spectrum-splitview-gripper-height));border-color:var(--highcontrast-splitview-handle-background-color,var(--mod-splitview-handle-background-color,var(--spectrum-splitview-handle-background-color)));border-radius:var(--mod-splitview-gripper-border-radius,var(--spectrum-splitview-gripper-border-radius));touch-action:none;content:"";border-style:solid;display:block;position:absolute;inset-block-start:50%;inset-inline-start:calc((var(--mod-splitview-gripper-width,var(--spectrum-splitview-gripper-width)) + (2*var(--mod-splitview-gripper-border-width-vertical,var(--spectrum-splitview-gripper-border-width-vertical))) - var(--mod-splitview-gripper-width,var(--spectrum-splitview-gripper-width)))/2*-1);transform:translateY(-50%)}#gripper:before{background-color:var(--highcontrast-splitview-handle-background-color,var(--mod-splitview-handle-background-color,var(--spectrum-splitview-handle-background-color)))}#splitter{z-index:1;inline-size:var(--mod-splitview-handle-width,var(--spectrum-splitview-handle-width));background-color:var(--highcontrast-splitview-handle-background-color,var(--mod-splitview-handle-background-color,var(--spectrum-splitview-handle-background-color)));-webkit-user-select:none;user-select:none;block-size:100%;position:relative}#splitter.is-collapsed-end #gripper:before,#splitter.is-collapsed-start #gripper:before{inline-size:var(--mod-splitview-handle-width,var(--spectrum-splitview-handle-width));content:"";block-size:100%;position:absolute;inset-block-start:0;inset-inline-start:calc(50% - var(--mod-splitview-handle-width,var(--spectrum-splitview-handle-width))/2)}#splitter.is-collapsed-start #gripper{inset-inline-start:0}#splitter.is-collapsed-end #gripper{inset-inline:auto 0}:host([resizable]) #splitter.is-hovered{background-color:var(--highcontrast-splitview-handle-background-color-hover,var(--mod-splitview-handle-background-color-hover,var(--spectrum-splitview-handle-background-color-hover)))}:host([resizable]) #splitter.is-hovered #gripper{border-color:var(--highcontrast-splitview-handle-background-color-hover,var(--mod-splitview-handle-background-color-hover,var(--spectrum-splitview-handle-background-color-hover)))}:host([resizable]) #splitter.is-hovered #gripper:before{background-color:var(--highcontrast-splitview-handle-background-color-hover,var(--mod-splitview-handle-background-color-hover,var(--spectrum-splitview-handle-background-color-hover)))}@media (hover:hover){:host([resizable]) #splitter:hover{background-color:var(--highcontrast-splitview-handle-background-color-hover,var(--mod-splitview-handle-background-color-hover,var(--spectrum-splitview-handle-background-color-hover)))}:host([resizable]) #splitter:hover #gripper{border-color:var(--highcontrast-splitview-handle-background-color-hover,var(--mod-splitview-handle-background-color-hover,var(--spectrum-splitview-handle-background-color-hover)))}:host([resizable]) #splitter:hover #gripper:before{background-color:var(--highcontrast-splitview-handle-background-color-hover,var(--mod-splitview-handle-background-color-hover,var(--spectrum-splitview-handle-background-color-hover)))}}:host([resizable]) #splitter.is-active,:host([resizable]) #splitter:active{background-color:var(--highcontrast-splitview-handle-background-color-down,var(--mod-splitview-handle-background-color-down,var(--spectrum-splitview-handle-background-color-down)))}:host([resizable]) #splitter.is-active #gripper,:host([resizable]) #splitter:active #gripper{border-color:var(--highcontrast-splitview-handle-background-color-down,var(--mod-splitview-handle-background-color-down,var(--spectrum-splitview-handle-background-color-down)))}:host([resizable]) #splitter.is-active #gripper:before,:host([resizable]) #splitter:active #gripper:before{background-color:var(--highcontrast-splitview-handle-background-color-down,var(--mod-splitview-handle-background-color-down,var(--spectrum-splitview-handle-background-color-down)))}:host([resizable]) #splitter:focus{outline:none}:host([resizable]) #splitter:focus-visible{background-color:var(--highcontrast-splitview-handle-background-color-focus,var(--mod-splitview-handle-background-color-focus,var(--spectrum-splitview-handle-background-color-focus)));outline:none}:host([resizable]) #splitter:focus-visible #gripper{border-color:var(--highcontrast-splitview-handle-background-color-focus,var(--mod-splitview-handle-background-color-focus,var(--spectrum-splitview-handle-background-color-focus)));box-shadow:0 0 0 1px var(--highcontrast-splitview-handle-background-color-focus,var(--mod-splitview-handle-background-color-focus,var(--spectrum-splitview-handle-background-color-focus)))}:host([resizable]) #splitter:focus-visible #gripper:before{background-color:var(--highcontrast-splitview-handle-background-color-focus,var(--mod-splitview-handle-background-color-focus,var(--spectrum-splitview-handle-background-color-focus)))}:host([vertical]){flex-direction:column}:host([vertical]) ::slotted(*){inline-size:var(--mod-splitview-vertical-width,var(--spectrum-splitview-vertical-width));block-size:auto}:host([vertical]) #gripper{border-block-width:var(--mod-splitview-gripper-border-width-horizontal,var(--spectrum-splitview-gripper-border-width-horizontal));border-inline-width:var(--mod-splitview-gripper-border-width-vertical,var(--spectrum-splitview-gripper-border-width-vertical));inline-size:var(--mod-splitview-gripper-height,var(--spectrum-splitview-gripper-height));block-size:var(--mod-splitview-gripper-width,var(--spectrum-splitview-gripper-width));transform:translate(calc(var(--mod-splitview-vertical-gripper-width,var(--spectrum-splitview-vertical-gripper-width))*-1));inset-block-start:calc((var(--mod-splitview-gripper-width,var(--spectrum-splitview-gripper-width)) + (2*var(--mod-splitview-gripper-border-width-vertical,var(--spectrum-splitview-gripper-border-width-vertical))) - var(--mod-splitview-gripper-width,var(--spectrum-splitview-gripper-width)))/2*-1);inset-inline-start:var(--mod-splitview-vertical-gripper-width,var(--spectrum-splitview-vertical-gripper-width))}:host([vertical]) #splitter{inline-size:var(--mod-splitview-vertical-width,var(--spectrum-splitview-vertical-width));block-size:var(--mod-splitview-handle-width,var(--spectrum-splitview-handle-width))}:host([vertical]) #splitter.is-collapsed-end #gripper,:host([vertical]) #splitter.is-collapsed-start #gripper{inset-inline-start:var(--mod-splitview-vertical-gripper-width,var(--spectrum-splitview-vertical-gripper-width))}:host([vertical]) #splitter.is-collapsed-end #gripper:before,:host([vertical]) #splitter.is-collapsed-start #gripper:before{inline-size:var(--mod-splitview-vertical-gripper-outer-width,var(--spectrum-splitview-vertical-gripper-outer-width));block-size:var(--mod-splitview-handle-width,var(--spectrum-splitview-handle-width));inset-block-start:calc(var(--mod-splitview-vertical-gripper-width,var(--spectrum-splitview-vertical-gripper-width)) - var(--mod-splitview-handle-width,var(--spectrum-splitview-handle-width))/2);inset-inline-start:var(--mod-splitview-vertical-gripper-reset,var(--spectrum-splitview-vertical-gripper-reset))}:host([vertical]) #splitter.is-collapsed-start #gripper{inset-block-start:var(--mod-splitview-vertical-gripper-reset,var(--spectrum-splitview-vertical-gripper-reset))}:host([vertical]) #splitter.is-collapsed-end #gripper{inset-block-start:auto;inset-block-end:var(--mod-splitview-vertical-gripper-reset,var(--spectrum-splitview-vertical-gripper-reset))}@media (forced-colors:active){:host{--highcontrast-splitview-handle-background-color:CanvasText;--highcontrast-splitview-handle-background-color-hover:CanvasText;--highcontrast-splitview-handle-background-color-down:CanvasText;--highcontrast-splitview-handle-background-color-focus:Highlight}}:host{--spectrum-splitview-background-color:var(--system-split-view-background-color);--spectrum-splitview-handle-background-color:var(--system-split-view-handle-background-color);--spectrum-splitview-gripper-border-radius:var(--system-split-view-gripper-border-radius)}:host{--spectrum-split-view-first-pane-size:50%}::slotted(*){overflow:auto}::slotted(:first-child){order:1}:host(:not([vertical])) ::slotted(:first-child:not(:last-child)){width:var(--spectrum-split-view-first-pane-size)}:host([vertical]) ::slotted(:first-child:not(:last-child)){height:var(--spectrum-split-view-first-pane-size)}::slotted(:nth-child(2)){flex:1;order:3}::slotted(:nth-child(n+3)){display:none}#gripper{touch-action:none}#splitter{order:2;height:auto}:host([resizable]) #splitter{cursor:ew-resize;background-clip:content-box}:host([vertical][resizable]) #splitter{cursor:ns-resize;background-clip:content-box}:host([resizable]) #splitter.is-resized-start:dir(ltr),:host([resizable]) #splitter.is-resized-end:dir(rtl){cursor:e-resize}:host([resizable]) #splitter.is-resized-end:dir(ltr),:host([resizable]) #splitter.is-resized-start:dir(rtl){cursor:w-resize}:host([vertical][resizable]) #splitter.is-resized-start{cursor:s-resize}:host([vertical][resizable]) #splitter.is-resized-end{cursor:n-resize}:host([resizable][collapsible]) #splitter.is-resized-start,:host([resizable][collapsible]) #splitter.is-resized-end{cursor:ew-resize}:host([resizable][collapsible]) #splitter.is-collapsed-start:dir(ltr),:host([resizable][collapsible]) #splitter.is-collapsed-end:dir(rtl){cursor:e-resize}:host([resizable][collapsible]) #splitter.is-collapsed-end:dir(ltr),:host([resizable][collapsible]) #splitter.is-collapsed-start:dir(rtl){cursor:w-resize}:host([vertical][resizable][collapsible]) #splitter.is-collapsed-start{cursor:s-resize}:host([vertical][resizable][collapsible]) #splitter.is-collapsed-end{cursor:n-resize}:host([vertical][resizable][collapsible]) #splitter.is-resized-start,:host([vertical][resizable][collapsible]) #splitter.is-resized-end{cursor:ns-resize}
`,Ou=Pg;var $g=Object.defineProperty,Tg=Object.getOwnPropertyDescriptor,Ft=(t,e,r,o)=>{for(var n=o>1?void 0:o?Tg(e,r):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(n=(o?s(e,r,n):s(n))||n);return o&&n&&$g(e,r,n),n},fs=3840,Og=2,_g=10,zg=50,_u=50,At=class extends Lr{constructor(){super(),this.vertical=!1,this.resizable=!1,this.collapsible=!1,this.primaryMin=0,this.primaryMax=fs,this.secondaryMin=0,this.secondaryMax=fs,this.firstPaneSize="auto",this.enoughChildren=!1,this.viewSize=0,this.offset=0,this.minPos=0,this.maxPos=fs,this.controlledElIDApplied=!1;let e=window.ResizeObserver;e&&(this.observer=new e(()=>{this.rect=void 0,this.updateMinMax()}))}static get styles(){return[Ou]}connectedCallback(){var e;super.connectedCallback(),(e=this.observer)==null||e.observe(this)}disconnectedCallback(){var e;(e=this.observer)==null||e.unobserve(this),super.disconnectedCallback()}get splitterSize(){return this._splitterSize||(this._splitterSize=this.splitter&&Math.round(parseFloat(window.getComputedStyle(this.splitter).getPropertyValue(this.vertical?"height":"width")))||Og),this._splitterSize}render(){var e,r;let o={"is-resized-start":this.splitterPos===this.minPos,"is-resized-end":this.splitterPos&&this.splitterPos>this.splitterSize&&this.splitterPos===this.maxPos,"is-collapsed-start":this.splitterPos===0,"is-collapsed-end":this.splitterPos&&this.splitterPos>=Math.max(this.splitterSize,this.viewSize-this.splitterSize)},n=this.resizable?this.label||"Resize the panels":void 0;return ut`
      <slot
        id=${at(this.resizable?(e=this.controlledEl)==null?void 0:e.id:void 0)}
        @slotchange=${this.onContentSlotChange}
        style="--spectrum-split-view-first-pane-size: ${this.firstPaneSize}"
      ></slot>
      ${this.enoughChildren?ut`
            <div
              id="splitter"
              class=${Et(o)}
              role="separator"
              aria-controls=${at(this.resizable?(r=this.controlledEl)==null?void 0:r.id:void 0)}
              aria-label=${at(n)}
              aria-orientation=${this.vertical?"horizontal":"vertical"}
              aria-valuenow=${Math.round(parseFloat(this.firstPaneSize)/this.viewSize*100)}
              tabindex=${at(this.resizable?"0":void 0)}
              @keydown=${this.onKeydown}
              ${$u({start:["pointerdown",this.onPointerdown],streamInside:["pointermove",this.onPointermove],end:[["pointerup","pointercancel","pointerleave"],this.onPointerup]})}
            >
              ${this.resizable?ut`
                    <div id="gripper"></div>
                  `:dt}
            </div>
          `:dt}
    `}onContentSlotChange(e){this.controlledEl&&this.controlledElIDApplied&&(this.controlledEl.removeAttribute("id"),this.controlledElIDApplied=!1),this.controlledEl=e.target.assignedElements()[0],this.controlledEl&&!this.controlledEl.id&&(this.controlledEl.id=`${this.tagName.toLowerCase()}-${Tu()}`,this.controlledElIDApplied=!0),this.enoughChildren=this.children.length>1,this.checkResize()}onPointerdown(e){if(!this.resizable||e.button&&e.button!==0){e.preventDefault();return}this.splitter.setPointerCapture(e.pointerId),this.offset=this.getOffset()}onPointermove(e){e.preventDefault();let r=this.vertical||this.dir==="ltr"?this.getPosition(e)-this.offset:this.offset-this.getPosition(e);this.collapsible&&r<this.minPos-_u&&(r=0),this.collapsible&&r>this.maxPos+_u&&(r=this.viewSize-this.splitterSize),this.updatePosition(r)}onPointerup(e){this.splitter.releasePointerCapture(e.pointerId)}getOffset(){this.rect||(this.rect=this.getBoundingClientRect());let e=this.dir==="ltr"?this.rect.left:this.rect.right;return this.vertical?this.rect.top:e}getPosition(e){return this.vertical?e.clientY:e.clientX}movePosition(e,r){e.preventDefault(),this.splitterPos!==void 0&&this.updatePosition(this.splitterPos+r)}onKeydown(e){if(!this.resizable)return;let r=0,o=getComputedStyle(this).direction==="ltr"||this.vertical;switch(e.key){case"Home":e.preventDefault(),this.updatePosition(this.collapsible?0:this.minPos);return;case"End":e.preventDefault(),this.updatePosition(this.collapsible?this.viewSize-this.splitterSize:this.maxPos);return;case"ArrowLeft":r=o?-1:1;break;case"ArrowRight":r=o?1:-1;break;case"ArrowUp":r=this.vertical?-1:1;break;case"ArrowDown":r=this.vertical?1:-1;break;case"PageUp":r=this.vertical?-1:1;break;case"PageDown":r=this.vertical?1:-1;break}if(r!==0){let n=e.key.startsWith("Page")?zg:_g;this.movePosition(e,n*r)}}async checkResize(){if(this.enoughChildren&&(this.updateMinMax(),this.splitterPos===void 0)){let e=await this.calcStartPos();this.updatePosition(e)}}updateMinMax(){this.viewSize=this.vertical?this.offsetHeight:this.offsetWidth,this.minPos=Math.max(this.primaryMin,this.viewSize-this.secondaryMax),this.maxPos=Math.min(this.primaryMax,this.viewSize-Math.max(this.secondaryMin,this.splitterSize))}updatePosition(e){let r=this.getLimitedPosition(e);this.collapsible&&e<=0&&(r=0),this.collapsible&&e>this.maxPos&&e>=this.viewSize-this.splitterSize&&(r=this.viewSize-this.splitterSize),r!==this.splitterPos&&(this.splitterPos=r,this.dispatchChangeEvent())}getLimitedPosition(e){return e<=this.minPos?this.minPos:e>=this.maxPos?this.maxPos:Math.max(this.minPos,Math.min(this.maxPos,e))}async calcStartPos(){if(this.primarySize!==void 0&&/^\d+(px)?$/.test(this.primarySize))return parseInt(this.primarySize,10);if(this.primarySize!==void 0&&/^\d+%$/.test(this.primarySize))return parseInt(this.primarySize,10)*this.viewSize/100;if(this.primarySize==="auto"){this.firstPaneSize="auto";let e=this.paneSlot.assignedNodes({flatten:!0}).find(r=>r instanceof HTMLElement);if(typeof e.updateComplete<"u"&&await e.updateComplete,e){let r=window.getComputedStyle(e).getPropertyValue(this.vertical?"height":"width"),o=parseFloat(r);if(!isNaN(o))return this.getLimitedPosition(Math.ceil(o))}}return this.viewSize/2}dispatchChangeEvent(){let e=new Event("change",{bubbles:!0,composed:!0});this.dispatchEvent(e)}willUpdate(e){(!this.hasUpdated||e.has("primarySize"))&&(this.splitterPos=void 0,this.checkResize()),e.has("splitterPos")&&this.splitterPos!==void 0&&this.enoughChildren&&(this.firstPaneSize=`${Math.round(this.splitterPos)}px`)}};Ft([yt()],At.prototype,"controlledEl",2),Ft([T({type:Boolean,reflect:!0})],At.prototype,"vertical",2),Ft([T({type:Boolean,reflect:!0})],At.prototype,"resizable",2),Ft([T({type:Boolean,reflect:!0})],At.prototype,"collapsible",2),Ft([T({type:Number,attribute:"primary-min"})],At.prototype,"primaryMin",2),Ft([T({type:Number,attribute:"primary-max"})],At.prototype,"primaryMax",2),Ft([T({type:String,attribute:"primary-size"})],At.prototype,"primarySize",2),Ft([T({type:Number,attribute:"secondary-min"})],At.prototype,"secondaryMin",2),Ft([T({type:Number,attribute:"secondary-max"})],At.prototype,"secondaryMax",2),Ft([T({type:Number,reflect:!0,attribute:"splitter-pos"})],At.prototype,"splitterPos",2),Ft([T({type:String,attribute:!1})],At.prototype,"firstPaneSize",2),Ft([T()],At.prototype,"label",2),Ft([T({type:Boolean,attribute:!1})],At.prototype,"enoughChildren",2),Ft([T({type:Number})],At.prototype,"viewSize",2),Ft([vt("slot")],At.prototype,"paneSlot",2),Ft([vt("#splitter")],At.prototype,"splitter",2);Su("sp-split-view",At);var Dg=class extends HTMLElement{wrapper;_initialized=!1;_resetTimer=null;static get observedAttributes(){return["value","max"]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._initialized||(this.setup(),this._initialized=!0,this.updateValue(this.value))}setup(){let t=document.createElement("style");t.textContent=`
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
        }`;let e=document.createElement("span");e.classList.add("numbers"),e.setAttribute("aria-hidden","true"),this.shadowRoot.append(t,e),this.wrapper=e,this.rebuildNumbers()}rebuildNumbers(){this.wrapper.innerHTML="";let t=this.max;for(let r=0;r<=t;r++){let o=document.createElement("span");o.textContent=String(r),this.wrapper.appendChild(o)}let e=document.createElement("span");e.textContent=`${t}+`,this.wrapper.appendChild(e),this._initialized&&this.updateValue(this.value)}attributeChangedCallback(t,e,r){if(r!==e&&this._initialized)if(t==="value"){let o=parseInt(e??"0",10)||0,n=parseInt(r??"0",10)||0;this.applyChangeState(o,n),this.updateValue(n)}else t==="max"&&this.rebuildNumbers()}updateValue(t){let e=this.max,r=t>e?e+1:Math.max(0,t),o=this.wrapper.getBoundingClientRect().height||16;this.wrapper.style.transform=`translateY(-${r*o}px)`;let n=t>e?`${e}+`:`${t}`;this.setAttribute("aria-label",n)}clearResetTimer(){this._resetTimer!==null&&(clearTimeout(this._resetTimer),this._resetTimer=null)}scheduleResetChange(){this.clearResetTimer();let t=3e3;this._resetTimer=window.setTimeout(()=>{this.removeAttribute("data-change"),this._resetTimer=null},t)}applyChangeState(t,e){e>t?(this.setAttribute("data-change","up"),this.scheduleResetChange()):e<t&&(this.setAttribute("data-change","down"),this.scheduleResetChange())}set value(t){this.value!==t&&(this.setAttribute("value",String(t)),this._initialized&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0})))}get value(){return parseInt(this.getAttribute("value")||"0",10)||0}set max(t){this.setAttribute("max",String(t))}get max(){return parseInt(this.getAttribute("max")||"9",10)||9}};customElements.get("bl-odometer")||customElements.define("bl-odometer",Dg);var Ig=class zu extends Event{static eventName="bl-select";index;item;constructor(e,r){super(zu.eventName,{bubbles:!0,composed:!0}),this.index=e,this.item=r}},Rg=class extends HTMLElement{activeIndex;items;inputElement;slotElement;observer;constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML='<slot style="border-radius: inherit"></slot>',this.activeIndex=-1,this.items=[],this.inputElement=null,this.slotElement=null,this.observer=null}get activeClass(){return this.getAttribute("active-class")||"active"}connectedCallback(){this.setAttribute("role","listbox"),this.tabIndex=-1,this.updateItems(),this.syncActiveIndexFromDataSelected(),this.updateActiveItem();let t=this.getAttribute("for");this.inputElement=t?document.getElementById(t):null,this.inputElement&&(this.inputElement.setAttribute("role","combobox"),this.inputElement.setAttribute("aria-controls",this.id),this.inputElement.setAttribute("aria-expanded","true"),this.inputElement.addEventListener("keydown",this.onKeyDown.bind(this))),this.addEventListener("keydown",this.onKeyDown.bind(this)),this.addEventListener("click",e=>{let r=e.target instanceof Element?e.target.closest("[data-select-list-index]"):null;if(r&&r.hasAttribute("data-select-list-index")){let o=Number(r.getAttribute("data-select-list-index"));this.select(o)}}),this.observer=new MutationObserver(e=>{e.some(r=>r.type==="childList")&&this.handleChildrenChanged(),e.some(r=>r.type==="attributes"&&r.attributeName==="data-selected")&&(this.syncActiveIndexFromDataSelected(),this.updateActiveItem())}),this.observer.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-selected"]}),this.slotElement=this.shadowRoot?.querySelector("slot"),this.slotElement?.addEventListener("slotchange",this.handleChildrenChanged)}disconnectedCallback(){this.observer?.disconnect(),this.observer=null,this.slotElement?.removeEventListener("slotchange",this.handleChildrenChanged)}handleChildrenChanged=()=>{let t=this.items[this.activeIndex]?.id;if(this.updateItems(),t){let e=this.items.findIndex(r=>r.id===t);this.activeIndex=e>=0?e:-1}else this.activeIndex=-1;this.updateActiveItem()};syncActiveIndexFromDataSelected(){let t=this.items.findIndex(e=>e.hasAttribute("data-selected"));t>=0&&(this.activeIndex=t)}updateItems(){let t=["button:not([disabled])","a[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])','[role="option"]'].join(", ");this.items=Array.from(this.querySelectorAll(t)),this.items.forEach((e,r)=>{e.hasAttribute("id")||e.setAttribute("id",`${this.id}-option-${r}`),e.setAttribute("data-select-list-index",r.toString()),e.setAttribute("aria-selected","false"),e.setAttribute("role","option"),e.tabIndex=-1})}onKeyDown(t){this.items.length&&(t.key==="ArrowDown"?(t.preventDefault(),this.activeIndex=(this.activeIndex+1)%this.items.length,this.updateActiveItem()):t.key==="ArrowUp"?(t.preventDefault(),this.activeIndex=(this.activeIndex-1+this.items.length)%this.items.length,this.updateActiveItem()):t.key==="Enter"&&this.activeIndex>=0&&(t.preventDefault(),this.items[this.activeIndex]?.click()))}updateActiveItem(){let t=this.activeClass.split(" ");this.items.forEach((r,o)=>{let n=o===this.activeIndex;t.forEach(i=>{r.classList.toggle(i,n)}),r.setAttribute("aria-selected",n.toString())});let e=this.items[this.activeIndex];e&&this.inputElement?(this.inputElement.setAttribute("aria-activedescendant",e.id),e.scrollIntoView({block:"nearest"})):this.inputElement&&this.inputElement.removeAttribute("aria-activedescendant")}select(t){this.activeIndex=t,this.items.forEach(r=>r.removeAttribute("data-selected"));let e=this.items[t];e&&(e.setAttribute("data-selected",""),this.dispatchEvent(new Ig(t,e)),this.updateActiveItem())}};customElements.get("bl-select-list")||customElements.define("bl-select-list",Rg);var wn=new Map;function yn(t){if(!t||(wn.has(t)&&xn(t),!t.querySelector(".offcanvas")))return;let e=new AbortController;wn.set(t,e),window.addEventListener("popstate",()=>t?.close(),{signal:e.signal}),window.addEventListener("resize",()=>{let n=t.querySelector(".offcanvas");n&&getComputedStyle(n).position!=="fixed"&&t?.close()},{signal:e.signal});let r=history.pushState;history.pushState=function(...n){r.apply(history,n),t?.close()};let o=history.replaceState;history.replaceState=function(...n){o.apply(history,n),t?.close()}}function xn(t){let e=wn.get(t);e&&(e.abort(),wn.delete(t))}typeof window<"u"&&(window.blueWeb=window.blueWeb||{},window.blueWeb.modalResponsive={init:yn,dispose:xn});var ce=new Map;function Fg(t){if(!t)return;ce.has(t)&&Du(t);let e=t.querySelector('[data-blue-toggle="layout-side"]'),r=t.querySelector(".blue-layout-side"),o=t.querySelector(".blue-layout-side > dialog"),n=t.querySelector(".blue-layout-main > sp-split-view.blue-layout-splitter"),i=t.querySelector(".blue-layout-inspector");if(!e||!r||!o)return;let s=new AbortController,a={toggleLayoutSideEl:e,layoutSideEl:r,modalEl:o,splitterEl:n,inspectorEl:i,controller:s};return ce.set(t,a),localStorage.getItem("blueLayoutSideShrink")!=null&&(r.classList.add("d-lg-none","w-lg-0"),e.setAttribute("aria-expanded","false")),e.addEventListener("click",()=>Ng(t),{signal:s.signal}),n&&i&&(yn(i),Bg(t,a)),yn(o),r.classList.add("with-transition"),a}function Du(t){let e=ce.get(t);if(!e)return;let{controller:r,modalEl:o}=e;r.abort(),o&&xn(o),ce.delete(t)}function Ng(t){let e=ce.get(t);if(!e)return;let{layoutSideEl:r,toggleLayoutSideEl:o,splitterEl:n}=e;if(!r||!o)return;r.classList.toggle("d-lg-none"),r.classList.toggle("w-lg-0");let i=!r.classList.contains("d-lg-none");o.setAttribute("aria-expanded",i.toString()),i?localStorage.removeItem("blueLayoutSideShrink"):localStorage.setItem("blueLayoutSideShrink",""),n&&setTimeout(()=>{Ru(t,n)},10)}function hs(t,e){e<0?t.splitterPos=0:t.maxPos&&e>t.maxPos?t.splitterPos=t.maxPos:t.splitterPos=e}function Iu(t,e){let r=localStorage.getItem("blueLayoutInspectorSize"),o=r?Number.parseInt(r,10):NaN;hs(e,e.viewSize-(Number.isFinite(o)?o:244)),e.resizable=!0,e.dataset.blueInspectorSize=(e.viewSize-e.splitterPos).toString(),t.dataset.blueSplitterEnabled=""}function ps(t,e){hs(e,e.maxPos||e.viewSize),e.resizable=!1,delete t.dataset.blueSplitterEnabled}function Ru(t,e){e.resizable&&e.dataset.blueInspectorSize&&(hs(e,e.viewSize-parseInt(e.dataset.blueInspectorSize)),Pr(t))}function Bg(t,e){let{splitterEl:r,inspectorEl:o,controller:n}=e;!r||!o||!n||(localStorage.getItem("blueLayoutInspectorEnabled")!=null&&getComputedStyle(o).position!=="fixed"?Iu(t,r):ps(t,r),Pr(t),window.addEventListener("resize",()=>{r&&(o&&getComputedStyle(o).display==="none"||!r.resizable?(ps(t,r),Pr(t)):Ru(t,r))},{signal:n.signal}),r.addEventListener("change",i=>{let s=i.target,a=s.viewSize-s.splitterPos;a&&(a=Math.round(a),s.dataset.blueInspectorSize=a.toString(),localStorage.setItem("blueLayoutInspectorSize",a.toString()))},{signal:n.signal}),o.addEventListener("close",()=>{Pr(t)},{signal:n.signal}))}function Pr(t){let e=typeof t=="string"?document.querySelector(t):t;if(!e)return;let r=ce.get(e);if(!r?.splitterEl||!r.inspectorEl)return;let{splitterEl:o,inspectorEl:n}=r,i=getComputedStyle(n).position==="fixed"?n.open:o.resizable,s=e.dataset.blueInspectorOpen;i?e.dataset.blueInspectorOpen="":delete e.dataset.blueInspectorOpen,s!==e.dataset.blueInspectorOpen&&e.dispatchEvent(new Event("blue-inspector-change"))}function Fu(t,e="show-modal"){let r=typeof t=="string"?document.querySelector(t):t;if(!r)return;let o=ce.get(r);if(!o?.splitterEl||!o.inspectorEl)return;let{splitterEl:n,inspectorEl:i}=o;getComputedStyle(i).position==="fixed"?e==="show"?i.show():i.showModal():(Iu(r,n),localStorage.setItem("blueLayoutInspectorEnabled","")),Pr(r)}function Nu(t){let e=typeof t=="string"?document.querySelector(t):t;if(!e)return;let r=ce.get(e);if(!r?.splitterEl||!r.inspectorEl)return;let{splitterEl:o,inspectorEl:n}=r;getComputedStyle(n).position==="fixed"?n.close():(ps(e,o),localStorage.removeItem("blueLayoutInspectorEnabled")),Pr(e)}function Vg(t,e="show-modal"){let r=typeof t=="string"?document.querySelector(t):t;if(!r)return;let o=ce.get(r);if(!o?.splitterEl||!o.inspectorEl)return;let{splitterEl:n,inspectorEl:i}=o;(getComputedStyle(i).position==="fixed"?i.open:n.resizable)?Nu(t):Fu(t,e)}typeof window<"u"&&(window.blueWeb=window.blueWeb||{},window.blueWeb.layout={init:Fg,dispose:Du,instances:ce,toggleInspector:Vg,openInspector:Fu,closeInspector:Nu});function ho(t){return{"data-open":t?"":void 0,"data-closed":t?void 0:""}}var ct=!1;function Bu(t,e){return t}function Vu(t){t()}var Hu=()=>!1;var go=new WeakMap,Oe,Hg=!1,Wu=0;function ju(t){Wu++;try{t()}finally{Wu--}}function Uu(t){let e=Oe,r={starts:[]};Oe=r;let o;try{o=t()}finally{Oe=e}return go.set(o,r),e?e.starts.push(()=>(qu(o),()=>Yu(o))):!Hg&&typeof document<"u"&&qu(o),o}function $r(t){Oe?Oe.starts.push(t):ct&&void 0}function Ku(t,e){let r=Oe,o={starts:[]};Oe=o;try{e()}finally{Oe=r}let n=go.get(t);if(n){n.starts.push(...o.starts);for(let i of n.stops?o.starts:[]){let s=i();s&&n.stops.push(s)}}}function qu(t){let e=go.get(t);if(!e||e.stops)return;let r=e.stops=[];for(let o of e.starts){let n=o();n&&r.push(n)}}function Yu(t){let e=go.get(t),r=e?.stops;r&&(e.stops=void 0,r.forEach(o=>o()))}function Xu(t){Yu(t),go.delete(t)}var Wg=Symbol.for("ui-sdk.controller.attach"),qg=Symbol.for("ui-sdk.controller.detach");function Gu(t,e){t?.[Wg]?.(e)}function Qu(t,e){t?.[qg]?.(e)}function Zu(t,e){let r=t.options().controller,o=!1;$r(()=>(o=!0,Gu(r,e),()=>{o=!1,Qu(r,e)})),t.onOptions(({controller:n})=>{n!==r&&(Qu(r,e),r=n,o&&Gu(n,e))})}var ms=new WeakMap;function jg(t,e){let r=ms.get(t);r||ms.set(t,r=[]),r.push(e)}function Cn(t,e,r){jg(t.store,{from:"options",keys:e,derive:r})}function Ju(t,e,r,o){let n=ms.get(t);if(!n)return r;let i=r??{};for(let s of n){if(!r&&s.from==="state")continue;let a={...o,...i},l=s.from==="state"?t.view(a,()=>s.derive(a)):s.derive(i,o,e);i={...i};for(let c of s.keys)l&&c in l?i[c]=l[c]:s.from==="state"&&(i[c]=a[c])}return r||Object.keys(i).length?i:void 0}te();te();ue();function En(){return St&&typeof HTMLElement.prototype.showPopover=="function"}function vs(t){return t||(St&&!En()?document.body:null)}function Tt(t=document){let e=t.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}function An(t){let e=[t],r=t;for(;r;){let o=r.assignedSlot??r.parentNode??r.host;o&&o!==r.parentNode&&e.push(o),r=o}return e}function Ce(t,e){return An(e).some(r=>t.contains(r))}var gs;var Ug;function de(){return gs?gs==="apple":Ug??=St&&/Mac|iPhone|iPad|iPod/.test(navigator.platform||navigator.userAgent)}function bs(){return gs==="apple"}var td={alt:"Alt",option:"Alt",opt:"Alt",shift:"Shift",ctrl:"Control",control:"Control",cmd:"Meta",command:"Meta",meta:"Meta",backspace:"Backspace",delete:"Delete",del:"Delete",enter:"Enter",return:"Enter",escape:"Escape",esc:"Escape",tab:"Tab",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",arrowup:"ArrowUp",arrowdown:"ArrowDown",arrowleft:"ArrowLeft",arrowright:"ArrowRight",home:"Home",end:"End",pageup:"PageUp",pagedown:"PageDown"};function _e(t,e=de()){return t.split("+").map(r=>{let o=r.toLowerCase();return o==="mod"?e?"Meta":"Control":td[o]?td[o]:r.length===1?r.toUpperCase():r[0].toUpperCase()+r.slice(1)}).join("+")}var Kg={Meta:"\u2318",Control:"\u2303",Alt:"\u2325",Shift:"\u21E7",Backspace:"\u232B",Delete:"\u2326",Enter:"\u21A9",Escape:"\u238B",Tab:"\u21E5",Space:"\u2423",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",PageUp:"\u21DE",PageDown:"\u21DF",Home:"\u2196",End:"\u2198"},Yg={Control:"Ctrl",Delete:"Del",Escape:"Esc",ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};function Ln(t,e=de()){let r=_e(t,e).split("+");return`\u2066${e?r.map(n=>Kg[n]??n).join(""):r.map(n=>Yg[n]??n).join("+")}\u2069`}function Xg(t,e){let r=t.key.length===1?t.key.toLowerCase():t.key;return e==="Space"?r===" ":/^[A-Z0-9]$/.test(e)?r===e.toLowerCase()?!0:/^[a-z0-9]$/.test(r)?!1:t.code===(/\d/.test(e)?`Digit${e}`:`Key${e}`):r.toLowerCase()===e.toLowerCase()}var Gg=[new Map,new Map];function ed(t,e,r=de()){let o=Gg[+r],n=o.get(e);return n||o.set(e,n=_e(e,r).split("+")),Xg(t,n.at(-1))&&t.metaKey===n.includes("Meta")&&t.ctrlKey===n.includes("Control")&&t.altKey===n.includes("Alt")&&t.shiftKey===n.includes("Shift")}function rd(t){return/(^|\+)(Meta|Control|Alt)(\+|$)/.test(_e(t,!0))}function Qg(t,e){let{x:r,y:o}=t,{borders:n}=e,i=r>=n.left&&r<e.width-n.right&&o>=n.top&&o<e.height-n.bottom,s=r>=e.clientLeft&&r<e.clientLeft+e.clientWidth&&o>=e.clientTop&&o<e.clientTop+e.clientHeight;return i&&!s}function od(t,e){if(!(e instanceof Element))return!1;let r=e.ownerDocument;if(e===r.documentElement)return t.clientX>=e.clientWidth||t.clientY>=e.clientHeight;if(e.clientWidth===0&&e.clientHeight===0)return!1;let o=e.getBoundingClientRect(),n=getComputedStyle(e);return Qg({x:t.clientX-o.left,y:t.clientY-o.top},{width:o.width,height:o.height,clientLeft:e.clientLeft,clientTop:e.clientTop,clientWidth:e.clientWidth,clientHeight:e.clientHeight,borders:{top:parseFloat(n.borderTopWidth)||0,right:parseFloat(n.borderRightWidth)||0,bottom:parseFloat(n.borderBottomWidth)||0,left:parseFloat(n.borderLeftWidth)||0}})}var Lt=globalThis[Symbol.for("ui-sdk.layers@2")]??={stack:[],listening:new Map};function sd(){return Lt.persistent??=new Set}function ws(t){for(let e of sd())if(Ce(e,t))return!0;return!1}function ad(){return[...sd()].filter(t=>t.isConnected)}function ld(){return Lt.pushed??0}function ys(t){return Or().some(e=>(e.order??0)>t)}function Or(){return Lt.stack.filter(t=>t.active())}function _r(){return Or()}function cd(){return Lt.escapeAt??-1/0}function Mn(t,e,r){return ud(t,An(e),r)}function ud(t,e,r){return e.some(o=>t.contains(o,r))?!0:Or().some(o=>o.parent===t&&ud(o,e,r))}function Zg(t,e){let r=!1,o,n;function i(u,f,g){let d=[],w=!1;if(ws(f))return{dismissed:d,consume:w};for(let p of[...Lt.stack].reverse())if(p.active()){if(Mn(p,f,u)||(p.modal!==!1&&(w=!0),d.push(p),p.shield))break}else if(p.exiting?.()){if(Mn(p,f,u))break;if(p.modal===!1)continue;p.overBackdrop?.(g.x,g.y)&&(w=!0);break}return{dismissed:d,consume:w}}function s(u,f,g){let{dismissed:d,consume:w}=i(u,f,g);for(let p of d)p.onOutsidePress?.(u);return w}let a=ot(e,"pointerdown",u=>{r=!1;let f=u.composedPath()[0];if(u.pointerType==="touch"){o={x:u.clientX,y:u.clientY,target:f};return}if(o=void 0,n=void 0,od(u,f))return;let g={x:u.clientX,y:u.clientY},{dismissed:d,consume:w}=i(u,f,g);if(d[0]?.outsidePress==="click"){if(u.button!==0)return;n={layer:d[0],target:f,point:g},w&&(u.preventDefault(),r=!0);return}w&&(u.preventDefault(),r=!0);for(let p of d)p.onOutsidePress?.(u)},{capture:!0}),l=ot(e,"pointerup",u=>{let f=n;n=void 0,!(!f||!f.layer.active())&&(Mn(f.layer,u.composedPath()[0],u)||s(u,f.target,f.point))},{capture:!0}),c=ot(e,"click",u=>{if(r&&u.detail){r=!1,u.preventDefault(),u.stopPropagation();return}if(r=!1,!o)return;let f=o;o=void 0,!(Math.hypot(u.clientX-f.x,u.clientY-f.y)>10)&&s(u,f.target,{x:f.x,y:f.y})&&(u.preventDefault(),u.stopPropagation())},{capture:!0}),h=ot(t,"keydown",u=>fd(t,u)),m=ot(e,"blur",u=>{for(let f of Or().reverse())f.onBlur?.(u)});return()=>{if(a(),l(),h(),m(),!r)return c();let u=()=>(c(),f(),g()),f=ot(e,"pointerdown",u,{capture:!0}),g=ot(e,"click",u,{capture:!0})}}function xs(t,e){return Mn(t,e)}function er(t){let e=An(t);return Or().reverse().find(r=>e.some(o=>r.contains(o)))}function dd(t){Lt.closed=t,setTimeout(()=>{Lt.closed===t&&(Lt.closed=void 0)})}function Cs(){return Lt.closed}function nd(){ct&&(Lt.stack.map(t=>({component:t.component??"popup",id:t.id??"",modal:t.modal,blocking:!!t.blocking,el:t.el})),void 0)}function Jg(t){let e=t.defaultView;if(!e)return()=>{};let r=Lt.listening.get(t);r||Lt.listening.set(t,r={layers:0,stop:Zg(t,e)});let o=r;return o.layers++,()=>{--o.layers>0||(Lt.listening.delete(t),o.stop())}}function Ss(t){return t.el?.ownerDocument??document}function fd(t,e,r){if(e.key!=="Escape"||e.defaultPrevented||Tr(e))return;let o=Or().filter(n=>Ss(n)===t).at(-1);!o?.onEscape||r&&o!==r||(Lt.escapeAt=performance.now(),o.onEscape(e))}function pd(t,e){fd(Ss(t),e,t)}function hd(t){Lt.pushed=(Lt.pushed??0)+1,t.order=Lt.pushed,Lt.stack.push(t);let e=Jg(Ss(t));nd();let r=!1;return()=>{if(r)return;r=!0;let o=Lt.stack.indexOf(t);o!==-1&&Lt.stack.splice(o,1),e(),nd()}}te();ue();De();var fe=globalThis[Symbol.for("ui-sdk.modal@2")]??={holders:new WeakMap,thaw:new WeakMap,inert:new WeakMap};function yd(t=document,e){let r={},o=fe.holders.get(t);o||fe.holders.set(t,o=new Set),o.size||fe.thaw.set(t,o0(t)),o.add(r);let n=e&&Sn()?u0(e):void 0;return()=>{o.delete(r)&&(n?.(),!o.size&&(fe.thaw.get(t)?.(),fe.thaw.delete(t)))}}function r0({scrollbar:t,gutter:e,padding:r}){let o={overflow:"hidden","scroll-behavior":"auto"};return t>0&&(e?o["scrollbar-gutter"]="stable":o["padding-right"]=`${r+t}px`),o}function o0(t){let{scroller:e,gutter:r,padding:o}=Tn.get(t)??Cd(t),n=r0({scrollbar:r,gutter:typeof CSS<"u"&&CSS.supports("scrollbar-gutter","stable"),padding:o}),i=Object.entries(n).map(([s,a])=>ze(e,s,a));return r>0&&i.push(ze(t.documentElement,"--scrollbar-width",`${r}px`)),()=>i.forEach(s=>s())}var Tn=new WeakMap;function xd(t){Tn.has(t)||(Tn.set(t,Cd(t)),setTimeout(()=>Tn.delete(t)))}function Cd(t){let e=t.defaultView??window,r=n0(t,e),o=e.getComputedStyle(r);return{scroller:r,gutter:i0(r,t,e,o),padding:parseFloat(o.paddingRight)||0}}function n0(t,e){let{body:r,documentElement:o}=t;return!r||e.getComputedStyle(o).overflowY==="visible"?o:/auto|scroll/.test(e.getComputedStyle(r).overflowY)?r:o}function i0(t,e,r,o){if(t===e.documentElement)return r.innerWidth-t.clientWidth;let n=(parseFloat(o.borderLeftWidth)||0)+(parseFloat(o.borderRightWidth)||0);return t.offsetWidth-t.clientWidth-n}function s0(t,e){let r=e.getComputedStyle(t),o=/auto|scroll/.test(r.overflowY)&&t.scrollHeight>t.clientHeight,n=/auto|scroll/.test(r.overflowX)&&t.scrollWidth>t.clientWidth;return o||n}function a0(t,e){let{body:r,documentElement:o}=t.ownerDocument;for(let n=t;n&&n!==r&&n!==o;n=n.parentElement)if(s0(n,e))return!0;return!1}function l0(t){return t.fingers>1||t.zoomed?"browser":t.scroller||t.slider||t.selecting?"element":"page"}var c0="@layer ui-sdk { [data-scroll-guard], [data-scroll-guard] * { overscroll-behavior: contain } }";function u0(t){let e=t.ownerDocument,r=e.defaultView??window;ee(e,"ui-sdk-scroll-guard",c0);let o=!t.hasAttribute("data-scroll-guard");o&&t.setAttribute("data-scroll-guard","");let n="browser",i=ot(e,"touchstart",a=>{let l=a.target instanceof Element?a.target:null;n=l0({fingers:a.touches.length,zoomed:(r.visualViewport?.scale??1)!==1,scroller:!!l&&a0(l,r),slider:!!l?.closest('input[type="range"]'),selecting:e.getSelection()?.type==="Range"})},{capture:!0,passive:!0}),s=ot(e,"touchmove",a=>{n==="page"&&a.cancelable&&a.preventDefault()},{passive:!1});return()=>{i(),s(),o&&t.removeAttribute("data-scroll-guard")}}var d0='[aria-live]:not([aria-live="off"]),[role="status"],[role="alert"],[role="log"],output';function bd(t){let e=t.parentNode;return e instanceof ShadowRoot?e.host:e}function wd(t){let e=t[0]?.ownerDocument??document,r=[...t,...Array.from(e.querySelectorAll(d0)),...ad()],o=r.filter(s=>!r.some(a=>a!==s&&a.contains(s))),n=new Set;for(let s of o)for(let a=s;a;a=bd(a))n.add(a);let i=[];for(let s of o)for(let a=s;a&&a!==e.body;a=bd(a))for(let l of Array.from(a.parentNode?.children??[])){if(n.has(l)||!(l instanceof HTMLElement))continue;let c=fe.inert.get(l)??(l.inert?1/0:0);c===0&&(l.inert=!0),c!==1/0&&fe.inert.set(l,c+1),i.push(l)}return()=>{for(let s of i){let a=fe.inert.get(s);a!==void 0&&(a<=1?(s.inert=!1,fe.inert.delete(s)):fe.inert.set(s,a-1))}}}function Sd(t){let e=t,r=wd(e),o=!1,n=i=>{let s=r;e=i,r=wd(i),s()};return Object.assign(()=>{o||(o=!0,r())},{keep(i){return o?()=>{}:(n([...e,i]),()=>{o||n(e.filter(s=>s!==i))})}})}var kd=t=>t.isTrusted;var Ms="pointer",As=!1,Ed=!1,Ad=!1,Ld=!1,Ps=!1,bo="mouse",Ls=!1,f0=()=>Ls=!1,On=null,p0=()=>On=null;function $d(t){t.key!=="Enter"&&t.key!==" "||(On=t.target,setTimeout(p0))}function h0(t){$d(t),Ps=!1;let e=t.metaKey||t.ctrlKey||t.altKey||/^(Meta|Control|Alt|Shift)$/.test(t.key);(t.key==="Tab"||!e)&&(Ms="keyboard")}function Md(t){if(Ms="pointer",Ps=!1,!("pointerType"in t)){Ls||(bo="touch");return}Ls=!0,setTimeout(f0);let e=t.pointerType;bo=Td(t)?"virtual":e==="touch"||e==="pen"?e:"mouse"}function _n(){As||typeof document>"u"||(As=!0,document.addEventListener("keydown",h0,!0),document.addEventListener("keyup",$d,!0),document.addEventListener("pointerdown",Md,!0),document.addEventListener("touchstart",Md,{capture:!0,passive:!0}),window.addEventListener("blur",t=>{t.target===window&&(Ps=!0)}))}function zn(){As||Ed||(Ed=!0,queueMicrotask(_n))}function Td(t){return t.type==="pointermove"?!1:t.width===0&&t.height===0&&t.pressure===0?!0:t.pointerType==="mouse"&&t.width===1&&t.height===1&&t.pressure===0&&t.detail===0}function m0(t){return t.detail>0?bo:!!On&&On.contains(t.target)?"keyboard":"virtual"}var Pd=()=>Ms==="keyboard"?"keyboard":bo;function Dn(t){if(_n(),!t)return Pd();if(!kd(t))return"programmatic";if(t.type.startsWith("key"))return"keyboard";if(t.type.startsWith("touch"))return"touch";if(t.type==="click")return m0(t);let e=t.pointerType;return e==="mouse"||e==="touch"||e==="pen"?Td(t)?"virtual":e:"button"in t?bo:Pd()}function Od(t){_n(),Ad=!0;try{t.focus({preventScroll:!0})}finally{Ad=!1}}function _d(t){_n(),Ld=!0;try{t.focus({preventScroll:!0})}finally{Ld=!1}}var g0=4,Ie=(t,e)=>!!(t.compareDocumentPosition(e)&g0),$s=(t,e)=>Ie(t,e)?-1:1,v0=16,b0=32;function zr(t){let e=t.length<v0?null:t[0].el.parentNode;for(;e&&!t.every(({el:r})=>e.contains(r));)e=e.parentNode;if(e){let r=new Map(t.map(s=>[s.el,s])),o=[],n=t[0].el.ownerDocument.createTreeWalker(e,1),i=t.length*b0;for(let s=e;s&&i--;s=n.nextNode()){let a=r.get(s);if(a&&o.push(a)===t.length)return o}}return t.sort((r,o)=>$s(r.el,o.el))}ue();De();var Se={tab:"close",blur:"always",outsidePress:"pointerdown",shield:!1,keepTrigger:!0,focusOnMount:!1,dismissOnFocusLoss:!0,closeWatcher:!1,blocking:!1,movesFocus:!0},zd=t=>t.trapFocus?"trap":"flow",w0={menu:Se,select:Se,combobox:{...Se,tab:"native"},popover:{...Se,tab:zd,blur:"iframe"},dialog:{...Se,tab:zd,blur:"never",outsidePress:"click",shield:!0,keepTrigger:!1,focusOnMount:!0,dismissOnFocusLoss:!1,closeWatcher:!0,blocking:t=>t.inertAndLock},tooltip:{...Se,tab:"native",movesFocus:!1},hoverCard:{...Se,tab:"flow"},navigationMenu:{...Se,tab:"flow",blur:"never"}};function Dd(t,e){let r={...w0[t]};for(let o of Object.keys(Se)){let n=e[o];n!==void 0&&Object.assign(r,{[o]:n})}return r}var Id=()=>globalThis[Symbol.for("ui-sdk.popup-elements@1")]??=new WeakMap;function Dr(t){let e=Id();e.set(t,(e.get(t)??0)+1);let r=!1;return()=>{if(r)return;r=!0;let o=(e.get(t)??1)-1;o>0?e.set(t,o):e.delete(t)}}function Rd(t){let e=Id();for(let r=t;r;r=r.parentNode??r.host??null)if(e.has(r))return!0;return!1}function Fd(t,e,r=`[data-slot="${t.getAttribute("data-slot")}"]`){return e.target.closest(r)===t}te();var Nd=["a[href]","area[href]","button","input:not([type='hidden'])","select","textarea","iframe","summary","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])","[tabindex]"].join(",");function Ir(t){return!(t instanceof HTMLElement)||t.tabIndex<0||t.matches(":disabled")||t.closest("[inert]")||(t.checked?[]:Ts(t)).some(r=>r.checked&&Ir(r))?!1:typeof t.checkVisibility=="function"?t.checkVisibility({visibilityProperty:!0}):t.getClientRects().length>0&&getComputedStyle(t).visibility!=="hidden"}function Ts(t){return!(t instanceof HTMLInputElement)||t.type!=="radio"||!t.name?[]:(t.form?Array.from(t.form.elements):Array.from(t.getRootNode().querySelectorAll(`input[name="${CSS.escape(t.name)}"]`))).filter(r=>r instanceof HTMLInputElement&&r.type==="radio"&&r.name===t.name&&r.form===t.form)}function Re(t){return Array.from(t.querySelectorAll(Nd)).filter(Ir)}function wo(t){let e=n=>[...n.filter(i=>i.index>0).sort((i,s)=>i.index-s.index),...n.filter(i=>i.index<=0)].flatMap(i=>i.stops),r=(n,i)=>{for(let s of n){let a=s.hasAttribute("tabindex")?s.tabIndex:0;if(s.hasAttribute("inert")||s.shadowRoot&&a<0)continue;let l=s.matches(Nd)&&!s.shadowRoot?.delegatesFocus&&Ir(s)?[s]:[],c=s instanceof HTMLSlotElement?s.assignedElements():[];if(s.shadowRoot||c.length){let h=[];r(s.shadowRoot?.children??c,h),i.push({index:a,stops:[...l,...e(h)]})}else i.push({index:a,stops:l}),r(s.children,i)}},o=[];return r(t.children,o),o.flatMap(n=>n.stops)}function Bd(t,e){let r=o=>{for(let n=o;n&&n!==e;n=n.parentElement)if(n.assignedSlot)return!0;return!1};return t.filter(o=>o.tabIndex>0&&!r(o)).sort((o,n)=>o.tabIndex-n.tabIndex)}function Vd(t,e){let r=t.ownerDocument??document;return Re(r.body).find(o=>!o.contains(t)&&!e?.contains(o)&&Ie(t,o))}var y0="position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;outline:none";function Hd(t,e){let r=t.ownerDocument,o,n=[],i=()=>{n.forEach(u=>u.remove()),n=[],o=void 0},s=()=>{let u=r.createElement("span");return u.tabIndex=0,u.setAttribute("aria-hidden","true"),u.style.cssText=y0,u},a=()=>{let u=r.activeElement;n.length||!e()||!(u instanceof HTMLIFrameElement)||!t.contains(u)||(o=u,n=[s(),s()],u.before(n[0]),u.after(n[1]))},l=()=>{a(),setTimeout(a)},c=ot(r.defaultView??window,"blur",l),h=ot(r,"focusout",l),m=ot(r,"focusin",u=>{let f=n.indexOf(u.target),g=o;if(i(),f<0||!g)return;let d=Re(t),w=f===0?-1:1;(d.at((d.indexOf(g)+w)%d.length)??t).focus({preventScroll:!0})});return()=>{c(),h(),m(),i()}}var In=new WeakMap;function Rn(t,e){In.get(t)?.();let r=t.getAnimations?.({subtree:!0}).filter(Wd),o=r?.every(a=>Os(a)!==t);if(t.setAttribute("data-starting-style",""),r&&o)for(let a of t.getAnimations({subtree:!0}))Wd(a)&&!r.some(l=>x0(a,l))&&a.finish();let n,i,s=requestAnimationFrame(()=>i=setTimeout(()=>{t.removeAttribute("data-starting-style"),e&&(n=Ud(t,e))}));return()=>{cancelAnimationFrame(s),clearTimeout(i),n?.(),t.removeAttribute("data-starting-style")}}var Wd=t=>"transitionProperty"in t,Os=t=>t.effect?.target,x0=(t,e)=>Os(t)===Os(e)&&t.transitionProperty===e.transitionProperty;function qd(t){return t.split(",").map(e=>{let r=parseFloat(e)||0;return e.trim().endsWith("ms")?r/1e3:r})}function C0(t){return Math.max(jd(getComputedStyle(t)),jd(getComputedStyle(t,"::backdrop")))}function jd(t){let e=(r,o,n="1")=>{let i=qd(r),s=qd(o),a=n.split(",").map(l=>l.trim()==="infinite"?1:parseFloat(l)||1);return i.map((l,c)=>(l*(a[c%a.length]??1)+(s[c%s.length]??0))*1e3)};return Math.max(0,...e(t.transitionDuration,t.transitionDelay),...e(t.animationDuration,t.animationDelay,t.animationIterationCount))}function S0(t){let e=0;for(let r of t){let o=r.effect?.getComputedTiming(),n=Number(o?.endTime);!o||!Number.isFinite(n)||(e=Math.max(e,n-(Number(o.localTime)||0)))}return e}function Ud(t,e){let r=!1,o=t.getAnimations({subtree:!0}),n=()=>{r||(r=!0,clearTimeout(i),e())},i=o.length?setTimeout(n,Math.max(C0(t),S0(o))+50):void 0;return o.length?Promise.allSettled(o.map(s=>s.finished)).then(n):Vu(n),()=>{r=!0,clearTimeout(i)}}function _s(t,e){t.toggleAttribute("data-open",e),t.toggleAttribute("data-closed",!e)}function Kd(t,e){In.get(t)?.(),t.removeAttribute("data-starting-style"),t.setAttribute("data-ending-style","");let r=t.hasAttribute("inert");t.setAttribute("inert","");let o=t.ownerDocument?.defaultView?.MutationObserver,n=!1,i=o&&new o(()=>n=!0);i?.observe(t,{attributeFilter:["inert"]});let s=0,a=()=>{cancelAnimationFrame(s),In.delete(t),t.removeAttribute("data-ending-style"),n||=!!i?.takeRecords().length,i?.disconnect(),n||t.toggleAttribute("inert",r)},l=!1,c=Ud(t,()=>{if(!l)return a(),e();In.set(t,a),s=requestAnimationFrame(()=>{s=requestAnimationFrame(a)}),e()});return l=!0,()=>{c(),a()}}function rf(t){return{consumeOutsidePress:t===!0||t==="pointer",trapFocus:t===!0||t==="trap-focus",inertAndLock:t===!0}}var k0={mouse:"pointer",pen:"pointer",touch:"touch",keyboard:"keyboard",virtual:"keyboard",programmatic:"imperative",agent:"imperative"},of=t=>t?k0[Dn(t)]:"imperative";function E0(t){return t==="initial"||t==="hover"?"none":t==="touch"?"popup":"auto"}function A0(t){return t.focusable&&!t.consumed?!1:t.type==="pointerdown"?"later":!0}var L0=new Set(["text","search","url","tel","email","password"]);function M0(t){t.localName==="input"&&L0.has(t.type)&&t.value&&t.getAttribute("aria-expanded")!=="true"&&t.select()}function Yd(t,e){for(let r of t){let o=r();if(o&&e(o))return o}}function P0(t,e,r){Cn(t,e,(o,n)=>"open"in o&&o.open!==n.open?r(!!o.open,n):void 0)}function nf(t,e,r,o=""){let n=t.trigger==null||t.trigger===o,i=t.open&&n;return{id:n?`${e}-trigger`:void 0,"aria-haspopup":r,"aria-expanded":String(i),"aria-controls":n&&t.mounted?`${e}-content`:void 0,...ho(i)}}function sf(t){let e=t.disabled&&t.focusableWhenDisabled;return{disabled:t.disabled&&!e?"":void 0,"aria-disabled":e?"true":void 0,"data-disabled":t.disabled?"":void 0}}function af(t,e){return{id:`${e}-content`,tabindex:"-1",hidden:t.mounted?void 0:"",...ho(t.open)}}var $0="a[href],button,input,select,textarea,summary,[tabindex],[contenteditable]";function T0(t,e){return typeof t=="function"?t()??void 0:typeof t=="string"?e.querySelector(t)??void 0:t}function Fn(t){return t.isConnected&&!t.closest("[inert]")}function Xd(t){let e=t.getRangeAt(0).cloneRange(),r=!e.collapsed&&t.anchorNode===e.endContainer&&t.anchorOffset===e.endOffset;return{range:e,backward:r}}function zs(){let t=Tt();return!t||t===t.ownerDocument.body||!Fn(t)||t.checkVisibility?.()===!1}function Ds(t,e){return t.x<e.left||t.x>e.right||t.y<e.top||t.y>e.bottom}function Gd(t){return t.getRootNode().activeElement}var Qd=()=>globalThis[Symbol.for("ui-sdk.popover-reset@2")]??=new WeakMap;function Is(t,e){let r=Qd().get(t);r||Qd().set(t,r={selectors:new Set,css:""});let o=r.selectors;e.every(n=>o.has(n))||(e.forEach(n=>o.add(n)),r.css=`@layer ui-sdk { :where(${[...o].map(n=>`${n}[popover]`).join(", ")}) { inset: auto; width: auto; height: auto; max-width: none; max-height: none; margin: 0; padding: 0; border: 0; overflow: visible; color: inherit; background: none } }`),r.css&&ee(t,"ui-sdk-popover-reset",r.css)}var Zd=new WeakSet;function lf(t){!St||Zd.has(t)||(Zd.add(t),$n(()=>{Is(document,t),Pn(document)}))}function O0(t){let e=globalThis.CloseWatcher;if(!e||!/Android/.test(navigator.userAgent))return;let r;try{r=new e}catch{return}return r.addEventListener("close",o=>{performance.now()-cd()<100||t(o)}),()=>r?.destroy()}var Jd=new WeakMap,Nn=new WeakSet,tf=new WeakMap;function ef(t,e){for(let r=t;r;r=r.parent)if(r===e||Nn.has(r)&&(r.order??0)>(e.order??0))return!0;return!1}function cf(t){let e=Dd(t.preset,t),r=()=>typeof e.tab=="function"?e.tab(t.modal()):e.tab,{store:o}=t,n,i,s,a,l,c,h=o.get().open?"initial":"imperative",m=e.focusOnMount&&o.get().open,u=!1,f=!1,g=!1,d=!0,w,p,v=o.get().open,C=()=>{},b=[],S=t.returnTrigger??t.trigger,_,I,y,$,M=(x,P)=>t.onOpenChangeComplete?.(x,P),V=x=>x||!!i?.el&&St;P0({store:o},["mounted"],x=>V(x)===x?{mounted:x}:void 0);function q(x){w=x;let P=x?.isContentEditable?x.ownerDocument.getSelection():null;p=P?.rangeCount&&x.contains(P.anchorNode)?Xd(P):void 0;let R=w&&er(w),N=R?void 0:Cs();C=R?.returnTarget??(()=>N)}let G=o.get().open;o.subscribe(()=>{let{open:x}=o.get();if(x===G)return;if(G=x,x){if($?.(!0),t.onOpenChange?.(!0),a?.(),a=void 0,i)for(let B of[i.el,i.backdrop])B&&_s(B,!0);m=!0,u=!0,d=!0;let gt=St?Tt():null;q(gt&&gt!==gt.ownerDocument.body?gt:void 0);let me=S();v=h==="imperative"||g&&!!w&&!er(w)&&!Cs()&&!(me&&Ce(me,w));let fr=!!i;o.set({mounted:!0}),n?(fr&&ft(),H()):St||(u=!1,M(!0));return}let P=e.movesFocus&&d;d=!0,m=!1,u=!1,h="imperative",g=!1;let R=$?.(!1),N=i?.el;s&&dd(z());let K=C,j=p;if(p=void 0,!N||!St){t.onOpenChange?.(!1,R),o.set({mounted:!1}),M(!1,R);return}let A=Tt(),F=t.trigger(),W=!A||A===N.ownerDocument.body||Ce(N,A)||!!s&&xs(s,A)&&!(F&&Ce(F,A));t.onOpenChange?.(!1,R),n?.config.onClose?.();let X=ld(),tt=[N,...i?.backdrop?[i.backdrop]:[]],U=tt.length,et=tt.map(gt=>(_s(gt,!1),Kd(gt,()=>{--U>0||(a=void 0,o.set({mounted:!1}),ft(),M(!1,R))})));if(U>0&&(a=()=>et.forEach(gt=>gt())),l?.(),l=void 0,c?.(),c=void 0,!P||!W)return;if(P===!0){O(N,K,!1,j);let gt=Tt();setTimeout(()=>{gt&&!gt.isConnected&&zs()&&!ys(X)&&O(N,K)});return}if(P==="unless-moved"){queueMicrotask(()=>{let gt=Tt();!(!!gt&&gt!==N.ownerDocument.body&&!Ce(N,gt))&&!ys(X)&&O(N,K,!1,j)});return}let st=()=>{pt(),clearTimeout(Nt),setTimeout(()=>{let gt=Tt();(!gt||gt===N.ownerDocument.body)&&O(N,K,!1,j)})},pt=ot(window,"pointerup",st,{capture:!0}),Nt=setTimeout(st,1e3)});function Y(x,P,R=C,N=!1){let K=()=>R(P,N),j=()=>L(x,N);return v?[()=>w,K,S,j,t.trigger]:[S,()=>w,K,j,t.trigger]}let Z=!1;function z(x=Fn,P=!1){if(!Z){Z=!0;try{return Yd(Y(i?.el,x,C,P),x)}finally{Z=!1}}}function L(x,P=!1){let R=b[0]?.node;if(R?.isConnected&&!x?.contains(R)){for(let U of[...b.slice(1).map(et=>et.node),R.ownerDocument.body]){let et=Re(U).filter(pt=>!x?.contains(pt)),st=et.find(pt=>Ie(R,pt)&&!R.contains(pt))??et.filter(pt=>Ie(pt,R)).pop();if(st)return st}return}let N=b.findIndex((U,et)=>!U.node.isConnected&&b[et+1]?.node.isConnected);if(N===-1)return;let{next:K,previous:j}=b[N],A=b[N+1].node,F=U=>!!U?.isConnected&&U.parentNode===A,W=F(K)?K.previousElementSibling===j:!K&&(j?F(j)&&!j.nextElementSibling:!A.firstElementChild);if(P&&!W)return;let X=(U,et)=>U.contains(et)||Ie(U,et),tt=F(K)?U=>X(K,U):F(j)?U=>Ie(j,U)&&!j.contains(U):U=>X(A,U);for(let{node:U}of b.slice(N+1)){let et=Re(U).filter(Nt=>!x?.contains(Nt)),st=F(j)?et.filter(Nt=>!X(j,Nt)||j.contains(Nt)).pop():void 0,pt=et.find(tt)??st??et[0];if(pt)return pt}}function O(x,P,R=!1,N,K=t.finalFocus?.()??"trigger"){if(K==="none")return;let j=F=>{if(!Fn(F)||x.contains(F))return!1;let W=F.ownerDocument.getSelection(),X=N&&F===w?W?.rangeCount&&F.contains(W.anchorNode)?Xd(W):N:void 0;if(Od(F),Tt()!==F)return!1;if(X&&F.contains(X.range.startContainer)){let{startContainer:tt,startOffset:U,endContainer:et,endOffset:st}=X.range;X.backward?W?.setBaseAndExtent(et,st,tt,U):W?.setBaseAndExtent(tt,U,et,st)}return!0},A=Y(x,j,P,R);K!=="trigger"&&A.unshift(()=>T0(K,x.ownerDocument)),Yd(A,j)}function E(x){if(!m||!i||!o.get().open||!e.movesFocus)return;m=!1;let P=h==="initial"&&e.focusOnMount?"auto":E0(h);if(P==="none")return;let R=()=>{if(!i||!o.get().open)return;let N=P==="popup"?i.el:x?.();N&&(_d(N),M0(N))};f?requestAnimationFrame(R):R()}function D(x,P){let R=[],N=t.trigger(),K=P.host?.()??x;if(h==="initial"&&!w){let B=Tt();q(B&&B!==B.ownerDocument.body&&!Ce(x,B)?B:void 0)}x.removeAttribute("hidden"),K.removeAttribute("hidden");let j=i?.backdrop;if(j){let B=Q(j,P.inline);R.push(()=>{B(),J(j)})}if(!P.inline){K.setAttribute("popover","manual");try{K.showPopover()}catch{}}if(P.position&&t.position){let B=t.position(()=>P.anchor?.()??t.trigger(),x,P.position);_=B.place,I=B.follow,R.push(B,()=>_=I=void 0),P.rendered&&R.push(P.rendered(B.follow))}!P.inline&&!En()&&!K.style.zIndex&&(K.style.zIndex="2147483000"),R.push(Rn(x,u?()=>{u=!1,M(!0)}:void 0)),zn();let A=t.modal(),F=e.blur,W=t.persistent?.()??[],X=(B,nt)=>B===x&&!!nt&&"clientX"in nt&&Ds({x:nt.clientX,y:nt.clientY},x.getBoundingClientRect()),tt=S()??(!N&&w?.isConnected?w:void 0);(tt||!N)&&(b=[]);for(let B=tt??null;B&&B!==x.ownerDocument.body;B=B.parentElement)b.push({node:B,next:B.nextElementSibling,previous:B.previousElementSibling});let U={parent:t.parent?.()??(N&&er(N)),active:()=>o.get().open,exiting:()=>!o.get().open&&o.get().mounted,modal:A.consumeOutsidePress,blocking:typeof e.blocking=="function"?e.blocking(A):e.blocking,outsidePress:e.outsidePress,shield:e.shield,component:t.owner?.component,id:t.owner?.id,el:x,contains:(B,nt)=>x.contains(B)&&!X(B,nt)||W.some(Qt=>Qt.contains(B))||(t.contains?t.contains(B,nt):!!t.trigger()?.contains(B)),overBackdrop:(B,nt)=>!!i?.backdrop&&!Ds({x:B,y:nt},i.backdrop.getBoundingClientRect())&&Ds({x:B,y:nt},x.getBoundingClientRect()),returnTarget:z,onOutsidePress:B=>{let nt=B.composedPath()[0];t.close("outside-press",{event:B,focus:A0({type:B.type,focusable:!!nt?.closest?.($0),consumed:A.consumeOutsidePress})})},onEscape:B=>{B.preventDefault(),t.onEscape?t.onEscape(B):t.close("escape-key",{event:B,focus:!0})},onBlur:F==="never"?void 0:F==="always"?B=>t.close("window-blur",{event:B,focus:!1}):B=>setTimeout(()=>{let nt=Gd(x)??x.ownerDocument.activeElement;nt?.tagName==="IFRAME"&&!x.contains(nt)&&t.close("focus-out",{event:B,focus:!1})})};s=U,Jd.set(U,[x,...j?[j]:[]]),R.push(hd(U)),tf.set(U,{inside:B=>B.contains(x)||!!N&&B.contains(N),again:()=>{let B=Tt();ft();for(let nt of[K,j])try{nt?.hidePopover()}catch{}H(),B&&B!==Tt()&&B.focus({preventScroll:!0})}}),A.inertAndLock&&Nn.add(U);for(let B of[t.onShow,P.onShow]){let nt=B?.(U);nt&&R.push(nt)}let et,st,pt,Nt=()=>{let B=[x,...i?.backdrop?[i.backdrop]:[],...W];N&&e.keepTrigger&&B.push(N);for(let Qt of _r())Qt!==U&&ef(Qt,U)&&B.push(...Jd.get(Qt)??[]);et=yd(x.ownerDocument,x);let nt=Sd(B);U.keep=nt.keep,l=st=nt},gt=()=>{pt?.(),st?.(),et?.(),l===st&&(l=void 0),st=et=U.keep=void 0};A.inertAndLock&&(pt=vd(()=>{if(pt=void 0,!o.get().open)return;let B=Tt();Nt(),r()==="trap"&&B&&!Fn(B)&&(m=!0,E(P.initialFocus))})),y=()=>{let B=t.modal();U.modal=B.consumeOutsidePress,U.blocking=typeof e.blocking=="function"?e.blocking(B):e.blocking,B.inertAndLock?Nn.add(U):Nn.delete(U),B.inertAndLock&&!A.inertAndLock&&o.get().open?Nt():!B.inertAndLock&&A.inertAndLock&&gt(),A=B},R.push(gt,()=>y=void 0);let me=new Set(_r());for(let B=U.parent;B;B=B.parent)me.add(B);me.delete(U);for(let B of me)if(B.keep&&ef(U,B))for(let nt of[x,...j?[j]:[]])R.push(B.keep(nt));if(r()==="flow"&&e.dismissOnFocusLoss){let B;R.push(ot(x.ownerDocument,"mousedown",nt=>{B=nt,setTimeout(()=>{B===nt&&(B=void 0)})},{capture:!0}),ot(x.ownerDocument,"focusin",nt=>{let Qt=Gd(x)??nt.target;!o.get().open||xs(U,Qt)||B&&U.contains(Qt,B)||t.close("focus-out",{event:nt,focus:!1})}))}if(R.push(Hd(x,()=>r()==="trap")),e.closeWatcher){let B=O0(nt=>t.close("back",{event:nt,focus:!0}));B&&(c=B,R.push(()=>{B(),c===B&&(c=void 0)}))}let fr=B=>{let nt=B.target,Qt=B.submitter;(Qt?.getAttribute("formmethod")??nt.getAttribute("method"))?.toLowerCase()!=="dialog"||er(nt)!==U||(B.preventDefault(),t.close("close-press",{event:B,focus:!0,returnValue:Qt?.value||void 0}))};x.addEventListener("submit",fr),R.push(()=>x.removeEventListener("submit",fr)),o.get().open&&!m&&r()==="trap"&&zs()&&(m=!0);for(let B of _r()){let nt=tf.get(B);B!==U&&nt?.inside(x)&&nt.again()}return queueMicrotask(()=>E(P.initialFocus)),()=>{if(R.forEach(B=>B()),s===U&&(s=void 0),!o.get().mounted&&!P.inline)try{K.hidePopover()}catch{}}}function H(){if(!n||i)return;let{el:x,config:P}=n;i={el:x,cleanup:()=>{},backdrop:P.backdrop?.()},i.cleanup=D(x,P)}function Q(x,P=!1){if(x.removeAttribute("hidden"),P)return Rn(x);x.setAttribute("popover","manual");try{x.showPopover()}catch{}return!En()&&!x.style.zIndex&&(x.style.zIndex="2147483000"),Rn(x)}function J(x){if(!o.get().mounted)try{x.hidePopover()}catch{}}function ft(){if(!i)return;let{cleanup:x}=i;i=void 0,x()}function bt(x){if(x.key==="Escape"&&s)return pd(s,x);let P=i?.el;if(x.key!=="Tab"||!P)return;let R=r();if(R==="native")return;if(R==="close")return t.close("focus-out",{event:x,focus:!1});let N=Re(P),K=wo(P),j=K[0],A=K.at(-1),F=Tt(),W=!j||F===j||F===P,X=!A||F===A,tt=R==="trap"?Bd(N,P):[];if(tt.length){let et=[...tt,...N.filter(fr=>!tt.includes(fr))],st=et.indexOf(F),pt=F===P?et.at(x.shiftKey?-1:0):et.at((st+(x.shiftKey?-1:1))%et.length),Nt=tt.includes(F)||!!pt&&tt.includes(pt),gt=F?.shadowRoot,me=!x.shiftKey&&!!gt&&Re(gt).length>0;if(F!==P&&(st<0||!Nt||me))return;x.preventDefault(),pt?.focus({preventScroll:!0});return}if(R==="trap"){if(x.shiftKey?W:X){x.preventDefault(),((x.shiftKey?A:j)??P).focus({preventScroll:!0});return}let et=N.indexOf(F),st=et<0?void 0:N[et+(x.shiftKey?-1:1)],pt=st&&!st.checked?Ts(st):[];pt.some(Nt=>Nt.checked)&&!pt.includes(F)&&(x.preventDefault(),st?.focus({preventScroll:!0}));return}let U=t.trigger();if(U){if(x.shiftKey&&W)x.preventDefault(),U.focus({preventScroll:!0});else if(!x.shiftKey&&X){let et=Vd(U,P);if(!et)return;x.preventDefault(),et.focus()}}}return{bind(x,P={}){let R=!1,N=Dr(x),K=()=>{n={el:x,config:P},o.get().mounted&&(i&&i.el!==x&&ft(),H())};return x.isConnected?K():queueMicrotask(()=>{!R&&x.isConnected&&K()}),()=>{R=!0;let j=t.finalFocus?.()??"trigger";if(N(),n?.el===x&&(n=void 0,i?.el===x)){let A=Tt(),F=o.get().open&&e.movesFocus&&(!A||A===x.ownerDocument.body||Ce(x,A)),W=C;if(ft(),F){let X=p;p=void 0,queueMicrotask(()=>{!n&&!x.isConnected&&zs()&&O(x,W,!0,X,j)})}}}},keydown:bt,triggerKeydown(x){let P=i?.el;x.key!=="Tab"||x.shiftKey||!P||!o.get().open||r()==="flow"&&(x.preventDefault(),(wo(P)[0]??P).focus({preventScroll:!0}))},opening(x,P){h=x,f=P?.type==="pointerdown",g=P?.type==="keydown"},opener:()=>h,observe(x){$=x},requestClose:(x,P)=>t.close(x,{event:P,focus:!0}),returnFocus(x){d=x},initialFocus:E,place:()=>_?.(),checkPlacement:()=>I?.(),updateModal:()=>y?.(),layer:()=>s,element:()=>i?.el,mountedAs:V,backdrop(x){if(!i||i.backdrop===x)return()=>{};let{el:P}=i,R=n?.config.host?.()??P,N=!!n?.config.inline;i.backdrop=x;let K=Q(x,N),j=Tt();if(!N)try{R.hidePopover(),R.showPopover()}catch{}j&&j!==Tt()&&j.focus({preventScroll:!0});let A=s?.keep?.(x);return()=>{A?.(),K(),i?.backdrop===x&&(i.backdrop=void 0),J(x)}}}}function uf(t){if(t!==null)return t==="false"?!1:t==="pointer"||t==="trap-focus"?t:!0}var _0=["escape-key","outside-press","focus-out","window-blur","back","swipe"];function Bn(t){return _0.includes(t)}var z0=new Set(["image-load","image-error","imperative","item-removed","unmount","reset","restore","timeout","resize","page-hide"]),Fe;function Vn(t,e){if(Fe==="agent")return Fe;if(z0.has(t))return"programmatic";if(e){let r=e();return r==="programmatic"&&Fe?Fe:r}return Fe??"programmatic"}function rr(t,e){let r=Fe;Fe=t;try{return e()}finally{Fe=r}}function Rs(t,e,r=!0){if(!r)return{...t,source:e};let o=!1;return{...t,source:e,cancel:()=>{o=!0},get canceled(){return o}}}function Fs(t,e={}){let r=()=>t().dismissible!==!1,o=(n,i)=>t().onDismissAttempt?.({reason:n,event:i});return{allows(n,i){let s=e.refusal?.(n)??(Bn(n)&&!r()?"attempt":void 0);return s?(s==="attempt"&&n!=="focus-out"&&n!=="window-blur"&&(o(n,i),e.refused?.(n)),!1):!0},sheet:{dismissible:r,onDismissAttempt:n=>o("swipe",n)}}}function pe(t,e){let r=[...t.parts()].filter(o=>o.slot===e&&!!o.el?.isConnected);return zr(r).map(({el:o,key:n,props:i})=>({el:o,key:n,props:i}))}ue();var D0=[["button","button"],["a[href]","link"],["input[type=checkbox][switch]","switch"],["input[type=checkbox]","checkbox"],["input[type=radio]","radio"],["input[type=range]","slider"],["dialog","dialog"],["h1, h2, h3, h4, h5, h6","heading"]],I0=new Set(["button","cell","checkbox","columnheader","gridcell","heading","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowheader","switch","tab","treeitem"]);function R0(t){let e=t.getAttribute("role")?.trim().split(/\s+/)[0];return e||(D0.find(([r])=>t.matches(r))?.[1]??"")}function pf(t){if(t.hasAttribute("hidden")||t.getAttribute("aria-hidden")==="true")return!0;let e=t.ownerDocument.defaultView?.getComputedStyle(t);return e?.display==="none"||e?.visibility==="hidden"}function F0(t,e){return t.getRootNode().getElementById?.(e)??null}function hf(t){return(t.getAttribute("aria-labelledby")??"").split(/\s+/).map(e=>e&&F0(t,e)).filter(e=>!!e).map(e=>e.getAttribute("aria-label")??Hn(e,!0)).join(" ")}function mf(t){return t.localName==="img"?t.getAttribute("alt")??"":t.localName!=="svg"?"":[...t.children].find(e=>e.localName==="title")?.textContent??""}function N0(t,e,r){if(t.matches("input, select, textarea"))return"";let o=!e&&hf(t)||t.getAttribute("aria-label")?.trim()||mf(t);if(o)return` ${o} `;if(t.localName==="svg")return"";let n=Hn(t,e,r),i=t.getAttribute("title");return n||(i?` ${i} `:"")}function Hn(t,e=!1,r=pf(t)){let o="";for(let n of t.childNodes)n.nodeType===Node.TEXT_NODE?o+=n.nodeValue:n.nodeType===Node.ELEMENT_NODE&&(r||!pf(n))&&(o+=N0(n,e,r));return o}var B0=t=>t.replace(/\s+/g," ").trim(),Ns=t=>[...t.labels??[]].map(e=>Hn(e)).join(" "),gf=[hf,t=>t.getAttribute("aria-label")??"",Ns,mf,t=>I0.has(R0(t))?Hn(t):"",t=>t.getAttribute("title")??""],Bx=[...gf.filter(t=>t!==Ns),Ns];function V0(t,e){for(let r of e){let o=B0(r(t));if(o)return o}return""}function vf(t){return V0(t,gf)}function Bs(t){let{store:e,preset:r}=t;function o(n,i,s){if(i.disabled)return;let a=of(s);if(!e.get().open)return t.control.show({event:s,by:a,reason:"trigger-press",trigger:n,payload:i.payload});let l=e.get().trigger;if(l!==null&&l!==n)return t.control.takeOver({trigger:n,payload:i.payload,reason:"trigger-press",event:s});if(t.popup.opener()==="hover")return t.control.show({event:s,by:a});t.control.hide({reason:"trigger-press",event:s})}return{press:o,keydown(n,i,s,a){return i.tagName==="BUTTON"||n.key!=="Enter"&&n.key!==" "?!1:(n.preventDefault(),o(s,a,n),!0)},contains:(n,i)=>!!i&&pe(t,t.triggerSlot).some(({el:s,props:a})=>s.contains(n)&&!a.disabled),initialFocus(n,i="auto",s){if(i!=="none")return i==="content"?n:i==="auto"?s?.()??wo(n)[0]??n:typeof i=="function"?i()??n:typeof i=="string"?n.querySelector(i)??n:St&&i instanceof HTMLElement?i:n},contentAttrs:(n,i,s)=>({"aria-labelledby":s?n.titled?`${i}-title`:`${i}-trigger`:void 0,"aria-describedby":n.described?`${i}-description`:void 0,"aria-modal":(s==="dialog"||s==="alertdialog")&&n.modal===!0?"true":void 0,"data-presentation":r.presentation&&n.presentation}),triggerAttrs(n,i,s,a,l){let c=l==="menu"||l==="listbox"?l:l&&"dialog";return{...nf(n,i,c??"",s),"aria-haspopup":c,type:"button",...sf(a)}}}}var H0=t=>t&&vf(t)||void 0;function Vs(t){return{contentAttrs:(e,r)=>({"aria-labelledby":e.titled!==!1?`${r}-title`:void 0,"aria-label":e.titled===!1?H0(t.triggerElement()):void 0,"aria-modal":e.modal===!0?"true":void 0})}}var bf=new Map,Hs={prepare(t,e){let r=`${t}-${e}`,o=bf.get(r)??[`[data-slot="${r}"]`,`[data-slot="${t}-backdrop"]`];bf.set(r,o),$r(()=>lf(o))},bind(t){Is(t.ownerDocument,[`[data-slot="${t.getAttribute("data-slot")}"]`])}};function Ws(t,e){return{opening(r,o,n){let i={trigger:t.get().trigger,payload:t.get().payload};return r!==void 0&&t.set({trigger:r}),e(o,n),()=>t.set(i)},handOver(r,o,n){t.set({trigger:r}),e(o,n)},reopening(r,o){return"payload"in r&&e(r.payload,o)}}}ue();var mp,pp=()=>mp??=Promise.resolve().then(()=>(fp(),dp)),hp=t=>St&&matchMedia(t).matches;function gp(t,e,r,o,n){let i=()=>{let l=r(),c=l==="auto"&&hp("(max-width: 640px) and (pointer: coarse)");return l==="sheet"||c?"sheet":o},s=()=>t.set({presentation:i()}),a=r();return a==="sheet"&&s(),St&&!mp&&(a==="sheet"||a==="auto"&&hp("(pointer: coarse)"))&&(window.requestIdleCallback??setTimeout)(()=>pp().then(l=>l.prepareVariables())),{open:s,resolve:i,bind(l,c){let h=e();if(r()==="auto"&&h.opener()==="initial"&&t.get().open&&queueMicrotask(s),t.get().presentation!=="sheet")return h.bind(l,c);let m,u=!1,f=()=>l.hidden||(l.hidden=!0),g=new MutationObserver(f),d=p=>{g.disconnect(),u||(m=p())};pp().then(({presentSheet:p})=>d(()=>p(l,h,{...n?.sheet,...c})),()=>d(()=>h.bind(l,c))),f(),g.observe(l,{attributeFilter:["hidden"]});let w=Dr(l);return()=>{u=!0,g.disconnect(),w(),m?.()}}}}function Iv(t,e){let r=t.preset.behavior==="dialog";return r&&t.store.set({presentation:"dialog"}),gp(t.store,()=>t.popup,()=>t.rules?.presentation?t.rules.presentation():t.options().presentation,r?"dialog":"popover",e)}var vp={payload:Ws,behavior:"dialog",role:"dialog",dismissal:Fs,modal:!0,presentation:Iv,press:Bs,triggerName:Vs,resetStyles:Hs},bp={payload:Ws,behavior:"dialog",role:"alertdialog",dismissal:Fs,press:Bs,triggerName:Vs,resetStyles:Hs};var la=new WeakMap;function wp(t,e){let r=la.get(t);if(r)return void r.push(e);let o=[e];la.set(t,o),queueMicrotask(()=>{la.delete(t);let n={};for(let i of o)i(n);t.set(n)})}function ca(t,e,{now:r=!1}={}){let o=n=>r?t.set({[e]:n}):wp(t,i=>i[e]=n);return o(!0),()=>o(!1)}function ua(t,e){wp(t,r=>{r[e]===void 0&&t.get()[e]===null&&(r[e]=!1)})}De();te();var yp=new WeakSet;function he(t,e){return Object.is(t,e)?!0:!Array.isArray(t)||!Array.isArray(e)||t.length!==e.length||yp.has(t)||yp.has(e)?!1:t.every((r,o)=>Object.is(r,e[o]))}function xp(t,e){let r=t,o=0,n=0,i,s,a=!1,l,c=new Set,h=new Map,m,u={get(){return l??f()},set(d,w=!1){if(i&&!w&&!a){let b=f();if(b!==r){let S={...b};for(let _ in d)delete S[_];u.set(S,!0)}}let p=[];for(let b in d)he(r[b],d[b])||p.push(b);if(!p.length)return;let v=r;r={...r,...d};let C=p.every(b=>e.includes(b));g(p,v,C,w)},subscribe(d){return c.add(d),()=>{c.delete(d)}},setFanout(d){m=d},follow(d){i=d},view(d,w){let p=l;l=d;try{return w()}finally{l=p}}};function f(){if(!i||a)return r;a=!0;let d;try{d=i(r)}finally{a=!1}if(!d)return r;if(s?.state===r&&s.over===d)return s.result;let w=r;for(let p in d)if(!he(r[p],d[p])){w={...r,...d};break}return s={state:r,over:d,result:w},w}function g(d,w,p,v){p||o++,v||n++;let C=b=>b(p,v,d);c.forEach(C);for(let[b,S]of h)(!d.length||d.some(_=>!Object.hasOwn(b,_)))&&S.forEach(C);m?.(d,w,C)}return ar.set(u,{state:()=>r,renders:()=>o,writes:()=>n,touch:()=>g([],r,!1,!1),skipping:h}),u}var ar=new WeakMap;function Cp(t,e,r){return Rv(ar.get(t).skipping,e,r)}function Rv(t,e,r){let o=t.get(e);return o||t.set(e,o=new Set),o.add(r),()=>{o.delete(r),!o.size&&t.get(e)===o&&t.delete(e)}}var ko=t=>ar.get(t).state();var ci=t=>ar.get(t).renders(),Sp=(t,e)=>{ar.set(t,ar.get(e))},kp=t=>ar.get(t).touch();var lr=t=>t.owner,re=t=>lr(t).slots[t.slot],Eo=(t,e)=>({id:t.id,key:t.key,props:e,api:t.api}),Ep=(t,e=t.props)=>({el:t.el,id:t.id,key:t.key,props:e,store:t.store,api:t.api});function Lp(t){let{parts:e}=t.owner,r=`${t.slot}:${t.key}`;e.has(r)||e.set(r,t),t.leases++;let o=!0;return()=>{if(!o||(o=!1,--t.leases))return;let{owner:n}=t;n.released.length||queueMicrotask(()=>Pp(n)),n.released.push(t)}}function Mp(t){let{owner:e}=t;e.released.length||queueMicrotask(()=>Pp(e)),e.released.push(t)}function Pp(t){for(let e of t.released){let r=`${e.slot}:${e.key}`;!e.leases&&t.parts.get(r)===e&&t.parts.delete(r)}t.released=[]}function Nr(t,e=t.props,r=t.store.get()){let o=re(t),n=Eo(t,e),i=o.attrs?.(r,n),s=o.role,a=typeof s=="function"?s(r,n):s;ct&&(t.slot,lr(t).label,t.id,o.live?.read(r,n),void 0);let{name:l}=lr(t),c={"data-slot":t.slot==="root"?l:`${l}-${t.slot}`,...s===void 0?void 0:{role:a},...i};return s!==void 0&&(c.role=a),Vv(t,c)}var $p=new Set(["aria-label","aria-labelledby","aria-description","title","autocomplete","autocapitalize","autocorrect","spellcheck","inputmode","enterkeyhint"]);var fa=t=>typeof t=="string"&&t.split(/\s+/).every(e=>e.startsWith("ui-sdk-"));function di(t,e=t.props,r=t.store.get()){return re(t).present?.(r,Eo(t,e))??!0}function pa(t){return re(t).present!==void 0}var fi=(t,e=t.props)=>re(t).selects?.selection(t,e)??"";var Fv={};function pi(t,e,r=t.props){let o=re(t).selects,n=[Lp(t),o?o.subscribe(t,e,r):Cp(t.store,Fv,e)];return()=>n.forEach(i=>i())}function Tp(t){let{on:e,press:r}=re(t),o={};for(let n in e){let i=e[n];o[n]=s=>{s.defaultPrevented||Kv(s)||(lr(t).sleeping?.wake(),i(s,Ep(t)))}}return typeof r=="function"&&!o.click&&(o.click=n=>{n.defaultPrevented||(lr(t).sleeping?.wake(),r(Ep(t),n))}),o}function Op(t){t.propsListeners?.forEach(e=>e())}function hi(t,e){let r=t.propsListeners??=new Set;return r.add(e),()=>{r.delete(e)}}var Ap=new WeakMap;function Nv(t){let e=re(t),r=Ap.get(e);return r===void 0&&(r=!!e.attrs&&"hidden"in e.attrs(t.store.get(),Eo(t,t.props)),Ap.set(e,r)),r}function ha(t,e,r={by:"core"}){let o=t,{parts:n}=o.owner,i=`${t.slot}:${t.key}`;if(!t.el&&(n.get(i)??o)===o&&(n.delete(i),n.set(i,o)),ct){Bv(t,t.el,e);let{focus:u}=re(t);typeof u=="function"&&u(t.store.get(),Eo(t,t.props)),t.slot,lr(t).label,t.id}let s={};t.el=e,o.binding=s;let a=[Lp(o)];Nv(t)&&Pn(e.ownerDocument);for(let[u,f]of Object.entries(Tp(t)))(r.by==="core"||r.attaches!=="all"&&!r.attaches.includes(u))&&a.push(ot(e,u,f));let l=re(t);l.live&&a.push(l.live.attach(t,e)),r.by==="framework"&&l.direct&&a.push(l.direct.attach(t,e));let c=l.asleep?.(e,t);c&&a.push(c);let h=()=>{let u=l.bind?.(e,t);u&&a.push(u)},{sleeping:m}=o.owner;return m&&l.bind?(m.binds.add(h),a.push(()=>m.binds.delete(h))):h(),l.attrs&&typeof MutationObserver<"u"&&a.push(Wv(o,e)),()=>{a.forEach(u=>u()),o.binding===s&&(t.el=o.binding=void 0,o.own!==void 0&&da(o))}}function Bv(t,e,r){!t.key||!e||e===r||queueMicrotask(()=>{if(t.el!==r||!e.isConnected||!r.isConnected)return;let{parts:o,label:n}=lr(t);for(let i of o.values())if(i.el===e)return;`${t.slot}${t.key}`,t.id})}var ma=(t,e)=>re(t).connect?.(e)??(()=>{}),ui=["aria-activedescendant","aria-controls","aria-describedby","aria-details","aria-errormessage","aria-flowto","aria-labelledby","aria-owns","for","headers"],_p=t=>re(t).attrs?.(t.store.get(),Eo(t,{...t.props,id:void 0})).id;function Vv(t,e){let{owner:r}=t;if(!r.named?.size||!ui.some(i=>e[i]))return e;let o=Hv(r,t.store);if(!o.size)return e;let n={...e};for(let i of ui){let s=n[i];s&&(n[i]=s.split(" ").map(a=>o.get(a)??a).join(" "))}return n}function Hv(t,e){let r=ci(e);if(t.aliases?.version===r)return t.aliases.map;let o=new Map;for(let n of t.named){let i=_p(n);i!==void 0&&i!==n.own&&o.set(i,n.own)}return t.aliases={version:r,map:o},o}function Wv(t,e){(e.hasAttribute("id")||t.own!==void 0)&&da(t);let r=new MutationObserver(()=>da(t));return r.observe(e,{attributeFilter:["id"]}),()=>r.disconnect()}function da(t){let{owner:e}=t;e.unread||(e.unread=new Set,queueMicrotask(()=>qv(e,t.store))),e.unread.add(t)}function qv(t,e){let r=t.unread;t.unread=void 0;let o=t.renamed===!0;t.renamed=void 0;for(let n of r)o=Uv(n,n.el&&jv(n.el))||o;o&&kp(e)}var jv=t=>t.localName==="form"?t.getAttribute("id"):t.id;function Uv(t,e){let r=_p(t),o=e&&e!==r?e:void 0;if(o===t.own)return!1;let{owner:n}=t;return t.own=o,n.named??=new Set,o===void 0?n.named.delete(t):n.named.add(t),n.aliases=void 0,r!==void 0}function Kv(t){return(t.type==="keydown"||t.type==="keyup")&&Tr(t)}function Yv(t,e,r,o,n){t.press?.keydown(e,r,o,n)||t.focus?.keydown(e)||t.popup.triggerKeydown(e)}function zp(t,e,r,o){let{preset:n,control:i,contentProps:s,triggerElement:a,element:l,popup:c,press:h,rules:m,presentation:u}=e,{placement:f}=n;n.resetStyles?.bind(t);let g=!!s(r).inline;return(u??c).bind(t,{inline:g,anchor:()=>i.anchor()??f?.anchor(t,s().anchor,a),position:f&&!g?()=>f.options(s(r),{side:n.side,align:"center"},l("arrow")):void 0,rendered:o&&(d=>hi(o,d)),initialFocus:h&&(()=>h.initialFocus(c.element(),s().initialFocus,m?.preferredFocus)),backdrop:()=>l("backdrop"),...m?.bind?.()})}function Xv(t,e){return t.get().trigger===null&&t.set({trigger:e}),()=>{t.get().trigger===e&&!t.get().open&&t.set({trigger:null})}}function Dp(t){return t({props:{id:"id",disabled:"boolean",focusableWhenDisabled:"boolean",payload:"value"},state:(e,{key:r,props:o})=>({open:e.open&&(e.trigger===null||e.trigger===r),disabled:!!o.disabled}),attrs:(e,{id:r,key:o,props:n,api:i})=>{let{press:s,focus:a,role:l}=i.internal;return(s??a)?.triggerAttrs(e,r,o,n,l)??{}},on:{pointerenter:(e,{api:r,key:o,props:n})=>!n.disabled&&r.internal.hover?.enter(e,o,n.payload),pointerleave:(e,{api:r})=>r.internal.hover?.leave(e),focusin:(e,{api:r,key:o,props:n})=>!n.disabled&&r.internal.focus?.enter(o,n.payload,e),focusout:(e,{api:r})=>r.internal.focus?.leave(e),keydown:(e,{api:r,el:o,key:n,props:i})=>o&&Yv(r.internal,e,o,n,i)},press:({api:e,key:r,props:o},n)=>e.internal.press?.press(r,o,n),bind(e,{api:r,key:o,id:n,store:i}){return ct&&(r.internal.label,void 0),Xv(i,o)}})}function Ip(t){return t({present:e=>e.presentation==="sheet"})}function Rp(t){return t({attrs:(e,{id:r})=>({id:`${r}-title`}),bind:(e,{store:r})=>ca(r,"titled",{now:!0})})}function Fp(t){return t({attrs:(e,{id:r})=>({id:`${r}-description`}),bind:(e,{store:r})=>ca(r,"described",{now:!0})})}var Lo={},Ao=new Set,Gv=new WeakMap;function Np(t,e,r){let o,n,i=()=>{o?.(),o=void 0,n&&Ao.delete(n),n=void 0};$r(()=>{if(Lo.add)o=Lo.add(t,e,r);else if(typeof document<"u"&&(Ao.add(n=new WeakRef(t)),Gv.set(t,()=>o=Lo.add?.(t,e,r)),Ao.size%1e3===0))for(let s of Ao)s.deref()||Ao.delete(s);return i})}function Vp(t){let e=t.slots(s=>s),r=t.name,o=t.label??r;ct&&void 0;let n=s=>{let a=s,l=s.id,c=xp({...t.state(a),...t.sync?.(a)},t.live??[]),h=[],m=[],u={component:o,id:l},f=ct?(t.controlled??["open","value","checked"]).filter(z=>z in c.get()):[];ct&&void 0;let g=Object.create(ct?Bu(e,u):e),d=new Set;function w(z){d.has(z)||(d.add(z),Object.assign(g,z.slots),M(),z.extend?.(y))}let p={name:r,label:o,slots:g,parts:new Map,released:[]},{parts:v}=p;function C(z={}){return z.id??(z.value==null?"":String(z.value))}let b;function S(z,L={},O=!1){let E=C(L),D=`${z}:${E}`,H=v.get(D);if(!H)v.set(D,H={slot:z,key:E,id:l,get api(){return y},store:c,props:L,el:void 0,owner:p,leases:0}),O&&Mp(H);else if(O)return H;return H.props=L,Op(H),H}function _(z,L){if(L===void 0){for(let E of v.values())if(E.slot===z&&E.el?.isConnected)return E.el;return}let O=v.get(`${z}:${L}`)?.el;return O?.isConnected?O:void 0}let I={id:l,label:o,store:c,options:()=>a,onOptions:z=>m.push(z),onDestroy:z=>h.push(z),parts:()=>v.values(),element:_,props:(z,L="")=>{let O=b?.[z];return O&&C(O)===L?O:v.get(`${z}:${L}`)?.props}},y;function $(){if(y=t.api(I),Zu(I,y),ct)for(let z of t.agent?.actions??[])typeof y[z]!="function"&&(`${z}`,void 0)}function M(){let{sleeping:z}=p;if(z){p.sleeping=void 0,Ku(Z,$);for(let L of[...z.binds])L()}}t.asleep?.(a)?p.sleeping={wake:M,binds:new Set}:$();let V=!1,q=!1,G=!1,Y=(z,L)=>Ju(c,z,t.sync?.(z),L),Z={types:void 0,name:r,id:l,get:c.get,subscribe:c.subscribe,get api(){return M(),y},part:S,use:w,preview(z){let L=Y({...z,id:l},c.get()),O=c.get();for(let E in L)if(!he(O[E],L[E]))return{...O,...L}},view(z,L,O){let E=b;b=O;try{return c.view(z,L)}finally{b=E}},setOptions(z){let L=ko(c),O=z.id===l?z:{...z,id:l},E=ct&&q?Y(O,L):void 0;a=O,ct&&void 0,p.sleeping&&!t.asleep(a)&&M();let D=Y(a,L);if(ct&&E){let Q=Qv(E,D);Q.length&&({...u},void 0)}let H;V=!0;try{for(let J of m)H=J(a,D)??H;let Q=ko(c)===L?D:Y(a,ko(c));Q&&rr(H,()=>c.set(Q,!0))}finally{V=!1}},startState:z=>t.state({...z,id:l}),follow(z){q=!0;let L,O,E=(D=ko(c),H)=>{if(H)return Y({...H,id:l},D);if(G)return O;let Q=z();return(L?.options!==Q||L.state!==D)&&(L={options:Q,state:D},O=Y({...Q,id:l},D)),O};return c.follow(E),ct&&c.subscribe((D,H,Q)=>{V&&!H&&!Hu()&&({...u,keys:[...Q]},void 0)}),E},destroy(){G||(G=!0,Xu(Z),ju(()=>h.forEach(z=>z())),ct&&({...u},void 0))}};return Sp(Z,c),Np(Z,v,t),ct&&({...u},void 0),Z},i=s=>Uu(()=>n(s));return Object.defineProperty(i,"name",{value:r}),Object.assign(i,{options:t.options,slots:e})}function Qv(t,e){let r=t,o=e??{};return[...new Set([...Object.keys(r),...Object.keys(o)])].filter(i=>!he(r[i],o[i]))}var Bp=new WeakMap;function ga(t){let e=Bp.get(t);if(!e){let{options:r,slots:o={}}=t;e={options:{debug:"boolean",...r},slots:Object.fromEntries(Object.entries(o).map(([n,i])=>[n,i.props??{}]))},Bp.set(t,e)}return e}var Mo=t=>ci(t);var eb="Loading",rb=1e3,Up=new WeakSet,ba=t=>(Up.add(t),t),ob=t=>!!t&&typeof t.then=="function"&&!Up.has(t),nb=Symbol("canceled action");function Kp(t,e,r){let o=s=>{r.failed(s)},n=()=>rr(e,r.done),i;try{i=t({source:e})}catch(s){return o(s)}if(i!==nb){if(!ob(i))return n();r.pending(!0),i.then(()=>{r.pending(!1),n()},s=>{r.pending(!1),o(s)})}}function Yp(t,e){let r=()=>{let s=t.options().pendingAnnouncement??eb;Promise.resolve().then(()=>(jp(),qp)).then(({announce:a})=>n&&a(s),()=>{})},o,n=!1,i=t.store.subscribe(()=>{let s=e();s!==n&&(n=s,clearTimeout(o),s&&(o=setTimeout(r,rb)))});t.onDestroy(()=>{n=!1,clearTimeout(o),i()})}ti();ue();var ib=t=>`${t[0].toUpperCase()}${t.slice(1)}`,Xp=(t,e)=>`on${ib(t)}${e}`;function Gp(t,e,r,o,n){ct&&t.options().debug&&console.debug(`[ui-sdk] ${t.label}#${t.id} ${e}: ${String(r)} (${o}, ${n})`)}function Qp(t,e){let{store:r,options:o}=t,n=new Map,i=new Map,s=new Map;return t.onOptions((a,l)=>{if(ct&&void 0,!l)return;let c;for(let[h,m]of n)h in l&&(he(l[h],m.value)&&(c=m.source),n.delete(h));return c}),ct&&t.onDestroy(()=>void 0),(a,l,c)=>{if(s.has(a)&&he(s.get(a),l))return!1;let h=(i.get(a)??0)+1;i.set(a,h);let m=r.get()[a];if(he(m,l))return!1;let{reason:u,event:f}=c,g=Rs(c,c.source??e(u,f));ct&&(t.label,t.id,void 0),Gp(t,a,l,u,g.source);let d=o(),w=d[a]!==void 0,p=s.has(a),v=s.get(a);s.set(a,l);try{rr(g.source,()=>{let C=Xp(a,"Change"),b=d[C];if(typeof b=="function"){let _=ct&&!!f?.defaultPrevented;b(l,g),ct&&(t.label,t.id,void 0)}let S=i.get(a)!==h;!g.canceled&&!w&&!S&&r.set({[a]:l})})}finally{p?s.set(a,v):s.delete(a)}return ct&&(t.label,t.id,g.source,g.canceled,void 0),g.canceled?!1:(Lo.change?.(t.id,a,l,g,m),w&&(n.set(a,{value:l,source:g.source}),ct&&(t.label,t.id,g.source,void 0)),!0)}}function wa(t,e,r,o){let n=o.source??Vn(o.reason);ct&&(t.label,t.id,o.reason,void 0),Gp(t,e,r,o.reason,n)}var Br=(t,e)=>Vn(t,e&&(()=>Dn(e)));function sb(){return zn(),Br}function Zp(t,e=sb()){return Qp(t,e)}function Jp(t,e){return ba(Promise.resolve({reason:t,source:Br(t,e)}))}function th(t){let{popup:e,store:r,rules:o={}}=t,n="imperative",i="trigger-press",s,a,l;e.observe(d=>{let w=d?void 0:a??{reason:n,source:"programmatic"};if(a=void 0,!!w)return s?.resolve(w),s=void 0,w}),t.onDestroy(()=>{s?.resolve({reason:"unmount",source:"programmatic"}),s=void 0});function c(d){if(!s){let w;s={promise:ba(new Promise(v=>w=v)),resolve:w}}if(d&&!d.aborted){let w=()=>e.requestClose("imperative");d.addEventListener("abort",w,{once:!0}),s.promise.then(()=>d.removeEventListener("abort",w))}return s.promise}function h(d={},w){return m(d,w).result}function m(d,w){let{event:p,signal:v}=d;if(v?.aborted)return{opened:!1,result:Jp(n)};let C=d.reason??(p?i:n),b=w??C,S={...d,reason:b,payloadReason:C},_=!1,I=(y=d.by??"imperative")=>{l=d.anchor;let $=t.payload?.opening(d.trigger,d.payload,{reason:C,event:p});return e.opening(y,p),_=t.change(!0,{reason:b,event:p}),_||$?.(),_};return r.get().open?(e.opener()==="hover"&&d.by!=="hover"&&e.opening(d.by??"imperative",p),d.trigger===void 0&&t.payload?.reopening(d,{reason:C})&&d.anchor&&(l=d.anchor),o.reopen?.(S,I),{opened:_,result:c(v)}):(o.open?o.open(S,I):I(),{opened:_,result:_?c(v):Jp(b,p)})}function u(d={}){if(!r.get().open)return!1;let{event:w,returnValue:p}=d,v=d.reason??n;if(t.dismissal&&!t.dismissal.allows(v,w))return!1;let C=!1,b=()=>{a={reason:v,source:Br(v,w),returnValue:p},e.returnFocus(d.focus??t.returnFocus??!0);let S=t.change(!1,{reason:v,event:w,...p!==void 0&&{returnValue:p}});return S||(e.returnFocus(!0),a=void 0),C=S,S};return o.close?o.close({...d,reason:v},b):b(),C}function f({trigger:d,payload:w,anchor:p,reason:v,event:C}){l=p,t.payload?.handOver(d,w,{reason:v,event:C})}let g=(d,w)=>m({reason:n,event:w},d).opened;return{api:{isOpen:()=>r.get().open,setOpen:(d,{reason:w,event:p}={})=>d?g(w,p):u({reason:w,event:p}),open:(d={})=>h({...d,reason:d.reason??n}),close:({reason:d,event:w,returnValue:p}={})=>u({reason:d,event:w,returnValue:p}),toggle:({reason:d,event:w}={})=>r.get().open?u({reason:d,event:w}):g(d,w)},show:h,attempt:m,hide:u,takeOver:f,result:c,anchor:()=>l}}function eh(t,e){let r=t,{store:o,element:n,options:i}=r,{preset:s}=e,a=e.slot??"content",l=e.trigger??"trigger",c=Zp(r),h=L=>L!==void 0&&r.props(a,L)||pe(r,a)[0]?.props||r.props(a)||{},m=()=>{if(p?.trigger)return p.trigger();let L=o.get().trigger;return L!==null&&n(l,L)||n(l)},u=null,f,g=()=>{let L=o.get().trigger;if(p?.trigger||L===null||L===u)return m();let O=f??pe(r,l).length<=1;return n(l,L)??(O?n(l):void 0)},d=o.get().open;o.subscribe(()=>{let{open:L,trigger:O}=o.get();L!==d&&(d=L,L&&(u=O!==null&&!n(l,O)?O:null,f=pe(r,l).length<=1))});let w={label:r.label,role:e.role??s.role,store:o,options:i,onOptions:r.onOptions,onDestroy:r.onDestroy,element:n,parts:r.parts,preset:s,get popup(){return q},get control(){return G},triggerElement:m,triggerSlot:l,triggerDisabled:L=>!!r.props(l,L)?.disabled,contentProps:h},p=w.rules=e.rules?.(w),v=s.dismissal?.(i,p),C=s.presentation?.(w,v),b=s.press?.(w),S=s.group?.(w),_=s.hover?.(w,S),I=s.focus?.(w),y=s.triggerName?.(w);s.resetStyles?.prepare(r.label,a),s.placement?.prepare();function $(L,O){if(s.modal!==void 0)return{modal:L.modal??(O.presentation==="sheet"?!0:s.modal)}}function M(){let L=$(i(),o.get());L&&o.set(L)}function V(L,O){p?.dismiss?p.dismiss(L,O):G.hide({reason:L,...O})}let q=cf({...e.behavior,preset:s.behavior,position:s.placement?.position,owner:{component:r.label,id:r.id},store:o,trigger:m,returnTrigger:g,contains:(L,O)=>p?.contains?p.contains(L,O):!!m()?.contains(L)||!!b?.contains(L,O),close:V,modal:()=>p?.modal?.()??rf(o.get().modal),parent:()=>p?.parent?.(),persistent:()=>p?.persistent?.()??[],finalFocus:()=>h().finalFocus,onEscape:L=>p?.onEscape?p.onEscape(L):V("escape-key",{event:L,focus:!0}),onShow:L=>p?.onShow?.(L),onOpenChange(L,O){if(p?.onOpenChange?.(L,O),S?.change(L),L){C?.open(),M();return}_?.clear(),I?.clear()},onOpenChangeComplete(L,O){p?.onOpenChangeComplete?.(L,O),i().onOpenChangeComplete?.(L)}}),G=th({dismissal:v,popup:q,store:o,payload:s.payload?.(o,(L,O)=>c("payload",L,O)),change:(L,O)=>c("open",L,{...O,...p?.details?.()}),onDestroy:r.onDestroy,get returnFocus(){return p?.returnFocus},rules:{open(L,O){_?.clear(),S?.opening(L.event),p?.open?p.open(L,O):O()},reopen(L){if(_?.clear(),p?.reopen)return p.reopen(L);let{trigger:O,payload:E,payloadReason:D,event:H}=L;O!==void 0&&O!==o.get().trigger&&G.takeOver({trigger:O,payload:E,reason:D,event:H})},close:(L,O)=>p?.close?p.close(L,O):O()}});M(),Cn(r,["modal"],(L,O,E)=>$(E,{...O,...L}));let Y=o.get().modal;o.subscribe(()=>{let{modal:L}=o.get();L!==Y&&(Y=L,q.updateModal())});let Z={dismissal:v,presentation:C,press:b,group:S,hover:_,focus:I,triggerName:y,rules:p};return{...{...G.api,getPayload:()=>o.get().payload,focus:()=>m()?.focus()},internal:Object.assign(w,Z)}}ue();te();function rh(t,e,r=()=>!1,o=()=>!1){if(!t)return 0;let n=typeof t=="function"?t():t;if(!n||!n.isConnected)return null;if(r(n))return 1/0;let i=e(n);return i?i.order??0:o(n)?null:0}function oh(t,e){return t===null?!1:e===void 0||t>=e}function nh(t){if(!t||!t.tagName)return!1;let e=t;if(e.isContentEditable||e.tagName==="TEXTAREA"||e.tagName==="SELECT")return!0;if(e.tagName!=="INPUT")return!1;let r=e.type;return!/^(button|checkbox|radio|submit|reset|range|color|file|image)$/.test(r)}var Po=t=>(typeof t.keys=="function"?t.keys():t.keys)||void 0;function ih(t){return _e(t,!0).split("+").sort().join("+")}function sh(){let t=[],e=new Set,r=0,o;function n(){return _r().filter(l=>l.blocking).at(-1)?.order}function i(l,c){let{scope:h,when:m,layer:u}=l.options;if(h!==void 0&&!e.has(h)||m&&!m())return null;let f=rh(u,er,ws,Rd);return oh(f,c)?f:null}function s(l){if(l.defaultPrevented||Tr(l))return;let c,h,m=de();for(let u of t){let f=Po(u);if(!f||l.repeat&&!u.options.repeat||!ed(l,f,m)||(c??={typing:nh(l.composedPath()[0]),blocking:n()},c.typing&&!u.options.allowInInput&&!rd(f)))continue;let g=i(u,c.blocking);g!==null&&(!h||g>h.order||g===h.order&&u.id>h.entry.id)&&(h={entry:u,order:g})}h&&(l.preventDefault(),h.entry.handler(l))}function a(){o||!St||(o=ot(document,"keydown",s))}return{register(l,c,h={}){let m=typeof l=="string"?ih(l):void 0;ct&&m!==void 0&&!h.when&&t.some(g=>typeof g.keys=="string"&&ih(g.keys)===m&&g.options.scope===h.scope&&g.options.layer===h.layer&&!g.options.when)&&(`${l}`,void 0);let f={keys:l,handler:c,options:h,id:r++};return t.push(f),a(),()=>{let g=t.indexOf(f);g!==-1&&t.splice(g,1),t.length||(o?.(),o=void 0)}},list(){let l=St?n():void 0,c=de();return t.filter(h=>!!Po(h)&&i(h,l)!==null).map(h=>({keys:Po(h),hint:Ln(Po(h),c),ariaKeyshortcuts:_e(Po(h),c),description:h.options.description,scope:h.options.scope}))},setScope(l,c){c?e.add(l):e.delete(l)},isScopeActive:l=>e.has(l),destroy(){t.length=0,e.clear(),o?.(),o=void 0}}}var ya=globalThis[Symbol.for("ui-sdk.shortcuts@1")]??=sh();function ah(t,e){return t?Ln(t,e):""}function xa(t){queueMicrotask(()=>t.get().apple!==de()&&t.set({apple:de()}))}function lh(t,e,r,o){let n,i,s=()=>{let l=t()||void 0;l!==n&&(i?.(),n=l,i=l?ya.register(l,e,r):void 0)};s();let a=o(s);return()=>{a(),i?.()}}function ch(t,e,r,{beside:o=!1}={}){return pe(t,e).find(i=>i.el.contains(r)||o&&!!r.parentElement?.contains(i.el))?.props?.shortcut}function uh(t,e){return t({props:{shortcut:"string"},state:(r,{props:o,api:n})=>({text:ah(o.shortcut??e(r,n),r.apple)}),attrs:()=>({"aria-hidden":"true",translate:"no"}),bind(r,{store:o,api:n,props:i}){if(xa(o),r.childNodes.length)return;let s=()=>{let l=o.get();r.textContent=ah(i.shortcut??e(l,n,r),l.apple)};s();let a=o.subscribe(s);return()=>{a(),r.textContent=""}}})}var Ca=new WeakMap,dh=['[data-slot="dialog-content"]','[data-slot="alert-dialog-content"]','[data-slot="drawer-content"]'].join(","),ab=["imperative","action","parent-close"];function lb(t,e){let r=Bn(t);if(e.pending&&!ab.includes(t)||r&&(!e.dismissible||t==="outside-press"&&!e.outsidePress))return r&&!(t==="outside-press"&&e.beside)?"attempt":"silent"}function cb(t){return!t||!St?[]:typeof t=="function"?t():t.flatMap(e=>typeof e=="string"?Array.from(document.querySelectorAll(e)):[e])}function ub(t,e,r={}){let{store:o,element:n}=t,i=t.options;Yp(t,()=>o.get().pending!==null);let s=()=>o.get().modal,a=0,l=()=>!e&&(i().closeOnOutsidePress??s()!==!1),c,h=new Set;function m(){let p=h.size?Math.max(...[...h].map(v=>v.stack()+1)):0;p!==o.get().stack&&(o.set({stack:p}),c?.add(u))}let u={close:p=>g.hide({reason:p}),stack:()=>o.get().stack,add(p){h.add(p),m()},remove(p){h.delete(p),m()}},f=eh(t,{preset:r.preset??bp,role:e?"alertdialog":"dialog",rules:p=>({persistent:()=>cb(i().persistentElements),onEscape(v){s()===!1&&!p.popup.element()?.contains(Tt())||p.control.hide({reason:"escape-key",event:v})},onShow(v){Ca.set(v,u),c=void 0;for(let b=v.parent;b&&!c;b=b.parent)c=Ca.get(b);c?.add(u),o.set({nested:!!c});let C=r.onShow?.(v);return()=>{C?.(),Ca.delete(v)}},onOpenChange(v){if(r.onOpenChange?.(v),v){if(St){let C=p.triggerElement()?.ownerDocument??document;s()===!0&&xd(C),Tf(C.defaultView)}return}a++,o.set({pending:null});for(let C of[...h])C.close("parent-close");c?.remove(u),c=void 0},open(v,C){o.set({errors:{}}),C()},refusal:v=>lb(v,{dismissible:i().dismissible!==!1,outsidePress:l(),pending:o.get().pending!==null,beside:s()!==!0&&!e}),refused:v=>r.onRefuse?.(v),dismiss(v,C){r.intercept?.(v,C.event)||p.control.hide({reason:v,...C})},preferredFocus(){let C=p.popup.element()?.querySelector("[autofocus], [data-autofocus]");if(C&&Ir(C))return C;if(e)return pe(t,"close").find(({el:b})=>Ir(b))?.el},bind:r.bind})}),{control:g}=f.internal;function d(p,v,C){if(!o.get().open||o.get().pending!==null)return;let b=v.action;if(!b)return g.hide({reason:"close-press",event:C,returnValue:v.value});let{[p]:S,..._}=o.get().errors;o.set({errors:_});let I=Br("action",C),y=!1,$=a;Kp(M=>b(C,M),I,{pending(M){$===a&&(y=!0,o.set({pending:M?p:null}),wa(t,"pending",M,{reason:"action",source:I}))},done(){$===a&&g.hide({reason:"action",event:y?void 0:C,returnValue:v.value})},failed:M=>{$===a&&(o.set({errors:{...o.get().errors,[p]:M}}),wa(t,"error",M,{reason:"action",source:I}))}})}function w(p,v){let C=t.props("trigger",p)??{};if(!C.disabled){if(o.get().open)return g.hide({reason:"shortcut",event:v});g.show({event:v,by:"keyboard",reason:"shortcut",trigger:p,payload:C.payload})}}return{...f,internal:Object.assign(f.internal,{options:i,show:g.show,hide:g.hide,takeOver:g.takeOver,alert:e,initialFocus:()=>{let{press:p,popup:v,contentProps:C,rules:b}=f.internal;return p.initialFocus(v.element(),C().initialFocus,b?.preferredFocus)},closePress:d,shortcutPress:w,shortcutOf:p=>ch(t,"trigger",p,{beside:!0}),backdropElement:()=>n("backdrop")})}}var fh=ub;ti();function ph(t,{name:e}){let r=Dp(t);return{trigger:t({props:{id:"id",disabled:"boolean",focusableWhenDisabled:"boolean",payload:"value",shortcut:"string"},state:r.state,attrs:(o,n)=>({...r.attrs(o,n),...o.modal===!0&&{"aria-expanded":void 0},"aria-keyshortcuts":n.props.shortcut?_e(n.props.shortcut,o.apple):void 0}),on:r.on,press:r.press,bind(o,n){let{key:i,store:s,api:a}=n,l=r.bind(o,n);xa(s);let c=lh(()=>n.props.shortcut,h=>a.internal.shortcutPress(i,h),{layer:o},h=>hi(n,h));return()=>{c(),l?.()}}}),backdrop:t({state:o=>({open:o.open,nested:o.nested,nestedOpen:o.stack>0}),present:(o,{api:n})=>o.mounted||!!n.internal.contentProps().keepMounted,role:"presentation",attrs:o=>({hidden:o.mounted?void 0:"",...ho(o.open),"data-nested":o.nested?"":void 0,"data-nested-open":o.stack>0?"":void 0}),bind(o,{api:n}){return n.internal.preset.resetStyles?.bind(o),n.internal.popup.backdrop(o)}}),content:t({props:{container:"value",initialFocus:"string",finalFocus:"string",keepMounted:"boolean",inline:"boolean"},connect:Dr,role:(o,{api:n})=>n.internal.role,roles:["dialog","alertdialog"],state:o=>({open:o.open,modal:o.modal,nested:o.nested,nestedOpen:o.stack>0,stack:o.stack,payload:o.payload,pending:o.pending!==null,presentation:o.presentation}),present:(o,{props:n})=>o.mounted||!!n.keepMounted,attrs:(o,{id:n,api:i})=>({...af(o,n),...i.internal.triggerName?.contentAttrs(o,n),"aria-describedby":o.described?`${n}-description`:void 0,"data-nested":o.nested?"":void 0,"data-nested-open":o.stack>0?"":void 0,"data-presentation":i.internal.presentation&&o.presentation}),on:{keydown(o,{api:n,el:i}){Fd(i,o,dh)&&n.internal.popup.keydown(o)}},bind(o,{api:n,store:i,id:s,key:a}){let l=()=>o.style.setProperty("--dialog-stack",String(i.get().stack));l();let c=i.subscribe(l);ct&&o.parentElement?.closest("form")&&void 0;let h=zp(o,n.internal,a);ua(i,"titled");let m=i.get().presentation==="sheet"?void 0:Jn(o);return()=>{c(),m?.(),h(),o.style.removeProperty("--dialog-stack")}}}),title:Rp(t),description:Fp(t),close:t({props:{id:"id",value:"string",action:"action"},state:(o,{key:n})=>({pending:o.pending===n,error:o.errors[n]}),attrs:(o,{key:n})=>({type:"button","data-pending":o.pending===n?"":void 0,"aria-busy":o.pending===n?"true":void 0,"aria-disabled":o.pending===n?"true":void 0}),press:({api:o,key:n,props:i},s)=>o.internal.closePress(n,i,s)}),shortcut:uh(t,(o,n,i)=>i&&n.internal.shortcutOf(i))}}function hh(t,e,r,o){return Vp({name:t,options:{container:"value",open:"boolean",defaultOpen:"boolean",onOpenChangeComplete:"callback",dismissible:"boolean",onDismissAttempt:"callback",persistentElements:"list",pendingAnnouncement:"string",...r},state:n=>({open:n.defaultOpen??!1,mounted:n.open??n.defaultOpen??!1,titled:null,described:!1,trigger:null,payload:void 0,modal:!0,nested:!1,stack:0,pending:null,errors:{},apple:bs(),presentation:"dialog"}),sync:n=>({...n.open!==void 0&&{open:n.open},modal:e?!0:n.modal??!0}),api:n=>fh(n,e,o?.rules(n.store,n.options)),slots:n=>({...ph(n,{name:t}),...o?.slots(n)}),agent:{actions:["setOpen"]}})}var db={rules(){let t;return{preset:vp,bind:()=>({onSheet:e=>t=e}),onRefuse:()=>t?.nudge()}},slots:t=>({viewport:Ip(t)})},fb=hh("dialog",!1,{onOpenChange:"callback",onPayloadChange:"callback",modal:uf,closeOnOutsidePress:"boolean",presentation:"string",controller:"value"},db),mh=fb;var Sa=new Set;function ka(t,e){if(Sa.has(t))return e();Sa.add(t);try{e()}finally{Sa.delete(t)}}var pb=new WeakMap,gi=new WeakMap;function gh(t,e){return gi.set(t,e),()=>{gi.get(t)===e&&gi.delete(t)}}function hb(t){let e=gi.get(t);e?e():t.focus()}var Ea=new WeakSet;function vh(t,e){let r=e??t.ownerDocument;Ea.has(r)||(Ea.add(r),setTimeout(()=>Ea.delete(r)),hb(t))}function Aa(t,e,r){pb.set(t,{internals:e,bind:r})}var mb=new Set;function $o(t){mb.forEach(e=>e(t))}var gb=new WeakMap;var La=t=>gb.get(t)?.();var vb=0;function bh(t){let e=[],r=t.closest("label");return r?.control===t&&e.push(r),t.id&&t.getRootNode().querySelectorAll(`label[for="${CSS.escape(t.id)}"]`).forEach(n=>{n!==r&&n.control===t&&e.push(n)}),e.sort($s)}function wh(t,e,r=t){let o,n=()=>{let i=t.getAttribute("aria-labelledby");if(t.hasAttribute("aria-label")||i!==null&&i!==o)return;let s=e();for(let l of s)l.id||(l.id=`ui-sdk-label-${++vb}`);let a=s.map(l=>l.id).join(" ");if(!a){o!==void 0&&t.removeAttribute("aria-labelledby"),o=void 0;return}o=a,i!==a&&t.setAttribute("aria-labelledby",a)};return queueMicrotask(n),r.addEventListener("focusin",n),()=>r.removeEventListener("focusin",n)}var Ma=new WeakMap,Vr=new WeakMap,vi;function Pa(t,e,r="render"){xh(t,e,r,!1)}function $a(t,e){xh(t,{},e,!0)}function To(t,e){if(t!==vi){for(let r of Object.values(Ma.get(t)??{}))r.delete(e);for(let r of Object.values(Vr.get(t)??{}))r.delete(e)}}function xh(t,e,r,o){let n=vi;vi=t;try{bb(t,e,r,o)}finally{vi=n}}function bb(t,e,r,o){let n=Ma.get(t)??{},i=n[r]??new Map,s=new Map,a=e.style===void 0?[]:Cb(e.style);for(let[u,f]of a)s.set(`style:${u}`,f);for(let[u,f]of Object.entries(e))f!==void 0&&u!=="style"&&s.set(u,f);let l=s.has("id")||i.has("id")?t.getAttribute("id"):null,c=yb(l,n,r);c&&s.delete("id");let h=new Set,m=new Map;for(let u of new Set([...s.keys(),...i.keys()])){if(!$p.has(u))continue;let f=t.getAttribute(u);m.set(u,f),!(f===null||f===s.get(u)||u==="aria-labelledby"&&fa(f))&&(Object.values(n).some(g=>g.get(u)===f)||h.add(u))}for(let u of h)s.delete(u);for(let u of i.keys()){if(s.has(u)||h.has(u)||u==="id"&&c)continue;if(u.startsWith("style:")){t.style.removeProperty(u.slice(6));continue}if(!o){t.removeAttribute(u),yh(t,r,u,null);continue}let f=t.getAttribute(u);if(f!==i.get(u))continue;let g=Vr.get(t)?.[r]?.get(u);g===void 0?t.removeAttribute(u):f!==g&&t.setAttribute(u,g)}for(let[u,f]of a)t.style.getPropertyValue(u)!==f&&t.style.setProperty(u,f);for(let[u,f]of Object.entries(e)){if(f===void 0||!s.has(u))continue;let g=u==="id"?l:m.has(u)?m.get(u):t.getAttribute(u);g!==(i.get(u)??null)&&yh(t,r,u,g),g!==f&&(u==="value"&&xb(t)&&t.value!==f&&(t.value=f),t.setAttribute(u,f))}n[r]=s,Ma.set(t,n),o&&delete Vr.get(t)?.[r]}function yh(t,e,r,o){let n=o==null||r==="id"?void 0:ui.includes(r)?wb(o):o;if(n===void 0)return void Vr.get(t)?.[e]?.delete(r);let i=Vr.get(t);i||Vr.set(t,i={}),(i[e]??=new Map).set(r,n)}var wb=t=>t.split(/\s+/).filter(e=>e&&!e.startsWith("ui-sdk-")).join(" ")||void 0;function yb(t,e,r){return t===null||t===e[r]?.get("id")?!1:!t.startsWith("ui-sdk-")||Object.values(e).some(o=>o.get("id")===t)}var xb=t=>t.localName==="textarea"||t.localName==="input"&&t.type!=="file";function Cb(t){let e=[];for(let r of t.split(";")){let o=r.indexOf(":");o>0&&e.push([r.slice(0,o).trim(),r.slice(o+1).trim()])}return e}var Ta=new WeakMap,Ch=new WeakMap;function Hr(t,e,...r){e==="customValidity"&&Ch.set(t,r[0]);let o=Ta.get(t)?.[e];return o?.(...r),!!o}function Oa(t,e,r){let o="",n=()=>{let c=r.value();if(c instanceof FormData)e.setFormValue(c,r.state());else if(Array.isArray(c)){let f=new FormData,g=r.name?.();if(g)for(let d of c)f.append(g,d);e.setFormValue(f,r.state())}else e.setFormValue(c,r.state());let h=r.valueMissing(),m=Ch.get(t),u=r.invalid?.();m?e.setValidity({customError:!0},m,r.anchor?.()??t):u?e.setValidity(u.flags,u.message,u.anchor??r.anchor?.()??t):h?e.setValidity({valueMissing:!0},r.message(),r.anchor?.()??t):e.setValidity({}),(u?.message??"")!==o&&(o=u?.message??"",$o(t))};n();let i=r.subscribe(n),s=r.focus?gh(t,r.focus):()=>{};t.matches(":disabled")&&r.disabled(!0),Ta.set(t,{reset:()=>{r.reset(),n()},disabled:c=>r.disabled(c),restore:c=>{typeof c=="string"&&r.restore(c)},customValidity:n});let a=wh(t,()=>bh(t)),l=()=>{r.focus&&vh(t,e.form)};return t.addEventListener("invalid",l),()=>{t.removeEventListener("invalid",l),i(),a(),Ta.delete(t),s()}}De();function Sh(){let t=[],e=!0;return{waitUntil:n=>{if(!e)throw new DOMException("waitUntil() can only be called while the event dispatches.","InvalidStateError");t.push(n)},done:()=>(e=!1,t)}}var _a=new WeakMap,Th=0,kh=new Set;function Oh(t){return typeof customElements>"u"||kh.has(t)?!1:customElements.get(t)?(`${t}`,!1):(kh.add(t),!0)}function Ra(t){return _a.has(t)||_a.set(t,`auto-${++Th}`),_a.get(t)}function dr(t){return t.querySelector(":scope > button, :scope > a, :scope > ui-button > button, :scope > ui-button > a")??t.firstElementChild}function cr(t,e){return e?e(t):t.hasAttribute("as-child")?t.firstElementChild:t}var _h=(t,e)=>t.id!==e.id||t.value!==e.value,Si=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),xi=["role","aria-disabled"];function zh(t,e){if(e!==null){if(typeof t=="function")return t(e);if(t==="boolean")return e!=="false";if(t==="number"){let r=Number(e);return e.trim()===""||Number.isNaN(r)?void 0:r}return t==="list"?e.split(",").map(r=>r.trim()).filter(Boolean):e}}var Sb=new Set(["disabled","required"]);function ja(t,e,r){let o=t.getAttribute(Si(e));return r==="boolean"&&Sb.has(e)?o===null?void 0:!0:zh(r,o)}function Dh(t,e){let r={};for(let[o,n]of Object.entries(e)){let i=ja(t,o,n);i!==void 0&&(r[o]=i)}return r}var Eh=(t,e)=>typeof e=="function"?e(t):e;function Ih(t,e,r={}){for(let[o,n]of Object.entries(e)){if(o in t)continue;let i=Si(o);Object.defineProperty(t,o,{configurable:!0,get(){return ja(this,o,n)??Eh(this,r[o])??(n==="boolean"?!1:void 0)},set(s){let a=s===!1&&n==="boolean"&&!Eh(this,r[o]);s==null||a?this.removeAttribute(i):this.setAttribute(i,s===!0?"":Array.isArray(s)?s.join(","):String(s))}})}}function Rh(t,e){for(let r of e){if(!Object.prototype.hasOwnProperty.call(t,r))continue;let o=t[r];delete t[r],t[r]=o}}var Be=new Set;function Fh(t,e,r){Be.add(t);try{return Hr(t,"restore",e,r)}finally{Be.delete(t)}}var ur=new Map;function Fa(t){for(let e of ur.keys())e.contains(t)&&ur.delete(e)}function Nh(t,e,r){let o={};ur.set(t,o),queueMicrotask(()=>{ur.get(t)===o&&(ur.delete(t),Fh(t,e,r))})}function kb(t){let e=Wr.get(t);if(Be.has(t)||e&&Be.has(e))return!0;for(let r of Be)if(t.contains(r))return!0;return!1}function Eb(t,e){return e===void 0&&!!t&&typeof t=="object"&&"reason"in t&&!(typeof Event<"u"&&t instanceof Event)}function Na(t,e,r=[],o=[],n={}){return new Proxy(e,{get(i,s){if(s in i||typeof s!="string"||!/^on[A-Z]/.test(s))return i[s];if(!r.includes(s))return(a,l)=>{if(kb(t))return;let c=Eb(a,l),{cancel:h,canceled:m,...u}=(c?a:l)??{},f=c?u:{...u,value:a},g=o.includes(s)?Sh():void 0;g&&(f.waitUntil=g.waitUntil);let d=new CustomEvent(n[s]??s.slice(2).toLowerCase(),{detail:f,bubbles:!1,cancelable:typeof h=="function"||typeof a?.preventDefault=="function",composed:!0}),w=t.dispatchEvent(d),p=g?.done()??[];return w||(typeof h=="function"?h():a&&typeof a.preventDefault=="function"&&a.preventDefault()),p.length>1?Promise.all(p).then(v=>v.at(-1)):p[0]}}})}var wi=new WeakMap;function Ab(t){return t?wi.get(t):void 0}var Lb=/^(?:get|is|can)[A-Z]|^focus$/;function Mb(t,e,r){let o={};for(let n of r){let i=e[n];typeof i=="function"&&(o[n]=(...s)=>(Lb.test(n)||Fa(t),i.apply(e,s)))}return Object.freeze(o)}var Bh=new Map,Vh=new Set,za;function Hh(){if(za)return za;let t=globalThis,e=Symbol.for("ui-sdk.web-styles@1");return t[e]=(t[e]??0)+1,za=`ui-sdk-web-${t[e]}`}var Ci="",Ba=0,Ah=new WeakMap;function Wh(t,e,r=!1){r&&Vh.add(t),!(!e&&!r)&&(e&&Bh.set(t,e),Ci=qh(),ee(document,Hh(),Ci),Ba++)}function qh(){return["@layer ui-sdk {",'  :where([data-slot][hidden]:not([hidden="until-found"])) { display: none !important }',...[...Bh].map(([t,e])=>`  :where(${t}:not([hidden]), ${t}[hidden="until-found"]) { display: ${e} }`),...[...Vh].map(t=>`  :where(${t}[align]) { text-align: inherit }`),"  :where([as-child]) { display: contents }","}"].join(`
`)}function Va(t){let e=t.getRootNode();if(!Pb(e))return Tb(t.ownerDocument);let r=$b(e.ownerDocument);!r||e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[r,...e.adoptedStyleSheets])}var Pb=t=>t.nodeType===11&&"host"in t;function $b(t){let e=t.defaultView;if(!e)return;let r=Ah.get(t);return r||Ah.set(t,r={sheet:new e.CSSStyleSheet,version:-1}),r.version!==Ba&&(r.sheet.replaceSync(qh()),r.version=Ba),r.sheet}function Tb(t){Ci&&ee(t,Hh(),Ci)}var Ha=new Set;function Lh(t){for(let e of Ha)e!==t&&t.contains(e)&&e.reconfigure()}var Wa=new WeakMap;var Wr=new WeakMap,Oo=new WeakMap;function Ob(t,e){for(let r=t.el;r&&r!==e;r=r.parentElement){let o=Oo.get(r);if(o===t)return;if(o?.el===t.el&&_o.has(o))return o}}function _b(t){t.dataSlot=void 0;let e=[];for(let r=t.el;r;r=r.parentElement){let o=Oo.get(r);o&&o!==t&&o.el===t.el&&_o.has(o)&&e.push(o)}if(e.length){t.el.removeAttribute("data-slot"),To(t.el,"data-slot");for(let r of e)r.sync?.()}}var _o=new WeakSet,jh=new WeakMap,Uh=t=>t.value!==void 0&&typeof t.value!="string";function zb(t,e,r){for(let o=t.parentElement;o;o=o.parentElement){let n=Oo.get(o);if(!(n?.slot!==e||Wr.get(o)!==r))return n.keyed&&Uh(n.props)?{...n.props,value:n.props.id}:n.props}}function bi(t,e){let r=t.getAttribute("for");if(r){let o=t.getRootNode(),n="getElementById"in o?o.getElementById(r):null;if(n?.matches(e))return n}for(let o=t.parentElement;o;o=o.parentElement){if(o.matches(e))return o;let n=Wr.get(o);if(n?.matches(e))return n}}function Kh(t,e){queueMicrotask(()=>{t.isConnected||e()})}var Yh=new WeakMap,Db=(t,e,r)=>(Yh.set(t,r.state),Oa(t,e,r));function Xh(t){return class extends t{static formAssociated=!0;#e;constructor(){super(),this.#e=this.attachInternals(),Aa(this,this.#e,Db)}get form(){return this.#e.form}get labels(){return this.#e.labels}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get validity(){return this.#e.validity}get validationMessage(){return this.#e.validationMessage}get willValidate(){return this.#e.willValidate}checkValidity(){return this.#e.checkValidity()}reportValidity(){return this.#e.reportValidity()}setCustomValidity(e){Hr(this,"customValidity",e)||this.#e.setValidity(e?{customError:!0}:{},e)}formResetCallback(){ur.delete(this),Hr(this,"reset")}formDisabledCallback(e){Hr(this,"disabled",e)}formStateRestoreCallback(e,r){ur.delete(this),Fh(this,e,r)||Nh(this,e,r)}}}var Da=t=>`default${t[0].toUpperCase()}${t.slice(1)}`;function Ib(t,e,r){if(!Oh(t))return;Wh(t,r.display);let o={debug:"boolean",...r.attributes},n=r.state??{},i=(s,a,l)=>{let c=Dh(s,o);for(let h of l)delete c[h];for(let[h,m]of Object.entries(a))m!==void 0&&(c[h]=m);for(let h of Object.keys(n)){if(!(h in c))continue;let m=Da(h);m in c||(c[m]=c[h]),delete c[h]}return{...c,...r.options?.(s)}};customElements.define(t,class yi extends(r.formAssociated?Xh(HTMLElement):HTMLElement){static observedAttributes=[...Object.keys(o).map(Si),...xi];#e;get#t(){return wi.get(this)}get api(){if(this.#t)return this.#e??=Mb(this,this.#t.api,r.api??[])}#o=new Set;#r=new Set;#n=!1;#a=!1;#l=new Set;#v=new Set;#y=new Set;#u=!1;#d={};#f={};#b;static{for(let[a,{get:l,set:c}]of Object.entries(n))Object.defineProperty(yi.prototype,a,{get(){return a in this.#f?this.#f[a]:this.#t?l(this.#t.api):void 0},set(h){Fa(this),this.#t&&!this.#u?this.#x(()=>c(this.#t.api,h)):this.#f[a]=h}});for(let a of r.properties??[])Object.defineProperty(yi.prototype,a,{get(){return this.#d[a]},set(l){Object.is(this.#d[a],l)||(this.#d[a]=l,this.#n&&(this.#i(),this.#C()))}});Ih(yi.prototype,o,r.defaults)}#i(a){this.#t?.setOptions(Na(this,{...i(this,this.#d,this.#l),...a,id:this.#t.id},r.silent,r.actions,r.events))}attributeChangedCallback(a,l,c){if(To(this,a),xi.includes(a))return;let h=a.replace(/-(\w)/g,(f,g)=>g.toUpperCase());if(h in n&&c!==l&&!this.#a&&Fa(this),!this.#a||c===null?this.#l.delete(h):l===null&&this.#l.add(h),!this.#n||(this.#i(),Lh(this),!(h in n)||c===l))return;let m=o[h],u=m==="boolean"?!1:m==="list"?[]:null;this.#x(()=>n[h].set(this.#t.api,c===null?u:zh(m,c)))}#x(a){let l=Be.has(this);Be.add(this);try{ka(this,a)}finally{l||(Be.delete(this),$o(this))}}connectedCallback(){if(Va(this),this.#n){for(let m of this.#o)La(m.el);r.options&&this.#i();return}Rh(this,[...Object.keys(n),...r.properties??[],...Object.keys(o)]);for(let[m,u]of Object.entries(r.host??{}))this.hasAttribute(m)||this.setAttribute(m,u);let a=this.#u&&!Object.keys(this.#f).length?this.#b:void 0,l={};if(this.#u&&a===void 0)for(let[m,{get:u}]of Object.entries(n))l[m]=u(this.#t.api);Object.assign(l,this.#f),this.#f={};let c=Object.fromEntries(Object.entries(l).map(([m,u])=>[Da(m),u]));this.#u&&(wi.delete(this),this.#e=void 0,this.#u=!1,this.#b=void 0);let h=this.#t;if(h?this.#i():(h=e(Na(this,{...i(this,this.#d,this.#l),...c,id:this.id||`ui-sdk-${t.replace(/^ui-/,"")}-${++Th}`},r.silent,r.actions,r.events)),wi.set(this,h)),r.formAssociated&&Object.keys(l).length){let m=h.startState(i(this,this.#d,this.#l));this.#i(Object.fromEntries(Object.keys(l).map(u=>[Da(u),m[u]])))}if(this.#n=!0,r.options&&Ha.add(this),r.self){let m=cr(this,r.target);m?this.#S(m):(`${t}`,void 0)}for(let[m,u]of Object.entries(r.children??{})){let f=u(this);f?this.#k(m,f):r.optionalChildren?.includes(m)||(`${t}${m}`,void 0)}if((r.children||r.target)&&(this.#g=new MutationObserver(()=>{this.#$(),this.#P()}),this.#g.observe(this,{childList:!0})),this.#C(),this.id){let m=this.getRootNode();for(let u of m.querySelectorAll(`[for="${CSS.escape(this.id)}"]`))jh.get(u)?.()}a!==void 0&&Nh(this,a,"restore")}#h;#C(){this.#h?.(),this.#h=r.render?.(this,this.#t)||void 0}reconfigure(){this.#n&&this.#i()}#m=new Map;#g;#c;#S(a){this.#c={slot:r.self,el:a,props:{}},this.register(this.#c)}#P(){if(!r.self||!r.target)return;let a=cr(this,r.target);a!==this.#c?.el&&(this.#c&&this.unregister(this.#c),this.#c=void 0,this.#i(),a&&this.#S(a))}#k(a,l){let c={slot:a,el:l,props:r.childProps?.read?.(l)??{}};r.childProps&&(c.observer=new MutationObserver(()=>{c.props=r.childProps.read?.(l)??{},this.#i(),this.update(c,!1)}),c.observer.observe(l,{attributeFilter:r.childProps.attributes})),this.#m.set(a,c),this.register(c)}#$(){for(let[a,l]of Object.entries(r.children??{})){let c=l(this),h=this.#m.get(a);h?.el!==c&&(h&&(this.unregister(h),this.#m.delete(a)),c&&this.#k(a,c))}}disconnectedCallback(){Kh(this,()=>{this.#b=Yh.get(this)?.(),this.#h?.(),this.#h=void 0,this.#g?.disconnect(),this.#g=void 0,this.#m.clear(),this.#c=void 0,this.#n=!1,Ha.delete(this);for(let a of this.#o)this.unregister(a);this.#t?.destroy(),this.#u=!0})}register(a){this.#o.add(a),_o.add(a),a.sync=()=>this.#r.has(a)||this.#s(a),this.#r.size||queueMicrotask(()=>this.#T()),this.#r.add(a)}#T(){let a=zr([...this.#r]);this.#r.clear();for(let l of a)this.#o.has(l)&&(l.reread&&(l.props=l.reread()),l.feature&&this.#t.use(l.feature),this.#E(l),this.#s(l))}#E(a){let l=this.#t;a.unwatch?.();let c=l.part(a.slot,a.props);a.record=c,a.selected=fi(c),a.version=Mo(l),a.unwatch=pi(c,h=>{if(di(c)!==a.shown)return a.version=Mo(l),this.#s(a);if(h)return;let m=Mo(l);m!==a.version&&(a.version=m,this.#s(a))})}unregister(a){a.unwatch?.(),a.unwatch=void 0,a.observer?.disconnect(),a.observer=void 0,this.#p(a),$a(a.el,this.#M),a.disconnect?.(),a.disconnect=void 0,this.#w(a),this.#o.delete(a),_o.delete(a),this.#r.delete(a),_b(a)}rebind(){let a=zr([...this.#o].filter(l=>!this.#r.has(l)));for(let l of a)this.#p(l);for(let l of a)this.#s(l)}update(a,l){if(!this.#r.has(a)){this.#A(a,l),this.#s(a);for(let c of this.#o)if(!(c===a||this.#r.has(c))){if(c.reread){let h=c.props;c.props=c.reread(),this.#A(c,_h(h,c.props))}this.#s(c)}Lh(a.el)}}#A(a,l){l&&this.#p(a);let c=this.#t.part(a.slot,a.props);(c!==a.record||fi(c)!==a.selected)&&this.#E(a)}#s(a){if(this.#v.has(a))return void this.#y.add(a);Va(a.el);let c=this.#t.part(a.slot,a.props);if(a.disconnect??=ma(c,a.el),a.shown=di(c),a.shown){let h=this.#_(a);h!==void 0&&this.#z(a,h)&&(this.#p(a),this.#D(a,h));let m=Nr(c);m.hidden===void 0&&(pa(c)||"hidden"in m)&&a.el.removeAttribute("hidden"),this.#L(a,m),a.unbind||this.#O(a,c)}else{a.unbind&&(this.#L(a,Nr(c)),this.#p(a)),a.el.hasAttribute("hidden")||a.el.setAttribute("hidden","");let h=Nr(c)["data-slot"];h&&!a.el.hasAttribute("data-slot")&&a.el.setAttribute("data-slot",h),this.#w(a)}}#O(a,l){let c,h=!1;a.unbind=()=>{h=!0,c?.()},c=ha(l,a.el),h&&c()}#p(a){let l=a.unbind;a.unbind=void 0,l?.()}#_(a){if(r.portal?.slots.includes(a.slot))return vs(r.portal.container(this,a))}#z(a,l){return l?a.el.parentNode!==l:!!a.placeholder}#D(a,l){this.#w(a),l&&(a.placeholder=document.createComment(`${t} ${a.slot}`),a.el.replaceWith(a.placeholder),l.appendChild(a.el),Wa.set(a.el,l))}#L(a,l){let c=Ob(a,this);c?.dataSlot&&(l={...l,"data-slot":c.dataSlot}),a.dataSlot=l["data-slot"];let h=this.#a;this.#a=a.el===this,this.#v.add(a);try{Pa(a.el,l,this.#M)}finally{this.#a=h,this.#v.delete(a)}this.#y.delete(a)&&this.#s(a)}get#M(){return`render:${Ra(this)}`}#w(a){a.placeholder&&(a.placeholder.replaceWith(a.el),a.placeholder=void 0,Wa.delete(a.el))}})}function Rb(t,e){if(!Oh(t))return;let r=e.props??{};Wh(t,e.display,"align"in r),customElements.define(t,class qa extends(e.formAssociated?Xh(HTMLElement):HTMLElement){static observedAttributes=[...Object.keys(r).map(Si),"for",...xi];#e;#t;#o={};constructor(){super(),jh.set(this,()=>{this.isConnected&&this.connectedCallback()})}static{for(let n of e.properties??[])Object.defineProperty(qa.prototype,n,{get(){return this.#o[n]??(r[n]&&ja(this,n,r[n]))},set(i){this.#o[n]=i,this.attributeChangedCallback("")}});Ih(qa.prototype,r,e.defaults)}#r(){let n={...e.context?.(this),...Dh(this,r)};for(let i of e.properties??[])this.#o[i]!==void 0&&(n[i]=this.#o[i]);for(let[i,{slot:s,prop:a}]of Object.entries(e.from??{}))n[i]??=zb(this,s,this.#e)?.[a];for(let i of e.ids??[])n[i]??=Ra(this);return n.value===void 0&&n.id===void 0&&(n.id=Ra(this)),e.keyed&&Uh(n)&&(n.id??=Ab(this.#e)?.api.internal.keyOf(n.value)),Na(this,n,[],e.actions)}#n;connectedCallback(){Rh(this,[...e.properties??[],...Object.keys(r)]),Va(this),(e.target||this.hasAttribute("as-child"))&&!this.#n&&(this.#n=new MutationObserver(()=>this.#l()),this.#n.observe(this,{childList:!0}));let n=bi(this,e.owner)??this.#e;if(!n)return queueMicrotask(()=>this.#a());if(!("register"in n)){customElements.whenDefined(n.localName).then(()=>this.isConnected&&this.connectedCallback());return}if(n===this.#e&&this.#t&&_o.has(this.#t))return;this.#e&&this.#t&&this.#e.unregister(this.#t);let i=cr(this,e.target);if(!i)return queueMicrotask(()=>{this.isConnected&&!this.#t&&!cr(this,e.target)&&(`${t}`,void 0)});!this.#t&&(e.render?.(this),this.#t)||(this.#e=n,this.#t={slot:e.slot,feature:e.feature,el:i,props:this.#r(),reread:(e.context||e.from)&&(()=>this.#r()),keyed:e.keyed},Wr.set(this,n),Oo.set(this,this.#t),n.register(this.#t))}#a(){!this.isConnected||this.#e||(bi(this,e.owner)?this.connectedCallback():e.alone?e.alone(cr(this,e.target)??this,this):this.hasAttribute("for")||(`${t}${e.owner}`,void 0))}#l(){let n=this.#t?.el;if(!this.isConnected||n&&Wa.has(n))return;let i=cr(this,e.target);i!==(n??null)&&(this.#e&&this.#t&&this.#e.unregister(this.#t),this.#e=void 0,this.#t=void 0,i&&this.connectedCallback())}disconnectedCallback(){Kh(this,()=>{this.#n?.disconnect(),this.#n=void 0,this.#e&&this.#t&&this.#e.unregister(this.#t),Wr.delete(this),Oo.delete(this),this.#e=void 0,this.#t=void 0})}attributeChangedCallback(n){if(To(this,n),xi.includes(n))return;if(n==="for"){if(!this.isConnected)return;!bi(this,e.owner)&&this.#e&&this.#t&&(this.#e.unregister(this.#t),this.#e=void 0,Wr.delete(this)),this.connectedCallback();return}if(!this.#e||!this.#t){e.alone&&this.isConnected&&!bi(this,e.owner)&&e.alone(cr(this,e.target)??this,this);return}let i=this.#t.props;this.#t.props=this.#r();let s=this.#t.props,a=_h(i,s)||!!e.rebind?.some(l=>i[l]!==s[l]);this.#e.update(this.#t,a),e.changed?.(this)}})}var Ia=new WeakMap;function Mh(t,e,r={}){let o={},n=[],i=[],s=[],a=!1,l={};for(let[c,h]of Object.entries({...t,...r})){if(!h)continue;if(typeof h=="object"){let[u,f=c]=h.from.split(".");if(u in e.slots&&(l[c]={slot:u,prop:f}),!(c in r))continue}let m=typeof h=="object"?h.kind:h;m==="value"?n.push(c):m==="action"?s.push(c):m==="id"?i.push(c):m==="key"&&(a=!0),!(m==="value"||m==="action"||m==="callback")&&(c!=="id"||c in r)&&(o[c]=m==="id"||m==="key"?"string":m)}return{attributes:o,properties:n,ids:i,actions:s,keyed:a,from:Object.keys(l).length?l:void 0}}var Ph=t=>typeof t=="string"?{tag:t}:t;function $h(t,e,r,o){let n=ga(t);if(e==="root"){let{tag:w,self:p,kinds:v,properties:C=[],...b}=Ph(r);Ia.set(t,[...new Set([...Ia.get(t)??[],w])]);let{debug:S,..._}=n.options,I=Mh(_,n,v),y={...b,self:p??("root"in n.slots&&!b.children?.root?"root":void 0),attributes:I.attributes,properties:[...new Set([...I.properties,...C])].filter($=>!b.state?.[$]),actions:I.actions};return{kind:"owner",key:e,tagName:w,config:y}}let{tag:i,slot:s=e,owners:a=[],kinds:l,properties:c=[],...h}=Ph(r),m=Ia.get(t);if(!m)throw new Error(`<${i}> is a part of ${t.name}: define its root first.`);let u=n.slots[s]??(h.feature?.slots[s]&&(h.feature.slots[s].props??{}));if(!u)throw new Error(`<${i}>: ${t.name} has no ${s} slot.`);let{attributes:f,...g}=Mh(u,n,l),d={...h,slot:s,owner:[...new Set([...o?[o]:[],...m,...a])].join(", "),props:f,...g,properties:[...new Set([...g.properties,...c])]};return{kind:"part",key:e,tagName:i,config:d}}function Fb(t,e){let{root:r,...o}=e,n=$h(t,"root",r);return[n,...Object.entries(o).flatMap(([i,s])=>s?[$h(t,i,s,n.tagName)]:[])]}function Nb(t,e){e.kind==="owner"?Ib(e.tagName,t,e.config):Rb(e.tagName,e.config)}var Bb=t=>t.replace(/(^|-)(\w)/g,(e,r,o)=>o.toUpperCase());function Ua(t,e){let r={};for(let o of Fb(t,e))Nb(t,o),r[Bb(o.key)]=typeof customElements>"u"?void 0:customElements.get(o.tagName);return r}var Ka=new Map,ki=new WeakMap;function Ya(t,e){return[...t.querySelectorAll(e)].find(r=>r.closest("bl-quick-look")===t)}function Vb(t,e){let r=t.ownerDocument,o=new AbortController,n={signal:o.signal},i,s,a=!1,l=!1,c,h;Ka.set(t,e);let m=(v,C)=>v!==void 0&&C.clientX>=v.left&&C.clientX<=v.right&&C.clientY>=v.top&&C.clientY<=v.bottom,u=(v,C)=>{let b=v.target;if(!(b instanceof Element))return;let S=b.closest(C);if(S?.closest("bl-quick-look")===t)return S},f=()=>[...Ka].some(([v,C])=>v.ownerDocument===r&&C.isOpen()),g=()=>{clearTimeout(i),i=void 0},d=()=>{clearTimeout(s),s=void 0},w=()=>{g(),d(),a=!1},p=()=>{!a||s!==void 0||(s=setTimeout(()=>{s=void 0,a&&e.close()},250))};t.addEventListener("pointerover",v=>{if(v.pointerType!=="mouse"||l||f())return;let C=u(v,"bl-quick-look-trigger");if(!C)return;let b=dr(C);if(!b)throw new Error("Quick Look trigger requires a native button or link.");v.relatedTarget instanceof Node&&b.contains(v.relatedTarget)||b.matches(':disabled, [aria-disabled="true"]')||(h=v,g(),c=b.getBoundingClientRect(),i=setTimeout(()=>{if(i=void 0,!(!b.isConnected||b.closest("bl-quick-look")!==t||b.matches(':disabled, [aria-disabled="true"]')||f())){if(!Ya(t,"bl-quick-look-content"))throw new Error("Quick Look requires a bl-quick-look-content part.");c=b.getBoundingClientRect(),ki.set(t,b),a=!0,e.setOpen(!0),e.isOpen()||(a=!1)}},500))},n),t.addEventListener("pointerout",v=>{let C=u(v,"bl-quick-look-trigger"),b=C&&dr(C);b&&!(v.relatedTarget instanceof Node&&b.contains(v.relatedTarget))&&g()},n),t.addEventListener("click",v=>{u(v,"bl-quick-look-trigger")&&(ki.delete(t),w())},{...n,capture:!0});for(let v of["pointerdown","keydown"])t.addEventListener(v,C=>{u(C,"bl-quick-look-content")&&w()},{...n,capture:!0});return r.addEventListener("pointermove",v=>{if(v.pointerType!=="mouse")return;h=v;let C=m(c,v);if(C||(l=!1),!a)return;let b=Ya(t,"bl-quick-look-content");C||m(b?.getBoundingClientRect(),v)?d():p()},{...n,capture:!0}),r.addEventListener("pointerout",v=>{v.relatedTarget===null&&(h=void 0,l=!1,g(),p())},n),t.addEventListener("openchange",()=>{g(),d(),queueMicrotask(()=>{o.signal.aborted||e.isOpen()||(a=!1,l=h!==void 0&&m(c,h))})},n),()=>{o.abort(),w(),Ka.delete(t),ki.delete(t)}}var{Root:K7,Trigger:Y7,Backdrop:X7,Content:G7,Title:Q7,Description:Z7,Close:J7}=Ua(mh,{root:{tag:"bl-quick-look",display:"contents",state:{open:{get:t=>t.isOpen(),set:(t,e)=>t.setOpen(e)}},api:["isOpen","setOpen","open","close","toggle","getPayload","focus"],render:(t,e)=>Vb(t,e.api)},trigger:{tag:"bl-quick-look-trigger",target:dr,display:"contents"},backdrop:"bl-quick-look-backdrop",content:{tag:"bl-quick-look-content",context:t=>{let e=t.closest("bl-quick-look");return{finalFocus:()=>{if(!e)return;let r=Ya(e,"bl-quick-look-trigger");return ki.get(e)??(r&&dr(r))}}}},title:"bl-quick-look-title",description:"bl-quick-look-description",close:{tag:"bl-quick-look-close",target:dr,display:"contents"}});var eE=cm(rm(),1),Ai=!1,Li=!1;function rE(t){Li||ul(t,"web")}function oE(t){Ai||dl(t)}function nE(t){Ai||dl(t)}function iE(t){Li||ul(t,"wasm")}function sE(t){Ai||dl(t)}function aE(t){Li||ul(t,"server")}function ul(t,e){typeof t.addEventListener=="function"&&e==="web"&&(customElements.define("page-script",zo),t.addEventListener("enhancedload",pl)),t.registerCustomEventType("washow",{browserEventName:"wa-show",createEventArgs:()=>null}),t.registerCustomEventType("wahide",{browserEventName:"wa-hide",createEventArgs:()=>null}),t.registerCustomEventType("blselect",{browserEventName:"bl-select",createEventArgs:({index:r,item:o})=>({index:r,value:o.dataset.value||o.innerText||"",description:o.dataset.description||null})}),t.registerCustomEventType("popovertoggle",{browserEventName:"toggle",createEventArgs:({newState:r})=>({newState:r==="open"?1:0})}),Li=!0}function dl(t){Ai=!0}function Hb(t,e,r){let o=()=>t.invokeMethodAsync(e,r);document.startViewTransition?document.startViewTransition(o):o()}window.blueBlazor=window.blueBlazor||{};window.blueBlazor.startViewTransition=Hb;export{Ig as BlSelectEvent,Dg as Odometer,Rg as SelectList,aE as afterServerStarted,ul as afterStarted,iE as afterWebAssemblyStarted,rE as afterWebStarted,sE as beforeServerStart,dl as beforeStart,nE as beforeWebAssemblyStart,oE as beforeWebStart,Nu as closeInspector,Du as dispose,Fg as init,Fu as openInspector,Vg as toggleInspector};
//# sourceMappingURL=BlueBlazor.lib.module.js.map
