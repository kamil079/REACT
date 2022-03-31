import React from "react";

export default function Buttons() {
    let handleClick1 = () => {
        console.log("Pierwszy klik kliknięty!");
    };

    let handleClick2 = () => {
        let nr1 = prompt("podaj pierwszą liczbę:");
        let nr2 = prompt("podaj drugą liczbę:");
        console.log(Math.pow(nr1, nr2));
    };

    let handleClick3 = () => {
        console.log(window.innerHeight, window.innerWidth);
    };

    return (
        <>
            <button onClick={handleClick1}>Click!</button>
            <button onClick={handleClick2}>Click!</button>
            <button onClick={handleClick3}>Click!</button>
        </>
    );
}
