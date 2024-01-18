
var elFilmForm = document.querySelector('.film-form'),
    elSearchInput = document.querySelector('.search-input');

    // console.log(elFilmForm, elSearchInput);

elFilmForm.addEventListener('input', (evt) => {

    var searchInputValue = evt.target.value.trim();
    
    var SEARCH_QUERY = new RegExp(searchInputValue, 'gi');

    var searchMovie = films.filter((film) => {
        return film.title.match(SEARCH_QUERY) 
    })

    if(elSearchInput.value.trim() != 0){
        elMoreBtn.style.display = 'none';
    }else{
        elMoreBtn.style.display = 'block';
    }

    renderFilms(searchMovie)

})