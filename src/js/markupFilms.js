import { genre } from './genre';
export default function markupFilms(results) {
  return results
    .map(
      ({
        poster_path,
        original_title,
        vote_average,
        release_date,
        title,
        id,
        genre_ids,
      }) => {
        let arrayGenre = [];
        let url = 'https://image.tmdb.org/t/p/w500/';
        let year = String(release_date).slice(0, 4);

        if (poster_path === null) {
          url = 'https://i.postimg.cc/L8fCW6RZ/repetajpg.jpg';
          poster_path = '';
        }
        if (release_date === '' || !release_date) {
          year = 'No information';
        }

        if (genre_ids?.length === 0) {
          arrayGenre.push('No information');
        }

        for (const gen of genre) {
          if (genre_ids) {
            for (const id of genre_ids) {
              if (id === gen.id) {
                arrayGenre.push(gen.name);
              }
            }
          }
        }
        if (arrayGenre.length > 2) {
          console.log('more 2');
          arrayGenre = arrayGenre.slice(0, 2);
          arrayGenre.push('Other');
        }
        return `<li class="films__item" data-id=${id}>
          <a href="" class="films__item-link">
            <div class="poster__thumb">
              <img src="${url}${poster_path}" loading="lazy" alt="${original_title}" class="poster__foto" />
            </div>
              <div class="poster__about">
                <p class="poster__title">${title}</p>
                  <div class="poster__description">
                <p class="poster__genre">${arrayGenre}</p>
                <p class="poster__year">${year}</p>
                
                </div>
              </div>

          </a>
        </li>`;
      }
    )
    .join('');
}
