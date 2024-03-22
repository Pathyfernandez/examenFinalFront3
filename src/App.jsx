// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Routes/Home'; 
import Contact from './Routes/Contact'; 
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacto" component={Contact} />
        <Route path="/dentista/:id" component={Detail} />
        <Route path="/favs" component={Favs} />
      </Switch>
    </Router>
  );
}

export default App;


