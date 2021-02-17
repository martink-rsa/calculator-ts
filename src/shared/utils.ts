import { add, subtract, multiply, divide, format } from 'mathjs';

export enum Operators {
  ADD = '+',
  SUBTRACT = '-',
  DIVIDE = '÷',
  MULTIPLY = '×',
}

/**
 * Parses an equation that is in the form as an array e.g.
 * [100, Operators.ADD, 100, Operators.SUBTRACT, 50]
 * @param sum Returns a the final answer as a number
 */
export const parseEquation = (sum: (Operators | number)[]): number => {
  let answer: number;

  const divideIndex = sum.indexOf(Operators.DIVIDE);
  const multiplyIndex = sum.indexOf(Operators.MULTIPLY);
  const addIndex = sum.indexOf(Operators.ADD);
  const subtractionIndex = sum.indexOf(Operators.SUBTRACT);

  if (divideIndex !== -1) {
    answer = calculateSum(
      sum[divideIndex - 1] as number,
      sum[divideIndex] as Operators,
      sum[divideIndex + 1] as number,
    );
    sum[divideIndex - 1] = answer;
    sum.splice(divideIndex, 2);
    if (sum.length > 1) {
      return parseEquation(sum);
    }
  } else if (multiplyIndex !== -1) {
    answer = calculateSum(
      sum[multiplyIndex - 1] as number,
      sum[multiplyIndex] as Operators,
      sum[multiplyIndex + 1] as number,
    );
    sum[multiplyIndex - 1] = answer;
    sum.splice(multiplyIndex, 2);
    if (sum.length > 1) {
      return parseEquation(sum);
    }
  } else if (addIndex !== -1) {
    answer = calculateSum(
      sum[addIndex - 1] as number,
      sum[addIndex] as Operators,
      sum[addIndex + 1] as number,
    );
    sum[addIndex - 1] = answer;
    sum.splice(addIndex, 2);
    if (sum.length > 1) {
      return parseEquation(sum);
    }
  } else if (subtractionIndex !== -1) {
    answer = calculateSum(
      sum[subtractionIndex - 1] as number,
      sum[subtractionIndex] as Operators,
      sum[subtractionIndex + 1] as number,
    );
    sum[subtractionIndex - 1] = answer;
    sum.splice(subtractionIndex, 2);
    if (sum.length > 1) {
      return parseEquation(sum);
    }
  } else {
    throw new Error('Unable to find matching operator');
  }
  return sum[0] as number;
};

/**
 * Solves the equation of a + b = x, where the operator is supplied
 *
 * @param leftOperand - The left operand of the sum, 'a'
 * @param operator - The operator, such as + - x ÷
 * @param rightOperand - The right operand of the sum, 'b'
 * @return {number} - The answer of the equation
 *
 */
export const calculateSum = (
  leftOperand: number,
  operator: Operators,
  rightOperand: number,
): number => {
  let answer;
  switch (operator) {
    case Operators.ADD:
      answer = add(leftOperand, rightOperand);
      break;
    case Operators.SUBTRACT:
      answer = subtract(leftOperand, rightOperand);
      break;
    case Operators.MULTIPLY:
      answer = multiply(leftOperand, rightOperand);
      break;
    case Operators.DIVIDE:
      answer = divide(leftOperand, rightOperand);
      break;
  }
  answer = format(answer, { precision: 14 });
  return +answer;
};
