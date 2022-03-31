import React, { Component } from "react";

class ShowUserClass extends Component {    

    render() {

        const { name, surname } = this.props;

        let handleClick = () => {
            console.log(name, surname)
        }

        return <button onClick={handleClick}>User data</button>;
    }
}

export default ShowUserClass;
