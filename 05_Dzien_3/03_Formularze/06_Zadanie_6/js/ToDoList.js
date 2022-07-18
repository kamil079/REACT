import React, { useState } from "react";

const ToDoList = () => {
    // const [list, setList] = useState([
    //     {
    //         id: 1,
    //         name: "buy tomato",
    //         done: false,
    //     },
    //     {
    //         id: 2,
    //         name: "house cleaning",
    //         done: false,
    //     },
    //     {
    //         id: 3,
    //         name: "carwash",
    //         done: false,
    //     },
    // ]);

    // const toDo = (e) => {
    //     const {name, value} = e.target
    //     setList(prevState => {
    //         return {...prevState, [name]: value}
    //     })
    // }

    // return (
    //     <div className="toDoList">
    //         <form className="header">
    //             <h2>Twoja lista zadań</h2>
    //             <input type="text" placeholder="np. Zrobić zakupy" name="name" value={list.name} onChange={toDo}/>
    //             <button className="btn-add" onClick={toDo}>Dodaj</button>
    //         </form>

    //         <ul>
    //             {list.map((el,i) => {
    //                 <li key={i}>{el.name}</li>
    //             })}
    //             {/* <li>Kupić mleko</li>
    //             <li className="done">Zrobić prezentację</li> */}
    //         </ul>
    //     </div>
    // );

    const [list, setList] = useState({ arr: [], task: "" });

    const addToList = (e) => {
        const { name, value } = e.target;
        setList((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
//dalej zle
    return (
        <>
            <input
                type="text"
                name="task"
                value={list.task}
                onChange={addToList}
            />
            <button onClick={addToList}>Add Task!</button>
            <ul>
                {list.arr.map((el, i) => {
                    return <li key={i}>{el}</li>;
                })}
            </ul>
        </>
    );
};

export default ToDoList;
