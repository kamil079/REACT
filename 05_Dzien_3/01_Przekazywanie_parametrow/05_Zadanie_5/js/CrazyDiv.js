import React, { useState } from "react";

const CrazyDiv = () => {
    const [left, setLeft] = useState("");
    const [top, setTop] = useState("");

    const handleHover = (left, top) => {
        setLeft(left = left);
        setTop(top = top);
    };

    return (
        <div
            style={{
                width: "100px",
                height: "100px",
                background: "red",
                position: "absolute",
                top: top,
                left: left
            }}
            onMouseEnter={() => handleHover(Math.floor(Math.random() * (1000 - 0 + 1)) + 0, Math.floor(Math.random() * (600 - 300 + 1)) + 300)}
        ></div>
    );
};

export default CrazyDiv;
