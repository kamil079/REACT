import React, { Component } from "react";
import ReactDOM from "react-dom";

function UpperCaseText(props) {
    return <h2>{props.text.toLocaleUpperCase()}</h2>;
}

class UpperCaseText2 extends Component {
    render() {
        return <h2>{this.props.text.toLocaleUpperCase()}</h2>;
    }
}

let text = 'hello'

ReactDOM.render(
    <>
        <h1>Hello, World!</h1>
        <UpperCaseText text={text}/>
        <UpperCaseText2 text={text}/>
    </>,
    document.getElementById("app")
);
