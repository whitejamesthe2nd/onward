import React from 'react';
import NewTaskForm from '../components/NewtaskForm';
import {getTasks } from '../store/onward';
import { useDispatch, useSelector } from "react-redux";
import Task from './Task';
import { useEffect } from 'react';
import NewProjectForm from "./NewProjectForm";
import Project from './Project';


const  Home = () =>{
    const data = useSelector(state=>state.reducer);
    const auth = useSelector(state=>state.auth);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTasks(auth.id));

    },[dispatch]);
    // console.log(data);
    if(!data.projects){
        dispatch(getTasks);
    }
    return (
        <div class='Home'>
            <>
            <div>
                <h2 class='center-me header'>Tasks</h2>
                {data.tasks.map(task => <Task id={task.id}description={task.description}/>)}
                {<NewTaskForm />}
            </div>
            <div>
                <h2 class='center-me header'>Projects</h2>
                {data.projects.map(project => <Project description={project.description} class='project' id={project.id} name={project.name}/>)}
                <NewProjectForm />
            </div>
        </>
        </div>
        );
    }


  export default Home;
