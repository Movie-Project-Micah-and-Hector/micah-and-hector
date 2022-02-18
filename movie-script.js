"use strict";

const url = 'https://agreeable-sumptuous-lilac.glitch.me/movies'

let option = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(url)
}

fetch(url, option)
    .then(response => response.json())
    .catch( error => console.error(error) );
console.log(url)


