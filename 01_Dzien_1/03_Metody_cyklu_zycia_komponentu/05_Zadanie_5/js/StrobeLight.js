import React, { Component } from "react";

class StrobeLight extends Component {
    state = {
        color: "green",
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                return {
                    color:
                        prevState.color === "green" ? this.props.color : "green",
                };
            });
        }, this.props.frequency);
    }

    render() {
        const { color } = this.state;
        return (
            <div
                style={{ width: "500px", height: "50px", background: color }}
            ></div>
        );
    }
}

export default function App() {
    return <StrobeLight color={"red"} frequency={500} />;
}
