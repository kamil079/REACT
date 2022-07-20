import React, { useEffect, useState } from "react";

const DynamicLego = () => {
    const [lego, setLego] = useState("");

    let arr = [];
    for (let i = 1; i <= lego; i++) {
        arr.push(i);
    }

    return (
        <form>
            <input
                type="number"
                name="lego"
                value={lego}
                onChange={(e) => setLego(e.target.value)}
            />
            <ul>
                {arr.map((el, i) => {
                    return (
                        <li
                            key={i}
                            style={{
                                background: "red",
                                height: "50px",
                                width: `${el * 50}px`,
                            }}
                        >
                            {el}
                        </li>
                    );
                })}
            </ul>
        </form>
    );
};

export default DynamicLego;
