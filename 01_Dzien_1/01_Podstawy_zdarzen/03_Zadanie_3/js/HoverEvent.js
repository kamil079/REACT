import React, { Component } from "react";

let HoverEvent = () => {
    let handleClick = () => {
        console.log("najechano na przycisk!");
    };

    return <button onMouseEnter={handleClick}>click</button>;
};

class HoverEvent2 extends Component {
    render() {
        let handleClick2 = () => {
            console.log("najechano na przycisk!");
        };

        return <button onMouseEnter={handleClick2}>click2</button>;
    }
}

export default function App() {
    return (
        <>
            <HoverEvent />
            <HoverEvent2 />
        </>
    );
}
