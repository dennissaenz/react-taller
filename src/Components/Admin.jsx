import React from 'react'
import {auth} from '../firebase';
import { withRouter } from 'react-router-dom';

const Admin = (props) => {

        const [user, setUser] = React.useState(null);

       

    React.useEffect( ()=>{
        var user = auth.currentUser;

        if (auth.currentUser)
        {
            console.log("existe un usuario logueado en el sistema");
            setUser(auth.currentUser);  
        }else{
            console.log("NO existe un usuario logueado en el sistema");
            props.history.push('/login');
        }

    } );

    return (
        <div>
            <h2>    
                    ruta protegida!
                    <hr/>
                sección del admin
                {
                    user && (
                        <div>
                            <h3>{user.email}</h3>
                            <h3>
                                {user.uid}
                            </h3>
                        </div>
                    )   
                }


            </h2>
        </div>
    )
}

export default withRouter(Admin)
