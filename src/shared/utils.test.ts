import { parseEquation, calculateSum, Operators } from './utils';

describe('Calculate answer:', () => {
  describe('Calculates correctly with 2 operators', () => {
    it('calculates a 2 operator addition correctly', () => {
      const sum = [100, Operators.ADD, 100];
      const answer = parseEquation(sum);
      expect(answer).toEqual(200);
    });
    it('calculates a 2 operator subtraction correctly', () => {
      const sum = [300, Operators.SUBTRACT, 100];
      const answer = parseEquation(sum);
      expect(answer).toEqual(200);
    });
    it('calculates a 2 operator multiplication correctly', () => {
      const sum = [100, Operators.MULTIPLY, 2];
      const answer = parseEquation(sum);
      expect(answer).toEqual(200);
    });
    it('calculates a 2 operator division correctly', () => {
      const sum = [400, Operators.DIVIDE, 2];
      const answer = parseEquation(sum);
      expect(answer).toEqual(200);
    });
  });

  describe('Calculates correctly with correct precedence', () => {
    it('divides before multiplying', () => {
      const sum = [2, Operators.ADD, 100, Operators.DIVIDE, 5];
      const answer = parseEquation(sum);
      expect(answer).toEqual(22);
    });
    it('handles a complex sum 1', () => {
      const sum = [
        5,
        Operators.ADD,
        45,
        Operators.SUBTRACT,
        5,
        Operators.MULTIPLY,
        100,
        Operators.DIVIDE,
        2,
      ];
      const answer = parseEquation(sum);
      expect(answer).toEqual(-200);
    });
    it('handles a complex sum 2', () => {
      const sum = [
        100,
        Operators.DIVIDE,
        2,
        Operators.ADD,
        90,
        Operators.DIVIDE,
        2,
        Operators.SUBTRACT,
        50,
      ];
      const answer = parseEquation(sum);
      expect(answer).toEqual(45);
    });
  });
});

describe('parseSum:', () => {
  describe('addition', () => {
    it('adds 100 + 100 and returns 200', () => {
      expect(calculateSum(100.5, Operators.ADD, 100.5)).toEqual(201);
    });
    it('adds 100.5 + 100.5 and returns 201', () => {
      expect(calculateSum(100.5, Operators.ADD, 100.5)).toEqual(201);
    });
    it('adds 0.000001 + 0.000001 and returns 0.000002', () => {
      expect(calculateSum(0.000001, Operators.ADD, 0.000001)).toEqual(0.000002);
    });
    it('adds 0.1 + 0.2 and returns 0.3', () => {
      expect(calculateSum(0.1, Operators.ADD, 0.2)).toEqual(0.3);
    });
  });

  describe('subtraction', () => {
    it('minuses 100 - 50 and returns 50', () => {
      expect(calculateSum(100, Operators.SUBTRACT, 50)).toEqual(50);
    });
    it('minuses 10.90 - 5.40 and returns 201', () => {
      expect(calculateSum(10.9, Operators.SUBTRACT, 5.4)).toEqual(5.5);
    });
    it('minuses 0.000002 - 0.000001 and returns 0.000001', () => {
      expect(calculateSum(0.000002, Operators.SUBTRACT, 0.000001)).toEqual(
        0.000001,
      );
    });
    it('minuses 0.3 - 0.2 and returns 0.1', () => {
      expect(calculateSum(0.3, Operators.SUBTRACT, 0.2)).toEqual(0.1);
    });
  });

  describe('multiplication', () => {
    it('multiplies 100 * 5 and returns 500', () => {
      expect(calculateSum(100, Operators.MULTIPLY, 5)).toEqual(500);
    });
    it('multiplies 0.5 * 4 and returns 2', () => {
      expect(calculateSum(0.5, Operators.MULTIPLY, 4)).toEqual(2);
    });
    it('multiplies 0.005 * 0.002 and returns 0.00001', () => {
      expect(calculateSum(0.005, Operators.MULTIPLY, 0.002)).toEqual(0.00001);
    });
    it('multiplies 0.1 * 0.2 and returns 0.02', () => {
      expect(calculateSum(0.1, Operators.MULTIPLY, 0.2)).toEqual(0.02);
    });
    it('multiplies 1 * 0 and returns 0', () => {
      expect(calculateSum(1, Operators.MULTIPLY, 0)).toEqual(0);
    });
  });

  describe('divide', () => {
    it('divides 100 / 5 and returns 20', () => {
      expect(calculateSum(100, Operators.DIVIDE, 5)).toEqual(20);
    });
    it('divides 15 * 4 and returns 3.75', () => {
      expect(calculateSum(15, Operators.DIVIDE, 4)).toEqual(3.75);
    });
    it('divides 0.005 * 0.002 and returns 2.5', () => {
      expect(calculateSum(0.005, Operators.DIVIDE, 0.002)).toEqual(2.5);
    });
    it('divides 0.205 / 100 and returns 0.00205', () => {
      expect(calculateSum(0.205, Operators.DIVIDE, 100)).toEqual(0.00205);
    });
    it('divides by 0 and returns infinity', () => {
      expect(calculateSum(99, Operators.DIVIDE, 0)).toEqual(Infinity);
    });
  });
});
