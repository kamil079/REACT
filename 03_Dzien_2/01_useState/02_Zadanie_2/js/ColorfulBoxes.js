import React, {useState} from 'react';

const ColorfulBoxes = () => {
    const [arr, setArr] = useState([])

    let style = {
        height: '200px',
        width: '200px'
    }

    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    const addBox = () => {
        setArr([...arr,  "#" + randomColor])
    }

    return (
        <>
            <button onClick={addBox}>Add box!</button>
            <div style={{display: 'flex'}}>
                {arr.map((el,i) =>{
                    return <div key={i} style={{...style, background: el}}></div>
                })}
            </div>
        </>
    )
}

export default ColorfulBoxes;

// import React, { useState } from "react";

// const ColorfulBoxes = () => {
//     const [arr, setArr] = useState([]);

//     let style = {
//         height: "100px",
//         width: "100px",
//     };

//     const handleClick = () => {
//         setArr([
//             ...arr,
//             "#" + Math.floor(Math.random() * 16777215).toString(16),
//         ]);
//     };

//     return (
//         <>
//             <button onClick={handleClick}>Dodaj boxa!</button>
//             <div>
//                 {console.log(arr)}
//                 {arr.map((el, i) => {
//                     return (
//                         <div
//                             key={i}
//                             style={{ ...style, backgroundColor: el }}
//                         ></div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

// export default () => {
//     return <ColorfulBoxes />;
// };