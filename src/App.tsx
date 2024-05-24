import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import './App.css';
import { HomePageView } from './pages/HomePage';
import { RegisterPage} from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { TokenProvider } from "./pages/TokenContext";
import { AboutPage } from "./pages/About";

function App() {

  
  return (
    <>
	
		<TokenProvider>
      		<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePageView/>}/>
					<Route path="/register" element={<RegisterPage/>}/>
					<Route path="/login" element={<LoginPage/>}/>
					<Route path="/about" element={<AboutPage/>}/>
				</Routes>
			</BrowserRouter>
		</TokenProvider>

    </>
  );
}

export default App;
