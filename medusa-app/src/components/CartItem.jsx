import React from 'react';

function CartItem({ id, title, image, count, price }) {
  return (
    <div class="bg-main flex cont py-6 px-6">
      <img src={image} class="cart-item-img bg-img-card" />
      <h2 class="color-white py-6 px-6">{title}</h2>
      <p>{price} ар.</p>
      <p>{count}</p>
    </div>
  );
}

export default CartItem;
