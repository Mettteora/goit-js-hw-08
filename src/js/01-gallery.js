// Добавьте импорты выше этой строки
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm.js';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ulGal = document.querySelector(`.gallery`);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="#">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`;
    })
    .join(``);
}

const test = createGallery(galleryItems);
ulGal.insertAdjacentHTML('afterbegin', test);
ulGal.addEventListener(`click`, zoomFunc);

function zoomFunc(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const activeImg = document.querySelector(`.is-active`);

  const swatchEl = evt.target;
  evt.target.classList.add(`is-active`);
  if (activeImg) {
    activeImg.classList.remove(`is-active`);
  }

  const lightbox = new SimpleLightbox({
    elements: [evt.target],
  });

  lightbox.on('close.simplelightbox', () => {
    swatchEl.classList.remove('is-active');
  });

  lightbox.open();

  console.log(evt.target.alt);
}

console.log(galleryItems);
