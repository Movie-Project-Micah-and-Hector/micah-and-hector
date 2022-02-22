"use strict";

const url = 'https://agreeable-sumptuous-lilac.glitch.me/movies'

function getAllMovies() {
    fetch(url)
        .then(response => response.json())
        .then(movies => console.log(movies))
        .catch(error => console.error(error));
}
// getAllMovies();

function addMovies() {
    const addition = {
        title: 'Night of the Living Hector',
        rating: 5,
        genre: 'Nature, Documentary'
    };
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addition),
    };
    fetch(url, option)
        .then( response => console.log(response))
        .catch( error => console.error(error));
}
// addMovies();

function deletingMovies(id) {
    const option = {
        method: `DELETE`
    }
    fetch(`${url}/${id}`, option)
        .then( response => console.log(response))
        .then(option => console.log(option))
        .catch( error => console.error(error));
}
// deletingMovies()
// deleted empty: 6,7,8,9,10,11,12,13,14,15,16,256,257,258,259,260,261

function editingMovies(id) {
    const editing = {
        title: 'Night of the Living Hector',
        rating: 5,
        genre: 'Nature, Documentary'
    };
    const option = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(editing)
    }
    fetch(`${url}/${id}`, option)
        .then( response => console.log(response))
        .then(option => console.log(option))
        .catch( error => console.error(error));
}

