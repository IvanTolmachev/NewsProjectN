import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { makeData, createCard, dataSectionNormalize } from './apiNews';
import { sectionList, sectionNews, makeURL } from './apiUrl';

const gallery = document.querySelector('.gallery');
const categories = document.querySelector('.categories');
const listShow = document.getElementById('categories-show');
const showHideCategoriesBtn = document.getElementById('categories-toggler');
const categoriesContainer = document.querySelector('.categories__container');
const categoriesIcon = document.querySelector(
  '#categories-toggler .categories__icon'
);
const filterItems = document.querySelector('.filter');
const calendarBtn = document.getElementById('menu-calendar');
const calendarText = document.querySelector('.calendar__text');
const calendarIcon = document.querySelector('#menu-calendar .categories__icon');

function rendeSection(item) {
  const { display_name, section } = item;

  return `<li class="categories__item" data-section=${section}>${display_name}</li>
  `;
}

async function makeSection(url) {
  try {
    const Data = await makeData(url);
    listShow.innerHTML = Data.map(rendeSection).join('');
    restart();
  } catch (error) {
    const msg = error.name === 'CanceledError' ? 'Get timeout' : error;
    Notify.failure(`Oops ${msg}`);
  }
}

async function makeSectionNews(url) {
  try {
    const news = await makeData(url);
    const items = news.map(dataSectionNormalize);

    const weather = document.querySelector('.weather__thumb');
    gallery.innerHTML = items.map(createCard).join('');
    gallery.prepend(weather);
  } catch (error) {
    const msg = error.name === 'CanceledError' ? 'Get timeout' : error;
    Notify.failure(`Oops ${msg}`);
  }
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
    // showHideCategoriesBtn.classList.add('mobile');
  } else {
    showHideCategoriesBtn.querySelector('span').textContent = 'Others';
    categoriesContainer.classList.remove('no-categories');
    // showHideCategoriesBtn.classList.remove('mobile');
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
  const listItem = categories.querySelectorAll('.categories__item');

  listItem.forEach(item => item.classList.remove('activ'));
  categoriesIcon.classList.remove('rotate');
  filterItems.classList.add('visually-hidden');
  e.target.classList.add('activ');

  sectionNews.subUrl = e.target.dataset.section;
  const URL = makeURL(sectionNews);
  makeSectionNews(URL);
});

window.addEventListener('resize', debounce(restart, 250));

//! ===== main

const URL = makeURL(sectionList);
makeSection(URL);

// const iconCode = 'd04';
// // const iconHeart = new URL(
// //   `../images/wether-icons/${iconCode}-min.png`,
// //   import.meta.url
// // );

// //@import '../../src/images/wether-icons/01d-min.png'

//const filename = new URL('../images/we', import.meta.url);
// // const test = '../.../src/images/wether-icons/01d-min.png';
// // const iconHeart = new URL(test, import.meta.url);

//console.log(iconHeart);
