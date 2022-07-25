import React from 'react';
import StepWizard from "react-step-wizard";

//import PostcodeSelector from './PostcodeSelector';
import SelectService from './SelectService';
import Page1 from './Page1';
import Page2 from './Page2';


const HurnTest = () => {

  const GoTo = pageNO => {
    alert("we want to go to page ", pageNO);
  
  
  } 

    return (
        <>
          <h3>Here we begin testing how we will do it for hurn</h3>
          <p>Firstly stepping back and forth through the pages...</p>  
          <StepWizard>
            {/* <PostcodeSelector GoTo = {GoTo}/> */}
            <SelectService />
            <Page1 />
            <Page2 />
          </StepWizard>
          <p>Navigation between steps...can be done outside steps</p>
          
        </>
    );
};

export default HurnTest;