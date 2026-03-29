/**
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
  return a + b;
}

/**
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  let s = "";
  for(let i=str.length-1; i>=0; i--){
    s+=str[i];
  }
  return s;
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number} The largest number in the array. Return null if the array is empty.
 */
function findLargest(numbers) {
  if(numbers.length===0){
    return null;
  }
  let max = numbers[0];
  for(let i=1; i<numbers.length; i++){
    if(numbers[i]>max){
      max = numbers[i];
    }
  }
  return max;
}

/**
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * The check should be case-insensitive.
 */
function isPalindrome(str) {
  let s = str.toLowerCase();
  let reversed = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s.charAt(i);
  }

  return s === reversed;
}
/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number[]} A new array containing only the even numbers from the original array.
 */
function filterEvenNumbers(numbers) {
  let a = [];
  for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
      a.push(numbers[i]);
    }
  }
  return a;
}


// Do not edit the line below.
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};

