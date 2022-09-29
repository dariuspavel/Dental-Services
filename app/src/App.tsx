import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginView } from './LoginView';
import { ProductView } from './ProductView';
import { TokenContext } from './TokenContext';
import { FrontView } from './Frontpage/TSX/FrontView';

function App() {

  // const [token, setToken] = useState("");
  
  return (
    <>

    <FrontView/>

     {/* <TokenContext.Provider value={token}>
       <LoginView  setToken={setToken}/>
        <ProductView/>
      </TokenContext.Provider> */}

      
    </>
  );
}

export default App;
