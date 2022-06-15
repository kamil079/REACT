import React, { useState, useEffect } from "react";

const Box = () => {
    const [color, setColor] = useState("cornflowerblue");

    useEffect(() => {
        let timeOutID = setTimeout(() => {
            setColor((prevState) => (prevState = "tomato"));
        }, 2000);
        return () => {
            clearTimeout(timeOutID);
        };
    }, []);

    return (
        <div
            style={{ height: "100px", width: "100px", background: color }}
        ></div>
    );
};

export default Box;

// import React, { useEffect, useState } from "react";

// const Box = () => {
//     const [color, setColor] = useState("cornflowerblue");

//     useEffect(() => {
//         const timeOut = setTimeout(() => {
//             setColor((prevState) => (prevState = "tomato"));
//         }, 2000);
//         return () => {
//             clearTimeout(timeOut);
//         };
//     }, []);

//     return (
//         <div
//             style={{ height: "100px", width: "100px", background: color }}
//         ></div>
//     );
// };

// export default () => {
//     return <Box />;
// };
