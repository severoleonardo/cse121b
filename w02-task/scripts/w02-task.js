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

nameElement.innerHTML = `<strong>${fullName}</strong>`; 
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile picture of ${fullName}`);

/* Step 5 - Array */

const favoriteFoods = ['Carreteiro rice', 'spaghetti in white sauce ', 'Brazilian barbecue', 'Milk chocolate', 'Pistachio ice cream'];
foodElement.innerHTML = favoriteFoods;
const newFavoriteFood = 'Caesar salad';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${newFavoriteFood}`;
favoriteFoods.shift();
foodElement.innerHTML += '<br>' + favoriteFoods;
favoriteFoods.pop();
foodElement.innerHTML += '<br>' + favoriteFoods;