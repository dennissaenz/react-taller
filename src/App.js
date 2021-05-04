import Login from "./Components/Login";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Admin from "./Components/Admin";
import {auth} from './firebase';
import React from "react";


function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect( ()=>{
    auth.onAuthStateChanged( user => {
      console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  } );

  return (firebaseUser !==false) ?
  (
   
    <Router>
      <div className="container">
        <Navbar firebaseUser={firebaseUser} />
          <Switch>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/" exact>
                  Ruta de inicio
              </Route>
          </Switch>
      </div>
  </Router>
     
  ): (
    <p>
      Cargando....
    </p>
  )
}

export default App;
