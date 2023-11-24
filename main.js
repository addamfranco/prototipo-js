const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let cart = [];

    function addItem(name, price) {
      const item = { name, price };
      cart.push(item);
      updateCart();
    }

    function updateCart() {
      cartItemsElement.innerHTML = '';
      let total = 0;

      cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
        cartItemsElement.appendChild(itemElement);

        total += item.price;
      });

      totalElement.textContent = total.toFixed(2);
    }