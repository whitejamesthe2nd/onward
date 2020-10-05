import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import NewOrgainzationForm  from './components/Organization';
import ProjectTasks from './components/ProjectTasks';
import { useDispatch, useSelector } from "react-redux";

function App() {
        const data = useSelector(state=>state.reducer);
  return (
<>
    <BrowserRouter>
    <div class='navBar'>
            <nav class='horizontal'>
                    <div><NavLink to="/" className='color' activeClass="active">Home</NavLink></div>
                    <div><NavLink to="/newOrganization" className='color' activeClass="active">Organizations</NavLink></div>
                    <div><NavLink to="/login" className='color' activeClass="active">Login</NavLink></div>
            </nav>
    </div>
            <Switch>
            <Route path='/projectTasks'>
            <ProjectTasks />
          </Route>
            <Route path="/login">
                    <LoginPage />
            </Route>
            <Route path="/newOrganization">
                {data.orgs.map(org => <NewOrgainzationForm name={org.name} description={org.description}/>)}
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
    <div class='center-me color'><a href='https://github.com/whitejamesthe2nd'>Check out my github</a></div>
    </>
  );
}

export default App;
