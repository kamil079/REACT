import React, { useState } from "react";

const ToDoList = () => {
    const [tasks, setArr] = useState([]);

    const addingTask = () => {
        setArr((prevState) => [...prevState, 1]);
    };

    return (
        <>
            <ul>
                {tasks.map((nr,i) => {
                    return <li key={i}>zadanie nr{i + 1}</li>;
                })}
            </ul>
            <button onClick={addingTask}>add task</button>
        </>
    );
};

export default () => {
    return <ToDoList />;
};
