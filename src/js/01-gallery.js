// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
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

const imgEl = document.querySelector(`.gallery__image`);

function zoomFunc(evt) {
  // if (evt.target.classList.contains(`is-active`)) {
  //   evt.target.classList.remove(`is-active`);
  //   console.log(`zdarova`);
  // }

  const activeImg = document.querySelector(`.is-active`);

  const swatchEl = evt.target;
  evt.target.classList.add(`is-active`);
  if (activeImg) {
    activeImg.classList.remove(`is-active`);
  }

  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${evt.target.src}">
	`
    )
    .show();

  console.log(evt.target.alt);
}

console.log(galleryItems);

console.log(galleryItems);
