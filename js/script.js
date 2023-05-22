let contacts = document.getElementById('contacts');   
let contacts_menu = document.getElementById('contacts-menu'); 

contacts.addEventListener("click", function(){
  contacts_menu.classList.toggle("open_menu");
});
   


fetch('./js/goods.json')
  .then(response => response.json())
  .then(data => {

    var galleryHtml = '<div class="gallery d-flex flex-wrap justify-content-around">';
    data.forEach(image => {
      galleryHtml += `
      <div class="favourite-row ">
        <div class="favourite-item ">         
          <img src="${image.src}" alt="${image.alt}" data-src="${image.src}">
          <div class="favourite-caption">${image.caption}</div>
        </div>
       </div>
      `;
    });
    galleryHtml += '</div>';


    document.querySelector('.favourite-container').innerHTML = galleryHtml;
  });

var gallery = document.querySelector('.favourite-container');
var modal = document.getElementById('modal');
var modalImage = document.getElementById('modal-image');
var modalClose = document.querySelector('.modal-close');

gallery.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
    var src = e.target.getAttribute('data-src');
    modalImage.src = src;
    modalImage.style.marginLeft = "auto";
    modalImage.style.marginTop = "20px";
    modalImage.style.display = "bock";
    modalImage.style.width = "60%";
    modal.style.display = 'block';
    modal.style.textAlign = 'center';
    }
    });

    modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
    if (e.target === modal) {
    modal.style.display = 'none';
    }
    }); 


