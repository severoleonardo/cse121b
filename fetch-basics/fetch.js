// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/charizard";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

// Create the function getPokemon(url) {}
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

// Create the function getPokemonList(url) {}
async function getPokemonList(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuffList(data);
  }
}


// Create the function doStuff(data) {}
function doStuff(data) {
  results = data;
  const pokemonDiv = document.querySelector("#pokemon");
  const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="Image of ${data.name}">`;
  pokemonDiv.innerHTML = html;            
  console.log("first: ", results);
}


// Create the function doStuffList(data) {} 
async function doStuffList(data) {
  console.log(data);
  const pokeListElement = document.querySelector("#pokemon-list");
  const pokeList = data.results;

  // sort the list
  pokeList.sort(compare);

  for (let i = 0; i < pokeList.length; i++) {
    const pokemonData = await fetch(pokeList[i].url).then(response => response.json());
    const html = `<li><img src="${pokemonData.sprites.front_default}" alt="Image of ${pokemonData.name}">${pokemonData.name}</li>`;
    pokeListElement.innerHTML += html;
  }
}
getPokemon(url)
console.log("second: ", results);


getPokemonList(urlList);


function compare(a, b) {
  if (a.name > b.name) {
    // sort b before a
    return 1;
  } else if (a.name < b.name) {
    // a and b different but unchanged (already in the correct order)
    return -1;
  } else return 0; // a and b are equal
}

function sortPokemon(list) {
  let sortedList = list.sort(compare);
  return sortedList;
}