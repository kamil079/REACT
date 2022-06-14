import React, { useState } from "react";

let arr = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40];

const Numbers = () => {
    const [numbers, setNumbers] = useState(arr);

    const evenNumbers = () => {
        setNumbers(prevState => prevState.filter(el => el % 2 ===0));
    };

    const oddNumbers = () => {
        setNumbers(prevState => prevState.filter(el => el % 2 !== 0));
    };

    const allNumbers = () => {
        setNumbers(prevState => prevState = arr);
    };

    return (
        <>
            <ul>
                {numbers.map((el, i) => {
                    return <li key={i}>{el}</li>;
                })}
            </ul>
            <button onClick={evenNumbers}>Pokaz tylko parzyste!</button>
            <button onClick={oddNumbers}>Pokaz tylko nieparzyste!</button>
            <button onClick={allNumbers}>Pokaz wszystkie!</button>
        </>
    );
};

export default Numbers;

// import React, { useState } from "react";

// const Number = () => {
//     const initialArr = [
//         54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40,
//     ];
//     const [arrNr, useArr] = useState([
//         54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40,
//     ]);

//     const getEvenNumbers = () => {
//         useArr((prevState) => prevState.filter((nr) => nr % 2 == 0));
//     };

//     const getNotEvenNumbers = () => {
//         useArr((prevState) => prevState.filter((nr) => nr % 2 !== 0));
//     };

//     const getAllNumbers = () => {
//         useArr(initialArr);
//     };

//     return (
//         <>
//             <ul>
//                 {arrNr.map((nr, i) => {
//                     return <li key={i}>{nr}</li>;
//                 })}
//             </ul>
//             <button onClick={getEvenNumbers}>show even numbers</button>
//             <button onClick={getNotEvenNumbers}>show noteven numbers</button>
//             <button onClick={getAllNumbers}>show all</button>
//         </>
//     );
// };

// export default () => {
//     return <Number />;
// };
