import React, {useState} from 'react';
import StepWizard from "react-step-wizard";

//import PostcodeSelector from './PostcodeSelector';
import SelectService from './SelectService';
import SelectBins from './SelectBins';
import Page1 from './Page1';
import Page2 from './Page2';

import ItemsView from './ItemsView';


const HurnTest = () => {

  const [services, setSevices] = useState({}) //empty object of selected services

  const [state, updateState] = useState({
    form: {}
  });
 
  const setInstance = (SW) =>
    updateState({
      ...state,
      SW
    });

  const { SW, demo } = state;

  const GoTo = (page, values) => {
    NavigateTo(page);
    setSevices(values);
  } 

  const NavigateTo = page => {
      SW.goToStep(2);
  }
 

    return (
        <>
          
          <h6>Services: {JSON.stringify(services)}</h6>
          {Object.entries(services).map( 
                 (data) => <p>{JSON.stringify(data)} </p>
          )}
           < hr/>
          {/* <PostcodeSelector GoTo = {GoTo}/> */}
          <StepWizard 
            instance={setInstance}
            >
            <SelectService  GoTo = {GoTo} services={services}/>
            <SelectBins services={services} />
            <Page1 />
            <Page2 />
          </StepWizard>
          < hr/>
          <ItemsView />
          
        </>
    );
};

export default HurnTest;