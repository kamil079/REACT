import React from "react";

const PassParameter = () => {

    const handleClickButton = (txt,e) =>{
        console.log(txt)
        e.preventDefault()
    }

    return <a href="#" onClick={(e)=>handleClickButton("igor to boss",e)}>link</a>
}

export default PassParameter;
