const t=document.querySelectorAll(".products_button"),e=document.querySelector(".cart_number"),o=document.querySelector(".cart_button");let c=JSON.parse(localStorage.getItem("cart"))||[],r=c.length;function n(t){const o=t.target.closest(".products_box"),n={name:o.querySelector(".products_name").textContent,price:o.querySelector(".products_price").textContent,img:o.querySelector(".products_img").src};c.push(n),localStorage.setItem("cart",JSON.stringify(c)),r++,r>0&&(e.style.display="block",e.textContent=r),l()}function l(){0===c.length?o.style.pointerEvents="none":o.style.pointerEvents="auto"}o.addEventListener("click",(()=>{window.location.href="../partials/cart.html"})),0===r?e.style.display="none":(e.style.display="block",e.textContent=r),l(),t.forEach((t=>{t.addEventListener("click",n)}));document.querySelectorAll(".products_img").forEach((t=>{t.addEventListener("mouseenter",(()=>{t.src="https://optim.tildacdn.com/tild6463-6439-4633-a530-306265363236/-/format/webp/photo.png"})),t.addEventListener("mouseleave",(()=>{t.src="https://optim.tildacdn.com/tild3763-3565-4633-b037-346338653065/-/format/webp/PFVTYF.png"}))}));document.querySelectorAll(".products_item").forEach((t=>{t.addEventListener("click",(()=>{t.closest(".products_item")}))}));
//# sourceMappingURL=index.497def85.js.map
