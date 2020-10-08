import React from 'react';
import { useDispatch, useSelector } from "react-redux";
const  {deleteTask} = require('../store/onward');


function Task(props) {
    console.log(props);
    const dispatch = useDispatch();
    const auth = useSelector(state=>state.auth);
    const handleClick = (e)=>{
      const obj = {target: e.target.value, userId:auth.id}
      dispatch(deleteTask(obj));

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
