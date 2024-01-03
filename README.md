### Moviefix

## Introduction

A movie information app that displays a list of movies from The Movie Database (TMDb) API.  
 The app shows top movies for each year and users can filter by genre, and search through movie name.  
 The app also loads top movies from previous / next years as the user scrolls through the list.

## Requirements Accomplished

- Display the list of 20 movies for each year
- Infinite scroll pagination for fetching movies of next year and previous year
- Filter movies based on genres
- Display movie details including - movie poster, title, tagline, runtime, description, director, cast, and genres.

## Additonal Functionality

Search movie based on movie title

## App Features

### Movies Page (http://localhost:3000)

- Default Display: The Movies Page showcases the top 20 movies, sorted by popularity in descending order, for the year 2012.
- Infinite Scroll Pagination: Movies are dynamically fetched as the user scrolls, presenting a seamless experience.
- Year-wise Fetching: Scrolling below the last row fetches movies for the next year (up to 2023), while scrolling above the current movies fetches those from the previous year.
- Search Functionality: A search box allows users to find movies based on titles which also contains a clear button to reset the input.
- Genre Filters: Users can filter movies by genre preferences, with a reset button to clear all applied filters.
- Clickable Movie Cards: Each movie card, featuring poster image, title, and user ratings, is clickable, directing users to the Movie Details Page.

### Note

Search and filters operate independently due to API limitations.

Filters are currently implemented with intersection of all the selected genres.  
(can be changed to union by using the pipe operator to separate the selected genres)

### Movie Details Page (http://localhost:3000/movie/:id)

- Detailed Movie Information: This page offers a comprehensive view, including the movie poster, title, tagline, runtime, description, director, cast, and genres.

## API endpoints:

- Movies API - `https://api.themoviedb.org/3/discover/movie`
- Genres API - `https://api.themoviedb.org/3/genre/movie/list`
- Search API - `https://api.themoviedb.org/3/search/movie`
- Movie details API - `https://api.themoviedb.org/3/movie/${movieId}`  
  where **movie id** represents the id of the selected movie

- For rendering all the images, we use the API - `https://image.tmdb.org/t/p/w780${posterImageUrl}`  
  where **posterImageUrl** represents the poster URL obtained in the API response.

## Setup:

### Steps to run the App locally

**Step 1:**  
Clone the git repo:  
`git clone https://github.com/createKevinShah/moviefix`

**Step 2:**  
Install the necessary dependencies and packages:  
`nvm use`  
`npm i`

**Step 3:**  
Run the app:  
`npm start`

**Step 5:**  
Access locally:  
Navigate to `http://localhost:3000` in your browser.
