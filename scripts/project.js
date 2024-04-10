// Fetch and display movies based on search query
const fetchAndDisplayMovies = async (query) => {
    const apiKey = '3084d1f5325b50469cbd74d1b0dbac4c'; // Replace with your TMDb API key
    const baseUrl = 'https://api.themoviedb.org/3';
    const searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`;

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

// Display movie search results on the webpage
const displayMovies = (movies) => {
    const movieResultsElement = document.getElementById('movieResults');
    movieResultsElement.innerHTML = ''; // Clear existing movie results

    movies.forEach((movie) => {
        // Create a movie card element
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.textContent = movie.title;

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

    const addToFavoritesButton = document.createElement('button');
    addToFavoritesButton.textContent = 'Add to Favorites';
    addToFavoritesButton.addEventListener('click', () => {
        addToFavorites(movie);
    });

    movieDetailsElement.appendChild(titleElement);
    movieDetailsElement.appendChild(overviewElement);
    movieDetailsElement.appendChild(releaseDateElement);
    movieDetailsElement.appendChild(ratingElement);
    movieDetailsElement.appendChild(addToFavoritesButton);
};

// Filter movies by criteria
const filterMovies = (movies, filterCriteria) => {
    // Implement logic to filter movies based on filterCriteria
    // Example: filter by genre
    if (filterCriteria.genre) {
        movies = movies.filter(movie => movie.genre.includes(filterCriteria.genre));
    }
    
    // Add more filter logic as needed (e.g., release year, rating)

    return movies;
};

// Example event listener for filtering
 document.getElementById('genreFilter').addEventListener('change', () => {
     const selectedGenre = document.getElementById('genreFilter').value;
     const filteredMovies = filterMovies(allMovies, { genre: selectedGenre });
     displayMovies(filteredMovies);
 });

// Sorte movies by criteria
const sortMovies = (movies, sortBy) => {
    // Implement logic to sort movies based on sortBy criteria
    switch (sortBy) {
        case 'title':
            movies.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'rating':
            movies.sort((a, b) => b.rating - a.rating);
            break;
        case 'releaseDate':
            movies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
            break;
        // Add more sorting criteria as needed
        default:
            break;
    }

    return movies;
};

 // Example event listener for sorting
 document.getElementById('sortCriteria').addEventListener('change', () => {
     const selectedSortBy = document.getElementById('sortCriteria').value;
     const sortedMovies = sortMovies(allMovies, selectedSortBy);
//     displayMovies(sortedMovies);
// });

// Add a movie to the favorites list
const addToFavorites = (movie) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Update UI to reflect addition to favorites
    const favoritesListElement = document.getElementById('favoritesList');
    const movieItem = document.createElement('li');
    movieItem.textContent = movie.title;
    favoritesListElement.appendChild(movieItem);
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




