import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import ProjectTasks from './ProjectTasks';
import { useDispatch, useSelector } from "react-redux";
const  {deleteProject, default: reducer} = require('../store/onward');


function Project(props) {
    const dispatch = useDispatch();
    const auth = useSelector(state=>state.auth);
    // const reducer = useSelector(state=>state.reducer);
    const handleClick = (e)=>{
      console.log(auth.id);
      const obj = {target: e.target.value, userId:auth.id}
      dispatch(deleteProject(obj));

    }
    return (
      <div class='rows'>
        <BrowserRouter>
        <>
          <button class="ui secondary button inline" value={props.id} onClick={handleClick}>Complete</button>
          <div class='inline'><a href='/projectTasks' value={props.id} >{props.name}</a></div>
          <div class='inline'>:  {props.description}</div>
        </>
        <Switch>
           {/* <Route path='/projectTasks'>
            <ProjectTasks />
          </Route> */}
        </Switch>
        </BrowserRouter>
      </div>
    );
}
export default Project;
