import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// const clickOpenModalEl = '';
const divEl = document.querySelector('div');
const cardsItem = createLiElement(galleryItems);

divEl.classList.add('gallery');
divEl.insertAdjacentHTML('beforeend', cardsItem);
console.log(divEl);

const backdropCreate = document.createElement('div');
divEl.after(backdropCreate);
backdropCreate.classList.add('backdrop');
// const modalEl = '<div class="modal"><button type="button" class="modal-button" data-action="close-modal">Close</button></div>';
backdropCreate.insertAdjacentHTML(
  'beforeend',
  '<div class="modal"><button type="button" class="modal-button" data-action="close-modal">Close</button></div>',
);



function createLiElement(galleryItems) {
  // event.preventDefault();
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
 <div class="gallery__item">
  <a class="gallery__link" data-action="open-modal" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

////////модальне вікно
const openModalButton = document.querySelector('[data-action="open-modal"]');
const closeModalButton = document.querySelector('[data-action="close-modal"]');
console.log(closeModalButton);
const backdropEl = document.querySelector('.backdrop');
console.log(backdropEl, 'backdopEl');

closeModalButton.addEventListener('click', onCloseModal);
openModalButton.addEventListener('click', onOpenModal);
backdropEl.addEventListener('click', onBackdropCloseModal);

function onOpenModal() {
    window.addEventListener('keydown', onEscapePress)
  document.body.classList.add('show-modal');
}

function onCloseModal() {
     window.removeEventListener('keydown', onEscapePress)
    document.body.classList.remove('show-modal');
      const modalImage = document.querySelector('.modal > .gallery__image'); //.gallery__image
    console.log('close', modalImage);
    modalImage.remove();
}

function onBackdropCloseModal(event) {
    if (event.currentTarget === event.target) {
        onCloseModal();
    }
}

function onEscapePress(event) {
    if (event.code === 'Escape') {
        onCloseModal();
    }
    
}

/////////
divEl.addEventListener('click', clickOpenModal);

function clickOpenModal(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
 // console.log(event.target);
 const clickOpenModalEl = event.target;
  console.log(clickOpenModalEl.src);

  // clickOpenModalEl.src = parentClickOpenModalEl.href;
  // const parentBody = clickOpenModalEl.closest('body');
    onOpenModal();
  
    console.log(clickOpenModalEl.alt);
    //find galleryItems  alt === description
 const indexGalleryItems = galleryItems.findIndex(option => option.description === clickOpenModalEl.alt);
    console.log(indexGalleryItems);
    console.log(galleryItems[indexGalleryItems]);

    const modalEl = document.querySelector('.modal');
    console.log(modalEl);

    modalEl.insertAdjacentHTML('afterbegin', `<img class="gallery__image" src="${galleryItems[indexGalleryItems].original}"
      alt="${ galleryItems[indexGalleryItems].description}" width="640" height="320">`); 
//.modal-image 
}

