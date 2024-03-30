/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    // Get the input values
    let number1 = Number(document.querySelector('#add1').value);
    let number2 = Number(document.querySelector('#add2').value);

    // call the add function and display the result
    document.querySelector('#sum').value = add(number1, number2);
}

// Add an event listener to the button
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    // Get the input values
    let number1 = Number(document.querySelector('#subtract1').value);
    let number2 = Number(document.querySelector('#subtract2').value);

    // call the subtract function and display the result
    document.querySelector('#difference').value = subtract(number1, number2);
}

// Add an event listener to the button
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply (number1, number2) {
    return number1 * number2;
}

const multiplyNumbers = () => {
    // Get the input values
    let number1 = Number(document.querySelector('#factor1').value);
    let number2 = Number(document.querySelector('#factor2').value);

    // call the multiply function and display the result
    document.querySelector('#product').value = multiply(number1, number2);
};

// Add an event listener to the button
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    // Get the input values
    let divided = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    // check if the divisor is not zero
    if (divisor !== 0) {
        // call the divide function and display the result
        document.querySelector('#quotient').value = divide(divided, divisor);
    } else {
        // display an error message
        alert('Error: Cannot divide by zero');
    }

    // call the divide function and display the result
    document.querySelector('#quotient').value = divide(number1, number2);
}

// Add an event listener to the button
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

// Add an event listener to the button
document.querySelector('#getTotal').addEventListener('click', function() {

    // get the subtotal
    let subtotal = parseFloat(document.querySelector('#subtotal').value);

    // check if the user is a member
    let isMember = document.querySelector('#member').checked;

    // apply 20% discount
    if (isMember) {
        subtotal *= 0.8; 
    }

    // round to 2 decimal places
    let total = subtotal.toFixed(2);

    // display the total
    document.querySelector('#total').textContent = `$ ${total}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

// Declare an array of numbers from 1 to 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Add the value of the array to the output element
document.querySelector('#array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */

// Filter the array to get only the odd numbers
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);

// Add the value of the array to the output element
document.querySelector('#odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */

// Filter the array to get only the even numbers
let evenNumbers = numbersArray.filter(number => number % 2 === 0);

// Add the value of the array to the output element
document.querySelector('#evens').textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */

// Use the reduce method to get the sum of the array
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);

// Add the value of the array to the output element
document.querySelector('#sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */

// Use the map method to multiply each number by 2
let multipliedArray = numbersArray.map(number => number * 2);

// Add the value of the array to the output element
document.querySelector('#multiplied').textContent = multipliedArray.join(', ');


/* Output Sum of Multiplied by 2 Array */

// Use the reduce method to get the sum of the multiplied array
let sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);

// Add the value of the array to the output element
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
