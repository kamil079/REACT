import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState("kamil");

    // const handleChange = (e) => {
    //     setName(e.target.value)
    // }

    return (
        <>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <h1>hello, {name}</h1>
            </form>
        </>
    );
};

export default Form;
