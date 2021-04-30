import React from 'react'
import { withRouter } from 'react-router-dom';
import {db, auth} from '../firebase';

const Login = (props) => {

    const [email, setEmail]             = React.useState('');
    const [pass, setPass]               = React.useState('');
    const [error, setError]             = React.useState(''); 
    const [esRegistro, setEsRegistro]   = React.useState(true); 

    const procesarDatos = e =>{
        e.preventDefault();

        if( !email.trim() )
        {
            console.log("datos vacios");
            setError("email vacío");
            return
        }

        if( !pass.trim() )
        {
            console.log("datos vacios");
            setError("pass vacío");
            return
        }

        if( pass.length<6 )
        {
            console.log("6 o más carácteres");
            setError("6 o más carácteres");
            return
        }

       
   if(esRegistro){
       register()
   }else{
        Login()
   }

    }//procesarDatos



const register = React.useCallback(  async()=> {

    try {
        
      const res = await auth.createUserWithEmailAndPassword(email, pass);
        db.collection('usuarios').doc(res.user.email).set({
            email   :   res.user.email  ,
            uid     : res.user.uid
        });


        setEmail('')
        setPass('')
        setError(null)
        props.history.push('/admin');
    } catch (error) {
        console.log(error);
    }

   
}, [email, pass,props.history])



    


const Login = () => {
        if( email == 'dennis@gmail.com' && pass == 'abc1234')
        {
            console.log("usuario logueado!!!")
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/admin');
        }else{
            setError('Credenciales inválidas')
        }
}

    return (
        <div className="mt-5">
             
                {
                    esRegistro ? 'Registro de usuarios' : 'Login de acceso'
                }

                <hr/>
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">

                    {
                         error     ?  (
                            <div className="alert alert-danger">
                              {error}
                            </div>

                         ) : null
                    }

                    <form onSubmit={procesarDatos}>
                        <input type="email" 
                        className="form-control mb-2"
                        placeholder="Ingresar Email"
                        onChange = { e =>setEmail(e.target.value)  }
                        value={email}
                        />

                        <input type="password" 
                        className="form-control mb-2"
                        placeholder="Ingresar contraseña"
                        onChange = { e =>setPass(e.target.value)  }
                        value={pass}
                        />
                    <button type="submit" 
                            className="btn btn-lg btn-block btn-dark">
                                 {
                    esRegistro ? 'Registrarse' : 'Acceder'
                    }
                    </button>
                    
                    <button type="button"
                            className="btn btn-sm btn-block btn-info"
                            onClick = { ()=> setEsRegistro( !esRegistro ) }
                            >
                                      
                        {
                        esRegistro ? '¿Ya estás registrado?' : '¿No tienes cuenta?'
                        }

                    </button>


                    </form>

                </div>
           
        </div>
    )
}

export default withRouter(Login)