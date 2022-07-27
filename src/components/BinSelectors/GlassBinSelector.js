import React from 'react';
import { CartProvider, useCart } from "react-use-cart";

export const GlassBinSelector2 = () => {
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
          quantity: 123
        },
        {
          id: 2,
          name: "Glass 360 Litre Bin",
          category: "glass",
          price: 8.50,
          quantity: 123
        },
      ];

    return (
        <div>
            <h2>Select Glass Bins</h2>
            {glassProducts.map((item) => (
              <div key={item.id}>
                <p>{item.name} {}</p>
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

const GlassBinSelector = ({storeItems}) => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        addItem,
      } = useCart();

   function filterById(id) {
    return function(element) {
        return element.id === id;
    }
}

   const getQuantityById = id => {
       return items.find(filterById(id)).quantity;
   } 

   //const getItemById


  return (
    <>
       <h3>Glass Bin Selector</h3>
       <p>starts with no items in the cart but showing available items...</p>
       {storeItems.map(item => (
                    <div key={item.id}>
                    <p key={item.id}>{item.name}</p>
                <div className='flex-row'>
                <button
              onClick={() => updateItemQuantity(item.id, getQuantityById(item.id) - 1)}
            >
              -
            </button>
                <span>{getQuantityById(item.id)}</span>
                <button  onClick={() => addItem(item)}>+</button>
                 </div>
                
                 <button onClick={() => {getQuantityById(item.id)}}>Get Single Quantity</button>
                </div>
            ))}
    </>
  )

  



}




export default GlassBinSelector;