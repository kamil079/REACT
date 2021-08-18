import React, {Component} from "react";
import ReactDOM from "react-dom";

function UpperCaseText(props) {
  return <h2>{props.text.toLocaleUpperCase()}</h2>;
}


ReactDOM.render(
  <h1>Hello, World!</h1>,
  document.getElementById("app")
);
