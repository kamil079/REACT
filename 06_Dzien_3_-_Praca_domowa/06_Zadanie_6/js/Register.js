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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const handleClick = () => {
        setForm((prevState) => ({
            ...prevState,
            name:
                form.name.length < 5
                    ? alert("Podaj więcej niż 5 znaków!")
                    : form.name,
            mail:
                form.email.length < 3 ||
                form.email.match(
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                )
                    ? alert("Podaj więcej niż 3 znaki oraz @!")
                    : form.email,
            pwd:
                form.pwd.length < 4
                    ? alert("hasło musi mieć minium 4 znaki!")
                    : form.pwd,
            pwd2:
                form.pwd2.length < 4
                    ? alert("hasło musi mieć minium 4 znaki!")
                    : form.pwd2,
            adres:
                form.adres.length < 3
                    ? alert("adres musi zawierac minium 3 znaki")
                    : form.adres,
            postcode: form.postcode.length = 5
                ? alert(
                    "5 znaków bez '-' lub 6 znaków z '-' jako trzecim znakiem"
                )
                : form.postcode,
            city:
                form.city.length < 2 ? alert('wiecej niz 2 znami') : form.city
        }));
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
