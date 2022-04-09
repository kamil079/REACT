import React, { useState, useEffect } from "react";

const UserInfo = () => {
    const [user, setData] = useState({
        name: "Kamil",
        surname: "Szczepaniec",
    });

    useEffect(() => {
        setData((prevState) => {
            ...prevState.name, 
            name:'Adam'});
    }, [name]);

    return (
        <p>
            {user.name} {user.surname}
        </p>
    );
};

export default () => {
    return <UserInfo />;
};
