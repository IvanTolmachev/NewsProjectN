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


  const STORAGE_KEY = 'objReadNews';
   
  // const readNews = [];
  let valuesStorage = {}; 

  const gallery = document.querySelector('.gallery'); 
  
  
  gallery.addEventListener('click', getReadNewsId);
  
  export default function getReadNewsId(event) {

  // valuesStorage = {
  //   readNews: [],
  //   dateRead: new Date().toLocaleDateString(), 
  // } 
  
    //  const readDate = new Date().toLocaleDateString(); 
    //  console.log("🚀 ~ getReadNewsId ~ date:", readDate); 
  
    if(event.target.classList.contains("wrap-info__link")){ 
    
      event.preventDefault();
  
      const id=event.target.closest(".js-card-item").dataset.targetId
  
      saveReadNew(id);
    }
  }
  
  export function saveReadNew(id) {

    valuesStorage = [
      readNews: [],
      dateRead: new Date().toLocaleDateString().replaceAll('.', '/'), 
    ]

    const readNew = savedApiData.find(item=>item.id===id)
  
  //   if (valuesStorage.readNews.length<1){
  //     valuesStorage.readNews.push(readNew); 
  // } 
  
  if(valuesStorage.readNews.every(el=>Number(el.id)!==Number(id))) {
    valuesStorage.readNews.push(readNew); 

    localStorage.setItem(STORAGE_KEY, JSON.stringify(valuesStorage));
  }
  // console.log(valuesStorage.readNews); 

  }


// // ***********************************



