import React from 'react'
import { Link, NavLink} from 'react-router-dom'
import {auth} from '../firebase';
import { withRouter } from 'react-router-dom';

const Navbar = (props) => {

    const cerrarSesion = () =>{
        auth.signOut()
                    .then( ()=>{
                        props.history.push('/login');
                    } )
    }

    return (
        <div className="navbar navbar-dark bg-dark">
         {
            props.firebaseUser !==null ? ( 
            <NavLink className="nav-link" to="/admin">Admin</NavLink>
            ) : null
         }
         
         
         
     


         <div className="d-flex">
            <NavLink className="nav-link" to="/">Inicio</NavLink>  

            {
                  props.firebaseUser !==null ? (
                    <button className="btn btn-dark"
                        onClick={ ()=>cerrarSesion() }
                    >
                        Cerrar Sesión
                    </button>
                   ) : (
                    <NavLink className="nav-link" to="/login">login</NavLink>
                  )
            }

            
           
         </div>



        </div>
    )
}

export default withRouter(Navbar)
