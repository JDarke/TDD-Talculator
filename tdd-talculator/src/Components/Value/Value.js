import React from "react";

const Value = ({outputSize, output}) => {
  const style = {fontSize: `${outputSize}em`};
  return (
    <div className="output" style={style}>{output}</div>
  );
};

export default Value;
