import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

function createGalleryLink(links) {
  return links
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
    `;
    })
    .join('');
}

const galleryEl = document.querySelector('.gallery');
galleryEl.innerHTML = createGalleryLink(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
