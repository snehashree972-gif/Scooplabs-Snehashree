import React, { useState } from 'react';

function ColorButton() {
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setColor(color === 'black' ? 'white' : 'black');
  };

  return (
    <button
      style={{
        backgroundColor: color,
        color: color === 'black' ? 'white' : 'black',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      Click me!
    </button>
  );
}

export default ColorButton;


