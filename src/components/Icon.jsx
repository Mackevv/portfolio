import React from 'react';

const svgIcons = import.meta.glob('@/assets/icons/*.svg', {
  eager: true,
  import: 'default',
});

const pngIcons = import.meta.glob('@/assets/icons/*.png', {
  eager: true,
  import: 'default',
});

function Icon({ name, size = null , ...rest}) {
  const svgPath = `/src/assets/icons/${name}.svg`;
  const pngPath = `/src/assets/icons/${name}.png`;

  if (svgIcons[svgPath]) {
    return (
      <svg
        className="icon"
        width={size}
        height={size}
        {...rest}
      >
        <use href={`/sprite.svg#${name}`} />
      </svg>
    );
  }

  if (pngIcons[pngPath]) {
    return (
      <img
        src={pngIcons[pngPath]}
        alt={name}
        className="icon-png"
        width={size}
        height={size}
        {...rest}
      />
    )
  }

  return null; // or a default icon
}

export default Icon;
