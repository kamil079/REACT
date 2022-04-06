import React, { Component } from "react";

export default class ClockDate extends Component {

    render() {
        const {date} = this.props
        return <h1>{date}</h1>;
    }
}