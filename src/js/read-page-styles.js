// Для Альбины

const dateBlockContainer = document.getElementById('readNews');
console.log("🚀 ~ dateBlockContainer:", dateBlockContainer); 

dateBlockContainer.addEventListener('click', read);

function read(event) {
    if(event.target.classList.contains('date-title')) {
        event.target.nextSibling.classList.toggle('visually-hidden');
        console.log(event.target.nextSibling);
        console.log('Hello'); 
        event.target.classList.toggle('rotate'); 
    }
}

