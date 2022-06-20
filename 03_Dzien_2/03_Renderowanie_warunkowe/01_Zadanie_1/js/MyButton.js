import React, { useState } from 'react';

const MyButton = () => {
    const [txt, setTxt] = useState('nie')

    const changeTxt = () => {
        setTxt(txt == 'nie' ? 'tak' : 'nie')
    }

    return <h1 onClick={changeTxt}>{txt}</h1>
}

export default MyButton;

// import React, {useState} from 'react';

// const MyButton = ({text}) => {
//     const [txt, setTxt] = useState(text)

//     const toggle = () => {
//         setTxt(txt === "nie" ? 'tak' : 'nie')

//     }

//     return <button onClick={toggle}>{txt}</button>
// }

// export default () => {
//     return <MyButton text={'TAK'}/>
// }