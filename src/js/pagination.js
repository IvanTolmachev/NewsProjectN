const btnsContainer = document.getElementById('pagination');
const btnForward = document.querySelector('.next-page');
const btnBackPage = document.querySelector('.prev-page');
btnForward.disabled = true;

const valuePage = {
  curPage: 1,
  numLinksTwoSide: 1,
  totalPages: 10,
};
makePaginationsBtnMurkUp();

btnsContainer.addEventListener('click', e => {
  e.preventDefault();

  if (!e.target.classList.contains('pg-link')) {
    return;
  }
  valuePage.curPage = parseInt(e.target.dataset.page, 10);
  makePaginationsBtnMurkUp(valuePage);
  console.log('fucking');
  handleButtonLeft();
  handleButtonRight();
});

function makePaginationsBtnMurkUp() {
  const { totalPages, curPage, numLinksTwoSide: delta } = valuePage;

  const range = delta + 4;

  let render = '';
  let renderTwoSide = '';
  let dot = `<li class="pg-item"><a class="pg-link pg-link--border">...</a></li>`;
  let countTruncate = 0;
  const numberTruncateLeft = curPage - delta;
  const numberTruncateRight = curPage + delta;
  let active = '';
  for (let pos = 1; pos <= totalPages; pos++) {
    active = pos === curPage ? 'active' : '';
    if (totalPages >= 2 * range - 1) {
      if (numberTruncateLeft > 3 && numberTruncateRight < totalPages - 3 + 1) {
        if (pos >= numberTruncateLeft && pos <= numberTruncateRight) {
          renderTwoSide += renderPage(pos, active);
        }
      } else {
        if (
          (curPage < range && pos <= range) ||
          (curPage > totalPages - range && pos >= totalPages - range + 1) ||
          pos === totalPages ||
          pos === 1
        ) {
          render += renderPage(pos, active);
        } else {
          countTruncate++;
          if (countTruncate === 1) render += dot;
        }
      }
    } else {
      render += renderPage(pos, active);
    }
  }
  if (renderTwoSide) {
    renderTwoSide =
      renderPage(1) + dot + renderTwoSide + dot + renderPage(totalPages);
    btnsContainer.innerHTML = renderTwoSide;
  } else {
    btnsContainer.innerHTML = render;
  }
}
function renderPage(index, active = '') {
  return ` <li class="pg-item " >
        <a class="pg-link ${active} " href="#"data-page="${index}">${index}</a>
    </li>`;
}

document.querySelector('.pagination').addEventListener('click', function (e) {
  handleButton(e.target);
});

function handleButton(element) {
  if (element.classList.contains('prev-page')) {
    valuePage.curPage--;
    handleButtonLeft();
    console.log(valuePage);

    btnForward.disabled = false;
    //  btnLastPg.disabled = false;
  } else if (element.classList.contains('next-page')) {
    valuePage.curPage++;
    handleButtonRight();
    console.log(valuePage);
    btnBackPage.disabled = false;
  }
  makePaginationsBtnMurkUp();
}
function handleButtonLeft() {
  if (valuePage.curPage === 1) {
    btnBackPage.disabled = true;
  } else {
    btnBackPage.disabled = false;
  }
}
function handleButtonRight() {
  if (valuePage.curPage === valuePage.totalPages) {
    console.log(valuePage.curPage);
    btnForward.disabled = true;
  } else {
    btnForward.disabled = false;
  }
}
