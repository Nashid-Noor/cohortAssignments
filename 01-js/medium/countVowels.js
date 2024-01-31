/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let map = new Map();
  map.set("a", 1);
  map.set("e", 1);
  map.set("i", 1);
  map.set("o", 1);
  map.set("u", 1);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;
