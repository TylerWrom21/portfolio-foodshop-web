//toggle icon navbar
let menuIcon = document.querySelector('#menubars');
let navbar = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
menuIcon.classList.toggle('fa-times');
navbar.classList.toggle('active');
// darklight
let theme = document.querySelector('#theme');
theme.onclick = () => {
    if(theme) {
        theme.classList.toggle('bxs-sun');
        document.body.classList.toggle('dark')
    } else {
        theme.classList.toggle('bxs-moon');
    }
}
//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            });
            // octive sektion for animate
            sec.classList.add('show-animate');
        }
        // if want to use animate repeat on scroll
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}


menuIcon.classList.remove('fa-times');
navbar.classList.remove('active');
// seach form
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
    document.querySelector('#merk').classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
    document.querySelector('#merk').classList.toggle('active');
}
// dishes card
function myFunction(x) {
    if (x.matches) { // If media query matches
        
        // Mengubah class pada semua elemen
        elements.forEach(function(element) {
            element.classList.add('changewidth');
        });
        // document.querySelectorAll('.box-container').classList.add('changewidth');
        // document.querySelectorAll('.full-width').classList.toggle('addclone');
    } else {
        // document.querySelectorAll('.box-container').classList.remove('changewidth');
        // document.querySelectorAll('.full-width').classList.remove('addclone');
        elements.forEach(function(element) {
            element.classList.remove('changewidth');
        });
    }
}



// Create a MediaQueryList object
let elements = document.querySelectorAll('.box-container');
let x = window.matchMedia("(max-width: 700px)")
let duplicadeSlide = true;
  
  // Call listener function at run time
myFunction(x);
  
  // Attach listener function on state changes
x.addEventListener("change", function() {
    myFunction(x);
});

// testing slide 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
    breakpoint: {
        0: {
            sliderPerView: 1,
        },
        640: {
            sliderPerView: 2,
        },
        768: {
            sliderPerView: 2,
        },
        1024: {
            sliderPerView: 3,
        },
    },
  });
