// import Home from './Home';
// import Api from './cmp/Api';
import  './App.css';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';

// import Create from './cmp/Create';
// import Update from './cmp/Update';
import Practice from './cmp/Practice';
import NavBar from './cmp/NavBar';
import Alert from './cmp/Alert';
function App()
{
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>
  {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#0e376e"
      showAlert("Dark mood has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light mood has been enabled","success")
    }
  }
  return (
    <>
    
    <div className="App">
     <NavBar mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <Practice showalert={showAlert} heading="Textarea" mode={mode} />
  {/* <Route path="/Api" component={Api}/> */}
  {/* <Routes> */}
      {/* <Route exact path="/" Component={App} /> */}
       {/* <Route exact path="/Create" element={<Create/>}/> */}
       {/* <Route path="/Home" element={<Home/>} /> */}
       {/* <Route path="/Api" exact element={<Api/>} /> */}
       {/* <Route exact path="/Update/:id" 
       render={props=>(<Update {...props} />
       )}
       element={<Update  />}
      >
        </Route> */}
         {/* <Route exact path='/Update/:id' */}
         {/* render={props=>(<Update {...props}/>)} element={<Update></Update>} > */}
        
         {/* </Route> */}
         {/* </Routes>  */}
        
        
    </div>
    
    
    
    </>
  );
}
export default App;
