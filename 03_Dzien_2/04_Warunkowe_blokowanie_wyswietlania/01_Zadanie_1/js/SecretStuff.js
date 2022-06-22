import React, { useState } from 'react'

const SecretStuff = ({password, correctPassword, secret}) => {


  return <h1>{password === correctPassword ? secret : null}</h1>
}

export default function App() {
  return <SecretStuff password={'pw'} correctPassword={'pw'} secret={'nobody knows'}/>
};
// import React from "react";

// const SecretStuff = ({ password, correctPassword, secret }) => {
//   return <div>{password === correctPassword ? secret : null}</div>;
// };

// export default () => {
//   return (
//     <SecretStuff
//       password={"1234"}
//       correctPassword={"1234"}
//       secret={"superDuperTajneFajne"}
//     />
//   );
// };
