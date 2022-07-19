import React, { useEffect, useState } from "react";

const ToDoList = () => {
    const [list, setList] = useState({
        users: [
            { name: "zxc", id: 1 },
            { name: "qwe", id: 2 },
        ],
        user: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setList((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const addToList = () => {
        const { users } = list;
        setList(users.concat({ name: list.user, id: list.users.id + 1 }));
        setList("");
    };

    return (
        <>
            <input
                type="text"
                name="user"
                value={list.user || ""}
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
