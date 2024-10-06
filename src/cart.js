// document.addEventListener('DOMContentLoaded', () => {
//   // Your code goes here
//   renderCartItems();
// });

const cartNumber = document.querySelector('.cart_number');
const cartButton = document.querySelector('.cart_button');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let itemCount = cart.length;

updateCartNumber();
checkCart(); 
renderCartItems();

function updateCartNumber() {
  if (itemCount > 0) {
    cartNumber.style.display = 'block';
    cartNumber.textContent = itemCount;
  } else {
    cartNumber.style.display = 'none';
  }    
}

function checkCart() {
  if (cart.length === 0) {
    cartButton.style.pointerEvents = 'none';
  } else {
    cartButton.style.pointerEvents = 'auto';
  }  
}

function renderCartItems() {
  const cartContainer = document.querySelector('.cart');
  cartContainer.innerHTML = '';
  
  let cartCountMap = new Map();
  
  cart.forEach(item => {
    if (cartCountMap.has(item.name)) {
      cartCountMap.set(item.name, {
        ...item,
        count: cartCountMap.get(item.name).count + 1
      });
    } else {
      cartCountMap.set(item.name, { ...item, count: 1 });
    }
  });

  cartCountMap.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart_item');
    cartItem.dataset.name = item.name;
    cartItem.innerHTML = `
      <img src="${item.img}" alt="" class="cart_img">
      <div class="cart_box">
        <p class="cart_name">${item.name}</p>
        <p class="cart_price">${item.size}</p>
      </div>  
      <div class="cart_count_box">
        <button type="button" class="cart_count_button minus">-</button>
        <p class="cart_count">${item.count}</p>
        <button type="button" class="cart_count_button plus">+</button>
      </div>  
      <p class="cart_price">${item.price}</p>
      <button type="button" class="cart_delete_button">
        <svg class='close_icon' viewBox="0 0 32 32">
          <path d="M29.835 0l-13.835 13.882-13.835-13.882-2.119 2.112 13.842 13.888-13.842 13.889 2.119 2.111 13.835-13.881 13.835 13.881 2.119-2.111-13.842-13.889 13.842-13.888z"></path>
        </svg>  
      </button>  
    `;

    cartContainer.appendChild(cartItem);
  });

  const deleteBtns = document.querySelectorAll('.cart_delete_button');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.cart_item');
      const itemName = item.dataset.name;

      cart = cart.filter(cartItem => cartItem.name !== itemName);
      localStorage.setItem("cart", JSON.stringify(cart));

      itemCount = cart.length; 
      renderCartItems();
      updateCartNumber();
      checkCart();
    });  
  });

  const decrementBtns = document.querySelectorAll('.minus');
  const incrementBtns = document.querySelectorAll('.plus');

  decrementBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.cart_item');
      const itemName = item.dataset.name;

      const itemIndex = cart.findIndex(cartItem => cartItem.name === itemName);
      if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        if (cart.filter(cartItem => cartItem.name === itemName).length === 0) {
          item.remove();
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));

      itemCount = cart.length; 
      renderCartItems();
      updateCartNumber();
      checkCart();
    });
  });

  incrementBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.cart_item');
      const itemName = item.dataset.name;

      const itemToAdd = cart.find(cartItem => cartItem.name === itemName);
      if (itemToAdd) {
        cart.push(itemToAdd); 
        localStorage.setItem("cart", JSON.stringify(cart));
      }

      itemCount = cart.length; 
      renderCartItems();
      updateCartNumber();
      checkCart();
    });
  });
}


function checkCart() {
  if (cart.length === 0) {
    window.location.href = './index.html';
  }
}
