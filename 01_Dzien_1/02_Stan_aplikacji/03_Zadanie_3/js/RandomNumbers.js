import React, { Component } from "react";

class RandomNumbers extends Component {
    state = {
        arr: [],
    };

    randomNr = () => {
        this.setState((prevState) => {
            return {
                arr: [
                    ...prevState.arr,
                    Math.floor(Math.random() * (999 - 100 + 1)),
                ],
            };
        });
    };

    render() {
        const { arr } = this.state;
        return (
            <>
                <ul>
                    {arr.forEach((el, i) => {
                        return <li key={i}>{el}</li>;
                    })}
                </ul>
                <button onClick={this.randomNr}>random nr</button>
            </>
        );
    }
}

export default function App() {
    return <RandomNumbers />;
}
