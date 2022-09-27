import { groupSeven } from '../js/students-base.js';
import Swiper from 'swiper/swiper-bundle.min.js';
// import Swiper styles
import 'swiper/swiper-bundle.min.css';
import '../sass/components/_modal_students.scss';

const openModalBtn = document.querySelector('[data-students-modal-open]');
const modal = document.querySelector('[data-students-modal]');
const closeModalBtn = document.querySelector('[data-students-modal-close]');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

const cards = document.querySelector('.card-wrapper');

const makeCard = ({ photo, name, description }) => {
  return `
  <div class="swiper-slide card">
      <div class="image-content">
        <div class="card-image">
          <img src="${photo}" alt="" class="card-img" />
        </div>
      </div>
      <div class="card-content">
        <h2 class="name">${name}</h2>
        <p class="description">
          ${description}
        </p>
         <ul class="social-links list">
                <li class="social-links__item">
                  <a class="social-links__link" href="">🐁</a>
                </li>
                <li class="social-links__item">
                  <a class="social-links__link" href="">🕊</a>
                </li>
                <li class="social-links__item">
                  <a class="social-links__link" href="">🐋</a>
                </li>
                <li class="social-links__item">
                  <a class="social-links__link" href="">🦖</a>
                </li>
          </ul>
      </div>
    </div>
  `;
};

const makeCardsList = groupSeven.map(makeCard).join('');
cards.insertAdjacentHTML('beforeend', makeCardsList);

const swiper = new Swiper('.slide-container', {
  slidesPerView: 3,
  spaceBetween: 30,

  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    520: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    950: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
