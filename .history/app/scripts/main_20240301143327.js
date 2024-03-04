// window.addEventListener("load", function () {
//   const toggle = document.querySelector(".menu-toggle");
//   const menu = document.querySelector(".menu");
//   toggle && toggle.addEventListener("click", handleToggleMenu);
//   function handleToggleMenu(e) {
//     menu && menu.classList.add("is-show");
//   }
//   document.addEventListener("click", handleClickOutside);
//   function handleClickOutside(e) {
//     if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
//       return;
//     menu && menu.classList.remove("is-show");
//   }
// });

// $(document).ready(function () {
//   $(".dangki-carousel").slick({
//     prevArrow: 
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });
document.addEventListener("DOMContentLoaded", function() {
  let slides = document.querySelectorAll(".carousel-slide");
  let currentSlide = 0;
  const slideInterval = 5000; // Thời gian chuyển đổi slide (milliseconds)

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  let slideIntervalID = setInterval(nextSlide, slideInterval);
});
