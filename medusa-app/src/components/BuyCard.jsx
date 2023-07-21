import React from 'react';

const BuyCard = ({ title, image, desc, price }) => {
  return (
    <div className="buy-card bg-main">
      <img src={image} className="bg-img-card" />
      <h1 class="color-white auto-font">{title}</h1>
      <p>{desc}</p>
      <div class="card-block-bottom">
        <div class="card-price">{price} ар.</div>
        <div class="btn bg-primary">
          <span>Добавить</span>
        </div>
      </div>
    </div>
  );
};
export default BuyCard;
