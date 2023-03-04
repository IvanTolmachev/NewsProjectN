import { savedApiData } from './read'; 


const STORAGE_KEY = 'readNews';
console.log("🚀 ~ STORAGE_KEY:", STORAGE_KEY); 
const readNews = [];
const gallery = document.querySelector('.gallery'); 
console.log("🚀 ~ gallery:", gallery); 


gallery.addEventListener('click', getReadNewsId);

export default function getReadNewsId(event) {

  const date = new Date(); 
  console.log("🚀 ~ getReadedNewsId ~ date:", date);
  

  if(event.target.classList.contains("wrap-info__link")){ 

    event.preventDefault();
    console.log('I"m button');

    const id=event.target.closest(".js-card-item").dataset.targetId

    saveReadNew(id);
  }
}

function saveReadNew(id) {

  const readNew = savedApiData.find(item=>item.id===id)

  if (readNews.length<1){
    readNews.push(readNew); 
} 

if(readNews.every(el=>Number(el.id)!==Number(id))) {
  readNews.push(readNew); 
}
console.log(readNews); 
localStorage.setItem(STORAGE_KEY, JSON.stringify(readNews));
}
  // *******************************
// import { savedApiData } from './read'; 


// const STORAGE_KEY = 'readNews';
// console.log("🚀 ~ STORAGE_KEY:", STORAGE_KEY); 
// // const readNews = [];
// let valuesStorage = {}; 
// const gallery = document.querySelector('.gallery'); 
// console.log("🚀 ~ gallery:", gallery); 


// gallery.addEventListener('click', getReadNewsId);

// export default function getReadNewsId(event) {

//   valuesStorage = {
//     readNews: [],
//     readDate: new Date().toLocaleDateString(),
//   }
//   // const date = new Date(); 
//   // console.log("🚀 ~ getReadedNewsId ~ date:", date);
  
// // const readDate = new Date().toLocaleDateString(); 
// // console.log("🚀 ~ getReadNewsId ~ date:", readDate); 


//   if(event.target.classList.contains("wrap-info__link")){ 

//     event.preventDefault();

//     const id=event.target.closest(".js-card-item").dataset.targetId

//     saveReadNew(id);
//   }
// }

// function saveReadNew(id) {

//   const readNew = savedApiData.find(item=>item.id===id)

//   if (valuesStorage.readNews.length<1){
//     valuesStorage.readNews.push(readNew); 
// } 

// if(valuesStorage.readNews.every(el=>Number(el.id)!==Number(id))) {
//   valuesStorage.readNews.push(readNew); 
// }
// console.log(valuesStorage.readNews); 
// localStorage.setItem(STORAGE_KEY, JSON.stringify(valuesStorage));
// }



// ***********************************



