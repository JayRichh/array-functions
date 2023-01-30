//! forEach: A function to loop over an array and perform an operation on each element.
function forEach(array, cb) {
  //loop through the array
  for (let i = 0; i < array.length; i++) {
    //call the callback function with the current element, index, and the array
    cb(array[i], i, array);
  }
}


//! map: A function to create a new array by performing an operation on each element of an array.
function map(array, cb) {
  //initialize a new array
  const newArray = [];
  //loop through the array
  for (let i = 0; i < array.length; i++) {
    //push the result of the operation on each element to the new array
    newArray.push(cb(array[i], i, array));
  }

  return newArray;
}

//* const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = map(numbers, function(element, index, array) {
  return element * 2;
});

console.log(doubledNumbers);

//* Output:
//* [2, 4, 6, 8, 10]


//! filter: A function to create a new array from elements of an array that pass a test.
function filter(array, cb) {
  //initialize a new array
  const newArray = [];
  //loop through the array
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    //if the callback function returns true for the current element, push it to the new array
    if (cb(element, i, array)) newArray.push(element);
  }

  return newArray;
}
//* const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = filter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers);
//* output: [2, 4, 6] // Output: [2, 4, 6]


//! reduce: A function to reduce an array to a single value by performing an operation on each element.
function reduce(array, cb, initialValue) {
  //set the currentValue to the initialValue if provided, or to the first element if not
  let currentValue = initialValue;
  //loop through the array
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    //if initialValue is not provided and current iteration is the first, set currentValue to the element
    if (initialValue == null && i === 0) {
      currentValue = element;
    } else {
      //update currentValue with the result of the callback function called with the currentValue, element, index, and array
      currentValue = cb(currentValue, element, i, array);
    }
  }

  return currentValue;
}

//! some: A function to check if at least one element of an array passes a test.
function some(array, cb) {
  //loop through the array
  for (let i = 0; i < array.length; i++) {
    //if the callback function returns true for the current element, return true
    if (cb(array[i], i, array)) return true;
  }

  return false;
}

//! every: A function to check if all elements of an array pass a test.
function every(array, cb) {
  //loop through the array
  for (let i = 0; i < array.length; i++) {
    //if the callback function returns false for the current element, return false
    if (!cb(array[i], i, array)) return false;
  }

  return true;
}

//! flat: A function to flatten an array by a specified depth.
function flat(array, depth = 1) {
  //initialize a
  // newArray variable to store the flattened result
  const newArray = [];
  //loop through the given array
  for (let i = 0; i < array.length; i++) {
    //get current element
    const element = array[i];
    //check if the current element is an array and if the specified depth is greater than 0
    if (Array.isArray(element) && depth > 0) {
      //if so, concatenate the result of calling flat on the current element with the newArray
      newArray.push(...flat(element, depth - 1));
    } else {
      //otherwise, push the current element to the newArray
      newArray.push(element);
    }
  }
  //return the flattened newArray
  return newArray;
}

//! find: A function to find the first element in an array that satisfies a specified condition.
function find(array, cb) {
  //loop through the given array
  for (let i = 0; i < array.length; i++) {
    //get current element
    const element = array[i];
    //check if the current element satisfies the specified condition
    if (cb(element, i, array))
      //if so, return the current element
      return element;
  }
}

//! exports all functions as part of a module
module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
  flat,
  find,
};
