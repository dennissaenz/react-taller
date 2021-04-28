import React from 'react'
import { Link, NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/">Admin</NavLink>
         
         <div className="d-flex">
            <NavLink className="nav-link" to="/">Inicio</NavLink>
            <NavLink className="nav-link" to="/admin">Admin</NavLink>
            <NavLink className="nav-link" to="/login">login</NavLink>
         </div>



        </div>
    )
}

export default Navbar
