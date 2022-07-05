import React, { useEffect, useState } from "react";
import FakeAPI from "./data/fakeAPI";

const Form = () => {
    const [form, setForm] = useState({ user: "" });

    useEffect((e) => {
        FakeAPI.login({
            username: e.target.value,
            
        })
            .then((user) => {
                console.log(user.name);
            })
            .catch((err) => {
                console.log("smth wrong");
            });
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
            return {
                ...prevState,
                [name]: value,
            };
        };
    };

    return (
        <>
            <form onSubmit={handleChange}>
                <input
                    type="text"
                    name="user"
                    value={form.user}
                    onChange={handleChange}
                />
                {/* <input type="password" name="password" value={form.password} /> */}
                <button>Zaloguj!</button>
            </form>
        </>
    );
};

export default Form;
