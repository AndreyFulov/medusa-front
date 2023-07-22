import React from 'react';
import BuyCard from '../components/BuyCard';
import items from '../itemsOnSell.json';

const Buy = () => {
  return (
    <div className="buy-content-grid content py-6 px-6">
      {items.map((obj) => (
        <BuyCard
          id={obj.id}
          title={obj.title}
          image={obj.imageUrl}
          desc={obj.desc}
          price={obj.price}
        />
      ))}
    </div>
  );
};
export default Buy;
