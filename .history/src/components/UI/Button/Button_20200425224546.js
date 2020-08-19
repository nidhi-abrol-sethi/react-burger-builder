import React from "react";

const button = props => (
  <button onClick={props.clicked}> {props.childern}</button>
);

export default button;
