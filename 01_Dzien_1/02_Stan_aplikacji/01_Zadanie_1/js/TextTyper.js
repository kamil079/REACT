import React, { Component } from "react";

class TextTyper extends Component {
    state = {
        word: "witaj",
    };

    handleClick = () => {
        this.setState((prevState) => {
            
            return {
                word: prevState.word,
            };
        });
    };

    render() {
        const { word } = this.state;

        return (
            <>
                <h1>{word}</h1>
                <button onClick={this.handleClick}>click</button>
            </>
        );
    }
}

export default function App() {
    return <TextTyper />;
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
