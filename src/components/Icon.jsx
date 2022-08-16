import React from 'react';

function Icon({ name, size = null , ...rest}) {
  const sizes = size ? { width: size, height: size} : '';

  return (
    <svg className={`icon-${name}`} {...sizes} {...rest}>
      <use xlinkHref={`/sprite.svg#${name}`}></use>
    </svg >
  )
}

export default Icon;