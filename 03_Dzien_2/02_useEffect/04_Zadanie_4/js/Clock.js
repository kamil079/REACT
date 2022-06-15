import React, { useState, useEffect } from "react";
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";


const Clock = (props) => {
    const [today, setDate] = useState(props.date.toLocaleString());

    useEffect(() => {
        let intervalId = setInterval(() => {
            setDate(prevState => prevState = new Date().toLocaleString())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    })

    return (
        <>
            <p>{today}</p>
            <ClockTime hour={new Date().toLocaleTimeString()}/>
            <ClockDate date={new Date().toDateString()}/>
        </>
    );
};
let time = new Date();

export default () => {
    return <Clock date={time} />;
};

// import React, { useState, useEffect } from "react";
// import ClockTime from "./ClockTime";

// const Clock = () => {
//     const [today, setDate] = useState(new Date());

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setDate((prevState) => (prevState = new Date()));
//         }, 1000);

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, []);

//     return (
//             <>
//                 <ClockTime time={today.toLocaleTimeString()}/>
//                 <ClockTime time={today.toDateString()}/>
//             </>
//         );
// };

// export default () => {
//     return <Clock />;
// };
