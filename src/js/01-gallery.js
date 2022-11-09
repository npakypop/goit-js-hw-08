
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items.js';
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryRef = document.querySelector('.gallery');
const galleryImg = createGallery(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryImg);
// galleryRef.addEventListener('click', onGalleryItem);

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    enableKeyboard: true,
});


function createGallery(items) { 
    return items.map(({ preview, original, description }) => {
        return ` 
        <div class="gallery__item">
        <a  href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
        </a>
        </div>
        `;
    }).join('');
};


console.log(galleryItems);
console.log(galleryItems);
