import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/Slices/cartSlice';
const BuyCard = ({ id, title, image, desc, price }) => {
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      title,
      image,
      price,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="buy-card bg-main">
      <img src={image} className="bg-img-card" />
      <h1 class="color-white auto-font">{title}</h1>
      <p>{desc}</p>
      <div class="card-block-bottom">
        <div class="card-price">{price} ар.</div>
        <div class="btn bg-primary" onClick={onClickAdd}>
          <span>Добавить</span>
        </div>
      </div>
    </div>
  );
};
export default BuyCard;
