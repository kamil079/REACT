import React, { useState, useEffect } from "react";
import FakeAPI from "./data/fakeAPI.js";

const AccountData = () => {
  const [data, setData] = useState(false);

  FakeAPI.then((data) => {
    setData((prevState) => (prevState, data));
  });

  console.log(data);

  return (
    <>
      <ul>
        {data &&
          data.map((el, i) => {
            return (
              <li key={i}>
                <p>Dnia: {el.day}</p>
                <p>Saldo: {el.balance}</p>
                <p>Reszta: {el.change}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default () => {
  return <AccountData />;
};
