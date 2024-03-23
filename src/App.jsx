import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home'; 
import Contact from './Routes/Contact'; 
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/dentista/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
    </Router>
  );
}


export default App;


