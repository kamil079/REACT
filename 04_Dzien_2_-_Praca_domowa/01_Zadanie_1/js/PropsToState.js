import React, { useState, useEffect } from "react";
import ShowInfo from "./ShowInfo";


const PropsToState = ({ text }) => {
    const [txt, setTxt] = useState(text);

    useEffect(() => {
        const intID = setInterval(() => {
            setTxt((prevState) => prevState + ".");
        }, 1000);

        return () => {
            clearInterval(intID);
        };
    }, []);

    return <ShowInfo textProps={txt} />;
};

export default function App() {
    return <PropsToState text={"hello world"} />;
}
// import React, { useEffect, useState } from "react";
// import ShowInfo from "./ShowInfo";

// let PropsToState = ({ text }) => {
//   const [txt, setTxt] = useState(text);

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setTxt((prevState) => prevState + ".");
//     }, 1000);
//     return () => clearInterval(interval)
//   }, []);

//   return (
//     <>
//       <ShowInfo info={txt} />
//       {/* <h1>{txt}</h1> */}
//     </>
//   );
// };

// export default () => {
//   return <PropsToState text={'some text..'} />;
// };
