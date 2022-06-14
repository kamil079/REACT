import React, { useState } from 'react'

const ToDoList = () => {
    const [arr, setArr] = useState([])

    const addToList = () => {
        setArr([...arr, ''])
    }

    return(
        <>
            <button onClick={addToList}>Add Task!</button>
            <ul>
                {arr.map((el,i) => {
                    return <li key={i}>{el} task {i + 1}</li>//el jest nie potrzebne?
                })}
            </ul>
        </>
    )
}

export default ToDoList;

// import React, { useState } from "react";

// const ToDoList = () => {
//     const [tasks, setArr] = useState([]);

//     const addingTask = () => {
//         setArr((prevState) => [...prevState, 1]);
//     };

//     return (
//         <>
//             <ul>
//                 {tasks.map((nr,i) => {
//                     return <li key={i}>zadanie nr{i + 1}</li>;
//                 })}
//             </ul>
//             <button onClick={addingTask}>add task</button>
//         </>
//     );
// };

// export default () => {
//     return <ToDoList />;
// };
