import React from "react";

const Buttons = () => {
  return (
    <div className="buttons">
        <button value="AC" className="clear" onMouseDown={null}>AC</button>
        <button value="CE" className="clear" onClick={null}>CE</button>
        <button value="±" className="operator" onClick={null}>±</button>
        <button value="/" className="operator" onClick={null}>/</button>
        <button value="7" className="number" onClick={null}>7</button>
        <button value="8" className="number" onClick={null}>8</button>
        <button value="9" className="number" onClick={null}>9</button>
        <button value="x" className="operator" onClick={null}>x</button>
        <button value="4" className="number" onClick={null}>4</button>
        <button value="5" className="number" onClick={null}>5</button>
        <button value="6" className="number" onClick={null}>6</button>
        <button value="-" className="operator" onClick={null}>-</button>
        <button value="1" className="number" onClick={null}>1</button>
        <button value="2" className="number" onClick={null}>2</button>
        <button value="3" className="number" onClick={null}>3</button>
        <button value="+" className="operator" onClick={null}>+</button>
        <button value="0" className="number wide" onClick={null}>0</button>
        <button value="." className="number" onClick={null}>.</button>
        <button value="=" className="operator eval" onClick={null}>=</button>
    </div>
  );
};

export default Buttons;
