import React , {useState} from  'react';
import { CartProvider, useCart } from "react-use-cart";
import { Card } from 'reactstrap';
import storeItems from '../data/items.json';
//import Demo from './BinSelectors/Demo';
import GlassBinSelector, {GlassBinSelector2} from './BinSelectors/GlassBinSelector';


const SelectBins = ({services, previousStep, nextStep}) => {

    const [servicesConfirmed, setServicesConfirmed ] = useState({});

    function containsCategory(categoryToFind) {
        return function(element) {
            return element.category === categoryToFind
        }
    }

    return (
        <div>
            <h2>Bin Selector Component</h2>
            <p>Best to be only able to add one service at a time, since this would be the norm and simplify everything...</p>
            <h4>services should be added with material design accordion or similar</h4>
            <p>{JSON.stringify(services)}</p> 
            
            <CartProvider>
            {services && services.hasOwnProperty("glass") && services.glass === true && <GlassBinSelector storeItems={storeItems.filter(containsCategory("glass"))} />}
            <Cart />
           </CartProvider >
             <hr/>
             {/* <Demo />  */}
             
             <hr/>

            <p><button onClick={previousStep}>Previous Step</button></p>
            <p><button onClick={nextStep}>Next Step</button></p>

        </div>
    );
};




function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
    } = useCart();
  
    if (isEmpty) return <p>Your cart is empty</p>;
  
    return (
      <>
        <h1>Cart ({totalUniqueItems})</h1>
  
        <ul>
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
        </ul>
      </>
    );
  }



export default SelectBins;