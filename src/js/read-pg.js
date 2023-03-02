
const dropBtnRef = document.getElementById('dropBtn-js'); 
const dropIcon = document.querySelector('.icon-down-read-pg'); 

dropBtnRef.addEventListener('click', function () {
    // filterItems.classList.toggle('visually-hidden');
    dropIcon.classList.toggle('rotate');
  });
//   window.addEventListener('resize', debounce(restart, 250));
