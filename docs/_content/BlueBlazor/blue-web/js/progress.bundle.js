(()=>{"use strict";window.blueWeb=window.blueWeb||{},window.blueWeb.progress={progress:0},window.blueWeb.progress={...window.blueWeb.progress,start:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"blueWebProgress",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Loading data",t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"fixed-top";const o="string"==typeof r||r instanceof String?document.querySelector(r.toString()):r;let n=document.getElementById(e);n||(n=document.createElement("div"),n.id=e,n.className="progress ".concat(t," rounded-0"),n.setAttribute("style","--bs-progress-height: 0.25rem"),n.setAttribute("role","progressbar"),n.setAttribute("aria-label",s),n.setAttribute("aria-valuemin","0"),n.setAttribute("aria-valuemax","100"),n.innerHTML='<div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 0%"></div>',o.appendChild(n));const i=n.querySelector(".progress-bar");if(i){window.blueWeb.progress.progress=0;var b=setInterval((function(){var e,r=5*Math.random();window.blueWeb.progress.progress+=r,window.blueWeb.progress.progress=Math.min(window.blueWeb.progress.progress,100),i.style.width=window.blueWeb.progress.progress+"%",null===(e=n)||void 0===e||e.setAttribute("aria-valuenow",Math.round(window.blueWeb.progress.progress).toString()),window.blueWeb.progress.progress>=100&&clearInterval(b)}),200)}},stop:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"blueWebProgress";const r=document.getElementById(e);r&&(window.blueWeb.progress.progress=100,setTimeout((()=>{r.remove()}),500))}},window.blueWeb.progress})();