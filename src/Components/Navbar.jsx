import React from 'react'
import { routes } from './utils/Routes'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    

return (
<nav>
    {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    <Link to={routes.home} > <h4>Home</h4> </Link>
    <Link to={routes.contact} > <h4>Contact</h4> </Link>
    <Link to={routes.favs} > <h4>Favs</h4> </Link>

    
    <button>Change theme</button>
</nav>
)
}

export default Navbar