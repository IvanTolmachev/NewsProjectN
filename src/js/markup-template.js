export function createMarkup(arr) {
    const markup = arr
      .map(({ id, url, title, section, abstract, newDateStr, imgUrl }) => {
          return `
           <li class="card  js-card-item" data-target-id="${id}">
        <div class="wrap-image">
            <img
              src="${imgUrl}"
              alt="photo"
             class="wrap-image__photo"
            />
            <p class="wrap-image__text">${section}</p>
            <button type="button" class="wrap-image__btn js-tartet-favorite">
            <span class="wrap-image__btn-text js-tartet-favorite"'>Add to favorite</span>
             <svg class="wrap-image__icon js-tartet-favorite" width="16" height="16">
                  <use href ='${iconHeart}#icon-heart' class="js-tartet-favorite"></use>
                </svg></button>
          </div>
          <h2 class="card__title">${title}</h2>
          <p class="card__description">${
            abstract.length > 112 ? abstract.slice(0, 113) + '...' : abstract
          }</p>
            <p class="wrap-info__time">${newDateStr}</p>
            <a href="${url}" class="wrap-info__link" target="_blank" rel="noreferrer noopener">Read more</a>
            <p class="wrap-image__active visually-hidden">Already read</p>
        </li>
       `;
      })
      .join('');
  
    return markup;
  }