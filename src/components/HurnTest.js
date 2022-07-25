import React, {useState} from 'react';
import StepWizard from "react-step-wizard";

//import PostcodeSelector from './PostcodeSelector';
import SelectService from './SelectService';
import SelectBins from './SelectBins';
import Page1 from './Page1';
import Page2 from './Page2';


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
    //alert("we want to go to page ", page);
    alert("pass to wizard" + JSON.stringify(values) + page);
    NavigateTo(page);
    setSevices(values);
  } 

  const NavigateTo = page => {
      //alert("want ot go to: " +page);
      SW.goToStep(2);

  }
 

    return (
        <>
          <h3>Here we begin testing how we will do it for hurn</h3>
          <p>Firstly stepping back and forth through the pages...</p>  
          <p>{JSON.stringify(services)}</p>
          <StepWizard 
            instance={setInstance}
            >
            {/* <PostcodeSelector GoTo = {GoTo}/> */}
            <SelectService  GoTo = {GoTo} services={services}/>
            <SelectBins services={services} />
            <Page1 />
            <Page2 />
          </StepWizard>
          {Object.entries(services).map( 
                 (data) => <p>{JSON.stringify(data)} </p>
          )}
          
        </>
    );
};

export default HurnTest;