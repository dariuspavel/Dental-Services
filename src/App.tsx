import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import './App.css';
import { HomePageView } from './pages/HomePage';
import { RegisterPage} from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { TokenProvider } from "./pages/TokenContext";
import { AboutPage } from "./pages/About";
import { SignInPageView } from "./pages/SignInPage";

function App() {

  
  return (
    <>
	
		<TokenProvider>
      		<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePageView/>}/>
					<Route path="/register" element={<RegisterPage/>}/>
					<Route path="/login" element={<LoginPage/>}/>
					<Route path="/singin" element={<SignInPageView/>}/>
					<Route path="/about" element={<AboutPage/>}/>
					<Route path="/privacy" element={<AboutPage/>}/>
					<Route path="/terms&conditions" element={<AboutPage/>}/>

				</Routes>
			</BrowserRouter>
		</TokenProvider>

    </>
  );
}

export default App;
