// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const stringArrayOne = array1.join('');
  const stringArrayTwo = array2.join('');

  return Number(stringArrayOne) + Number(stringArrayTwo);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const newValue = String(value);
  const reversedNewValue = newValue.split('').reverse().join('');

  if (newValue === reversedNewValue) {
    return true;
  } else return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input === '') {
    return 'Required field';
  }

  const newInput = Number(input);

  if (isNaN(newInput) || newInput === 0) {
    return 'Must be a number besides 0';
  }
  return '';
}
