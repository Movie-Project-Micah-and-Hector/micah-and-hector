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
                                            <div class="no-edit">
                                                <h5 class="card-title">${movies[i].title}</h5>
                                                <p class="card-text">${movies[i].plot}</p>
                                                <p class="card-text"><small class="text-muted">${movies[i].genre} ${movies[i].year}</small></p>
                                                <p class="card-text"><small class="text-muted"> Director: ${movies[i].director}  Actors: ${movies[i].actors} ,Rating:${movies[i].rating}</small></p>
                                            </div>
                                            <div class="edit d-none">
                                            <input type="text" class="editedTitle" value="${movies[i].title}">
                                            <input type="text" class="editedDirector" value="${movies[i].director}">
                                            <input type="text" class="editedActors" value="${movies[i].actors}">
                                            <input type="text" class="editedYear" value="${movies[i].year}">
                                            <input type="text" class="editedRating" value="${movies[i].rating}">
                                            <input type="text" class="editedGenre" value="${movies[i].genre}">
                                            <input type="text" class="editedImg" value="${movies[i].poster}">
                                            <textarea class="editedPlot">${movies[i].plot}</textarea>
                                            </div>
                                            <button type="submit" class="removeMovie" data-id="${movies[i].id}">Delete</button> 
                                            <button type="button" class="editMovie" data-id="${movies[i].id}">Edit</button>
                                            <button type="button" class="saveEdit d-none" data-id="${movies[i].id}">Save</button>
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
            $('.editMovie').click(function (){
                console.log('trying to edit')
                $(this).parent().children().first().addClass('d-none')
                $(this).parent().children().first().next().removeClass('d-none')
                $(this).next().removeClass('d-none')
            })
            $('.saveEdit').click(function (){
                let recordId = $(this).data("id");
                console.log(recordId)

                editingMovies(recordId)
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
    let newTitle = $('.editedTitle').val();
    let newDirector = $('.editedDirector').val();
    let newActors = $('.editedActors').val();
    let newYear = $('.editedYear').val();
    let newRating = $('.editedRating').val();
    let newGenre = $('.editedGenre').val();
    let newPoster = $('.editedPoster').val();
    let newPlot = $('.editedPlot').val();
    const editing = {
        title: newTitle,
        rating: newRating,
        genre: newGenre,
        year: newYear,
        director: newDirector,
        actors: newActors,
        poster: newPoster,
        plot: newPlot
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


