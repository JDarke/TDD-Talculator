import React, { useState, useEffect } from "react";
import Display from "../Display/Display";
import Buttons from "../Buttons/Buttons";

const Calculator = () => {
  const ceRegex = new RegExp(/\d*\.?\d*$|(\d*\.?\d*[\+\*\/-])$|\(\S*\)$/),
    evalRegex = new RegExp(/[+*\/\-\.]+$/),
    signRegex = new RegExp(/(\(*\-\d*\.*\d*\)*)$/),
    warn = "MAX CHAR LIMIT",
    err = "ERROR",
    maxChars = 17,
    [value, setValue] = useState(""),
    [prevValue, setPrevValue] = useState("0"),
    [formula, setFormula] = useState(""),
    [sign, setSign] = useState("+"),
    [last, setLast] = useState(""),
    [output, setOutput] = useState(""),
    [outputSize, setOutputSize] = useState(3.2);

  const reset = () => {
    setPrevValue("0");
    setValue("");
    setFormula("");
    setOutput("");
    setLast("AC");
    setSign("+");
  };

  const handleNumbers = (e) => {
    const newValue = e.target.value;
    if (last === "eval") {
      setValue(newValue);
      setFormula(newValue);
      setOutput(newValue);
    } else if (!value.includes("MAX")) {
      var val = value;
      if (value.length >= maxChars) {
        handleMax();
        setLast("num");
        return;
      } else if (last === "sign" && sign === "-") {
        val += newValue;
        setFormula(formula.replace(signRegex, val));
      } else if (value.length < maxChars) {
        val = last === "op" ? newValue : value + newValue;
        setFormula(formula + newValue);
      }
      setPrevValue(value);
      setValue(val);
      setOutput(parseFloat(val).toLocaleString());
      setOutputSize(getFontSize(val.toString()));
    }
    setLast("num");
  };

  const handleSign = (e) => {
    if (last !== "eval" && last !== "op") {
      if (sign === "+") {
        setFormula(
          formula
            .slice(0, formula.length - value.toString().length)
            .concat("(-" + value + ")")
        );
        setOutput(
          value !== "" ? "-" + parseFloat(value).toLocaleString() : "-"
        );
        setValue("-" + value);
        setSign("-");
      } else {
        let newValue = value.slice(1);
        setFormula(formula.replace(signRegex, newValue));
        setOutput(parseFloat(newValue).toLocaleString());
        setValue(newValue);
        setSign("+");
      }
      setLast("sign");
    }
  };

  const handleOperator = (e) => {
    const operator = e.target.value.replace("x", "*");
    if (last !== "op" && value !== "" && value !== "-") {
      setFormula(formula.replace("=", "") + operator);
      setOutput(operator);
      setValue(operator);
      setPrevValue(value);
      setLast("op");
      setSign("+");
    }
  };

  const handleEval = (e) => {
    if (last !== "eval") {
      try {
        const f = formula.replace(evalRegex, ""),
          result = Math.round(100000000000 * eval(f)) / 100000000000,
          fontSize = getFontSize(result.toString()); // need to rescan if exponent, use if to replace ternary, or use auto-scaling text idea
        setOutput(
          result.toString().length > maxChars
            ? parseFloat(result).toExponential(2)
            : parseFloat(result).toLocaleString()
        );
        setFormula(f + e.target.value);
        setValue(result);
        setPrevValue(value);
        setOutputSize(fontSize);
      } catch (e) {
        setFormula("");
        setOutput(err);
        setValue(err);
        setTimeout(reset(), 2000);
      }
      setLast("eval");
    }
  };

  const handleClear = (e) => {
    if (e.target.value === "AC") {
      reset();
    } else {
      const newFormula = formula.replace(ceRegex, "").replace("=", ""); // refactor into a sep let
      setValue("");
      setOutput("");
      setFormula(newFormula);
      setLast("ce");
    }
  };

  const handleDecimal = (e) => {
    if (last !== "dec" && !value.includes(".")) {
      if (value === "" || last === "op") {
        setValue("0.");
        setOutput("0.");
        setFormula(formula + "0.");
      } else {
        setOutput(parseFloat(value).toLocaleString() + ".");
        setFormula(formula + ".");
        setValue(value + ".");
      }
      setLast("dec");
    }
  };

  const handleMax = () => {
    console.log(`value: ${value}, output: ${output} `);
    setPrevValue(value);
    setValue(warn);
    setOutput(warn);
  
    setTimeout(() => {
      setOutput(parseFloat(prevValue).toLocaleString());
      setValue(prevValue);
      console.log("timeout");
    }, 1000);
  };

  useEffect(() => {
    console.log(`output ${output}`);
  }, [output]);

  const getFontSize = (str) => {
    switch (true) {
      case str.length > maxChars:
        return 1.55;

      case str.length === 9:
        return 3.1;

      case str.length === 10:
        return 2.75;

      case str.length === 11:
        return 2.5;

      case str.length === 12:
        return 2.35;

      case str.length === 13:
        return 2.15;

      case str.length === 14:
        return 2.05;

      case str.length === 15:
        return 1.9;

      case str.length === 16:
        return 1.7;

      case str.length === 17:
        return 1.6;

      default:
        return 3.2;
    }
  };

  //useEffect(() => {
  //console.log("output " + output);
  //var screenWidth = document.querySelector('.output').width;
  //var textWidth;
  //}, [output]);

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="title">Talculator</h1>
        <Display outputSize={outputSize} formula={formula} output={output} />
        <Buttons
          handleNum={handleNumbers}
          handleSign={handleSign}
          handleOp={handleOperator}
          handleEval={handleEval}
          handleClr={handleClear}
          handleDec={handleDecimal}
        />
        <div className="author">
          <a href="https://johndarke.net">JohnDarke.net</a>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
