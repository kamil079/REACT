import React, { useEffect, useState } from "react";

const NumberRandomInfo = () => {
    const [nr, changeNr] = useState(0);

    useEffect(() => {
        let intervalID = setInterval(() => {
            changeNr((prevState) => (prevState = Math.ceil(Math.random() * 5)));
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, [nr]);

    let el;
    if (nr > 3) {
        el = `liczba ${nr} jest większa niż 3`;
    } else if ((nr == 3)) {
        el = `liczba ${nr} jest równa 3`;
    } else {
        el = `liczba ${nr} jest mniejsza niż 3`;
    }

    return <h1>{el}</h1>;
};
export default NumberRandomInfo;

// import React, { useEffect, useState } from "react";

// const NumberRandomInfo = () => {
//   const [nr, setNr] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       let random = Math.ceil(Math.random() * 5);
//       setNr((prevState) => (prevState = random));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <h1>
//       {nr > 3 ? `nr ${nr} jest większy od 3` : `nr ${nr} jest mniejszy od 3`}
//     </h1>
//   );
// };

// export default function () {
//   return <NumberRandomInfo />;
// }
