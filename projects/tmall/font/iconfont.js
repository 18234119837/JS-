(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-mobile" viewBox="0 0 1024 1024">'+""+'<path d="M740.377384 958.909539H280.960996c-25.3739 0-45.941332-21.107737-45.941331-47.149856V110.197798c0-26.040073 20.568455-47.149856 45.941331-47.149857h459.416388c25.3739 0 45.941332 21.109784 45.941332 47.149857v801.561885c0 26.042119-20.568455 47.149856-45.941332 47.149856z m-229.708705-23.574928c25.3739 0 45.941332-21.109784 45.941331-47.149856 0-26.042119-20.568455-47.149856-45.941331-47.149857-25.3739 0-45.941332 21.107737-45.941332 47.149857 0 26.040073 20.568455 47.149856 45.941332 47.149856zM614.037954 110.197798H430.270581c-6.344498 0-11.485589 5.278213-11.485589 11.788487 0 6.512321 5.14109 11.788487 11.485589 11.788488h183.76635c6.342452 0 11.485589-5.276167 11.485589-11.788488 0.001023-6.510274-5.142114-11.788487-11.484566-11.788487z m126.33943 70.726831H280.960996v612.960413h459.416388v-612.960413z" fill="#666666" ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)