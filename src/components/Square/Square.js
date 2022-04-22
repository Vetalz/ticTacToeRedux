import React from 'react';

const Square = ({index, values, chooseSquare}) => {
  return (
    <div onClick={() => chooseSquare(index)} className={`square ${values[index] === 'X' ? 'cross' : 'toe'}`}>
      <span>{values[index]}</span>
    </div>
  );
};

export default Square;