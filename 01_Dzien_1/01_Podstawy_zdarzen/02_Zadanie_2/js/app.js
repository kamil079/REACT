import React, { Component } from "react";
import ReactDOM from "react-dom";
import ShowUserClass from "./ShowUserClass";
import ShowUserFunc from "./ShowUserFunc";

let name = "Igor";
let surname = "Szczepaniec";

let App = () => {
    return (
        <>
            <ShowUserClass name={name} surname={surname} />
            <ShowUserFunc name={name} surname={surname} />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
