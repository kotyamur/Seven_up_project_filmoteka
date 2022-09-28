export default function markupFilms(results) {
  return results
    .map(
      ({ poster_path, original_title, vote_average, release_date, title }) => {
        const year = String(release_date).slice(0, 4);
        
        return `<li class="films__item">
          <a href="" class="films__item-link">
            <div class="poster__thumb">
              <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}" class="poster__foto" />
            </div>
              <div class="poster__about">
                <p class="poster__title">${title}</p>
                  <div class="poster__description">
                <p class="poster__genre">Drama</p>
                <p class="poster__year">${year}</p>
                <p class="poster__rating"><span class="poster__rating__text">${vote_average}</span></p>
                </div>
              </div>

          </a>
        </li>`;
      }
    )
    .join('');
}
