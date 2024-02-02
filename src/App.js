import React ,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert=(msg,type)=>{
     setAlert({
      msg:msg,
      type:type
     })
     setTimeout(()=>{
       setAlert(null);
     },4000)
  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor='#03152f'
      let color = document.getElementById("head");
      color.style.color="white";
      showAlert("Dark mode is enable","success");
    }
    else{
      setMode ("light");
      document.body.style.backgroundColor='white'
      let color = document.getElementById("head");
      color.style.color="black";
      showAlert("Light mode is enable","success")
    }
  }
  return (
  <>
  <Router>
  <Navbar title="TextUtils" home="Home" mode = {mode} toggleMode= {toggleMode} ></Navbar>
  <Alert alert={alert}/>
  <div className='container'>
  <Switch>
          {/* <Route exact path="/about">
            // {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/contact"> */}
            {/* <Contact/> */}
          {/* </Route> */} 
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading ="Enter text for analyse"/>
          </Route>
        </Switch>
        </div>
  </Router>
  </>
  );
}

export default App;
