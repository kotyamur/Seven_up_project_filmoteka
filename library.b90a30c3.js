!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,i.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i),i("b7ONl"),i("4s6iC"),i("aKbc4"),i("6ZqVT"),i("32ZrB");var l=i("ekhQY"),a=i("jcFG7"),r={btnWatched:document.querySelector(".watched"),btnQueue:document.querySelector(".queue"),films:document.querySelector(".films"),plug:document.querySelector(".plug"),pagination:document.getElementById("pagination")};function s(){r.films.innerHTML="";var e=JSON.parse(localStorage.getItem("watched"));null!==e&&0!==e.length?(r.plug.style.display="none",r.films.innerHTML=(0,l.default)(e.slice(0,20)),(0,a.renderLibraryPagination)("watched",(function(e){r.films.innerHTML=(0,l.default)(e)}))):(r.plug.style.display="flex",r.films.innerHTML="",r.pagination.style.display="none"),r.btnQueue.classList.remove("is-active"),r.btnWatched.classList.add("is-active")}r.btnWatched.addEventListener("click",s),r.btnQueue.addEventListener("click",(function(){r.films.innerHTML="";var e=JSON.parse(localStorage.getItem("queue"));null!==e&&0!==e.length?(r.plug.style.display="none",r.films.innerHTML=(0,l.default)(e.slice(0,20)),(0,a.renderLibraryPagination)("queue",(function(e){r.films.innerHTML=(0,l.default)(e)}))):(r.plug.style.display="flex",r.films.innerHTML="",r.pagination.style.display="none");r.btnQueue.classList.add("is-active"),r.btnWatched.classList.remove("is-active")})),s(),i("hZnVp"),i("bX5OU")}();
//# sourceMappingURL=library.b90a30c3.js.map
