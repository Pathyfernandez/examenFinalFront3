import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Contact from './Pages/Contact';
import Favs from './Pages/Favs';



function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail.id" element={<Detail/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/favs" element={<Favs/>} />
      </Routes>
  )
        
      
  
}

export default App;



