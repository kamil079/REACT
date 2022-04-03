import React, { Component } from "react";

// class Clock extends Component {
//     render() {
//         return <strong>{this.props.date.toLocaleTimeString()}</strong>;
//     }
// }

// export default class App extends Component {
//     state = {
//         time: new Date(),
//     };
//     render() {
//         return (
//             <>
//                 <h1>Czas na świecie</h1>
//                 <Clock date={this.state.time} />
//             </>
//         );
//     }
// }

class CurrentDate extends Component {
    state = {
        today: this.props.time,
    };

    handleClick = () => {
        this.setState((prevState) => ({
            today: prevState.today + 1,
        }));
    };

    render() {
        const { today } = this.state;
        return (
            <>
                <h1>{today}</h1>
                <button onClick={this.handleClick}>date update</button>
            </>
        );
    }
}

let date = new Date();

export default function App() {
    return <CurrentDate time={date.toLocaleString()} />;
}
