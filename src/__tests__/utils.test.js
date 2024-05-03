const isPalindrome = require('../utils');

test('Empty string should return false', () => {
    expect(isPalindrome('')).toBe(false);
  });
  
  test('Palindrome word should return true', () => {
    expect(isPalindrome('Racecar')).toBe(true);
  });
  
  test('Non-palindrome word should return false', () => {
    expect(isPalindrome('Hello')).toBe(false);
  });
  
  test('Input with non-alphabetic characters should throw an error', () => {
    expect(() => isPalindrome('12321')).toThrow('Input must contain only alphabetic characters');
  });
  
  test('Non-string input should throw an error', () => {
    expect(() => isPalindrome(12321)).toThrow('Input must be a string');
  });