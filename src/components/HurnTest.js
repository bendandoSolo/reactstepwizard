import React, {useState} from 'react';
import StepWizard from "react-step-wizard";

//import PostcodeSelector from './PostcodeSelector';
import SelectService from './SelectService';
import Page1 from './Page1';
import Page2 from './Page2';


const HurnTest = () => {

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
  } 

  const NavigateTo = page => {
      //alert("want ot go to: " +page);
      SW.goToStep(2);

  }
 

    return (
        <>
          <h3>Here we begin testing how we will do it for hurn</h3>
          <p>Firstly stepping back and forth through the pages...</p>  
          <StepWizard 
            instance={setInstance}
            >
            {/* <PostcodeSelector GoTo = {GoTo}/> */}
            <SelectService  GoTo = {GoTo}/>
            <Page1 />
            <Page2 />
          </StepWizard>
          <p>Navigation between steps...can be done outside steps</p>
          
        </>
    );
};

export default HurnTest;