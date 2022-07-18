import React, { useState } from "react";

const SelectOrType = ({ items }) => {
    const [form, setForm] = useState({cars: items, variable:''});

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
        }
        })
    }

    return (
        <>
            <form>
                <select onChange={(e) => setForm(e.target.value)}>
                    {items.map((el, i) => {
                        return (
                            <option key={i} value={el}>
                                {el}    
                            </option>
                        );
                    })}
                </select>
                {form === items[3] ? <input type='text' name='cars' value={form.cars} onChange={handleChange}/> : <h1>nope</h1>}
            </form>
        </>
    );
};

let arr = ["BMW", "Jaguar", "Porsche", "inne"];

export default function App() {
    return <SelectOrType items={arr} />;
}
