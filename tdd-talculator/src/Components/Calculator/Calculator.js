import React, { useState, useEffect } from "react";
import Display from '../Display/Display'
import Buttons from '../Buttons/Buttons'

const Calculator = () => {
    const ceRegex = new RegExp(/\d*\.?\d*$|(\d*\.?\d*[\+\*\/-])$|\(\S*\)$/),  
        evalRegex = new RegExp(/[+*\/\-\.]+$/),
        signRegex = new RegExp(/(\(*\-\d*\.*\d*\)*)$/),
        warn = 'MAX CHAR LIMIT',
        err = 'ERROR';

    return (
        <div className="container">
            <div className="calculator">
                <h1 className="title">Talculator</h1>
                <Display />
                <Buttons />
                <div className="author"><a href="https://johndarke.net">JohnDarke.net</a></div>
            </div>
        </div>
    );
};

export default Calculator;
