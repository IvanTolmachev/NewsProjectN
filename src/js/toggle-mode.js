const switchInputEl = document.querySelector('.switch__input');

switchInputEl.addEventListener('click', onToggleBtn);

function onToggleBtn(event) {
  if (event.currentTarget.classList.contains('checked')) {
    event.currentTarget.classList.remove('checked');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    return;
  }
  event.currentTarget.classList.add('checked');
  document.documentElement.classList.add('dark');
}
