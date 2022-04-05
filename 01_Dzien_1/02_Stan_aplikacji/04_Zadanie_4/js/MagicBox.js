import React, {Component} from 'react';



class MagicBox extends Component {
    state = {
        color: '#000',
    }

    hoverOver = () => {
        this.setState((prevState) => {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            return {
                color: prevState.color = randomColor,
            }
        })
    }


    render() {
        const {color} = this.state;
        let bg = {background:color}
        let style = {
            height: '200px',
            width: '200px',
            border: '3px solid blue'
        }

        return (
            <div onMouseEnter={this.hoverOver} style={{...style, ...bg}}></div>
        )
    }
}


export default function App() {
    return <MagicBox/>
}