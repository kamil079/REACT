import React from "react";

export default function ShowUserFunc({ name, surname }) {
    let handleClikc = () => {
        console.log(name, surname);
    };

    return <button onClick={handleClikc}>User data</button>;
}
