import React, { useState } from "react";

const UpperLower = () => {
    const [txt, setTxt] = useState("iza moja żona");

    const toUpperCase = () => {
        setTxt(prevState => prevState.toUpperCase())
    };

    const toLowerCase = () => {
        setTxt(prevState => prevState.toLowerCase())
    };

    return (
        <>
            <h2>{txt}</h2>
            <button onClick={toUpperCase}>upper</button>
            <button onClick={toLowerCase}>lower</button>
        </>
    );
};

export default () => {
    return <UpperLower />;
};
