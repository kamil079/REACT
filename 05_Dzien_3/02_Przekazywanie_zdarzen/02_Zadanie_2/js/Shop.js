import React, { useState } from "react";
import ShopItem from "./ShopItem";

const Shop = () => {
    const [list, setList] = useState([]);

    const onBuy = (title) => {
        setList([...list, title]);
    };

    return (
        <>
            <ShopItem onClick={onBuy} title="myszka" />
            <ShopItem onClick={onBuy} title="monitor" />
            <ShopItem onClick={onBuy} title="komputer" />
            <ShopItem onClick={onBuy} title="klawiatura" />
            <ShopItem onClick={onBuy} title="laptop" />
            <ul>
                {list.map((el, i) => {
                    return <li key={i}>{el}</li>;
                })}
            </ul>
        </>
    );
};

export default Shop;
// import React, { useState } from "react";
// import ShopItem from "./ShopItem";

// const Shop = () => {
//     const [list, setList] = useState([]);

//     const onBuy = (title) => {
//         console.log(title)
//         setList([...list, title]);
//     };

//     return (
//         <>
//             <div>
//                 <ShopItem onBuy={onBuy} title="MacBook Pro" />
//                 <ShopItem onBuy={onBuy} title="Dell X5500" />
//                 <ShopItem onBuy={onBuy} title="Asus NT6000" />
//                 <ul>
//                     {list.map((el, i) => {
//                         return <li key={i}>{el}</li>;
//                     })}
//                 </ul>
//             </div>
//         </>
//     );
// };

// export default Shop;
