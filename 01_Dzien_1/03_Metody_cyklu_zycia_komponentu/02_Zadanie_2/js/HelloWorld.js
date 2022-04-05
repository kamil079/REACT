import React, { Component } from "react";

class HelloWorld extends Component {
  state = {
    word: "hello world!",
  };

  componentDidMount() {
    this.timeOutId = setTimeout(() => {
      this.setState((prevState,props) => {
        return {
          word: (prevState.word = "hello everyone"),
        };
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutId);
  }

  render() {
    const { word } = this.state;
    return <h1>{word}</h1>;
  }
}

export default function App() {
  return <HelloWorld />;
}
