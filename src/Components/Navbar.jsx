import React from 'react'
import { routes } from './utils/Routes'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

return (
<nav className='h-screen flex justify-center items-center'>
    {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
    {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    <Link to={routes.home} > <h4>Home</h4> </Link>
    <Link to={routes.contact} > <h4>Contact</h4> </Link>
    <Link to={routes.favs} > <h4>Favs</h4> </Link>

    
    <button className='bg-slade-200 px-4 py-2 rounded hober:bg-slate-300'>Change theme</button>
</nav>
)
}

export default Navbar
