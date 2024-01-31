/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let map = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (map.has(str1[i].toUpperCase())) {
      map.set(str1[i].toUpperCase(), map.get(str1[i].toUpperCase()) + 1);
    } else {
      map.set(str1[i].toUpperCase(), 1);
    }
  }
  // console.log(map);
  for (let i = 0; i < str2.length; i++) {
    if (map.has(str2[i].toUpperCase())) {
      map.set(str2[i].toUpperCase(), map.get(str2[i].toUpperCase()) - 1);
    }
  }
  // console.log(map);
  for (let key of map.keys()) {
    if (map.get(key) != 0) {
      return false;
    }
  }

  return true;
}
// isAnagram("Debit Card", "Bad Credit");
module.exports = isAnagram;
