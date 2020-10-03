import React from 'react';
import NewTaskForm from '../components/NewtaskForm';
import {getTasks } from '../store/onward';
import { useDispatch, useSelector } from "react-redux";
import Task from './Task';
import { useEffect } from 'react';
// function Home(){


//     return(
        // <>
        //     <div>
        //         <h2>Tasks</h2;
        //         {<NewTaskForm />}
        //     </div>
        //     <div>
        //         <h2>Projects</h2>
        //         {/* {to be implemented a list of Projects for user} */}
        //     </div>
        // </>
//     )
// }

// export default Home;
const  Home = () =>{
    const data = useSelector(state=>state.reducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTasks());

    },[dispatch]);
    // console.log(data);
        return (
            <>
            <div>
                <h2>Tasks</h2>
                {data.tasks.map(task => <Task description={task.description}/>)}
                {<NewTaskForm />}
            </div>
            <div>
                <h2>Projects</h2>
                {/* {to be implemented a list of Projects for user} */}
            </div>
        </>
        );
    }


  export default Home;
