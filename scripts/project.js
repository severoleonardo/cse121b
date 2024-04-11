// Fetch and display movies based on search query
const fetchAndDisplayMovies = async (query) => {
    const apiKey = '3084d1f5325b50469cbd74d1b0dbac4c';
    const baseUrl = 'https://api.themoviedb.org/3';
    const searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&include_adult=false`; 
    
    try {
        // Fetch movie data from TMDb API
        const response = await fetch(searchUrl);
        
        // Check if request was successful
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }

        // Parse response data as JSON
        const data = await response.json();

        // Display movies on the webpage
        displayMovies(data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Update UI to display error message
        errorMessageElement.textContent = 'An error occurred while fetching movies.';
    }
};

// Fetch and display movies based on genre
const fetchMoviesByGenre = async (genreId) => {
    const apiKey = '3084d1f5325b50469cbd74d1b0dbac4c';
    const baseUrl = 'https://api.themoviedb.org/3';
    const genreUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

    try {
        // Fetch movie data based on genre from TMDb API
        const response = await fetch(genreUrl);
        
        // Check if request was successful
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }

        
        const data = await response.json();

        // Display movies on the webpage
        displayMovies(data.results);
    } catch (error) {
        console.error('Error fetching data:', error);
        // Update UI to display error message
        errorMessageElement.textContent = 'An error occurred while fetching movies.';
    }
};

// Function to handle genre filter change
const handleGenreFilterChange = () => {
    const selectedGenreId = document.getElementById('genreFilter').value;
    fetchMoviesByGenre(selectedGenreId);
};

// Event listener for genre filter change
document.getElementById('genreFilter').addEventListener('change', handleGenreFilterChange);

// Display movie search results on the webpage
const displayMovies = (movies) => {
    const movieResultsElement = document.getElementById('movieResults');
    movieResultsElement.innerHTML = ''; // Clear existing movie results

    movies.forEach((movie) => {
        // Create a movie card element
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        // Create an image element for the movie poster
        const posterUrl = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
        const posterImg = document.createElement('img');
        posterImg.src = posterUrl;
        posterImg.alt = movie.title;
        movieCard.appendChild(posterImg);

        // Create a title element for the movie
        const titleElement = document.createElement('h2');
        titleElement.textContent = movie.title;
        movieCard.appendChild(titleElement);

        // Add click event listener to show movie details
        movieCard.addEventListener('click', () => {
            displayMovieDetails(movie);
        });

        // Append movie card to movie results section
        movieResultsElement.appendChild(movieCard);
    });
};

// Display detailed information about a specific movie
const displayMovieDetails = (movie) => {
    const movieDetailsElement = document.getElementById('movieDetails');
    movieDetailsElement.innerHTML = ''; // Clear existing movie details

    // Create and append movie details to the movie details section
    const titleElement = document.createElement('h2');
    titleElement.textContent = movie.title;

    const overviewElement = document.createElement('p');
    overviewElement.textContent = movie.overview;

    const releaseDateElement = document.createElement('p');
    releaseDateElement.textContent = `Release Date: ${movie.release_date}`;

    const ratingElement = document.createElement('p');
    ratingElement.textContent = `Rating: ${movie.vote_average}`;

    const posterElement = document.createElement('img');
    posterElement.src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    posterElement.alt = movie.title; 

    const addToFavoritesButton = document.createElement('button');
    addToFavoritesButton.textContent = 'Add to Favorites';
    addToFavoritesButton.addEventListener('click', () => {
        addToFavorites(movie);
    });

    movieDetailsElement.appendChild(titleElement);
    movieDetailsElement.appendChild(posterElement); // Append larger poster
    movieDetailsElement.appendChild(overviewElement);
    movieDetailsElement.appendChild(releaseDateElement);
    movieDetailsElement.appendChild(ratingElement);
    movieDetailsElement.appendChild(addToFavoritesButton);
};

// Function to add a movie to favorites
const addToFavorites = (movie) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Check if movie is already in favorites
    const existingMovie = favorites.find((fav) => fav.id === movie.id);
    if (!existingMovie) {
        favorites.push(movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        
        // Update UI to reflect addition to favorites
        const favoritesListElement = document.getElementById('favoritesList');
        const movieItem = document.createElement('li');
        movieItem.textContent = movie.title;
        favoritesListElement.appendChild(movieItem);
    } else {
        console.log('Movie already in favorites:', movie.title);
    }
};

// Event listener for search button click
document.querySelector('button').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value;
    fetchAndDisplayMovies(searchInput);
});

// Retrieve and display favorite movies from local storage on page load
window.addEventListener('load', () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesListElement = document.getElementById('favoritesList');
  
    favorites.forEach((movie) => {
        const movieItem = document.createElement('li');
        movieItem.textContent = movie.title;
        favoritesListElement.appendChild(movieItem);
    });
});