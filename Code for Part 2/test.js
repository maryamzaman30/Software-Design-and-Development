/* I had loads of help from: 
  - This Course module
  - https://blog.logrocket.com/testing-node-js-mocha-chai/
  - https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
  - https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71
    I have used features of chai & mocha, rest of Code is my own */

// Import the 'expect' function from the 'chai' library for assertions
const { expect } = require('chai');

// Import the assert object from the Chai library
const assert = require('chai').assert;

//------------------------------------TEST SET 1-------------------------------------------
// white box testing 

// Import the 'sin' function from calculator (script.js)
const { sin } = require('./script.js');

// Describe a set of tests with a label of 'Test Set 1: Trigonometric Functions - sin(form)'
describe('Test Set 1: Trigonometric Functions - sin(form)', () => 
{
  // Test case 1: Test that checks the validity of the result
  // It checks if the 'sin' function correctly calculates the sine of π/2 & return the answer
  it('sin(π/2) should return 1', () => 
  {
      // 'expect' is an assertion that checks if the sin function returns a value close to 1.
      expect(sin(Math.PI / 2)).to.be.closeTo(1, 0.01);
  });

  // Test case 2: Input type test
  // It checks if the 'sin' function throws an error when the input is non-numeric.
  it('should throw an error for non-numeric input', () => 
  {
      // 'assert' is an assertion that checks if the sin function throws an error with the message 'Invalid input'.
      assert.throws(() => sin('abcd'), Error, 'Invalid input');
  });

  // Test case 3: Test that check larger functionality
  // It checks if the sin function can handle unexpected values correctly like Infinity.
  it('should handle unexpected values correctly', () => 
  {
      // 'assert' is an assertion that checks if the sin function does not return NaN when the input is Infinity.
      assert.isNotNaN(sin(Infinity));
  });
});

//------------------------------------TEST SET 2-------------------------------------------
// Black box testing

// Import the 'changeSign' function from calculator (script.js)
const { changeSign } = require('./script.js');

// Describe a set of tests with a label of 'Test Set 2: changeSign(input)'
describe('Test Set 2: changeSign(input)', function() 
{  
  // Test case 1: test that checks the validity of the result
  // It checks if the changeSign function changes the sign of a positive number.
  it('should change the sign of a positive number', function() 
  {
    // Define an input object with any positive number
    let input_Number = {value: "2"};

    // Call the changeSign function with the input object (Positive number)
    changeSign(input_Number);

    /* Check if the value (which is 2) of the input object has changed to the negative of the original 
      positive number */
    assert.equal(input_Number.value, "-2");
  });

  // Test case 2: Input type test
  /* It checks if the changeSign function changes the sign of zero & 
    correctly handles zero as an input */
  it('should handle zero', function() 
  {
    // Define an input object with numeric zero
    let zero_Input = {value: "0"};

    // Call the changeSign function with the input object (numeric zero)
    changeSign(zero_Input);

    // Check if the value of the input object is still zero
    assert.equal(+zero_Input.value, "0"); /* (+) is used to convert the output to a number to 
    pass as in JS, -0 & 0 are technically different values, even though they are numerically equal*/
  }) ;

  // Test case 3: Test that checks larger functionality
  // It checks if the changeSign function handle non-numeric input correctly.
  it('should handle non-numeric input correctly', function() 
  {
    // Define an input object with any non-numeric value
    let nonNumeric_Input = {value: "abcd"};

    // Call the changeSign function with the input object (abcd)
    changeSign(nonNumeric_Input);

    // Check if the value of the input object (abcd) has a '-' sign prepended to it
    assert.equal(nonNumeric_Input.value, "-abcd");
  });
}); 

//------------------------------------TEST SET 3-------------------------------------------
// white box testing 

// Import the 'checkNum' function from calculator (script.js)
const { checkNum } = require('./script.js');

// Describe a set of tests with a label of 'Test Set 3: checkNum function(str)'
describe('Test Set 3: checkNum function(str)', function() 
{  
  // Test case 1: Input type test
  // It checks if the checkNum function returns a boolean when the input is a valid number string.
  it('should return a boolean', function() 
  {
    // Call the checkNum function with any valid number string & store the result
    let boolean_Result = checkNum('12345');

    // Check if the result is a boolean
    assert.typeOf(boolean_Result, 'boolean');
  });

  // Test case 2: Test that checks the validity of the result
  // It checks if the checkNum function returns true when the input is a valid number string.
  it('should return true for a valid number string', function() 
  {
    // Call the checkNum function with any valid number string & store the result
    let valid_Number_StringResult = checkNum('12345');

    // Check if the result is true (String number is valid)
    assert.isTrue(valid_Number_StringResult);
  });

  // Test case 3: Output type test
  // It checks if the checkNum function throws an error when the input is an invalid number string.
  it('should throw an error for an invalid number string', function() 
  {
    // Call the checkNum function with any invalid number string & check if it throws an error
    assert.throws(() => checkNum('123a45'), Error, 'invalid entry!');
  });
});