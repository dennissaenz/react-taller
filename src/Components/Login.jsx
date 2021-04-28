import React from 'react'

const Login = () => {

    const [email, setEmail] = React.useState('');
    const [pass, setPass]   = React.useState('');
    const [error, setError]   = React.useState(''); 

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
        setEmail('')
        setPass('')
        setError(null)
        console.log('correcto!!!');
        alert("felicidades")

    }//procesarDatos


    return (
        <div className="mt-5">
                Registro y login
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
                                Registrar
                    </button>

                    </form>

                </div>
           
        </div>
    )
}

export default Login