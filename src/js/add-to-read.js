// import { savedApiData } from './read'; 

// const STORAGE_KEY = 'readNews';
 
// const readNews = [];
// const gallery = document.querySelector('.gallery'); 


// gallery.addEventListener('click', getReadNewsId);

// export default function getReadNewsId(event) {

//   //  const readDate = new Date().toLocaleDateString(); 
//   //  console.log("🚀 ~ getReadNewsId ~ date:", readDate); 

//   if(event.target.classList.contains("wrap-info__link")){ 
//     spanBtnRef = new Date().toLocaleDateString(); 
//     event.preventDefault();

//     const id=event.target.closest(".js-card-item").dataset.targetId

//     saveReadNew(id);
//   }
// }

// function saveReadNew(id) {

//   const readNew = savedApiData.find(item=>item.id===id)

//   if (readNews.length<1){
//     readNews.push(readNew); 
// } 

// if(readNews.every(el=>Number(el.id)!==Number(id))) {
//   readNews.push(readNew); 
// }
// console.log(readNews); 
// localStorage.setItem(STORAGE_KEY, JSON.stringify(readNews));
// }
  // *******************************
  // import axios from 'axios';

  // import { savedApiData } from './read'; 
// import { getCards } from './cards';
// import { createCards } from './cards';
import { savedApiData } from './cards'; 

  const STORAGE_KEY = 'readNews';
   
  let readNews = [];
  let readDate = ''; 

  const gallery = document.querySelector('.gallery'); 
  
  gallery.addEventListener('click', getReadNewsId);
  
  export default function getReadNewsId(event) {
  
    readDate = new Date().toLocaleDateString().replaceAll('.', '/'); 
     console.log("🚀 date:", readDate); 
  
    if(event.target.classList.contains("wrap-info__link")){ 
    
      event.preventDefault();
  
      const id=event.target.closest(".js-card-item").dataset.targetId
  
      saveReadNew(id);
    }
  }
  
  export function saveReadNew(id) {

    const readNew = savedApiData.find(item=>item.id===id)
  
    if (readNews.length<1){
      readNews.push(readNew); 
  } 
  
  if(readNews.every(el=>Number(el.id)!==Number(id))) {
    readNews.push(readNew); 

    localStorage.setItem(STORAGE_KEY, JSON.stringify(readNews));
  }
  // console.log(valuesStorage.readNews); 

  }


// // ***********************************



