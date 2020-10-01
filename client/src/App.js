import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
// import UserList from './components/UsersList';


function App() {

  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink to="/" activeClass="active">Home</NavLink></li>
                <li><NavLink to="/login" activeClass="active">Login</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/login">
                    <LoginPage />
            </Route>

            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
