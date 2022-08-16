import React from 'react';
import "./Button.css";

function Button({ btnType = "button", btnStyle, disabled, children, onClick, ...rest }) {
  return (
    <button
      type={btnType}
      className={`btn btn-${btnStyle}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;