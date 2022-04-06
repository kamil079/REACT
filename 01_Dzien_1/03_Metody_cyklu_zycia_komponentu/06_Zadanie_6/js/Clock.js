import React, { Component } from "react";
import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";

class Clock extends Component {
    state = {
        date: new Date(),
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                return {
                    date: (prevState.date = new Date()),
                };
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <>
                <ClockDate date={this.state.date.toLocaleDateString()} />
                <ClockTime date={this.state.date.toLocaleTimeString()} />
            </>
        );
    }
}

export default function App() {
    return <Clock />;
}
