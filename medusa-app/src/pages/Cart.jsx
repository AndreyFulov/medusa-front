import React from 'react';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';

function Cart() {
  const items = useSelector((state) => state.cart.items);
  return (
    <div class="content group bg-main rounded-3xl border-2 border-gray-500 py-6 px-6">
      <h1 class="color-white">Корзина</h1>
      {items.map((item) => (
        <CartItem {...item} />
      ))}
    </div>
  );
}

export default Cart;
