import { movieLink } from './linkapi';

export function getItemTemplate({
    title,
    poster_path,
    release_date,
    genre_ids,
    id,
    
  }, genres) {

    const year = release_date.substr (0, 4);

    const filmGenres = genres.reduce ((acc, element) => {
       if (genre_ids.includes(element.id)){ acc.push(element.name) }     
       return acc;
    }, []); 

    return `<li class="film-list__item" id= ${id}>
    <a href="" class="film-list__link link">
        <div class="film-list__top-wrap">
            <picture>
                <source
                srcset="
                   ${movieLink.getImageUrl(poster_path, 500)}  1x,
                   ${movieLink.getImageUrl(poster_path, 500)}  2x "
                media="(min-width: 1280px)"
                />
                <source
                srcset="
                  ${movieLink.getImageUrl(poster_path, 500)}  1x,
                  ${movieLink.getImageUrl(poster_path, 500)}  2x"
                   media="(min-width: 768px)"
                />
                <source
                srcset="
                  ${movieLink.getImageUrl(poster_path, 500)}  1x,
                  ${movieLink.getImageUrl(poster_path, 500)}  2x"
                   media="(max-width: 480px)"
                />
                <img src="./images/film-1-mob-1x.jpg" 
                alt="film" />
            </picture>
        </div>
        <div class="film-data">
          <h2 class="film-data__title">${title}</h2>
          <div class="film-data__info">
            <p class="film-data__genres">${[...filmGenres]}</p>
            <p class="film-data__year">| ${year}</p>
          </div>
        </div>
      </a>
    </li>`;
  }