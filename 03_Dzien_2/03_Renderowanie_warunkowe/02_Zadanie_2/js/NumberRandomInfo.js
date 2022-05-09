import React, { useEffect, useState } from "react";

const NumberRandomInfo = () => {
  const [nr, setNr] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let random = Math.ceil(Math.random() * 5);
      setNr((prevState) => (prevState = random));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1>
      {nr > 3 ? `nr ${nr} jest większy od 3` : `nr ${nr} jest mniejszy od 3`}
    </h1>
  );
};

export default function () {
  return <NumberRandomInfo />;
}
