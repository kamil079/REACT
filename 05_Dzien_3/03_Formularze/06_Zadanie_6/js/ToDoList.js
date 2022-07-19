import React, { useEffect, useState } from "react";

const ToDoList = () => {
    const [list, setList] = useState({
        users: [
            { name: "zxc", id: 1 },
            { name: "qwe", id: 2 },
        ],
        name: "",
    });

    // const handleChange = (e) => {
    //     setInputValue(e.target.value)
    // }

    const onChange = (e) => {
        const { name, value } = e.target;
        setList((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const addToList = () => {
        setList((prevState) => [
            ...prevState.users,
            { name: list.name, id: list.id + 1 },
        ]);
        setList("");
        // setList([
        //     ...list.arr,
        //     {
        //         name: list.task,
        //         id: list.id + 1,
        //         done: false,
        //     },
        //     console.log(list.arr),
        // ]);
    };

    return (
        <>
            <input
                type="text"
                name="name"
                value={list.name || ""}
                onChange={onChange}
            />
            <button onClick={addToList}>Add Task!</button>
            <ul>
                {list.users?.map((user, id) => {
                    return (
                        <li key={id}>
                            {user.name} {user.id}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default ToDoList;
