import React, { Component } from "react";

class CurrentDate extends Component {
    state = {
        time: this.props.time,
    };

    updateDate = () => {
        let arr = [];
        this.setState(
            (prevState) => ({
                time: (prevState.time = new Date().toLocaleString()),
                
            }),
            () => {
                arr.push(this.state.time);
                console.log(arr)
            }
        );
    };

    render() {
        const { time } = this.state;
        return (
            <>
                <h1>{time}</h1>
                <button onClick={this.updateDate}>date update</button>
            </>
        );
    }
}

let date = new Date();

export default function App() {
    return <CurrentDate time={date.toLocaleString()} />;
}
