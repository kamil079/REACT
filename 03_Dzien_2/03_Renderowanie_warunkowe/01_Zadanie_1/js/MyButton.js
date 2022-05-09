import React, {useState} from 'react';

const MyButton = ({text}) => {
    const [txt, setTxt] = useState(text)

    const toggle = () => {
        setTxt(txt === "nie" ? 'tak' : 'nie')

    }

    return <button onClick={toggle}>{txt}</button>
}

export default () => {
    return <MyButton text={'TAK'}/>
}