import { Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Utils/Routes";
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import Contact from './Pages/Contact';
import Favs from './Pages/Favs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;



