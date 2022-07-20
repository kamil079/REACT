import React, { useState } from "react";

const Notes = () => {
    const [txt, setTxt] = useState("");

    // const handleChange = (e) => {
    //     setTxt(e.target.value);
    // };

    const removeTxt = (e) => {
        e.preventDefault();
        setTxt("");
    };

    return (
        <form>
            <textarea value={txt} onChange={e => setTxt(e.target.value)}></textarea>
            <button style={{ display: "block" }} onClick={removeTxt}>
                Remove all text!
            </button>
            <span style={{ display: "block" }}>{txt}</span>
        </form>
    );
};

export default Notes;
