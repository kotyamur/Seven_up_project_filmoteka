!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,i.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i),i("b7ONl"),i("4s6iC"),i("aKbc4"),i("6ZqVT"),i("32ZrB");var l=i("ekhQY"),r=i("jcFG7"),a={btnWatched:document.querySelector(".watched"),btnQueue:document.querySelector(".queue"),films:document.querySelector(".films"),plug:document.querySelector(".plug")};function s(){a.films.innerHTML="";var e=JSON.parse(localStorage.getItem("watched"));null!==e&&0!==e.length?(a.plug.style.display="none",a.films.innerHTML=(0,l.default)(e.slice(0,20)),(0,r.renderLibraryPagination)("watched",(function(e){a.films.innerHTML=(0,l.default)(e)}))):(a.plug.style.display="flex",a.films.innerHTML=""),a.btnQueue.classList.remove("is-active"),a.btnWatched.classList.add("is-active")}a.btnWatched.addEventListener("click",s),a.btnQueue.addEventListener("click",(function(){a.films.innerHTML="";var e=JSON.parse(localStorage.getItem("queue"));null!==e&&0!==e.length?(a.plug.style.display="none",a.films.innerHTML=(0,l.default)(e.slice(0,20)),(0,r.renderLibraryPagination)("queue",(function(e){a.films.innerHTML=(0,l.default)(e)}))):(a.plug.style.display="flex",a.films.innerHTML="");a.btnQueue.classList.add("is-active"),a.btnWatched.classList.remove("is-active")})),s(),i("hZnVp")}();
//# sourceMappingURL=library.36b75430.js.map
