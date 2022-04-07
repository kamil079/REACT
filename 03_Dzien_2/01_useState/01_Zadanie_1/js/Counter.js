import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(10);

    const increment = () => {
        setCounter((prevState) => prevState + 1);
    };

    const decrement = () => {
        setCounter((prevState) => prevState - 1);
    };

    const reset = () => {
        setCounter((prevState) => (prevState = 10));
    };

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </>
    );
};

export default () => {
    return <Counter />;
};
