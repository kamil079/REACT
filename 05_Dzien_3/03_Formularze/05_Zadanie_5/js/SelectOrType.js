import React, { useState } from "react";

const SelectOrType = ({ items }) => {
    const [car, setCars] = useState(items[0]);

    return (
        <>
            <form>
                <select onChange={(e) => setCars(e.target.value)}>
                    {items.map((el, i) => {
                        return (
                            <option key={i} value={el}>
                                {el}
                            </option>
                        );
                    })}
                </select>
                {car === items[length-1] ? <button>hi</button> : <h1>nope</h1>}
            </form>
        </>
    );
};

let arr = ["BMW", "Jaguar", "Porsche", "inne"];

export default function App() {
    return <SelectOrType items={arr} />;
}
