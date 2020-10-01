// import React, { Component } from 'react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function NewTaskForm (){
    const [description, setDescription] = useState();
    const dispatch = useDispatch();

    const handleSubmit =  (e) =>{
        e.preventDefault();
        // dispatch(createTask(description));
    }


    return(
        <form onSubmit={handleSubmit}>
            <button type='submit'>+</button>
            <input type='text' onChange={(e) => setDescription(e.target.value)}/>
        </form>
    )
}
export default NewTaskForm;
