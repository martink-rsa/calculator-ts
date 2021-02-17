import React, { useState } from 'react';
import * as S from './Calculator.style';
import { parseEquation, Operators } from '../shared/utils';

const INPUT_CHARACTER_LIMIT = 16;

export default function Calculator() {
  /** Holds the equation where an operator is always surrounded by an operand */
  const [calculationArr, setCalculationArr] = useState<(number | Operators)[]>(
    [],
  );

  /** Flag to see if the last user action was an operator */
  const [isOperatorLastAction, setOperatorLastAction] = useState(false);

  /** The current input of the user, either an operand or operator */
  const [currentValue, setCurrentValue] = useState<number | string | Operators>(
    0,
  );

  const [equationDisplay, setEquationDisplay] = useState<string>('');

  /**
   * Parses numbers and a dot/decimal point inputs, given by the
   * HTML button event.
   * @param event
   */
  const handleInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    let value = event.currentTarget.value;

    // Input no longer allowed after X number of characters
    if (currentValue.toString().length >= INPUT_CHARACTER_LIMIT) {
      return;
    }

    // Don't append to previous input if an operator was last used
    let currentStringValue = '';
    if (isOperatorLastAction) {
      currentStringValue = value;
      setOperatorLastAction(false);
    } else {
      currentStringValue = currentValue.toString() + value;
    }

    if (value === '.') {
      // Appending only if there is no dot '.' in value
      if (currentValue.toString().indexOf('.') === -1) {
        setCurrentValue(currentStringValue);
      }
    } else {
      setCurrentValue(Number(currentStringValue));
    }
  };

  /**
   * Parses math operators, given by the HTML button event.
   * @param event
   */
  const handleOperator = (event: React.MouseEvent<HTMLButtonElement>) => {
    let operator: Operators;

    // Do not allow operators to be pressed again. This is not ideal
    //    as a user cannot change their previous operator. It should
    //    be changed to accommodate the changing of operators
    if (isOperatorLastAction) {
      return;
    }

    const textOperator = event.currentTarget.value;
    switch (textOperator) {
      case '+':
        operator = Operators.ADD;
        break;
      case '-':
        operator = Operators.SUBTRACT;
        break;
      case '*':
        operator = Operators.MULTIPLY;
        break;
      case '/':
        operator = Operators.DIVIDE;
        break;
      default:
        throw new Error('Incorrect operator type supplied');
    }
    // Adds a format of [number, Operator] to the array
    setCalculationArr((prevState) => {
      const stateArray = [...prevState];
      stateArray.push(Number(currentValue));
      stateArray.push(operator);
      return stateArray;
    });
    setOperatorLastAction(true);
    setCurrentValue(operator);
    setEquationDisplay(
      `${calculationArr.join(' ')} ${currentValue} ${operator}`,
    );
  };

  const handlePlusMinus = () => {
    setCurrentValue((prevState) => {
      let value = Number(prevState) * -1;
      return value;
    });
  };

  /**
   * Clears the current values of the calculator
   */
  const handleClear = () => {
    setCurrentValue(0);
    setCalculationArr([]);
    setEquationDisplay('');
  };

  /**
   * Performs a final calculation on the user's previous
   * inputs
   */
  const handleCalculate = () => {
    // Array is cleared after each calculation so you cannot calculate
    //    successively. This is currently to handle errors. The ability
    //    to calculate and use prior inputs should be added
    if (calculationArr.length > 1) {
      const answer = parseEquation([...calculationArr, Number(currentValue)]);
      setCurrentValue(answer);
      setCalculationArr([]);
      setEquationDisplay(
        `${calculationArr.join(' ')} ${currentValue} = ${answer}`,
      );
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.ControlGrid>
          <S.DisplayContainer>
            <S.DisplayHistory data-testid="calculator-display-history">
              {equationDisplay}
            </S.DisplayHistory>
            <S.DisplayInput data-testid="calculator-display-input">
              {currentValue}
            </S.DisplayInput>
          </S.DisplayContainer>
          <S.Button></S.Button>
          <S.Button></S.Button>
          <S.Button
            onClick={handlePlusMinus}
            value="plus-minus"
            data-testid="calculator-operator-plus-minus"
          >
            ±
          </S.Button>
          <S.Button onClick={handleClear} data-testid="calculator-key-clear">
            C
          </S.Button>
          <S.Button
            onClick={handleInput}
            value="7"
            data-testid="calculator-key-7"
          >
            7
          </S.Button>
          <S.Button
            onClick={handleInput}
            value="8"
            data-testid="calculator-key-8"
          >
            8
          </S.Button>
          <S.Button
            onClick={handleInput}
            value="9"
            data-testid="calculator-key-9"
          >
            9
          </S.Button>
          <S.Button
            onClick={handleOperator}
            value="/"
            data-testid="calculator-operator-divide"
          >
            ÷
          </S.Button>
          <S.Button
            onClick={handleInput}
            value="4"
            data-testid="calculator-key-4"
          >
            4
          </S.Button>
          <S.Button
            onClick={handleInput}
            value="5"
            data-testid="calculator-key-5"
          >
            5
          </S.Button>
          <S.Button
            onClick={handleInput}
            value="6"
            data-testid="calculator-key-6"
          >
            6
          </S.Button>
          <S.Button
            onClick={handleOperator}
            value="*"
            data-testid="calculator-operator-multiply"
          >
            ×
          </S.Button>
          <S.Button
            onClick={handleInput}
            value="1"
            data-testid="calculator-key-1"
          >
            1
          </S.Button>
          <S.Button
            onClick={handleInput}
            value="2"
            data-testid="calculator-key-2"
          >
            2
          </S.Button>
          <S.Button
            onClick={handleInput}
            value="3"
            data-testid="calculator-key-3"
          >
            3
          </S.Button>
          <S.Button
            onClick={handleOperator}
            value="-"
            data-testid="calculator-operator-minus"
          >
            -
          </S.Button>
          <S.Button
            onClick={handleInput}
            value="0"
            data-testid="calculator-key-0"
          >
            0
          </S.Button>
          <S.Button
            onClick={handleInput}
            value="."
            data-testid="calculator-key-dot"
          >
            .
          </S.Button>
          <S.Button
            data-testid="calculator-key-equals"
            value="="
            onClick={handleCalculate}
          >
            =
          </S.Button>
          <S.Button
            onClick={handleOperator}
            value="+"
            data-testid="calculator-operator-plus"
          >
            +
          </S.Button>
        </S.ControlGrid>
      </S.Container>
    </S.Wrapper>
  );
}
