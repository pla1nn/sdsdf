// CART
const buyBtn = document.querySelectorAll(".products_button");
const cartNumber = document.querySelector(".cart_number");
const cartButton = document.querySelector(".cart_button");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let itemCount = cart.length;

cartButton.addEventListener("click", () => {
  window.location.href = "../cart.html";
});

if (itemCount === 0) {
  cartNumber.style.display = 'none';
} else {
  cartNumber.style.display = 'block';
  cartNumber.textContent = itemCount; 
}

checkCart();

buyBtn.forEach(button => {
  button.addEventListener("click", addToCart);
});

function addToCart(e) {
  const productBox = e.target.closest('.products_box');
  const productName = productBox.querySelector(".products_name").textContent;
  const productPrice = productBox.querySelector(".products_price").textContent;
  const productImgSrc = productBox.querySelector(".products_img").src;

  const product = {
    name: productName,
    price: productPrice,
    img: productImgSrc
  };

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  itemCount++;
  updateCartNumber();
  checkCart(); 
  e.stopPropagation();
}

function updateCartNumber() {
  if (itemCount > 0) {
    cartNumber.style.display = 'block';
    cartNumber.textContent = itemCount;
  }
}

function checkCart() {
  if (cart.length === 0) {
    cartButton.style.pointerEvents = 'none';
  } else {
    cartButton.style.pointerEvents = 'auto';
  }
}









// hover on product


const productImgs = document.querySelectorAll('.products_img');

productImgs.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.src = 'https://optim.tildacdn.com/tild6463-6439-4633-a530-306265363236/-/format/webp/photo.png';
  })

  img.addEventListener('mouseleave', () => {
    img.src = 'https://optim.tildacdn.com/tild3763-3565-4633-b037-346338653065/-/format/webp/PFVTYF.png'
  })
})





