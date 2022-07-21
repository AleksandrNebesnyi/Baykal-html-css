// Закрытие галереи


  


//  document.addEventListener('DOMContentLoaded', callback)

if (document.load) {
    const refs = {
        gallarySection:document.querySelector(".gallery-box-section"),
        galleryContainer: document.querySelector(".js-gallery"),
        galleryCloseBtn:document.querySelector(".js-gallery-btn-close")
      
      };
      console.log(refs.galleryCloseBtn);
   
  function closeGallary(e) {
 
  console.log(e.target.nodeName);
    
  }
  refs.closeGalleryBtn.addEventListener('click', closeGallary());
} 