import React, { useState } from "react";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        pwd: "",
        pwd2: "",
        adres: "",
        postcode: "",
        city: "",
    });

    let style = {
        display: "block",
    };

    const handleClick = () => {
        setForm((prevState) => ({
            ...prevState,
            name:
                form.name.length < 5
                    ? alert("Podaj więcej niż 5 znaków!")
                    : form.name,
            mail:
                form.email.length < 3 || form.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                    ? alert("Podaj więcej niż 3 znaki oraz @!")
                    : form.email,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    return (
        <>
            <form>
                <span>Dane do wysyłki:</span>
                <input
                    style={style}
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    style={style}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input
                    style={style}
                    type="password"
                    name="pwd"
                    value={form.pwd}
                    onChange={handleChange}
                />
                <input
                    style={style}
                    type="password"
                    name="pwd2"
                    value={form.pwd2}
                    onChange={handleChange}
                />
                <select>
                    <option onChange={handleChange} value="male">
                        Male
                    </option>
                    <option onChange={handleChange} value="female">
                        Female
                    </option>
                </select>
                <span style={style}>Dane do wysyłki:</span>
                <input
                    style={style}
                    type="text"
                    name="adres"
                    value={form.adres}
                    onChange={handleChange}
                />
                <input
                    style={style}
                    type="text"
                    name="postcode"
                    value={form.postcode}
                    onChange={handleChange}
                />
                <input
                    style={style}
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                />
            </form>
            <button onClick={handleClick}>save</button>
        </>
    );
};

export default Register;
