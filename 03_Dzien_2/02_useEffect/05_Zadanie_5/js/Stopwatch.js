import React, { useState, useEffect } from "react";

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    function toggle() {
        setIsRunning(!isRunning);
    }

    function reset() {
        setTime(0);
        setIsRunning(false);
    }

    function laping() {
        setLaps([...laps, time]);
            return laps
    }

    useEffect(() => {
        let intervalId = null;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
            console.log(time);
        } else if (!isRunning) {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    return (
        <>
            <h1>Time: {time}s</h1>
            <button onClick={laping}>Lap</button>
            <button onClick={toggle}>Stop</button>
            <button onClick={reset}>Reset</button>
            <button onClick={toggle}>Start</button>
            <ul>
                Laps:
                {laps.map((el,i) => {
                    return <li key={i}>{el}</li>
                })}
            </ul>
        </>
    );
};

export default () => {
    return <StopWatch />;
};
