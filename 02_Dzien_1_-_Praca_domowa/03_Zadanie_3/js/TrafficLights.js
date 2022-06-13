import React, { Component } from "react";

let circle = {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
};

class TrafficLights extends Component {
    state = {
        light1: "red",
        light2: "black",
        light3: "black",
    };

    componentDidMount() {
        let toClear = [];
        this.timeOutId1 = setTimeout(() => {
            this.setState((prevState) => {
                return {
                    light1: (prevState.light1 = "red"),
                };
            });
        }, 2000);

        this.timeOutId2 = setTimeout(() => {
            this.setState((prevState) => {
                return {
                    light2: (prevState.light2 = "yellow"),
                };
            });
        }, 4000);

        this.timeOutId3 = setTimeout(() => {
            this.setState((prevState) => {
                return {
                    light1: (prevState.light1 = "black"),
                    light2: (prevState.light1 = "black"),
                    light3: (prevState.light3 = "green"),
                };
            });
        }, 5000);

        this.timeOutId4 = setTimeout(() => {
            this.setState((prevState) => {
                return {
                    light1: (prevState.light1 = "black"),
                    light2: (prevState.light1 = "yellow"),
                    light3: (prevState.light3 = "black"),
                };
            });
        }, 7000);

        this.timeOutId5 = setTimeout(() => {
            this.setState((prevState) => {
                return {
                    light1: (prevState.light1 = "red"),
                    light2: (prevState.light1 = "black"),
                    light3: (prevState.light3 = "black"),
                };
            });
        }, 8000);

        toClear.push(
            this.timeOutId1,
            this.timeOutId2,
            this.timeOutId3,
            this.timeOutId4,
            this.timeOutId5
        );
    }

    componentWillUnmount() {
        this.toClear.forEach((el) => {
            clearTimeout(el);
        });
    }

    render() {
        const { light1 } = this.state;
        const { light2 } = this.state;
        const { light3 } = this.state;
        return (
            <>
                <div>
                    <div
                        id={light1}
                        style={{ ...circle, background: light1 }}
                    ></div>
                    <div
                        id={light2}
                        style={{ ...circle, background: light2 }}
                    ></div>
                    <div
                        id={light3}
                        style={{ ...circle, background: light3 }}
                    ></div>
                </div>
            </>
        );
    }
}

export default function App() {
    return <TrafficLights redTime={5000} yellowTime={3000} greenTime={4000} />;
}
