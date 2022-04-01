import React from "react";

let style = {
    background: "red",

    height: "100px",
    width: "100px",
};

let EventsTest = () => {
    let handleClick = () => {
        console.log("click!");
    };
    let handleEnterM = () => {
        console.log("mouse over");
    };
    let handleLeaveM = () => {
        console.log("mouse leave");
    };

    return (
        <div
            onClick={handleClick}
            onMouseEnter={handleEnterM}
            onMouseLeave={handleLeaveM}
            style={style}
        ></div>
    );
};

export default function App() {
    return <EventsTest />;
}
