
import { savedApiData } from './cards'; 

  const STORAGE_KEY = 'readNews';
   
  let readNews = [];
 
  
  const gallery = document.querySelector('.gallery'); 
  
  gallery.addEventListener('click', getReadNewsId);
  
  export default function getReadNewsId(event) {
   
    readDate = new Date().toLocaleDateString().replaceAll('.', '/'); 
    //  console.log("🚀 date:", readDate); 
  
    if(event.target.classList.contains("wrap-info__link")){ 
    
      event.currentTarget.children.style.opacity = '40%';

      event.preventDefault();
  
      const id=event.target.closest(".js-card-item").dataset.targetId
  
      saveReadNew(id);
    }
  }
  
  export function saveReadNew(id) {

    const readNew = savedApiData.find(item=>item.id===id)
 
    readNew.readDateNew = readDate; 

    if (readNews.length<0){
      readNews.push(readNew); 
  } 
  
  if(readNews.every(el=>Number(el.id)!==Number(id))) {
    readNews.push(readNew); 

    localStorage.setItem(STORAGE_KEY, JSON.stringify(readNews));

  } 
  } 
// // ***********************************
