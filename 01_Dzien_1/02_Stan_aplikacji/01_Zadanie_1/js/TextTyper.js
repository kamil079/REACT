import React, { Component } from "react";

class TextTyper extends Component {
    state = {
        text: "witaj",
    };

    handleClick = () => {
        const {text} = this.state;
        this.setState((prevState) => {
            return {
                text: prevState[0]
            }
        })

        for (let i = 0; i < text.length; i++) {
            console.log(text[i])
        }
    };

    render() {
        const { text } = this.state;

        return (
            <>
                <h1>{text[0]}</h1>
                <button onClick={this.handleClick}>click</button>
            </>
        );
    }
}

// let txt = "witaj";

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
