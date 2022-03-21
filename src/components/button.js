import React, { Component } from 'react'
import './button.css';

const STYLES = ['btn--primary','btn--outline'];

const SIZES = ['btn--medium','btn--large','btn--mobile','btn--wide'];

const COLOR = ['primary','blue','black','green'];

const button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor})=>{
        const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle:STYLES[0];
        const checkButtonSize = STYLES.includes(buttonSize)? buttonSize:SIZES[0];
        const checkButtonColor = (buttonColor)? buttonColor:null;

    return (
      <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} 
      onClick={onClick} 
      type={type}>
          {children}
      </button>)
};

export default button