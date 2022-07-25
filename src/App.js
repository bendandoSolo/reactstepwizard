import './App.css'
import Notes from './components/Notes'
// import Wizard from './components/BasicWizard'
//import Sample from './components/StyledWizard'
import HurnTest from './components/HurnTest'

function App() {
  return (
   <>
   <Notes/>
   <h3>Postcode selector removed from the wizard...</h3>
   <p>Hurn Recycling will work only for the following postcodes.  </p>
   <br/>
   <HurnTest />
   {/* <Sample/> */}
   <br/>
   {/* <Wizard /> */}
   </>
  );
}

export default App;
