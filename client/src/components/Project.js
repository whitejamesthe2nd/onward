import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ProjectTasks from './ProjectTasks';


function Task(props) {
    console.log(props);
    return (
      <div class='rows'>
        <BrowserRouter>
        <>
          <div class='inline'><NavLink to='/projectTasks' value={props.id}>{props.name}</NavLink></div>
          <div class='inline'>:  {props.description}</div>
        </>
        <Switch>
          <Route path='/projectTasks'>
            {/* <ProjectTasks /> */}
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    );
}
export default Task;
