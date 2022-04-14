import React, { useState, useEffect } from "react";
import FakeAPI from "./data/fakeAPI.js";

const AccountData = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    FakeAPI.then((data) => {
    //   setData(prevState => { prevState = data.day})
      createData(data)
    });
  });

  const createData = (data) => {
      data.map((el,i) => {
          return <li key={i}>{el}</li>
      })
  }

  return (
    <>
      <ul>{createData()}</ul>
    </>
  );
};

export default () => {
  return <AccountData />;
};
