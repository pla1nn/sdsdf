// li click


const productsItems = document.querySelectorAll('.products_item');

productsItems.forEach(item => {
  item.addEventListener('click', () => {
    const itemClosest = item.closest('.products_item');
    const secondClass = itemClosest.classList[1];

    window.location.href = `../products/${secondClass}.html`;
  })
})