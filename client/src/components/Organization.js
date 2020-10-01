// import React, { Component } from 'react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function NewOrganizationForm (){
    const [description, setDescription] = useState();
    const [name, setName] = useState();
    const dispatch = useDispatch();

    const handleSubmit =  (e) =>{
        e.preventDefault();
        // dispatch(createTask(description));
    }


    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Organization Name' onChange={(e) => setName(e.target.value)}/>
            <input type='text' placeholder='Description'onChange={(e) => setDescription(e.target.value)}/>
            <button type='submit'>Create Organization</button>
        </form>
    )
}
export default NewOrganizationForm;
