!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire9730;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequire9730=o);var r=document.querySelectorAll(".products_button"),c=document.querySelector(".cart_number"),l=document.querySelector(".cart_button"),i=JSON.parse(localStorage.getItem("cart"))||[],u=i.length;function d(e){var t=e.target.closest(".products_box"),n={name:t.querySelector(".products_name").textContent,price:t.querySelector(".products_price").textContent,img:t.querySelector(".products_img").src};i.push(n),localStorage.setItem("cart",JSON.stringify(i)),++u>0&&(c.style.display="block",c.textContent=u),s()}function s(){0===i.length?l.style.pointerEvents="none":l.style.pointerEvents="auto"}l.addEventListener("click",(function(){window.location.href="../cart.html"})),0===u?c.style.display="none":(c.style.display="block",c.textContent=u),s(),r.forEach((function(e){e.addEventListener("click",d)})),document.querySelectorAll(".products_img").forEach((function(e){e.addEventListener("mouseenter",(function(){e.src="https://optim.tildacdn.com/tild6463-6439-4633-a530-306265363236/-/format/webp/photo.png"})),e.addEventListener("mouseleave",(function(){e.src="https://optim.tildacdn.com/tild3763-3565-4633-b037-346338653065/-/format/webp/PFVTYF.png"}))})),document.querySelectorAll(".products_item").forEach((function(e){e.addEventListener("click",(function(){e.closest(".products_item")}))})),o("b89bF")}();
//# sourceMappingURL=index.dfa39994.js.map
