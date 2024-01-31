/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let startIndex = 0;
  let endIndex = str.length - 1;
  while (startIndex <= endIndex) {
    if (str[startIndex] == " " && str[endIndex] == " ") {
      startIndex++;
      endIndex--;
      continue;
    }
    if (str[startIndex] == " ") {
      startIndex++;
      continue;
    }
    if (str[endIndex] == " ") {
      endIndex--;
      continue;
    }

    if (str[startIndex] != str[endIndex]) {
      return false;
    }
    startIndex++;
    endIndex--;
  }

  return true;
}

module.exports = isPalindrome;
