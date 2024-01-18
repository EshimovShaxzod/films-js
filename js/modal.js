// ***********************  MODAL START *********************************

var elModalTitle = document.querySelector('.modal-film-title');
var elModalImg = document.querySelector('.modal-film-img');
var elModalOverview = document.querySelector('.modal-film-owerview');
var elModalCategory = document.querySelector('.film-movie-category')


elFilmsResults.addEventListener('click', (e) => {
  var MovieId =  e.target.dataset.dataId;

  let foundFilm = films.find((film) => {
    return film.id === MovieId
  })

  elModalTitle.textContent = foundFilm.title;
  elModalImg.src = foundFilm.poster;
  elModalOverview.textContent = foundFilm.overview;
  elModalCategory.textContent = foundFilm.genres.join(', ')
  

})

// ***********************  MODAL END *********************************
