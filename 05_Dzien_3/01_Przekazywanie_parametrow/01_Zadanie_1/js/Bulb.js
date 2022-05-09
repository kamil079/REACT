import React, { useState } from "react";

const Bulb = () => {
  const [bulb, setBulb] = useState("white");
  const [txt, setTxt] = useState("ON");

  let handleChange = () => {
    setBulb(bulb === "white" ? "yellow" : "white");
    setTxt(txt === "OFF" ? "ONN" : "OFF");
  };

  return (
    <div style={{ height: "200px", width: "200px", background: bulb }}>
      <button onClick={handleChange}>{txt}</button>
    </div>
  );
};

export default () => {
  return <Bulb />;
};
