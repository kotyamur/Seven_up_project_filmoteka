var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("7rYDH"),o("4x2VM");const a=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];var i,s,r,l,d=o("7rYDH"),c={};i=c,s="Spinner",r=function(){return p},l=function(e){return p=e},Object.defineProperty(i,s,{get:r,set:l,enumerable:!0,configurable:!0});var u=function(){return u=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},u.apply(this,arguments)},m={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},p=function(){function e(e){void 0===e&&(e={}),this.opts=u(u({},m),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),f(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var n=Math.round(t.corners*t.width*500)/1e3+"px",o="none";!0===t.shadow?o="0 2px 4px #000":"string"==typeof t.shadow&&(o=t.shadow);for(var a=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],o=0,a=e.split(",");o<a.length;o++){var i=a[o].match(t);if(null!==i){var s=+i[2],r=+i[5],l=i[4],d=i[7];0!==s||l||(l=d),0!==r||d||(d=l),l===d&&n.push({prefix:i[1]||"",x:s,y:r,xUnits:l,yUnits:d,end:i[8]})}}return n}(o),i=0;i<t.lines;i++){var s=~~(360/t.lines*i+t.rotate),r=f(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:h(t.fadeColor,i),borderRadius:n,transformOrigin:"left",transform:"rotate("+s+"deg) translateX("+t.radius+"px)"}),l=i*t.direction/t.lines/t.speed;l-=1/t.speed;var d=f(document.createElement("div"),{width:"100%",height:"100%",background:h(t.color,i),borderRadius:n,boxShadow:v(a,s),animation:1/t.speed+"s linear "+l+"s infinite "+t.animation});r.appendChild(d),e.appendChild(r)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function f(e,t){for(var n in t)e.style[n]=t[n];return e}function h(e,t){return"string"==typeof e?e:e[t%e.length]}function v(e,t){for(var n=[],o=0,a=e;o<a.length;o++){var i=a[o],s=g(i.x,i.y,t);n.push(i.prefix+s[0]+i.xUnits+" "+s[1]+i.yUnits+i.end)}return n.join(", ")}function g(e,t,n){var o=n*Math.PI/180,a=Math.sin(o),i=Math.cos(o);return[Math.round(1e3*(e*i+t*a))/1e3,Math.round(1e3*(-e*a+t*i))/1e3]}let y=null;const _={lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-shrink",direction:1,color:"#D76060",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"};function b(){const e=document.getElementById("foo");y=new(0,c.Spinner)(_).spin(e)}function w(){y.stop()}var S=o("2nhTy");const x={search:document.querySelector(".form__input"),button:document.querySelector(".search_btn"),gallery:document.querySelector(".gallery"),filmLsit:document.querySelector(".films"),searcError:document.querySelector(".search__error-text")};let L=new(0,d.default);function q(e){0!==e.length&&(x.filmLsit.innerHTML=e.map((({poster_path:e,original_title:t,vote_average:n,release_date:o,title:i,id:s,genre_ids:r})=>{let l=[],d="",c="https://image.tmdb.org/t/p/w500/",u=String(o).slice(0,4);null===e&&(c="https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg",e=""),""!==o&&o||(u="No information"),0===(null==r?void 0:r.length)&&l.push("No information");for(const e of a)if(r)for(const t of r)t===e.id&&l.push(e.name);return l.length>2&&(l=l.slice(0,2),l.push("Other")),d=l.join(", "),`<li class="films__item" data-id=${s}>\n          <a href="" class="films__item-link">\n            <div class="poster__thumb">\n              <img src="${c}${e}" loading="lazy" alt="${t}" class="poster__foto" />\n            </div>\n              <div class="poster__about">\n                <p class="poster__title">${i}</p>\n                  <div class="poster__description">\n                <p class="poster__genre">${d}</p>\n                <p class="poster__year">${u}</p>\n                \n                </div>\n              </div>\n\n          </a>\n        </li>`})).join(""))}x.search.addEventListener("submit",(function(e){L=new(0,d.default),e.preventDefault(),L.resetPage(),L.searchQuery=e.currentTarget.elements.searchQuery.value,async function(){try{if(""===L.query)return;b();const e=await L.search();0===L.totalResult?(x.searcError.classList.remove("is-hidden"),setTimeout((()=>{x.searcError.classList.add("is-hidden")}),1500)):x.searcError.classList.add("is-hidden"),q(e),(0,S.renderPagination)(L,q,"search"),w()}catch(e){console.log(e)}}()})),o("j7E5r");d=o("7rYDH");const N=document.querySelector(".films"),k=document.querySelector(".modal-movie"),C=document.querySelector(".modal__container"),O=document.querySelector("[data-backdrop]"),I=document.querySelector(".backdrop"),E=new(0,d.default);N.addEventListener("click",(function(e){if(e.preventDefault(),"IMG"!==e.target.nodeName)return;document.body.style.overflow="hidden",window.addEventListener("keydown",T),I.addEventListener("click",M),k.classList.remove("is-hidden"),O.classList.remove("is-hidden"),(t=e.target.closest("li").dataset.id,E.getSingleMovieByID(t).then((e=>e.data))).then((e=>{E.movieToSave=e,function(e){const{poster_path:t,original_title:n,title:o,id:a,vote_average:i,vote_count:s,genres:r,overview:l,popularity:d}=e,c=r.map((e=>e.name)).join(", "),u=`\n  <img\n      class="modal__image"\n      src="${t?"https://image.tmdb.org/t/p/w500"+t:"https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg"}"\n      alt="${o||"Image"}"\n      width="240"\n      height="357"\n    />\n    <div class="modal__info-box">\n      <p class="modal__title">${o||"No information"}</p>\n      <div class="modal__features-box">\n        <div class="modal__features-issues">\n          <p class="modal__keys">Vote / Votes</p>\n          <div class="modal__values-box">\n            <p class="modal__value-numbers modal__value-numbers--accent">${i?i.toFixed(1):"---"}</p>\n            <span class="modal__slash">/</span>\n            <p class="modal__value-numbers modal__value-numbers--simple">${s||"---"}</p>\n          </div>\n        </div>\n        <div class="modal__features-issues">\n          <p class="modal__keys">Popularity</p>\n          <p class="modal__value-numbers">${d?d.toFixed(1):"---"}</p>\n        </div>\n        <div class="modal__features-issues">\n          <p class="modal__keys">Original Title</p>\n          <p class="modal__value-text modal__value--main-text">${n||"No information"}</p>\n        </div>\n        <div class="modal__features-issues">\n          <p class="modal__keys">Genre</p>\n          <p class="modal__value-text">${c||"No information"}</p>\n        </div>\n      </div>\n      <p class="modal__about-title">About</p>\n      <p class="modal__about-text">${l||"No information"}</p>\n      <div class="modal__bottom-thumb">\n        <div class="modal__btn-box">\n        <button class="modal__btn" type="button" data-type="watched" data-id=${a}>add to watched</button>\n        <button class="modal__btn" type="button" data-type="queue" data-id=${a}>add to queue</button>\n        </div>\n      </div>\n   \n    </div>`;C.innerHTML=u;const m=o.length>54,p=document.querySelector(".modal__title");m&&(p.style.fontSize="15px");(function(e){const t=document.querySelector('button[data-type="watched"]'),n=document.querySelector('button[data-type="queue"]');let o=localStorage.getItem("watched");if(o){o=JSON.parse(o),o.map((e=>e.id)).indexOf(Number(e))>=0&&(t.classList.add("active"),t.style.backgroundColor="#ff6b08",t.textContent="remove from watched")}let a=localStorage.getItem("queue");if(a){a=JSON.parse(a),a.map((e=>e.id)).indexOf(Number(e))>=0&&(n.classList.add("active"),n.style.backgroundColor="#ff6b08",n.textContent="remove from queue")}})(a),function(){const e=document.querySelector('button[data-type="watched"]'),t=document.querySelector('button[data-type="queue"]');function n(t){t.preventDefault(),e.classList.toggle("active"),a(),function(e){const t=E.movieToSave;let n=[],o=localStorage.getItem("watched");if(!o)return n.push(t),void localStorage.setItem("watched",JSON.stringify(n));{o=JSON.parse(o);let a=o.map((e=>e.id)).indexOf(Number(e));if(a<0)n.push(...o,t),localStorage.setItem("watched",JSON.stringify(n));else{o.splice(a,1),n=o,localStorage.setItem("watched",JSON.stringify(n))}o.length<1&&localStorage.removeItem("watched")}}(e.dataset.id)}function o(e){e.preventDefault(),t.classList.toggle("active"),function(e){const t=E.movieToSave;let n=[],o=localStorage.getItem("queue");if(!o)return n.push(t),void localStorage.setItem("queue",JSON.stringify(n));{o=JSON.parse(o);let a=o.map((e=>e.id)).indexOf(Number(e));if(a<0)n.push(...o,t),localStorage.setItem("queue",JSON.stringify(n));else{o.splice(a,1),n=o,localStorage.setItem("queue",JSON.stringify(n))}o.length<1&&localStorage.removeItem("queue")}}(t.dataset.id),i()}function a(){e.classList.contains("active")?(e.textContent="remove from watched",e.style.backgroundColor="#ff6b08"):(e.textContent="add to watched",e.style.backgroundColor="#fff")}function i(){t.classList.contains("active")?(t.textContent="remove from queue",t.style.backgroundColor="#ff6b08"):(t.textContent="add to queue",t.style.backgroundColor="#fff")}e.addEventListener("click",n),t.addEventListener("click",o)}()}(e)})).catch((e=>{console.log(e)})),document.body.classList.add("no-scroll");var t}));function T(e){"Escape"===e.code&&(O.classList.add("is-hidden"),k.classList.add("is-hidden"),document.body.style.overflow="",E.clearSavedMovie())}function M(e){e.target===e.currentTarget&&(O.classList.add("is-hidden"),k.classList.add("is-hidden"),document.body.style.overflow="",E.clearSavedMovie())}document.querySelector(".modal-movie__close-button").addEventListener("click",(function(){document.body.style.overflow="",window.removeEventListener("keydown",T),I.removeEventListener("click",M),O.classList.add("is-hidden"),k.classList.add("is-hidden"),document.body.style.overflow="",C.innerHTML="",E.clearSavedMovie()})),o("2nhTy");d=o("7rYDH"),S=o("2nhTy");const $={filmLsit:document.querySelector(".films")},D=new(0,d.default);!async function(){try{b(),$.filmLsit.innerHTML="";const e=await D.searchPopular();q(e.sort(((e,t)=>t.vote_average-e.vote_average))),(0,S.renderPagination)(D,q,"searchPopular"),w()}catch(e){console.log(e)}}(),o("ghT7p");
//# sourceMappingURL=index.ec434f97.js.map
