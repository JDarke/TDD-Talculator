import React from "react";
import FormulaScrn from "../FormulaScrn/FormulaScrn";
import Value from "../Value/Value";

const Display = ({ outputSize, formula, output }) => {
  return (
    <div className="display">
      <FormulaScrn formula={formula} />
      <Value output={output} outputSize={outputSize}/>
    </div>
  );
};

export default Display;
