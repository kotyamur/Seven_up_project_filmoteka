!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o("b7ONl"),o("4s6iC"),o("aKbc4"),o("6ZqVT"),o("32ZrB"),o("ekhQY");var s=o("jcFG7");function i(e){return e.map((function(e){var t=e.poster_path,n=e.original_title,a=(e.vote_average,e.release_date),o=e.title,s=e.id,i=e.genres,l=[],c="https://image.tmdb.org/t/p/w500/",d=String(a).slice(0,4);return null===t&&(c="https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg",t=""),""!==a&&a||(d="No information"),0===i.length&&l.push("No information"),i.map((function(e){l.push(e.name),l.length>2&&(l=l.slice(0,2)).push("Other")})).join(", "),'<li class="films__item" data-id='.concat(s,'>\n          <a href="" class="films__item-link">\n            <div class="poster__thumb">\n              <img src="').concat(c).concat(t,'" loading="lazy" alt="').concat(n,'" class="poster__foto" />\n            </div>\n              <div class="poster__about">\n                <p class="poster__title">').concat(o,'</p>\n                  <div class="poster__description">\n                <p class="poster__genre">').concat(l,'</p>\n                <p class="poster__year">').concat(d,"</p>\n                \n                </div>\n              </div>\n\n          </a>\n        </li>")})).join("")}var l={btnWatched:document.querySelector(".watched"),btnQueue:document.querySelector(".queue"),films:document.querySelector(".films"),plug:document.querySelector(".plug"),pagination:document.getElementById("pagination")};function c(){l.films.innerHTML="";var e=JSON.parse(localStorage.getItem("watched"));l.films.classList.remove("queue"),l.films.classList.add("watched"),null!==e&&0!==e.length?(l.plug.style.display="none",l.films.innerHTML=i(e.slice(0,20)),(0,s.renderLibraryPagination)("watched",(function(e){l.films.innerHTML=i(e)}))):(l.plug.style.display="flex",l.films.innerHTML="",l.pagination.style.display="none"),l.btnQueue.classList.remove("is-active"),l.btnWatched.classList.add("is-active")}l.btnWatched.addEventListener("click",c),l.btnQueue.addEventListener("click",(function(){l.films.innerHTML="";var e=JSON.parse(localStorage.getItem("queue"));l.films.classList.remove("watched"),l.films.classList.add("queue"),null!==e&&0!==e.length?(l.plug.style.display="none",l.films.innerHTML=i(e.slice(0,20)),(0,s.renderLibraryPagination)("queue",(function(e){l.films.innerHTML=i(e)}))):(l.plug.style.display="flex",l.films.innerHTML="",l.pagination.style.display="none");l.btnQueue.classList.add("is-active"),l.btnWatched.classList.remove("is-active")})),c();var d=o("8nrFW"),r=o("b7ONl"),u=document.querySelector(".films"),m=document.querySelector(".modal-movie"),p=document.querySelector(".modal__container"),f=document.querySelector("[data-backdrop]"),v=document.querySelector(".backdrop"),g=document.querySelector(".films"),_="https://image.tmdb.org/t/p/w500",y=new(0,r.default);function b(e){localStorage.removeItem("watched"),"Escape"===e.code&&(f.classList.add("is-hidden"),m.classList.add("is-hidden"),document.body.style.overflow="")}function h(e){e.target===e.currentTarget&&(f.classList.add("is-hidden"),m.classList.add("is-hidden"),document.body.style.overflow="")}u.addEventListener("click",(function(t){if(t.preventDefault(),"IMG"!==t.target.nodeName)return;document.body.style.overflow="hidden",window.addEventListener("keydown",b),v.addEventListener("click",h),m.classList.remove("is-hidden"),f.classList.remove("is-hidden");var n=t.target.closest("li").dataset.id;console.log(n);var a=g.classList.contains("watched")?"watched":"queue",o=localStorage.getItem(a),s=(o=JSON.parse(o)).find((function(e){return Number(n)===e.id}));y.movieToSave=s,i=s,l=i.poster_path,c=i.original_title,r=i.title,u=i.id,L=i.vote_average,S=i.vote_count,w=i.genres,q=i.overview,N=i.popularity,x=w.map((function(e){return e.name})).join(", "),O='\n    <img\n        class="modal__image"\n        src="'.concat(l?_+l:"https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg",'"\n        alt="').concat(r||"Image",'"\n        width="240"\n        height="357"\n      />\n      <div class="modal__info-box">\n        <p class="modal__title">').concat(r||"No information",'</p>\n        <div class="modal__features-box">\n          <div class="modal__features-issues">\n            <p class="modal__keys">Vote / Votes</p>\n            <div class="modal__values-box">\n              <p class="modal__value-numbers modal__value-numbers--accent">').concat(L?L.toFixed(1):"---",'</p>\n              <span class="modal__slash">/</span>\n              <p class="modal__value-numbers modal__value-numbers--simple">').concat(S||"---",'</p>\n            </div>\n          </div>\n          <div class="modal__features-issues">\n            <p class="modal__keys">Popularity</p>\n            <p class="modal__value-numbers">').concat(N?N.toFixed(1):"---",'</p>\n          </div>\n          <div class="modal__features-issues">\n            <p class="modal__keys">Original Title</p>\n            <p class="modal__value-text modal__value--main-text">').concat(c||"No information",'</p>\n          </div>\n          <div class="modal__features-issues">\n            <p class="modal__keys">Genre</p>\n            <p class="modal__value-text">').concat(x||"No information",'</p>\n          </div>\n        </div>\n        <p class="modal__about-title">About</p>\n        <p class="modal__about-text">').concat(q||"No information",'</p>\n        <div class="modal__bottom-thumb">\n          <div class="modal__btn-box">\n          <button class="modal__btn" type="button" data-type="watched" data-id=').concat(u,'>add to watched</button>\n          <button class="modal__btn" type="button" data-type="queue" data-id=').concat(u,">add to queue</button>\n          </div>\n        </div>\n     \n      </div>"),p.innerHTML=O,function(e){var t=document.querySelector('button[data-type="watched"]'),n=document.querySelector('button[data-type="queue"]'),a=localStorage.getItem("watched");a&&(a=JSON.parse(a)).map((function(e){return e.id})).indexOf(Number(e))>=0&&(t.classList.add("active"),t.style.backgroundColor="#ff6b08",t.textContent="remove from watched");var o=localStorage.getItem("queue");o&&(o=JSON.parse(o)).map((function(e){return e.id})).indexOf(Number(e))>=0&&(n.classList.add("active"),n.style.backgroundColor="#ff6b08",n.textContent="remove from queue")}(u),function(){var t=document.querySelector('button[data-type="watched"]'),n=document.querySelector('button[data-type="queue"]');function a(n){n.preventDefault(),t.classList.toggle("active"),s(),function(t){var n=y.movieToSave,a=[],o=localStorage.getItem("watched");if(!o)return a.push(n),void localStorage.setItem("watched",JSON.stringify(a));var s,i=(o=JSON.parse(o)).map((function(e){return e.id})).indexOf(Number(t));i<0?((s=a).push.apply(s,e(d)(o).concat([n])),localStorage.setItem("watched",JSON.stringify(a))):(o.splice(i,1),a=o,localStorage.setItem("watched",JSON.stringify(a)));o.length<1&&localStorage.removeItem("watched")}(t.dataset.id)}function o(t){t.preventDefault(),n.classList.toggle("active"),function(t){var n=y.movieToSave,a=[],o=localStorage.getItem("queue");if(!o)return a.push(n),void localStorage.setItem("queue",JSON.stringify(a));var s,i=(o=JSON.parse(o)).map((function(e){return e.id})).indexOf(Number(t));i<0?((s=a).push.apply(s,e(d)(o).concat([n])),localStorage.setItem("queue",JSON.stringify(a))):(o.splice(i,1),a=o,localStorage.setItem("queue",JSON.stringify(a)));o.length<1&&localStorage.removeItem("queue")}(n.dataset.id),i()}function s(){t.classList.contains("active")?(t.textContent="remove from watched",t.style.backgroundColor="#ff6b08"):(t.textContent="add to watched",t.style.backgroundColor="#fff")}function i(){n.classList.contains("active")?(n.textContent="remove from queue",n.style.backgroundColor="#ff6b08"):(n.textContent="add to queue",n.style.backgroundColor="#fff")}t.addEventListener("click",a),n.addEventListener("click",o)}(),document.body.classList.add("no-scroll");var i,l,c,r,u,L,S,w,q,N,x,O})),document.querySelector(".modal-movie__close-button").addEventListener("click",(function(){document.body.style.overflow="",window.removeEventListener("keydown",b),v.removeEventListener("click",h),f.classList.add("is-hidden"),m.classList.add("is-hidden"),document.body.style.overflow="",p.innerHTML=""})),o("bX5OU")}();
//# sourceMappingURL=library.a78194bf.js.map
