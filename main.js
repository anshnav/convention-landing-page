const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.arrownext',
      prevEl: '.arrowprev',
    },

    // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    // when window width is >= 1024px
    1100: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      // when window width is >= 1400px
      1400: {
        slidesPerView: 5,
        spaceBetween: 40
      },
  }
  
   
  });



  // ---Register The gsap scrollTo plugin---//
gsap.registerPlugin(ScrollToPlugin);

// ---Scroll to sections on clicking---//

document.getElementById('getyourcover').onclick = function() {scrolltosection()};
document.getElementById('freeship').onclick = function() {scrolltosection2()};

function scrolltosection(){
  gsap.to(window, {duration: 1, scrollTo: "#pcoversection"});
}


function scrolltosection2(){
  gsap.to(window, {duration: 1, scrollTo: "#freeshippingsection"});
}
