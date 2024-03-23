/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Leonardo Severo Elias';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/profile.png'


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img[src="images/profile.png"]');

/* Step 4 - Adding Content */

// Set the name element's innerHTML to display the full name with strong tags
nameElement.innerHTML = `<strong>${fullName}</strong>`; 

// Set the year element's textContent to display the current year
yearElement.textContent = currentYear;

// Set the source and alt attributes of the image element
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile picture of ${fullName}`);

/* Step 5 - Array */

// Define an array of favorite foods
const favoriteFoods = ['Carreteiro rice', 'spaghetti in white sauce ', 'Brazilian barbecue', 'Milk chocolate', 'Pistachio ice cream'];

// Set the food element's innerHTML to display the favorite foods array
foodElement.innerHTML = favoriteFoods;

// Declare and instantiate a variable for a new favorite food item
const newFavoriteFood = 'Caesar salad';

// Add the new favorite food item to the favoriteFoods array
favoriteFoods.push(newFavoriteFood);

// Append the new favorite food item
foodElement.innerHTML += `<br>${newFavoriteFood}`;

// Remove the first element in the favorite foods array
favoriteFoods.shift();

// Append the modified favorite foods array
foodElement.innerHTML += '<br>' + favoriteFoods;

// Remove the last element in the favorite foods array
favoriteFoods.pop();

// Append the final modified favorite foods array
foodElement.innerHTML += '<br>' + favoriteFoods;