// TODO:
// - Transform a list of numbers into a list of objects
// - Each object must have a "val" key with the number as its value

/**
 * Creates transform a list of numbers into a list of objects.
 * @param {array} listOfNumbers - a list of numbers
 * @returns a list of objects
 */
function transformToObjects(listOfNumbers) {
  const result = [];

  for (let i = 0; i < listOfNumbers.length; i++) {
    result.push({ val: listOfNumbers[i] });
  }

  return result;
}

// --------------------------------------------------------
// TESTS ZONE
console.log(transformToObjects([1,2,3]));
// --------------------------------------------------------

console.log(JSON.stringify(transformToObjects([1, 2, 3])));
// Expected output: [{val:1},{val:2},{val:3}]
