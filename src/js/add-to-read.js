// import { savedApiData } from './read'; 


// const STORAGE_KEY = 'readNews';
// console.log("🚀 ~ STORAGE_KEY:", STORAGE_KEY); 
// const readNews = [];
// const gallery = document.querySelector('.gallery'); 
// console.log("🚀 ~ gallery:", gallery); 


// gallery.addEventListener('click', getReadNewsId);

// export default function getReadNewsId(event) {

//   // const date = new Date(); 
//   // console.log("🚀 ~ getReadedNewsId ~ date:", date);
//   const dateRead = Date.now(); 


// console.log("🚀 ~ getReadNewsId ~ dateRead:", dateRead);

//   if(event.target.classList.contains("wrap-info__link")){ 

//     event.preventDefault();
//     console.log('I"m button');

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
  import { savedApiData } from './read'; 


const STORAGE_KEY = 'readNews';
console.log("🚀 ~ STORAGE_KEY:", STORAGE_KEY); 
const readNews = [];
const gallery = document.querySelector('.gallery'); 
console.log("🚀 ~ gallery:", gallery); 


gallery.addEventListener('click', getReadNewsId);

export default function getReadNewsId(event) {

  // const date = new Date(); 
  // console.log("🚀 ~ getReadedNewsId ~ date:", date);
  const dateRead = Date.now(); 


console.log("🚀 ~ getReadNewsId ~ dateRead:", dateRead);

  if(event.target.classList.contains("wrap-info__link")){ 

    event.preventDefault();
    console.log('I"m button');

    const id=event.target.closest(".js-card-item").dataset.targetId

    saveReadNew(id);
  }
}

function saveReadNew(id) {
//  let valuesStorage = {
//     readedNews: [],
//     date: new Date(),
//   }

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




// ***********************************
// function addLeadingZero(value) {
//   return String(value).padStart(2, '0'); 
//     }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { hours, minutes, seconds };
// }

// console.log(convertMs()); 