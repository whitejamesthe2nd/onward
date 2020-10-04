// import React, { Component } from 'react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {createProject} from '../store/onward';

function NewProjectForm (){
    const [description, setDescription] = useState();
    const [name, setName] = useState();
    const dispatch = useDispatch();

    const handleSubmit =  (e) =>{
        e.preventDefault();
        dispatch(createProject({name:name, description:description, userId:1}));
        // dispatch(createProject(description));
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Project Name' onChange={(e) => setName(e.target.value)}/>
            <input type='text' placeholder='Description'onChange={(e) => setDescription(e.target.value)}/>
            <button type='submit'>Create Project</button>
        </form>
    )
}
export default NewProjectForm;
