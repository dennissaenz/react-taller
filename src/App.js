import Login from "./Components/Login";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Admin from "./Components/Admin";



function App() {
  return (
   
    <Router>
      <div className="container">
        <Navbar/>
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
        
            
          


   
  );
}

export default App;
