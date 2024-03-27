import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { routes } from './Utils/Routes';




function App() {
  return (
    <Router>
      
          <div>
            
            
              <Route path={routes.home} exact component={Home} />
              <Route path={routes.detail} component={DentistDetail} />
              <Route path={routes.contact} component={Contact} />
              <Route path={routes.favs} component={Favorites} />
            
          
          </div>
      
    </Router>
  );
}

export default App;


