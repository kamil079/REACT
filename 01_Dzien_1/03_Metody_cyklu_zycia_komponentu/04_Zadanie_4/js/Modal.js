import React, { Component } from "react";

class Modal extends Component {
    state = {
        heading: null,
    };

    componentDidMount() {
        this.timeOutId = setTimeout(() => {
            this.setState((prevState) => {
                this.state.heading = true;

                return {
                    heading:
                        prevState.heading === false ? null : this.props.heading,
                };
            });
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeOutId)
    }

    render() {
        const { heading } = this.state;
        return <h2>{heading}</h2>;
    }
}

export default Modal;
