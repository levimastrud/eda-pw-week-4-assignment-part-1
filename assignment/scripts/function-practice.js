console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Mr. Cheese'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let result = firstNumber + secondNumber;
  return result;
  // return firstNumber + secondNumber;
}
console.log(addNumbers(3,5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  let result = firstNumber * secondNumber * thirdNumber;
  return result;
}
console.log(multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
console.log(isPositive(0));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  let lastItem = array[array.length - 1];
  return lastItem;
}
console.log(getLast(['dog', 'cheese', 'cheesedog']));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find (value, array) {
  let compare = false;
  for (let i = 0; i < array.length; i++){
    if (array[i] === value) {
      compare = true;
    } 
  }
  return compare;
}
console.log(find(0, [9, 5, 3, 3]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let compare = false;
  if (letter === string.charAt(0)) {
    compare = true
  }
  return compare;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  for (i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum;
}
console.log(sumAll([3,5,2,7]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function getPositive(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray.push(array[i])
    }
  }
  return newArray;
}

console.log(getPositive([0, -5, 6, -80, 1, .4, 6, -2]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// This problem is from edabit.com. We have to create a function that
// returns the area of a triangle. 

function getArea (base, height) {
  let a = base * height;
  let area = a / 2;
  return area;
}
console.log(getArea(10,10))