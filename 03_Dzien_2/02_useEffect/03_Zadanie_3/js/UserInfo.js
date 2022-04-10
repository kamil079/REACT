import React, { useState, useEffect } from "react";

const UserInfo = () => {
    const [user, setData] = useState({
        name: "Andrzej",
        surname: "Gołota",
    });

    let newUser = {
        name: "Adam",
        surname: "Małysz",
    };

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setData((prevState) => ({
                ...prevState,
                ...newUser,
            }));
        }, 2000);
        // return clearTimeout(timeOutId);
    }, []);

    return (
        <p>
            {user.name} {user.surname}
        </p>
    );
};

export default () => {
    return <UserInfo />;
};
