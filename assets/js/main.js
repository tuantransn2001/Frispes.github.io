const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Header modal hanlder
const ListOpenBtn = $('.navigation__bar__icon');
const ListCloseBtn = $('.tablet__navigation__close__button__wrapper');
const NavModal = $('.tablet__navigation__modal');
const NavModalClose = $('.tablet__navigation__modal__close');
ListOpenBtn.onclick = function(){
  NavModal.classList.add('active');
  NavModalClose.style = `display: block`;
}
ListCloseBtn.onclick = function(){
  NavModal.classList.remove('active');
  NavModalClose.style = `display: none`;
}
NavModalClose.onclick = function(){
  NavModal.classList.remove('active');
  NavModalClose.style = `display: none`;
}

// Slider Handle


var ourSpace = new Swiper(".ourSpace", {
  slidesPerView: 3,
  spaceBetween: 0,
  freeMode: true,
});

var frispesGallery = new Swiper(".frispesGallery", {
  slidesPerView: 3,
  spaceBetween: 0,
  freeMode: true,
});

var review = new Swiper(".review", {
  slidesPerView: 2,
  spaceBetween: 0,
  freeMode: true,
});
