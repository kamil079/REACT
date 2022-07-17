import React, { useState } from "react";

const SelectOrType = ({ items }) => {
    const [car, setCars] = useState(items[0]);

    const handleChange = (e) => {
        const {name, value} = e.target
        setCars(prevState => {
            return ([
                ...prevState,
                [name]= value
            ])
        })
    }

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
                {car === items[3] ? <input type='text' name={car} value={car} onChange={handleChange}/> : <h1>nope</h1>}
            </form>
        </>
    );
};

let arr = ["BMW", "Jaguar", "Porsche", "inne"];

export default function App() {
    return <SelectOrType items={arr} />;
}
