import React, { useEffect, useState } from "react";
import ShowInfo from "./ShowInfo";

let PropsToState = ({ text }) => {
  const [txt, setTxt] = useState(text);

  useEffect(() => {
    let interval = setInterval(() => {
      setTxt((prevState) => prevState + ".");
    }, 1000);
    return () => clearInterval(interval)
  }, []);

  return (
    <>
      <ShowInfo info={txt} />
      {/* <h1>{txt}</h1> */}
    </>
  );
};

export default () => {
  return <PropsToState text={'some text..'} />;
};
