import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import { RegisterPage} from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { TokenProvider } from "./pages/TokenContext";

function App() {

  
  return (
    <>

		<TokenProvider>
      		<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/register" element={<RegisterPage/>}/>
					<Route path="/login" element={<LoginPage/>}/>
				</Routes>
			</BrowserRouter>
		</TokenProvider>

    </>
  );
}

export default App;
