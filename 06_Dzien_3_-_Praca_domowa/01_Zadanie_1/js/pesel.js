import React, { useState } from "react";

const PESELInput = () => {
    const [pesel, setPesel] = useState("");

    return (
        <form>
            <input
                type="text"
                name="pesel"
                value={pesel}
                onChange={(e) => setPesel(e.target.value)}
            />
            <div>
                {pesel.length == 11 && !isNaN(pesel) ? (
                    <input type="submit" onClick={(e) => e.preventDefault()} />
                ) : (
                    "Niepoprawny nr pesel!"
                )}
            </div>
        </form>
    );
};

export default PESELInput;
