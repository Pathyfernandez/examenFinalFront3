import { Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import { routes } from './Components/utils/Routes';

function App() {
  return (

    <>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path={routes.home} element={<Home/>}/>
      <Route path={routes.contact} element={<Contact/>}/>
      <Route path={routes.favs} element={<Favs/>}/>
      <Route path={routes.detail} element={<Detail/>}/>
      
    </Routes>
      <Footer/>
    </div>
    
    
    </>
  );
}

export default App;



