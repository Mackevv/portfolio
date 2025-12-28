import React from 'react';

function Icon({ name, size = null , ...rest}) {
  const sizes = size ? { width: size, height: size} : '';

  return (
    <svg className="icon" {...sizes} {...rest}>
      <use href={`/sprite.svg#${name}`}></use>
    </svg >
  )
}

export default Icon;
