import React, { Component } from "react";

let color = {
    background: "green",
};

let style = {
    height: "200px",
    width: "200px",
};

class Box extends Component {
    state = {
        color: color,
    };

    

    componentDidMount() {
        let bg = {
            background: 'red'
        }
        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                return {
                    color: prevState.color === color ? bg : color,
                };
            });
        }, 1000);
    }

    render() {
        const { color } = this.state;
        return <div style={{ ...style, ...color }}></div>;
    }
}

export default function App() {
    return <Box />;
}
