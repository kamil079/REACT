import React, { useEffect, useState } from "react";

const NumberInfo = ({ number }) => {
  const [nr, setNr] = useState(number);

  return (
    <h1>
      {nr}<br/>
      {nr && nr % 2 == 0 ? "parzysta" : "nieparzysta"}<br/>
      {Math.log2(nr) % 1 === 0 ? 'jest' : null}{/*math log from google*/}

    </h1>
  );
};

export default () => {
  return <NumberInfo number={5} />;
};
