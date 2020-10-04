import React from 'react';


function Task(props) {
    console.log(props);
    return (
        <>
          <div>{props.name}</div>
          <div>{props.description}</div>
        </>
    );
}
export default Task;
