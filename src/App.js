import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Authprovider from './contexts/AuthProvider/Authprovider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
//import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Authprovider>
      <Router>
      <Switch>
          <PrivateRoute path="/appointment">
            <Appointment/>
            </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
            </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </Authprovider>
       </div>
  );
}

export default App;
