/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Leonardo Severo Elias",
    photo: "images/profile.png",
    favoriteFoods: [
        'Carreteiro rice', 
        'spaghetti in white sauce ', 
        'Brazilian barbecue', 
        'Pizza',
        'Milk chocolate', 
        'Pistachio ice cream'
    ],
    hobbies: [
        'Social and political theory reading', 
        'Exploration and survival games', 
        'Learning new technologies', 
        'Coding',
        'Dystopian fiction enthusiast', 
        'Rap/Rock music lyrics',
        'Twitch streaming'
    ],
    placesLived: [
        {
            place: 'Uruguaiana, RS',
            length: '8 years'
        },
        {
            place: 'Tucuruí, PA',
            length: '2 years'
        },
        {
            place: 'Brasília (region), DF',
            length: '1 year'
        }
    ]
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: 'São Paulo, SP',
    length: '4 years'
},
{
    place: 'Ribeirão Preto (region), SP',
    length: '14 years'
});



/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;


/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li); 
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
});

