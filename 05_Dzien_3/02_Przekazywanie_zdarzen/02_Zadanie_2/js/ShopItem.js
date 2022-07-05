import React, { useState } from "react";

const ShopItem = ({ title, onClick }) => {
    const handleClick = () => {
        if (typeof onClick === "function") {
            onClick(title);
        }
    };



    return (
        <>
            <h1>{title}</h1>
            <button onClick={handleClick}>get!</button>
        </>
    );
};

export default ShopItem;

// import React from "react";

// const ShopItem = ({ title, onBuy }) => {
//     const handleClick = () => {
//         if (typeof onBuy === "function") {
//             onBuy(title);
//         }
//     };

//     return (
//         <>
//             <div>
//                 <h1>{title}</h1>
//                 <button onClick={handleClick}>Kup</button>
//             </div>
//         </>
//     );
// };

// export default ShopItem;
