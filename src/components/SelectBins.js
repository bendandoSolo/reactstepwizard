import React , {useState} from  'react';

const SelectBins = ({services, previousStep, nextStep}) => {

    const [servicesConfirmed, setServicesConfirmed ] = useState({});

    //we make sure that all the servicesConfirmed match all the services somehow




    return (
        <div>
            <h2>Bin Selector Component</h2>
            <p>Best to be only able to add one service at a time, since this would be the norm and simplify everything...</p>
            <p>{JSON.stringify(services)}</p> 
            
            <p>services should be added with material design accordion or similar</p>
            
            {services && services.hasOwnProperty('glass') && services.glass === true && <GlassBinSelector/>}
            
            <p><button onClick={previousStep}>Previous Step</button></p>
            <p><button onClick={nextStep}>Next Step</button></p>
        </div>
    );
};

const GlassBinSelector = () => {
    return (
        <>
        <h2>Glass</h2>
        <p>Form that we can change the values of basically</p>
        <label>Item 1</label>
        <br/>
        <label>Item 2</label>
        <br/>
        <label>Item 3</label>
        <br/>
        </>
    );
}





export default SelectBins;