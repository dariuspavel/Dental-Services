import React from 'react';
import './App.css';
import { HomeView } from './Home/Tsx/Home';
import { LoginView } from './Login/Tsx/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterView } from './Register/Tsx/Register';
import { ErrorsView } from './Errors/Tsx/Errors';

function App() {
  
  return (
    <>

      <Router>
        <Routes>

          <Route path="/" element={<HomeView/>} /> 
          <Route path="/Login" element={<LoginView/>} />
          <Route path="/Register" element={<RegisterView/>} />
          <Route path="/*" element={<ErrorsView/>} />
          

        </Routes>
      </Router>

    </>
  );
}

export default App;
