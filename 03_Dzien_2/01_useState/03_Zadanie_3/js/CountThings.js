import React, { useState } from "react";

const CountThings = () => {
    const [bank, setBank] = useState(10000);
    const [age, setAge] = useState(28);

    const richer = () => {
        setBank(prevState => prevState + 100000000)
    }

    const older = () => {
        setAge(prevState => prevState + 1)
    }


    return (
        <div>
            <p>💰 so much money: ${bank}</p>
            <p>Age: {age}</p>
            <button onClick={richer}>get rich!!!</button>
            <button onClick={older}>get older!!!</button>
        </div>
    )
};

export default () => {
    return <CountThings />;
};
