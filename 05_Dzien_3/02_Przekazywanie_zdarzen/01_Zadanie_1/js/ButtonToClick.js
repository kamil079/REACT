import React from 'react'

const ButtonToClick = ({onClick}) => {
    const handleClick =()=>{
        if(typeof onClick === "function") {
            handleClick(clicked)
        }
    }

    return <button onClick={onClick}>Click me!</button>
}


export default ButtonToClick;