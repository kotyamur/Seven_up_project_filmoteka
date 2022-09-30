let intervalId = 0; 
const scrollButton = document.querySelector('.back-to-top');
function scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
}
function scrollToTop() {
    intervalId = setInterval(scrollStep, 16.66);
}
function scrollHiden(){
    if(window.scrollY < 400){
        scrollButton.style.display = 'none'
    }else{
        scrollButton.style.display = ''
    }
    if(window.scrollY < 700){  
        scrollButton.classList.add('hiden')
        console.log('asas')
    }else{
        scrollButton.classList.remove('hiden')
    }
}
scrollButton.addEventListener('click', scrollToTop);
window.addEventListener('scroll', scrollHiden)






