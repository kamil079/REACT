import React, { Component } from "react";

class AnotherColor extends Component {
    state = {
        color: "yellow",
    };

    componentDidMount() {
        this.timeOutId = setTimeout(() => {
            this.setState((prevState) => {
                return {
                    color: (prevState.color = "blue"),
                };
            });
        }, 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeOutId);
    }

    render() {
        const { color } = this.state;
        return (
            <div
                style={{ height: "100px", width: "100px", background: color }}
            ></div>
        );
    }
}

export default function App() {
    return <AnotherColor />;
}
