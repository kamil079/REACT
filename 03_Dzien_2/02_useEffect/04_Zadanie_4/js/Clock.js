import React, { useState } from "react";
import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";

const Clock = () => {
    const [todaysDate, setTodaysDate] = useState(new Date());

    return (
        <>
            <ClockDate today={todaysDate} />
            <ClockTime time={todaysDate} />
        </>
    );
};

export default () => {
    return <Clock />;
};
