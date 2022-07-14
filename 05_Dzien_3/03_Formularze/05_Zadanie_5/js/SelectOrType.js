import React, { useState } from "react";

const SelectOrType = ({ items }) => {
    const [cars, setCars] = useState(items);

    const handleChange = () => {
        const {name, value} = e.target
        setCars(prevState => {
            return {
                [name]: value
            }
        })
    }


    return (
        <>
            <form>
                <select>
                    {cars.map((el, i) => {
                        return (
                            <option key={i} value={el}>
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
