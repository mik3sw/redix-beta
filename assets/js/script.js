// AOS.init();


const gridItems = document.querySelectorAll('.card');

function revealGridItems() {
  gridItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
    //   item.style.transform = 'scale(1)'; 
    }, index * 100); // Regola la velocità dell'animazione cambiando il valore di 500 (in millisecondi)
  });
}

revealGridItems();

document.getElementById('contactus-btn1').addEventListener('click', function() {
  window.location.href = 'https://www.redix.it/en/Home/Contatti';
});

document.getElementById('contactus-btn2').addEventListener('click', function() {
  window.location.href = 'https://www.redix.it/en/Home/Contatti';
});

document.getElementById('ourvalues').addEventListener('click', function() {
  window.location.href = 'https://www.redix.it/en/Home/ChiSiamo';
});

document.getElementById('ourstory').addEventListener('click', function() {
  window.location.href = 'https://www.redix.it/en/Home/Storia';
});

document.getElementById('joinus').addEventListener('click', function() {
  window.location.href = 'https://www.redix.it/en/Home/LavoraConNoi';
});




// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector(".trustedby-slider");
//     const slider2 = document.querySelector(".trustedby-slider2");
//     const trustedBySection = document.getElementById("trustedby");

//     let isSliderVisible = false;

//     function checkSliderVisibility() {
//         const rect = trustedBySection.getBoundingClientRect();
//         isSliderVisible = rect.top < window.innerHeight && rect.bottom >= 0;
//     }

//     window.addEventListener("scroll", function () {
//         checkSliderVisibility();

//         if (isSliderVisible) {
//             const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            
//             // Applica la trasformazione CSS per muovere gli slider
//             slider.style.transform = `translateX(-${scrollPercentage}%)`;
//             slider2.style.transform = `translateX(${-70 + scrollPercentage}%)`; // Nota l'inversione del segno
//         }
//     });

//     // Verifica la visibilità al caricamento iniziale
//     checkSliderVisibility();
// });
//gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".trustedby-slider");
//   const slider2 = document.querySelector(".trustedby-slider2");
//   const trustedBySection = document.getElementById("trustedby");

//   let isSliderVisible = false;

//   function checkSliderVisibility() {
//     if (!trustedBySection) return;
//     const rect = trustedBySection.getBoundingClientRect();
//     isSliderVisible = rect.top < window.innerHeight && rect.bottom >= 0;
//   }

//   function debounce(func, wait = 10, immediate = true) {
//     let timeout;
//     return function() {
//       const context = this, args = arguments;
//       const later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       const callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   }

//   function animateSliders() {
//     if (isSliderVisible) {
//       requestAnimationFrame(() => {
//         const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
//         gsap.to(slider, { x: `-${scrollPercentage}%`, duration: 0.5, ease: "power1.out" });
//         gsap.to(slider2, { x: `${-70 + scrollPercentage}%`, duration: 0.5, ease: "power1.out" });
//       });
//     }
//   }

//   const handleScroll = debounce(function() {
//     checkSliderVisibility();
//     animateSliders();
//   }, 10);

//   window.addEventListener("scroll", handleScroll);

//   // Verifica la visibilità al caricamento iniziale e forza l'animazione
//   checkSliderVisibility();
//   animateSliders();
// });












// const hoverDiv = document.querySelector('.hero-text-bottom-right');
// const gifOverlay = document.querySelector('.gif-overlay');
// const gifImage = gifOverlay.querySelector('img');

// hoverDiv.addEventListener('mousemove', (event) => {


//     const divLeftPosition = hoverDiv.offsetLeft + hoverDiv.parentElement.offsetLeft - window.scrollX;
//     const divTopPosition = hoverDiv.offsetTop + hoverDiv.parentElement.offsetTop - window.scrollY;

    

//     const mouseX = event.clientX;
//     const mouseY = event.clientY;
  
//     const overlayWidth = gifOverlay.offsetWidth;
//     const overlayHeight = gifOverlay.offsetHeight;
    
  
//     const offsetX = overlayWidth / 2;
//     const offsetY = overlayHeight / 2;
  
//     // console.log(mouseX - offsetX);
//     gifOverlay.style.left = `${mouseX - offsetX - divLeftPosition}px`;
//     gifOverlay.style.top = `${mouseY - offsetY - divTopPosition}px`;
//   });
  
//   hoverDiv.addEventListener('mouseenter', () => {
//     gifOverlay.style.display = 'block';
//   });
  
//   hoverDiv.addEventListener('mouseleave', () => {
//     gifOverlay.style.display = 'none';
//   });








// const $bigBall = document.querySelector('.cursor__ball--big');
// const $smallBall = document.querySelector('.cursor__ball--small');
// const $hoverables = document.querySelectorAll('.hoverable');


// let initialScrollY = 0;
// //initialScrollY = window.scrollY;


// // Listeners
// document.body.addEventListener('mousemove', onMouseMove);
// for (let i = 0; i < $hoverables.length; i++) {
//   $hoverables[i].addEventListener('mouseenter', onMouseHover);
//   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
// }

// // Move the cursor
// function onMouseMove(e) {
//     TweenMax.to($bigBall, .4, {
//       x: e.pageX - 15,
//       y: e.pageY - 15 - (window.scrollY - initialScrollY)
//     });
  
//     TweenMax.to($smallBall, .1, {
//       x: e.pageX - 5,
//       y: e.pageY - 7 - (window.scrollY - initialScrollY)
//     });
//   }
  

// // Hover an element
// function onMouseHover() {
//   TweenMax.to($bigBall, .3, {
//     scale: 4 });

// }
// function onMouseHoverOut() {
//   TweenMax.to($bigBall, .3, {
//     scale: 1 });

// }





// let currentSlide = 0;
// const slides = document.querySelectorAll('.text-container-card');
// const indicators = document.querySelectorAll('.card-carousel-indicator');
// const imageCard = document.querySelector('.image-card');

// const imageCards = document.querySelectorAll('.image-card-bg');


// //const bgs = ["./assets/images/bg2.jpg", "./assets/images/bg3.jpg", "./assets/images/bg4.jpg"]

// function showSlide(slideIndex) {
//     if (slideIndex < 0) {
//         slideIndex = slides.length - 1;
//     } else if (slideIndex >= slides.length) {
//         slideIndex = 0;
//     }

//     slides.forEach(slide => {
//         slide.style.transform = `translateX(-${slideIndex * 100}%)`;
//     });

//     imageCards.forEach(imgc => {
//         imgc.style.transform = `translateX(-${slideIndex * 100}%)`;
//     });

    

//     indicators.forEach((indicator, index) => {
//         if (index === slideIndex) {
//             indicator.classList.add('card-carousel-indicator-active');
//         } else {
//             indicator.classList.remove('card-carousel-indicator-active');
//         }
//     });

//     currentSlide = slideIndex;
// }

// function nextSlide() {
//     showSlide(currentSlide + 1);
// }

// let slideInterval = setInterval(nextSlide, 7000);

// indicators.forEach((indicator, index) => {
//     indicator.addEventListener('click', () => {
//         clearInterval(slideInterval);
//         showSlide(index);
//         slideInterval = setInterval(nextSlide, 7000);
//     });
// });
