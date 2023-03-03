import { savedApiData } from './favorite'
// console.log("🚀 ~ savedApiData:", savedApiData)

const STORAGE_KEY = 'favoriteNews';
const favoriteNews=[]
const gallery=document.querySelector('.gallery') 

// console.log("🚀 ~ gallery", gallery)

gallery.addEventListener("click", getFavoriteId);

export default function getFavoriteId(evt) {
    // console.log("evt.target.nodeName", evt.target.nodeName);
    // console.log("evt.target.classList", evt.target.classList);
    
    if(evt.target.classList.contains("js-tartet-favorite")){
      const id=evt.target.closest(".js-card-item").dataset.targetId
      // console.log("🚀 ~ addToFavorite ~ id:", id)
      saveFavotiteNew(id)
    }
}

function saveFavotiteNew(id) {
    // console.log("🚀 ~ saveFavotiteNewToStorage ~ id:", id)
    // console.log("🚀 ~ savedApiData:", savedApiData)
    const favoriteNew =savedApiData.find(item=>item.id===id)

     

    // favoriteNews.push(favoriteNew)

    if (favoriteNews.length<1){
        favoriteNews.push(favoriteNew)
    } 
    // console.log(favoriteNews.every(el=>Number(el.id)!==Number(id)));
    if(favoriteNews.every(el=>Number(el.id)!==Number(id))) {
      favoriteNews.push(favoriteNew)
    }

       console.log("🚀 ~ favoriteNews:", favoriteNews)
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteNews));


    const favoriteBtnText=document.querySelector(`li[data-target-id='${id}'] span.js-tartet-favorite`) 
    const heardIcon=document.querySelector('svg.js-tartet-favorite.wrap-image__icon')
    // console.log("🚀 ~ saveFavotiteNew ~ favoriteBtnText:", favoriteBtnText)
    // console.log("🚀 ~ heardIcon:", heardIcon)
    changeFavoriteBtnText(favoriteBtnText)
    changeHeardColor(heardIcon)
    
   }

   function changeFavoriteBtnText(spn) {
    // const content = favoriteBtnText.textContent;
    spn.textContent =
    spn.textContent === "Add to favorite" ? "Remove from favorite" : "Add to favorite";
  }

  function changeHeardColor(icon) {
    icon.classList.toggle('.fill-heard')
  }

  function removeFromFavorite(id) {
    
  }



// const a=[123]

// console.log(a.some(el=>el>2));

   
   
