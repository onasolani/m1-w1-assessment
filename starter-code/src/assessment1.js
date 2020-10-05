// Write a function that returns the product of 2 numbers
function product(x, y) {
    return x*y
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 == 0) {
    return true
} else {
  return false
}
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  maxNum = 0;
  if (a > b){
    maxNum = a;
  } else { maxNum = b;
  } return maxNum;
}


// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  maxNum = 0;
  if (a > b){
    maxNum = a;
  } else { maxNum = b;
  } if (c > maxNum) 
  { maxNum = c;
  } return maxNum;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers == 0){ return 0}
  let sumArray = numbers[0];
  let sumArray1 = 0;
  for (let i = 0; i<numbers.length; i++){
    sumArray1 += numbers[i];
  } return sumArray1;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
// return Math.max.apply(null, numbers)

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
} return max
}

// Return the longest string in an array
function longestString(strings) {
  if (strings.length === 0){
    return null
  }
  let largest = strings[0];
  for (let i = 1; i < strings.length; i++){
    if (strings[i].length > largest.length){
      largest = strings[i]
    }
  }return largest
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.indexOf(wordsArr) === -1) {
    return true
}
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let newArray = [];
  if (wordsArr.length === 0) {
    return false;
  }
  for (let i = 0; i < wordsArr.length; i++) {
    if (newArray.indexOf(wordsArr[i]) === -1) {
      newArray.push(wordsArr[i]);
    }
  }
  return newArray;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {

}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
