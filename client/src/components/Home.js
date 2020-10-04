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
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTasks());

    },[dispatch]);
    // console.log(data);
    if(!data.projects){
        dispatch(getTasks);
    }
    return (
            <>
            <div>
                <h2>Tasks</h2>
                {data.tasks.map(task => <Task description={task.description}/>)}
                {<NewTaskForm />}
            </div>
            <div>
                <h2>Projects</h2>
                {data.projects.map(project => <Project description={project.description} name={project.name}/>)}
                <NewProjectForm />
            </div>
        </>
        );
    }


  export default Home;
