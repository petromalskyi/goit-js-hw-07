import { galleryItems } from './gallery-items.js';
// Change code below this lineconsol

console.log(galleryItems);

const divEl = document.querySelector('.gallery');
const cardsItem = createElement(galleryItems);

//  divEl.classList.add('gallery');
divEl.insertAdjacentHTML('beforeend', cardsItem);

function createElement(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li><a class="gallery__item" href="${original}" alt="${description}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a></li>`;
    })
    .join('');
}

divEl.addEventListener('click', clickOpenModal);

function clickOpenModal(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  //     const clickOpenModalEl = event.target;
  //   const indexGalleryItems = galleryItems.findIndex(
  //     option => option.description === clickOpenModalEl.alt,
  //   );

  let gallery = new SimpleLightbox('.gallery a');

  gallery.on('show.simplelightbox', function () {});
}
