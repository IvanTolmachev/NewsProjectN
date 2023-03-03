import debounce from 'lodash.debounce';

import { makeData, createCard } from './apiNews';

const categories = document.querySelector('.categories');
const showHideCategoriesBtn = document.getElementById('categories-toggler');
const categoriesContainer = document.querySelector('.categories__container');
const categoriesIcon = document.querySelector(
  '#categories-toggler .categories__icon'
);
const filterItems = document.querySelector('.filter');
const calendarBtn = document.getElementById('menu-calendar');
const calendarText = document.querySelector('.calendar__text');
const calendarIcon = document.querySelector('#menu-calendar .categories__icon');

const sectionList = {
  baseUrl: `https://api.nytimes.com/svc/news/v3/content/`,
  subUrl: 'section-list',
  params: {
    'api-key': 'VPd8ESOXXGRNi6SUHc4QYJMXdqmRVK3K',
  },
};

const sectionNews = {
  baseUrl: `https://api.nytimes.com/svc/news/v3/content/all/`,
  subUrl: '',
  params: {
    'api-key': 'VPd8ESOXXGRNi6SUHc4QYJMXdqmRVK3K',
    limit: 10,
    offset: 0,
  },
};

//https://api.nytimes.com/svc/mostpopular/v2/viewed/{period}.json
const mostPopularNews = {
  baseUrl: `https://api.nytimes.com/svc/mostpopular/v2/viewed/`,
  subUrl: '1',
  params: {
    'api-key': 'VPd8ESOXXGRNi6SUHc4QYJMXdqmRVK3K',
  },
};

//https://api.nytimes.com/svc/search/v2/articlesearch.json

const articleSearchNews = {
  baseUrl: `https://api.nytimes.com/svc/search/v2/`,
  subUrl: 'articlesearch',
  params: {
    'api-key': 'VPd8ESOXXGRNi6SUHc4QYJMXdqmRVK3K',

    page: 1,
    q: '',
    sort: 'newest',
  },
};

//?===== function  backEnd
function makeURL(searhParam) {
  const { baseUrl, subUrl, params } = searhParam;

  const urlParams = new URLSearchParams(params);
  return `${baseUrl}${subUrl}.json?${urlParams}`;
}

function rendeSection(item) {
  const { display_name, section } = item;

  return `<li class="categories__item" data-section=${section}>${display_name}</li>
  `;
}

async function makeSection(url) {
  const listShow = document.getElementById('categories-show');

  try {
    const Data = await makeData(url);

    listShow.innerHTML = Data.map(rendeSection).join('');
    restart();
  } catch (error) {
    const msg = error.name === 'CanceledError' ? 'Get timeout' : error;
    Notify.failure(`Oops ${msg}`);
  }
}

function dataSectionNormalize(item) {
  const { uri, url, title, section, abstract, published_date, multimedia } =
    item;
  //const id = uri;
  const imgUrl = multimedia[2].url; //! перевірка на null
  const newDateStr = published_date
    .slice(0, published_date.indexOf('T'))
    .trim()
    .split('-')
    .reverse()
    .join('/');
  return { id: uri, url, title, section, abstract, imgUrl, newDateStr };
}

function dataArticleSearchNormalize(item) {
  const {
    uri,
    web_url,
    headline: { main },
    section_name,
    abstract,
    pub_date,
    multimedia,
  } = item;
  //const id = uri;
  const imgUrl = `https://static01.nyt.com/${multimedia[2].url}`; //! перевірка на null
  const newDateStr = pub_date
    .slice(0, pub_date.indexOf('T'))
    .trim()
    .split('-')
    .reverse()
    .join('/');
  return {
    id: uri,
    url: web_url,
    title: main,
    section: section_name,
    abstract,
    imgUrl,
    newDateStr,
  };
}

//?===== function  render

function restart() {
  let maxWidth = document
    .querySelector('.categories')
    .getBoundingClientRect().width;
  let count = 0;
  if (maxWidth >= 768) count = 4;
  if (maxWidth >= 1280) count = 6;

  if (!count) {
    showHideCategoriesBtn.querySelector('span').textContent = 'Categories';
    categoriesContainer.classList.add('no-categories');
    showHideCategoriesBtn.classList.add('mobile');
  } else {
    showHideCategoriesBtn.querySelector('span').textContent = 'Others';
    categoriesContainer.classList.remove('no-categories');
    showHideCategoriesBtn.classList.remove('mobile');
  }
  if (!(count > 4)) {
    calendarText.classList.add('visually-hidden');
  } else {
    calendarText.classList.remove('visually-hidden');
  }

  sortSections(count);
}

function sortSections(count) {
  let elementShow = Array.from(
    document.querySelectorAll('#categories-show .categories__item')
  );
  let elementHide = Array.from(
    document.querySelectorAll('#categories-hide .categories__item')
  );
  const list = [...elementShow, ...elementHide];

  const listShow = document.getElementById('categories-show');
  const listHide = document.getElementById('categories-hide');

  elementShow = [];
  elementHide = [];

  for (let i = 0; i < list.length; i++) {
    if (i < count) {
      elementShow.push(list[i]);
    } else elementHide.push(list[i]);
  }
  listShow.innerHTML = '';
  listHide.innerHTML = '';
  listShow.append(...elementShow);
  listHide.append(...elementHide);
}

//!=== listener

showHideCategoriesBtn.addEventListener('click', () => {
  filterItems.classList.toggle('visually-hidden');
  categoriesIcon.classList.toggle('rotate');
});

calendarBtn.addEventListener('click', () => {
  calendarIcon.classList.toggle('rotate');
});

categories.addEventListener('click', e => {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  const listItem = categories.querySelectorAll('li');

  listItem.forEach(item => item.classList.remove('activ'));
  categoriesIcon.classList.remove('rotate');
  filterItems.classList.add('visually-hidden');
  e.target.classList.add('activ');

  sectionNews.subUrl = e.target.dataset.section;

  (async () => {
    const gallery = document.querySelector('.gallery');
    const URL = makeURL(sectionNews);
    const news = await makeData(URL);
    const items = news.map(dataSectionNormalize);

    gallery.innerHTML = items.map(createCard).join('');
  })();
});

const clacKlac = document.querySelector('#search-form .btn');

clacKlac.addEventListener('click', e => {
  e.preventDefault();

  articleSearchNews.params.q = 'Ukraine';

  const URL = makeURL(articleSearchNews);

  (async () => {
    const gallery = document.querySelector('.gallery');
    const news = await makeData(URL);
    const items = news.map(dataArticleSearchNormalize);

    gallery.innerHTML = items.map(createCard).join('');
  })();
});

window.addEventListener('resize', debounce(restart, 250));

//! ===== main

const URL = makeURL(sectionList);
makeSection(URL);
