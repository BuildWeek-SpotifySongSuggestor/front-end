import React from "react";
import Register from "./components/Register";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className='App'>
      <nav>
        <NavLink to='/'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
      </nav>
      <section className='form-container'>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/'>
            <Register />
          </Route>

          <PrivateRoute exact path='/profile'>
            <ProfilePage />
          </PrivateRoute>
        </Switch>
      </section>
    </div>
  );
}

export default App;
