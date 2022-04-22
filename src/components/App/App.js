import React, {useMemo, useCallback} from 'react';
import checkPatterns from "../../checkPatterns";
import Status from "../Status/Status";
import Button from "../Button/Button";
import Field from "../Field/Field";

const App = ({player, setPlayer, values, setValues}) => {
  const winner = useMemo(() => {
    for (let i = 0; i < checkPatterns.length; i++) {
      if (values[checkPatterns[i][0]] === '') {
        continue;
      }

      if (values[checkPatterns[i][0]] === values[checkPatterns[i][1]] &&
        values[checkPatterns[i][0]] === values[checkPatterns[i][2]]) {
        return values[checkPatterns[i][0]];
      }
    }
    return null;
  }, [values]);

  const isDraw = useMemo(() => {
    let filled = true;
    for (const value of values) {
      if (value === '') {
        filled = false;
      }
    }
    return filled;

  }, [values]);

  const isEnd = useMemo(() => winner || isDraw, [winner, isDraw]);

  const chooseSquare = useCallback((index) => {
    if (!isEnd) {
      if (values[index] === '') {
        const newValues = [...values];
        newValues[index] = player;

        if (player === 'X') {
          setPlayer('O');
        } else {
          setPlayer('X');
        }
        setValues(newValues);
      }
    }
  },[player, values, isEnd]);

  const playAgain = useCallback(() => {
    setValues(new Array(9).fill(''));
    setPlayer('X');
  }, [isEnd]);

  return (
    <React.Fragment>
      <Status player={player} winner={winner} isEnd={isEnd}/>
      <Field values={values} chooseSquare={chooseSquare}/>
      <Button playAgain={playAgain}/>
    </React.Fragment>
  );
};

export default App;