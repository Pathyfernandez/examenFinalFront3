// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Routes/Contact';
import Contact from './Routes/Detail';
import DentistDetail from './Routes/Favs';
import Favorites from './Routes/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacto" component={Contact} />
        <Route path="/dentista/:id" component={DentistDetail} />
        <Route path="/favs" component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;

