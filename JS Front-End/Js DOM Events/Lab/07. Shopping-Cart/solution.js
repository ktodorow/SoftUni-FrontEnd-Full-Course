function solve() {
   const addProductElements = document.querySelectorAll('.shopping-cart .product .product-add button.add-product')
   const textAreaElement = document.querySelector('textarea');
   const checkoutElement = document.querySelector('.checkout');
   let boughtProducts = new Set();
   let total = 0;

   const checkoutEventListener = (e) => {
      textAreaElement.value += `You bought ${Array.from(boughtProducts).join(', ')} for ${total.toFixed(2)}.`
      for (const addButton of addProductElements) {
         addButton.setAttribute('disabled', 'disabled')
      }
      
      checkoutElement.removeEventListener('click', checkoutEventListener);
   };

   for (const addButton of addProductElements) {
      const productElement = addButton.parentElement.parentElement;
      const productName = productElement.querySelector('.product-details .product-title').textContent;
      const productPrice = productElement.querySelector('.product-line-price').textContent;
      
      addButton.addEventListener('click', (e) => {
         textAreaElement.value += `Added ${productName} for ${Number(productPrice).toFixed(2)} to the cart.\n`;            
         total += Number(productPrice);
         boughtProducts.add(productName);
      });
   }

   checkoutElement.addEventListener('click', checkoutEventListener);
}