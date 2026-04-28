export function capitalize(string) {
  if (string.length === 0) return '';
  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return string.split('').reverse().join('');
}

export function calculator() {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      if (b === 0) throw new Error('Cannot divide by zero');
      return a / b;
    },
  };
}

// Helper function for Caesar Cipher (private)
function shiftChar(char, shift) {
  const code = char.charCodeAt(0);
  const isUpper = char >= 'A' && char <= 'Z';
  const isLower = char >= 'a' && char <= 'z';
  
  if (!isUpper && !isLower) return char;
  
  const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  const shifted = ((code - base + shift) % 26 + 26) % 26 + base;
  
  return String.fromCharCode(shifted);
}

export function caesarCipher(string, shift) {
  // Normalize shift to 0-25 range
  const normalizedShift = ((shift % 26) + 26) % 26;
  return string
    .split('')
    .map(char => shiftChar(char, normalizedShift))
    .join('');
}

export function analyzeArray(array) {
  if (array.length === 0) {
    // 👇 Fixed: min: undefined add kiya
    return { average: 0, min: undefined, max: undefined, length: 0 };
  }

  const min = Math.min(...array);
  const max = Math.max(...array);
  const sum = array.reduce((acc, val) => acc + val, 0);
  const average = sum / array.length;

  return {
    average,
    min,
    max,
    length: array.length,
  };
}