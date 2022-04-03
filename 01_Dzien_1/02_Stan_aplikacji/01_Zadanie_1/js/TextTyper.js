import React, { Component } from "react";

class TextTyper extends Component {
    state = {
        number: nr,
    };

    handleClick = () => {
        // const { number } = this.state;

        this.setState((prevState) => {
            return {
                number: prevState.number + 1,
            };
        });
    };

    render() {
        const { number } = this.state;

        return (
            <>
                <h1>{number}</h1>
                <button onClick={this.handleClick}>click</button>
            </>
        );
    }
}

let nr = 0;

export default function App() {
    return <TextTyper let number={nr} />;
}

// import React from "react";

// export default  function App() {
//     return <TextTyper />;
// };

// class TextTyper extends React.Component {
//     state = {
//         counter: 0,
//     };

//     handleClick = () => {
//         console.log("Działa");

//         this.setState((prevState) => {
//             return {
//                 counter: prevState.counter + 1,
//             };
//         });
//     };

//     render() {
//         return (
//             <>
//                 <h2>Twoje kliknięcia: {this.state.counter}</h2>
//                 <button onClick={this.handleClick}>Kliknij!</button>
//             </>
//         );
//     }
// }
