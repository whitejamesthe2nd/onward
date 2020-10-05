import React from 'react';
import { useDispatch, useSelector } from "react-redux";
const  {deleteTask} = require('../store/onward');


function Task(props) {
    console.log(props);
    const dispatch = useDispatch();
    const handleClick = (e)=>{
      dispatch(deleteTask(e.target.value));

    }
    return (
        <>
        <div class='tasks'>
          <button class="ui secondary button" value={props.id} onClick={handleClick}>Complete</button>
          <div class= 'rows inline'>{props.description}</div>
        </div>
        </>
    );
}
export default Task;
