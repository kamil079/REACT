import React, { useState } from "react";

const TextField = () => {
    const [title, setTitle] = useState("mr");

    // const handleChange = (e) => {
    //     setTitle(e.target.value)
    // };

    return (
        <>
            <div>
                <p>Title</p>
                <select
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                >
                    <option value="ms">Ms</option>
                    <option value="mrs">Mrs</option>
                    <option value="mr">Mr</option>
                </select>
                <span>Kamil</span>
            </div>
        </>
    );
};

export default TextField;
