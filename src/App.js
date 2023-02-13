import React from 'react';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home'
import About from './components/about'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
