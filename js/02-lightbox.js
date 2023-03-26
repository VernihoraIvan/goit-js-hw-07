import { galleryItems } from "./gallery-items.js";
// Change code below this line
let markup = ``;
const list = document.querySelector(".gallery");
galleryItems.forEach(({ original, preview, description }) => {
  const liItem = document.createElement("li");
  console.log(liItem);
  liItem.innerHTML = `<a class="gallery__link" href="${original}">
  <img 
  class = "gallery__image"
  src="${preview}" 
  alt ="${description}" 
  >`;

  // ul.append(liItem);
  return (markup += `<li class = "gallery__item">${liItem.innerHTML}</li>`);
});
const splittedMarkup = markup.split(",");

list.innerHTML = splittedMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
