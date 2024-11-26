function solve() {
   let totalPrice = 0;
   let basket = [];
   let finalMessage = ''

   // Dealing with the 'add' buttons:
   const addButtonsElements = document.querySelectorAll('.add-product');
   for (const addButton  of addButtonsElements) {
      addButton.addEventListener('click', addToBasket);
   }

   function addToBasket(e) {
      const currentButton = e.currentTarget;
      const productElement = currentButton.parentNode.parentNode;
      const productName = productElement.querySelector('.product-details .product-title').textContent;
      const productPrice = Number(productElement.querySelector('.product-line-price').textContent);

      totalPrice += productPrice;
      if (!basket.includes(productName)) {
         basket.push(productName);
      }

      finalMessage += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      console.log(basket);
      console.log(totalPrice);
   }

   // Dealing with the 'checkout' button:
   const checkoutButtonElement = document.querySelector('.checkout');
   checkoutButtonElement.addEventListener('click', checkout);
   
   function checkout(e) {
      const textAreaElement = document.querySelector('textarea');
      finalMessage += `You bought ${basket.join(', ')} for ${totalPrice.toFixed(2)}.`;
      textAreaElement.value = finalMessage;

      for (const addButton  of addButtonsElements) {
         addButton.disabled = true;
      }

      checkoutButtonElement.disabled = true;
   }
}