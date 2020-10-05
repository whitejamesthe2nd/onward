import React from 'react';
import NewTaskForm from '../components/NewtaskForm';
import {getTasks } from '../store/onward';
import { useDispatch, useSelector } from "react-redux";
import Task from './Task';
import { useEffect } from 'react';


export default function ProjectTasks (){
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
                <h2 class='center-me header'>Tasks</h2>
                {data.tasks.map(task => <Task id={task.id}description={task.description}/>)}
                {<NewTaskForm />}
            </div>
        </>
        );
    }
