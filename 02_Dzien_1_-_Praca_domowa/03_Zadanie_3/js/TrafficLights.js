import React, { Component } from "react";

let circle = {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
};

class TrafficLights extends Component {
    state = {
        light: 1,
        light2: 2,
        light3: 3,
        color: 'black'
    };

    componentDidMount() {
        this.timeOutId = setTimeout(() => {
            this.setState((prevState) => {
                return {
                    color: (prevState.color = "red"),
                    light: prevState.light,
                };
            });
        }, 2000);

        this.timeOutId = setTimeout(() => {
            this.setState((prevState) => {
                return {
                    color: prevState.color,
                };
            });
        }, 5000);
    }

    render() {
        const { color } = this.state;
        const { light } = this.state;
        const { light2 } = this.state;
        const { light3 } = this.state;
        return (
            <>
                <div>
                    <div
                        id={light}
                        style={{ ...circle, background: color }}
                    ></div>
                    <div
                        id={light2}
                        style={{ ...circle, background: color }}
                    ></div>
                    <div
                        id={light3}
                        style={{ ...circle, background: color }}
                    ></div>
                </div>
            </>
        );
    }
}

export default function App() {
    return <TrafficLights redTime={5000} yellowTime={3000} greenTime={4000} />;
}
