import React, { useState } from "react";

const Bulb = () => {
    const [light, setLight] = useState("yellow");

    const lightSwitch = () => {
        setLight(light == "yellow" ? "white" : "yellow");
    };

    return (
        <>
            <div
                style={{
                    background: light,
                    height: "100px",
                    width: "100px",
                }}
            >
                <button onClick={() => lightSwitch()}>{light == 'yellow' ? 'off' : 'on'}</button>
            </div>
        </>
    );
};

export default Bulb;

// import React, { useState } from "react";

// const Bulb = () => {
//   const [bulb, setBulb] = useState("white");
//   const [txt, setTxt] = useState("ON");

//   let handleChange = () => {
//     setBulb(bulb === "white" ? "yellow" : "white");
//     setTxt(txt === "OFF" ? "ONN" : "OFF");
//   };

//   return (
//     <div style={{ height: "200px", width: "200px", background: bulb }}>
//       <button onClick={handleChange}>{txt}</button>
//     </div>
//   );
// };

// export default () => {
//   return <Bulb />;
// };
