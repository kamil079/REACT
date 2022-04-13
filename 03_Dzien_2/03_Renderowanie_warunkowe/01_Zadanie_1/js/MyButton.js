import React, {useState} from 'react';

const MyButton = () => {
    const [txt, setTxt] = useState('NIE')

    const toggle = () => {
        setTxt(txt === 'tak' ? 'nie' : 'tak')
    }

    return <button onClick={toggle}>{txt}</button>
}

export default () => {
    return <MyButton/>
}