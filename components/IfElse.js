import React from "react";

const IfElse = ({ isTrue, ifBlock, elseBlock }) => {
  return <>{isTrue ? <>{ifBlock}</> : <>{elseBlock}</>}</>;
};

export default IfElse;
