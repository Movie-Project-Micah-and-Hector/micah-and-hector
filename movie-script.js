"use strict";

const url = 'https://agreeable-sumptuous-lilac.glitch.me/movies'

function getAllMovies() {
    fetch(url)
        .then(response => response.json())
        .then(movies => console.log(movies))
        .catch(error => console.error(error));
}
getAllMovies();

function addingMovies() {
    const addMovie = {
        title: 'Night of the Living Hector',
        rating: 5,
        genre: 'Nature, Documentary',
        id: 6
    };
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addMovie),
    };
    fetch(url, option)
        .then( response => console.log(response))
        .then(option => console.log(option))
        .catch( error => console.error(error));
}
addingMovies();


