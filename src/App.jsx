import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Contact from './Pages/Contact';
import Favs from './Pages/Favs';

function App() {
  return (
    <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={Detail} />
        <Route path="/contact" component={Contact} />
        <Route path="/favs" component={Favs} />
      
    </Routes>
  );
}

export default App;



