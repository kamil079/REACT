import React, { useState } from "react";

const Box = () => {
    const [width, setWidth] = useState("500px");
    const [height, setHeight] = useState("200px");
    const [background, setBackground] = useState("green");

    const divChange = (width, height, background) => {
        setWidth(width);
        setHeight(height);
        setBackground(background);
    };

    return (
        <>
            <div
                style={{
                    width:  width ,
                    height:  height ,
                    background:  background 
                }}
            ></div>
            <button onClick={() => divChange("200px", "300px", "orange")}>
                orange
            </button>
            <button onClick={() => divChange("100px", "700px", "blue")}>
                blue
            </button>
            <button onClick={() => divChange("500px", "200px", "green")}>
                green
            </button>
        </>
    );
};

export default Box;
