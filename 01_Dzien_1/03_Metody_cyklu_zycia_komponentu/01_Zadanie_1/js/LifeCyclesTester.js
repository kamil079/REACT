import React, { Component } from "react";

class LifeCyclesTester extends Component {
  constructor() {
    super();
    console.log("construcotr");
  }

  state = {
    test: 0,
  };

  componentDidMount() {
    console.log("komponent zamontowany");
    this.intervalID = setInterval(() => {
      console.log("komponent zaktualizowany");
      this.setState((prevState) => {
        return {
          test: prevState.test + 1,
        };
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
    console.log("komponent odmontowany");
  }

  render() {
    console.log("renderowanie");
    return <h1>{this.state.test}</h1>;
  }
}

export default function App() {
  return <LifeCyclesTester />;
}
