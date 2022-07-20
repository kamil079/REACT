import React, { useState } from "react";
import AdultStuffBox  from './AdultStuffBox'

const AdultStuff = () => {
    const [age, setAge] = useState("");

    return (
        <form>
            <input
                type="number"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <AdultStuffBox ageProp={age}/>
        </form>
    );
};

export default AdultStuff;
