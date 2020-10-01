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
        <nav>
            <ul>
                <li><NavLink to="/" activeClass="active">Home</NavLink></li>
                <li><NavLink to="/login" activeClass="active">Login</NavLink></li>
                <li><NavLink to="/newTask" activeClass="active">New Task</NavLink></li>
                <li><NavLink to="/newProject" activeClass="active">New Project</NavLink></li>
                <li><NavLink to="/newOrganization" activeClass="active">New Organization</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/login">
                    <LoginPage />
            </Route>

            <Route path="/newTask">
                <NewTaskForm />
            </Route>
            <Route path="/newProject">
                <NewProjectForm />
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
