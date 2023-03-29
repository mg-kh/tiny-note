import React from "react";

const If = ({ isTrue, ...props }) => {
  return <>{isTrue && <>{props.children}</>}</>;
};

export default If;
