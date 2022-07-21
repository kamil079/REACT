import React, { useEffect, useState } from "react";

const WhoIsPresent = () => {
    let arrOfUsers = [
        "Anna Kowalska",
        "Jan Kowalski",
        "Maciej von Handerburg",
        "Jurand ze Spychowa",
    ];

    const [users, setUsers] = useState([]);

    useEffect(() => {
    }, [users])

    //how to delete from arrOfUsers chosen value

    const onChange = (e) => {
        setUsers([...users, e.target.value]);
        
        console.log(e.target.value);
    };

    return (
        <form>
            <select onChange={onChange}>
                {arrOfUsers.map((el, i) => {
                    return (
                        <option key={i} value={el}>
                            {el}
                        </option>
                    );
                })}
            </select>
            <ul>
                {users.map((el, i) => {
                    return <li key={i}>{el}</li>;
                })}
            </ul>
        </form>
    );
};

export default WhoIsPresent;
