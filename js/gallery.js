export const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ]

const refs = {
  gallarySection:document.querySelector(".gallery-box-section"),
  galleryContainer: document.querySelector(".js-gallery"),
  modal: document.querySelector(".js-lightbox"),
  overlay: document.querySelector(".lightbox__overlay"),
  lightboxContentEl: document.querySelector(".lightbox__content"),
  modalCloseBtn: document.querySelector('[data-action="close-lightbox"]'),
  modalImage: document.querySelector(".lightbox__image"),
  modalOpenBtn:document.querySelector(".list-manager__link"),

};




// ?????????????? ???????????????? ??????????????
function createGalleryItem(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `
    <li class="gallery__item">
        <a
            class="gallery__link"
            href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
    `
    )
    .join("");
}



function createBtn (text){

  return `<button class="form__send-button js-gallery-btn-close" id="1" >${text}</button>`
}

//  C?????????????? ?????????????? ???? ???????????? ????????????????

const renderingMarkup = function (markup) {
  refs.galleryContainer.insertAdjacentHTML("beforeend", markup);
};



const renderGallery= function(){
    renderingMarkup(createGalleryItem(galleryItems));
    renderingMarkup(createBtn('??????????????'));
}; 
refs.modalOpenBtn.addEventListener('click', renderGallery);



const galleryCloseBtn=document.getElementById('1');
console.log("btn",galleryCloseBtn);

// ???????????????? ??????????????

refs.closeGalleryBtn.addEventListener('click', closeGallary());

function closeGallary() {
   refs.gallarySection.remove();     
   };


//  document.addEventListener('DOMContentLoaded', callback)

// if (window.onload) {
//   function closeGallary(e) {
 
//   console.log(e.target.nodeName);
    
//   }
//   refs.closeGalleryBtn.addEventListener('click', closeGallary());
// } 




//  ???????????????? ???????????????????? ???????? ???? ?????????? ?? img
refs.galleryContainer.addEventListener("click", onOpenModal);

function onOpenModal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  window.addEventListener("keydown", onEscKeyPress);
  refs.modal.classList.add("is-open");
  refs.modalImage.src = event.target.dataset.source;
  refs.modalImage.alt = event.target.alt;
}
// ???????????????? ?????????????? ???? Btn
refs.modalCloseBtn.addEventListener("click", onCloseModal);

function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  refs.modal.classList.remove("is-open");
  //?????????????? ???????????????? ???????????????? src ???????????????? img.lightbox__image
  refs.modalImage.srs = "";
  refs.modalImage.alt = "";
  refs.modalImage.id = "";
}
// ???????????????? ?????????????? ???? ?????????? ?? Backdrop
refs.overlay.addEventListener("click", onBackdropClick);

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    console.log("???????????????? ???????????? ?? ??????????????!!!!");
    onCloseModal();
  }
}

// ???????????????? ?????????????? ???? ?????????? ???? ESC

window.addEventListener("keydown", onEscKeyPress);

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
// ???????????????????????? ???????????????? ?? ?????????????????? ???????? ?????????????????? left, right
const dataSources = galleryItems.map((image) => image.original);


document.addEventListener("keydown", (e) => {
  const currentIndex = dataSources.indexOf(refs.modalImage.src);
  console.log(currentIndex);
  if (e.key === "ArrowLeft") {
    leftClick(currentIndex);
  } else if (e.key === "ArrowRight") {
    rightClick(currentIndex);
  }
});

function leftClick(currentIndex) {
  let nextIndex = currentIndex - 1;
  if (nextIndex === -1) {
    nextIndex = dataSources.length - 1;
  }
  refs.modalImage.src = dataSources[nextIndex];
}

function rightClick(currentIndex) {
  let nextIndex = currentIndex + 1;
  if (nextIndex === dataSources.length) {
    nextIndex = 0;
  }
  refs.modalImage.src = dataSources[nextIndex];
}


