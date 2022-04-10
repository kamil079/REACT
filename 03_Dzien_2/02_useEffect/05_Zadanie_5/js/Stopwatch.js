import React, { useState, useEffect } from "react";

const StopWatch = () => {
    const [time, setTime] = useState(0);
    // const [timeOn, setTimeOn] = useState(false);
    const [intervalID, setInt] = useState(0);
    const [laps, setLaps] = useState([]);

    return (
        <>
            <h1>Time: {time}s</h1>
            <button>Lap</button>
            <button>Stop</button>
            <button>Reset</button>
            <button>Start</button>
            <ul>
                Laps:
                {}
            </ul>
        </>
    );
};

export default () => {
    return <StopWatch />;
};
