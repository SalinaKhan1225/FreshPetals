// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
// }


// window.onscroll = () =>{
//   searchForm.classList.remove('active');
//   shoppingCart.classList.remove('active');
//   loginForm.classList.remove('active');
//   navbar.classList.remove('active');
// }


let preveiwContainer = document.querySelector('.flower-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.flower-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


var swiper = new Swiper(".recipe-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       },
    },
 });


var swiper = new Swiper(".blogs-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoHeight:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       },
    },
 });

 var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });