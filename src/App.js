import React from "react";
import Register from "./components/Register";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
<<<<<<< HEAD
    <div className='App'>
      <Link to='/'>Register</Link>
      <Link to='/login'>Login</Link>
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
=======
    <div className="App">
      <nav>
        <NavLink to="/">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <section className="form-container">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Register />
          </Route>
        </Switch>
      </section>
>>>>>>> 71b9a871988ef390c6fa4ca47277a0a619e69aba
    </div>
  );
}

export default App;
