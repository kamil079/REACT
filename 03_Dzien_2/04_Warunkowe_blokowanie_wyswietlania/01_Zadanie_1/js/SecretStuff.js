import React from "react";

const SecretStuff = ({ password, correctPassword, secret }) => {
  return <div>{password === correctPassword ? secret : null}</div>;
};

export default () => {
  return (
    <SecretStuff
      password={"1234"}
      correctPassword={"1234"}
      secret={"superDuperTajneFajne"}
    />
  );
};
