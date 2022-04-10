import React, { useState, useEffect } from "react";

const UserInfo = () => {
    const [user, setData] = useState({
        name: "Kamil",
    });

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setData((prevState) => (prevState.name = "Adam"));
        }, 2000);
        return clearTimeout(timeOutId);
    }, []);

    const changeData = () => {
                    setData((prevState) => (prevState.name = "Adam"));

    }

    return (
        <p>
            {user.name}
        </p>
    );
};

export default () => {
    return <UserInfo />;
};
