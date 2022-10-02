!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o("b7ONl"),o("6ZqVT");var r=o("bpxeT"),i=o("2TvXO"),s=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];var l,c,d,u,p=o("b7ONl"),m={};l=m,c="Spinner",d=function(){return h},u=function(e){return h=e},Object.defineProperty(l,c,{get:d,set:u,enumerable:!0,configurable:!0});var f=function(){return f=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},f.apply(this,arguments)},v={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},h=function(){function e(e){void 0===e&&(e={}),this.opts=f(f({},v),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),y(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var n=Math.round(t.corners*t.width*500)/1e3+"px",a="none";!0===t.shadow?a="0 2px 4px #000":"string"==typeof t.shadow&&(a=t.shadow);for(var o=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],a=0,o=e.split(",");a<o.length;a++){var r=o[a].match(t);if(null!==r){var i=+r[2],s=+r[5],l=r[4],c=r[7];0!==i||l||(l=c),0!==s||c||(c=l),l===c&&n.push({prefix:r[1]||"",x:i,y:s,xUnits:l,yUnits:c,end:r[8]})}}return n}(a),r=0;r<t.lines;r++){var i=~~(360/t.lines*r+t.rotate),s=y(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:g(t.fadeColor,r),borderRadius:n,transformOrigin:"left",transform:"rotate("+i+"deg) translateX("+t.radius+"px)"}),l=r*t.direction/t.lines/t.speed;l-=1/t.speed;var c=y(document.createElement("div"),{width:"100%",height:"100%",background:g(t.color,r),borderRadius:n,boxShadow:_(o,i),animation:1/t.speed+"s linear "+l+"s infinite "+t.animation});s.appendChild(c),e.appendChild(s)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function y(e,t){for(var n in t)e.style[n]=t[n];return e}function g(e,t){return"string"==typeof e?e:e[t%e.length]}function _(e,t){for(var n=[],a=0,o=e;a<o.length;a++){var r=o[a],i=b(r.x,r.y,t);n.push(r.prefix+i[0]+r.xUnits+" "+i[1]+r.yUnits+r.end)}return n.join(", ")}function b(e,t,n){var a=n*Math.PI/180,o=Math.sin(a),r=Math.cos(a);return[Math.round(1e3*(e*r+t*o))/1e3,Math.round(1e3*(-e*o+t*r))/1e3]}var w=null,x={lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-shrink",direction:1,color:"#D76060",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};function S(){var e=document.getElementById("foo");w=new(0,m.Spinner)(x).spin(e)}function L(){w.stop()}var q=o("jcFG7"),N={search:document.querySelector(".form__input"),button:document.querySelector(".search_btn"),gallery:document.querySelector(".gallery"),filmLsit:document.querySelector(".films"),searcError:document.querySelector(".search__error-text")},O=new(0,p.default);function k(e){0!==e.length&&(N.filmLsit.innerHTML=e.map((function(e){var t=e.poster_path,n=e.original_title,a=(e.vote_average,e.release_date),o=e.title,r=e.id,i=e.genre_ids,l=[],c="https://image.tmdb.org/t/p/w500/",d=String(a).slice(0,4);null===t&&(c="https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg",t=""),""!==a&&a||(d="No information"),0===(null==i?void 0:i.length)&&l.push("No information");var u=!0,p=!1,m=void 0;try{for(var f,v=s[Symbol.iterator]();!(u=(f=v.next()).done);u=!0){var h=f.value;if(i){var y=!0,g=!1,_=void 0;try{for(var b,w=i[Symbol.iterator]();!(y=(b=w.next()).done);y=!0)b.value===h.id&&l.push(h.name)}catch(e){g=!0,_=e}finally{try{y||null==w.return||w.return()}finally{if(g)throw _}}}}}catch(e){p=!0,m=e}finally{try{u||null==v.return||v.return()}finally{if(p)throw m}}return l.length>2&&(l=l.slice(0,2)).push("Other"),'<li class="films__item" data-id='.concat(r,'>\n          <a href="" class="films__item-link">\n            <div class="poster__thumb">\n              <img src="').concat(c).concat(t,'" loading="lazy" alt="').concat(n,'" class="poster__foto" />\n            </div>\n              <div class="poster__about">\n                <p class="poster__title">').concat(o,'</p>\n                  <div class="poster__description">\n                <p class="poster__genre">').concat(l,'</p>\n                <p class="poster__year">').concat(d,"</p>\n                \n                </div>\n              </div>\n\n          </a>\n        </li>")})).join(""))}function C(){return(C=e(r)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==O.query){e.next=3;break}return e.abrupt("return");case 3:return S(),e.next=6,O.search();case 6:n=e.sent,0===O.totalResult?N.searcError.classList.remove("is-hidden"):N.searcError.classList.add("is-hidden"),k(n),(0,q.renderPagination)(O,k,"search"),L(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}N.search.addEventListener("submit",(function(e){e.preventDefault(),O.resetPage(),O.searchQuery=e.currentTarget.elements.searchQuery.value,function(){C.apply(this,arguments)}()})),o("bX5OU");var I=o("8nrFW"),T=(p=o("b7ONl"),document.querySelector(".films")),M=document.querySelector(".modal-movie"),E=document.querySelector(".modal__container"),j=document.querySelector("[data-backdrop]"),F=document.querySelector(".backdrop"),A="https://image.tmdb.org/t/p/w500",D=new(0,p.default);function J(e){"Escape"===e.code&&(j.classList.add("is-hidden"),M.classList.add("is-hidden"),document.body.style.overflow="",D.clearSavedMovie())}function z(e){e.target===e.currentTarget&&(j.classList.add("is-hidden"),M.classList.add("is-hidden"),document.body.style.overflow="",D.clearSavedMovie())}T.addEventListener("click",(function(t){if(t.preventDefault(),"IMG"!==t.target.nodeName)return;document.body.style.overflow="hidden",window.addEventListener("keydown",J),F.addEventListener("click",z),M.classList.remove("is-hidden"),j.classList.remove("is-hidden"),(n=t.target.closest("li").dataset.id,D.getSingleMovieByID(n).then((function(e){return e.data}))).then((function(t){D.movieToSave=t,function(t){var n=t.poster_path,a=t.original_title,o=t.title,r=t.id,i=t.vote_average,s=t.vote_count,l=t.genres,c=t.overview,d=t.popularity,u=l.map((function(e){return e.name})).join(", "),p='\n  <img\n      class="modal__image"\n      src="'.concat(n?A+n:"https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg",'"\n      alt="').concat(o||"Image",'"\n      width="240"\n      height="357"\n    />\n    <div class="modal__info-box">\n      <p class="modal__title">').concat(o||"No information",'</p>\n      <div class="modal__features-box">\n        <div class="modal__features-issues">\n          <p class="modal__keys">Vote / Votes</p>\n          <div class="modal__values-box">\n            <p class="modal__value-numbers modal__value-numbers--accent">').concat(i?i.toFixed(1):"---",'</p>\n            <span class="modal__slash">/</span>\n            <p class="modal__value-numbers modal__value-numbers--simple">').concat(s||"---",'</p>\n          </div>\n        </div>\n        <div class="modal__features-issues">\n          <p class="modal__keys">Popularity</p>\n          <p class="modal__value-numbers">').concat(d?d.toFixed(1):"---",'</p>\n        </div>\n        <div class="modal__features-issues">\n          <p class="modal__keys">Original Title</p>\n          <p class="modal__value-text modal__value--main-text">').concat(a||"No information",'</p>\n        </div>\n        <div class="modal__features-issues">\n          <p class="modal__keys">Genre</p>\n          <p class="modal__value-text">').concat(u||"No information",'</p>\n        </div>\n      </div>\n      <p class="modal__about-title">About</p>\n      <p class="modal__about-text">').concat(c||"No information",'</p>\n      <div class="modal__bottom-thumb">\n        <div class="modal__btn-box">\n        <button class="modal__btn" type="button" data-type="watched" data-id=').concat(r,'>add to watched</button>\n        <button class="modal__btn" type="button" data-type="queue" data-id=').concat(r,">add to queue</button>\n        </div>\n      </div>\n   \n    </div>");E.innerHTML=p;var m=o.length>54,f=document.querySelector(".modal__title");m&&(f.style.fontSize="15px");(function(e){var t=document.querySelector('button[data-type="watched"]'),n=document.querySelector('button[data-type="queue"]'),a=localStorage.getItem("watched");if(a){(a=JSON.parse(a)).map((function(e){return e.id})).indexOf(Number(e))>=0&&(t.classList.add("active"),t.style.backgroundColor="#ff6b08",t.textContent="remove from watched")}var o=localStorage.getItem("queue");if(o){(o=JSON.parse(o)).map((function(e){return e.id})).indexOf(Number(e))>=0&&(n.classList.add("active"),n.style.backgroundColor="#ff6b08",n.textContent="remove from queue")}})(r),function(){var t=document.querySelector('button[data-type="watched"]'),n=document.querySelector('button[data-type="queue"]');function a(n){n.preventDefault(),t.classList.toggle("active"),r(),function(t){var n=D.movieToSave,a=[],o=localStorage.getItem("watched");if(!o)return a.push(n),void localStorage.setItem("watched",JSON.stringify(a));var r=(o=JSON.parse(o)).map((function(e){return e.id})).indexOf(Number(t));if(r<0){var i;(i=a).push.apply(i,e(I)(o).concat([n])),localStorage.setItem("watched",JSON.stringify(a))}else{o.splice(r,1),a=o,localStorage.setItem("watched",JSON.stringify(a))}o.length<1&&localStorage.removeItem("watched")}(t.dataset.id)}function o(t){t.preventDefault(),n.classList.toggle("active"),function(t){var n=D.movieToSave,a=[],o=localStorage.getItem("queue");if(!o)return a.push(n),void localStorage.setItem("queue",JSON.stringify(a));var r=(o=JSON.parse(o)).map((function(e){return e.id})).indexOf(Number(t));if(r<0){var i;(i=a).push.apply(i,e(I)(o).concat([n])),localStorage.setItem("queue",JSON.stringify(a))}else{o.splice(r,1),a=o,localStorage.setItem("queue",JSON.stringify(a))}o.length<1&&localStorage.removeItem("queue")}(n.dataset.id),i()}function r(){t.classList.contains("active")?(t.textContent="remove from watched",t.style.backgroundColor="#ff6b08"):(t.textContent="add to watched",t.style.backgroundColor="#fff")}function i(){n.classList.contains("active")?(n.textContent="remove from queue",n.style.backgroundColor="#ff6b08"):(n.textContent="add to queue",n.style.backgroundColor="#fff")}t.addEventListener("click",a),n.addEventListener("click",o)}()}(t)})).catch((function(e){console.log(e)})),document.body.classList.add("no-scroll");var n})),document.querySelector(".modal-movie__close-button").addEventListener("click",(function(){document.body.style.overflow="",window.removeEventListener("keydown",J),F.removeEventListener("click",z),j.classList.add("is-hidden"),M.classList.add("is-hidden"),document.body.style.overflow="",E.innerHTML="",D.clearSavedMovie()})),o("jcFG7");r=o("bpxeT"),i=o("2TvXO"),p=o("b7ONl"),q=o("jcFG7");var P={filmLsit:document.querySelector(".films")},R=new(0,p.default);function U(){return(U=e(r)(e(i).mark((function t(){var n;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(),P.filmLsit.innerHTML="",e.next=5,R.searchPopular();case 5:n=e.sent,k(n.sort((function(e,t){return t.vote_average-e.vote_average}))),(0,q.renderPagination)(R,k,"searchPopular"),L(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}!function(){U.apply(this,arguments)}(),o("32ZrB")}();
//# sourceMappingURL=index.ee5bd6e5.js.map
