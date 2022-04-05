import React, { Component } from "react";

class TextTyper extends Component {
    state = {
        word: "witaj",
    };


    handleClick = () => {
        const letter = [...prevState.word];
        
        this.setState((prevState) => {
            
            return {
                word: [...prevState.word],
            };
        }, () => {
            for(let i = 0; i < this.state.word.length; i++) {
                console.log(this.state.word[i])
            }
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
