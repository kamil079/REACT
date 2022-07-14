import React, { useState } from "react";

const AddTwoNumbers = () => {
    const [form, setForm] = useState({ nr1: ' ', nr2: ' ' });

    const handleSubmit = (e) => {
        const { name, value } = e.target;
        e.preventDefault();
        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nr1"
                    value={form.nr1}
                    onChange={handleSubmit}
                />
                <input
                    type="text"
                    name="nr2"
                    value={form.nr2}
                    onChange={handleSubmit}
                />
                <h1 onChange={handleSubmit}>
                    {isNaN(form.nr1) || isNaN(form.nr2)
                        ?  "podaj dwie liczby"
                        :  parseInt(form.nr1) + parseInt(form.nr2)}{" "}
                </h1>
            </form>
        </>
    );
};

export default AddTwoNumbers;
