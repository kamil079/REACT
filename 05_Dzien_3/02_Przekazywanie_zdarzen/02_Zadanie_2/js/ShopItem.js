import React from "react";

const ShopItem = ({ title, onBuy }) => {
    const handleClick = () => {
        if (typeof onBuy === "function") {
            handleClick(title);
        }
    };

    return (
        <>
            <div>
                <h1>{title}</h1>
                <button onClick={onBuy}>Kup</button>
            </div>
        </>
    );
};

export default ShopItem;
