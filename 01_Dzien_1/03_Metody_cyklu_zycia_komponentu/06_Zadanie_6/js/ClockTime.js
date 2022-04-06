import React, { Component } from "react";

export default class ClockTime extends Component {

    render() {
        const {date} = this.props
        return <h1>{date}</h1>;
    }
}