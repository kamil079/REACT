import React, { useState } from "react";
import ButtonToClick from './ButtonToClick';

const ButtonCounter = () => {
    const [clicked, setClick] = useState(0)
    const handleClickCount = () => {
        setClick(prevState => prevState + 1)
    }

    return (
        <>
            <div>
                <h1>{clicked}</h1>
                <ButtonToClick onClick={handleClickCount}/>
                <ButtonToClick onClick={handleClickCount}/>
            </div>
        </>
    );
};

export default ButtonCounter;
