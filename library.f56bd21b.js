var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("7rYDH"),a("8G1wF"),a("lzBIw"),a("4x2VM"),a("ghT7p"),a("6WSfT");var o=a("2nhTy");function s(e){return e.map((({poster_path:e,original_title:t,vote_average:n,release_date:a,title:o,id:s,genres:i})=>{let l=[],d="https://image.tmdb.org/t/p/w500/",c=String(a).slice(0,4);return null===e&&(d="https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg",e=""),""!==a&&a||(c="No information"),0===i.length&&l.push("No information"),i.map((e=>{l.push(e.name),l.length>2&&(l=l.slice(0,2),l.push("Other"))})).join(", "),`<li class="films__item" data-id=${s}>\n          <a href="" class="films__item-link">\n            <div class="poster__thumb">\n              <img src="${d}${e}" loading="lazy" alt="${t}" class="poster__foto" />\n            </div>\n              <div class="poster__about">\n                <p class="poster__title">${o}</p>\n                  <div class="poster__description">\n                <p class="poster__genre">${l}</p>\n                <p class="poster__year">${c}</p>\n                \n                </div>\n              </div>\n\n          </a>\n        </li>`})).join("")}const i={btnWatched:document.querySelector(".watched"),btnQueue:document.querySelector(".queue"),films:document.querySelector(".films"),plug:document.querySelector(".plug"),pagination:document.getElementById("pagination")};function l(){i.films.innerHTML="";const e=JSON.parse(localStorage.getItem("watched"));i.films.classList.remove("queue"),i.films.classList.add("watched"),null!==e&&0!==e.length?(i.plug.style.display="none",i.films.innerHTML=s(e.slice(0,20)),(0,o.renderLibraryPagination)("watched",(e=>{i.films.innerHTML=s(e)}))):(i.plug.style.display="flex",i.films.innerHTML="",i.pagination.style.display="none"),i.btnQueue.classList.remove("is-active"),i.btnWatched.classList.add("is-active")}i.btnWatched.addEventListener("click",l),i.btnQueue.addEventListener("click",(function(){i.films.innerHTML="";const e=JSON.parse(localStorage.getItem("queue"));i.films.classList.remove("watched"),i.films.classList.add("queue"),null!==e&&0!==e.length?(i.plug.style.display="none",i.films.innerHTML=s(e.slice(0,20)),(0,o.renderLibraryPagination)("queue",(e=>{i.films.innerHTML=s(e)}))):(i.plug.style.display="flex",i.films.innerHTML="",i.pagination.style.display="none");i.btnQueue.classList.add("is-active"),i.btnWatched.classList.remove("is-active")})),l();var d=a("7rYDH");const c=document.querySelector(".films"),r=document.querySelector(".modal-movie"),u=document.querySelector(".modal__container"),m=document.querySelector("[data-backdrop]"),p=document.querySelector(".backdrop"),f=document.querySelector(".films"),v=new(0,d.default);c.addEventListener("click",(function(e){if(e.preventDefault(),"IMG"!==e.target.nodeName)return;document.body.style.overflow="hidden",window.addEventListener("keydown",g),p.addEventListener("click",_),r.classList.remove("is-hidden"),m.classList.remove("is-hidden");const t=e.target.closest("li").dataset.id;console.log(t);const n=f.classList.contains("watched")?"watched":"queue";let a=localStorage.getItem(n);a=JSON.parse(a);const o=a.find((e=>Number(t)===e.id));v.movieToSave=o,function(e){const{poster_path:t,original_title:n,title:a,id:o,vote_average:s,vote_count:i,genres:l,overview:d,popularity:c}=e,r=l.map((e=>e.name)).join(", "),m=`\n    <img\n        class="modal__image"\n        src="${t?"https://image.tmdb.org/t/p/w500"+t:"https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg"}"\n        alt="${a||"Image"}"\n        width="240"\n        height="357"\n      />\n      <div class="modal__info-box">\n        <p class="modal__title">${a||"No information"}</p>\n        <div class="modal__features-box">\n          <div class="modal__features-issues">\n            <p class="modal__keys">Vote / Votes</p>\n            <div class="modal__values-box">\n              <p class="modal__value-numbers modal__value-numbers--accent">${s?s.toFixed(1):"---"}</p>\n              <span class="modal__slash">/</span>\n              <p class="modal__value-numbers modal__value-numbers--simple">${i||"---"}</p>\n            </div>\n          </div>\n          <div class="modal__features-issues">\n            <p class="modal__keys">Popularity</p>\n            <p class="modal__value-numbers">${c?c.toFixed(1):"---"}</p>\n          </div>\n          <div class="modal__features-issues">\n            <p class="modal__keys">Original Title</p>\n            <p class="modal__value-text modal__value--main-text">${n||"No information"}</p>\n          </div>\n          <div class="modal__features-issues">\n            <p class="modal__keys">Genre</p>\n            <p class="modal__value-text">${r||"No information"}</p>\n          </div>\n        </div>\n        <p class="modal__about-title">About</p>\n        <p class="modal__about-text">${d||"No information"}</p>\n        <div class="modal__bottom-thumb">\n          <div class="modal__btn-box">\n          <button class="modal__btn" type="button" data-type="watched" data-id=${o}>add to watched</button>\n          <button class="modal__btn" type="button" data-type="queue" data-id=${o}>add to queue</button>\n          </div>\n        </div>\n     \n      </div>`;u.innerHTML=m,function(e){const t=document.querySelector('button[data-type="watched"]'),n=document.querySelector('button[data-type="queue"]');let a=localStorage.getItem("watched");if(a){a=JSON.parse(a),a.map((e=>e.id)).indexOf(Number(e))>=0&&(t.classList.add("active"),t.style.backgroundColor="#ff6b08",t.textContent="remove from watched")}let o=localStorage.getItem("queue");if(o){o=JSON.parse(o),o.map((e=>e.id)).indexOf(Number(e))>=0&&(n.classList.add("active"),n.style.backgroundColor="#ff6b08",n.textContent="remove from queue")}}(o),function(){const e=document.querySelector('button[data-type="watched"]'),t=document.querySelector('button[data-type="queue"]');function n(t){t.preventDefault(),e.classList.toggle("active"),o(),function(e){const t=v.movieToSave;let n=[],a=localStorage.getItem("watched");if(!a)return n.push(t),void localStorage.setItem("watched",JSON.stringify(n));{a=JSON.parse(a);let o=a.map((e=>e.id)).indexOf(Number(e));if(o<0)n.push(...a,t),localStorage.setItem("watched",JSON.stringify(n));else{a.splice(o,1),n=a,localStorage.setItem("watched",JSON.stringify(n))}a.length<1&&localStorage.removeItem("watched")}}(e.dataset.id)}function a(e){e.preventDefault(),t.classList.toggle("active"),function(e){const t=v.movieToSave;let n=[],a=localStorage.getItem("queue");if(!a)return n.push(t),void localStorage.setItem("queue",JSON.stringify(n));{a=JSON.parse(a);let o=a.map((e=>e.id)).indexOf(Number(e));if(o<0)n.push(...a,t),localStorage.setItem("queue",JSON.stringify(n));else{a.splice(o,1),n=a,localStorage.setItem("queue",JSON.stringify(n))}a.length<1&&localStorage.removeItem("queue")}}(t.dataset.id),s()}function o(){e.classList.contains("active")?(e.textContent="remove from watched",e.style.backgroundColor="#ff6b08"):(e.textContent="add to watched",e.style.backgroundColor="#fff")}function s(){t.classList.contains("active")?(t.textContent="remove from queue",t.style.backgroundColor="#ff6b08"):(t.textContent="add to queue",t.style.backgroundColor="#fff")}e.addEventListener("click",n),t.addEventListener("click",a)}()}(o),document.body.classList.add("no-scroll")}));function g(e){localStorage.removeItem("watched"),"Escape"===e.code&&(m.classList.add("is-hidden"),r.classList.add("is-hidden"),document.body.style.overflow="")}function _(e){e.target===e.currentTarget&&(m.classList.add("is-hidden"),r.classList.add("is-hidden"),document.body.style.overflow="")}document.querySelector(".modal-movie__close-button").addEventListener("click",(function(){document.body.style.overflow="",window.removeEventListener("keydown",g),p.removeEventListener("click",_),m.classList.add("is-hidden"),r.classList.add("is-hidden"),document.body.style.overflow="",u.innerHTML=""})),a("j7E5r");
//# sourceMappingURL=library.f56bd21b.js.map
