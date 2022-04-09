import React, { useState, useEffect } from "react";

const CustomTitle = () => {
    const [counter, setCounter] = useState(1);

    const increment = () => {
        setCounter((prevStaet) => prevStaet + 1);
    };

    useEffect(() => {
        document.title = `clicked: ${counter}`
    })

    

    return (
        <p onClick={increment} style={{fontSize: counter * 1.2 + 'rem'}}>
            kliknieto mnie juz {counter} razy
        </p>
    );
};

export default () => {
    return <CustomTitle />;
};
