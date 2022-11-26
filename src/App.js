import React, { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';
import RootScreen from './screen/RootScreen';

function App() {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    planType: "",
    email: "",
    mobile: "",
    address: "",
    address2: "",
    pincode: "",
    state: "",
    slider: 1,
    secondPageTick: false,
    thridPageCheckBox1: false,
    thridPageCheckBox2: false,
    thridPageCheckBox3: false,
    thridPageCheckBox4: false,
  })
  return (
    <div className="App">
      <ProgressBar count={count}/>
      <RootScreen count={count} setCount={setCount} formData={formData} setFormData={setFormData} />   
         
    </div>
  );
}

export default App;
