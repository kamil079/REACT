import React, { useState } from "react";

const SelectOrType = ({ items }) => {
    const [cars, setCars] = useState(items);

    const handleChange = () => {
        console.log(cars)
    }


    return (
        <>
            <form>
                <select onChange={handleChange}>
                    {cars.map((el, i) => {
                        return (
                            <option key={i} value={el} >
                                {el}
                            </option>
                        );
                    })}
                </select>
                <input
                    type="text"
                    style={{ visibility: "hidden", display: "flex" }}
                />
                <button style={{ visibility: "hidden", display: "flex" }}>
                    Set!
                </button>
            </form>
        </>
        
    );
};

let arr = ["BMW", "Jaguar", "Porsche", "inne"];

export default function App() {
    return <SelectOrType items={arr} />;
}
