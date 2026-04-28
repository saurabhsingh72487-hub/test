import { 
  capitalize, 
  reverseString, 
  calculator, 
  caesarCipher, 
  analyzeArray 
} from './index.js';  // 👈 ./index.js

describe('String Manipulation Functions', () => {
  test('capitalize: capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  test('capitalize: works with single character', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('1')).toBe('1');
  });

  test('capitalize: handles empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('reverseString: reverses string correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('123')).toBe('321');
  });

  test('reverseString: handles empty string', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('Calculator', () => {
  const calc = calculator();

  test('add: adds two numbers', () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(0, 0)).toBe(0);
    expect(calc.add(-1, 1)).toBe(0);
  });

  test('subtract: subtracts two numbers', () => {
    expect(calc.subtract(5, 3)).toBe(2);
    expect(calc.subtract(0, 0)).toBe(0);
    expect(calc.subtract(3, 5)).toBe(-2);
  });

  test('multiply: multiplies two numbers', () => {
    expect(calc.multiply(2, 3)).toBe(6);
    expect(calc.multiply(0, 5)).toBe(0);
    expect(calc.multiply(-2, 3)).toBe(-6);
  });

  test('divide: divides two numbers', () => {
    expect(calc.divide(6, 2)).toBe(3);
    expect(calc.divide(5, 2)).toBe(2.5);
    expect(calc.divide(0, 5)).toBe(0);
  });

  test('divide: throws error for division by zero', () => {
    expect(() => calc.divide(5, 0)).toThrow('Cannot divide by zero');
  });
});

describe('Caesar Cipher', () => {
  test('shifts lowercase letters correctly', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('abc', 1)).toBe('bcd');
  });

  test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('z', 1)).toBe('a');
  });

  test('preserves case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('AaBbCc', 1)).toBe('BbCcDd');
  });

  test('leaves non-alphabetic characters unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('123 !@#', 5)).toBe('123 !@#');
  });

  test('handles negative shift', () => {
    expect(caesarCipher('abc', -1)).toBe('zab');
  });

  test('handles shift greater than 26', () => {
    expect(caesarCipher('abc', 27)).toBe('bcd');
    expect(caesarCipher('abc', 29)).toBe('def');
  });
});

describe('analyzeArray', () => {
  test('returns correct analysis for example array', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test('handles single element array', () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test('handles empty array', () => {
    const result = analyzeArray([]);
    expect(result).toEqual({
      average: 0,
      min: undefined,  // 👈 Fixed!
      max: undefined,
      length: 0,
    });
  });

  test('handles negative numbers', () => {
    const result = analyzeArray([-1, -5, 3, 0]);
    expect(result).toEqual({
      average: -0.75,
      min: -5,
      max: 3,
      length: 4,
    });
  });
});