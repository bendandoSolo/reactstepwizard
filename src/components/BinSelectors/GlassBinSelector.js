import React from 'react';
import { CartProvider, useCart } from "react-use-cart";

const GlassBinSelector = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();

    const glassProducts = [
        {
          id: 1,
          name: "Glass 240 Litre Bin",
          category: "glass",
          price: 7.50,
          quantity: 0
        },
        {
          id: 2,
          name: "Glass 360 Litre Bin",
          category: "glass",
          price: 8.50,
          quantity: 0
        },
      ];

    return (
        <div>
            <h2>Select Glass Bins</h2>
            {glassProducts.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                <div className='flex-row'>
                <button  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                <button  onClick={() => addItem(item)} >+</button>
                 </div>
              </div>
            ))}
             {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
            
        </div>
    );
};

export default GlassBinSelector;