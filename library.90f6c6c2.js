!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o("b7ONl"),o("4s6iC"),o("aKbc4"),o("6ZqVT"),o("32ZrB");var l=o("ekhQY"),i=o("jcFG7"),s={btnWatched:document.querySelector(".watched"),btnQueue:document.querySelector(".queue"),films:document.querySelector(".films"),plug:document.querySelector(".plug"),pagination:document.getElementById("pagination")};function d(){s.films.innerHTML="";var e=JSON.parse(localStorage.getItem("watched"));null!==e&&0!==e.length?(s.plug.style.display="none",s.films.innerHTML=(0,l.default)(e.slice(0,20)),(0,i.renderLibraryPagination)("watched",(function(e){s.films.innerHTML=(0,l.default)(e)}))):(s.plug.style.display="flex",s.films.innerHTML="",s.pagination.style.display="none"),s.btnQueue.classList.remove("is-active"),s.btnWatched.classList.add("is-active")}s.btnWatched.addEventListener("click",d),s.btnQueue.addEventListener("click",(function(){s.films.innerHTML="";var e=JSON.parse(localStorage.getItem("queue"));null!==e&&0!==e.length?(s.plug.style.display="none",s.films.innerHTML=(0,l.default)(e.slice(0,20)),(0,i.renderLibraryPagination)("queue",(function(e){s.films.innerHTML=(0,l.default)(e)}))):(s.plug.style.display="flex",s.films.innerHTML="",s.pagination.style.display="none");s.btnQueue.classList.add("is-active"),s.btnWatched.classList.remove("is-active")})),d();var c=o("8nrFW"),r=o("b7ONl"),u=document.querySelector(".films"),m=document.querySelector(".modal-movie"),f=document.querySelector(".modal__container"),p=document.querySelector("[data-backdrop]"),v=document.querySelector(".backdrop"),g="https://image.tmdb.org/t/p/w500",y=new(0,r.default);function b(e){localStorage.removeItem("watched"),"Escape"===e.code&&(p.classList.add("is-hidden"),m.classList.add("is-hidden"),document.body.style.overflow="")}function _(e){e.target===e.currentTarget&&(p.classList.add("is-hidden"),m.classList.add("is-hidden"),document.body.style.overflow="")}u.addEventListener("click",(function(t){if(t.preventDefault(),"IMG"!==t.target.nodeName)return;document.body.style.overflow="hidden",window.addEventListener("keydown",b),v.addEventListener("click",_),m.classList.remove("is-hidden"),p.classList.remove("is-hidden");var n=t.target.closest("li").dataset.id,a=localStorage.getItem("watched");o=(a=JSON.parse(a)).find((function(e){return Number(n)===e.id})),l=o.poster_path,i=o.original_title,s=o.title,d=o.id,r=o.vote_average,u=o.vote_count,h=o.genres,S=o.overview,L=o.popularity,w=h.map((function(e){return e.name})).join(", "),q='\n    <img\n        class="modal__image"\n        src="'.concat(l?g+l:"https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg",'"\n        alt="').concat(s||"Image",'"\n        width="240"\n        height="357"\n      />\n      <div class="modal__info-box">\n        <p class="modal__title">').concat(s||"No information",'</p>\n        <div class="modal__features-box">\n          <div class="modal__features-issues">\n            <p class="modal__keys">Vote / Votes</p>\n            <div class="modal__values-box">\n              <p class="modal__value-numbers modal__value-numbers--accent">').concat(r?r.toFixed(1):"---",'</p>\n              <span class="modal__slash">/</span>\n              <p class="modal__value-numbers modal__value-numbers--simple">').concat(u||"---",'</p>\n            </div>\n          </div>\n          <div class="modal__features-issues">\n            <p class="modal__keys">Popularity</p>\n            <p class="modal__value-numbers">').concat(L?L.toFixed(1):"---",'</p>\n          </div>\n          <div class="modal__features-issues">\n            <p class="modal__keys">Original Title</p>\n            <p class="modal__value-text modal__value--main-text">').concat(i||"No information",'</p>\n          </div>\n          <div class="modal__features-issues">\n            <p class="modal__keys">Genre</p>\n            <p class="modal__value-text">').concat(w||"No information",'</p>\n          </div>\n        </div>\n        <p class="modal__about-title">About</p>\n        <p class="modal__about-text">').concat(S||"No information",'</p>\n        <div class="modal__bottom-thumb">\n          <div class="modal__btn-box">\n          <button class="modal__btn" type="button" data-type="watched" data-id=').concat(d,'>add to watched</button>\n          <button class="modal__btn" type="button" data-type="queue" data-id=').concat(d,">add to queue</button>\n          </div>\n        </div>\n     \n      </div>"),f.innerHTML=q,function(e){var t=document.querySelector('button[data-type="watched"]'),n=document.querySelector('button[data-type="queue"]'),a=localStorage.getItem("watched");a&&(a=JSON.parse(a)).map((function(e){return e.id})).indexOf(Number(e))>=0&&(t.classList.add("active"),t.style.backgroundColor="#ff6b08",t.textContent="remove from watched");var o=localStorage.getItem("queue");o&&(o=JSON.parse(o)).map((function(e){return e.id})).indexOf(Number(e))>=0&&(n.classList.add("active"),n.style.backgroundColor="#ff6b08",n.textContent="remove from queue")}(d),function(){var t=document.querySelector('button[data-type="watched"]'),n=document.querySelector('button[data-type="queue"]');function a(n){n.preventDefault(),t.classList.toggle("active"),l(),function(t){var n=y.movieToSave,a=[],o=localStorage.getItem("watched");if(!o)return a.push(n),void localStorage.setItem("watched",JSON.stringify(a));var l,i=(o=JSON.parse(o)).map((function(e){return e.id})).indexOf(Number(t));i<0?((l=a).push.apply(l,e(c)(o).concat([n])),localStorage.setItem("watched",JSON.stringify(a))):(o.splice(i,1),a=o,localStorage.setItem("watched",JSON.stringify(a)));o.length<1&&localStorage.removeItem("watched")}(t.dataset.id)}function o(t){t.preventDefault(),n.classList.toggle("active"),function(t){var n=y.movieToSave,a=[],o=localStorage.getItem("queue");if(!o)return a.push(n),void localStorage.setItem("queue",JSON.stringify(a));var l,i=(o=JSON.parse(o)).map((function(e){return e.id})).indexOf(Number(t));i<0?((l=a).push.apply(l,e(c)(o).concat([n])),localStorage.setItem("queue",JSON.stringify(a))):(o.splice(i,1),a=o,localStorage.setItem("queue",JSON.stringify(a)));o.length<1&&localStorage.removeItem("queue")}(n.dataset.id),i()}function l(){t.classList.contains("active")?(t.textContent="remove from watched",t.style.backgroundColor="#ff6b08"):(t.textContent="add to watched",t.style.backgroundColor="#fff")}function i(){n.classList.contains("active")?(n.textContent="remove from queue",n.style.backgroundColor="#ff6b08"):(n.textContent="add to queue",n.style.backgroundColor="#fff")}t.addEventListener("click",a),n.addEventListener("click",o)}(),console.log("1"),document.body.classList.add("no-scroll");var o,l,i,s,d,r,u,h,S,L,w,q})),document.querySelector(".modal-movie__close-button").addEventListener("click",(function(){document.body.style.overflow="",window.removeEventListener("keydown",b),v.removeEventListener("click",_),p.classList.add("is-hidden"),m.classList.add("is-hidden"),document.body.style.overflow="",f.innerHTML=""})),o("hZnVp"),o("bX5OU")}();
//# sourceMappingURL=library.90f6c6c2.js.map
