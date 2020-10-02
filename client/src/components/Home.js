import React from 'react';
import NewTaskForm from '../components/NewtaskForm';

function Home(){


    return(
        <>
            <div>
                <h2>Tasks</h2>
                {<NewTaskForm />}
            </div>
            <div>
                <h2>Projects</h2>
                {/* {to be implemented a list of Projects for user} */}
            </div>
        </>
    )
}

export default Home;
