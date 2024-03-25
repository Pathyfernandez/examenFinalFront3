import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { routes } from '../Utils/Routes';



function App() {
  return (
    <Router>
      
          <div>
            
            
              <Route path="/" exact component={Home} />
              <Route path="/dentist/:id" component={DentistDetail} />
              <Route path="/contact" component={Contact} />
              <Route path="/favs" component={Favorites} />
            
          
          </div>
      
    </Router>
  );
}

export default App;


