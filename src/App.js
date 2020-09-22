import React from "react";
import Register from "./components/Register";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <div className='App'>
      <Link to='/'>Register</Link>
      <Link to='/login'>Login</Link>
      <h1>Hello</h1>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/'>
          <Register />
        </Route>

        <PrivateRoute exact path='/profile'>
          <ProfilePage />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
