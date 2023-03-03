import {savedApiData} from './favorite'
// console.log("🚀 ~ savedApiData:", savedApiData)

const STORAGE_KEY = 'favoriteNews';
const favoriteNews=[]
const gallery=document.querySelector('.gallery') 

console.log("🚀 ~ gallery", gallery)

gallery.addEventListener("click", getFavoriteId);

export default function getFavoriteId(evt) {
    console.log("evt.target.nodeName", evt.target.nodeName);
    console.log("evt.target.classList", evt.target.classList);
    
    if(evt.target.classList.contains("js-tartet-favorite")){
      const id=evt.target.closest(".js-card-item").dataset.targetId
      console.log("🚀 ~ addToFavorite ~ id:", id)
      saveFavotiteNew(id)
    }
}

function saveFavotiteNew(id) {
    console.log("🚀 ~ saveFavotiteNewToStorage ~ id:", id)
    console.log("🚀 ~ savedApiData:", savedApiData)
    const favoriteNew =savedApiData.find(item=>item.id===id)

     

    favoriteNews.push(favoriteNew)

    // if (favoriteNews.length<1){
    //     favoriteNews.push(favoriteNew)

    // }

    
    
    
    // favoriteNews.forEach(element => {
    //     console.log("🚀 ~ saveFavotiteNew ~ element:", element)
        
    //      if (favoriteNews.length > 1 & Number(element.id)!==Number(id))  { 
    //         console.log('aaaaaaaaaaaaaaaaaaaaaaaaa');
    //         favoriteNews.push(favoriteNew);
    //      }

    //     return favoriteNews
    // });



       console.log("🚀 ~ favoriteNews:", favoriteNews)
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteNews));

    

    const favoriteBtnText=document.querySelector('span.js-tartet-favorite') 
    const heardIcon=document.querySelector('svg.js-tartet-favorite.wrap-image__icon')
    console.log("🚀 ~ heardIcon:", heardIcon)
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





   
   
