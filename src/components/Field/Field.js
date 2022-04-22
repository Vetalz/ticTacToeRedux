import React from 'react';
import Square from "../Square/Square";

const Field = ({values, chooseSquare}) => {
  return (
    <div className='field'>
      {Array(9).fill(1).map((el, i) =>
        <Square index={i} values={values} chooseSquare={chooseSquare} key={i}/>
      )}
    </div>
  );
};

export default Field;