import React , {useState} from  'react';

import { CartProvider, useCart } from "react-use-cart";
import { Card } from 'reactstrap';

import Demo from './BinSelectors/Demo';
import GlassBinSelector from './BinSelectors/GlassBinSelector';


const SelectBins = ({services, previousStep, nextStep}) => {

    const [servicesConfirmed, setServicesConfirmed ] = useState({});

    //we make sure that all the servicesConfirmed match all the services somehow

    return (
        <div>
            <h2>Bin Selector Component</h2>
            <p>Best to be only able to add one service at a time, since this would be the norm and simplify everything...</p>
            <h4>services should be added with material design accordion or similar</h4>
            <p>{JSON.stringify(services)}</p> 
            
            
            <CartProvider>
            {services && services.hasOwnProperty("glass") && services.glass === true && <GlassBinSelector/>}
            </CartProvider>
             <hr/>
             <Demo /> 
             <hr/>

            <p><button onClick={previousStep}>Previous Step</button></p>
            <p><button onClick={nextStep}>Next Step</button></p>

        </div>
    );
};








export default SelectBins;