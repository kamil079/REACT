import React, { useState } from "react";

const Number = () => {
    const [arrNr, useArr] = useState([
        54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40,
    ]);

    const getEvenNumbers = () => {
        useArr((prevState) => prevState.filter((nr) => nr % 2 == 0));
    };

    const getNotEvenNumbers = () => {
        useArr((prevState) => prevState.filter((nr) => nr % 2 !== 0));
    };

    const getAllNumbers = () => {
        useArr((arrNr) => arrNr);
        console.log(arrNr);
    };

    return (
        <>
            <ul>
                {arrNr.map((nr, i) => {
                    return <li key={i}>{nr}</li>;
                })}
            </ul>
            <button onClick={getEvenNumbers}>show even numbers</button>
            <button onClick={getNotEvenNumbers}>show noteven numbers</button>
            <button onClick={getAllNumbers}>show all</button>
        </>
    );
};

export default () => {
    return <Number />;
};
