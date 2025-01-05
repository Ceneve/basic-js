const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const length = arr.length;
  let indexArray = [];
  let resultArray = [];
  for (let i = 0; i < length; i += 1) {
      if (arr[i] === -1) {
          indexArray.push(i)
      }
  }
  const sortedArray = arr.filter(value => value !== -1).sort((a, b) => a - b);
  let sortedArrayIndex = 0;
  for (let i = 0; i < length; i += 1) {
      if(indexArray.includes(i)) {
          resultArray.push(-1);
      }
      else {
          resultArray.push(sortedArray[sortedArrayIndex]);
          sortedArrayIndex += 1;
      }
  }
  return resultArray;
}

module.exports = {
  sortByHeight
};
