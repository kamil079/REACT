import React, { useEffect, useState } from "react";

const SpeedClickGame = ({ timer }) => {
    const [time, setTime] = useState(timer);
    const [points, setPoints] = useState(0);

    const handleClick = () => {
        setPoints((prevPoints) => prevPoints + 1);
        setTime((prevState) => (timer = prevState - 50));
    };

    useEffect(() => {
        let interval = setInterval(() => {
            setTime((prevState) => prevState - 50);
            // time <= 0 ? clearInterval(interval) : null;

        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <button onClick={handleClick} disabled={time <= 0 ? true : false}>
                Click Me!
            </button>
            <div>
                <h1>{time}</h1>
                <h2>
                    {points} {points > 1 ? "points" : "point"}
                </h2>
            </div>
        </>
    );
};

export default () => {
    return <SpeedClickGame timer={500} />;
};
