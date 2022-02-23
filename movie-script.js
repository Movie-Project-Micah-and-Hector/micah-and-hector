"use strict";

const url = 'https://agreeable-sumptuous-lilac.glitch.me/movies'

/** Making The movies Appear on the Page */
function getAllMovies() {
    $('#loading').removeClass('d-none')
    fetch(url)
        .then(response => response.json())
        .then(movies => {
            let html = ""
            html = `<div class="row">`
            for (let i = 0; i < movies.length; i++) {

                html += `<div class="col-1 col-md-4 mb-4">
                                <div class="card h-100">
                                    <img src="${movies[i].poster}" class="movie-poster" alt="Movie Poster">
                                        <div class="card-body">
                                            <h5 class="card-title">${movies[i].title}</h5>
                                            <p class="card-text">${movies[i].plot}</p>
                                            <p class="card-text"><small class="text-muted"> Director: ${movies[i].director}  Actors: ${movies[i].actors} ${movies[i].year}</small></p>
                                            <button type="submit" class="removeMovie" data-id="${movies[i].id}">Delete</button> 
                                        </div>
                                </div>
                            </div>`
            }
            html +=`</div>`
            $(".movies").append(html)
            /** Deletion Button */
            $('.removeMovie').click(function (){
                let recordId = $(this).data("id");
                console.log(recordId)

                deletingMovies(recordId)
            })
            console.log(movies)
        })

        .catch(error => console.error(error))
        .finally(() => {
            $('#loading').addClass('d-none')
        })


}
getAllMovies()

/** Adding  the Movie to the List */
$('#addMovie').click(function (){
    let movieTitle = $('#movieName').val();
    let movieYear = $('#yearCreated').val();
    let movieGenre = $('.movieType').val();
    let movieRating = $('#movingRating').val();
    let movieDirector = $('#directorName').val();
    let movieActors = $('#actorsName').val();
    let moviePoster = $('#moviePoster').val();
    let moviePlot = $('#moviePlot').val();
    function addMovies() {
        const addition = {
            title: movieTitle,
            rating: movieRating,
            genre: movieGenre,
            year: movieYear,
            director: movieDirector,
            actors: movieActors,
            poster: moviePoster,
            plot: moviePlot
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
    addMovies();
})

function deletingMovies(id) {
    const option = {
        method: `DELETE`
    }
    fetch(`${url}/${id}`, option)
        .then( response => console.log(response))
        .then(option => console.log(option))
        .catch( error => console.error(error));
}

/** Editing Existing Movies on the List */
function editingMovies(id) {
    const editing = {
        title: 'Night of the Living Hector',
        rating: 5,
        genre: 'Nature, Documentary',
        year: '2023',
        director: 'Doc Rob',
        actors: 'Hector Mejia, Micah Wood, Ry, Casey',
        poster: '',
        plot: "At day he is hector, but at night he's a giant hector. Follow the misadventures he goes through from day to night, and the struggles he goes through."
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
// editingMovies()
//night of the living hector id: 263


