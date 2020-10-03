// import React, { Component } from 'react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {createTask} from '../store/onward';

function NewTaskForm (){
    const [description, setDescription] = useState();
    const data = useSelector(state=>state);
    const dispatch = useDispatch();

    const handleSubmit =  (e) =>{
        e.preventDefault();
        const obj = {userId:data.auth.id, description:description};
        dispatch(createTask(obj));
    }


    return(
        <form onSubmit={handleSubmit}>
            <button type='submit'>+</button>
            <input type='text' onChange={(e) => setDescription(e.target.value)}/>
        </form>
    )
}
export default NewTaskForm;
