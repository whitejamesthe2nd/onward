import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import NewTaskForm  from './components/NewtaskForm'
import NewProjectForm  from './components/NewProjectForm'
import NewOrgainzationForm  from './components/Organization'
// import UserList from './components/UsersList';


function App() {

  return (
    <BrowserRouter>
    <div class='navBar'>
            <nav class='horizontal'>
                    <div><NavLink to="/" className='color' activeClass="active">Home</NavLink></div>
                    <div><NavLink to="/login" className='color' activeClass="active">Login</NavLink></div>
                    <div><NavLink to="/newOrganization" className='color' activeClass="active">New Organization</NavLink></div>
            </nav>
    </div>
            <Switch>
            <Route path="/login">
                    <LoginPage />
            </Route>
            <Route path="/newOrganization">
                <NewOrgainzationForm />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
