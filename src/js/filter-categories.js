import debounce from 'lodash.debounce';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const showHideCategoriesBtn = document.getElementById('categories-toggler');
const categoriesContainer = document.querySelector('.categories__container');
const butIcon = document.querySelector('.categories__icon');
const filterItems = document.querySelector('.filter');
const calendarText = document.querySelector('.calendar__text');

const SECTION_URL = 'section-list';

const sectionParams = {
  searchString: '',
  'api-key': 'VPd8ESOXXGRNi6SUHc4QYJMXdqmRVK3K',
};

//== function

async function getData(url, timeout) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await axios.get(url, {
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}

function makeURL(params, subUrl) {
  const BASE_URL = `https://api.nytimes.com/svc/news/v3/content`;

  const urlParams = new URLSearchParams(params);

  return `${BASE_URL}/${subUrl}.json?${urlParams}`;
}

async function makeSection(params, subUrl) {
  const listShow = document.getElementById('categories-show');
  const URL = makeURL(params, subUrl);
  // console.log(URL);

  try {
    const Data = await getData(URL, 2500);

    if (Data.data.status !== 'OK') {
      throw new Error(Data.data.status);
    }

    listShow.innerHTML = Data.data.results.map(rendeSection).join('');
    restart();
  } catch (error) {
    const msg = error.name === 'CanceledError' ? 'Get timeout' : error;
    Notify.failure(`Oops ${msg}`);
  }
}

function rendeSection(item) {
  const { display_name, section } = item;

  return `<li class="categories__item" data-section=${section}>${display_name}</li>
  `;
}

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

showHideCategoriesBtn.addEventListener('click', function () {
  filterItems.classList.toggle('visually-hidden');
  butIcon.classList.toggle('rotate');
});
window.addEventListener('resize', debounce(restart, 250));

makeSection(sectionParams, SECTION_URL);

// restart();

// // === function

// function moveForward() {
//   let listElements = Array.from(
//       document.querySelectorAll('#categories-show .categories__item')
//     ),
//     invisibleElements = getInvisible(listElements),
//     menuList = document.getElementById('categories-hide');

//   invisibleElements.forEach(function (item) {
//     menuList.appendChild(item);
//   });

//   if (!invisibleElements.length) {
//     showHideCategoriesBtn.setAttribute('hidden', true);
//   } else {
//     showHideCategoriesBtn.removeAttribute('hidden');
//   }

//   //button.innerHTML = invisibleElements.length;
// }

// function moveBackward() {
//   let menuListElements = Array.from(
//     document.querySelectorAll('#categories-hide .categories__item')
//   );
//   let list = document.getElementById('categories-show');

//   menuListElements.forEach(function (item) {
//     list.appendChild(item);
//   });
//   // console.log(menuListElements);
// }

// function getInvisible(listElements) {
//   let list = document.getElementById('categories-show');
//   let maxWidth = document.querySelector('.categories').style.maxWidth;
//   let space = maxWidth;

//   space = space > 0 ? space : 0;

//   //  console.log(space);

//   let invisible = listElements.filter(function (item) {
//     if (
//       item.getBoundingClientRect().left + item.getBoundingClientRect().width >
//       list.getBoundingClientRect().width - space
//     ) {
//       return item;
//     }
//   });
//   //console.log(invisible);
//   return invisible;
// }

// function restart() {
//   moveBackward();
//   moveForward();
//   const menuListElements = Array.from(
//     document.querySelectorAll('#categories-show .categories__item')
//   );
//   if (!menuListElements.length) {
//     showHideCategoriesBtn.querySelector('span').textContent = 'Categories';
//     categoriesContainer.classList.add('no-categories');
//     showHideCategoriesBtn.classList.add('mobile');
//   } else {
//     showHideCategoriesBtn.querySelector('span').textContent = 'Others';
//     categoriesContainer.classList.remove('no-categories');
//     showHideCategoriesBtn.classList.remove('mobile');
//   }
// }
