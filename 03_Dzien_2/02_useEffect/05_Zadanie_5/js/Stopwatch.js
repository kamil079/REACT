import React, { useState, useEffect } from "react";

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(false);
    const [laps, setLaps] = useState([]);

    const startTime = () => {
        setIntervalId(
            (prevState) =>
                (prevState = setInterval(() => {
                    setTime((prevState) => prevState + 1);
                }, 1000))
        );
    };
    const stopTime = () => {
        intervalId ? clearInterval(intervalId) : intervalId;
    };

    const restTime = () => {
        setTime((prevState) => prevState = 0);
    };

    const addLap = () => {
        setLaps(prevState => [...laps, time])
    }

    return (
        <>
            <h1>Time: {time}s</h1>
            <button onClick={addLap}>Lap</button>
            <button onClick={stopTime}>Stop</button>
            <button onClick={restTime}>Reset</button>
            <button onClick={startTime}>Start</button>
            <ul>{laps.map((el,i) => {
                return <li key={i}>{el}</li>
            })}</ul>
        </>
    );
};

export default StopWatch;

// import React, { useState, useEffect } from "react";

// const StopWatch = () => {
//     const [time, setTime] = useState(0);
//     const [isRunning, setIsRunning] = useState(false);
//     const [laps, setLaps] = useState([]);

//     function toggle() {
//         setIsRunning(!isRunning);
//     }

//     function reset() {
//         setTime(0);
//         setIsRunning(false);
//     }

//     function laping() {
//         setLaps([...laps, time]);
//             return laps
//     }

//     useEffect(() => {
//         let intervalId = null;
//         if (isRunning) {
//             intervalId = setInterval(() => {
//                 setTime((time) => time + 1);
//             }, 1000);
//             console.log(time);
//         } else if (!isRunning) {
//             clearInterval(intervalId);
//         }
//         return () => clearInterval(intervalId);
//     }, [isRunning, time]);

//     return (
//         <>
//             <h1>Time: {time}s</h1>
//             <button onClick={laping}>Lap</button>
//             <button onClick={toggle}>Stop</button>
//             <button onClick={reset}>Reset</button>
//             <button onClick={toggle}>Start</button>
//             <ul>
//                 Laps:
//                 {laps.map((el,i) => {
//                     return <li key={i}>{el}</li>
//                 })}
//             </ul>
//         </>
//     );
// };

// export default () => {
//     return <StopWatch />;
// };
