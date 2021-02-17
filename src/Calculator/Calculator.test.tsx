import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './Calculator';

describe('Numbers displayed', () => {
  test('the number buttons appear on the display', () => {
    render(<Calculator />);
    const display = screen.getByTestId('calculator-display-input');
    expect(display.textContent).toEqual('0');

    const number1 = screen.getByTestId('calculator-key-1');
    userEvent.click(number1);
    userEvent.click(number1);
    userEvent.click(number1);

    expect(display.textContent).toEqual('111');
  });
  test('the user can only use a decimal point once', () => {
    render(<Calculator />);
    const display = screen.getByTestId('calculator-display-input');
    expect(display.textContent).toEqual('0');

    const number1 = screen.getByTestId('calculator-key-1');
    const dot = screen.getByTestId('calculator-key-dot');
    userEvent.click(number1);
    userEvent.click(number1);
    userEvent.click(number1);
    userEvent.click(dot);
    userEvent.click(number1);
    userEvent.click(number1);
    userEvent.click(dot);
    userEvent.click(number1);

    expect(display.textContent).toEqual('111.111');
  });
  test('only X amount of characters can be entered', () => {
    render(<Calculator />);
    const display = screen.getByTestId('calculator-display-input');
    expect(display.textContent).toEqual('0');

    const number1 = screen.getByTestId('calculator-key-1');
    for (let i = 0; i < 20; i += 1) {
      userEvent.click(number1);
    }
    expect(display.textContent?.length).toEqual(16);
  });
});

describe('Basic calculations', () => {
  test('the numbers are added correctly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('calculator-display-input');
    expect(display.textContent).toEqual('0');

    const number1 = screen.getByTestId('calculator-key-1');
    const plus = screen.getByTestId('calculator-operator-plus');
    const equals = screen.getByTestId('calculator-key-equals');

    userEvent.click(number1);
    userEvent.click(plus);
    userEvent.click(number1);
    userEvent.click(equals);

    expect(display.textContent).toEqual('2');
  });

  test('the numbers are minuses correctly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('calculator-display-input');
    expect(display.textContent).toEqual('0');

    const number5 = screen.getByTestId('calculator-key-5');
    const number2 = screen.getByTestId('calculator-key-2');
    const minus = screen.getByTestId('calculator-operator-minus');
    const equals = screen.getByTestId('calculator-key-equals');

    userEvent.click(number5);
    userEvent.click(minus);
    userEvent.click(number2);
    userEvent.click(equals);

    expect(display.textContent).toEqual('3');
  });

  test('the numbers are divided correctly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('calculator-display-input');
    expect(display.textContent).toEqual('0');

    const number8 = screen.getByTestId('calculator-key-8');
    const number2 = screen.getByTestId('calculator-key-2');
    const divide = screen.getByTestId('calculator-operator-divide');
    const equals = screen.getByTestId('calculator-key-equals');

    userEvent.click(number8);
    userEvent.click(divide);
    userEvent.click(number2);
    userEvent.click(equals);

    expect(display.textContent).toEqual('4');
  });
  test('the numbers are multiplied correctly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('calculator-display-input');
    expect(display.textContent).toEqual('0');

    const number5 = screen.getByTestId('calculator-key-5');
    const number2 = screen.getByTestId('calculator-key-2');
    const multiply = screen.getByTestId('calculator-operator-multiply');
    const equals = screen.getByTestId('calculator-key-equals');

    userEvent.click(number5);
    userEvent.click(multiply);
    userEvent.click(number2);
    userEvent.click(equals);

    expect(display.textContent).toEqual('10');
  });
});

describe('Other calculations', () => {
  test('+/- is changes number', () => {
    render(<Calculator />);
    const display = screen.getByTestId('calculator-display-input');
    expect(display.textContent).toEqual('0');

    const number1 = screen.getByTestId('calculator-key-1');
    const plusMinus = screen.getByTestId('calculator-operator-plus-minus');

    userEvent.click(number1);
    userEvent.click(plusMinus);

    expect(display.textContent).toEqual('-1');
  });
});

describe('Clearing the calculator', () => {
  test('it clears after calculation', () => {
    render(<Calculator />);
    const display = screen.getByTestId('calculator-display-input');
    expect(display.textContent).toEqual('0');

    const number1 = screen.getByTestId('calculator-key-1');
    const plus = screen.getByTestId('calculator-operator-plus');
    const equals = screen.getByTestId('calculator-key-equals');
    const clear = screen.getByTestId('calculator-key-clear');

    userEvent.click(number1);
    userEvent.click(plus);
    userEvent.click(number1);
    userEvent.click(equals);

    expect(display.textContent).toEqual('2');

    userEvent.click(clear);

    expect(display.textContent).toEqual('0');
  });
});
