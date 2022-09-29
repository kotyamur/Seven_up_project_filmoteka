// import {Spinner} from 'spin.js';



// let target = document.getElementById('foo');
// const spinner = new Spinner().spin(target);
// window.onload = async function(){
//   try{
//   await new Spinner().stop(target);
//   console.log(spinner)
//   }catch (error) {
//     console.log(error);
//   }
// }
document.addEventListener('DOMContentLoaded', () => {

  const mediaFiles = document.querySelectorAll('body');
  let i = 0

  Array.from(mediaFiles).forEach((file, index) => {
      file.onload = () => {
          i++

          // percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1)

          if(i === mediaFiles.length) {
              preloader.classList.add('preloader--hide')
              // percents.innerHTML = 100
          }
      }
  })

})