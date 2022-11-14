import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';

function App() {
  return (
    <div className="app">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}>
 
      </Route>
    </Routes>
    </BrowserRouter>

      
    </div>
  );
}

export default App;
