import debounce from 'lodash.debounce';

const showHideCategoriesBtn = document.getElementById('categories-toggler');
const categoriesContainer = document.querySelector('.categories__container');

showHideCategoriesBtn.addEventListener('click', function () {
  document.querySelector('.filter').classList.toggle('filter--open');
});

window.addEventListener('resize', debounce(restart, 300));

restart();

// === function

function moveForward() {
  let listElements = Array.from(
      document.querySelectorAll('#categories-show .categories__item')
    ),
    invisibleElements = getInvisible(listElements),
    menuList = document.getElementById('categories-hide');

  invisibleElements.forEach(function (item) {
    menuList.appendChild(item);
  });

  if (!invisibleElements.length) {
    showHideCategoriesBtn.setAttribute('hidden', true);
  } else {
    showHideCategoriesBtn.removeAttribute('hidden');
  }

  //button.innerHTML = invisibleElements.length;
}

function moveBackward() {
  let menuListElements = Array.from(
    document.querySelectorAll('#categories-hide .categories__item')
  );
  let list = document.getElementById('categories-show');

  menuListElements.forEach(function (item) {
    list.appendChild(item);
  });
  // console.log(menuListElements);
}

function getInvisible(listElements) {
  let list = document.getElementById('categories-show');
  let space = (document.documentElement.clientWidth - 1280) / 2;

  space = space > 0 ? space : 0;

  //  console.log(space);

  let invisible = listElements.filter(function (item) {
    if (
      item.getBoundingClientRect().left + item.getBoundingClientRect().width >
      list.getBoundingClientRect().width + space
    ) {
      return item;
    }
  });
  //console.log(invisible);
  return invisible;
}

function restart() {
  moveBackward();
  moveForward();
  const menuListElements = Array.from(
    document.querySelectorAll('#categories-show .categories__item')
  );
  if (!menuListElements.length) {
    showHideCategoriesBtn.textContent = 'Categories';
    categoriesContainer.classList.add('no-categories');
  } else {
    showHideCategoriesBtn.textContent = 'Other';
    categoriesContainer.classList.remove('no-categories');
  }
}
