import React, { useState } from "react";
import ShopItem from "./ShopItem";

const Shop = () => {
    const [list, setList] = useState([]);

    const onBuy = ({title}) => {
        setList([...list, title]);

    };

    return (
        <>
            <div>
                <ShopItem onBuy={onBuy} title="MacBook Pro" />
                <ShopItem onBuy={onBuy} title="Dell X5500" />
                <ShopItem onBuy={onBuy} title="Asus NT6000" />
                <ul>
                    {list.map((el, i) => {
                        return <li key={i}>{el}</li>;
                    })}
                </ul>
            </div>
        </>
    );
};

export default Shop;
