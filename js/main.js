var elFilmsResults = document.querySelector('.film-results');
var elFilmTemplates = document.querySelector('.films-template').content;

var newFilmsResult =new DocumentFragment();

var index = 8


function renderFilms(films){

    elFilmsResults.innerHTML = null;

    // console.log(cloneFilms);
    for(var i=0; i<films.slice(0,index).length; i++){
      cloneFilms = elFilmTemplates.cloneNode(true);

      cloneFilms.querySelector('.film-img').src = films[i].poster
      cloneFilms.querySelector('.film-title').textContent = films[i].title
      cloneFilms.querySelector('.film-ganres').textContent = films[i].genres.join(', ')
      cloneFilms.querySelector('.info-btn').dataset.dataId = films[i].id;

      newFilmsResult.appendChild(cloneFilms);
  }

  elFilmsResults.appendChild(newFilmsResult)

}

renderFilms(films)


var elMoreBtn = document.querySelector('.more-btn');

elMoreBtn.addEventListener('click', () => {
    index += 4;

    renderFilms(films)
    
});







