const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const listS1 = {};
  const listS2 = {};

  for (let letter of s1) {
      listS1[letter] = (listS1[letter] || 0) + 1;
  }

  for (let letter of s2) {
      listS2[letter] = (listS2[letter] || 0) + 1;
  }

  let count = 0;
  for (let value in listS1) {

      if (listS2[value]) {
          count += Math.min(listS1[value], listS2[value]);
      }
  }
    return count;
}

module.exports = {
  getCommonCharacterCount
};
