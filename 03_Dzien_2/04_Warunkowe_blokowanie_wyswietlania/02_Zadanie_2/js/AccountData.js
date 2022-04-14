import React, { useState, useEffect } from "react";
import { electron } from "webpack";
import FakeAPI from "./data/fakeAPI.js";

const AccountData = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    FakeAPI.then((data) => {
    //   setData(prevState => { prevState = data.day})
      console.log(data);
        data.forEach(el => {
            console.log(el.day);
        });
    });
  });

  return (
    

    <>
      <ul>test</ul>
    </>
  );
};

export default () => {
  return <AccountData />;
};
