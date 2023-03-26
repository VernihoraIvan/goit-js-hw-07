import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const innerImg = (liItem.innerHTML = <img src="${galleryItem.preview}"></img>);
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
  data-source="${original}"
  >`;

  // ul.append(liItem);
  return (markup += `<li class = "gallery__item">${liItem.innerHTML}</li>`);
});
const splitted = markup.split(",");
console.log(splitted);

list.innerHTML = splitted;

list.onclick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const datasetSource = event.target.dataset.source;
  const source = `
		<img src="${datasetSource}" width="800" height="600">
	`;
  console.log(source);
  const instance = basicLightbox.create(source, {
    onShow: (instance) => window.addEventListener("keydown", onEscKeydown),
    onClose: (instance) => window.removeEventListener("keydown", onEscKeydown),
  });
  instance.show((instance) => console.log("finished show()", instance));
  function onEscKeydown(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }
};
